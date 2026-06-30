import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { isAdmin, canOpenItem, isAsset, itemForPath, type Access } from '@/lib/access'

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

  const { data: { user } } = await supabase.auth.getUser()
  const { pathname } = request.nextUrl

  const publicPaths = ['/login', '/signup', '/auth/callback', '/forgot-password', '/reset-password', '/pending', '/api/approve']
  const isPublic = publicPaths.some(p => pathname.startsWith(p))

  if (!user && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Approval gate. Kept on its own query so it never depends on the newer
  // tier/grants columns (deploy order vs the SQL migration cannot break it).
  if (user && !isPublic && pathname !== '/pending') {
    const { data: ap } = await supabase
      .from('profiles')
      .select('approved')
      .eq('user_id', user.id)
      .single()
    if (ap && !ap.approved) {
      return NextResponse.redirect(new URL('/pending', request.url))
    }
  }

  // Top 2 reviewer: gated by tier + per-user grants (admin sees all).
  if (pathname.startsWith('/top2')) {
    let tier = 'base'
    let grants: string[] = []
    if (user) {
      // If the migration has not run yet this select errors, leaving tier='base'
      // (only public items visible). Safe by default.
      const { data: acc } = await supabase
        .from('profiles')
        .select('tier, grants')
        .eq('user_id', user.id)
        .single()
      const row = acc as { tier?: string; grants?: string[] } | null
      if (row) { tier = row.tier ?? 'base'; grants = row.grants ?? [] }
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
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
