#!/usr/bin/env python3
"""Build the keyword index for the Top 2 general search.

The Top 2 reviewers are self-contained static HTML, so there is no data layer to search
the way the main app searches its notes. This walks the reference pages under
public/top2, splits each into heading-anchored sections, and writes a plain-text index
to src/data/top2-search-index.ts for /api/top2-search to read.

Only reference material is indexed: the eight subject reviewers, the strategy cards, and
the law book. The exam and preboard pages are quiz engines whose text is a question pool
-- searching those from the home page would bury a concept lookup under 900 stems, and
they already have their own in-page filters.

IMPORTANT: this is a build step. Regenerate it whenever a reviewer page is rebuilt
(build_subject_reviewer.py) or the index goes stale and search silently returns the old
text. Same class of trap as inject_srs.py.

Usage:  python3 exam-build/build_top2_search_index.py
"""

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOP2 = ROOT / "public" / "top2"
OUT = ROOT / "src" / "data" / "top2-search-index.ts"

# (item id, subject code, label, path relative to public/) -- mirrors reviewer-manifest.ts.
# The item id is what the API re-checks access against, so it must match the manifest.
SUBJECTS = [
    ("A", "Visual Biology", "A-Visual-Biology"),
    ("B", "Physiological Optics & BV", "B-Physiological-Optics-and-BV"),
    ("C", "Primary Care & Refraction", "C-Primary-Care-and-Refraction"),
    ("D", "Theoretical Optics & CL", "D-Theoretical-Optics-Dispensing-CL"),
    ("E", "Ocular Disease", "E-Ocular-Disease-and-Emergencies"),
    ("F", "Clinical Optometry", "F-Clinical-Optometry-and-Specialties"),
    ("G", "Ocular Pharmacology", "G-Ocular-Pharmacology"),
    ("H", "Jurisprudence & Ethics", "H-Jurisprudence-and-Ethics"),
]

# Strategy filename differs for G and H (same exception the manifest encodes).
def strategy_file(code):
    return f"{code}-Subject-Exam-Strategy.html" if code in ("G", "H") else f"{code}-Strategy.html"


# Reference pages that sit outside the generated two-per-subject pattern. This list is a
# SECOND hand-maintained mirror of reviewer-manifest.ts, so it drifts: a page added to the
# manifest but not here stays reachable and silently unsearchable, which is how
# G.g1-strategy was missed. `exam-build/audit_top2.py` compares the two and reports
# "not-in-search-index" -- run it after touching either file.
EXTRA_TARGETS = [
    ("H.optolawbook", "H", "Jurisprudence & Ethics — Law Book", "reviewer",
     "H-Jurisprudence-and-Ethics/H-OPTOLAWBOOK-Reviewer.html"),
    ("G.g1-strategy", "G", "Ocular Pharmacology — G1 Strategy", "strategy",
     "G-Ocular-Pharmacology/G1-General-Pharmacology-Principles/G1-Strategy.html"),
]


def targets():
    """Yield (item_id, subject_code, label, kind, path) for every page to index."""
    for code, name, folder in SUBJECTS:
        yield (f"{code}.reviewer", code, f"{name} — Reviewer", "reviewer",
               TOP2 / folder / f"{code}-Reviewer.html")
        yield (f"{code}.strategy", code, f"{name} — Strategy", "strategy",
               TOP2 / folder / strategy_file(code))
    for item_id, code, label, kind, rel in EXTRA_TARGETS:
        yield (item_id, code, label, kind, TOP2 / rel)


# Containers whose text is navigation or controls, never content.
SKIP_TAGS = {"script", "style", "nav", "aside", "button", "svg", "noscript", "head"}
HEADINGS = {"h1", "h2", "h3"}


class Segmenter(HTMLParser):
    """Split a page into (anchor, heading, text) sections.

    A section starts at each h1-h3 and runs to the next one. The anchor is the id of the
    nearest enclosing element that has one -- in the generated reviewers that is the
    <section id="..."> or <article id="..."> wrapping the heading, which is exactly what
    the page's own nav links to.
    """

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.sections = []
        self.skip_depth = 0
        self.in_heading = None
        self.heading_buf = []
        self.body_buf = []
        self.open_ids = []          # stack of (tag, id) for elements currently open
        self.cur_anchor = ""
        self.cur_heading = ""
        self.cur_h1 = ""            # last h1 = the topic a section belongs to
        self.cur_level = 1

    # -- section bookkeeping ------------------------------------------------------
    def flush(self):
        text = re.sub(r"\s+", " ", " ".join(self.body_buf)).strip()
        if self.cur_heading and (text or self.cur_anchor):
            self.sections.append({
                "anchor": self.cur_anchor,
                "heading": self.cur_heading,
                "topic": self.cur_h1 if self.cur_level > 1 else "",
                "text": text,
            })
        self.body_buf = []

    # -- parser hooks -------------------------------------------------------------
    def handle_starttag(self, tag, attrs):
        if tag in SKIP_TAGS:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        attrd = dict(attrs)
        if tag in HEADINGS:
            self.flush()
            self.in_heading = tag
            self.heading_buf = []
            # Prefer an id on the heading itself, else the nearest open ancestor's.
            self.cur_anchor = attrd.get("id") or next(
                (i for _, i in reversed(self.open_ids) if i), "")
        elif attrd.get("id"):
            self.open_ids.append((tag, attrd["id"]))

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS:
            self.skip_depth = max(0, self.skip_depth - 1)
            return
        if self.skip_depth:
            return
        if tag in HEADINGS and self.in_heading == tag:
            self.cur_heading = re.sub(r"\s+", " ", "".join(self.heading_buf)).strip()
            self.cur_level = int(tag[1])
            if self.cur_level == 1:
                self.cur_h1 = self.cur_heading
            self.in_heading = None
        while self.open_ids and self.open_ids[-1][0] == tag:
            self.open_ids.pop()
            break

    def handle_data(self, data):
        if self.skip_depth:
            return
        if self.in_heading:
            self.heading_buf.append(data)
        else:
            self.body_buf.append(data)

    def close(self):
        super().close()
        self.flush()


def parse(path):
    p = Segmenter()
    p.feed(path.read_text(encoding="utf-8", errors="replace"))
    p.close()
    # Drop empty shells: a heading with no prose adds noise and never wins a search.
    # An anchorless short section is page chrome (the toolbar strip under the title),
    # not content -- but real anchorless prose exists (the law book has no section ids),
    # so the cut is on length, not on the missing anchor alone.
    return [s for s in p.sections
            if len(s["text"]) > 40 and (s["anchor"] or len(s["text"]) > 120)]


TS_HEADER = """// GENERATED FILE -- do not edit by hand.
// Written by exam-build/build_top2_search_index.py. Rerun that script whenever a Top 2
// reviewer or strategy page is rebuilt, or /api/top2-search searches stale text.
//
// The payload is a single JSON string parsed at module load rather than an object
// literal: ~900 sections as literal syntax makes the TypeScript compiler walk every
// node on every build, and none of it is worth type-checking. One string is one node.

import type { Top2Index } from '@/lib/top2-search-types'

// Annotated `string` so TypeScript widens instead of holding a 1.2 MB literal type.
const RAW: string =
"""

TS_FOOTER = """
export const TOP2_INDEX = JSON.parse(RAW) as Top2Index
"""


def emit_ts(payload):
    """Wrap the index as a TS module holding one JSON string literal."""
    body = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    # json.dumps escapes the quotes, backslashes and control chars a TS string needs.
    # U+2028/U+2029 are legal in JSON but were illegal in JS string literals before
    # ES2019, and this project targets ES2017, so force them to escapes.
    literal = (json.dumps(body, ensure_ascii=False)
               .replace("\u2028", "\\u2028")
               .replace("\u2029", "\\u2029"))
    return TS_HEADER + literal + "\n" + TS_FOOTER


def main():
    docs, missing = [], []
    for item_id, code, label, kind, path in targets():
        if not path.exists():
            missing.append(str(path.relative_to(ROOT)))
            continue
        sections = parse(path)
        docs.append({
            "itemId": item_id,
            "subject": code,
            "label": label,
            "kind": kind,
            "path": "/" + str(path.relative_to(ROOT / "public")).replace("\\", "/"),
            "sections": sections,
        })
        print(f"  {item_id:<18} {len(sections):>4} sections  {path.name}")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(emit_ts({"docs": docs}), encoding="utf-8")
    total = sum(len(d["sections"]) for d in docs)
    size = OUT.stat().st_size / 1024
    print(f"\n{len(docs)} pages, {total} sections -> {OUT.relative_to(ROOT)} ({size:.0f} KB)")
    if missing:
        print("\nMISSING (not indexed):")
        for m in missing:
            print("  " + m)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
