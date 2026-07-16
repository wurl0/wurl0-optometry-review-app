// Reading progress for the Top 2 subject reviewers. Companion to _report.js / _srs.js.
//
// Does two separate jobs:
//
//   RESUME  - watches which section is on screen and records the furthest one reached.
//             Automatic, because a marker you have to remember to set is a marker you
//             lose your place with. Restores as a "Resume" bar at the top.
//
//   RECALL  - adds a "Cover and recall" control under every section. It hides the prose
//             and leaves the heading as the prompt; you write it out on paper, then
//             reveal and mark it solid or gaps. Opt-in on purpose: reading straight
//             through with no checkpoints stays a first-class way to use the page.
//
// Progress lives server-side (/api/reading) so an iPad, a phone and a laptop agree.
(function () {
  var subject = (decodeURIComponent(location.pathname).split('/').pop() || '').match(/^([A-H])-Reviewer/);
  if (!subject) return;
  var SUBJ = subject[1];
  var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#2e9e5b';

  var states = {};      // sectionId -> 'solid' | 'gaps'
  var saveTimer = null;
  var lastSent = null;

  function post(body) {
    return fetch('/api/reading', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({ subject: SUBJ }, body)),
      credentials: 'same-origin',
    }).catch(function () {});
  }

  function sections() {
    return Array.prototype.slice.call(document.querySelectorAll('section.sec[id]'));
  }
  function titleOf(sec) {
    var h = sec.querySelector('.sec-h');
    return h ? h.textContent.trim() : sec.id;
  }

  // ── progress count in the resume bar ──────────────────────────────────────
  function counts() {
    var total = sections().length, solid = 0, gaps = 0;
    for (var k in states) {
      if (states[k] === 'solid') solid++;
      else if (states[k] === 'gaps') gaps++;
    }
    return { total: total, solid: solid, gaps: gaps };
  }

  function renderBar(position) {
    var c = counts();
    var bar = document.createElement('div');
    bar.id = 'waa-resume';
    bar.setAttribute('style', 'display:flex;align-items:center;gap:10px;flex-wrap:wrap;' +
      'margin:0 0 18px;padding:11px 14px;border:1px solid #d9dee5;border-radius:10px;' +
      'background:#fff;font:13px/1.4 -apple-system,"Segoe UI",Roboto,sans-serif;');
    var label = '<span style="color:#5d6b7a">' + c.solid + ' of ' + c.total + ' sections recalled' +
      (c.gaps ? ' · <b style="color:#c0392b">' + c.gaps + ' with gaps</b>' : '') + '</span>';
    var btn = '';
    if (position && position.section_id && document.getElementById(position.section_id)) {
      btn = '<button id="waa-resume-btn" style="margin-left:auto;background:' + accent.trim() +
        ';color:#fff;border:none;border-radius:8px;padding:7px 13px;font:600 13px/1 inherit;cursor:pointer">' +
        'Resume: ' + (position.section_title || 'where you left off') + ' →</button>';
    }
    bar.innerHTML = label + btn;
    var main = document.querySelector('main') || document.body;
    main.insertBefore(bar, main.firstChild);
    var b = document.getElementById('waa-resume-btn');
    if (b) b.addEventListener('click', function () {
      var el = document.getElementById(position.section_id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function refreshBarLabel() {
    var bar = document.getElementById('waa-resume');
    if (!bar) return;
    var c = counts();
    var span = bar.querySelector('span');
    if (span) {
      span.innerHTML = c.solid + ' of ' + c.total + ' sections recalled' +
        (c.gaps ? ' · <b style="color:#c0392b">' + c.gaps + ' with gaps</b>' : '');
    }
  }

  // ── the recall checkpoint ─────────────────────────────────────────────────
  function mark(sec, state) {
    states[sec.id] = state;
    post({ state: { sectionId: sec.id, sectionTitle: titleOf(sec), state: state } });
    paintDot(sec, state);
    refreshBarLabel();
  }

  function paintDot(sec, state) {
    var h = sec.querySelector('.sec-h');
    if (!h) return;
    var dot = h.querySelector('.waa-dot');
    if (!dot) {
      dot = document.createElement('span');
      dot.className = 'waa-dot';
      dot.setAttribute('style', 'display:inline-block;width:8px;height:8px;border-radius:50%;margin-left:8px;vertical-align:middle;');
      h.appendChild(dot);
    }
    dot.style.background = state === 'solid' ? '#1d9e75' : '#c0392b';
    dot.title = state === 'solid' ? 'Recalled cleanly' : 'Had gaps';
  }

  function addCheckpoint(sec) {
    var body = document.createElement('div');
    var kids = Array.prototype.slice.call(sec.children).filter(function (c) {
      return !c.classList.contains('sec-h');
    });
    if (!kids.length) return;
    kids.forEach(function (k) { body.appendChild(k); });
    body.className = 'waa-body';
    sec.appendChild(body);

    var bar = document.createElement('div');
    bar.setAttribute('style', 'margin-top:12px;padding-top:10px;border-top:1px dashed #d9dee5;' +
      'font:13px/1.4 -apple-system,"Segoe UI",Roboto,sans-serif;');
    bar.innerHTML = '<button class="waa-cover" style="background:none;border:1px solid #d9dee5;' +
      'border-radius:8px;padding:6px 11px;font:600 12px/1 inherit;color:#5d6b7a;cursor:pointer">' +
      'Cover and recall</button>';
    sec.appendChild(bar);

    var prompt = document.createElement('div');
    prompt.setAttribute('style', 'display:none;padding:16px;border:1px dashed ' + accent.trim() +
      ';border-radius:10px;background:#fbfdfc;font:14px/1.6 -apple-system,"Segoe UI",Roboto,sans-serif;');
    prompt.innerHTML = '<div style="color:#5d6b7a;margin-bottom:10px">Close the screen. On paper, write everything you can recall about ' +
      '<b style="color:#1c2530">' + titleOf(sec) + '</b>. Then come back.</div>' +
      '<button class="waa-reveal" style="background:' + accent.trim() + ';color:#fff;border:none;border-radius:8px;' +
      'padding:7px 13px;font:600 13px/1 inherit;cursor:pointer">Reveal and compare</button>';
    sec.insertBefore(prompt, bar);

    var marks = document.createElement('div');
    marks.setAttribute('style', 'display:none;margin-top:10px;gap:8px;');
    marks.innerHTML = '<span style="font:13px/1.4 -apple-system,sans-serif;color:#5d6b7a;margin-right:6px">How did that go?</span>' +
      '<button class="waa-solid" style="background:none;border:1px solid #1d9e75;color:#1d9e75;border-radius:8px;padding:6px 11px;font:600 12px/1 inherit;cursor:pointer">Solid</button> ' +
      '<button class="waa-gaps" style="background:none;border:1px solid #c0392b;color:#c0392b;border-radius:8px;padding:6px 11px;font:600 12px/1 inherit;cursor:pointer">Had gaps</button>';
    sec.appendChild(marks);

    bar.querySelector('.waa-cover').addEventListener('click', function () {
      body.style.display = 'none';
      bar.style.display = 'none';
      prompt.style.display = 'block';
    });
    prompt.querySelector('.waa-reveal').addEventListener('click', function () {
      body.style.display = '';
      prompt.style.display = 'none';
      marks.style.display = 'block';
    });
    marks.querySelector('.waa-solid').addEventListener('click', function () {
      mark(sec, 'solid'); marks.style.display = 'none'; bar.style.display = '';
    });
    marks.querySelector('.waa-gaps').addEventListener('click', function () {
      mark(sec, 'gaps'); marks.style.display = 'none'; bar.style.display = '';
    });
  }

  // ── automatic position tracking ───────────────────────────────────────────
  // Records the section you are actually looking at, so reopening the page lands you
  // there instead of back at the top.
  function watchPosition() {
    // An observer fires once for everything it starts observing. At that moment you are
    // still at the top of the page, having just arrived — so without this flag, merely
    // OPENING the reviewer would save "section 1" and destroy the resume point you came
    // back for. Nothing is written until you actually move.
    var userMoved = false;
    window.addEventListener('scroll', function once() {
      userMoved = true;
      window.removeEventListener('scroll', once);
    }, { passive: true });

    var io = new IntersectionObserver(function (entries) {
      if (!userMoved) return;
      // Entries arrive in no guaranteed order, so pick the intersecting section nearest
      // the top of the viewport rather than trusting the last one in the list.
      var best = null, bestTop = Infinity;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var top = Math.abs(e.boundingClientRect.top);
        if (top < bestTop) { bestTop = top; best = e.target; }
      });
      if (!best) return;
      var id = best.id, t = titleOf(best);
      if (id === lastSent) return;
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        lastSent = id;
        post({ position: { sectionId: id, sectionTitle: t } });
      }, 1200); // debounce: scrolling past ten sections should not be ten writes
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections().forEach(function (s) { io.observe(s); });
  }

  function init(data) {
    states = (data && data.states) || {};
    sections().forEach(function (sec) {
      addCheckpoint(sec);
      if (states[sec.id]) paintDot(sec, states[sec.id]);
    });
    renderBar(data && data.position);
    watchPosition();
  }

  fetch('/api/reading?subject=' + SUBJ, { credentials: 'same-origin' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { init(d || {}); })
    .catch(function () { init({}); });
})();
