#!/usr/bin/env python3
"""Flag questions whose correct answer is guessable from the options alone.

A test-wise student never reads the stem. They look for the option that is
longer than its neighbours, the only one carrying a clarifying parenthetical,
the only one hedged with "usually", or the one sitting at B. Each check below
is one of those shortcuts. A bank that lints clean can only be answered by
knowing the content.

    python3 lint_bank.py            # every bank
    python3 lint_bank.py A G        # named banks
    python3 lint_bank.py --quiet    # counts only, for CI
"""

import json
import re
import sys
from collections import Counter
from pathlib import Path

BANKS = Path(__file__).resolve().parent / "banks"

# The answer may be at most this much longer than the longest distractor
# before it reads as "the one with all the detail" — measured in characters.
LEN_ABS_SLACK = 12
# ...and at most this ratio of the mean distractor length.
LEN_RATIO = 1.4

PAREN = re.compile(r"\([^)]*\)")
# Hedges make an option *sound* carefully qualified, which reads as correct.
HEDGE = re.compile(
    r"\b(usually|typically|generally|often|may|can be|most commonly|in most cases)\b", re.I
)
# Absolutes make an option sound wrong, so they mark the distractors.
ABSOLUTE = re.compile(r"\b(always|never|all of the above|none of the above|both a and b)\b", re.I)

# An explanation that argues against "option B" is silently wrong the moment
# options are reshuffled, because B is now a different option for every reader.
# Two patterns, deliberately case-sensitive on the bare-letter forms so that
# statute citations like "Sec. 32(c)" and "Art. 291(a)" are not swept up.
LETTER_REF = re.compile(
    r"\b(?:option|choice|answer|step)s?\s+[A-D]\b(?!\s*[a-z])", re.I
)
LETTER_REF_BARE = re.compile(r"\([A-D]\)|\b[A-D]\s+is\s+(?:wrong|correct|incorrect)\b")


def strip_tags(s):
    return re.sub(r"<[^>]+>", "", s)


def check(q):
    """Return a list of (code, detail) problems for one question."""
    out = []
    opts = [strip_tags(o) for o in q["o"]]
    a = q["a"]

    if len(opts) != 4:
        out.append(("opt_count", f"{len(opts)} options, expected 4"))
        return out
    if not 0 <= a < len(opts):
        out.append(("bad_answer", f"a={a} out of range"))
        return out

    ans = opts[a]
    distractors = [o for i, o in enumerate(opts) if i != a]

    if len({o.strip().lower() for o in opts}) != len(opts):
        out.append(("dupe_option", "two options are identical"))

    # Two options carrying the same numbers usually say the same thing in
    # different words -- "24 mm" beside "~24 mm behind cornea" is two correct
    # answers. Compare the numbers rather than the prose, since the prose is
    # exactly what disguises the duplication.
    # A minimal pair like "0.1%" vs "1%" has *different* numbers and is fine:
    # that is the discrimination being tested, not a bug.
    # Require BOTH the same numbers and one option restating the other, so that
    # "24 mm" / "~24 mm behind cornea" is caught while genuine minimal pairs
    # ("+0.50 cyl × 90" / "-0.50 cyl × 90", "0.4 cm" / "0.4 mm") are not: in
    # those the numbers coincide but neither option contains the other, and the
    # difference is precisely what the question tests.
    nums = [tuple(re.findall(r"\d+(?:\.\d+)?", o)) for o in opts]
    norm = [re.sub(r"[~≈\s]+", " ", o.lower()).strip() for o in opts]
    for i in range(len(opts)):
        for j in range(i + 1, len(opts)):
            if nums[i] and nums[i] == nums[j] and (norm[i] in norm[j] or norm[j] in norm[i]):
                out.append(
                    ("equivalent_options",
                     f"one option restates the other: {opts[i]!r} / {opts[j]!r}")
                )

    # --- the parenthetical tell -------------------------------------------
    # "CN4 (trochlear)" next to a bare "CN3" hands over the answer.
    ans_paren = bool(PAREN.search(ans))
    d_paren = sum(bool(PAREN.search(o)) for o in distractors)
    if ans_paren and d_paren == 0:
        out.append(("paren_tell", f"only the answer is parenthesised: {ans!r}"))
    elif ans_paren and d_paren < len(distractors):
        out.append(("paren_partial", f"answer + {d_paren}/3 distractors parenthesised: {ans!r}"))

    # --- the length tell ---------------------------------------------------
    longest_d = max(len(o) for o in distractors)
    mean_d = sum(len(o) for o in distractors) / len(distractors)
    if len(ans) > longest_d + LEN_ABS_SLACK and len(ans) > mean_d * LEN_RATIO:
        out.append(
            ("length_tell", f"answer {len(ans)}ch vs longest distractor {longest_d}ch: {ans!r}")
        )

    # --- the register tell -------------------------------------------------
    if HEDGE.search(ans) and not any(HEDGE.search(o) for o in distractors):
        out.append(("hedge_tell", f"only the answer hedges: {ans!r}"))
    if ABSOLUTE.search(ans) and not any(ABSOLUTE.search(o) for o in distractors):
        out.append(("absolute_in_answer", f"answer uses an absolute: {ans!r}"))
    for o in distractors:
        if re.search(r"\ball of the above\b|\bnone of the above\b", o, re.I):
            out.append(("meta_option", f"avoid meta-options: {o!r}"))

    # --- explanations that name an option letter -------------------------
    for field in ("w", "k"):
        text = strip_tags(q.get(field, ""))
        m = LETTER_REF.search(text) or LETTER_REF_BARE.search(text)
        if m:
            out.append(
                ("letter_reference",
                 f"{field} cites a letter that shuffling invalidates: ...{text[max(0, m.start() - 30):m.end() + 25]}...")
            )

    return out


def lint(subject, quiet=False):
    path = BANKS / f"{subject}.json"
    if not path.exists():
        print(f"{subject}: no bank")
        return 0
    bank = json.loads(path.read_text(encoding="utf-8"))

    problems = []
    for q in bank:
        for code, detail in check(q):
            problems.append((q["id"], q.get("t", "?"), code, detail))

    # --- answer position skew (bank-wide) ---------------------------------
    dist = Counter(q["a"] for q in bank if isinstance(q.get("a"), int))
    n = sum(dist.values())
    skew = ""
    if n:
        top, cnt = dist.most_common(1)[0]
        share = cnt / n
        flag = "  <-- SKEWED" if share > 0.35 else ""
        skew = (
            "  answer position: "
            + " ".join(f"{'ABCD'[i]}={dist.get(i, 0)}" for i in range(4))
            + f"  (max {share:.0%} at {'ABCD'[top]}){flag}"
        )

    # --- duplicate stems ---------------------------------------------------
    stems = Counter(re.sub(r"\W+", " ", strip_tags(q["q"])).strip().lower() for q in bank)
    dupes = [s for s, c in stems.items() if c > 1]

    codes = Counter(p[2] for p in problems)
    status = "clean" if not problems and not dupes else f"{len(problems)} issues"
    print(f"{subject}: {len(bank):4d} questions  {status}")
    if skew:
        print(skew)
    if dupes:
        print(f"  duplicate stems: {len(dupes)}")
        if not quiet:
            for s in dupes[:5]:
                print(f"    - {s[:80]}")
    if codes:
        print("  " + "  ".join(f"{c}={n}" for c, n in codes.most_common()))
    if problems and not quiet:
        for pid, topic, code, detail in problems[:40]:
            print(f"    {pid} [{topic}] {code}: {detail[:110]}")
        if len(problems) > 40:
            print(f"    ... and {len(problems) - 40} more")
    return len(problems) + len(dupes)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    quiet = "--quiet" in sys.argv
    subjects = args or list("ABCDEFGH")
    total = sum(lint(s, quiet) for s in subjects)
    print(f"\ntotal issues: {total}")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
