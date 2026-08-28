import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import { computeReadiness, type OleAttempt, type Verdict } from '@/lib/readiness'
import { ITEM_BY_ID, READINESS_ITEM_ID } from '@/lib/reviewer-manifest'
import { areaToReviewer } from '@/lib/reviewer-anchors'
import { canOpenItem, canOpenCockpit, isAdmin, type Access } from '@/lib/access'

export const dynamic = 'force-dynamic'

interface AttemptRow {
  subject_code: string
  source: string
  score: number
  total: number
  percentage: number
  created_at: string
  area_breakdown: { area: string; correct?: number; total?: number; percentage: number }[] | null
}

const VERDICT: Record<Verdict, { label: string; cls: string }> = {
  READY: { label: 'Board-ready', cls: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  BORDERLINE: { label: 'Borderline', cls: 'bg-amber-100 text-amber-800 border-amber-200' },
  NOT_READY: { label: 'Not ready yet', cls: 'bg-rose-100 text-rose-800 border-rose-200' },
  BUILDING: { label: 'Building your picture', cls: 'bg-slate-100 text-slate-700 border-slate-200' },
}

// Colour a score against the 75 line.
function scoreColor(pct: number | null): string {
  if (pct === null) return 'text-gray-400'
  if (pct >= 75) return 'text-emerald-600'
  if (pct >= 65) return 'text-amber-600'
  return 'text-rose-600'
}
function barColor(pct: number | null): string {
  if (pct === null) return 'bg-gray-200'
  if (pct >= 75) return 'bg-emerald-500'
  if (pct >= 65) return 'bg-amber-500'
  return 'bg-rose-500'
}

export default async function ReadinessPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // Full-tier feature: readiness needs broad subject coverage to be meaningful,
  // so it is restricted to full-tier (cockpit) users and admins, and further to
  // those granted it. Select tier never has progress tracking.
  const { data: profRow } = await supabase
    .from('profiles')
    .select('approved, tier, grants')
    .eq('user_id', user.id)
    .single()
  const profile = profRow as { approved: boolean; tier?: string; grants?: string[] } | null
  if (profile && !profile.approved) redirect('/pending')
  const access: Access = {
    tier: profile?.tier ?? 'base',
    grants: profile?.grants ?? [],
    isEnvAdmin: user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL,
  }
  const readinessItem = ITEM_BY_ID.get(READINESS_ITEM_ID)
  if (!readinessItem || !canOpenCockpit(access) || !canOpenItem(access, readinessItem)) redirect('/')

  // Where this user's exams actually live, so the empty-state link never dead-ends.
  const examsHref = isAdmin(access) ? '/top2/index.html' : canOpenCockpit(access) ? '/reviewer' : '/'

  // A subject's Subject Exam page, but only when this user can actually open it,
  // so the link never dead-ends at the home redirect (the middleware default-deny).
  function examHref(code: string): string | null {
    const item = ITEM_BY_ID.get(`${code}.exam`)
    if (!item) return null
    return isAdmin(access) || canOpenItem(access, item) ? item.path : null
  }

  // A weak sub-area (e.g. "B5 Binocular Vision") -> its exact section in the
  // subject Reviewer, access-gated the same way, so "review →" lands on the topic.
  function areaHref(area: string): string | null {
    const r = areaToReviewer(area)
    if (!r) return null
    const item = ITEM_BY_ID.get(`${r.subject}.reviewer`)
    if (!item) return null
    if (!(isAdmin(access) || canOpenItem(access, item))) return null
    return `${item.path}#${r.anchor}`
  }

  const { data } = await supabase
    .from('ole_attempts')
    .select('subject_code, source, score, total, percentage, created_at, area_breakdown')
    .eq('user_id', user.id)

  const attempts: OleAttempt[] = ((data as AttemptRow[] | null) ?? []).map(r => ({
    subjectCode: r.subject_code,
    source: r.source as OleAttempt['source'],
    score: Number(r.score),
    total: Number(r.total),
    percentage: Number(r.percentage),
    createdAt: r.created_at,
    areaBreakdown: r.area_breakdown ?? [],
  }))

  const r = computeReadiness(attempts)
  const hasData = attempts.length > 0
  const verdict = VERDICT[r.verdict]

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">👁️</span>
            <span className="font-bold text-gray-900">FoqusLab</span>
            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium">Readiness</span>
          </div>
          <a href={examsHref} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">← Top 2</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-900">Board Readiness</h1>
          <p className="text-gray-500 mt-1">
            Theoretical area only, the 70% written block gated at 75%. Each subject pools your recent
            attempts by number of questions, so bigger exams count more and a lucky short quiz cannot swing it.
          </p>
        </div>

        {!hasData ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-gray-700 font-medium">No scored attempts yet.</p>
            <p className="text-gray-500 text-sm mt-1">
              Take a Subject Exam, Preboard, or Mock Board and your readiness will appear here.
            </p>
            <a href={examsHref} className="inline-block mt-4 text-sm font-medium text-teal-700 hover:underline">
              Go to your exams →
            </a>
          </div>
        ) : (
          <>
            {/* Hero: projected GWA + avg-on-tested, side by side, + verdict */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
                  {/* Projected: the honest floor (untested = 0) */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Projected theoretical GWA</p>
                    <div className="flex items-end gap-1.5 mt-1">
                      <span className={`text-5xl font-extrabold ${scoreColor(r.projectedGwa)}`}>{r.projectedGwa ?? '—'}</span>
                      <span className="text-2xl font-bold text-gray-400 mb-1">%</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">untested subjects count as 0</p>
                    {r.margin !== null && (
                      <p className="text-sm text-gray-500 mt-1">
                        {r.margin >= 0 ? `+${r.margin}` : r.margin} vs the 75 line
                      </p>
                    )}
                  </div>
                  {/* Average across only the subjects tested so far */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Avg on subjects tested</p>
                    <div className="flex items-end gap-1.5 mt-1">
                      <span className={`text-3xl font-bold ${scoreColor(r.gwa)}`}>{r.gwa ?? '—'}</span>
                      <span className="text-lg font-bold text-gray-400 mb-0.5">%</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">{r.measuredCount} of 8 subjects only</p>
                  </div>
                </div>
                <span className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${verdict.cls}`}>
                  {verdict.label}
                </span>
              </div>

              {/* Coverage: how much of the exam these numbers actually reflect */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Coverage: </span>
                  <span className="font-semibold text-gray-800">{r.measuredWeight} of 100</span>
                  <span className="text-gray-500"> exam weight measured</span>
                </div>
                <div>
                  <span className="text-gray-500">Subjects tested: </span>
                  <span className="font-semibold text-gray-800">{r.measuredCount} of 8</span>
                </div>
                {r.mockGwa !== null && (
                  <div>
                    <span className="text-gray-500">Latest mock: </span>
                    <span className={`font-semibold ${scoreColor(r.mockGwa)}`}>{r.mockGwa}%</span>
                    <span className="text-gray-500"> (most exam-realistic)</span>
                  </div>
                )}
              </div>
              {!r.coverageMet && (
                <p className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 mt-3">
                  {8 - r.measuredCount} of 8 subject{8 - r.measuredCount > 1 ? 's' : ''} not yet confirmed — a readiness verdict is held until all 8 have enough questions behind them. The big number is your <span className="font-semibold">projected</span> GWA with unconfirmed subjects counted as 0; it climbs as you finish more.
                </p>
              )}
            </div>

            {/* Revisit first: ranked drill list */}
            {r.drillList.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4">
                <h2 className="font-bold text-gray-900 mb-1">Revisit first</h2>
                <p className="text-xs text-gray-500 mb-3">Ranked by how much each one is dragging your GWA (weight × gap below 75).</p>
                <ol className="space-y-2">
                  {r.drillList.map((d, i) => (
                    <li key={d.code} className="flex items-center gap-3">
                      <span className="w-6 h-6 shrink-0 rounded-lg bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="w-7 h-7 shrink-0 rounded-lg bg-teal-600 text-white text-sm font-bold flex items-center justify-center">{d.code}</span>
                      <span className="font-medium text-gray-800 text-sm flex-1">{d.name}</span>
                      <span className="text-xs text-gray-400">{d.weight}%</span>
                      <span className={`text-sm font-semibold w-20 text-right ${d.untested || d.provisional ? 'text-amber-600' : scoreColor(d.avg)}`}>
                        {d.untested ? 'untested' : d.provisional ? `${d.avg}% · confirm` : `${d.avg}%`}
                      </span>
                      {examHref(d.code) && (
                        <a href={examHref(d.code)!} className="shrink-0 text-xs font-semibold text-teal-700 hover:underline" title="Take this Subject Exam">exam →</a>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Per-subject cards with topic drill-down */}
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">All subjects</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {r.subjects.map(s => (
                <div key={s.code} className="bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-teal-600 text-white text-sm font-bold flex items-center justify-center">{s.code}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm leading-tight">{s.name}</p>
                      <p className="text-xs text-gray-400">
                        {s.weight}% of exam · {s.attempts} attempt{s.attempts === 1 ? '' : 's'}
                        {s.avg !== null && <> · {s.items} item{s.items === 1 ? '' : 's'}</>}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`text-lg font-bold ${scoreColor(s.avg)}`}>{s.avg === null ? '—' : `${s.avg}%`}</span>
                      {s.avg !== null && !s.confident && (
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-600 leading-none mt-0.5">provisional</p>
                      )}
                    </div>
                  </div>
                  {s.avg !== null && !s.confident && (
                    <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-100 rounded px-2 py-1 mb-2">
                      Only {s.items} question{s.items === 1 ? '' : 's'} so far — take more of this subject to confirm the score. It is not counted in your GWA yet.
                    </p>
                  )}

                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${barColor(s.avg)}`} style={{ width: `${s.avg ?? 0}%` }} />
                    <span className="absolute top-0 bottom-0 w-px bg-gray-400" style={{ left: '75%' }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>{s.best !== null ? `best ${s.best}%` : 'not started'}</span>
                    <span>75 line</span>
                  </div>

                  {s.weakAreas.length > 0 && (
                    <details className="mt-3">
                      <summary className="text-xs font-medium text-rose-600 cursor-pointer">
                        {s.weakAreas.length} weak area{s.weakAreas.length > 1 ? 's' : ''} to revisit
                      </summary>
                      <ul className="mt-2 space-y-1">
                        {s.weakAreas.map(a => {
                          const href = areaHref(a.area)
                          return (
                            <li key={a.area} className="flex justify-between items-center gap-2 text-xs">
                              <span className="text-gray-600">{a.area}</span>
                              <span className="flex items-center gap-2 shrink-0">
                                <span className={`font-semibold ${scoreColor(a.percentage)}`}>{a.percentage}%</span>
                                {href && (
                                  <a href={href} className="font-semibold text-teal-700 hover:underline" title="Review this topic in the reviewer">review →</a>
                                )}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </details>
                  )}
                  {examHref(s.code) && (
                    <a href={examHref(s.code)!} className="mt-3 block text-center text-xs font-semibold text-teal-700 border border-teal-200 rounded-lg py-2 hover:bg-teal-50 transition-colors">
                      Take the Subject Exam →
                    </a>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-400 mt-8 border-t border-gray-200 pt-4">
              WAA · Board Review 2026 · personal study notes. Theoretical readiness only; the practical 30% is not measured here.
            </p>
          </>
        )}
      </main>
    </div>
  )
}
