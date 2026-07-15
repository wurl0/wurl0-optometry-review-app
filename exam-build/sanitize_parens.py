#!/usr/bin/env python3
"""Strip supplementary parentheticals from answer options.

The reviewer's habit was to gloss the correct answer and leave the distractors
bare -- "CN4 (trochlear)" against a plain "CN3" -- which hands the answer to
anyone scanning the options. Stripping the gloss from *every* option removes
the asymmetry rather than moving it around.

Only options are touched. Stems, explanations and anchors keep their glosses,
so the teaching value survives; it just arrives after the answer is committed.

A strip is skipped when it would empty an option or collide with a sibling,
i.e. when the parenthetical is the only thing telling two options apart.

    python3 sanitize_parens.py --dry-run
    python3 sanitize_parens.py
"""

import json
import re
import sys
from pathlib import Path

BANKS = Path(__file__).resolve().parent / "banks"
PAREN = re.compile(r"\s*\([^)]*\)")


def strip(text):
    return re.sub(r"\s{2,}", " ", PAREN.sub("", text)).strip().rstrip(",")


def process(bank):
    changed, skipped = 0, []
    for q in bank:
        new = [strip(o) for o in q["o"]]
        # Refuse the rewrite if it destroys a distinction between options.
        if any(not o for o in new) or len({o.lower() for o in new}) != len(new):
            if any(PAREN.search(o) for o in q["o"]):
                skipped.append((q["id"], q["o"]))
            continue
        if new != q["o"]:
            q["o"] = new
            changed += 1
    return changed, skipped


def main():
    dry = "--dry-run" in sys.argv
    total, all_skipped = 0, []
    for s in "ABCDEFGH":
        path = BANKS / f"{s}.json"
        bank = json.loads(path.read_text(encoding="utf-8"))
        changed, skipped = process(bank)
        total += changed
        all_skipped += skipped
        if not dry:
            path.write_text(json.dumps(bank, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"  {s}: {changed:3d} questions de-glossed, {len(skipped)} left for manual review")

    print(f"\n  {total} questions rewritten{' (dry run, nothing saved)' if dry else ''}")
    if all_skipped:
        print(f"  {len(all_skipped)} need a human, the parenthetical is load-bearing:")
        for qid, opts in all_skipped[:12]:
            print(f"    {qid}: {opts}")


if __name__ == "__main__":
    sys.exit(main())
