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

  // Batched so a 150-item preboard does not exceed the endpoint's per-request cap.
  function post(items) {
    var CHUNK = 200;
    for (var i = 0; i < items.length; i += CHUNK) {
      fetch('/api/srs/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items.slice(i, i + CHUNK) }),
        credentials: 'same-origin',
      }).catch(function () {});
    }
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
