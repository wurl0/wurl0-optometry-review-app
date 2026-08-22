import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

// Cross-device sync for the Daily Queue (public/top2/00-Master-Index/Daily-Queue.html).
// The page runs inside the admin-gated /top2 area, so the session cookie identifies the
// user; nothing about identity is trusted from the body. State is per-user (RLS), so this
// route only requires an authenticated user.
//
// GET  -> { state: { "<dayIndex>_<ticketIndex>": boolean, ... } }
// POST { items: [{ id, checked }, ...] } -> upsert those check-offs
// POST { clear: true }                   -> remove all of the user's check-offs

const ID_RE = /^\d{1,4}_\d{1,3}$/
const MAX_ITEMS = 1000

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('daily_queue')
    .select('item_id, checked')
    .eq('user_id', user.id)
  if (error) return NextResponse.json({ error: 'Load failed' }, { status: 500 })

  const state: Record<string, boolean> = {}
  for (const r of data ?? []) state[r.item_id as string] = !!r.checked
  return NextResponse.json({ state })
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 })

  // Reset queue on every device.
  if (body.clear === true) {
    const { error } = await supabase.from('daily_queue').delete().eq('user_id', user.id)
    if (error) return NextResponse.json({ error: 'Clear failed' }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  const items = body.items
  if (!Array.isArray(items) || items.length === 0 || items.length > MAX_ITEMS)
    return NextResponse.json({ error: 'Invalid items' }, { status: 400 })

  const now = new Date().toISOString()
  const rows: { user_id: string; item_id: string; checked: boolean; updated_at: string }[] = []
  for (const it of items) {
    if (!it || typeof it.id !== 'string' || !ID_RE.test(it.id) || typeof it.checked !== 'boolean')
      return NextResponse.json({ error: 'Invalid item' }, { status: 400 })
    rows.push({ user_id: user.id, item_id: it.id, checked: it.checked, updated_at: now })
  }

  const { error } = await supabase
    .from('daily_queue')
    .upsert(rows, { onConflict: 'user_id,item_id' })
  if (error) return NextResponse.json({ error: 'Save failed' }, { status: 500 })

  return NextResponse.json({ ok: true })
}
