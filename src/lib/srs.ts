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

// The study day runs on Manila time, not UTC.
//
// This exam and everyone sitting it are in the Philippines (UTC+8, and no DST, so a fixed
// offset is exact rather than an approximation). Dating the queue in UTC put the day
// boundary at 8am local: at 7am you were still "yesterday", so a card scheduled for today
// stayed hidden until 8, and a card missed at 9pm came back 11 hours later instead of the
// next day — shortening the first interval it depends on.
//
// If the app ever has users outside PH, this is the thing to revisit: the boundary would
// have to come from the user rather than a constant.
const MANILA_OFFSET_MS = 8 * 60 * 60 * 1000

// Shift the instant so its UTC calendar date IS the Manila calendar date.
function manila(at: Date): Date {
  return new Date(at.getTime() + MANILA_OFFSET_MS)
}

export function addDays(from: Date, days: number): string {
  const d = manila(from)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().split('T')[0]
}

export function todayStr(now: Date = new Date()): string {
  return manila(now).toISOString().split('T')[0]
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

// ─── The pre-exam sweep ───────────────────────────────────────────────────────────
//
// Clearing the ladder retires a card, and nothing brings it back. For a fixed exam date
// that leaves a hole: a card retired on 12 Aug gets no retrieval at all for the 47 days
// before 28 Sept. The sweep gives every retired card one final pass during the taper.
//
// It needs no new scheduling. A retired card sits on the top rung (box = LAST_BOX), so
// feeding it back through the normal grader does the right thing by itself:
//   recalled -> schedule(LAST_BOX, true)  -> retires again, stays solid
//   missed   -> schedule(LAST_BOX, false) -> bottom rung, due tomorrow, back in the queue
// swept_at only records that a card has had its pass, so it is not swept twice.
//
// The window matches the taper in the study plan (high-yield only, 3 hrs/day), which is
// where the time for this is already budgeted. It closes a week before the exam so the
// last stretch stays clear.
export const SWEEP_START = '2026-09-01'
export const SWEEP_END = '2026-09-21'

export function isSweepWindow(today: string = todayStr()): boolean {
  return today >= SWEEP_START && today <= SWEEP_END
}

const MAX_SWEEP_PER_SESSION = 15

// How many retired cards to resurface today: the backlog spread over the days left in the
// window, so it self-balances if a day is skipped, and never dumps the whole pile at once.
export function sweepQuota(unswept: number, today: string = todayStr()): number {
  if (unswept <= 0 || !isSweepWindow(today)) return 0
  const daysLeft = Math.max(
    1,
    Math.round(
      (new Date(SWEEP_END + 'T00:00:00Z').getTime() - new Date(today + 'T00:00:00Z').getTime()) / 86400000,
    ) + 1,
  )
  return Math.min(MAX_SWEEP_PER_SESSION, Math.ceil(unswept / daysLeft))
}
