// Usage tracking for the static Top 2 pages. These are plain HTML served from
// /public, so the app's React <UsageTracker/> never runs here and the admin Usage
// tab could not see people once they left the (Next) cockpit for a static exam or
// reviewer. This mirrors <UsageTracker/>: a page_view on load, then a dwell
// heartbeat every 60s while the tab is visible.
//
// Fire-and-forget. The request carries the Supabase session cookie (same-origin);
// logged-out or failed calls no-op server-side, so tracking can never disrupt a page.
(function () {
  var HEARTBEAT_MS = 60000;

  function post(type) {
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: type, path: location.pathname }),
        keepalive: true,
        credentials: 'same-origin',
      }).catch(function () {});
    } catch (e) { /* ignore */ }
  }

  // Exams, preboards, the mock board, drills and the simulator are "doing" (working
  // questions); everything else here (reviewers, cards, guides, home) is "reading".
  function dwellType() {
    return /exam|preboard|mock-board|simulator|drill|quiz/i.test(location.pathname)
      ? 'doing'
      : 'reading';
  }

  post('page_view');
  var kind = dwellType();
  setInterval(function () {
    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
      post(kind);
    }
  }, HEARTBEAT_MS);
})();
