import { Question } from './types'

// Client-side helper: hands a finished session's questions and results to the review
// queue and reports back what happened, so a result screen can say so. A failure here
// must never block the screen — it resolves null and the caller shows nothing, since the
// score itself is already saved through its own path.

export interface RecordResult {
  added: number     // new cards entering the queue
  advanced: number  // due cards recalled correctly here, moved up a rung
  reset: number     // cards already in the queue, missed again
}

export interface RecordItem {
  stem: string
  options?: string[]
  correct: number | boolean
  explanation: string
  subject: string
  // A drill can replay a card that first entered from a Top 2 reviewer, so it carries
  // that card's original source through rather than relabelling it.
  source: 'practice' | 'exam' | 'notes-quiz' | 'drill'
    | 'subject-exam' | 'preboards-2025' | 'preboards-set2' | 'preboards-set3' | 'mock'
  wasCorrect: boolean
}

export async function recordSession(items: RecordItem[]): Promise<RecordResult | null> {
  if (!items.length) return null
  try {
    const res = await fetch('/api/srs/record', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    })
    if (!res.ok) return null
    const data = await res.json()
    if (typeof data?.added !== 'number') return null
    return data as RecordResult
  } catch {
    return null
  }
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
