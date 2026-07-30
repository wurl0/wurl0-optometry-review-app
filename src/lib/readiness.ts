import { SUBJECTS, type SubjectDef } from './reviewer-manifest'

// Turns a user's raw ole_attempts rows into the readiness readout:
// per-subject item-weighted score, weighted theoretical GWA, a pass/borderline
// verdict, and a ranked "revisit this" list down to the sub-area.
//
// Scores are weighted by EVIDENCE, not by attempt count. A subject pools its most
// recent attempts by number of questions answered, so a 25-item quiz counts a
// quarter of a 100-item exam and a lucky small sample cannot dominate. Until a
// subject has enough items behind it, it is provisional: shown, but it neither
// lifts the GWA nor is credited toward the honest floor.

export const PASS = 75

// The pooling window keeps pulling recent attempts until it holds BOTH enough
// items and enough separate sittings. The item target stops a wall of tiny
// quizzes from being the whole picture; the sitting minimum stops a single big
// exam from becoming the whole picture (which would just be noise the other way).
const WINDOW_TARGET_ITEMS = 150 // pool recent attempts up to ~this many items
const WINDOW_MIN_ATTEMPTS = 3   // ...but always across at least this many sittings
const CONFIDENCE_MIN_ITEMS = 75 // under this many items, the subject is provisional

export type AttemptSource = 'subject-exam' | 'preboards-2025' | 'preboards-set2' | 'mock'

export interface OleAttempt {
  subjectCode: string
  source: AttemptSource
  score: number // items correct
  total: number // items answered
  percentage: number
  createdAt: string
  areaBreakdown?: { area: string; correct?: number; total?: number; percentage: number }[]
}

export interface AreaScore {
  area: string
  percentage: number // item-weighted across the attempts in the pooling window
}

export interface SubjectReadiness {
  code: string
  name: string
  weight: number
  avg: number | null // item-weighted pool of the recent window; null if never attempted
  best: number | null
  attempts: number
  items: number // total questions behind avg (drives the confidence gate)
  confident: boolean // items >= CONFIDENCE_MIN_ITEMS; false = provisional
  passed: boolean // confident AND avg >= 75
  weakAreas: AreaScore[] // sub-areas below 75, weakest first
}

// BUILDING = not enough of the exam confidently tested yet to judge readiness.
export type Verdict = 'READY' | 'BORDERLINE' | 'NOT_READY' | 'BUILDING'

export interface DrillItem {
  code: string
  name: string
  weight: number
  avg: number | null // null = untested
  deficit: number // weight * (75 - avg); untested/provisional scored at full weight
  untested: boolean
  provisional: boolean // has attempts but too few items to count yet
}

export interface Readiness {
  gwa: number | null // average across the subjects CONFIDENTLY tested (weighted among themselves)
  projectedGwa: number | null // honest floor: same weighted sum over the FULL exam weight, so untested/provisional count as 0
  verdict: Verdict
  margin: number | null // projectedGwa - 75 (distance to the line on the honest basis)
  measuredWeight: number // sum of weights confidently tested (out of 100)
  measuredCount: number // subjects with a confident score (of 8)
  coverageMet: boolean // every subject confidently tested — required before a readiness verdict
  mockGwa: number | null // latest mock's overall %, the exam-day reality check
  subjects: SubjectReadiness[]
  drillList: DrillItem[] // what to revisit, most impactful first
}

// Most recent attempts, pooled newest-first until we have both enough items and
// enough sittings. Returned oldest-first so area aggregation reads in order.
function poolWindow(attempts: OleAttempt[]): OleAttempt[] {
  const newestFirst = [...attempts].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  const picked: OleAttempt[] = []
  let items = 0
  for (const a of newestFirst) {
    picked.push(a)
    items += a.total
    if (items >= WINDOW_TARGET_ITEMS && picked.length >= WINDOW_MIN_ATTEMPTS) break
  }
  return picked.reverse()
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

// Item-weight each sub-area across the pooling window, keep those below 75. Uses
// real correct/total counts when present; falls back to the stored percentage.
function weakAreas(windowAttempts: OleAttempt[]): AreaScore[] {
  const acc: Record<string, { correct: number; total: number }> = {}
  for (const a of windowAttempts) {
    for (const area of a.areaBreakdown ?? []) {
      if (!acc[area.area]) acc[area.area] = { correct: 0, total: 0 }
      if (area.total && area.total > 0) {
        acc[area.area].correct += area.correct ?? (area.percentage / 100) * area.total
        acc[area.area].total += area.total
      } else {
        // No item counts stored: treat the percentage as a single 100-item sample.
        acc[area.area].correct += area.percentage
        acc[area.area].total += 100
      }
    }
  }
  return Object.entries(acc)
    .map(([area, v]) => ({ area, percentage: round1((100 * v.correct) / v.total) }))
    .filter(a => a.percentage < PASS)
    .sort((a, b) => a.percentage - b.percentage)
}

function subjectReadiness(def: SubjectDef, attempts: OleAttempt[]): SubjectReadiness {
  const mine = attempts.filter(a => a.subjectCode === def.code)
  const windowAttempts = poolWindow(mine)
  const items = windowAttempts.reduce((s, a) => s + a.total, 0)
  const correct = windowAttempts.reduce((s, a) => s + a.score, 0)
  const avg = items > 0 ? round1((100 * correct) / items) : null
  const confident = items >= CONFIDENCE_MIN_ITEMS
  const best = mine.length ? round1(Math.max(...mine.map(a => a.percentage))) : null
  return {
    code: def.code,
    name: def.name,
    weight: def.weight,
    avg,
    best,
    attempts: mine.length,
    items,
    confident,
    passed: avg !== null && confident && avg >= PASS,
    weakAreas: weakAreas(windowAttempts),
  }
}

export function computeReadiness(attempts: OleAttempt[]): Readiness {
  const subjects = SUBJECTS.map(def => subjectReadiness(def, attempts))
  const totalWeight = SUBJECTS.reduce((sum, d) => sum + d.weight, 0) // 100 across the 8 areas

  // Only CONFIDENT subjects count. A subject with attempts but too few items is
  // provisional: it is neither averaged into the GWA nor credited to the floor.
  const measured = subjects.filter(s => s.avg !== null && s.confident)
  const measuredWeight = measured.reduce((sum, s) => sum + s.weight, 0)
  const weighted = measured.reduce((sum, s) => sum + s.weight * (s.avg as number), 0)
  // gwa = average over what you have confidently tested (denominator = that weight).
  const gwa = measuredWeight > 0 ? round1(weighted / measuredWeight) : null
  // projectedGwa = the honest floor: untested AND provisional subjects contribute
  // 0, so the denominator is the FULL exam weight. Equals gwa once all 8 are confident.
  const projectedGwa = measured.length > 0 ? round1(weighted / totalWeight) : null
  const coverageMet = measured.length === SUBJECTS.length
  const margin = projectedGwa !== null ? round1(projectedGwa - PASS) : null

  // Mock reality check: the closest thing to an exam-day GWA. A mock logs one
  // row per subject, so weight each subject's most recent mock score.
  let mockWeighted = 0
  let mockWeight = 0
  for (const def of SUBJECTS) {
    const latest = attempts
      .filter(a => a.subjectCode === def.code && a.source === 'mock')
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0]
    if (latest) {
      mockWeighted += def.weight * latest.percentage
      mockWeight += def.weight
    }
  }
  const mockGwa = mockWeight > 0 ? round1(mockWeighted / mockWeight) : null

  // Verdict: theoretical-only, and coverage-gated on CONFIDENT subjects. Until
  // every subject has a confident score there is not enough of the exam measured
  // to call it, so the verdict is BUILDING regardless of how high the tested
  // subjects score. Once fully covered, gwa equals projectedGwa: Ready needs a
  // real buffer above 75 AND every subject clearing 75 on its own; positive but
  // thin is borderline; below the line is not ready.
  const allMeasuredPass = measured.length > 0 && measured.every(s => s.passed)
  let verdict: Verdict = 'BUILDING'
  if (coverageMet) {
    verdict = 'NOT_READY'
    if (gwa !== null && gwa >= PASS) {
      verdict = margin !== null && margin >= 5 && allMeasuredPass ? 'READY' : 'BORDERLINE'
    }
  }

  // Drill list: what keeps the honest floor down, ranked by weight * deficit.
  // Untested and provisional subjects contribute 0 to the floor, so they sit at
  // full weight (take/finish them); confident-but-low subjects rank by their gap.
  const drillList: DrillItem[] = subjects
    .filter(s => s.avg === null || !s.confident || s.avg < PASS)
    .map(s => {
      const untested = s.avg === null
      const provisional = s.avg !== null && !s.confident
      const deficit =
        untested || provisional ? s.weight * PASS : round1(s.weight * (PASS - (s.avg as number)))
      return {
        code: s.code,
        name: s.name,
        weight: s.weight,
        avg: s.avg,
        untested,
        provisional,
        deficit,
      }
    })
    .sort((a, b) => b.deficit - a.deficit)

  return {
    gwa,
    projectedGwa,
    verdict,
    margin,
    measuredWeight,
    measuredCount: measured.length,
    coverageMet,
    mockGwa,
    subjects,
    drillList,
  }
}

// Sample:
//   computeReadiness([
//     { subjectCode: 'D', source: 'subject-exam', score: 20, total: 25, percentage: 80, createdAt: '2026-07-01' },
//     { subjectCode: 'D', source: 'preboards-2025', score: 76, total: 150, percentage: 50.7, createdAt: '2026-07-05' },
//     { subjectCode: 'H', source: 'subject-exam', score: 21, total: 23, percentage: 91.3, createdAt: '2026-07-04' },
//   ])
//   -> D pools 175 items (confident) at ~55%; H has only 23 items so it is
//      provisional (shown, but not in the GWA); verdict BUILDING (not all 8
//      confident); D leads the drillList, H flagged as provisional to confirm.
