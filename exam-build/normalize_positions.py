#!/usr/bin/env python3
"""Spread the stored answer positions evenly across A-D.

The live exam reshuffles options on every attempt, so the order saved in the
bank does not reach the student. This is belt and braces: it means the JSON is
still a fair test if it is ever rendered by something that does not shuffle
(a print-out, a Kahoot import, a future rewrite of the engine), and it stops
the linter's skew warning from masking a real regression.

Seeded, so rerunning gives the same bank rather than a fresh diff each time.

    python3 normalize_positions.py
"""

import json
import random
import re
import sys
from collections import Counter
from pathlib import Path

BANKS = Path(__file__).resolve().parent / "banks"
NUMERIC_OPT = re.compile(r"^[+-]?[\d.,/]+\s*(°|D|mm|cm|m|µm|um|nm|%|mg|ml|s|x|X)?$")


def all_numeric(q):
    return all(NUMERIC_OPT.match(o.strip()) for o in q["o"])


def numval(s):
    m = re.search(r"[+-]?\d*\.?\d+", str(s).replace(",", ""))
    return float(m.group()) if m else 0.0


def main():
    rng = random.Random(20260714)
    for s in "ABCDEFGH":
        path = BANKS / f"{s}.json"
        bank = json.loads(path.read_text(encoding="utf-8"))

        # Deal the target seats round-robin rather than at random. Pure random
        # assignment clusters by luck -- one pass put 38% of subject A's
        # answers at B, which is the very pattern being removed.
        free = [q for q in bank if not all_numeric(q)]
        seats = [i % 4 for i in range(len(free))]
        rng.shuffle(seats)

        for q in bank:
            answer = q["o"][q["a"]]
            if all_numeric(q):
                # Ascending, the way a board paper prints quantities. The seat
                # falls where the value falls, which is nobody's choice.
                q["o"] = sorted(q["o"], key=numval)
            else:
                others = [o for o in q["o"] if o != answer]
                rng.shuffle(others)
                target = seats.pop()
                q["o"] = others[:target] + [answer] + others[target:]
            q["a"] = q["o"].index(answer)

        path.write_text(json.dumps(bank, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
        dist = Counter(q["a"] for q in bank)
        n = len(bank)
        print(
            f"  {s}: "
            + " ".join(f"{'ABCD'[i]}={100 * dist.get(i, 0) / n:4.1f}%" for i in range(4))
            + f"   ({sum(1 for q in bank if all_numeric(q))} numeric sets sorted ascending)"
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
