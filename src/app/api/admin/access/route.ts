import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'
import { ITEM_BY_ID } from '@/lib/reviewer-manifest'

const TIERS = ['base', 'select', 'full', 'admin']

export async function POST(req: NextRequest) {
  // Verify the requester is the admin (same pattern as the approve route).
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { profileId, tier, grants } = await req.json()
  if (!profileId) return NextResponse.json({ error: 'Missing profileId' }, { status: 400 })
  if (!TIERS.includes(tier)) return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
  if (!Array.isArray(grants)) return NextResponse.json({ error: 'Invalid grants' }, { status: 400 })

  // Keep only known item IDs so the column never holds junk.
  const clean = (grants as unknown[]).filter(
    (g): g is string => typeof g === 'string' && ITEM_BY_ID.has(g)
  )

  const admin = createAdminClient()
  const { error } = await admin
    .from('profiles')
    .update({ tier, grants: clean })
    .eq('id', profileId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, grants: clean })
}
