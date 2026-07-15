#!/usr/bin/env python3
"""Render public/top2/<folder>/<S>-Subject-Exam.html from banks/<S>.json.

The bank is the source of truth; the HTML is a build artifact. Edit the JSON,
rerun this, never hand-edit the exam HTML.

    python3 build_exams.py          # all subjects
    python3 build_exams.py A G      # named subjects
    python3 build_exams.py --check  # fail if a bank does not lint clean
"""

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT.parent / "public" / "top2"
BANKS = ROOT / "banks"
TEMPLATE = ROOT / "template.html"

# letter -> (folder, subtitle, accent, accent-soft, strategy filename)
SUBJECTS = {
    "A": ("A-Visual-Biology", "Visual Biology and Ocular Anatomy", "#1d6e56", "#e1f5ee", "A-Strategy.html"),
    "B": ("B-Physiological-Optics-and-BV", "Physiological Optics and Binocular Vision", "#2f6fdb", "#e6eefc", "B-Strategy.html"),
    "C": ("C-Primary-Care-and-Refraction", "Primary Care and Refraction", "#c24a2b", "#fdeae5", "C-Strategy.html"),
    "D": ("D-Theoretical-Optics-Dispensing-CL", "Theoretical Optics, Dispensing and Contact Lenses", "#a8730c", "#fcf2dc", "D-Strategy.html"),
    "E": ("E-Ocular-Disease-and-Emergencies", "Ocular Disease and Emergencies", "#b8316f", "#fce8f1", "E-Strategy.html"),
    "F": ("F-Clinical-Optometry-and-Specialties", "Clinical Optometry and Specialties", "#0f7d70", "#e0f4f1", "F-Strategy.html"),
    "G": ("G-Ocular-Pharmacology", "Ocular Pharmacology", "#4a44b8", "#ebeafc", "G-Subject-Exam-Strategy.html"),
    "H": ("H-Jurisprudence-and-Ethics", "Jurisprudence and Ethics", "#4a5a68", "#eceff2", "H-Subject-Exam-Strategy.html"),
}

# Length buttons offered on the intro screen, on top of a "Full" button that is
# added per subject once the bank size is known.
MODE_STEPS = [25, 50, 100, 150]


import re

# An option that is nothing but a quantity: "43 D", "7", "0.50 D", "20%".
NUMERIC_OPT = re.compile(r"^[+-]?[\d.,/]+\s*(°|D|mm|cm|m|µm|um|nm|%|mg|ml|s|x|X)?$")


def all_numeric(q):
    """True when every option is a bare quantity, so they should print in
    ascending order rather than shuffled."""
    return all(NUMERIC_OPT.match(o.strip()) for o in q["o"])


def js_bank(bank):
    """Serialise one question per line so diffs stay readable."""
    rows = []
    for q in bank:
        row = (
            "{"
            + f"t:{json.dumps(q['t'], ensure_ascii=False)},"
            + f"q:{json.dumps(q['q'], ensure_ascii=False)},"
            + f"o:{json.dumps(q['o'], ensure_ascii=False)},"
            + f"a:{q['a']},"
        )
        if all_numeric(q):
            row += "n:1,"
        row += (
            f"w:{json.dumps(q['w'], ensure_ascii=False)},"
            + f"k:{json.dumps(q['k'], ensure_ascii=False)}"
            + "}"
        )
        rows.append(row)
    return "[\n" + ",\n".join(rows) + "\n]"


def topics_in_order(bank):
    """Unique topic tags, first-seen order (which follows note order)."""
    seen = []
    for q in bank:
        if q["t"] not in seen:
            seen.append(q["t"])
    return seen


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def build(subject, template):
    folder, subtitle, accent, accent_soft, strategy = SUBJECTS[subject]
    bank_path = BANKS / f"{subject}.json"
    if not bank_path.exists():
        print(f"  {subject}: no bank, skipped")
        return 0

    bank = json.loads(bank_path.read_text(encoding="utf-8"))
    n = len(bank)
    topics = topics_in_order(bank)

    chips = "\n".join(f'      <span class="chip">{esc(t)}</span>' for t in topics)
    scopes = "\n".join(
        f'      <button class="scopebtn" data-t="{esc(t)}">{esc(t)}</button>' for t in topics
    )

    steps = [m for m in MODE_STEPS if m < n]
    buttons = [f'      <button class="modebtn sel" data-n="{n}">Full ({n})</button>']
    for m in reversed(steps):
        label = {25: "Quick (25)", 50: "Half (50)", 100: "Long (100)", 150: "Deep (150)"}[m]
        buttons.append(f'      <button class="modebtn" data-n="{m}">{label}</button>')
    modes = "\n".join(buttons)

    html = (
        template.replace("__BANK__", js_bank(bank))
        .replace("__CHIPS__", chips)
        .replace("__SCOPES__", scopes)
        .replace("__MODES__", modes)
        .replace("__DEFAULT_MODE__", str(n))
        .replace("__SUBTITLE__", subtitle)
        .replace("__ACCENT_SOFT__", accent_soft)
        .replace("__ACCENT__", accent)
        .replace("__STRATEGY__", strategy)
        .replace("__N__", str(n))
        .replace("__S__", subject)
    )

    out = PUBLIC / folder / f"{subject}-Subject-Exam.html"
    out.write_text(html, encoding="utf-8")
    print(f"  {subject}: {n:4d} questions, {len(topics):2d} topics -> {out.relative_to(PUBLIC.parent.parent)}")
    return n


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    subjects = args or list(SUBJECTS)

    if "--check" in sys.argv:
        r = subprocess.run(
            [sys.executable, str(ROOT / "lint_bank.py"), "--quiet", *subjects],
            cwd=ROOT,
        )
        if r.returncode:
            print("\nlint failed; not building. Fix the banks or build without --check.")
            return 1

    template = TEMPLATE.read_text(encoding="utf-8")
    total = sum(build(s, template) for s in subjects)
    print(f"  total: {total} questions across {len(subjects)} exams")
    return 0


if __name__ == "__main__":
    sys.exit(main())
