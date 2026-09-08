'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Records how people move through the app for the admin Usage tab. Two signals:
//  - page_view: one per in-app navigation ("they opened X").
//  - reading: a heartbeat every 60s while sitting on a reviewer page and the tab is
//    visible ("they stayed and read"). This gives the main-app reviewer (/notes) the
//    same dwell signal the static Top 2 reviewers already get from scroll pings.
// Fire-and-forget; failures are swallowed and logged-out hits no-op server-side.
const SKIP = ['/login', '/signup', '/pending', '/suspended', '/forgot-password', '/reset-password', '/auth']
const READING_MS = 60000

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

function isReviewer(path: string): boolean {
  return path.startsWith('/notes/') || path.startsWith('/ole-prep/') || path.startsWith('/reviewer')
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

  // Reading heartbeat while on a reviewer page. First beat fires at 60s of dwell, so a
  // quick bounce registers only as a page view, never as reading.
  useEffect(() => {
    if (!pathname || !isReviewer(pathname)) return
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        post('reading', pathname)
      }
    }, READING_MS)
    return () => clearInterval(id)
  }, [pathname])

  return null
}
