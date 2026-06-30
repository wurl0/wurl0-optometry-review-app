// Server-side access resolution for the Top 2 reviewer. The middleware, the cockpit page,
// the home page, and the admin API all decide access through these helpers so the rules
// live in exactly one place. The client never decides access.

import { ITEM_BY_PATH, type Item } from './reviewer-manifest'

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
