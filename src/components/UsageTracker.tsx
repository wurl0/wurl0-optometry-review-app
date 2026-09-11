'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Records how people move through the app for the admin Usage tab. Three signals:
//  - page_view: one per in-app navigation ("they opened X").
//  - reading: a heartbeat every 60s while sitting on a reviewer page and the tab is
//    visible ("they stayed and read"). This gives the main-app reviewer (/notes) the
//    same dwell signal the static Top 2 reviewers already get from scroll pings.
//  - doing: the same 60s heartbeat while on an exam/practice/drill/review page, so we
//    can tell time spent taking exams apart from time spent reading.
// Fire-and-forget; failures are swallowed and logged-out hits no-op server-side.
const SKIP = ['/login', '/signup', '/pending', '/suspended', '/forgot-password', '/reset-password', '/auth']
const HEARTBEAT_MS = 60000

function post(type: string, path: string) {
  try {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, path }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // ignore
  }
}

// Which dwell signal a page produces, if any. Reviewer pages count as reading; exam,
// practice, drill and SRS review pages count as "doing" (working questions). The
// reviewer check runs first so /reviewer is reading, not caught by the /review prefix.
function heartbeatType(path: string): 'reading' | 'doing' | null {
  if (path.startsWith('/notes/') || path.startsWith('/ole-prep/') || path.startsWith('/reviewer')) return 'reading'
  if (path.startsWith('/exam/') || path.startsWith('/practice/') || path.startsWith('/drill') || path.startsWith('/review')) return 'doing'
  return null
}

export default function UsageTracker() {
  const pathname = usePathname()
  const last = useRef<{ path: string; t: number } | null>(null)

  // Page view on every navigation.
  useEffect(() => {
    if (!pathname || SKIP.some(p => pathname.startsWith(p))) return
    const now = Date.now()
    // De-dupe rapid repeats of the same path (Strict Mode double-invoke, fast re-renders).
    if (last.current && last.current.path === pathname && now - last.current.t < 2000) return
    last.current = { path: pathname, t: now }
    post('page_view', pathname)
  }, [pathname])

  // Dwell heartbeat while on a reviewer (reading) or exam/practice/drill (doing) page.
  // First beat fires at 60s of dwell, so a quick bounce registers only as a page view.
  useEffect(() => {
    if (!pathname) return
    const kind = heartbeatType(pathname)
    if (!kind) return
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        post(kind, pathname)
      }
    }, HEARTBEAT_MS)
    return () => clearInterval(id)
  }, [pathname])

  return null
}
