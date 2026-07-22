'use client'
import { useState, useMemo, Fragment, type ReactNode } from 'react'
import Link from 'next/link'
import { Block, NotesData, Section } from '@/lib/notes-types'
import { Subject } from '@/lib/types'
import { COLOR_MAP } from '@/lib/subjects'
import { DiagramRenderer } from '@/components/diagrams/DiagramRenderer'
import { NotesQuizData } from '@/lib/notes-quiz-types'
import { countMatches, sectionText } from '@/lib/notes-text'
import NotesQuiz from './NotesQuiz'

interface Props {
  subject: Subject
  notes: NotesData
  quiz?: NotesQuizData
  // Seeded from `?q=` when arriving from the global search, so the term stays applied.
  initialQuery?: string
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Wrap case-insensitive matches of `query` (a plain string) in a <mark>.
function highlightText(text: string, query: string): ReactNode {
  if (!query) return text
  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'))
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-200 text-inherit rounded px-0.5">{p}</mark>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  )
}

// Render lightweight inline emphasis: **bold** and *italic*, and highlight the
// active search `query` inside all text. Emphasis spans inherit the surrounding
// text color (so they work inside colored callouts too).
function inline(text: string, query = ''): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i} className="font-semibold">{highlightText(p.slice(2, -2), query)}</strong>
    }
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
      return <em key={i}>{highlightText(p.slice(1, -1), query)}</em>
    }
    return <Fragment key={i}>{highlightText(p, query)}</Fragment>
  })
}

const CALLOUT_STYLES = {
  why: { wrap: 'bg-blue-50 border-blue-200', icon: '💡', label: 'Why it works', accent: 'text-blue-700', body: 'text-blue-900' },
  trap: { wrap: 'bg-rose-50 border-rose-200', icon: '⚠️', label: 'Board trap', accent: 'text-rose-700', body: 'text-rose-900' },
  mnemonic: { wrap: 'bg-violet-50 border-violet-200', icon: '🧠', label: 'Memory hook', accent: 'text-violet-700', body: 'text-violet-900' },
} as const

function BlockRenderer({ block, depth = 0, query = '' }: { block: Block; depth?: number; query?: string }) {
  const [open, setOpen] = useState(true)

  if (block.kind === 'text') {
    return <p className="text-sm text-gray-700 leading-relaxed">{inline(block.content, query)}</p>
  }

  if (block.kind === 'bullets') {
    return (
      <ul className="space-y-1.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
            <span>{inline(item, query)}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.kind === 'table') {
    return (
      <div className="overflow-x-auto -mx-1">
        <table className="min-w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50">
              {block.headers.map((h, i) => (
                <th key={i} className="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200 whitespace-nowrap">
                  {inline(h, query)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 text-gray-700 border border-gray-200 align-top">
                    {inline(cell, query)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.kind === 'pearl') {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-3">
        <span className="text-amber-500 flex-shrink-0 mt-0.5">⭐</span>
        <p className="text-sm text-amber-900 leading-relaxed">{inline(block.content, query)}</p>
      </div>
    )
  }

  if (block.kind === 'callout') {
    const s = CALLOUT_STYLES[block.variant]
    return (
      <div className={`${s.wrap} border rounded-xl px-4 py-3`}>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-sm leading-none">{s.icon}</span>
          <span className={`text-[11px] font-bold uppercase tracking-wide ${s.accent}`}>
            {block.title ? inline(block.title, query) : s.label}
          </span>
        </div>
        <p className={`text-sm leading-relaxed ${s.body}`}>{inline(block.content, query)}</p>
      </div>
    )
  }

  if (block.kind === 'diagram') {
    return <DiagramRenderer id={block.id} caption={block.caption} />
  }

  if (block.kind === 'sub') {
    // While searching, force sub-sections open so no match stays hidden.
    const effectiveOpen = query ? true : open
    return (
      <div className={`${depth > 0 ? 'border-l-2 border-gray-100 pl-4' : ''}`}>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 w-full text-left mb-2 group"
        >
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-gray-700 transition-colors">
            {inline(block.title, query)}
          </span>
          <span className="text-gray-300 text-xs">{effectiveOpen ? '▾' : '▸'}</span>
        </button>
        {effectiveOpen && (
          <div className="space-y-3">
            {block.blocks.map((b, i) => (
              <BlockRenderer key={i} block={b} depth={depth + 1} query={query} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return null
}


export default function NotesClient({ subject, notes, quiz, initialQuery = '' }: Props) {
  const c = COLOR_MAP[subject.color]
  const [allOpen, setAllOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [query, setQuery] = useState(initialQuery)
  const q = query.trim()
  const searching = q.length > 0

  const { filtered, totalMatches } = useMemo(() => {
    if (!q) return { filtered: notes.sections, totalMatches: 0 }
    let total = 0
    const filtered = notes.sections.filter(s => {
      const cnt = countMatches(sectionText(s), q)
      total += cnt
      return cnt > 0
    })
    return { filtered, totalMatches: total }
  }, [q, notes.sections])

  return (
    <div className="min-h-screen pb-16">
      {quizOpen && quiz && (
        <NotesQuiz subject={subject} quiz={quiz} onClose={() => setQuizOpen(false)} />
      )}
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">←</Link>
              <span className="text-base leading-none">{subject.icon}</span>
              <span className={`text-xs font-semibold ${c.text}`}>{subject.name}</span>
              <span className="text-xs text-gray-400">· Notes</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">{notes.sections.length} sections</span>
              <button
                onClick={() => setAllOpen(o => !o)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg transition-colors text-gray-600"
              >
                {allOpen ? 'Collapse all' : 'Expand all'}
              </button>
            </div>
          </div>

          {/* Keyword search */}
          <div className="mt-2 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">🔎</span>
            <input
              type="search"
              inputMode="search"
              autoComplete="off"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={`Search ${subject.name}…`}
              className="w-full pl-9 pr-8 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-5">
        {searching ? (
          /* Search result summary */
          <div className="mb-4 text-xs text-gray-500">
            {filtered.length > 0 ? (
              <>
                Found <span className="font-semibold text-gray-700">{totalMatches}</span> match{totalMatches === 1 ? '' : 'es'}
                {' '}in <span className="font-semibold text-gray-700">{filtered.length}</span> section{filtered.length === 1 ? '' : 's'}
              </>
            ) : (
              <>No matches for &ldquo;<span className="font-semibold text-gray-700">{q}</span>&rdquo; in {subject.name}.</>
            )}
          </div>
        ) : (
          /* Section jump links */
          <div className="mb-4 flex flex-wrap gap-1.5">
            {notes.sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-xs px-2.5 py-1 rounded-full border ${c.border} ${c.text} hover:${c.bg} transition-colors`}
              >
                {s.title}
              </a>
            ))}
          </div>
        )}

        {/* Section cards */}
        <div className="space-y-3" key={String(allOpen)}>
          {filtered.map(section => (
            <ForceOpenSection
              key={`${section.id}-${allOpen}`}
              section={section}
              color={subject.color}
              defaultOpen={allOpen}
              forceOpen={searching}
              query={q}
            />
          ))}
        </div>

        {/* Quick Quiz CTA — hidden while searching to keep results focused */}
        {quiz && !searching && (
          <div className={`mt-6 rounded-2xl border p-5 bg-gradient-to-br ${c.gradient} text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">📝 Quick Notes Quiz</p>
                <p className="text-xs mt-0.5 text-white/80">{quiz.questions.length} questions · MCQ, T/F & Identification · 50% to pass</p>
              </div>
              <button
                onClick={() => setQuizOpen(true)}
                className="text-xs font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
              >
                Take quiz →
              </button>
            </div>
          </div>
        )}

        {/* Bottom actions */}
        <div className="mt-3 flex gap-3">
          <Link
            href={`/practice/${subject.slug}`}
            className={`flex-1 text-center text-sm font-semibold py-3 rounded-xl border-2 ${c.border} ${c.text} hover:${c.bg} transition-colors`}
          >
            Practice levels →
          </Link>
          <Link
            href="/"
            className="flex-1 text-center text-sm font-semibold py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Home
          </Link>
        </div>
      </main>
    </div>
  )
}

function ForceOpenSection({
  section,
  color,
  defaultOpen,
  forceOpen,
  query,
}: {
  section: Section
  color: string
  defaultOpen: boolean
  forceOpen: boolean
  query: string
}) {
  const [open, setOpen] = useState(defaultOpen)
  const c = COLOR_MAP[color]
  const effectiveOpen = forceOpen || open

  return (
    <div id={section.id} className="scroll-mt-32 bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className={`text-sm font-bold ${c.text}`}>{inline(section.title, query)}</span>
        <span className="text-gray-400 text-sm">{effectiveOpen ? '▾' : '▸'}</span>
      </button>
      {effectiveOpen && (
        <div className="px-5 pb-5 space-y-4 border-t border-gray-100 pt-4">
          {section.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} query={query} />
          ))}
        </div>
      )}
    </div>
  )
}
