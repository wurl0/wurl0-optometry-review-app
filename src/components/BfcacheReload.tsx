'use client'
import { useEffect } from 'react'

// Reload a page that was restored from the back/forward cache.
//
// Safari freezes the whole document on a back gesture and hands it back untouched, React
// state and all. Nothing on the page re-runs, so a screen showing server-rendered counts
// (the due count on home, XP, streak) comes back with whatever it said when you left it,
// however long ago that was. In a standalone web app there is no reload button to undo
// that, which is why the numbers used to need an app restart.
//
// `persisted` is true only for a bfcache restore, so a normal load never reloads twice.
export default function BfcacheReload() {
  useEffect(() => {
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) window.location.reload()
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  return null
}
