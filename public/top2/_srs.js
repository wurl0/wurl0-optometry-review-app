// Review-queue harvester for the Top 2 reviewers. Companion to _report.js: that one
// sends the final SCORE to /api/ole-attempt, this one sends the individual QUESTIONS to
// /api/srs/record so misses come back on the spaced-repetition schedule.
//
// Include after _report.js on any scored page, then call at the same moment you call
// reportOleScore():
//
//   reportSrsItems([{ stem, options, correct, explanation, wasCorrect }], 'C')
//
// `correct` is the 0-based index of the right option. `subjectCode` is optional — it is
// inferred from the filename the same way _report.js does it, and only needs passing on
// the cross-subject mocks where each item carries its own subject.
(function () {
  function meta() {
    const file = decodeURIComponent(location.pathname).split('/').pop() || '';
    let source = null;
    if (/Subject-Exam/i.test(file)) source = 'subject-exam';
    else if (/Preboards-2025/i.test(file)) source = 'preboards-2025';
    else if (/Preboards-Set2/i.test(file)) source = 'preboards-set2';
    else if (/Preboards-Set3/i.test(file)) source = 'preboards-set3';
    else if (/Mock-Board/i.test(file)) source = 'mock';
    const m = file.match(/^([A-H])-/);
    return { source: source, subjectCode: m ? m[1] : null };
  }

  // A results screen that says nothing gives no way to tell the queue ran, so the totals
  // come back as a small toast. Self-contained styles: these pages share no stylesheet.
  function toast(added, advanced) {
    if (!added && !advanced) return;
    var d = document.createElement('div');
    d.setAttribute('style', [
      'position:fixed', 'left:50%', 'transform:translateX(-50%)', 'bottom:76px', 'z-index:100000',
      'background:#11161c', 'color:#fff', 'border:1px solid #2b3742', 'border-radius:12px',
      'padding:11px 15px', 'box-shadow:0 6px 24px rgba(0,0,0,.32)', 'max-width:88vw',
      'font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif', 'font-size:13px',
      'line-height:1.45', 'opacity:0', 'transition:opacity .25s',
    ].join(';'));
    var msg = added
      ? '<b>🧠 ' + added + ' added to your review queue</b><br><span style="color:#9fb0c0">Back tomorrow, then on a widening gap.</span>'
      : '<b>🧠 ' + advanced + ' recalled on schedule</b><br><span style="color:#9fb0c0">Moved up a rung.</span>';
    if (added && advanced) msg += '<span style="color:#9fb0c0"> ' + advanced + ' moved up a rung.</span>';
    d.innerHTML = msg + '<a href="/review" style="color:#7cc4ff;text-decoration:none;font-weight:600;margin-left:10px">Queue →</a>';
    document.body.appendChild(d);
    requestAnimationFrame(function () { d.style.opacity = '1'; });
    setTimeout(function () {
      d.style.opacity = '0';
      setTimeout(function () { d.remove(); }, 300);
    }, 7000);
  }

  // Batched so a 150-item preboard does not exceed the endpoint's per-request cap.
  // Totals are summed across chunks so the toast reports the whole session, not a slice.
  function post(items) {
    var CHUNK = 200;
    var chunks = [];
    for (var i = 0; i < items.length; i += CHUNK) chunks.push(items.slice(i, i + CHUNK));

    Promise.all(chunks.map(function (c) {
      return fetch('/api/srs/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: c }),
        credentials: 'same-origin',
      }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
    })).then(function (results) {
      var added = 0, advanced = 0;
      results.forEach(function (r) {
        if (!r) return;
        added += (r.added || 0) + (r.reset || 0);
        advanced += r.advanced || 0;
      });
      toast(added, advanced);
    });
  }

  window.reportSrsItems = function (items, subjectCode) {
    if (!Array.isArray(items) || !items.length) return;
    var m = meta();
    var source = m.source;
    if (!source) return;

    var payload = [];
    items.forEach(function (it) {
      if (!it || typeof it.stem !== 'string' || !it.stem) return;
      var subj = subjectCode || it.subjectCode || m.subjectCode;
      if (!subj) return;
      payload.push({
        stem: it.stem,
        options: it.options || undefined,
        correct: it.correct,
        explanation: it.explanation || '',
        subject: subj,
        source: source,
        wasCorrect: it.wasCorrect === true,
      });
    });

    if (payload.length) post(payload);
  };
})();
