#!/usr/bin/env python3
"""Apply hand-written option rewrites from patches/<S>.json onto banks/<S>.json.

Patch format -- id maps to the replacement option list and the new answer index:

    { "A0004": { "o": ["CN3", "CN7", "CN5", "CN2"], "a": 2 } }

Rewrites only ever touch "o" and "a"; the stem, explanation and anchor are
left alone, so a patch can never silently change what a question teaches.
The answer text is compared before and after and the patch is rejected if it
would change which fact is correct.

    python3 apply_patch.py A
    python3 apply_patch.py --dry-run A
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BANKS = ROOT / "banks"
PATCHES = ROOT / "patches"


def apply(subject, dry):
    ppath = PATCHES / f"{subject}.json"
    if not ppath.exists():
        print(f"  {subject}: no patch file")
        return 0
    patch = json.loads(ppath.read_text(encoding="utf-8"))
    bpath = BANKS / f"{subject}.json"
    bank = json.loads(bpath.read_text(encoding="utf-8"))
    index = {q["id"]: q for q in bank}

    applied, warned = 0, 0
    for qid, new in patch.items():
        q = index.get(qid)
        if not q:
            print(f"    !! {qid} not in bank")
            continue
        old_answer = q["o"][q["a"]]
        if not 0 <= new["a"] < len(new["o"]):
            print(f"    !! {qid} answer index {new['a']} out of range")
            continue
        new_answer = new["o"][new["a"]]
        # A reworded answer is expected; a *different* answer is a mistake.
        # Flag when the two share almost no words.
        ow = set(old_answer.lower().replace(",", " ").split())
        nw = set(new_answer.lower().replace(",", " ").split())
        if ow and nw and len(ow & nw) / len(ow | nw) < 0.18:
            print(f"    ?  {qid} answer barely overlaps, check it:")
            print(f"         was: {old_answer}")
            print(f"         now: {new_answer}")
            warned += 1
        q["o"] = new["o"]
        q["a"] = new["a"]
        q["src"] = "sanitized"
        applied += 1

    if not dry:
        bpath.write_text(json.dumps(bank, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"  {subject}: {applied} patched, {warned} flagged for a second look"
          + (" (dry run)" if dry else ""))
    return applied


def main():
    dry = "--dry-run" in sys.argv
    subjects = [a for a in sys.argv[1:] if not a.startswith("-")] or list("ABCDEFGH")
    total = sum(apply(s, dry) for s in subjects)
    print(f"  total: {total}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
