// Cross-subject keyword search over the app's own study content (Notes reviewers and
// OLE Prep). Runs on the server: the notes data is ~1 MB of TS object literals, so
// shipping it to the phone to search it there would cost more than the feature is worth.
//
// It reuses the same matching helpers as the per-subject Notes search, so a keyword
// that hits here hits the same way once the subject page opens.
//
// SERVER ONLY: importing this from a client component would pull every subject's
// notes and prep data into the browser bundle. Client code wants lib/notes-text.

import { NotesData } from './notes-types'
import { OlePrepData, OlePrepItem } from './ole-prep-types'
import { countMatches, sectionText, snippet } from './notes-text'
import { NOTES_MAP, OLE_PREP_MAP } from './notes-registry'
import { SUBJECTS } from './subjects'

function olePrepItemText(item: OlePrepItem): string {
  switch (item.kind) {
    case 'mnemonic': return `${item.term} ${item.device} ${item.breakdown}`
    case 'fact': return `${item.content} ${item.highlight ?? ''}`
    case 'trap': return `${item.question} ${item.wrong} ${item.correct} ${item.why}`
    case 'recall': return `${item.prompt} ${item.answer}`
    case 'formula':
      return [
        item.title, item.formula, item.notes ?? '',
        ...(item.variables ?? []).map(v => `${v.symbol} ${v.definition}`),
      ].join(' ')
    case 'table':
      return [item.title, ...item.headers, ...item.rows.flat(), item.notes ?? ''].join(' ')
    default: return ''
  }
}

// ─── Results ──────────────────────────────────────────────────────────────────────

export type SearchArea = 'notes' | 'ole-prep'

export type SearchHit = {
  area: SearchArea
  sectionId: string
  sectionTitle: string
  matches: number
  snippet: string
  href: string
}

export type SubjectResults = {
  slug: string
  name: string
  icon: string
  color: string
  matches: number
  hits: SearchHit[]
}

export type SearchResults = {
  query: string
  totalMatches: number
  totalSections: number
  subjects: SubjectResults[]
}

function notesHits(slug: string, notes: NotesData, q: string): SearchHit[] {
  const hits: SearchHit[] = []
  for (const section of notes.sections) {
    const text = sectionText(section)
    const matches = countMatches(text, q)
    if (matches === 0) continue
    hits.push({
      area: 'notes',
      sectionId: section.id,
      sectionTitle: section.title,
      matches,
      snippet: snippet(text, q),
      // Carry the query so the subject page opens with its own search already applied.
      href: `/notes/${slug}?q=${encodeURIComponent(q)}#${section.id}`,
    })
  }
  return hits
}

function olePrepHits(slug: string, prep: OlePrepData, q: string): SearchHit[] {
  const hits: SearchHit[] = []
  for (const section of prep.sections) {
    const text = `${section.title} ${section.items.map(olePrepItemText).join(' ')}`
    const matches = countMatches(text, q)
    if (matches === 0) continue
    hits.push({
      area: 'ole-prep',
      sectionId: section.id,
      sectionTitle: section.title,
      matches,
      snippet: snippet(text, q),
      href: `/ole-prep/${slug}#${section.id}`,
    })
  }
  return hits
}

// Search every registered subject. `allowBonus` gates the bonus subject (Optometry
// Constants) the same way /ole-prep does, so search cannot be used to walk around
// the unlock.
export function searchAll(query: string, allowBonus: boolean): SearchResults {
  const q = query.trim()
  const empty: SearchResults = { query: q, totalMatches: 0, totalSections: 0, subjects: [] }
  if (q.length < 2) return empty

  const subjects: SubjectResults[] = []
  let totalMatches = 0
  let totalSections = 0

  for (const subject of SUBJECTS) {
    if (subject.isBonus && !allowBonus) continue

    const hits: SearchHit[] = []
    const notes = NOTES_MAP[subject.slug]
    if (notes) hits.push(...notesHits(subject.slug, notes, q))
    const prep = OLE_PREP_MAP[subject.slug]
    if (prep) hits.push(...olePrepHits(subject.slug, prep, q))
    if (hits.length === 0) continue

    hits.sort((a, b) => b.matches - a.matches)
    const matches = hits.reduce((sum, h) => sum + h.matches, 0)
    totalMatches += matches
    totalSections += hits.length
    subjects.push({
      slug: subject.slug,
      name: subject.name,
      icon: subject.icon,
      color: subject.color,
      matches,
      hits,
    })
  }

  // Densest subject first: with a term like "prism" that appears everywhere, the
  // subject that actually teaches it should not be third on the page.
  subjects.sort((a, b) => b.matches - a.matches)
  return { query: q, totalMatches, totalSections, subjects }
}
