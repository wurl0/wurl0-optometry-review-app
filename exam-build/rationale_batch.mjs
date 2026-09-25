// Print one batch of bank questions in a compact form for rationale authoring.
//   node exam-build/rationale_batch.mjs <slug> <start> <count>
// Keyed by stem_hash, the same id public.questions uses. Merged duplicates are skipped
// (see supabase/questions-reconcile.sql): only the master copy gets a rationale.
import { loadBank } from './_load_bank.mjs'
import { questionId } from './_stem_hash.mjs'

const SKIP = new Set([
  // theoretical-optics copies of physiologic-optics masters
  '8578212e-13', '9d99fdfc-1k', '18d59171-1f', '102ad1c2-1o', 'e9cb4ec9-1g',
  // binocular-vision copy of the ocular-anatomy superior oblique master
  'ada05eca-18',
])

const [slug, start = '0', count = '25'] = process.argv.slice(2)
const all = loadBank(slug).questions
const rows = all.map((q, i) => ({ q, i, h: questionId(q.stem) }))
  .filter((r) => !(slug === 'theoretical-optics' && SKIP.has(r.h)) && !(slug === 'binocular-vision' && SKIP.has(r.h)))
for (const { q, i, h } of rows.slice(+start, +start + +count)) {
  const opts = q.type === 'tf' ? 'TF' : q.options.map((o, j) => `${j}) ${o}`).join(' | ')
  console.log(`@${h} #${i} key=${q.type === 'tf' ? q.correct : q.correct}\n  Q: ${q.stem}\n  O: ${opts}\n  E: ${q.explanation ?? ''}`)
}
console.error(`${slug}: ${rows.length} to author, printed ${start}..${Math.min(+start + +count, rows.length) - 1}`)
