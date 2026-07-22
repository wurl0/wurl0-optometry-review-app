'use client'
import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import type { Top2SearchResponse } from '@/lib/top2-search-types'

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
  // Only what the network actually produced is stored. Each response carries the query
  // it answers, so "idle / loading / done / error" is derived below by comparing that
  // against what is typed right now. Holding a status in state instead would mean
  // setting it synchronously in the effect, which is a cascading render and, at this
  // scale, just a second copy of a fact the query and the response already tell us.
  const [result, setResult] = useState<Top2SearchResponse | null>(null)
  const [failedQuery, setFailedQuery] = useState('')
  const seq = useRef(0)

  const q = query.trim()

  useEffect(() => {
    if (q.length < 2) return
    // Debounced: one request per pause in typing, not one per keystroke.
    const mine = ++seq.current
    const timer = setTimeout(() => {
      fetch(`/api/top2-search?q=${encodeURIComponent(q)}`)
        .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((data: Top2SearchResponse) => { if (mine === seq.current) setResult(data) })
        .catch(() => { if (mine === seq.current) setFailedQuery(q) })
    }, 250)
    return () => clearTimeout(timer)
  }, [q])

  // The response the input currently deserves, or null while one is in flight. Stale
  // results never render against a newer query, so highlighting cannot lag the box.
  const shown = result && result.query === q ? result : null
  const idle = q.length < 2
  const errored = !idle && !shown && failedQuery === q
  const loading = !idle && !shown && !errored
  const hits = shown?.hits ?? []

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

      {loading && <p className="text-xs text-gray-400 mt-2">Searching…</p>}
      {errored && <p className="text-xs text-rose-500 mt-2">Search is unavailable right now.</p>}
      {shown && hits.length === 0 && (
        <p className="text-xs text-gray-500 mt-2">
          No matches for &ldquo;<span className="font-semibold text-gray-700">{shown.query}</span>&rdquo;.
        </p>
      )}

      {shown && hits.length > 0 && (
        <>
          <p className="text-xs text-gray-500 mt-2 mb-2">
            <span className="font-semibold text-gray-700">{shown.total}</span> match{shown.total === 1 ? '' : 'es'} in{' '}
            <span className="font-semibold text-gray-700">{hits.length}</span> section{hits.length === 1 ? '' : 's'}
            {shown.truncated && ' (showing the strongest 40)'}
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
                  {highlight(hit.snippet, shown.query)}
                </p>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
