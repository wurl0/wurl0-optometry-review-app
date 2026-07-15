import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import { SUBJECTS } from '@/lib/subjects'
import { QUESTION_MAP } from '@/lib/banks'
import { todayStr, type QuestionPayload } from '@/lib/srs'
import { Question } from '@/lib/types'
import DrillClient, { type DrillItem } from './DrillClient'

// The 10-minute drill: the lowest-friction way into the app. No level to pick, no subject
// to choose, no config. Two ideas from the study research drive the whole route:
//
//   interleaving  - consecutive questions come from different subjects, which forces a
//                   re-read of which rules apply instead of settling into one subject's
//                   groove. It feels harder and tests better.
//   small start   - "10 minutes" is a commitment nobody argues with. The pool is drawn far
//                   deeper than 10 minutes of questions so momentum is never interrupted
//                   by running out.
//
// Draw order: due review cards first (they are the highest-value retrievals available),
// then fresh bank questions biased toward subjects that have gone untested longest.

const POOL_SIZE = 45         // ~3x what 10 minutes fits, so the stream never dries up
const MAX_DUE_IN_DRILL = 10  // leave room for fresh material; the rest stay in /review

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Round-robin across subjects so neighbours rarely share one.
function interleave(groups: DrillItem[][]): DrillItem[] {
  const lists = groups.filter(g => g.length).map(g => [...g])
  const out: DrillItem[] = []
  while (lists.length) {
    for (let i = 0; i < lists.length; i++) {
      const next = lists[i].shift()
      if (next) out.push(next)
    }
    for (let i = lists.length - 1; i >= 0; i--) if (!lists[i].length) lists.splice(i, 1)
  }
  return out
}

export default async function DrillPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [dueRes, attemptsRes] = await Promise.all([
    supabase
      .from('question_reviews')
      .select('question_id, subject, source, payload')
      .eq('user_id', user.id)
      .eq('retired', false)
      .lte('due_on', todayStr())
      .order('due_on', { ascending: true })
      .limit(MAX_DUE_IN_DRILL),
    supabase
      .from('exam_attempts')
      .select('subject, percentage, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false }),
  ])

  // Due review cards, carrying their original subject/source so grading them here feeds
  // the same schedule as /review would.
  const dueItems: DrillItem[] = (dueRes.data ?? []).map(r => {
    const p = r.payload as QuestionPayload
    return {
      stem: p.stem,
      options: p.options,
      correct: p.correct,
      explanation: p.explanation,
      subject: r.subject,
      source: r.source,
      subjectLabel: SUBJECTS.find(s => s.slug === r.subject)?.name ?? r.subject,
      isReview: true,
    }
  })

  // Bias fresh material toward what has gone untested. A subject with no attempt at all
  // sorts first; otherwise the weakest recent score leads.
  const lastPct = new Map<string, number>()
  for (const a of attemptsRes.data ?? []) {
    if (!lastPct.has(a.subject)) lastPct.set(a.subject, a.percentage)
  }
  const ranked = [...SUBJECTS]
    .filter(s => QUESTION_MAP[s.slug])
    .sort((x, y) => (lastPct.get(x.slug) ?? -1) - (lastPct.get(y.slug) ?? -1))

  const dueStems = new Set(dueItems.map(i => i.stem))
  const perSubject = Math.ceil((POOL_SIZE - dueItems.length) / Math.max(1, ranked.length)) + 1

  const freshGroups: DrillItem[][] = ranked.map(s => {
    const bank = (QUESTION_MAP[s.slug] ?? []) as Question[]
    return shuffle(bank)
      .filter(q => !dueStems.has(q.stem))
      .slice(0, perSubject)
      .map(q => ({
        stem: q.stem,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation,
        subject: s.slug,
        source: 'drill' as const,
        subjectLabel: s.name,
        isReview: false,
      }))
  })

  // Due cards lead (highest-value retrievals first), then fresh material. Both halves are
  // interleaved by subject in their own right — grouping the due cards by subject first
  // matters, since a run of misses usually comes from the same exam.
  const dueBySubject = new Map<string, DrillItem[]>()
  for (const d of dueItems) {
    const list = dueBySubject.get(d.subject) ?? []
    list.push(d)
    dueBySubject.set(d.subject, list)
  }

  const pool = [
    ...interleave([...dueBySubject.values()]),
    ...interleave(freshGroups),
  ].slice(0, POOL_SIZE)

  return <DrillClient pool={pool} dueCount={dueItems.length} />
}
