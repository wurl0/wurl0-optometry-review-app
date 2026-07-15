import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import { todayStr, isSweepWindow, sweepQuota, type ReviewCard, type QuestionPayload } from '@/lib/srs'
import { loadAccess, canServeCard } from '@/lib/access'
import { subjectLabel } from './labels'
import ReviewClient from './ReviewClient'

// The queue is drawn interleaved across subjects rather than grouped: switching subjects
// forces a re-read of which rules apply, which is the point of the drill.
const SESSION_CAP = 30

interface Row {
  question_id: string
  subject: string
  source: string
  payload: QuestionPayload
  box: number
  due_on: string
  reps: number
  lapses: number
}

export default async function ReviewPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const today = todayStr()
  const access = await loadAccess(supabase, user)

  const [{ data: dueRows }, { data: allRows }] = await Promise.all([
    supabase
      .from('question_reviews')
      .select('question_id, subject, source, payload, box, due_on, reps, lapses')
      .eq('user_id', user.id)
      .eq('retired', false)
      .lte('due_on', today)
      .order('due_on', { ascending: true })
      .limit(SESSION_CAP * 2), // headroom: some may be filtered out below
    // Counted in JS rather than by the database, because the totals have to be filtered
    // by the same access rule as the cards. A count that disagrees with what the page
    // serves is worse than no count.
    supabase
      .from('question_reviews')
      .select('subject, source, retired')
      .eq('user_id', user.id),
  ])

  // Re-authorise every card against CURRENT access. A card outlives the grant that
  // produced it, so a revoked grant must stop serving its questions here too.
  const rows = ((dueRows ?? []) as Row[])
    .filter(r => canServeCard(access, r.subject, r.source))
    .slice(0, SESSION_CAP)

  const servable = ((allRows ?? []) as
    { subject: string; source: string; retired: boolean; swept_at: string | null }[])
    .filter(r => canServeCard(access, r.subject, r.source))
  const queueCount = servable.filter(r => !r.retired).length
  const solidCount = servable.filter(r => r.retired).length

  // During the taper, resurface a share of the solid pile for one final pass, so nothing
  // that retired in August goes untouched all the way to the exam.
  const unswept = servable.filter(r => r.retired && !r.swept_at).length
  const quota = sweepQuota(unswept, today)

  let sweepCards: ReviewCard[] = []
  if (quota > 0) {
    const { data: sweepRows } = await supabase
      .from('question_reviews')
      .select('question_id, subject, source, payload, box, due_on, reps, lapses')
      .eq('user_id', user.id)
      .eq('retired', true)
      .is('swept_at', null)
      .limit(quota * 3) // headroom for the access filter below
    sweepCards = ((sweepRows ?? []) as Row[])
      .filter(r => canServeCard(access, r.subject, r.source))
      .slice(0, quota)
      .map(r => ({
        questionId: r.question_id,
        subject: r.subject,
        source: r.source,
        payload: r.payload,
        box: r.box,
        dueOn: r.due_on,
        reps: r.reps,
        lapses: r.lapses,
        retired: true, // marks it as a sweep card for the UI; the grader reads the DB
      }))
  }

  const cards: ReviewCard[] = rows.map(r => ({
    questionId: r.question_id,
    subject: r.subject,
    source: r.source,
    payload: r.payload,
    box: r.box,
    dueOn: r.due_on,
    reps: r.reps,
    lapses: r.lapses,
    retired: false,
  }))

  // Today's due cards and the sweep's final checks make one session; the interleave below
  // mixes both by subject rather than running them as separate blocks.
  const session = [...cards, ...sweepCards]

  // Interleave: order by subject round-robin so consecutive cards rarely share a subject.
  const bySubject = new Map<string, ReviewCard[]>()
  for (const c of session) {
    const list = bySubject.get(c.subject) ?? []
    list.push(c)
    bySubject.set(c.subject, list)
  }
  const interleaved: ReviewCard[] = []
  const lists = [...bySubject.values()]
  let placed = 0
  while (placed < session.length) {
    for (const list of lists) {
      const next = list.shift()
      if (next) {
        interleaved.push(next)
        placed++
      }
    }
  }

  const labels: Record<string, string> = {}
  for (const c of interleaved) labels[c.subject] = subjectLabel(c.subject)

  return (
    <ReviewClient
      cards={interleaved}
      labels={labels}
      queueTotal={queueCount}
      solidTotal={solidCount}
    />
  )
}
