'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Question, ExamResult } from '@/lib/types'
import { SUBJECTS, COLOR_MAP } from '@/lib/subjects'
import { Badge } from '@/lib/badges'
import { GamificationResult } from '@/lib/gamification'

interface StoredResult extends ExamResult {
  questions: Question[]
  gamification?: GamificationResult
}

export default function ResultsPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.subject as string
  const subject = SUBJECTS.find(s => s.slug === slug)
  const c = COLOR_MAP[subject?.color ?? 'teal']

  const [result, setResult] = useState<StoredResult | null>(null)
  const [filter, setFilter] = useState<'all' | 'wrong' | 'flagged'>('all')
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  useEffect(() => {
    const raw = localStorage.getItem(`ole_result_${slug}`)
    if (!raw) { router.push('/'); return }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult(JSON.parse(raw))
  }, [slug, router])

  if (!result || !subject) return null

  const { score, total, percentage, answers, questions, gamification } = result
  const passing = percentage >= 75

  const wrongIndices = questions.reduce<number[]>((acc, q, i) => {
    if (answers[i] !== null && answers[i] !== q.correct) acc.push(i)
    return acc
  }, [])

  const visibleQ = questions.map((q, i) => ({ q, i })).filter(({ i }) => {
    if (filter === 'wrong') return wrongIndices.includes(i)
    return true
  })

  function toggleExpand(i: number) {
    setExpanded(prev => {
      const n = new Set(prev)
      if (n.has(i)) { n.delete(i) } else { n.add(i) }
      return n
    })
  }

  function getAnswerLabel(q: Question, a: number | boolean | null): string {
    if (a === null) return 'No answer'
    if (q.type === 'tf') return a ? 'True' : 'False'
    return q.options?.[a as number] ?? ''
  }

  function getCorrectLabel(q: Question): string {
    if (q.type === 'tf') return q.correct ? 'True' : 'False'
    return q.options?.[q.correct as number] ?? ''
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">← Back to home</Link>
          <span className={`text-xs font-semibold ${c.text}`}>{subject.name}</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
        {/* Score card */}
        <div className={`rounded-2xl border-2 ${c.border} ${c.bg} p-6 mb-6 text-center`}>
          <div className="text-5xl font-bold text-gray-900 mb-1">{Math.round(percentage)}%</div>
          <div className={`text-sm font-semibold mb-3 ${passing ? 'text-green-600' : 'text-orange-500'}`}>
            {passing ? '✅ Passing — great work!' : '📚 Below 75% — keep reviewing'}
          </div>
          <div className="text-sm text-gray-600">
            {score} correct out of {total} questions
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-xl font-bold text-green-600">{score}</div>
              <div className="text-xs text-gray-500">Correct</div>
            </div>
            <div>
              <div className="text-xl font-bold text-red-500">{wrongIndices.length}</div>
              <div className="text-xs text-gray-500">Wrong</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-400">{answers.filter(a => a === null).length}</div>
              <div className="text-xs text-gray-500">Skipped</div>
            </div>
          </div>
        </div>

        {/* XP + badges */}
        {gamification && gamification.xpEarned > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-amber-900">⚡ +{gamification.xpEarned} XP earned</p>
              <p className="text-xs text-amber-700 mt-0.5">{gamification.totalXp} XP total · Level {Math.floor(gamification.totalXp / 100) + 1}</p>
            </div>
            {gamification.streak >= 2 && (
              <p className="text-sm font-bold text-orange-600">🔥 {gamification.streak} days</p>
            )}
          </div>
        )}
        {gamification && gamification.newBadges.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">New badges earned</p>
            <div className="space-y-2">
              {(gamification.newBadges as Badge[]).map(b => (
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
        <div className="flex gap-3 mb-6">
          <Link href={`/exam/${slug}`} className="flex-1 bg-teal-600 text-white text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-teal-700 transition-colors">
            Practice again
          </Link>
          <Link href="/" className="flex-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-gray-50 transition-colors">
            All subjects
          </Link>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-4">
          {(['all', 'wrong'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors
                ${filter === f ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              {f === 'all' ? `All (${total})` : `Wrong (${wrongIndices.length})`}
            </button>
          ))}
        </div>

        {/* Question review */}
        <div className="space-y-3">
          {visibleQ.map(({ q, i }) => {
            const userAnswer = answers[i]
            const isCorrect = userAnswer === q.correct
            const isSkipped = userAnswer === null
            const isOpen = expanded.has(i)

            return (
              <div
                key={i}
                className={`bg-white rounded-xl border-2 overflow-hidden transition-all
                  ${isCorrect ? 'border-green-200' : isSkipped ? 'border-gray-200' : 'border-red-200'}`}
              >
                <button
                  className="w-full text-left px-4 py-4"
                  onClick={() => toggleExpand(i)}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5
                      ${isCorrect ? 'bg-green-100 text-green-700' : isSkipped ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-600'}`}>
                      {isCorrect ? '✓' : isSkipped ? '–' : '✗'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 leading-relaxed">{q.stem}</p>
                      {!isOpen && (
                        <p className={`text-xs mt-1 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                          {isSkipped ? 'Skipped' : `Your answer: ${getAnswerLabel(q, userAnswer)}`}
                        </p>
                      )}
                    </div>
                    <span className="text-gray-300 text-xs flex-shrink-0">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-2">
                    {!isCorrect && !isSkipped && (
                      <div className="text-xs">
                        <span className="text-red-500 font-semibold">Your answer: </span>
                        <span className="text-gray-700">{getAnswerLabel(q, userAnswer)}</span>
                      </div>
                    )}
                    <div className="text-xs">
                      <span className="text-green-600 font-semibold">Correct answer: </span>
                      <span className="text-gray-700">{getCorrectLabel(q)}</span>
                    </div>
                    {q.explanation && (
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-gray-700 leading-relaxed">
                        <span className="font-semibold text-blue-700">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
