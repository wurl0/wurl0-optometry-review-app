// Shared score reporter for Top 2 exams. Included on every scored page.
// Infers the subject code and source from the file path, then POSTs the final
// score to /api/ole-attempt. The page is already behind the app's auth gate,
// so the request carries the Supabase session cookie (no user id in the body).
(function () {
  function meta() {
    const file = decodeURIComponent(location.pathname).split('/').pop() || '';
    let source = null;
    if (/Subject-Exam/i.test(file)) source = 'subject-exam';
    else if (/Preboards-2025/i.test(file)) source = 'preboards-2025';
    else if (/Preboards-Set2/i.test(file)) source = 'preboards-set2';
    else if (/Mock-Board/i.test(file)) source = 'mock';
    const m = file.match(/^([A-H])-/); // "D-Subject-Exam.html" -> "D"
    return { source, subjectCode: m ? m[1] : null };
  }

  function post(payload) {
    return fetch('/api/ole-attempt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'same-origin',
    }).then(r => r.ok).catch(() => false);
  }

  // Subject exams and preboards: one subject, one score.
  // o = { score, total, areaBreakdown?, wrongTopics? }
  window.reportOleScore = function (o) {
    const { source, subjectCode } = meta();
    if (!source || !subjectCode || !o || !(o.total > 0)) return;
    post({
      subjectCode,
      source,
      score: o.score,
      total: o.total,
      areaBreakdown: o.areaBreakdown || [],
      wrongTopics: o.wrongTopics || [],
    });
  };

  // Mock board: cross-subject. Pass one result per subject, all tagged 'mock'.
  // perSubject = [{ subjectCode, score, total, areaBreakdown?, wrongTopics? }]
  window.reportOleMock = function (perSubject) {
    if (!Array.isArray(perSubject)) return;
    perSubject.forEach(s => {
      if (!/^[A-H]$/.test(s.subjectCode) || !(s.total > 0)) return;
      post({
        subjectCode: s.subjectCode,
        source: 'mock',
        score: s.score,
        total: s.total,
        areaBreakdown: s.areaBreakdown || [],
        wrongTopics: s.wrongTopics || [],
      });
    });
  };
})();
