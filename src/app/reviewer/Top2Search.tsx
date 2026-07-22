'use client'
import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import type { Top2Hit, Top2SearchResponse } from '@/lib/top2-search-types'

// Keyword search across every Top 2 reviewer and strategy card the signed-in user may
// open. The index stays on the server (/api/top2-search) — it is ~1.2 MB and it covers
// gated pages, so neither the bytes nor the text belong in the browser.

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlight(text: string, query: string): ReactNode {
  if (!query) return text
  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'))
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-yellow-200 text-inherit rounded px-0.5">{p}</mark>
      : <Fragment key={i}>{p}</Fragment>,
  )
}

export default function Top2Search() {
  const [query, setQuery] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [hits, setHits] = useState<Top2Hit[]>([])
  const [total, setTotal] = useState(0)
  const [truncated, setTruncated] = useState(false)
  // The query the current results belong to, so highlighting never lags the input.
  const [resultQuery, setResultQuery] = useState('')
  const seq = useRef(0)

  const q = query.trim()

  useEffect(() => {
    if (q.length < 2) {
      setState('idle')
      setHits([])
      return
    }
    // Debounced: one request per pause in typing, not one per keystroke.
    const mine = ++seq.current
    setState('loading')
    const timer = setTimeout(() => {
      fetch(`/api/top2-search?q=${encodeURIComponent(q)}`)
        .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((data: Top2SearchResponse) => {
          if (mine !== seq.current) return
          setHits(data.hits)
          setTotal(data.total)
          setTruncated(!!data.truncated)
          setResultQuery(data.query)
          setState('done')
        })
        .catch(() => { if (mine === seq.current) setState('error') })
    }, 250)
    return () => clearTimeout(timer)
  }, [q])

  return (
    <section className="mb-6">
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">🔎</span>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          placeholder="Search every reviewer and strategy card…"
          className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-colors"
        />
      </div>

      {state === 'loading' && <p className="text-xs text-gray-400 mt-2">Searching…</p>}
      {state === 'error' && <p className="text-xs text-rose-500 mt-2">Search is unavailable right now.</p>}
      {state === 'done' && hits.length === 0 && (
        <p className="text-xs text-gray-500 mt-2">
          No matches for &ldquo;<span className="font-semibold text-gray-700">{resultQuery}</span>&rdquo;.
        </p>
      )}

      {state === 'done' && hits.length > 0 && (
        <>
          <p className="text-xs text-gray-500 mt-2 mb-2">
            <span className="font-semibold text-gray-700">{total}</span> match{total === 1 ? '' : 'es'} in{' '}
            <span className="font-semibold text-gray-700">{hits.length}</span> section{hits.length === 1 ? '' : 's'}
            {truncated && ' (showing the strongest 40)'}
          </p>
          <div className="space-y-2">
            {hits.map(hit => (
              <a
                key={`${hit.itemId}-${hit.href}-${hit.title}`}
                href={hit.href}
                className="block bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-teal-300 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold text-gray-900">{hit.title}</span>
                  <span className="text-[10px] text-gray-400 shrink-0">{hit.label} · {hit.matches}×</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  {highlight(hit.snippet, resultQuery)}
                </p>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
