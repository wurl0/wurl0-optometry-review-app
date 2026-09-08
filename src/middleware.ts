import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { isAdmin, canOpenItem, isAsset, itemForPath, type Access } from '@/lib/access'

const SUPABASE_TIMEOUT_MS = 4000

// Served with a 503 to every non-admin while maintenance mode is on. Deliberately
// a bare, generic technical outage page (no branding), so it reads as the server
// being down rather than an intentional block.
const MAINTENANCE_HTML =
  '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' +
  '<title>503 Service Unavailable</title>' +
  '<style>html,body{height:100%;margin:0}body{font-family:-apple-system,BlinkMacSystemFont,' +
  '"Segoe UI",system-ui,sans-serif;background:#fff;color:#111;display:flex;align-items:center;' +
  'justify-content:center}main{text-align:center;padding:24px}h1{font-size:20px;font-weight:600;' +
  'margin:0 0 8px}p{font-size:14px;color:#666;margin:0}</style></head><body><main>' +
  '<h1>503 Service Unavailable</h1>' +
  '<p>The server is temporarily unable to handle the request.</p>' +
  '</main></body></html>'

// Auth paths that must keep working even during maintenance, so an admin can sign in.
const MAINTENANCE_AUTH_ENTRY = ['/login', '/auth/callback', '/forgot-password', '/reset-password']

// Reject if a Supabase call has not settled in time so the middleware can
// degrade gracefully instead of hanging until Vercel kills the request with a
// 504 (MIDDLEWARE_INVOCATION_TIMEOUT).
function withTimeout<T>(p: PromiseLike<T>, ms = SUPABASE_TIMEOUT_MS): Promise<T> {
  return Promise.race([
    Promise.resolve(p),
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('supabase-timeout')), ms)
    ),
  ])
}

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { pathname } = request.nextUrl

  const publicPaths = ['/login', '/signup', '/auth/callback', '/forgot-password', '/reset-password', '/pending', '/suspended', '/api/approve']
  const isPublic = publicPaths.some(p => pathname.startsWith(p))

  // Auth check with a hard ceiling: a slow/unreachable Auth server must not
  // hang the request. On timeout, treat the visitor as signed out and fail fast.
  let user: Awaited<ReturnType<typeof supabase.auth.getUser>>['data']['user'] = null
  try {
    const { data } = await withTimeout(supabase.auth.getUser())
    user = data.user
  } catch {
    return isPublic
      ? supabaseResponse
      : NextResponse.redirect(new URL('/login', request.url))
  }

  if (!user && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Maintenance mode. DB-backed flag (app_settings.maintenance_mode), toggled from
  // /admin. When on, every non-admin gets a bare 503; admins pass through untouched.
  // The sign-in paths stay open so an admin can still authenticate. Fail-open on any
  // error/timeout (including the table not existing yet) so a hiccup never takes the
  // app down for everyone.
  {
    const isEnvAdmin =
      !!user && (user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL)
    const onAuthEntry = MAINTENANCE_AUTH_ENTRY.some(p => pathname.startsWith(p))
    if (!isEnvAdmin && !onAuthEntry) {
      try {
        const { data: st } = await withTimeout(
          supabase.from('app_settings').select('maintenance_mode').eq('id', 1).single()
        )
        if (st && (st as { maintenance_mode?: boolean }).maintenance_mode) {
          return new NextResponse(MAINTENANCE_HTML, {
            status: 503,
            headers: { 'content-type': 'text/html; charset=utf-8', 'retry-after': '3600' },
          })
        }
      } catch {
        // Table missing / slow / failed: fail-open (app stays up).
      }
    }
  }

  // Approval gate. Kept on its own query so it never depends on the newer
  // tier/grants columns (deploy order vs the SQL migration cannot break it).
  if (user && !isPublic && pathname !== '/pending') {
    try {
      const { data: ap } = await withTimeout(
        supabase.from('profiles').select('approved').eq('user_id', user.id).single()
      )
      if (ap && !ap.approved) {
        return NextResponse.redirect(new URL('/pending', request.url))
      }
    } catch {
      // Slow/failed approval check: let the request continue (matches the
      // pre-existing behavior when this query returns an error) rather than
      // blocking to a 504.
    }
  }

  // Suspension gate. Deliberately a separate query from the approval gate above,
  // so if the `suspended` column does not exist yet (migration not run) this
  // query erroring cannot disturb the approval check. Fail-open on error/timeout,
  // matching the approval gate.
  if (user && !isPublic && pathname !== '/suspended') {
    try {
      const { data: su } = await withTimeout(
        supabase.from('profiles').select('suspended').eq('user_id', user.id).single()
      )
      if (su && (su as { suspended?: boolean }).suspended) {
        return NextResponse.redirect(new URL('/suspended', request.url))
      }
    } catch {
      // Column missing / slow / failed: let the request continue.
    }
  }

  // Top 2 reviewer: gated by tier + per-user grants (admin sees all).
  if (pathname.startsWith('/top2')) {
    let tier = 'base'
    let grants: string[] = []
    if (user) {
      // If the migration has not run yet this select errors, leaving tier='base'
      // (only public items visible). A timeout leaves it at 'base' too. Safe by default.
      try {
        const { data: acc } = await withTimeout(
          supabase.from('profiles').select('tier, grants').eq('user_id', user.id).single()
        )
        const row = acc as { tier?: string; grants?: string[] } | null
        if (row) { tier = row.tier ?? 'base'; grants = row.grants ?? [] }
      } catch {
        // Slow/failed: leave tier='base' (only public items visible).
      }
    }
    const access: Access = {
      tier,
      grants,
      isEnvAdmin: user?.id === process.env.ADMIN_USER_ID || user?.email === process.env.ADMIN_EMAIL,
    }

    if (isAdmin(access)) return supabaseResponse
    if (isAsset(pathname)) return supabaseResponse  // css/js/fonts: rendering deps

    // The static cockpit index is admin-only; everyone else uses the dynamic /reviewer.
    if (pathname === '/top2' || pathname === '/top2/' || pathname === '/top2/index.html') {
      return NextResponse.redirect(new URL('/reviewer', request.url))
    }

    const item = itemForPath(pathname)
    if (item && canOpenItem(access, item)) return supabaseResponse

    return NextResponse.redirect(new URL('/', request.url))  // default deny
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
