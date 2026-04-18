'use client'

import { useState } from 'react'
import Link from 'next/link'
import { OlePrepData, OlePrepItem } from '@/lib/ole-prep-types'

interface Props {
  data: OlePrepData
}

function MnemonicCard({ item }: { item: Extract<OlePrepItem, { kind: 'mnemonic' }> }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(o => !o)}
      className="w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-violet-300 transition-colors"
    >
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">{item.term}</p>
          <p className="text-xs text-violet-700 mt-0.5 italic">{item.device}</p>
        </div>
        <span className="text-gray-400 shrink-0 text-lg">{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div className="border-t border-gray-100 bg-violet-50 px-4 py-3">
          <p className="text-xs text-gray-700 leading-relaxed">{item.breakdown}</p>
        </div>
      )}
    </button>
  )
}

function FactCard({ item }: { item: Extract<OlePrepItem, { kind: 'fact' }> }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex gap-3 items-start">
      <span className="text-yellow-500 text-lg shrink-0">⭐</span>
      <div>
        {item.highlight && (
          <span className="text-[10px] font-bold uppercase tracking-wide text-amber-600 block mb-1">{item.highlight}</span>
        )}
        <p className="text-sm text-gray-800 leading-relaxed">{item.content}</p>
      </div>
    </div>
  )
}

function TrapCard({ item }: { item: Extract<OlePrepItem, { kind: 'trap' }> }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="bg-white border border-orange-200 rounded-xl overflow-hidden">
      <div className="px-4 py-3 bg-orange-50">
        <p className="text-sm font-semibold text-gray-800">{item.question}</p>
      </div>
      <div className="px-4 py-3 space-y-2">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full text-xs font-semibold py-2 rounded-lg bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
          >
            Reveal Answer
          </button>
        ) : (
          <>
            <div className="flex gap-2 text-xs">
              <span className="shrink-0 text-red-500 font-bold">✗</span>
              <span className="text-gray-400 line-through">{item.wrong}</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="shrink-0 text-green-600 font-bold">✓</span>
              <span className="text-green-800 font-semibold">{item.correct}</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mt-1">
              <p className="text-xs text-gray-600 leading-relaxed"><span className="font-semibold text-gray-700">Why: </span>{item.why}</p>
            </div>
            <button
              onClick={() => setRevealed(false)}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Hide answer
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function RecallCard({ item }: { item: Extract<OlePrepItem, { kind: 'recall' }> }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-4 py-3">
        <p className="text-sm font-semibold text-gray-800">{item.prompt}</p>
      </div>
      <div className="border-t border-gray-100 px-4 py-3">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="text-xs font-semibold text-teal-700 hover:text-teal-900 underline underline-offset-2 transition-colors"
          >
            Show answer
          </button>
        ) : (
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm text-teal-800 font-medium leading-relaxed">{item.answer}</p>
            <button
              onClick={() => setRevealed(false)}
              className="text-xs text-gray-400 hover:text-gray-600 shrink-0"
            >
              Hide
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const SECTION_ICONS: Record<string, string> = {
  mnemonics: '🧠',
  'high-yield': '⭐',
  traps: '⚠️',
  recall: '🎯',
}

export default function OlePrepClient({ data }: Props) {
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(data.sections.map(s => s.id)))

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const collapseAll = () => setOpenSections(new Set())
  const expandAll = () => setOpenSections(new Set(data.sections.map(s => s.id)))

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/ole-prep" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">← Back</Link>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-gray-900 text-sm truncate">{data.subject}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Title + controls */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{data.subject}</h1>
            <p className="text-xs text-gray-500 mt-0.5">OLE Board Style Prep</p>
          </div>
          <div className="flex gap-2">
            <button onClick={expandAll} className="text-xs text-gray-500 hover:text-gray-800 transition-colors">Expand all</button>
            <span className="text-gray-200">|</span>
            <button onClick={collapseAll} className="text-xs text-gray-500 hover:text-gray-800 transition-colors">Collapse all</button>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {data.sections.map(section => {
            const isOpen = openSections.has(section.id)
            return (
              <div key={section.id} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                {/* Section header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{section.icon || SECTION_ICONS[section.id] || '📌'}</span>
                    <span className="font-semibold text-gray-900">{section.title}</span>
                    <span className="text-xs text-gray-400">({section.items.length})</span>
                  </div>
                  <span className="text-gray-400">{isOpen ? '▲' : '▼'}</span>
                </button>

                {/* Section items */}
                {isOpen && (
                  <div className="border-t border-gray-100 px-4 py-4 space-y-3 bg-gray-50">
                    {section.items.map((item, idx) => {
                      if (item.kind === 'mnemonic') return <MnemonicCard key={idx} item={item} />
                      if (item.kind === 'fact') return <FactCard key={idx} item={item} />
                      if (item.kind === 'trap') return <TrapCard key={idx} item={item} />
                      if (item.kind === 'recall') return <RecallCard key={idx} item={item} />
                      return null
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom nav */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/ole-prep"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ← Back to all subjects
          </Link>
        </div>
      </main>
    </div>
  )
}
