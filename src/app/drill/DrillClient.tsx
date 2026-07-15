'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-client'
import { updateGamification, GamificationResult } from '@/lib/gamification'
import { recordSession, type RecordItem, type RecordResult } from '@/lib/srs-record'

export interface DrillItem {
  stem: string
  options?: string[]
  correct: number | boolean
  explanation: string
  subject: string
  source: string
  subjectLabel: string
  isReview: boolean
}

interface Props {
  pool: DrillItem[]
  dueCount: number
}

const TEN_MINUTES = 10 * 60

type Phase = 'playing' | 'milestone' | 'done'

function mmss(sec: number): string {
  const m = Math.floor(Math.abs(sec) / 60)
  const s = Math.abs(sec) % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function DrillClient({ pool, dueCount }: Props) {
  const [phase, setPhase] = useState<Phase>('playing')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [outcomes, setOutcomes] = useState<boolean[]>([])
  const [remaining, setRemaining] = useState(TEN_MINUTES)
  const [overtime, setOvertime] = useState(false)
  const [saving, setSaving] = useState(false)
  const [gamResult, setGamResult] = useState<GamificationResult | null>(null)
  const [srsResult, setSrsResult] = useState<RecordResult | null>(null)

  // The clock only runs while questions are on screen, and stops at zero until the user
  // chooses to go into overtime.
  useEffect(() => {
    if (phase !== 'playing') return
    const id = setInterval(() => {
      setRemaining(r => (overtime ? r + 1 : Math.max(0, r - 1)))
    }, 1000)
    return () => clearInterval(id)
  }, [phase, overtime])

  // Derived, not state: the clock stops AT zero rather than running past it, so this
  // latches by itself until the user opts into overtime. Hitting zero does not yank the
  // screen away mid-question — handleNext honours the flag, so the 10-minute mark always
  // lands between questions.
  const timeUp = !overtime && remaining === 0

  // Each answer is sent the moment it is given, not batched to the end. Batching meant an
  // abandoned drill recorded nothing, so its due cards never rotated and the next drill
  // reopened on the same ones. /review already grades card-by-card; this matches it.
  const pending = useRef<Promise<unknown>[]>([])
  const totals = useRef({ added: 0, advanced: 0, reset: 0 })

  const recordOne = useCallback((q: DrillItem, wasCorrect: boolean) => {
    const item: RecordItem = {
      stem: q.stem,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      // A review card keeps its original subject/source so it stays on one schedule
      // wherever it was answered; fresh material is tagged 'drill'.
      subject: q.subject,
      source: (q.isReview ? q.source : 'drill') as RecordItem['source'],
      wasCorrect,
    }
    const p = recordSession([item]).then(r => {
      if (r) {
        totals.current.added += r.added
        totals.current.advanced += r.advanced
        totals.current.reset += r.reset
      }
    })
    pending.current.push(p)
  }, [])

  const finish = useCallback(async (answered: boolean[]) => {
    setSaving(true)
    // Answers were sent as they happened; wait for the stragglers so the summary is real.
    await Promise.allSettled(pending.current)
    setSrsResult({ ...totals.current })

    const score = answered.filter(Boolean).length
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user && answered.length) {
        setGamResult(await updateGamification(supabase, user.id, {
          correct: score,
          total: answered.length,
          isExam: false,
          percentage: Math.round((score / answered.length) * 100),
          subject: 'drill',
        }))
      }
    } catch {}
    setSaving(false)
    setPhase('done')
  }, [])

  if (!pool.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl mb-4">🤔</div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">No questions available</h1>
          <p className="text-sm text-gray-500 mb-6">The banks did not load. This is a bug, not you.</p>
          <Link href="/" className="text-sm font-semibold bg-gray-900 text-white px-5 py-2.5 rounded-xl">Back home</Link>
        </div>
      </div>
    )
  }

  const q = pool[current]
  const isTf = !q.options || q.options.length === 0

  function handleSelect(val: number | boolean) {
    if (revealed) return
    setSelected(val)
    setRevealed(true)
    // Recorded here, at the moment of the answer, so walking away still counts it.
    recordOne(q, val === q.correct)
  }

  async function handleNext() {
    const next = [...outcomes, selected === q.correct]
    setOutcomes(next)

    if (timeUp) { setPhase('milestone'); return }   // timeUp already excludes overtime
    if (current === pool.length - 1) { await finish(next); return }

    setCurrent(i => i + 1)
    setSelected(null)
    setRevealed(false)
  }

  // ─── 10-MINUTE MILESTONE ──────────────────────────────────────────────────
  // The whole point of the small commitment: it has to be genuinely honoured. Stopping
  // here is offered first and framed as a win, not a cop-out.

  if (phase === 'milestone') {
    const score = outcomes.filter(Boolean).length
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">⏱️</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">10 minutes done</h2>
            <p className="text-sm text-gray-500 mb-6">
              {outcomes.length} question{outcomes.length > 1 ? 's' : ''}, {score} right. You said 10 minutes and you did 10 minutes.
            </p>
            <button
              onClick={() => finish(outcomes)}
              disabled={saving}
              className="w-full py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors disabled:opacity-50 mb-2"
            >
              {saving ? 'Saving…' : 'Stop here — I did the thing'}
            </button>
            <button
              onClick={() => {
                setOvertime(true)
                setPhase('playing')
                if (current === pool.length - 1) { finish([...outcomes]) ; return }
                setCurrent(i => i + 1)
                setSelected(null)
                setRevealed(false)
              }}
              disabled={saving}
              className="w-full py-3 text-sm font-semibold rounded-xl border-2 border-gray-200 text-gray-700 hover:border-gray-300 transition-colors disabled:opacity-50"
            >
              Keep going
            </button>
            <p className="text-xs text-gray-400 mt-4">
              Either answer is a good one. Stopping while it still feels easy is what makes tomorrow easy to start.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ─── DONE ─────────────────────────────────────────────────────────────────

  if (phase === 'done') {
    const score = outcomes.filter(Boolean).length
    const left = pool.length - outcomes.length
    const subjectsSeen = new Set(pool.slice(0, outcomes.length).map(p => p.subjectLabel)).size

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Drill done</h2>
            <p className="text-sm text-gray-500 mb-4">
              {score} of {outcomes.length} across {subjectsSeen} subject{subjectsSeen > 1 ? 's' : ''}
            </p>
            <p className="text-xs text-gray-400">
              Mixing subjects makes a drill feel worse than it scores. That friction is the part that lasts.
            </p>
          </div>

          {srsResult && (srsResult.added > 0 || srsResult.reset > 0 || srsResult.advanced > 0) && (
            <Link href="/review" className="block bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">
                    {srsResult.added + srsResult.reset > 0
                      ? `${srsResult.added + srsResult.reset} added to your review queue`
                      : `${srsResult.advanced} recalled on schedule`}
                  </p>
                  <p className="text-xs text-gray-300 mt-0.5">
                    {srsResult.added + srsResult.reset > 0 && 'Back tomorrow. '}
                    {srsResult.advanced > 0 && `${srsResult.advanced} moved up a rung.`}
                  </p>
                </div>
                <span className="text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded-lg">Queue →</span>
              </div>
            </Link>
          )}

          {gamResult && gamResult.xpEarned > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-amber-900">⚡ +{gamResult.xpEarned} XP earned</p>
                <p className="text-xs text-amber-700 mt-0.5">{gamResult.totalXp} XP total</p>
              </div>
              {gamResult.streak >= 2 && <p className="text-sm font-bold text-orange-600">🔥 {gamResult.streak}-day streak</p>}
            </div>
          )}

          {gamResult && gamResult.newBadges.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">New badges earned</p>
              <div className="space-y-2">
                {gamResult.newBadges.map(b => (
                  <div key={b.id} className="flex items-center gap-3">
                    <span className="text-2xl">{b.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{b.name}</p>
                      <p className="text-xs text-gray-500">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Open loop: an unfinished thing is easier to come back to than a closed one. */}
          {left > 0 && (
            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl px-5 py-4 text-center">
              <p className="text-xs text-gray-500">
                {left} question{left > 1 ? 's' : ''} left unanswered in this draw. Leaving it open on purpose.
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <Link href="/drill" className="flex-1 py-2.5 text-sm font-semibold rounded-xl border-2 border-gray-200 text-gray-700 text-center hover:border-gray-300 transition-colors">
              Another 10
            </Link>
            <Link href="/" className="flex-1 py-2.5 text-sm font-semibold rounded-xl bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors">
              Done for now
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ─── PLAYING ──────────────────────────────────────────────────────────────

  const clockLow = !overtime && remaining <= 60

  return (
    <div className="min-h-screen pb-12">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">←</Link>
            <span className="text-base leading-none">⏱️</span>
            <span className="text-xs font-semibold text-gray-900">10-Minute Drill</span>
            <span className="text-xs text-gray-400">· {outcomes.length} done</span>
            <span className={`ml-auto text-sm font-bold tabular-nums ${overtime ? 'text-teal-600' : clockLow ? 'text-orange-500' : 'text-gray-900'}`}>
              {overtime ? `+${mmss(remaining)}` : mmss(remaining)}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">{q.subjectLabel}</span>
          {q.isReview && (
            <span className="text-xs font-semibold text-white bg-gray-900 px-2 py-0.5 rounded-full">due review</span>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-3">
          <p className="text-base text-gray-900 leading-relaxed">{q.stem}</p>
        </div>

        <div className="space-y-2">
          {isTf
            ? [true, false].map(val => {
                const isAnswer = q.correct === val
                const isPicked = selected === val
                return (
                  <button
                    key={String(val)}
                    onClick={() => handleSelect(val)}
                    disabled={revealed}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-colors ${
                      revealed && isAnswer ? 'bg-green-50 border-green-400 text-green-900 font-semibold'
                      : revealed && isPicked ? 'bg-red-50 border-red-300 text-red-900'
                      : revealed ? 'bg-white border-gray-200 text-gray-400'
                      : 'bg-white border-gray-200 hover:border-gray-400 text-gray-900'
                    }`}
                  >
                    {val ? 'True' : 'False'}
                  </button>
                )
              })
            : q.options!.map((opt, i) => {
                const isAnswer = q.correct === i
                const isPicked = selected === i
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={revealed}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-colors ${
                      revealed && isAnswer ? 'bg-green-50 border-green-400 text-green-900 font-semibold'
                      : revealed && isPicked ? 'bg-red-50 border-red-300 text-red-900'
                      : revealed ? 'bg-white border-gray-200 text-gray-400'
                      : 'bg-white border-gray-200 hover:border-gray-400 text-gray-900'
                    }`}
                  >
                    <span className="text-gray-400 font-semibold mr-2">{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                )
              })}
        </div>

        {revealed && (
          <>
            <div className={`mt-4 rounded-2xl border p-5 ${selected === q.correct ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
              <p className={`text-sm font-bold mb-2 ${selected === q.correct ? 'text-green-900' : 'text-orange-900'}`}>
                {selected === q.correct ? '✓ Correct' : '✗ Missed — this one joins your review queue'}
              </p>
              {q.explanation && (
                <p className={`text-sm leading-relaxed ${selected === q.correct ? 'text-green-800' : 'text-orange-800'}`}>
                  {q.explanation}
                </p>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={saving}
              className="w-full mt-3 py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving…' : timeUp ? "Time's up — see where you got to" : current === pool.length - 1 ? 'Finish' : 'Next →'}
            </button>

            <button
              onClick={() => finish([...outcomes, selected === q.correct])}
              disabled={saving}
              className="w-full mt-2 py-2 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Stop here
            </button>
          </>
        )}

        {dueCount > 0 && current === 0 && !revealed && (
          <p className="text-xs text-gray-400 text-center mt-6">
            Starting with {dueCount} due review question{dueCount > 1 ? 's' : ''}, then mixing in fresh material.
          </p>
        )}
      </main>
    </div>
  )
}
