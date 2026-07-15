#!/usr/bin/env python3
"""Pull the reviewer's own Practice Questions out of the notes into additions/.

Each note carries a "## Practice Questions" section of hand-written board-style
MCQs with full rationales:

    **1.** A disease constantly present at low frequency is:

    - A. Epidemic
    - B. Pandemic
    - C. Endemic
    - D. Sporadic

    <details><summary>Answer</summary>

    **C. Endemic.** Constant low-level presence in a locality. An epidemic is...
    </details>

These are the highest-quality untapped source in the reviewer: the distractors
are already clinically real and the rationale is already written. This lifts
them into additions format (answer as text, so add_questions.py assigns the
seat) and leaves grading of tells to lint_bank.py.

    python3 extract_practice.py            # write additions/<S>.json
    python3 extract_practice.py --dry-run
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
NOTES = ROOT.parent / "public" / "top2"
ADDITIONS = ROOT / "additions"

# note-file prefix -> the topic tag already used in that subject's bank
TOPIC = {
    "A1-01": ("A", "A1 Body & CN"), "A2-01": ("A", "A2 Orbit & EOM"),
    "A2-02": ("A", "A2 Lids/Lacrimal"), "A2-03": ("A", "A2 Cornea/Sclera"),
    "A2-04": ("A", "A2 Uveal Tract"), "A2-05": ("A", "A2 Lens/Vitreous"),
    "A2-06": ("A", "A2 Retina/Optic N"), "A2-07": ("A", "A2 Visual Pathway"),
    "A3-01": ("A", "A3 Embryology"),
    "B1-01": ("B", "B1 Visual System"), "B2-01": ("B", "B2 Visual Perception"),
    "B3-01": ("B", "B3 Visual Field"), "B4-01": ("B", "B4 Color"),
    "B5-01": ("B", "B5 Binocular Vision"), "B6-01": ("B", "B6 Stereopsis"),
    "B7-01": ("B", "B7 VIP / VPS"),
    "C1-01": ("C", "C1 Epidemiology"), "C2-01": ("C", "C2 Ametropia"),
    "C3-01": ("C", "C3 Preliminary Exam"), "C4-01": ("C", "C4 Objective Exam"),
    "C5-01": ("C", "C5 Subjective Exam"), "C6-01": ("C", "C6 Management"),
    "C7-01": ("C", "C7 Vision Therapy"),
    "D1-01": ("D", "D1 Physical Optics"), "D1-02": ("D", "D1 Geometric Optics"),
    "D2-01": ("D", "D2 Dispensing"), "D3-01": ("D", "D3 Contact Lens"),
    "E1-01": ("E", "E1 Orbit/Adnexa/Lids"), "E2-01": ("E", "E2 Anterior Segment"),
    "E3-01": ("E", "E3 Posterior/Retina"), "E4-01": ("E", "E4 Emergencies"),
    "F1-01": ("F", "F1 DPA"), "F2-01": ("F", "F2 Pediatric"),
    "F3-01": ("F", "F3 Geriatric"), "F4-01": ("F", "F4 Neuro"),
    "F5-01": ("F", "F5 Occupational"), "F6-01": ("F", "F6 Sports Vision"),
    "F7-01": ("F", "F7 Low Vision"), "F8-01": ("F", "F8 Prosthesis/Absorptive"),
    "G1-01": ("G", "G1 Principles"), "G2-01": ("G", "G2 Autonomic"),
    "G3-01": ("G", "G3 Diagnostic"), "G4-01": ("G", "G4 Therapeutic"),
    "G5-01": ("G", "G5 Side Effects"),
    "H1-01": ("H", "H1 RA 8050"), "H2-01": ("H", "H2 Bioethics"),
    "H3-01": ("H", "H3 Practice Mgmt"),
    "Low-Vision-Consolidated-Review": ("F", "F7 Low Vision"),
    "Pediatric-Optometry-Consolidated-Review": ("F", "F2 Pediatric"),
}

QNUM = re.compile(r"^\*\*(\d+)\.\*\*\s*(.*)")
OPT = re.compile(r"^-\s*([A-D])\.\s*(.+)")
ANS = re.compile(r"^\*\*([A-D])\.\s*(.+?)\*\*\s*(.*)", re.S)


def clean(text):
    """Markdown to the light inline HTML the exam renderer accepts."""
    text = text.strip()
    text = re.sub(r"\*\*(.+?)\*\*", r"\1", text)
    text = re.sub(r"(?<!\*)\*(?!\s)(.+?)\*", r"\1", text)
    text = re.sub(r"`(.+?)`", r"\1", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def anchor_from(explanation):
    """First sentence of the rationale makes a serviceable memory anchor.

    Truncate on a word boundary; a hook that stops mid-word ("...unoppose")
    is worse than no hook.
    """
    m = re.match(r"(.+?[.!?])(\s|$)", explanation)
    a = (m.group(1) if m else explanation).strip()
    if len(a) <= 110:
        return a
    cut = a[:110].rsplit(" ", 1)[0].rstrip(" ,;:—-")
    return cut + "…"


# Rationales written against a fixed A/B/C/D order go wrong once options are
# reshuffled. Drop the letter-anchored asides rather than ship a rationale that
# argues about an option the reader is not looking at.
LETTER_ASIDE = [
    re.compile(r"\s*\((?:see\s+)?(?:option|choice|step)s?\s+[A-D](?:\s*(?:/|and|,)\s*[A-D])*\)", re.I),
    re.compile(r"\s*\([A-D]\)", ),
    re.compile(r"\s*(?:—|-|;)?\s*(?:option|choice|step)s?\s+[A-D](?:\s*(?:/|and|,)\s*[A-D])*\s+(?:is|are|was|would|describes?|calculates?|correctly)\b[^.]*\.", re.I),
    re.compile(r"\s*\b[A-D]\s+is\s+(?:wrong|correct|incorrect)\b[^.]*\.", ),
]


# "Option D (RPE detachment) is a different pathology" already names the thing
# it is talking about, so the letter can simply be dropped and the description
# promoted. That keeps the teaching instead of deleting the sentence.
PROMOTE = [
    (re.compile(r"\b[Oo]ptions?\s+[A-D]\s*\(([^)]+)\)"), r"\1"),
    (re.compile(r"\((?:Step|Option|Choice)\s+[A-D]\s*(?:—|-)\s*"), "("),
    (re.compile(r"\s*(?:—|-)\s*(?:option|choice|step)s?\s+[A-D](?=\))", re.I), ""),
]


def strip_letter_refs(text):
    for pat, repl in PROMOTE:
        text = pat.sub(repl, text)
    for pat in LETTER_ASIDE:
        text = pat.sub("", text)
    text = re.sub(r"\s{2,}", " ", text).strip()
    # Promoting a description can leave a sentence starting lower-case.
    return re.sub(r"(^|(?<=[.!?] ))([a-z])", lambda m: m.group(1) + m.group(2).upper(), text)


def parse_note(path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"^## Practice Questions?\s*$(.*?)(?=^## |\Z)", text, re.S | re.M)
    if not m:
        return []

    # Split the section into one chunk per numbered question.
    chunks = re.split(r"(?=^\*\*\d+\.\*\*)", m.group(1), flags=re.M)
    out = []
    for chunk in chunks:
        qm = QNUM.match(chunk.strip())
        if not qm:
            continue

        # stem: everything before the first option line
        lines = chunk.strip().splitlines()
        stem_parts = [qm.group(2)]
        i = 1
        while i < len(lines) and not OPT.match(lines[i].strip()):
            if lines[i].strip() and not lines[i].strip().startswith("<"):
                stem_parts.append(lines[i].strip())
            i += 1
        stem = clean(" ".join(stem_parts))

        opts = {}
        while i < len(lines):
            om = OPT.match(lines[i].strip())
            if om:
                opts[om.group(1)] = clean(om.group(2))
            elif opts and lines[i].strip().startswith("<details"):
                break
            i += 1

        # Two house styles appear: "**C. Rose bengal.** It stains..." restates
        # the answer, "**B.** Anesthetics cross..." does not. Allow an empty
        # restatement so the second form is not silently dropped.
        am = re.search(r"\*\*([A-D])\.\s*(.*?)\*\*\s*(.*?)(?=</details>|\Z)", chunk, re.S)
        if not am or len(opts) != 4:
            continue
        letter = am.group(1)
        if letter not in opts:
            continue

        explanation = clean(am.group(3))
        if not explanation:
            explanation = clean(am.group(2))
        explanation = strip_letter_refs(explanation)
        if not stem or not explanation:
            continue

        answer = opts[letter]
        out.append(
            {
                "t": None,  # filled by caller
                "q": stem,
                "o": [v for k, v in sorted(opts.items()) if k != letter],
                "ans": answer,
                "w": explanation,
                "k": anchor_from(explanation),
                "sec": path.stem + " practice",
            }
        )
    return out


def main():
    dry = "--dry-run" in sys.argv
    per_subject = {}
    for path in sorted(NOTES.rglob("*.md")):
        key = next((k for k in TOPIC if path.stem.startswith(k) or path.stem == k), None)
        if not key:
            continue
        subject, tag = TOPIC[key]
        got = parse_note(path)
        for q in got:
            q["t"] = tag
        if got:
            per_subject.setdefault(subject, []).extend(got)
            print(f"  {path.name}: {len(got)}")

    total = 0
    for subject, items in sorted(per_subject.items()):
        total += len(items)
        if not dry:
            (ADDITIONS / f"{subject}.json").write_text(
                json.dumps(items, indent=1, ensure_ascii=False) + "\n", encoding="utf-8"
            )
    print(f"\n  extracted {total} practice questions"
          + (" (dry run)" if dry else " -> additions/"))
    for s, items in sorted(per_subject.items()):
        print(f"    {s}: {len(items)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
