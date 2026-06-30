# Tiered, item-level access control for the Top 2 reviewer

Status: SPEC (no code changed yet). Author: Wyrlo + assistant. Date: 2026-06-30.

## Goal
Let Wyrlo keep everything private during personal prep, then release content gradually:
to specific trusted people, one item at a time (exam first, then preboards, then reviewer,
etc.), with the ability to add or remove each item's access per person at any time.

## Design in one sentence
Access is two things kept separate: a **tier** (the shape of what a user can reach) and a
**per-user list of granted item IDs** (the exact content). Tiers are presets over those.

---

## 1. Tiers (the "shape" of access)

| Tier | Original app (practice/exam/notes) | Top 2 items | Cockpit index |
|------|-----------------------------------|-------------|---------------|
| `base`   | yes | none (except items marked public) | no |
| `select` | yes | only items granted to them | no (reaches items via direct home cards) |
| `full`   | yes | only items granted to them | yes (sees the Top 2 index, filtered to granted items) |
| `admin`  | yes | everything | yes (full index) |

- `admin` is also whoever matches `ADMIN_USER_ID` / `ADMIN_EMAIL` (env), which stays the
  master override regardless of the `tier` column.
- The content a `select` or `full` user sees is identical (their granted items). The only
  difference is `full` additionally gets the cockpit index. So tier controls *view shape*,
  grants control *content*.

## 2. Grants (the "content", item-level)
A per-user array of stable item IDs, e.g. `["A.exam", "A.preboards-set2"]`. Granting = add
an ID, revoking = remove it. Empty for `base`. Ignored for `admin`.

---

## 3. Data model (Supabase)

Add two columns to `public.profiles` (migration, safe/idempotent):

```sql
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS tier   text   NOT NULL DEFAULT 'base';
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS grants text[] NOT NULL DEFAULT '{}';
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_tier_chk CHECK (tier IN ('base','select','full','admin'));
```

RLS: unchanged. The existing "Users can view own profile" policy already lets middleware
read `tier` and `grants`. Writes to other users' rows stay server-side only, through the
admin API routes (service role), same as the current approve flow. Never expose a client
write path to `tier`/`grants`.

Defaults: every existing and new user is `base` with empty grants, so nothing they can
reach changes until you grant something. You remain admin via env.

---

## 4. Content manifest (single source of truth)

`src/lib/reviewer-manifest.ts`. One entry per grantable item. Drives the middleware gate,
the dynamic cockpit, the home cards, and the admin toggles. Edit this to add/restructure
content; nothing else hard-codes paths.

```ts
export type ItemType =
  | 'reviewer' | 'strategy' | 'exam' | 'preboards-2025' | 'preboards-set2' | 'mock'

export type Item = {
  id: string          // stable ID, e.g. "A.exam", "mock.set2"
  subject: string     // "A".."H", or "GLOBAL" for the mocks
  type: ItemType
  label: string       // card title
  sub?: string        // card subtitle
  path: string        // exact served path under /top2
  public?: boolean    // free to ALL approved users (preserves today's samples)
}

export const SUBJECTS = [
  { code: 'A', name: 'Visual Biology',                  folder: 'A-Visual-Biology',                 weight: 10 },
  { code: 'B', name: 'Physiological Optics & BV',       folder: 'B-Physiological-Optics-and-BV',     weight: 15 },
  { code: 'C', name: 'Primary Care & Refraction',       folder: 'C-Primary-Care-and-Refraction',     weight: 15 },
  { code: 'D', name: 'Theoretical Optics & CL',         folder: 'D-Theoretical-Optics-Dispensing-CL', weight: 15 },
  { code: 'E', name: 'Ocular Disease',                  folder: 'E-Ocular-Disease-and-Emergencies',  weight: 10 },
  { code: 'F', name: 'Clinical Optometry',              folder: 'F-Clinical-Optometry-and-Specialties', weight: 15 },
  { code: 'G', name: 'Ocular Pharmacology',             folder: 'G-Ocular-Pharmacology',             weight: 10 },
  { code: 'H', name: 'Jurisprudence & Ethics',          folder: 'H-Jurisprudence-and-Ethics',        weight: 10 },
] as const

// Example: subject A fully spelled out. B-H follow the same pattern.
// NOTE: verify filenames against the folders. Most are X-Reviewer/X-Strategy/
// X-Subject-Exam/X-Preboards-2025/X-Preboards-Set2, BUT G and H use
// "X-Subject-Exam-Strategy.html" instead of "X-Strategy.html".
export const ITEMS: Item[] = [
  { id:'A.reviewer',       subject:'A', type:'reviewer',       label:'Visual Biology — Reviewer',       path:'/top2/A-Visual-Biology/A-Reviewer.html' },
  { id:'A.strategy',       subject:'A', type:'strategy',       label:'Visual Biology — Strategy',       path:'/top2/A-Visual-Biology/A-Strategy.html' },
  { id:'A.exam',           subject:'A', type:'exam',           label:'Visual Biology — Subject Exam',   path:'/top2/A-Visual-Biology/A-Subject-Exam.html',   public:true },
  { id:'A.preboards-2025', subject:'A', type:'preboards-2025', label:'Visual Biology — Preboards Set 1',path:'/top2/A-Visual-Biology/A-Preboards-2025.html', public:true },
  { id:'A.preboards-set2', subject:'A', type:'preboards-set2', label:'Visual Biology — Preboards Set 2',path:'/top2/A-Visual-Biology/A-Preboards-Set2.html', public:true },
  // ... B through H ...
  // Globals (mocks):
  { id:'mock.2025', subject:'GLOBAL', type:'mock', label:'OLE Mock Board Exam',          path:'/top2/00-Master-Index/OLE-Mock-Board-Exam.html' },
  { id:'mock.set2', subject:'GLOBAL', type:'mock', label:'OLE Mock Board Exam — Set 2',  path:'/top2/00-Master-Index/OLE-Mock-Board-Exam-Set2.html' },
]

export const ITEM_BY_PATH = new Map(ITEMS.map(i => [i.path, i]))
```

The three `public:true` items reproduce exactly what is free today, so removing the old
hardcoded `releasedPaths` causes no regression.

---

## 5. Access helpers (server-side only)

`src/lib/access.ts`:

```ts
import { ITEM_BY_PATH, type Item } from './reviewer-manifest'

type Access = { tier: string; grants: string[]; isEnvAdmin: boolean }

export function isAdmin(a: Access) { return a.isEnvAdmin || a.tier === 'admin' }

export function canOpenItem(a: Access, item: Item) {
  if (isAdmin(a)) return true
  if (item.public) return true
  if (a.tier === 'base') return false
  return a.grants.includes(item.id)        // select or full
}

export function canOpenCockpit(a: Access) {
  return isAdmin(a) || a.tier === 'full'
}

export function itemForPath(pathname: string): Item | undefined {
  return ITEM_BY_PATH.get(pathname)
}

const ASSET = /\.(css|js|map|woff2?|ttf|otf)$/i  // images already bypass the matcher
export function isAsset(pathname: string) { return ASSET.test(pathname) }
```

---

## 6. Middleware (the actual enforcement)

Replace the current `releasedPaths` block. Fold tier/grants into the same profile read used
for the approval check (one query, not two):

```ts
// after the approval check, for /top2:
if (pathname.startsWith('/top2')) {
  const isEnvAdmin = user?.id === process.env.ADMIN_USER_ID || user?.email === process.env.ADMIN_EMAIL

  // profile fetched once above with: .select('approved, tier, grants')
  const a = { tier: profile?.tier ?? 'base', grants: profile?.grants ?? [], isEnvAdmin }

  if (isAdmin(a)) return supabaseResponse                 // admin: everything
  if (isAsset(pathname)) return supabaseResponse          // css/js/fonts: rendering deps

  // the static cockpit index is admin-only; everyone else uses /reviewer
  if (pathname === '/top2/index.html' || pathname === '/top2/') {
    return NextResponse.redirect(new URL('/reviewer', request.url))
  }

  const item = itemForPath(pathname)
  if (item && canOpenItem(a, item)) return supabaseResponse

  return NextResponse.redirect(new URL('/', request.url))  // default deny
}
```

Notes:
- **Default deny.** Any `/top2` `.html`/`.md` not in the manifest is admin-only. To release
  something new (e.g. an interactive), add it to the manifest.
- **Self-contained content preferred.** The Set 2 reviewers and mocks are single
  self-contained HTML files, so the asset rule rarely matters for them. If an older reviewer
  pulls a sibling `.html` interactive, make that interactive its own manifest item.
- Combine the existing `.select('approved')` into `.select('approved, tier, grants')` so the
  /top2 path adds no extra DB round-trip.

---

## 7. Cockpit: dynamic, per-user index

New route `src/app/reviewer/page.tsx` (server component). This replaces the static
`public/top2/index.html` as the cockpit for non-admins.

- Reads `user` + profile (`tier`, `grants`).
- If not `canOpenCockpit`: redirect to `/`.
- Renders the same sections as the static index (Full board simulation, Subjects grid,
  Preboards sets) but only the items where `canOpenItem` is true (admin sees all).
- The static `public/top2/index.html` stays for admins only (middleware redirects others to
  `/reviewer`). Optionally retire it later.

## 8. Home page (`src/app/page.tsx`)
Render Top 2 cards from the manifest filtered by `canOpenItem`, instead of hand-written
cards:
- `base`: original-app cards + any `public` sample cards.
- `select`: original app + direct cards for granted items. No cockpit link.
- `full`: original app + direct cards for granted items + an "Open Top 2 Reviewer" link to
  `/reviewer`.
- `admin`: everything + `/reviewer` + the static index link.

## 9. Admin panel (`src/app/admin`)
Per approved user, add a "Manage access" section:
- Tier dropdown (`base` / `select` / `full` / `admin`).
- A checklist of all manifest items grouped by subject; checked = granted. Toggling
  grants/revokes.
- Save posts to a new admin API route `POST /api/admin/access` `{ profileId, tier, grants }`,
  guarded the same way as `/api/admin/approve` (admin-only, service-role write).
- Extend `GET /api/admin/users` select to include `tier, grants`.

---

## 10. Example: your exact workflow
Sharing subject A to one trusted person, item by item, after you have used it yourself:
1. They sign up, you approve them. Tier defaults `base` → they see only the original app.
2. You set them to `select`, check `A.exam` → their home shows just the A Subject Exam.
3. Later check `A.preboards-set2` → that card appears too.
4. Later check `A.reviewer` → appears.
5. Uncheck any item to revoke; access stops on their next request (middleware re-reads).
6. Switch them to `full` to give the cockpit index, still filtered to their granted items.

Everything you have not granted stays invisible and unreachable, so you keep first access.

## 11. Security notes
- Enforcement lives in middleware (server). Cards are UI only, never the gate.
- Manifest + helpers are server-side; the client never decides access.
- Exact-path matching + default-deny means a forgotten file is locked, not leaked.
- One combined profile read per protected request; cache later only if needed.

## 12. Rollout (each step independently shippable and reversible)
1. SQL migration (add `tier`, `grants`). Deploy. No behavior change yet.
2. Add `reviewer-manifest.ts` + `access.ts` (not wired in). Deploy.
3. Switch middleware to manifest-driven gate (drops `releasedPaths`; `public` items keep the
   current free samples). Test as admin and as a base user.
4. Build `/reviewer` dynamic cockpit; lock static `/top2/index.html` to admin.
5. Home page renders granted cards by tier.
6. Admin panel: tier + grants toggles + `/api/admin/access`.

## Open defaults chosen (change if you disagree)
- Tier names `base/select/full/admin` instead of numbers (avoids "is tier 1 high or low").
- `admin` stays env-based as master; the `admin` tier value is optional/secondary.
- Granularity is item-level (per your decision): exam, strategy, reviewer, each preboard
  set, and each mock are separately grantable.
