'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Question, Subject } from '@/lib/types'
import { COLOR_MAP } from '@/lib/subjects'
import { createClient } from '@/lib/supabase-client'
import { updateGamification, GamificationResult } from '@/lib/gamification'

const LEVEL_CONFIG = [
  { level: 1, label: 'Level 1', questions: 25, description: 'Foundation', emoji: '🌱' },
  { level: 2, label: 'Level 2', questions: 50, description: 'Building Up', emoji: '📈' },
  { level: 3, label: 'Level 3', questions: 100, description: 'Challenge', emoji: '🎯' },
] as const

const PASS_THRESHOLD = 70

interface LevelRecord {
  passed: boolean
  score: number
  total: number
  percentage: number
}

interface Props {
  subject: Subject
  questions: Question[]
  levelProgress: Record<number, LevelRecord>
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Phase = 'select' | 'playing' | 'result'

export default function PracticeClient({ subject, questions, levelProgress: initialProgress }: Props) {
  const c = COLOR_MAP[subject.color]

  const [phase, setPhase] = useState<Phase>('select')
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3 | null>(null)
  const [levelProgress, setLevelProgress] = useState(initialProgress)

  // Playing state
  const [levelQuestions, setLevelQuestions] = useState<Question[]>([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [sessionAnswers, setSessionAnswers] = useState<{ isCorrect: boolean }[]>([])
  const [gamResult, setGamResult] = useState<GamificationResult | null>(null)
  const [gamLoading, setGamLoading] = useState(false)

  // Result state
  const [levelResult, setLevelResult] = useState<{ score: number; total: number; pct: number; passed: boolean } | null>(null)

  const isUnlocked = (lvl: number) => {
    if (lvl === 1) return true
    return !!(levelProgress[lvl - 1]?.passed)
  }

  function startLevel(lvl: 1 | 2 | 3) {
    const config = LEVEL_CONFIG.find(c => c.level === lvl)!
    const count = Math.min(config.questions, questions.length)
    const sliced = shuffle(questions).slice(0, count)
    setActiveLevel(lvl)
    setLevelQuestions(sliced)
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setSessionAnswers([])
    setGamResult(null)
    setLevelResult(null)
    setPhase('playing')
  }

  function handleSelect(val: number | boolean) {
    if (revealed) return
    setSelected(val)
    setRevealed(true)
  }

  async function handleNext() {
    const q = levelQuestions[current]
    const isCorrect = selected === q.correct
    const next = [...sessionAnswers, { isCorrect }]
    setSessionAnswers(next)

    const isLast = current === levelQuestions.length - 1

    if (isLast) {
      setGamLoading(true)
      const score = next.filter(a => a.isCorrect).length
      const total = next.length
      const pct = Math.round((score / total) * 100)
      const passed = pct >= PASS_THRESHOLD

      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          // Save gamification XP
          const result = await updateGamification(supabase, user.id, {
            correct: score, total, isExam: false, percentage: pct, subject: subject.slug,
          })
          setGamResult(result)

          // Save level progress (upsert — only update if improving)
          const existing = levelProgress[activeLevel!]
          const shouldUpdate = !existing || pct > existing.percentage || (!existing.passed && passed)
          if (shouldUpdate) {
            await supabase.from('practice_progress').upsert({
              user_id: user.id,
              subject: subject.slug,
              level: activeLevel!,
              passed,
              score,
              total,
              percentage: pct,
              completed_at: new Date().toISOString(),
            }, { onConflict: 'user_id,subject,level' })

            setLevelProgress(prev => ({
              ...prev,
              [activeLevel!]: { passed, score, total, percentage: pct },
            }))
          }
        }
      } catch {}

      setLevelResult({ score, total: next.length, pct, passed })
      setGamLoading(false)
      setPhase('result')
    } else {
      setCurrent(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  // ─── LEVEL SELECT SCREEN ──────────────────────────────────────────────────

  if (phase === 'select') {
    const allLevelsPassed = !!(levelProgress[1]?.passed && levelProgress[2]?.passed && levelProgress[3]?.passed)

    return (
      <div className="min-h-screen pb-12">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-2">
            <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">←</Link>
            <span className="text-base leading-none">{subject.icon}</span>
            <span className={`text-xs font-semibold ${c.text}`}>{subject.name}</span>
            <span className="text-xs text-gray-400">· Guided Practice</span>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 pt-8">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">Choose Your Level</h1>
            <p className="text-sm text-gray-500 mt-1">Pass each level at {PASS_THRESHOLD}% to unlock the next. Complete all 3 to unlock the Full Exam.</p>
          </div>

          {/* Level progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {LEVEL_CONFIG.map((cfg, i) => {
              const rec = levelProgress[cfg.level]
              const unlocked = isUnlocked(cfg.level)
              return (
                <div key={cfg.level} className="flex items-center gap-2 flex-1">
                  <div className={`flex-1 rounded-full h-2 ${rec?.passed ? 'bg-green-500' : unlocked ? c.progressBar + ' opacity-30' : 'bg-gray-200'}`} />
                  {i < 2 && <div className={`w-2 h-2 rounded-full ${rec?.passed ? 'bg-green-500' : 'bg-gray-200'}`} />}
                </div>
              )
            })}
          </div>

          {/* Level cards */}
          <div className="space-y-3">
            {LEVEL_CONFIG.map(cfg => {
              const rec = levelProgress[cfg.level]
              const unlocked = isUnlocked(cfg.level)
              const count = Math.min(cfg.questions, questions.length)

              return (
                <div
                  key={cfg.level}
                  className={`rounded-2xl border p-5 transition-all ${
                    unlocked
                      ? 'bg-white border-gray-200 cursor-pointer hover:border-gray-300 hover:shadow-sm'
                      : 'bg-gray-50 border-gray-100'
                  }`}
                  onClick={() => unlocked && startLevel(cfg.level as 1 | 2 | 3)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{unlocked ? cfg.emoji : '🔒'}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${unlocked ? 'text-gray-900' : 'text-gray-400'}`}>{cfg.label}</span>
                          {rec?.passed && (
                            <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Passed ✓</span>
                          )}
                          {rec && !rec.passed && (
                            <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded-full">Retry</span>
                          )}
                        </div>
                        <p className={`text-xs mt-0.5 ${unlocked ? 'text-gray-500' : 'text-gray-400'}`}>
                          {cfg.description} · {count} questions
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {rec ? (
                        <div>
                          <div className={`text-lg font-bold ${rec.passed ? 'text-green-600' : 'text-orange-500'}`}>{rec.percentage}%</div>
                          <div className="text-xs text-gray-400">best score</div>
                        </div>
                      ) : unlocked ? (
                        <span className={`text-xs font-semibold ${c.text} flex items-center gap-1`}>
                          Start →
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">Pass L{cfg.level - 1} first</span>
                      )}
                    </div>
                  </div>

                  {/* Score bar if attempted */}
                  {rec && (
                    <div className="mt-3">
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${rec.passed ? 'bg-green-500' : 'bg-orange-400'}`}
                          style={{ width: `${rec.percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>{rec.score}/{rec.total} correct</span>
                        <span>Pass: {PASS_THRESHOLD}%</span>
                      </div>
                    </div>
                  )}

                  {/* Not unlocked reason */}
                  {!unlocked && (
                    <p className="text-xs text-gray-400 mt-3">
                      Complete Level {cfg.level - 1} with {PASS_THRESHOLD}%+ to unlock
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Full exam unlock status */}
          <div className={`mt-6 rounded-2xl border p-5 ${allLevelsPassed ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-dashed border-gray-200'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{allLevelsPassed ? '🏆' : '🔒'}</span>
              <div>
                <p className={`text-sm font-bold ${allLevelsPassed ? 'text-white' : 'text-gray-400'}`}>Full Exam</p>
                <p className={`text-xs mt-0.5 ${allLevelsPassed ? 'text-gray-300' : 'text-gray-400'}`}>
                  {allLevelsPassed ? 'Unlocked! Go take the full exam from the home page.' : 'Pass all 3 levels to unlock the full exam.'}
                </p>
              </div>
              {allLevelsPassed && (
                <Link
                  href={`/exam/${subject.slug}`}
                  className="ml-auto text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Take Exam →
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // ─── LOADING SCREEN ───────────────────────────────────────────────────────

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

  // ─── RESULT SCREEN ────────────────────────────────────────────────────────

  if (phase === 'result' && levelResult) {
    const { score, total, pct, passed } = levelResult
    const cfg = LEVEL_CONFIG.find(c => c.level === activeLevel)!
    const nextLevel = activeLevel! < 3 ? activeLevel! + 1 : null
    const nextUnlocked = passed && nextLevel !== null

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-3">
          {/* Score card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl mb-4">{passed ? '🎉' : '📚'}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{cfg.label} Complete</h2>
            <p className="text-sm text-gray-500 mb-6">{subject.name}</p>
            <div className={`text-5xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-orange-500'}`}>{pct}%</div>
            <p className="text-sm text-gray-500 mb-4">{score} of {total} correct</p>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div className={`h-full rounded-full ${passed ? 'bg-green-500' : 'bg-orange-400'}`} style={{ width: `${pct}%` }} />
            </div>
            <div className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${passed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
              {passed ? `Level ${activeLevel} passed ✓` : `Need ${PASS_THRESHOLD}% to pass — keep going`}
            </div>
          </div>

          {/* Next level unlock banner */}
          {nextUnlocked && (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl px-5 py-4">
              <p className="text-sm font-bold text-teal-900">🔓 Level {nextLevel} unlocked!</p>
              <p className="text-xs text-teal-700 mt-0.5">You can now take Level {nextLevel} practice.</p>
            </div>
          )}

          {/* All levels passed */}
          {passed && activeLevel === 3 && (
            <div className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4">
              <p className="text-sm font-bold text-white">🏆 Full Exam unlocked!</p>
              <p className="text-xs text-gray-300 mt-0.5">You&apos;ve passed all 3 levels. The full exam is now available.</p>
            </div>
          )}

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
            <button
              onClick={() => startLevel(activeLevel!)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl border-2 ${c.border} ${c.text} transition-colors`}
            >
              Retry level
            </button>
            <button
              onClick={() => setPhase('select')}
              className="flex-1 py-2.5 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              All levels
            </button>
          </div>
          <Link href="/" className="block text-center text-xs text-gray-400 hover:text-gray-600 py-1">← Home</Link>
        </div>
      </div>
    )
  }

  // ─── PLAYING SCREEN ───────────────────────────────────────────────────────

  const q = levelQuestions[current]
  if (!q) return null

  const isLast = current === levelQuestions.length - 1
  const progress = ((current + (revealed ? 1 : 0)) / levelQuestions.length) * 100
  const cfg = LEVEL_CONFIG.find(lc => lc.level === activeLevel)!

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

  return (
    <div className="min-h-screen pb-24">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button onClick={() => setPhase('select')} className="text-gray-400 hover:text-gray-600 text-sm">←</button>
              <span className="text-base leading-none">{subject.icon}</span>
              <span className={`text-xs font-semibold ${c.text}`}>{subject.name}</span>
              <span className="text-xs text-gray-400">· {cfg.label}</span>
            </div>
            <span className="text-xs text-gray-400">{current + 1} / {levelQuestions.length}</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all ${c.progressBar}`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
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

          {q.type === 'mcq' && q.options && (
            <div className="space-y-2.5">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => handleSelect(i)} disabled={revealed} className={getOptionStyle(i)}>
                  <span className="font-semibold mr-2 text-gray-400">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {revealed && i === q.correct && <span className="ml-2 text-green-600">✓</span>}
                  {revealed && i === selected && i !== q.correct && <span className="ml-2 text-red-500">✗</span>}
                </button>
              ))}
            </div>
          )}

          {q.type === 'tf' && (
            <div className="grid grid-cols-2 gap-3">
              {([true, false] as const).map(val => (
                <button
                  key={String(val)}
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
                  {val ? 'True' : 'False'}
                  {revealed && val === q.correct && <span className="ml-1 text-green-600">✓</span>}
                  {revealed && val === selected && val !== q.correct && <span className="ml-1 text-red-500">✗</span>}
                </button>
              ))}
            </div>
          )}
        </div>

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

        {revealed && (
          <button onClick={handleNext} className="w-full py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            {isLast ? 'See results →' : 'Next question →'}
          </button>
        )}

        {!revealed && (
          <p className="text-center text-xs text-gray-400">Select an answer to continue</p>
        )}
      </main>
    </div>
  )
}
