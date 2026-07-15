// Spaced-repetition scheduling for the review queue.
//
// The ladder reproduces the Day 1 / 2 / 4 / 7 / 14 schedule: a card entering the queue
// today is due tomorrow, then 2 days after that review, then 3, then 7, then 14. Clearing
// the last rung retires the card to the "solid" pile. A miss at any rung resets the
// interval to the bottom, which is the rule the pen-and-paper drill system already uses.

export const INTERVALS = [1, 2, 3, 7, 14] as const
export const LAST_BOX = INTERVALS.length - 1

export interface QuestionPayload {
  stem: string
  options?: string[]
  correct: number | boolean
  explanation: string
}

export interface ReviewCard {
  questionId: string
  subject: string
  source: string
  payload: QuestionPayload
  box: number
  dueOn: string
  reps: number
  lapses: number
  retired: boolean
}

export interface Schedule {
  box: number
  dueOn: string
  retired: boolean
}

// Stable id for a question that has none of its own. The main banks are plain JSON objects
// and the Top 2 questions are embedded in static HTML, so the stem text is the only thing
// both sides share. FNV-1a over the normalized stem. Every caller sends the raw stem and
// the server hashes it here, so the same question missed in the app and in a Top 2
// reviewer lands on one row rather than two.
export function normalizeStem(stem: string): string {
  return stem
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function questionId(stem: string): string {
  const s = normalizeStem(stem)
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  // Length suffix: cheap collision insurance across banks in the thousands of items.
  return h.toString(16).padStart(8, '0') + '-' + s.length.toString(36)
}

export function addDays(from: Date, days: number): string {
  const d = new Date(from)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

export function todayStr(now: Date = new Date()): string {
  return now.toISOString().split('T')[0]
}

// Where a card goes after being graded. `box` is its current rung; a brand new card
// entering on a miss should be scheduled from box 0 with correct = false.
export function schedule(box: number, correct: boolean, now: Date = new Date()): Schedule {
  if (!correct) {
    return { box: 0, dueOn: addDays(now, INTERVALS[0]), retired: false }
  }
  const next = box + 1
  if (next > LAST_BOX) {
    return { box: LAST_BOX, dueOn: todayStr(now), retired: true }
  }
  return { box: next, dueOn: addDays(now, INTERVALS[next]), retired: false }
}

// How the card's rung reads to the user on the review screen.
export function boxLabel(box: number): string {
  return `Step ${box + 1} of ${INTERVALS.length}`
}
