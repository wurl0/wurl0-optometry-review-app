import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import { COLOR_MAP, SUBJECTS } from '@/lib/subjects'
import { searchAll } from '@/lib/search'
import { canOpenCockpit, isAdmin as isAdminAccess, loadAccess } from '@/lib/access'

// Cross-subject keyword search. Server-rendered on purpose: the whole point is to
// answer "where did I read about X" without downloading every subject's notes first.

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

const AREA_LABEL = { notes: '📖 Notes', 'ole-prep': '🎓 OLE Prep' } as const

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { q: raw } = await searchParams
  const query = (raw ?? '').trim()

  // The Top 2 reviewers are static HTML with their own index, so they are searched
  // separately. Point there rather than leave a keyword looking like it has no hits.
  const access = await loadAccess(supabase, { id: user.id, email: user.email })
  const top2Href = isAdminAccess(access) ? '/top2/index.html' : '/reviewer'
  const showTop2Link = canOpenCockpit(access)

  // Same unlock rule as /ole-prep: the bonus subject stays behind "try every subject".
  const isAdmin = isAdminAccess(access)
  let allowBonus = isAdmin
  if (!allowBonus && query.length >= 2) {
    const { data: attempts } = await supabase
      .from('exam_attempts').select('subject').eq('user_id', user.id)
    const attempted = new Set((attempts ?? []).map(a => a.subject))
    allowBonus = SUBJECTS.filter(s => !s.isBonus).every(s => attempted.has(s.slug))
  }

  const results = searchAll(query, allowBonus)
  const tooShort = query.length > 0 && query.length < 2

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">← Back</Link>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔎</span>
              <span className="font-bold text-gray-900">Search all subjects</span>
            </div>
          </div>

          {/* Plain GET form: no client JS, works on a locked-down phone browser. */}
          <form action="/search" method="get" className="relative">
            <input
              type="search"
              name="q"
              defaultValue={query}
              autoFocus
              placeholder="Keyword, e.g. Prentice, tonometry, timolol…"
              className="w-full pl-4 pr-20 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs font-semibold bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {query.length === 0 && (
          <p className="text-sm text-gray-500">
            Searches every subject&apos;s <strong>Notes reviewer</strong> and <strong>OLE Prep</strong> at once,
            then drops you on the exact section with the word highlighted.
          </p>
        )}

        {tooShort && (
          <p className="text-sm text-gray-500">Type at least two characters.</p>
        )}

        {query.length >= 2 && results.subjects.length === 0 && (
          <p className="text-sm text-gray-500">
            No matches for &ldquo;<span className="font-semibold text-gray-700">{query}</span>&rdquo; in any subject.
          </p>
        )}

        {results.subjects.length > 0 && (
          <>
            <p className="text-xs text-gray-500 mb-4">
              <span className="font-semibold text-gray-700">{results.totalMatches}</span> match{results.totalMatches === 1 ? '' : 'es'}
              {' '}in <span className="font-semibold text-gray-700">{results.totalSections}</span> section{results.totalSections === 1 ? '' : 's'}
              {' '}across <span className="font-semibold text-gray-700">{results.subjects.length}</span> subject{results.subjects.length === 1 ? '' : 's'}
            </p>

            <div className="space-y-5">
              {results.subjects.map(subject => {
                const c = COLOR_MAP[subject.color]
                return (
                  <section key={subject.slug}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base leading-none">{subject.icon}</span>
                      <h2 className={`text-sm font-bold ${c.text}`}>{subject.name}</h2>
                      <span className="text-xs text-gray-400">
                        {subject.matches} match{subject.matches === 1 ? '' : 'es'}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {subject.hits.map(hit => (
                        <Link
                          key={`${hit.area}-${hit.sectionId}`}
                          href={hit.href}
                          className="block bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-gray-300 transition-colors"
                        >
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-sm font-semibold text-gray-900">{hit.sectionTitle}</span>
                            <span className="text-[10px] font-medium text-gray-400 shrink-0">
                              {AREA_LABEL[hit.area]} · {hit.matches}×
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed mt-1">
                            {highlight(hit.snippet, results.query)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </>
        )}
        {showTop2Link && (
          <p className="text-xs text-gray-400 mt-4 border-t border-gray-100 pt-4">
            This covers the app&apos;s own notes only. The Top 2 reviewers are searched from{' '}
            <a href={top2Href} className="text-teal-600 font-medium hover:underline">the Top 2 home</a>.
          </p>
        )}
      </main>
    </div>
  )
}
