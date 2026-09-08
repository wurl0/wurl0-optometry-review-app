import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { createAdminClient } from '@/lib/supabase-admin'

// Lightweight usage logging: one row per meaningful navigation, plus a last_active
// stamp on the profile. Called by the client <UsageTracker/>. Deliberately forgiving:
// logged-out or malformed calls are no-ops (200), never errors, so tracking can never
// disrupt a page. Query strings are stripped so we never store search terms.
const TYPES = new Set(['page_view', 'reading', 'login'])

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ ok: false })

  const body = await req.json().catch(() => null)
  const type = typeof body?.type === 'string' && TYPES.has(body.type) ? body.type : 'page_view'
  let path: string | null = typeof body?.path === 'string' ? body.path : null
  if (path) path = path.split('?')[0].split('#')[0].slice(0, 200)

  try {
    const admin = createAdminClient()
    await admin.from('app_events').insert({ user_id: user.id, type, path })
    await admin.from('profiles').update({ last_active: new Date().toISOString() }).eq('user_id', user.id)
  } catch {
    // Never surface tracking failures to the client.
  }
  return NextResponse.json({ ok: true })
}
