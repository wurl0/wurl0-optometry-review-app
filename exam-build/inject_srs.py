#!/usr/bin/env python3
"""Wire the review-queue harvester (_srs.js) into the scored Top 2 pages.

Each page already calls window.reportOleScore(...) to send its final SCORE to
/api/ole-attempt. This adds a sibling call to window.reportSrsItems(...) that sends the
individual QUESTIONS to /api/srs/record, so every miss comes back on the spaced
schedule instead of being forgotten after the results screen.

Three engines are handled, matched on their exact reporting call:

  subject-exam : items live in Q[], misses in missed[] keyed by 1-based n, per-topic
                 counts in topicStats. Users answer sequentially, so the answered set is
                 Q.slice(0, count).
  preboards    : items live in pool[] with {id,q,opts,ans,rat}, outcomes in answered{}
                 keyed by id. Study mode is skipped: it shows the answers up front, so
                 nothing there is a real retrieval.
  mock         : same engine as subject-exam, but cross-subject, so each item carries its
                 own subject rather than inheriting one from the filename. Item .t holds a
                 label like "A Visual Biology"; its first character is the A-H code, which
                 is how the page's own reportOleMock call already derives subjectCode.
                 Non A-H codes are filtered out rather than stored as junk subjects.

Idempotent: reruns skip anything already carrying the WAA-SRS marker.
Usage: python3 exam-build/inject_srs.py [--dry-run]
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOP2 = ROOT / "public" / "top2"

SCRIPT_TAG = '<script src="/top2/_report.js"></script>'
SCRIPT_BOTH = '<script src="/top2/_report.js"></script><script src="/top2/_srs.js"></script>'

MARKER = "/*WAA-SRS*/"

# --- subject exams -----------------------------------------------------------------
EXAM_ANCHOR = (
    " if(window.reportOleScore)window.reportOleScore({score:s,total:answered,"
    "areaBreakdown:areaBreakdown,wrongTopics:missed.map(x=>({area:x.t,stem:x.q,correct:x.a}))});"
)
EXAM_INJECT = (
    MARKER
    + "if(window.reportSrsItems){"
    "const nAns=Object.values(topicStats).reduce((x,y)=>x+y.t,0);"
    "const missedN=new Set(missed.map(x=>x.n));"
    "window.reportSrsItems(Q.slice(0,nAns).map((it,idx)=>({"
    "stem:it.q,options:it.o,correct:it.a,explanation:it.w||'',"
    "wasCorrect:!missedN.has(idx+1)})));}"
)

# --- preboards ---------------------------------------------------------------------
PRE_ANCHOR = (
    "if(cfg.mode==='quiz'&&cfg.set==='all'&&done&&window.reportOleScore)"
    "{window.reportOleScore({score:corr,total:done});}"
)
PRE_INJECT = (
    MARKER
    + "if(cfg.mode==='quiz'&&window.reportSrsItems){"
    "window.reportSrsItems(pool.filter(x=>answered[x.id]!==undefined).map(x=>({"
    "stem:x.q,options:x.opts,correct:x.ans,explanation:x.rat||'',"
    "wasCorrect:answered[x.id]===true})));}"
)

# --- cross-subject mocks -----------------------------------------------------------
MOCK_ANCHOR = " if(window.reportOleMock)window.reportOleMock(perSubject);"
MOCK_INJECT = (
    MARKER
    + "if(window.reportSrsItems){"
    "const nAns=Object.values(topicStats).reduce((x,y)=>x+y.t,0);"
    "const missedN=new Set(missed.map(x=>x.n));"
    "window.reportSrsItems(Q.slice(0,nAns).map((it,idx)=>({"
    "stem:it.q,options:it.o,correct:it.a,explanation:it.w||'',"
    "subjectCode:(it.t||'').charAt(0),"
    "wasCorrect:!missedN.has(idx+1)}))"
    ".filter(x=>/^[A-H]$/.test(x.subjectCode)));}"
)

ENGINES = [
    ("subject-exam", EXAM_ANCHOR, EXAM_INJECT),
    ("preboards", PRE_ANCHOR, PRE_INJECT),
    ("mock", MOCK_ANCHOR, MOCK_INJECT),
]


def patch(path: Path, dry: bool) -> str:
    src = path.read_text(encoding="utf-8")

    if MARKER in src:
        return "already wired"
    if SCRIPT_TAG not in src:
        return "no _report.js tag"

    engine = None
    for name, anchor, inject in ENGINES:
        if anchor in src:
            if src.count(anchor) != 1:
                return f"SKIP: {name} anchor found {src.count(anchor)}x, expected 1"
            engine = (name, anchor, inject)
            break

    if engine is None:
        return "SKIP: no known engine anchor"

    name, anchor, inject = engine
    out = src.replace(anchor, anchor + inject, 1)
    out = out.replace(SCRIPT_TAG, SCRIPT_BOTH, 1)

    if not dry:
        path.write_text(out, encoding="utf-8")
    return f"wired ({name})"


def main() -> int:
    dry = "--dry-run" in sys.argv
    if not TOP2.is_dir():
        print(f"missing {TOP2}")
        return 1

    targets = sorted(p for p in TOP2.rglob("*.html") if SCRIPT_TAG in p.read_text(encoding="utf-8"))
    if not targets:
        print("no pages reference _report.js")
        return 1

    wired = skipped = 0
    for p in targets:
        rel = p.relative_to(TOP2)
        status = patch(p, dry)
        print(f"  {status:<22} {rel}")
        if status.startswith("wired"):
            wired += 1
        else:
            skipped += 1

    print(f"\n{'DRY RUN — ' if dry else ''}{wired} wired, {skipped} skipped, {len(targets)} scanned")
    return 0


if __name__ == "__main__":
    sys.exit(main())
