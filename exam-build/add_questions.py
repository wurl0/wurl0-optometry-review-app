#!/usr/bin/env python3
"""Merge newly authored questions from additions/<S>.json into banks/<S>.json.

Additions carry no id and no answer index of their own. Instead the correct
answer is written in full as "ans", and the options in "o" are just the pool:

    {"t": "A2 Orbit & EOM",
     "q": "The primary action of the inferior oblique is:",
     "o": ["Intorsion", "Depression", "Abduction"],
     "ans": "Extorsion",
     "w": "...", "k": "...", "sec": "A2-01"}

Writing the answer as text rather than an index is deliberate: an author who
types a:1 forty times in a row rebuilds exactly the B-bias this whole exercise
removed. Here the answer's seat is assigned by the merge and then reshuffled
again at runtime, so it is never a choice anyone makes.

Stems are deduped against the existing bank.

    python3 add_questions.py A
"""

import json
import random
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BANKS = ROOT / "banks"
ADDITIONS = ROOT / "additions"


def norm(s):
    return re.sub(r"\W+", " ", s).strip().lower()


def merge(subject, rng):
    apath = ADDITIONS / f"{subject}.json"
    if not apath.exists():
        print(f"  {subject}: no additions")
        return 0
    new = json.loads(apath.read_text(encoding="utf-8"))
    bpath = BANKS / f"{subject}.json"
    bank = json.loads(bpath.read_text(encoding="utf-8"))

    seen = {norm(q["q"]) for q in bank}
    maxid = max((int(q["id"][1:]) for q in bank), default=0)

    added, dupes, bad = 0, 0, 0
    for item in new:
        stem = norm(item["q"])
        if stem in seen:
            print(f"    dup, skipped: {item['q'][:64]}")
            dupes += 1
            continue

        opts = list(item["o"]) + [item["ans"]]
        if len(opts) != 4:
            print(f"    !! {len(opts)} options: {item['q'][:60]}")
            bad += 1
            continue
        if len({o.lower() for o in opts}) != 4:
            print(f"    !! duplicate option: {item['q'][:60]}")
            bad += 1
            continue

        rng.shuffle(opts)
        maxid += 1
        bank.append(
            {
                "id": f"{subject}{maxid:04d}",
                "sec": item.get("sec", ""),
                "t": item["t"],
                "q": item["q"],
                "o": opts,
                "a": opts.index(item["ans"]),
                "w": item["w"],
                "k": item["k"],
                "src": "authored",
            }
        )
        seen.add(stem)
        added += 1

    bpath.write_text(json.dumps(bank, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"  {subject}: +{added} added, {dupes} duplicates skipped, {bad} rejected -> {len(bank)} total")
    return added


def main():
    rng = random.Random(20260715)
    subjects = [a for a in sys.argv[1:] if not a.startswith("-")] or list("ABCDEFGH")
    total = sum(merge(s, rng) for s in subjects)
    print(f"  total added: {total}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
