'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, ExamResult } from '@/lib/types'
import { createClient } from '@/lib/supabase-client'
import { COLOR_MAP } from '@/lib/subjects'

interface Props {
  subject: Subject
  questions: Question[]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp
  }
  return a
}

export default function ExamClient({ subject, questions }: Props) {
  const router = useRouter()
  const c = COLOR_MAP[subject.color]

  const [shuffled] = useState(() => shuffle(questions))
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | boolean | null)[]>(() => new Array(questions.length).fill(null))
  const [flagged, setFlagged] = useState<Set<number>>(new Set())
  const [elapsed, setElapsed] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    if (submitting) return
    const t = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(t)
  }, [submitting])

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const q = shuffled[current]
  const answered = answers.filter(a => a !== null).length
  const progress = ((current + 1) / shuffled.length) * 100

  function answer(val: number | boolean) {
    setAnswers(prev => { const n = [...prev]; n[current] = val; return n })
  }

  function toggleFlag() {
    setFlagged(prev => { const n = new Set(prev); n.has(current) ? n.delete(current) : n.add(current); return n })
  }

  const handleSubmit = useCallback(async () => {
    setSubmitting(true)
    let score = 0
    shuffled.forEach((q, i) => {
      const a = answers[i]
      if (a === null) return
      if (q.type === 'tf') { if (a === q.correct) score++ }
      else { if (a === q.correct) score++ }
    })
    const percentage = Math.round((score / shuffled.length) * 100 * 10) / 10

    const result: ExamResult = {
      subject: subject.slug,
      score,
      total: shuffled.length,
      percentage,
      answers,
      completedAt: new Date().toISOString(),
    }

    // Save to localStorage for results page
    localStorage.setItem(`ole_result_${subject.slug}`, JSON.stringify({ ...result, questions: shuffled }))

    // Save to Supabase
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const wrongQ = shuffled.reduce<number[]>((acc, q, i) => {
          if (answers[i] !== null && answers[i] !== q.correct) acc.push(i)
          return acc
        }, [])
        await supabase.from('exam_attempts').insert({
          user_id: user.id,
          subject: subject.slug,
          score,
          total: shuffled.length,
          percentage,
          wrong_questions: wrongQ,
        })
      }
    } catch {}

    router.push(`/results/${subject.slug}`)
  }, [answers, shuffled, subject, router])

  if (submitting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-pulse">📝</div>
          <p className="text-gray-600 font-medium">Calculating your score…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Sticky header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className={`text-xs font-semibold ${c.text}`}>{subject.name}</span>
              <span className="text-xs text-gray-400 ml-2">Q{current + 1} of {shuffled.length}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-gray-500">{fmt(elapsed)}</span>
              <button onClick={() => setShowNav(!showNav)} className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">
                {answered}/{shuffled.length} answered
              </button>
            </div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full bg-teal-500 transition-all`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      {/* Question nav drawer */}
      {showNav && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex flex-wrap gap-1.5">
              {shuffled.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setShowNav(false) }}
                  className={`w-8 h-8 text-xs rounded-lg font-medium transition-colors
                    ${i === current ? 'bg-teal-600 text-white' :
                      flagged.has(i) ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' :
                      answers[i] !== null ? 'bg-teal-100 text-teal-800' :
                      'bg-gray-100 text-gray-500'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-teal-100 inline-block" /> Answered</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-100 border border-yellow-300 inline-block" /> Flagged</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-100 inline-block" /> Unanswered</span>
            </div>
          </div>
        </div>
      )}

      {/* Question */}
      <main className="max-w-2xl mx-auto px-4 pt-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                {q.type === 'mcq' ? 'Multiple Choice' : 'True or False'}
              </span>
              {(q as Question & { isTrap?: boolean }).isTrap && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700">⚠️ Board trap</span>
              )}
            </div>
            <button
              onClick={toggleFlag}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors flex-shrink-0
                ${flagged.has(current) ? 'bg-yellow-100 border-yellow-300 text-yellow-700' : 'border-gray-200 text-gray-400 hover:border-yellow-300 hover:text-yellow-600'}`}
            >
              {flagged.has(current) ? '🚩 Flagged' : '🏳️ Flag'}
            </button>
          </div>

          <p className="text-base font-medium text-gray-900 leading-relaxed mb-6">{q.stem}</p>

          {q.type === 'mcq' && q.options && (
            <div className="space-y-2.5">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all
                    ${answers[current] === i
                      ? `${c.border} ${c.bg} ${c.text} font-medium`
                      : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  <span className="font-semibold mr-2 text-gray-400">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {q.type === 'tf' && (
            <div className="grid grid-cols-2 gap-3">
              {(['True', 'False'] as const).map(opt => {
                const val = opt === 'True'
                return (
                  <button
                    key={opt}
                    onClick={() => answer(val)}
                    className={`py-4 rounded-xl border-2 text-sm font-semibold transition-all
                      ${answers[current] === val
                        ? `${c.border} ${c.bg} ${c.text}`
                        : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-4 py-2 text-sm border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>

          {current < shuffled.length - 1 ? (
            <button
              onClick={() => setCurrent(c => Math.min(shuffled.length - 1, c + 1))}
              className="px-4 py-2 text-sm bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => {
                const unanswered = answers.filter(a => a === null).length
                if (unanswered > 0) {
                  const ok = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)
                  if (!ok) return
                }
                handleSubmit()
              }}
              className="px-5 py-2 text-sm bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold"
            >
              Submit exam ✓
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
