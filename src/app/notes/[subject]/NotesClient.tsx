'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Block, NotesData, Section } from '@/lib/notes-types'
import { Subject } from '@/lib/types'
import { COLOR_MAP } from '@/lib/subjects'

interface Props {
  subject: Subject
  notes: NotesData
}

function BlockRenderer({ block, depth = 0 }: { block: Block; depth?: number }) {
  const [open, setOpen] = useState(true)

  if (block.kind === 'text') {
    return <p className="text-sm text-gray-700 leading-relaxed">{block.content}</p>
  }

  if (block.kind === 'bullets') {
    return (
      <ul className="space-y-1.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
            <span>{item}</span>
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
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 text-gray-700 border border-gray-200 align-top">
                    {cell}
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
        <p className="text-sm text-amber-900 leading-relaxed">{block.content}</p>
      </div>
    )
  }

  if (block.kind === 'sub') {
    return (
      <div className={`${depth > 0 ? 'border-l-2 border-gray-100 pl-4' : ''}`}>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 w-full text-left mb-2 group"
        >
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-gray-700 transition-colors">
            {block.title}
          </span>
          <span className="text-gray-300 text-xs">{open ? '▾' : '▸'}</span>
        </button>
        {open && (
          <div className="space-y-3">
            {block.blocks.map((b, i) => (
              <BlockRenderer key={i} block={b} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return null
}


export default function NotesClient({ subject, notes }: Props) {
  const c = COLOR_MAP[subject.color]
  const [allOpen, setAllOpen] = useState(false)

  return (
    <div className="min-h-screen pb-16">
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
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-5">
        {/* Section jump links */}
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

        {/* Section cards */}
        <div className="space-y-3" key={String(allOpen)}>
          {notes.sections.map(section => (
            <ForceOpenSection
              key={`${section.id}-${allOpen}`}
              section={section}
              color={subject.color}
              defaultOpen={allOpen}
            />
          ))}
        </div>

        {/* Bottom actions */}
        <div className="mt-6 flex gap-3">
          <Link
            href={`/practice/${subject.slug}`}
            className={`flex-1 text-center text-sm font-semibold py-3 rounded-xl border-2 ${c.border} ${c.text} hover:${c.bg} transition-colors`}
          >
            Practice questions →
          </Link>
          <Link
            href={`/exam/${subject.slug}`}
            className="flex-1 text-center text-sm font-semibold py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Full exam →
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
}: {
  section: Section
  color: string
  defaultOpen: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const c = COLOR_MAP[color]

  return (
    <div id={section.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className={`text-sm font-bold ${c.text}`}>{section.title}</span>
        <span className="text-gray-400 text-sm">{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-gray-100 pt-4">
          {section.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>
      )}
    </div>
  )
}
