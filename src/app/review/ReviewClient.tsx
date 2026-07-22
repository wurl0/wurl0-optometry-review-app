'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-client'
import { updateGamification, GamificationResult } from '@/lib/gamification'
import { INTERVALS, boxLabel, type ReviewCard } from '@/lib/srs'

interface Props {
  cards: ReviewCard[]
  labels: Record<string, string>
  queueTotal: number
  solidTotal: number
  dueTotal: number
}

type Phase = 'playing' | 'done'

const SOURCE_LABEL: Record<string, string> = {
  'practice': 'Practice',
  'exam': 'Subject exam',
  'notes-quiz': 'Notes quiz',
  'drill': '10-minute drill',
  'subject-exam': 'Top 2 subject exam',
  'preboards-2025': 'Preboards Set 1',
  'preboards-set2': 'Preboards Set 2',
  'preboards-set3': 'Preboards Set 3',
  'mock': 'Mock board',
}

export default function ReviewClient({ cards, labels, queueTotal, solidTotal, dueTotal }: Props) {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('playing')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [results, setResults] = useState<{ correct: boolean; retired: boolean }[]>([])
  const [saving, setSaving] = useState(false)
  const [gamResult, setGamResult] = useState<GamificationResult | null>(null)
  // Frozen at mount. The refresh at the end of a session replaces these props with
  // post-session figures, and the results screen already subtracts the session itself
  // from them, so reading the live props there would count the same work twice.
  const [atStart] = useState({ due: dueTotal, queue: queueTotal, solid: solidTotal })

  // ─── NOTHING DUE ──────────────────────────────────────────────────────────

  // Only while playing. Finishing a session refreshes the server data, which empties
  // `cards`, and without the phase check that would swap the results screen for this one.
  if (!cards.length && phase === 'playing') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="text-5xl mb-4">☕</div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Nothing due today</h1>
          <p className="text-sm text-gray-500 mb-6">
            {queueTotal > 0
              ? `${queueTotal} question${queueTotal > 1 ? 's' : ''} in your queue, none scheduled for today. Coming back early does not help the memory — the gap is doing the work.`
              : 'Your queue is empty. Questions land here automatically when you miss them in practice, exams, or the Top 2 reviewers.'}
          </p>
          {solidTotal > 0 && (
            <p className="text-xs text-gray-400 mb-6">{solidTotal} retired to the solid pile so far.</p>
          )}
          <Link href="/" onClick={() => router.refresh()} className="inline-block text-sm font-semibold bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
            Back home
          </Link>
        </div>
      </div>
    )
  }

  const card = cards[current]
  // Optional: after the end-of-session refresh, `cards` can be empty while the results
  // screen below is still on screen. Nothing here is read on that path.
  const isTf = !card?.payload.options?.length

  async function grade(correct: boolean) {
    try {
      const res = await fetch('/api/srs/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: card.questionId, correct }),
      })
      const data = await res.json().catch(() => null)
      return { retired: data?.retired === true }
    } catch {
      return { retired: false }
    }
  }

  function handleSelect(val: number | boolean) {
    if (revealed) return
    setSelected(val)
    setRevealed(true)
  }

  async function handleNext() {
    const correct = selected === card.payload.correct
    const { retired } = await grade(correct)
    const next = [...results, { correct, retired }]
    setResults(next)

    if (current === cards.length - 1) {
      setSaving(true)
      const score = next.filter(r => r.correct).length
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const g = await updateGamification(supabase, user.id, {
            correct: score,
            total: next.length,
            isExam: false,
            percentage: Math.round((score / next.length) * 100),
            subject: 'review',
          })
          setGamResult(g)
        }
      } catch {}
      setSaving(false)
      setPhase('done')
      // Grading goes through a route handler, which leaves the client Router Cache
      // untouched: home would keep serving the due count it rendered before the session,
      // and in a standalone web app the only way out of that is quitting the app.
      // This drops the cached render for the whole tree so the next navigation is fresh.
      router.refresh()
    } else {
      setCurrent(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  // ─── DONE ─────────────────────────────────────────────────────────────────

  if (phase === 'done') {
    const score = results.filter(r => r.correct).length
    const retiredNow = results.filter(r => r.retired).length
    // Every graded card leaves today's due set: recalled ones move up the ladder or
    // retire, missed ones land on tomorrow. So what the day still owes is simply what
    // it owed on arrival minus what was just answered.
    const remainingDue = Math.max(0, atStart.due - results.length)

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">🧠</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Review done</h2>
            <p className="text-sm text-gray-500 mb-6">{score} of {results.length} recalled</p>
            <p className="text-xs text-gray-500">
              Missed ones come back tomorrow. Recalled ones move up the ladder
              ({INTERVALS.join(' → ')} days) and retire after the last rung.
            </p>
          </div>

          {retiredNow > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-4">
              <p className="text-sm font-bold text-green-900">✓ {retiredNow} moved to the solid pile</p>
              <p className="text-xs text-green-700 mt-0.5">Cleared the full ladder. They stop coming back unless you miss them again.</p>
            </div>
          )}

          {gamResult && gamResult.xpEarned > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-amber-900">⚡ +{gamResult.xpEarned} XP earned</p>
                <p className="text-xs text-amber-700 mt-0.5">{gamResult.totalXp} XP total</p>
              </div>
              {gamResult.streak >= 2 && (
                <p className="text-sm font-bold text-orange-600">🔥 {gamResult.streak}-day streak</p>
              )}
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

          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-center">
            <p className="text-xs text-gray-500">
              {remainingDue > 0
                ? `${remainingDue} still due today`
                : 'Nothing else due today'}
              {' · '}{Math.max(0, atStart.queue - retiredNow)} in the queue · {atStart.solid + retiredNow} solid
            </p>
          </div>

          <Link href="/" onClick={() => router.refresh()} className="block text-center text-sm font-semibold bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
            Done for now
          </Link>
        </div>
      </div>
    )
  }

  // ─── PLAYING ──────────────────────────────────────────────────────────────

  const pct = Math.round((current / cards.length) * 100)

  return (
    <div className="min-h-screen pb-12">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            {/* Leaving mid-session still means some cards were graded. */}
            <Link href="/" onClick={() => router.refresh()} className="text-gray-400 hover:text-gray-600 text-sm">←</Link>
            <span className="text-base leading-none">🧠</span>
            <span className="text-xs font-semibold text-gray-900">Review Queue</span>
            <span className="text-xs text-gray-400">· {current + 1} of {cards.length} due</span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
            {labels[card.subject] ?? card.subject}
          </span>
          <span className="text-xs text-gray-400">{SOURCE_LABEL[card.source] ?? card.source}</span>
          {/* A sweep card arrives already retired: this is its one final check. */}
          {card.retired ? (
            <span className="text-xs font-semibold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
              final check
            </span>
          ) : (
            <span className="text-xs text-gray-400">· {boxLabel(card.box)}</span>
          )}
          {card.lapses > 1 && (
            <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
              missed {card.lapses}×
            </span>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-3">
          <p className="text-base text-gray-900 leading-relaxed">{card.payload.stem}</p>
        </div>

        <div className="space-y-2">
          {isTf
            ? [true, false].map(val => {
                const isAnswer = card.payload.correct === val
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
            : card.payload.options!.map((opt, i) => {
                const isAnswer = card.payload.correct === i
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
            <div className={`mt-4 rounded-2xl border p-5 ${selected === card.payload.correct ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
              <p className={`text-sm font-bold mb-2 ${selected === card.payload.correct ? 'text-green-900' : 'text-orange-900'}`}>
                {selected === card.payload.correct
                  ? (card.retired ? '✓ Still solid — stays retired' : '✓ Recalled')
                  : (card.retired
                      ? '✗ It had faded — back into the queue from the bottom'
                      : '✗ Missed again — resets to tomorrow')}
              </p>
              {card.payload.explanation && (
                <p className={`text-sm leading-relaxed ${selected === card.payload.correct ? 'text-green-800' : 'text-orange-800'}`}>
                  {card.payload.explanation}
                </p>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={saving}
              className="w-full mt-3 py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving…' : current === cards.length - 1 ? 'Finish review' : 'Next →'}
            </button>
          </>
        )}
      </main>
    </div>
  )
}
