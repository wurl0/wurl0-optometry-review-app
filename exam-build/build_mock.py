#!/usr/bin/env python3
"""Render the reviewer-bank OLE mock board from banks/A-H.json.

This is a THIRD mock, separate from the two that already exist:
  - OLE-Mock-Board-Exam.html       hand-written 96-question sampler (untouched)
  - OLE-Mock-Board-Exam-Set2.html  the 2024 MCU preboard bank (untouched)
  - OLE-Mock-Board-Reviewer.html   <- this one: every reviewer question, weighted

Weighting follows the real OLE Table of Specifications, where 10% of the paper
means 100 items, so a full sitting is 1000 questions:

    A 10% -> 100    B 15% -> 150    C 15% -> 150    D 15% -> 150
    E 10% -> 100    F 15% -> 150    G 10% -> 100    H 10% -> 100

The filename must keep "Mock-Board" in it: public/top2/_report.js infers
source='mock' from that substring, which is what puts the score into
ole_attempts and therefore into /readiness.

    python3 build_mock.py
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BANKS = ROOT / "banks"
OUT = ROOT.parent / "public" / "top2" / "00-Master-Index" / "OLE-Mock-Board-Reviewer.html"
TEMPLATE = ROOT / "mock-template.html"

sys.path.insert(0, str(ROOT))
from build_exams import all_numeric  # noqa: E402

# The subject label the mock groups by. reportOleMock takes charAt(0) as the
# subject code, so the leading letter is load-bearing: do not rename these.
SUBJECT_LABEL = {
    "A": "A Visual Biology",
    "B": "B Phys Optics + BV",
    "C": "C Primary Care",
    "D": "D Theoretical Optics",
    "E": "E Ocular Disease",
    "F": "F Clinical Specialties",
    "G": "G Pharmacology",
    "H": "H Jurisprudence",
}
WEIGHT = {"A": 10, "B": 15, "C": 15, "D": 15, "E": 10, "F": 15, "G": 10, "H": 10}
FULL_PAPER = 1000  # 10% == 100 items


def norm(stem):
    return re.sub(r"\W+", " ", re.sub(r"<[^>]+>", "", stem)).strip().lower()


def main():
    pool, per, seen, dropped = [], {}, {}, []
    for s in "ABCDEFGH":
        bank = json.loads((BANKS / f"{s}.json").read_text(encoding="utf-8"))
        per[s] = 0
        for q in bank:
            # A few stems legitimately live in two subjects: labour law is both
            # F5 Occupational and H3 Practice Management; photochromics are both
            # D2 Dispensing and F8 Absorptive. That is right for the SUBJECT
            # exams, where each drills its own material. It is wrong here: this
            # paper draws from all eight at once, so the duplicate would appear
            # twice in one sitting. Keep the first, record the rest.
            key = norm(q["q"])
            if key in seen:
                dropped.append((q["id"], q["t"], seen[key]))
                continue
            seen[key] = q["id"]
            per[s] += 1
            row = {
                "t": SUBJECT_LABEL[s],   # subject, drives weighting + reporting
                "st": q["t"],            # the fine topic, shown in the review list
                "q": q["q"],
                "o": q["o"],
                "a": q["a"],
                "w": q["w"],
                "k": q["k"],
            }
            if all_numeric(q):
                row["n"] = 1
            pool.append(row)

    # Warn rather than silently produce a thin subject.
    print(f"{'':3} {'weight':>6} {'need':>5} {'have':>5}  reuse at a full 1000-item paper")
    for s in "ABCDEFGH":
        need = WEIGHT[s] * 10
        share = need / per[s]
        flag = "  <-- thin, repeats most" if share > 0.85 else ""
        print(f"{s:3} {str(WEIGHT[s]) + '%':>6} {need:5} {per[s]:5}  {share:5.0%}{flag}")
        if per[s] < need:
            print(f"    !! {s} cannot fill its weighted slot; the draw will top up from other subjects")

    if dropped:
        print(f"\n  {len(dropped)} cross-subject duplicates dropped from the mock pool"
              " (kept in their subject exams):")
        for qid, topic, kept in dropped:
            print(f"    {qid} [{topic}] duplicate of {kept}")

    rows = ",\n".join(json.dumps(r, ensure_ascii=False) for r in pool)
    html = (
        TEMPLATE.read_text(encoding="utf-8")
        .replace("__POOL__", "[\n" + rows + "\n]")
        .replace("__N__", str(len(pool)))
    )
    OUT.write_text(html, encoding="utf-8")
    print(f"\n  {len(pool)} questions -> {OUT.relative_to(ROOT.parent.parent)}")
    print(f"  full paper = {FULL_PAPER} items ("
          + ", ".join(f"{s}:{WEIGHT[s] * 10}" for s in "ABCDEFGH") + ")")
    return 0


if __name__ == "__main__":
    sys.exit(main())
