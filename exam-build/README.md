# Exam build pipeline

`banks/<S>.json` is the source of truth. The exam HTML under
`public/top2/*/[A-H]-Subject-Exam.html` is a build artifact — never hand-edit it.

## Workflow

```
python3 lint_bank.py            # check every bank for guessable questions
python3 build_exams.py --check  # lint, then rebuild all 8 exams
python3 build_exams.py A G      # rebuild named subjects only
```

## Adding questions

Write them to `additions/<S>.json`, giving the correct answer as **text** in
`ans` and only the wrong options in `o`:

```json
{"t": "A2 Orbit & EOM",
 "q": "The primary action of the inferior oblique is:",
 "o": ["Intorsion", "Depression", "Abduction"],
 "ans": "Extorsion",
 "w": "Explanation shown after answering.",
 "k": "Short anchor line.",
 "sec": "A2-01"}
```

Then `python3 add_questions.py A`. The merge assigns the answer's position, so
an author never picks it — that is what stopped the old bank drifting to 77% B.
Duplicate stems are rejected automatically.

## What the linter blocks

A test-wise student answers without reading the stem. Each check kills one of
those shortcuts:

- `paren_tell` — only the answer carries a gloss: "CN4 (trochlear)" vs "CN3"
- `length_tell` — the answer is conspicuously the longest option
- `hedge_tell` — only the answer hedges ("usually", "may")
- `absolute_in_answer` / `meta_option` — "always", "all of the above"
- `dupe_option`, duplicate stems, bad answer index
- bank-wide answer-position skew (warns above 35%)

Fix a flagged question by rewriting its options in `patches/<S>.json`
(`{"A0004": {"o": [...], "a": 2}}`) and running `python3 apply_patch.py A`.
Patches only touch options, never the stem or explanation, and the tool warns
if a rewrite looks like it changed which fact is correct.

## The two runtime rules

`prep()` in `template.html`:

1. Options reshuffle on **every attempt**, answer index remapped. Without this
   the authored index reaches the student — the old build sat at 77% B.
2. Questions flagged `n:1` (all options are bare quantities) sort **ascending**
   instead, the way a real board paper prints them. Ascending order reveals
   nothing, since the seat follows the value, and a shuffled "6, 8, 5, 7" just
   looks broken.

## Housekeeping

`python3 normalize_positions.py` re-deals stored answer seats round-robin so the
JSON is fair even if rendered by something that does not shuffle. Seeded, so it
does not churn the diff.
