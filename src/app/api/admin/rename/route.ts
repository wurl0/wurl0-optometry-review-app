import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Admin: rename any user. Updates both stores (auth user_metadata + profiles.full_name)
// so the user's own greeting matches what the admin sees.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { profileId, name } = await req.json()
  const trimmed = typeof name === 'string' ? name.trim() : ''
  if (!profileId) return NextResponse.json({ error: 'Missing profileId' }, { status: 400 })
  if (!trimmed) return NextResponse.json({ error: 'Name cannot be empty.' }, { status: 400 })
  if (trimmed.length > 80) return NextResponse.json({ error: 'Name is too long (max 80 characters).' }, { status: 400 })

  const admin = createAdminClient()

  // profiles.id is a random UUID; the auth user id lives in profiles.user_id.
  const { data: row, error: lookupError } = await admin
    .from('profiles')
    .select('user_id')
    .eq('id', profileId)
    .single()
  if (lookupError) return NextResponse.json({ error: lookupError.message }, { status: 500 })
  const authUserId = (row as { user_id: string | null } | null)?.user_id ?? null

  // Keep the auth metadata copy in sync, preserving any other metadata fields.
  if (authUserId) {
    const { data: target } = await admin.auth.admin.getUserById(authUserId)
    const meta = target?.user?.user_metadata ?? {}
    const { error: authError } = await admin.auth.admin.updateUserById(authUserId, {
      user_metadata: { ...meta, full_name: trimmed },
    })
    if (authError) return NextResponse.json({ error: authError.message }, { status: 500 })
  }

  const { error: profileError } = await admin
    .from('profiles')
    .update({ full_name: trimmed })
    .eq('id', profileId)
  if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 })

  return NextResponse.json({ ok: true, name: trimmed })
}
