import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

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

  // Check approval status for authenticated users accessing protected routes
  if (user && !isPublic && pathname !== '/pending') {
    const { data: profile } = await supabase
      .from('profiles')
      .select('approved')
      .eq('user_id', user.id)
      .single()

    if (profile && !profile.approved) {
      return NextResponse.redirect(new URL('/pending', request.url))
    }
  }

  // Top 2 reviewer is admin-only, except explicitly released sections
  if (pathname.startsWith('/top2')) {
    const isAdmin = user?.id === process.env.ADMIN_USER_ID || user?.email === process.env.ADMIN_EMAIL
    const releasedPaths = [
      '/top2/A-Visual-Biology/A-Subject-Exam.html',
      '/top2/A-Visual-Biology/A-Preboards-2025.html',
      '/top2/A-Visual-Biology/A-Preboards-Set2.html',
    ]
    const isReleased = releasedPaths.some(p => pathname === p)
    if (!isAdmin && !isReleased) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
