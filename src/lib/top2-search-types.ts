// Shape of the generated Top 2 search index (src/data/top2-search-index.ts).
// Written by exam-build/build_top2_search_index.py -- keep the two in step.

export type Top2Section = {
  anchor: string   // in-page id to deep-link to; '' when the page has no section ids
  heading: string  // the h1/h2/h3 that starts the section
  topic: string    // the enclosing h1 (the note the section belongs to), '' at h1 level
  text: string     // flattened prose, whitespace-collapsed
}

export type Top2Doc = {
  itemId: string   // manifest item id, re-checked against access before any hit is returned
  subject: string  // 'A'..'H'
  label: string
  kind: string     // 'reviewer' | 'strategy'
  path: string     // served path, e.g. /top2/A-Visual-Biology/A-Reviewer.html
  sections: Top2Section[]
}

export type Top2Index = { docs: Top2Doc[] }

// One search result, as returned by /api/top2-search.
export type Top2Hit = {
  itemId: string
  subject: string
  label: string
  kind: string
  title: string
  href: string
  matches: number
  snippet: string
}

export type Top2SearchResponse = {
  query: string
  total: number
  truncated?: boolean
  hits: Top2Hit[]
}
