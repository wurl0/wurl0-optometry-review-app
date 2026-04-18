'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Question, Subject } from '@/lib/types'
import { COLOR_MAP } from '@/lib/subjects'
import { createClient } from '@/lib/supabase-client'
import { updateGamification, GamificationResult } from '@/lib/gamification'

interface Props {
  subject: Subject
  questions: Question[]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface SessionAnswer {
  isCorrect: boolean
}

export default function PracticeClient({ subject, questions }: Props) {
  const c = COLOR_MAP[subject.color]

  const [shuffled] = useState(() => shuffle(questions))
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [sessionAnswers, setSessionAnswers] = useState<SessionAnswer[]>([])
  const [done, setDone] = useState(false)
  const [gamResult, setGamResult] = useState<GamificationResult | null>(null)
  const [gamLoading, setGamLoading] = useState(false)

  const q = shuffled[current]
  const isLast = current === shuffled.length - 1
  const progress = ((current + (revealed ? 1 : 0)) / shuffled.length) * 100

  function handleSelect(val: number | boolean) {
    if (revealed) return
    setSelected(val)
    setRevealed(true)
  }

  async function handleNext() {
    const isCorrect = selected === q.correct
    const next = [...sessionAnswers, { isCorrect }]
    setSessionAnswers(next)

    if (isLast) {
      setGamLoading(true)
      const correct = next.filter(a => a.isCorrect).length
      const total = next.length
      const percentage = Math.round((correct / total) * 100 * 10) / 10
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const result = await updateGamification(supabase, user.id, {
            correct, total, isExam: false, percentage, subject: subject.slug,
          })
          setGamResult(result)
        }
      } catch {}
      setGamLoading(false)
      setDone(true)
    } else {
      setCurrent(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setSessionAnswers([])
    setDone(false)
  }

  function getOptionStyle(i: number | boolean): string {
    const base = 'w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all'
    if (!revealed) {
      return `${base} border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer`
    }
    const isCorrectOption = i === q.correct
    const isSelected = i === selected
    if (isCorrectOption) return `${base} border-green-400 bg-green-50 text-green-800 font-medium`
    if (isSelected && !isCorrectOption) return `${base} border-red-300 bg-red-50 text-red-700`
    return `${base} border-gray-100 text-gray-400 cursor-default`
  }

  // Summary screen
  if (gamLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-pulse">⚡</div>
          <p className="text-gray-600 font-medium">Saving your progress…</p>
        </div>
      </div>
    )
  }

  if (done) {
    const score = sessionAnswers.filter(a => a.isCorrect).length
    const total = shuffled.length
    const pct = Math.round((score / total) * 100)
    const passed = pct >= 75

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-3">
          {/* Score card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">{passed ? '🎉' : '📚'}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Practice Complete</h2>
            <p className="text-sm text-gray-500 mb-6">{subject.name}</p>
            <div className={`text-5xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-orange-500'}`}>{pct}%</div>
            <p className="text-sm text-gray-500 mb-4">{score} of {total} correct</p>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div className={`h-full rounded-full ${passed ? 'bg-green-500' : 'bg-orange-400'}`} style={{ width: `${pct}%` }} />
            </div>
            <div className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${passed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
              {passed ? 'Passing score ✓' : 'Below passing — keep going'}
            </div>
          </div>

          {/* XP earned */}
          {gamResult && gamResult.xpEarned > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-amber-900">⚡ +{gamResult.xpEarned} XP earned</p>
                <p className="text-xs text-amber-700 mt-0.5">{gamResult.totalXp} XP total · Level {Math.floor(gamResult.totalXp / 100) + 1}</p>
              </div>
              {gamResult.streak >= 2 && (
                <div className="text-right">
                  <p className="text-sm font-bold text-orange-600">🔥 {gamResult.streak}-day streak</p>
                </div>
              )}
            </div>
          )}

          {/* New badges */}
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

          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={handleRestart} className={`flex-1 py-2.5 text-sm font-semibold rounded-xl border-2 ${c.border} ${c.text} transition-colors`}>
              Practice again
            </button>
            <Link href="/" className="flex-1 py-2.5 text-sm font-semibold rounded-xl bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">←</Link>
              <span className="text-base leading-none">{subject.icon}</span>
              <span className={`text-xs font-semibold ${c.text}`}>{subject.name}</span>
              <span className="text-xs text-gray-400">· Guided Practice</span>
            </div>
            <span className="text-xs text-gray-400">
              {current + 1} / {shuffled.length}
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all ${c.progressBar}`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
        {/* Question card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4">
          <div className="flex items-center gap-2 mb-5">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
              {q.type === 'mcq' ? 'Multiple Choice' : 'True or False'}
            </span>
            {q.isTrap && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700">⚠️ Board trap</span>
            )}
          </div>

          <p className="text-base font-medium text-gray-900 leading-relaxed mb-6">{q.stem}</p>

          {/* MCQ options */}
          {q.type === 'mcq' && q.options && (
            <div className="space-y-2.5">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={revealed}
                  className={getOptionStyle(i)}
                >
                  <span className="font-semibold mr-2 text-gray-400">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {revealed && i === q.correct && <span className="ml-2 text-green-600">✓</span>}
                  {revealed && i === selected && i !== q.correct && <span className="ml-2 text-red-500">✗</span>}
                </button>
              ))}
            </div>
          )}

          {/* T/F options */}
          {q.type === 'tf' && (
            <div className="grid grid-cols-2 gap-3">
              {([true, false] as const).map(val => {
                const label = val ? 'True' : 'False'
                return (
                  <button
                    key={label}
                    onClick={() => handleSelect(val)}
                    disabled={revealed}
                    className={`py-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                      !revealed
                        ? 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer'
                        : val === q.correct
                        ? 'border-green-400 bg-green-50 text-green-800'
                        : val === selected && val !== q.correct
                        ? 'border-red-300 bg-red-50 text-red-700'
                        : 'border-gray-100 text-gray-400 cursor-default'
                    }`}
                  >
                    {label}
                    {revealed && val === q.correct && <span className="ml-1 text-green-600">✓</span>}
                    {revealed && val === selected && val !== q.correct && <span className="ml-1 text-red-500">✗</span>}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Explanation — shown after answer */}
        {revealed && (
          <div className={`rounded-2xl border p-5 mb-4 ${selected === q.correct ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">{selected === q.correct ? '✅' : '❌'}</span>
              <span className={`text-sm font-semibold ${selected === q.correct ? 'text-green-800' : 'text-orange-800'}`}>
                {selected === q.correct ? 'Correct!' : 'Not quite.'}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
          </div>
        )}

        {/* Next button — only after revealing */}
        {revealed && (
          <button
            onClick={handleNext}
            className="w-full py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            {isLast ? 'See results →' : 'Next question →'}
          </button>
        )}

        {/* Prompt when not yet answered */}
        {!revealed && (
          <p className="text-center text-xs text-gray-400">Select an answer to continue</p>
        )}
      </main>
    </div>
  )
}
