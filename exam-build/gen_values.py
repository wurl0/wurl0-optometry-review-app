#!/usr/bin/env python3
"""Generate questions from the reviewer's "Numbers and Values to Know" and
"Terminology Unpacked" tables.

These tables are three columns wide and already contain everything a question
needs:

    | Parameter | Value | Why it matters |
    | NRA normal | +2.00D | Ability to relax accommodation at 40cm |

    | Term | Roots / Meaning | Clinical Context |
    | Pterygium | Greek pterygion = little wing | Fibrovascular wing crossing... |

The distractors are the *sibling rows of the same table*. That is the whole
point: a distractor pulled from the same table is a real value from the same
clinical domain, so it is plausible in a way an invented number never is, and
the student has to know which value goes with which parameter rather than
which number looks least silly.

Rows are skipped rather than forced when they cannot make a fair question:
a value that repeats elsewhere in the table (the answer would be ambiguous),
a value too long to sit beside its siblings, or a table too small to furnish
three distractors.

    python3 gen_values.py --dry-run
    python3 gen_values.py
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
NOTES = ROOT.parent / "public" / "top2"
ADDITIONS = ROOT / "additions"

sys.path.insert(0, str(ROOT))
from extract_practice import TOPIC, clean  # noqa: E402

VALUES_SECTIONS = ("Numbers and Values to Know", "Anatomical Numbers to Memorize")
TERM_SECTIONS = ("Terminology Unpacked",)

# A value must be short enough to read as a peer of its siblings.
MAX_VALUE = 42
MIN_SIBLINGS = 4


def tables_in(text, heading):
    """Every table under a heading, as a list of row-cell-lists."""
    m = re.search(rf"^#+\s*{re.escape(heading)}\s*$(.*?)(?=^#+\s|\Z)", text, re.S | re.M)
    if not m:
        return []
    tables, cur = [], []
    for line in m.group(1).splitlines():
        if line.startswith("|") and not re.match(r"^\|\s*-+", line):
            cells = [clean(c) for c in line.strip().strip("|").split("|")]
            cur.append(cells)
        elif cur:
            tables.append(cur)
            cur = []
    if cur:
        tables.append(cur)
    return tables


def usable(rows):
    """Drop the header, keep 3-column rows with a short, present value."""
    out = []
    for cells in rows[1:] if rows else []:
        if len(cells) < 2:
            continue
        key, val = cells[0], cells[1]
        why = cells[2] if len(cells) > 2 else ""
        if not key or not val or val in {"—", "-", "–"}:
            continue
        if len(val) > MAX_VALUE or len(key) > 60:
            continue
        out.append((key, val, why))
    return out


def numericish(s):
    return bool(re.search(r"\d", s))


def unit_sig(value):
    """The unit a value is expressed in: 'mm', '%', 'hours', 'D'...

    This is the quality gate. A question offering "~15% of AMD" against
    "500 mg" is not a question -- the units alone hand over the answer.
    Requiring every option to share one unit forces the student to know which
    number belongs to which parameter, which is the thing being tested.
    Returns None when no unit can be read, and those rows are dropped.
    """
    v = value.strip().lower()
    if "%" in v:
        return "%"
    # the alphabetic run following the final number: "3-6 months" -> months
    m = re.findall(r"\d\s*([a-zµ°/]+)", v)
    if m:
        return m[-1].strip("/")
    if re.fullmatch(r"[~<>≤≥]?\s*[\d.,/–—-]+", v):
        return "bare-number"
    return None


def build_value_qs(rows, tag, sec):
    """'The <parameter> is:' answered by its value, distractors = siblings."""
    out = []
    for key, val, why in rows:
        # A compound label ("Wet AMD: frequency") makes an unreadable stem.
        if ":" in key or len(key.split()) > 7:
            continue
        sig = unit_sig(val)
        if sig is None:
            continue
        # Siblings expressed in the SAME unit. Anything else gives the answer away.
        pool = [
            v for k, v, _ in rows
            if v.lower() != val.lower()
            and k.lower() != key.lower()
            and unit_sig(v) == sig
        ]
        # A value repeated under another parameter makes the answer ambiguous.
        if sum(1 for _, v, _ in rows if v.lower() == val.lower()) > 1:
            continue
        seen, uniq = set(), []
        for v in pool:
            if v.lower() not in seen:
                seen.add(v.lower())
                uniq.append(v)
        if len(uniq) < 3:
            continue

        stem = key[0].lower() + key[1:] if key[:2].upper() != key[:2] else key
        out.append({
            "t": tag,
            "q": f"The {stem} is:",
            "o": uniq[:3],
            "ans": val,
            "w": (f"{key}: {val}." + (f" {why}" if why else "")),
            "k": f"{key} = {val}",
            "sec": sec,
        })
    return out


def build_term_qs(rows, tag, sec):
    """'Which term means <clinical context>?' answered by the term itself."""
    out = []
    for term, meaning, context in rows:
        # A terse context ("displayed credential of standing") makes a stem
        # nobody could answer from knowledge; require a real descriptive phrase.
        if not context or len(context) < 30 or len(context.split()) < 5:
            continue
        # Reject siblings that contain the answer or are contained by it.
        # "Phoria" beside "Heterophoria" is two correct answers, not a
        # question -- a defect no amount of shuffling can fix.
        def collides(a, b):
            a, b = a.lower(), b.lower()
            return a in b or b in a

        pool = [
            t for t, _, _ in rows
            if t.lower() != term.lower() and len(t) <= 32 and not collides(t, term)
        ]
        seen, uniq = set(), []
        for t in pool:
            if t.lower() not in seen:
                seen.add(t.lower())
                uniq.append(t)
        if len(uniq) < 3 or len(term) > 32:
            continue
        ctx = context[0].lower() + context[1:]
        out.append({
            "t": tag,
            "q": f"Which term describes {ctx.rstrip('.')}?",
            "o": uniq[:3],
            "ans": term,
            "w": f"{term}: {meaning}. {context}",
            "k": f"{term} = {context}"[:110],
            "sec": sec,
        })
    return out


def main():
    dry = "--dry-run" in sys.argv
    per = {}
    for path in sorted(NOTES.rglob("*.md")):
        key = next((k for k in TOPIC if path.stem.startswith(k) or path.stem == k), None)
        if not key:
            continue
        subject, tag = TOPIC[key]
        text = path.read_text(encoding="utf-8", errors="ignore")

        got = []
        for heading in VALUES_SECTIONS:
            for tbl in tables_in(text, heading):
                rows = usable(tbl)
                if len(rows) >= MIN_SIBLINGS:
                    got += build_value_qs(rows, tag, f"{path.stem} values")
        for heading in TERM_SECTIONS:
            for tbl in tables_in(text, heading):
                rows = usable(tbl)
                if len(rows) >= MIN_SIBLINGS:
                    got += build_term_qs(rows, tag, f"{path.stem} terms")

        if got:
            per.setdefault(subject, []).extend(got)
            print(f"  {path.name}: {len(got)}")

    total = 0
    for subject, items in sorted(per.items()):
        total += len(items)
        if not dry:
            p = ADDITIONS / f"{subject}.json"
            existing = json.loads(p.read_text()) if p.exists() else []
            p.write_text(json.dumps(existing + items, indent=1, ensure_ascii=False) + "\n",
                         encoding="utf-8")
    print(f"\n  generated {total}" + (" (dry run)" if dry else " -> additions/"))
    for s, items in sorted(per.items()):
        print(f"    {s}: {len(items)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
