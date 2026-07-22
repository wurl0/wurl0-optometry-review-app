// Text flattening and matching for the notes content. Kept free of any data imports
// so the client-side Notes page can use it without dragging ~1 MB of subject data
// into the browser bundle. The server-side global search (lib/search.ts) builds on it.

import { Block, Section } from './notes-types'

// All searchable text of a block, recursing into sub-blocks so a keyword is found no
// matter how deeply it is nested.
export function blockText(block: Block): string {
  switch (block.kind) {
    case 'text': return block.content
    case 'bullets': return block.items.join(' ')
    case 'table': return block.headers.concat(block.rows.flat()).join(' ')
    case 'pearl': return block.content
    case 'callout': return `${block.title ?? ''} ${block.content}`
    case 'diagram': return block.caption ?? ''
    case 'sub': return `${block.title} ${block.blocks.map(blockText).join(' ')}`
    default: return ''
  }
}

export function sectionText(section: Section): string {
  return `${section.title} ${section.blocks.map(blockText).join(' ')}`
}

// Case-insensitive occurrence count. Split rather than a global regex so the caller
// never has to escape the user's query.
export function countMatches(hay: string, q: string): number {
  if (!q) return 0
  return hay.toLowerCase().split(q.toLowerCase()).length - 1
}

// A short excerpt around the first match, cut on word boundaries. This is what makes a
// result list readable: a section title alone rarely says why it matched.
export function snippet(text: string, q: string, radius = 90): string {
  const flat = text.replace(/\s+/g, ' ').trim()
  const at = flat.toLowerCase().indexOf(q.toLowerCase())
  if (at < 0) return flat.slice(0, radius * 2)

  let start = Math.max(0, at - radius)
  let end = Math.min(flat.length, at + q.length + radius)
  if (start > 0) {
    const sp = flat.indexOf(' ', start)
    if (sp > 0 && sp < at) start = sp + 1
  }
  if (end < flat.length) {
    const sp = flat.lastIndexOf(' ', end)
    if (sp > at + q.length) end = sp
  }
  return `${start > 0 ? '… ' : ''}${flat.slice(start, end)}${end < flat.length ? ' …' : ''}`
}
