'use client'
import { useState } from 'react'
import { NotesQuizData } from '@/lib/notes-quiz-types'
import { GamificationResult, updateNotesQuizGamification } from '@/lib/gamification'
import { createClient } from '@/lib/supabase-client'
import { COLOR_MAP } from '@/lib/subjects'
import { Subject } from '@/lib/types'

const PASS_THRESHOLD = 50

interface Props {
  subject: Subject
  quiz: NotesQuizData
  onClose: () => void
}

type Phase = 'playing' | 'reveal' | 'result'

export default function NotesQuiz({ subject, quiz, onClose }: Props) {
  const c = COLOR_MAP[subject.color]

  const [current, setCurrent] = useState(0)
  const [phase, setPhase] = useState<Phase>('playing')
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [selfGraded, setSelfGraded] = useState<boolean | null>(null)
  const [scores, setScores] = useState<boolean[]>([])
  const [gamResult, setGamResult] = useState<GamificationResult | null>(null)
  const [saving, setSaving] = useState(false)

  const q = quiz.questions[current]
  const total = quiz.questions.length
  const isLast = current === total - 1
  const progress = ((current + (phase === 'reveal' ? 1 : 0)) / total) * 100

  function handleMCQSelect(val: number) {
    if (phase !== 'playing') return
    setSelected(val)
    setPhase('reveal')
  }

  function handleTFSelect(val: boolean) {
    if (phase !== 'playing') return
    setSelected(val)
    setPhase('reveal')
  }

  function handleRevealIdentification() {
    setPhase('reveal')
  }

  function handleSelfGrade(got: boolean) {
    setSelfGraded(got)
  }

  async function handleNext(isCorrect: boolean) {
    const next = [...scores, isCorrect]
    setScores(next)

    if (isLast) {
      setSaving(true)
      const score = next.filter(Boolean).length
      const pct = Math.round((score / total) * 100)
      const passed = pct >= PASS_THRESHOLD

      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const result = await updateNotesQuizGamification(supabase, user.id, {
            correct: score, total, percentage: pct, passed,
          })
          setGamResult(result)
        }
      } catch {}

      setSaving(false)
      setPhase('result')
    } else {
      setCurrent(i => i + 1)
      setPhase('playing')
      setSelected(null)
      setSelfGraded(null)
    }
  }

  // ─── RESULT SCREEN ──────────────────────────────────────────────────────────

  if (phase === 'result') {
    const score = scores.filter(Boolean).length
    const pct = Math.round((score / total) * 100)
    const passed = pct >= PASS_THRESHOLD

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl w-full max-w-md overflow-y-auto max-h-[90vh] p-6 space-y-4">
          <div className="text-center">
            <div className="text-5xl mb-3">{passed ? '🎉' : '📚'}</div>
            <h2 className="text-lg font-bold text-gray-900">Quick Quiz Done!</h2>
            <p className="text-sm text-gray-500 mt-1">{subject.name} — Notes Quiz</p>
          </div>

          <div className="text-center">
            <div className={`text-5xl font-bold mb-1 ${passed ? 'text-green-600' : 'text-orange-500'}`}>{pct}%</div>
            <p className="text-sm text-gray-500">{score} of {total} correct</p>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mt-3">
              <div className={`h-full rounded-full ${passed ? 'bg-green-500' : 'bg-orange-400'}`} style={{ width: `${pct}%` }} />
            </div>
            <div className={`inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full ${passed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
              {passed ? 'Quiz passed ✓' : `Need ${PASS_THRESHOLD}% to pass — review and try again`}
            </div>
          </div>

          {saving && (
            <p className="text-center text-xs text-gray-400 animate-pulse">Saving results…</p>
          )}

          {gamResult && gamResult.xpEarned > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center justify-between">
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
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">New badges</p>
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
          )}

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => {
                setCurrent(0)
                setPhase('playing')
                setSelected(null)
                setSelfGraded(null)
                setScores([])
                setGamResult(null)
              }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl border-2 ${c.border} ${c.text}`}
            >
              Retry quiz
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2.5 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800"
            >
              Back to notes
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ─── QUESTION SCREEN ────────────────────────────────────────────────────────

  const isIdentification = q.kind === 'identification'
  const isRevealed = phase === 'reveal'

  // Determine correctness for MCQ/TF (auto-graded)
  const autoCorrect =
    q.kind === 'mcq' ? selected === q.correct :
    q.kind === 'tf' ? selected === q.correct :
    null

  // For identification, use self-grade
  const currentIsCorrect = isIdentification ? selfGraded === true : autoCorrect === true

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-y-auto max-h-[90vh]">
        {/* Quiz header */}
        <div className="px-5 pt-4 pb-3 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">📝 Quick Quiz</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>{subject.name}</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all ${c.progressBar}`} style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-gray-400 mt-1">{current + 1} / {total}</p>
        </div>

        <div className="px-5 py-5 space-y-4">
          {/* Question type badge */}
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
            {q.kind === 'mcq' ? 'Multiple Choice' : q.kind === 'tf' ? 'True or False' : 'Identification'}
          </span>

          {/* Stem */}
          <p className="text-sm font-medium text-gray-900 leading-relaxed">{q.stem}</p>

          {/* MCQ options */}
          {q.kind === 'mcq' && (
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                let style = 'w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all '
                if (!isRevealed) {
                  style += 'border-gray-200 hover:border-gray-300 text-gray-700 cursor-pointer'
                } else {
                  if (i === q.correct) style += 'border-green-400 bg-green-50 text-green-800 font-medium'
                  else if (i === selected && i !== q.correct) style += 'border-red-300 bg-red-50 text-red-700'
                  else style += 'border-gray-100 text-gray-400 cursor-default'
                }
                return (
                  <button key={i} onClick={() => handleMCQSelect(i)} disabled={isRevealed} className={style}>
                    <span className="font-semibold mr-2 text-gray-400">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                    {isRevealed && i === q.correct && <span className="ml-2 text-green-600">✓</span>}
                    {isRevealed && i === selected && i !== q.correct && <span className="ml-2 text-red-500">✗</span>}
                  </button>
                )
              })}
            </div>
          )}

          {/* T/F options */}
          {q.kind === 'tf' && (
            <div className="grid grid-cols-2 gap-3">
              {([true, false] as const).map(val => {
                let style = 'py-4 rounded-xl border-2 text-sm font-semibold transition-all '
                if (!isRevealed) {
                  style += 'border-gray-200 hover:border-gray-300 text-gray-600 cursor-pointer'
                } else {
                  if (val === q.correct) style += 'border-green-400 bg-green-50 text-green-800'
                  else if (val === selected && val !== q.correct) style += 'border-red-300 bg-red-50 text-red-700'
                  else style += 'border-gray-100 text-gray-400'
                }
                return (
                  <button key={String(val)} onClick={() => handleTFSelect(val)} disabled={isRevealed} className={style}>
                    {val ? 'True' : 'False'}
                    {isRevealed && val === q.correct && <span className="ml-1 text-green-600">✓</span>}
                    {isRevealed && val === selected && val !== q.correct && <span className="ml-1 text-red-500">✗</span>}
                  </button>
                )
              })}
            </div>
          )}

          {/* Identification — reveal button */}
          {q.kind === 'identification' && !isRevealed && (
            <button
              onClick={handleRevealIdentification}
              className="w-full py-3 text-sm font-semibold rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Think about it… then tap to reveal answer
            </button>
          )}

          {/* Answer reveal — shown after any question is answered */}
          {isRevealed && (
            <div className={`rounded-xl border p-4 ${
              isIdentification
                ? 'bg-blue-50 border-blue-200'
                : currentIsCorrect
                ? 'bg-green-50 border-green-200'
                : 'bg-orange-50 border-orange-200'
            }`}>
              {!isIdentification && (
                <div className="flex items-center gap-2 mb-2">
                  <span>{currentIsCorrect ? '✅' : '❌'}</span>
                  <span className={`text-sm font-semibold ${currentIsCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                    {currentIsCorrect ? 'Correct!' : 'Not quite.'}
                  </span>
                </div>
              )}
              {isIdentification && (
                <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">Answer</p>
              )}
              <p className="text-sm text-gray-700 leading-relaxed">{q.answer}</p>

              {/* Self-grade for identification */}
              {isIdentification && selfGraded === null && (
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleSelfGrade(true)}
                    className="flex-1 py-2 text-xs font-semibold rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                  >
                    ✓ Got it
                  </button>
                  <button
                    onClick={() => handleSelfGrade(false)}
                    className="flex-1 py-2 text-xs font-semibold rounded-lg bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
                  >
                    ✗ Missed it
                  </button>
                </div>
              )}

              {isIdentification && selfGraded !== null && (
                <div className={`mt-2 text-xs font-semibold ${selfGraded ? 'text-green-700' : 'text-orange-700'}`}>
                  {selfGraded ? '✓ Marked as correct' : '✗ Marked as incorrect'}
                </div>
              )}
            </div>
          )}

          {/* Next button — shown when ready to advance */}
          {isRevealed && (q.kind !== 'identification' || selfGraded !== null) && (
            <button
              onClick={() => handleNext(currentIsCorrect)}
              className="w-full py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              {isLast ? 'See results →' : 'Next question →'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
