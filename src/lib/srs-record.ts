import { Question } from './types'

// Client-side helper: hands a finished session's questions and results to the review
// queue. Fire-and-forget — a failure here must never block a result screen, since the
// score itself is already saved through its own path.

export interface RecordItem {
  stem: string
  options?: string[]
  correct: number | boolean
  explanation: string
  subject: string
  source: 'practice' | 'exam' | 'notes-quiz'
  wasCorrect: boolean
}

export async function recordSession(items: RecordItem[]): Promise<void> {
  if (!items.length) return
  try {
    await fetch('/api/srs/record', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    })
  } catch {}
}

// Zips a session's question list with its per-question outcomes.
export function itemsFromSession(
  questions: Question[],
  outcomes: boolean[],
  subject: string,
  source: RecordItem['source'],
): RecordItem[] {
  const items: RecordItem[] = []
  for (let i = 0; i < outcomes.length && i < questions.length; i++) {
    const q = questions[i]
    items.push({
      stem: q.stem,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      subject,
      source,
      wasCorrect: outcomes[i],
    })
  }
  return items
}
