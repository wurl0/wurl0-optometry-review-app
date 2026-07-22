import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { loadAccess, canOpenItem } from '@/lib/access'
import { ITEM_BY_ID } from '@/lib/reviewer-manifest'
import { countMatches, snippet } from '@/lib/notes-text'
import { TOP2_INDEX } from '@/data/top2-search-index'
import type { Top2Hit } from '@/lib/top2-search-types'

// Keyword search across the Top 2 reference pages (reviewers, strategy cards, law book).
//
// Server-side by design, for two reasons: the index is ~1.2 MB, which is not something a
// phone should download to type one word into; and every page is access-gated, so results
// have to be filtered against the same manifest the middleware uses. A client-side index
// would hand every user the full text of pages they cannot open.
//
// Rebuild the index with: python3 exam-build/build_top2_search_index.py

const MAX_RESULTS = 40

export async function GET(request: Request) {
  const q = (new URL(request.url).searchParams.get('q') ?? '').trim()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  if (q.length < 2) return NextResponse.json({ query: q, total: 0, hits: [] })

  const access = await loadAccess(supabase, { id: user.id, email: user.email })

  const hits: Top2Hit[] = []
  let total = 0

  for (const doc of TOP2_INDEX.docs) {
    const item = ITEM_BY_ID.get(doc.itemId)
    // Not in the manifest, or not granted: fail closed. A page you cannot open must
    // not leak its text through a search result.
    if (!item || !canOpenItem(access, item)) continue

    for (const section of doc.sections) {
      const matches = countMatches(`${section.topic} ${section.heading} ${section.text}`, q)
      if (matches === 0) continue
      total += matches
      hits.push({
        itemId: doc.itemId,
        subject: doc.subject,
        label: doc.label,
        kind: doc.kind,
        title: section.topic ? `${section.topic} · ${section.heading}` : section.heading,
        href: section.anchor ? `${doc.path}#${section.anchor}` : doc.path,
        matches,
        snippet: snippet(section.text, q),
      })
    }
  }

  hits.sort((a, b) => b.matches - a.matches)
  return NextResponse.json({
    query: q,
    total,
    truncated: hits.length > MAX_RESULTS,
    hits: hits.slice(0, MAX_RESULTS),
  })
}
