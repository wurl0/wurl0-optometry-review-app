// One-time backfill: add `decode` + per-option `ow` to review-queue cards that were
// recorded before the Top 2 rollout (their payload.explanation is the old worked-answer).
//
// Existing cards self-heal the next time their subject exam is sat (the record route
// re-upserts the full payload), so this only matters for cards seen through /review.
// New misses already carry decode/ow via the updated harvester.
//
// Match is by the SAME question id the app uses: FNV-1a over the normalized stem. We
// recompute the id from each row's own payload.stem, so it lines up exactly.
//
// Run once, from the repo root, with the service-role key (never ship this key):
//   NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node exam-build/backfill_srs_payload.mjs
// Add --apply to write; without it the script only reports what it would change.

import { readFileSync } from 'node:fs'
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

// --- build qid -> {decode, ow} from the exam-build subject banks ---
const patch = new Map()
for (const L of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
  const bank = JSON.parse(readFileSync(join(HERE, 'banks', `${L}.json`), 'utf8'))
  for (const q of bank) {
    if (!q.decode && !q.ow) continue
    patch.set(questionId(q.q), { decode: q.decode || undefined, ow: q.ow || undefined })
  }
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
    // Skip rows already carrying the same decode (idempotent re-runs).
    if (p.decode === hit.decode && JSON.stringify(p.ow) === JSON.stringify(hit.ow)) continue
    const next = { ...p, decode: hit.decode, ow: hit.ow }
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
