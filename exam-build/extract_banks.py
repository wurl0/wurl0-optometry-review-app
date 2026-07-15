#!/usr/bin/env python3
"""One-shot migration: pull the BANK array out of each *-Subject-Exam.html
into exam-build/banks/<S>.json.

The HTML banks are JS object literals with unquoted keys and section comments:
    // ===== A1 Body Systems & Cranial Nerves =====
    {t:"A1 Body & CN",q:"...",o:["..",".."],a:1,w:"...",k:"..."},

The section comment is kept as the question's "sec" so the rebuilt exam can
still group by note, and each question gets a stable id.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT.parent / "public" / "top2"
BANKS = ROOT / "banks"

SUBJECTS = {
    "A": "A-Visual-Biology",
    "B": "B-Physiological-Optics-and-BV",
    "C": "C-Primary-Care-and-Refraction",
    "D": "D-Theoretical-Optics-Dispensing-CL",
    "E": "E-Ocular-Disease-and-Emergencies",
    "F": "F-Clinical-Optometry-and-Specialties",
    "G": "G-Ocular-Pharmacology",
    "H": "H-Jurisprudence-and-Ethics",
}

QLINE = re.compile(r"^\{t:.*\},?\s*$")
SECLINE = re.compile(r"^//\s*=+\s*(.*?)\s*=+\s*$")


def js_obj_to_json(line):
    """Quote the bare keys, drop the trailing comma, hand it to json.loads."""
    s = line.rstrip().rstrip(",")
    s = re.sub(r"([{,])(t|q|o|a|w|k):", r'\1"\2":', s)
    return json.loads(s)


def extract(subject, folder):
    src = PUBLIC / folder / f"{subject}-Subject-Exam.html"
    if not src.exists():
        print(f"  !! missing {src}")
        return None

    out, section = [], ""
    in_bank = False
    for raw in src.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if line.startswith("const BANK=["):
            in_bank = True
            continue
        if in_bank and line == "];":
            break
        if not in_bank:
            continue

        m = SECLINE.match(line)
        if m:
            section = m.group(1)
            continue
        if not QLINE.match(line):
            continue

        try:
            q = js_obj_to_json(line)
        except json.JSONDecodeError as e:
            print(f"  !! {subject}: unparsed line: {e}\n     {line[:90]}")
            continue

        out.append(
            {
                "id": f"{subject}{len(out) + 1:04d}",
                "sec": section,
                "t": q["t"],
                "q": q["q"],
                "o": q["o"],
                "a": q["a"],
                "w": q["w"],
                "k": q["k"],
                "src": "legacy",
            }
        )
    return out


def main():
    BANKS.mkdir(parents=True, exist_ok=True)
    total = 0
    for subject, folder in SUBJECTS.items():
        qs = extract(subject, folder)
        if qs is None:
            continue
        (BANKS / f"{subject}.json").write_text(
            json.dumps(qs, indent=1, ensure_ascii=False) + "\n", encoding="utf-8"
        )
        total += len(qs)
        print(f"  {subject}: {len(qs):4d} questions -> banks/{subject}.json")
    print(f"  total: {total}")


if __name__ == "__main__":
    sys.exit(main())
