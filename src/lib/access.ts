// Server-side access resolution for the Top 2 reviewer. The middleware, the cockpit page,
// the home page, and the admin API all decide access through these helpers so the rules
// live in exactly one place. The client never decides access.

import { ITEM_BY_PATH, ITEM_BY_ID, type Item } from './reviewer-manifest'
import type { SupabaseClient } from '@supabase/supabase-js'

export type Access = {
  tier: string          // 'base' | 'select' | 'full' | 'admin'
  grants: string[]      // granted item IDs
  isEnvAdmin: boolean   // matched ADMIN_USER_ID / ADMIN_EMAIL
}

export function isAdmin(a: Access): boolean {
  return a.isEnvAdmin || a.tier === 'admin'
}

// Can this user open a specific content item?
export function canOpenItem(a: Access, item: Item): boolean {
  if (isAdmin(a)) return true
  if (item.public) return true
  if (a.tier === 'base') return false   // base = original app only
  return a.grants.includes(item.id)     // select or full: only granted items
}

// Can this user see the cockpit index (the map of everything)?
export function canOpenCockpit(a: Access): boolean {
  return isAdmin(a) || a.tier === 'full'
}

export function itemForPath(pathname: string): Item | undefined {
  return ITEM_BY_PATH.get(pathname)
}

// Static rendering dependencies that should never be gated (images already bypass the
// middleware matcher; this covers stylesheets/scripts/fonts a reviewer page may pull).
const ASSET_RE = /\.(css|js|map|woff2?|ttf|otf)$/i
export function isAsset(pathname: string): boolean {
  return ASSET_RE.test(pathname)
}

// Load a user's access once, the same way everywhere. If the tier/grants migration has
// not run the select errors and this returns base, which sees no Top 2 content.
export async function loadAccess(
  supabase: SupabaseClient,
  user: { id: string; email?: string },
): Promise<Access> {
  const { data } = await supabase
    .from('profiles').select('tier, grants').eq('user_id', user.id).single()
  const row = data as { tier?: string; grants?: string[] } | null
  return {
    tier: row?.tier ?? 'base',
    grants: row?.grants ?? [],
    isEnvAdmin: user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL,
  }
}

// ─── Review-queue cards ───────────────────────────────────────────────────────────
//
// A review card stores a SNAPSHOT of the question, so it outlives access to the page it
// came from. Without a check here, revoking a grant would leave the stems and rationales
// readable forever through /review and /drill. Every card is therefore re-authorised
// against current access each time it is served, exactly like the page it came from.

// Sources that are part of the original app, free to every approved user (tier 'base'
// means "original app only"). Nothing here is Top 2 content.
const APP_SOURCES = new Set(['practice', 'exam', 'notes-quiz', 'drill'])

// (source, subject) -> the manifest item that gates the page the card was harvested from.
function itemIdForCard(subject: string, source: string): string | null {
  switch (source) {
    case 'subject-exam': return `${subject}.exam`
    case 'preboards-2025': return `${subject}.preboards-2025`
    case 'preboards-set2': return `${subject}.preboards-set2`
    case 'preboards-set3': return `${subject}.preboards-set3`
    default: return null
  }
}

export function canServeCard(a: Access, subject: string, source: string): boolean {
  if (APP_SOURCES.has(source)) return true
  if (isAdmin(a)) return true

  // A mock card records which SUBJECT it tested, not which mock file served it, so the
  // exact item cannot be recovered. Require access to some mock rather than guessing.
  // Derived from the manifest so a new mock is covered the moment it is added.
  if (source === 'mock') {
    return [...ITEM_BY_ID.values()].some(i => i.type === 'mock' && canOpenItem(a, i))
  }

  const id = itemIdForCard(subject, source)
  if (!id) return false            // unknown source: fail closed
  const item = ITEM_BY_ID.get(id)
  if (!item) return false          // not in the manifest (e.g. Set 3): fail closed
  return canOpenItem(a, item)
}
