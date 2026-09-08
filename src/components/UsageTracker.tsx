'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Records a page_view on every in-app navigation so the admin Usage tab can see how
// people move through the app (not just exam outcomes). Fire-and-forget; failures are
// swallowed. Auth/marketing routes are skipped, and logged-out hits no-op server-side.
const SKIP = ['/login', '/signup', '/pending', '/suspended', '/forgot-password', '/reset-password', '/auth']

export default function UsageTracker() {
  const pathname = usePathname()
  const last = useRef<{ path: string; t: number } | null>(null)

  useEffect(() => {
    if (!pathname) return
    if (SKIP.some(p => pathname.startsWith(p))) return
    const now = Date.now()
    // De-dupe rapid repeats of the same path (Strict Mode double-invoke, fast re-renders).
    if (last.current && last.current.path === pathname && now - last.current.t < 2000) return
    last.current = { path: pathname, t: now }
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'page_view', path: pathname }),
        keepalive: true,
      }).catch(() => {})
    } catch {
      // ignore
    }
  }, [pathname])

  return null
}
