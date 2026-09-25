// Validate authored rationale batches and (optionally) write them into public.questions.
//
//   node exam-build/load_rationales.mjs                 # check every file, write nothing
//   SUPABASE_SERVICE_ROLE_KEY=... node exam-build/load_rationales.mjs --apply
//
// Batch files live in exam-build/rationales/<slug>-NN.txt, one block per question:
//   @<stem_hash>      key, same as public.questions.stem_hash
//   c: decisive clue          -> decisive_clue
//   k: stem keyword           -> stem_keyword   (optional; only for qualifiers like 'except')
//   m: plain mechanism        -> mechanism
//   t: clinical term          -> clinical_term  (optional)
//   o: r0 | r1 | r2 | r3      -> option_rationales, SAME ORDER as the bank's options, no letters
//   l: teaching moment        -> teaching_moment
//   x: exam tip               -> exam_tip
//   s: verify | why           -> answer_status + answer_note (optional; a suspected wrong key)
// The answer key and stem are never touched. reviewed_by stays null until Wyrlo reviews.
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadBank } from './_load_bank.mjs'
import { questionId } from './_stem_hash.mjs'

const DIR = join(dirname(fileURLToPath(import.meta.url)), 'rationales')
const APPLY = process.argv.includes('--apply')
const FIELDS = { c: 'decisive_clue', k: 'stem_keyword', m: 'mechanism', t: 'clinical_term',
                 o: 'option_rationales', l: 'teaching_moment', x: 'exam_tip', s: 'answer_status' }
const REQUIRED = ['c', 'm', 'l', 'x']
const LETTER_REF = /\b([Oo]ption|[Cc]hoice|[Aa]nswer)s?\s+[A-D]\b/

function parse(file) {
  const blocks = readFileSync(join(DIR, file), 'utf8').split(/^@/m).slice(1)
  return blocks.map((b) => {
    const [head, ...lines] = b.trim().split('\n')
    const f = {}
    for (const line of lines) {
      const m = line.match(/^([a-z]):\s?(.*)$/)
      if (m) f[m[1]] = m[2].trim()
    }
    return { hash: head.trim(), f }
  })
}

const errors = []
const updates = []
const banks = new Map()
for (const file of readdirSync(DIR).filter((n) => n.endsWith('.txt')).sort()) {
  const slug = file.replace(/-\d+\.txt$/, '')
  if (!banks.has(slug)) {
    banks.set(slug, new Map(loadBank(slug).questions.map((q) => [questionId(q.stem), q])))
  }
  for (const { hash, f } of parse(file)) {
    const q = banks.get(slug).get(hash)
    const where = `${file} @${hash}`
    if (!q) { errors.push(`${where}: no such question in ${slug}`); continue }
    for (const k of REQUIRED) if (!f[k]) errors.push(`${where}: missing ${k}:`)
    const all = Object.values(f).join(' ')
    if (all.includes('—')) errors.push(`${where}: em dash`)
    if (LETTER_REF.test(all)) errors.push(`${where}: letter reference`)
    const row = { subject: slug, stem_hash: hash }
    for (const [k, v] of Object.entries(f)) {
      if (k === 'o') {
        const parts = v.split(' | ').map((s) => s.trim())
        if (q.type !== 'mcq') errors.push(`${where}: o: given for a true/false item`)
        else if (parts.length !== q.options.length) errors.push(`${where}: ${parts.length} option rationales, bank has ${q.options.length}`)
        else if (!parts[q.correct].startsWith('Fits')) errors.push(`${where}: correct slot ${q.correct} should start with "Fits"`)
        row.option_rationales = parts
      } else if (k === 's') {
        const [status, ...note] = v.split(' | ')
        row.answer_status = status.trim(); row.answer_note = note.join(' | ').trim()
      } else if (FIELDS[k]) row[FIELDS[k]] = v
    }
    if (q.type === 'mcq' && !row.option_rationales) errors.push(`${where}: missing o:`)
    updates.push(row)
  }
}

console.log(`${updates.length} questions in ${readdirSync(DIR).filter((n) => n.endsWith('.txt')).length} files, ${errors.length} problems`)
for (const e of errors) console.log('  ' + e)
if (errors.length) process.exit(1)
if (!APPLY) { console.log('Check only. Add --apply (with SUPABASE_SERVICE_ROLE_KEY) to write.'); process.exit(0) }

const { createClient } = await import('@supabase/supabase-js')
const env = Object.fromEntries(readFileSync('.env.local', 'utf8').split('\n')
  .map((l) => l.match(/^([A-Z_]+)=(.*)$/)).filter(Boolean).map((m) => [m[1], m[2].trim()]))
const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? env.SUPABASE_SERVICE_ROLE_KEY
if (!key) { console.error('SUPABASE_SERVICE_ROLE_KEY is not set'); process.exit(1) }
const db = createClient(url, key, { auth: { persistSession: false } })
let written = 0
for (const { subject, stem_hash, ...fields } of updates) {
  const { data, error } = await db.from('questions').update(fields)
    .eq('subject', subject).eq('stem_hash', stem_hash).eq('source', 'bank').select('id')
  if (error) { console.error(`${subject} @${stem_hash}: ${error.message}`); process.exit(1) }
  if (data.length !== 1) { console.error(`${subject} @${stem_hash}: matched ${data.length} rows`); process.exit(1) }
  written++
}
console.log(`Wrote ${written} questions.`)
