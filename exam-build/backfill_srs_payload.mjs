// Backfill / repair review-queue cards so each card's stored payload matches the current
// canonical question. Re-run this after correcting a question's answer or rationale in a
// bank/page; it rewrites the affected /review cards to the fixed content. Three sources:
//   - scored Top 2 HTML (preboards/mocks/reviewer: {q, opts, ans, rat} or {q, o, a, w, ...})
//   - main-app banks    (src/data/*.json: {stem, options, correct, explanation})
//   - Top 2 banks       (exam-build/banks/A-H.json: {q, o, a, decode, ow})
// Later sources win a stem-hash collision (banks last: their decode + per-option ow is the
// richer content). This covers preboards questions that live only in the HTML pages.
//
// Existing cards also self-heal the next time their subject exam is sat (the record route
// re-upserts the full payload), so this only matters for a card already sitting in /review
// that has not been re-encountered since the fix. Idempotent and safe to re-run.
//
// Match is by the SAME question id the app uses: FNV-1a over the normalized stem. We
// recompute the id from each row's own payload.stem, so it lines up exactly.
//
// Run from the repo root, with the service-role key (never ship this key):
//   NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node exam-build/backfill_srs_payload.mjs
// Add --apply to write; without it the script only reports what it would change.

import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createClient } from '@supabase/supabase-js'

const HERE = dirname(fileURLToPath(import.meta.url))
const APPLY = process.argv.includes('--apply')

// --- keep in lockstep with src/lib/srs.ts ---
function normalizeStem(stem) {
  return stem.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[^a-z0-9]+/g, ' ').trim()
}
function questionId(stem) {
  const s = normalizeStem(stem)
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0 }
  return h.toString(16).padStart(8, '0') + '-' + s.length.toString(36)
}

// --- build qid -> canonical patch from BOTH question sources ---
// We overwrite options+correct together (not fields in isolation): a card's stored options
// were shuffled at harvest time, so grafting bank-order ow/explanation onto them misaligns
// the per-option text. Replacing the whole set with the bank's canonical order keeps
// options, correct, and the rationale consistent with each other. Each patch also carries
// its own rationale field (Top 2 -> decode+ow; main-app -> explanation), and only the fields
// a patch defines are written, so a Top 2 card is not forced to grow an explanation etc.
const patch = new Map()

// Scored Top 2 HTML pages first (preboards {q,opts,ans,rat}, mocks/reviewer {q,o,a,w,decode,ow}).
// These carry questions that are NOT in the banks (e.g. preboards), so cards harvested from
// them would otherwise be missed. We JSON.parse each embedded {"q":...} object; unquoted-JS
// objects (subject-exams, which are bank-derived) fail to parse and are skipped — the banks
// below cover those. Later sources (src/data, banks) win any stem-hash collision.
function walkHtml(dir) {
  const out = []
  let entries
  try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return out }
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...walkHtml(p))
    else if (e.name.endsWith('.html') && !p.includes('.bak')) out.push(p)
  }
  return out
}
function braceObj(t, i) {
  let L = i
  while (L >= 0 && t[L] !== '{') L--
  if (L < 0) return null
  let d = 0
  for (let j = L; j < t.length; j++) {
    if (t[j] === '{') d++
    else if (t[j] === '}') { d--; if (d === 0) return t.slice(L, j + 1) }
  }
  return null
}
for (const file of walkHtml(join(HERE, '..', 'public', 'top2'))) {
  const t = readFileSync(file, 'utf8')
  const seen = new Set()
  const re = /"q"\s*:/g
  let m
  while ((m = re.exec(t))) {
    const obj = braceObj(t, m.index)
    if (!obj || seen.has(obj)) continue
    seen.add(obj)
    let o
    try { o = JSON.parse(obj) } catch { continue }
    const stem = o.q ?? o.stem
    const options = o.opts ?? o.options ?? o.o
    const correct = o.ans ?? o.a ?? o.correct
    if (typeof stem !== 'string' || !Array.isArray(options) || typeof correct !== 'number') continue
    patch.set(questionId(stem), {
      options, correct,
      explanation: o.rat || o.explanation || o.w || undefined,
      decode: o.decode || undefined, ow: o.ow || undefined,
    })
  }
}

// Main-app banks next (src/data/*.json: {stem, options, correct, explanation}). Cards for
// these are harvested from app practice/exams (e.g. the Primary Eye Care drill).
const mainDir = join(HERE, '..', 'src', 'data')
const mainBanks = readdirSync(mainDir).filter(f => f.endsWith('.json')).map(f => join(mainDir, f))
for (const file of mainBanks) {
  let bank
  try { bank = JSON.parse(readFileSync(file, 'utf8')) } catch { continue }
  if (!Array.isArray(bank)) continue
  for (const q of bank) {
    if (!q || typeof q.stem !== 'string' || !Array.isArray(q.options)) continue
    patch.set(questionId(q.stem), {
      options: q.options, correct: q.correct,
      explanation: q.explanation || undefined,
    })
  }
}

// Top 2 banks second (exam-build/banks/A-H.json: {q, o, a, decode, ow}). These win any
// stem-hash collision because their decode + per-option ow is the richer review content.
for (const L of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
  const bank = JSON.parse(readFileSync(join(HERE, 'banks', `${L}.json`), 'utf8'))
  for (const q of bank) {
    if (!q.decode && !q.ow) continue
    patch.set(questionId(q.q), {
      options: q.o, correct: q.a,
      decode: q.decode || undefined, ow: q.ow || undefined,
    })
  }
}
// Aliases for questions whose stem was corrected after cards were already harvested: the old
// card's id is FNV-1a(old stem) and no longer matches the new stem, so it would be missed.
// Map old id -> the new canonical patch (with the new stem) to repair the stale card in place.
const RENAMED = [
  {
    oldStem: "A patient's spectacle prescription is OD −3.00 −1.00 × 90. The patient's pupillary distance is 30mm from the OC of the right lens. What is the prismatic effect?",
    newStem: "A patient's right spectacle lens is OD −3.00 −1.00 × 90. The patient views through a point 3 mm temporal to the optical center (horizontal displacement). What is the horizontal prismatic effect?",
  },
]
for (const { oldStem, newStem } of RENAMED) {
  const p = patch.get(questionId(newStem))
  if (p) patch.set(questionId(oldStem), { ...p, stem: newStem })
}
console.log(`patches available: ${patch.size} questions`)

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) { console.error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'); process.exit(1) }
const db = createClient(url, key, { auth: { persistSession: false } })

let from = 0, page = 1000, scanned = 0, changed = 0
for (;;) {
  const { data, error } = await db
    .from('question_reviews')
    .select('user_id, question_id, payload')
    .range(from, from + page - 1)
  if (error) { console.error('read failed:', error.message); process.exit(1) }
  if (!data.length) break
  for (const row of data) {
    scanned++
    const p = row.payload || {}
    const hit = patch.get(row.question_id) || (p.stem ? patch.get(questionId(p.stem)) : null)
    if (!hit) continue
    // Only the fields this patch defines get written (Top 2 -> options/correct/decode/ow;
    // main-app -> options/correct/explanation). Build the diff, then skip if it is a no-op.
    const fields = ['stem', 'options', 'correct', 'decode', 'ow', 'explanation']
    const next = { ...p }
    let differs = false
    for (const k of fields) {
      if (hit[k] === undefined) continue
      if (JSON.stringify(p[k]) !== JSON.stringify(hit[k])) differs = true
      next[k] = hit[k]
    }
    if (!differs) continue // already canonical — idempotent re-runs
    changed++
    if (APPLY) {
      const { error: upErr } = await db
        .from('question_reviews')
        .update({ payload: next })
        .eq('user_id', row.user_id)
        .eq('question_id', row.question_id)
      if (upErr) { console.error('update failed:', row.question_id, upErr.message); process.exit(1) }
    }
  }
  from += page
}
console.log(`${APPLY ? 'updated' : 'would update'} ${changed} of ${scanned} scanned rows`)
if (!APPLY) console.log('dry run — re-run with --apply to write')
