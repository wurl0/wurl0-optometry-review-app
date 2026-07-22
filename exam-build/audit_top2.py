#!/usr/bin/env python3
"""Cross-check the four independent sources of truth for Top 2 content.

There is no single generator for the Top 2 site. Files land in public/top2 by hand,
reviewer-manifest.ts is hand-edited, public/top2/index.html is hand-maintained, and the
iCloud notebook is where most pages are authored before being copied over. Any pair of
those can drift with no error surfacing anywhere, which is how D-Prism-360-Visualizer
stayed invisible for weeks and D1-Image-Formation-Zones never reached the live site.

Run from the repo root:  python3 exam-build/audit_top2.py

Exit code is 1 if anything in a BLOCKING check failed, so it can gate a deploy.
"""
import json
import os
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TOP2 = REPO / "public" / "top2"
MANIFEST = REPO / "src" / "lib" / "reviewer-manifest.ts"
INDEX = TOP2 / "index.html"
SEARCH_INDEX = REPO / "src" / "data" / "top2-search-index.ts"
NOTEBOOK = Path(
    "/Users/wyrloalbert/Library/Mobile Documents/com~apple~CloudDocs/"
    "Doctor of Optometry/2026 Boards Review/2026 OLE Preparation - Dr Wyrlo Top 2"
)

# Pages that are deliberately not manifest items: fragments, backups, and the home page.
IGNORE = re.compile(r"\.bak|~$|/index\.html$")
# Standalone visual pages. Kept in sync with build_subject_reviewer.py's glob.
VISUAL_SUFFIXES = ("-Interactive.html", "-Quiz.html", "-Visualizer.html", "-Drill.html")

problems = {"blocking": [], "warning": []}


def flag(level, check, detail):
    problems[level].append((check, detail))


# ---------- load the four sources ----------

ALL_ITEMS = []  # (id, subject, type, path) for every manifest entry, /top2 or not


def manifest_items():
    """Every {path: (id, type)} the manifest exposes, static /top2 paths only."""
    src = MANIFEST.read_text()
    out = {}
    for m in re.finditer(
            r"id:\s*(?:'([^']+)'|(\w+))[^}]*?subject:\s*'([^']+)'[^}]*?"
            r"type:\s*'([^']+)'[^}]*?path:\s*'([^']+)'", src, re.S):
        quoted, ident, subject, item_type, path = m.groups()
        item_id = quoted if quoted is not None else ident
        ALL_ITEMS.append((item_id, subject, item_type, path))
        if path.startswith("/top2/"):
            out[path[len("/top2/"):]] = (item_id, item_type)
    # SUBJECT_ITEMS are generated in a loop rather than written out, so rebuild them
    # the same way fileFor() does instead of trying to regex a template literal.
    subjects = re.findall(r"\{ code: '(\w)', name: '[^']*',\s*folder: '([^']+)'", src)
    for code, folder in subjects:
        strategy = (f"{code}-Subject-Exam-Strategy.html" if code in ("G", "H")
                    else f"{code}-Strategy.html")
        for item_type, fname in (
            ("reviewer", f"{code}-Reviewer.html"),
            ("strategy", strategy),
            ("exam", f"{code}-Subject-Exam.html"),
            ("preboards-2025", f"{code}-Preboards-2025.html"),
            ("preboards-set2", f"{code}-Preboards-Set2.html"),
        ):
            out[f"{folder}/{fname}"] = (f"{code}.{item_type}", item_type)
    return out


def disk_pages():
    """Every .html under public/top2 that a user could conceivably be sent to."""
    out = set()
    for dirpath, _, files in os.walk(TOP2):
        for f in files:
            if not f.endswith(".html"):
                continue
            rel = os.path.relpath(os.path.join(dirpath, f), TOP2)
            if not IGNORE.search("/" + rel):
                out.add(rel)
    return out


def index_links():
    html = INDEX.read_text()
    return {h for h in re.findall(r'href="([^"]+\.html)"', html) if not h.startswith("http")}


def notebook_pages():
    if not NOTEBOOK.exists():
        return None
    out = set()
    for dirpath, _, files in os.walk(NOTEBOOK):
        for f in files:
            if f.endswith(".html") and not IGNORE.search("/" + f):
                out.add(os.path.relpath(os.path.join(dirpath, f), NOTEBOOK))
    return out


def indexed_ids():
    if not SEARCH_INDEX.exists():
        return set()
    return set(re.findall(r'\\"item\\":\\"([^"\\]+)\\"', SEARCH_INDEX.read_text()))


man = manifest_items()
disk = disk_pages()
links = index_links()
nb = notebook_pages()
indexed = indexed_ids()

# ---------- checks ----------

# 1. BLOCKING: a manifest entry pointing at a file that is not there is a dead card.
for path, (item_id, _t) in sorted(man.items()):
    if path not in disk:
        flag("blocking", "manifest-points-at-missing-file", f"{item_id}  ->  {path}")

# 2. BLOCKING: a home-page chip whose target is missing is a 404 for Wyrlo.
for href in sorted(links):
    if href not in disk:
        flag("blocking", "home-chip-target-missing", href)

# 3. WARNING, not blocking: a page linked from the static index but absent from the
#    manifest. The middleware default-denies it, BUT /top2/index.html itself redirects
#    non-admins to /reviewer, and admins bypass the gate entirely. So the real effect is
#    narrower than it first looks: the page works for Wyrlo and is invisible to everyone
#    else, including from the dynamic cockpit, which is manifest-driven. That is a
#    product gap rather than a broken link, so it must not gate a deploy.
for href in sorted(links):
    if href in disk and href not in man:
        flag("warning", "admin-only-reachable", href)

# 4. WARNING: a visual page on disk that no home chip points at. Interactives are not in
#    the search index, so an unlinked one is genuinely unreachable.
for path in sorted(disk):
    if path.endswith(VISUAL_SUFFIXES) and path not in links:
        flag("warning", "visual-page-not-on-home", path)

# 5. WARNING: on disk and reachable, but never listed in the manifest.
for path in sorted(disk):
    if path not in man and path not in links:
        flag("warning", "orphan-on-disk", path)

# 6. WARNING: authored in the notebook but never copied to the repo. This is the gap that
#    hid D1-Image-Formation-Zones: it existed, it worked, it was simply never deployed.
if nb is not None:
    for path in sorted(nb - disk):
        if path.endswith(VISUAL_SUFFIXES) or path.endswith("-Reviewer.html"):
            flag("warning", "in-notebook-not-deployed", path)
else:
    flag("warning", "notebook-unreadable", "iCloud notebook not found; skipped drift check")

# 7. WARNING: reviewers and strategy pages are the only things the search index covers.
#    A manifest reviewer missing from it silently returns stale or no results.
for path, (item_id, item_type) in sorted(man.items()):
    if item_type in ("reviewer", "strategy") and indexed and item_id not in indexed:
        flag("warning", "not-in-search-index", f"{item_id}  ({path})")

# 8. BLOCKING: the admin Access tab builds its checkbox registry from
#    ITEMS.filter(subject === s.code) for each of A-H, plus subject === 'GLOBAL'. An item
#    whose subject is neither is silently dropped: still gated, still openable by admin
#    (who bypasses the middleware entirely), but impossible to GRANT to anyone. That is
#    the failure this check exists for, because admin's own bypass hides it completely.
subject_codes = set(re.findall(r"\{ code: '(\w)'", MANIFEST.read_text())) | {"GLOBAL"}
for item_id, subject, _t, _p in ALL_ITEMS:
    if subject not in subject_codes:
        flag("blocking", "ungrantable-subject",
             f"{item_id}  subject={subject!r} is not A-H or GLOBAL")

# 9. BLOCKING: ITEM_BY_ID and ITEM_BY_PATH are built with `new Map(...)`, so a duplicate
#    id or path silently keeps only the last one and the earlier item becomes unreachable.
for field, idx in (("id", 0), ("path", 3)):
    seen = {}
    for row in ALL_ITEMS:
        seen.setdefault(row[idx], []).append(row[0])
    for value, owners in sorted(seen.items()):
        if len(owners) > 1:
            flag("blocking", f"duplicate-{field}", f"{value}  <-  {', '.join(owners)}")

# ---------- report ----------

print(f"Top 2 audit\n  {len(disk)} pages on disk"
      f"\n  {len(man)} manifest items\n  {len(links)} home-page links"
      f"\n  {len(nb) if nb is not None else '?'} pages in the iCloud notebook\n")

for level, title in (("blocking", "BLOCKING"), ("warning", "WARNING")):
    rows = problems[level]
    if not rows:
        print(f"{title}: none")
        continue
    print(f"{title}: {len(rows)}")
    last = None
    for check, detail in rows:
        if check != last:
            print(f"  [{check}]")
            last = check
        print(f"    {detail}")
    print()

sys.exit(1 if problems["blocking"] else 0)
