'use client'

import { useState } from 'react'
import { Subject } from '@/lib/types'
import { QUIZ_CATEGORIES, getQuizByCategory, getQuestionCount } from '@/data/constants-quiz'
import NotesQuiz from '@/app/notes/[subject]/NotesQuiz'

interface Props {
  subject: Subject
  onClose: () => void
}

export default function ConstantsQuizPicker({ subject, onClose }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // ── Category picked → launch quiz ─────────────────────────────────────────
  if (selectedCategory !== null) {
    const quiz = getQuizByCategory(selectedCategory)
    return (
      <NotesQuiz
        subject={subject}
        quiz={quiz}
        onClose={() => setSelectedCategory(null)}
      />
    )
  }

  // ── Category picker ────────────────────────────────────────────────────────
  const allCount = getQuestionCount('all')

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]">

        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900">Constants Quiz 🧠</h2>
            <p className="text-xs text-gray-500 mt-0.5">Pick a category to drill</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="px-5 py-4 space-y-3">

          {/* All Topics — featured row */}
          <button
            onClick={() => setSelectedCategory('all')}
            className="w-full flex items-center justify-between px-4 py-3 bg-yellow-50 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-100 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl">📋</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">All Topics</p>
                <p className="text-[11px] text-gray-500">Mixed from every category</p>
              </div>
            </div>
            <span className="text-xs font-bold bg-yellow-200 text-yellow-800 px-2.5 py-1 rounded-full shrink-0">
              {allCount} Qs
            </span>
          </button>

          {/* Category grid */}
          <div className="grid grid-cols-2 gap-2">
            {QUIZ_CATEGORIES.map(cat => {
              const count = getQuestionCount(cat.id)
              if (count === 0) return null
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="text-left flex items-center justify-between px-3 py-3 bg-white border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 rounded-xl transition-colors gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base shrink-0">{cat.icon}</span>
                    <span className="text-xs font-medium text-gray-800 leading-tight">{cat.label}</span>
                  </div>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full shrink-0">
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
