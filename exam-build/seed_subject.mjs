// Emit an idempotent seed for ONE main-app bank subject into public.questions.
// Re-running is safe: it deletes that subject's 'bank' rows, then re-inserts.
//   node exam-build/seed_subject.mjs <slug> > seed.sql
// Reads only local JSON. stem_hash matches src/lib/srs.ts questionId().
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
const slug = process.argv[2]
if (!slug) { console.error('usage: seed_subject.mjs <slug>'); process.exit(1) }
// Bank slug -> OLE 2016 TOS area (A-H), mirroring src/lib/subjects.ts SUBJECT_GROUPS.
// Each main-app bank maps cleanly to one area (see SYLLABI-TOPIC-MAP.md). The occupational/
// public-health split that affects the ethics *subject* does not appear in this bank's
// questions (verified 2026-09-18), so ethics -> H is correct as a blanket tag.
const AREA = {
  'ocular-anatomy':'A', 'general-anatomy':'A',
  'physiologic-optics':'B', 'binocular-vision':'B',
  'primary-eye-care':'C', 'phorometry':'C',
  'theoretical-optics':'D', 'practical-mechanical-optics':'D', 'contact-lens':'D',
  'ocular-disease':'E',
  'low-vision':'F', 'pediatric-optometry':'F',
  'ocular-pharmacology':'G', 'general-pharmacology':'G',
  'ethics-and-jurisprudence':'H',
}
const area = AREA[slug] ?? null
if (!area) console.error(`WARN: no area mapping for '${slug}' — area will be NULL`)
function normalizeStem(s){return s.toLowerCase().replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/[^a-z0-9]+/g,' ').trim()}
function questionId(s){s=normalizeStem(s);let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return h.toString(16).padStart(8,'0')+'-'+s.length.toString(36)}
const sqlStr=(v)=>v==null?'NULL':`'${String(v).replace(/'/g,"''")}'`
const sqlJson=(v)=>v==null?'NULL':`'${JSON.stringify(v).replace(/'/g,"''")}'::jsonb`
const sqlBool=(v)=>v?'true':'false'
const arr=JSON.parse(readFileSync(join('src','data',`${slug}.json`),'utf8'))
const cols=['stem_hash','type','stem','options','correct','explanation','subject','area','subtopic','section_code','is_trap','source','origin_file']
const values=arr.map((q)=>{
  const type=q.type==='tf'?'tf':'mcq'
  const r={stem_hash:questionId(q.stem),type,stem:q.stem,
    options:type==='mcq'?(q.options??[]):null,
    correct:type==='tf'?Boolean(q.correct):Number(q.correct),
    explanation:q.explanation??null,subject:slug,area,subtopic:q.category??null,
    section_code:q.module??null,is_trap:Boolean(q.isTrap),source:'bank',origin_file:`src/data/${slug}.json`}
  return `  (${sqlStr(r.stem_hash)}, ${sqlStr(r.type)}, ${sqlStr(r.stem)}, ${sqlJson(r.options)}, ${sqlJson(r.correct)}, ${sqlStr(r.explanation)}, ${sqlStr(r.subject)}, ${sqlStr(r.area)}, ${sqlStr(r.subtopic)}, ${sqlStr(r.section_code)}, ${sqlBool(r.is_trap)}, ${sqlStr(r.source)}, ${sqlStr(r.origin_file)})`
})
let out=`begin;\n`
out+=`delete from public.questions where subject=${sqlStr(slug)} and source='bank';\n`
out+=`insert into public.questions (${cols.join(', ')}) values\n`+values.join(',\n')+';\n'
out+=`commit;\n`
process.stdout.write(out)
process.stderr.write(`${slug}: ${arr.length} rows -> area ${area ?? 'NULL'}\n`)
