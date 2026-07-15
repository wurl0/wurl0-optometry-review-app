import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import { todayStr, type ReviewCard, type QuestionPayload } from '@/lib/srs'
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

  const [{ data: dueRows }, { count: queueCount }, { count: solidCount }] = await Promise.all([
    supabase
      .from('question_reviews')
      .select('question_id, subject, source, payload, box, due_on, reps, lapses')
      .eq('user_id', user.id)
      .eq('retired', false)
      .lte('due_on', today)
      .order('due_on', { ascending: true })
      .limit(SESSION_CAP),
    supabase
      .from('question_reviews')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('retired', false),
    supabase
      .from('question_reviews')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('retired', true),
  ])

  const rows = (dueRows ?? []) as Row[]

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

  // Interleave: order by subject round-robin so consecutive cards rarely share a subject.
  const bySubject = new Map<string, ReviewCard[]>()
  for (const c of cards) {
    const list = bySubject.get(c.subject) ?? []
    list.push(c)
    bySubject.set(c.subject, list)
  }
  const interleaved: ReviewCard[] = []
  const lists = [...bySubject.values()]
  let placed = 0
  while (placed < cards.length) {
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
      queueTotal={queueCount ?? 0}
      solidTotal={solidCount ?? 0}
    />
  )
}
