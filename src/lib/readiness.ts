import { SUBJECTS, type SubjectDef } from './reviewer-manifest'

// Turns a user's raw ole_attempts rows into the readiness readout:
// per-subject rolling average, weighted theoretical GWA, a pass/borderline
// verdict, and a ranked "revisit this" list down to the sub-area.

export const PASS = 75
const ROLLING_WINDOW = 3 // rolling average of the last N attempts per subject

export type AttemptSource = 'subject-exam' | 'preboards-2025' | 'preboards-set2' | 'mock'

export interface OleAttempt {
  subjectCode: string
  source: AttemptSource
  percentage: number
  createdAt: string
  areaBreakdown?: { area: string; percentage: number }[]
}

export interface AreaScore {
  area: string
  percentage: number // averaged across the attempts in the rolling window
}

export interface SubjectReadiness {
  code: string
  name: string
  weight: number
  avg: number | null // rolling avg of last 3; null if never attempted
  best: number | null
  attempts: number
  passed: boolean // avg >= 75
  weakAreas: AreaScore[] // sub-areas below 75, weakest first
}

export type Verdict = 'READY' | 'BORDERLINE' | 'NOT_READY'

export interface DrillItem {
  code: string
  name: string
  weight: number
  avg: number | null // null = untested
  deficit: number // weight * (75 - avg); untested scored at its full weight
  untested: boolean
}

export interface Readiness {
  gwa: number | null // weighted theoretical GWA over measured subjects
  verdict: Verdict
  margin: number | null // gwa - 75
  measuredWeight: number // sum of weights actually tested (out of 100)
  measuredCount: number // subjects with at least one attempt (of 8)
  mockGwa: number | null // latest mock's overall %, the exam-day reality check
  subjects: SubjectReadiness[]
  drillList: DrillItem[] // what to revisit, most impactful first
}

function lastN(attempts: OleAttempt[], n: number): OleAttempt[] {
  return [...attempts]
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    .slice(-n)
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

// Average each sub-area across the rolling-window attempts, keep those below 75.
function weakAreas(windowAttempts: OleAttempt[]): AreaScore[] {
  const acc: Record<string, { sum: number; n: number }> = {}
  for (const a of windowAttempts) {
    for (const area of a.areaBreakdown ?? []) {
      if (!acc[area.area]) acc[area.area] = { sum: 0, n: 0 }
      acc[area.area].sum += area.percentage
      acc[area.area].n++
    }
  }
  return Object.entries(acc)
    .map(([area, v]) => ({ area, percentage: round1(v.sum / v.n) }))
    .filter(a => a.percentage < PASS)
    .sort((a, b) => a.percentage - b.percentage)
}

function subjectReadiness(def: SubjectDef, attempts: OleAttempt[]): SubjectReadiness {
  const mine = attempts.filter(a => a.subjectCode === def.code)
  const windowAttempts = lastN(mine, ROLLING_WINDOW)
  const avg = windowAttempts.length
    ? round1(windowAttempts.reduce((s, a) => s + a.percentage, 0) / windowAttempts.length)
    : null
  const best = mine.length ? round1(Math.max(...mine.map(a => a.percentage))) : null
  return {
    code: def.code,
    name: def.name,
    weight: def.weight,
    avg,
    best,
    attempts: mine.length,
    passed: avg !== null && avg >= PASS,
    weakAreas: weakAreas(windowAttempts),
  }
}

export function computeReadiness(attempts: OleAttempt[]): Readiness {
  const subjects = SUBJECTS.map(def => subjectReadiness(def, attempts))

  const measured = subjects.filter(s => s.avg !== null)
  const measuredWeight = measured.reduce((sum, s) => sum + s.weight, 0)
  const weighted = measured.reduce((sum, s) => sum + s.weight * (s.avg as number), 0)
  const gwa = measuredWeight > 0 ? round1(weighted / measuredWeight) : null
  const margin = gwa !== null ? round1(gwa - PASS) : null

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

  // Verdict: theoretical-only. Ready needs a real buffer above the line AND
  // every measured subject clearing 75 on its own; anything positive but thin
  // is borderline; below the line is not ready.
  const allMeasuredPass = measured.length > 0 && measured.every(s => s.passed)
  let verdict: Verdict = 'NOT_READY'
  if (gwa !== null && gwa >= PASS) {
    verdict = margin !== null && margin >= 5 && allMeasuredPass ? 'READY' : 'BORDERLINE'
  }

  // Drill list: subjects below 75 ranked by weight * deficit. Untested subjects
  // are scored at their full weight so a 15% blank outranks a mild dip.
  const drillList: DrillItem[] = subjects
    .filter(s => s.avg === null || s.avg < PASS)
    .map(s => ({
      code: s.code,
      name: s.name,
      weight: s.weight,
      avg: s.avg,
      untested: s.avg === null,
      deficit: s.avg === null ? s.weight * PASS : round1(s.weight * (PASS - s.avg)),
    }))
    .sort((a, b) => b.deficit - a.deficit)

  return {
    gwa,
    verdict,
    margin,
    measuredWeight,
    measuredCount: measured.length,
    mockGwa,
    subjects,
    drillList,
  }
}

// Sample:
//   computeReadiness([
//     { subjectCode: 'D', source: 'subject-exam', percentage: 65, createdAt: '2026-07-01', areaBreakdown: [{ area: 'D3 Contact Lens', percentage: 45 }] },
//     { subjectCode: 'D', source: 'preboards-2025', percentage: 72, createdAt: '2026-07-05' },
//     { subjectCode: 'H', source: 'subject-exam', percentage: 88, createdAt: '2026-07-04' },
//   ])
//   -> gwa over the 25% measured (D 15 + H 10), D flagged in drillList with its
//      Contact Lens area as weakAreas, verdict NOT_READY (coverage tiny, D < 75).
