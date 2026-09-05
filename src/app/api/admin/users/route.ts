import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

type ProfileRow = {
  id: string
  full_name: string | null
  email: string | null
  approved: boolean
  approved_at: string | null
  created_at: string
  tier?: string | null
  grants?: string[] | null
  suspended?: boolean | null
}

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const admin = createAdminClient()

  // Tiered fallback so a single missing column can never blank out the others.
  // Try the fullest select, then drop the newest columns one group at a time.
  // (Previously suspended + tier/grants shared one select, so a missing
  // `suspended` column silently dropped tier/grants and made every user read
  // back as base.)
  const base = 'id, full_name, email, approved, approved_at, created_at'
  const selects = [
    `${base}, tier, grants, suspended`, // all migrations applied
    `${base}, tier, grants`,            // access-tiers applied, suspend not yet
    base,                               // neither applied
  ]

  let profiles: ProfileRow[] | null = null
  let error: { message: string } | null = null
  for (const sel of selects) {
    const res = await admin.from('profiles').select(sel).order('created_at', { ascending: false })
    if (!res.error) { profiles = res.data as unknown as ProfileRow[]; error = null; break }
    error = res.error
  }

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ profiles })
}

// Fully remove a user: their profile row and their auth login. Works for both a
// pending sign-up (reject) and an approved user (revoke access entirely).
export async function DELETE(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { profileId } = await req.json()
  if (!profileId) return NextResponse.json({ error: 'Missing profileId' }, { status: 400 })

  const admin = createAdminClient()

  // profiles.id is a random UUID; the auth user id lives in profiles.user_id.
  // Look it up so we delete the right auth account (and can guard self-delete).
  const { data: row, error: lookupError } = await admin
    .from('profiles')
    .select('user_id')
    .eq('id', profileId)
    .single()
  if (lookupError) return NextResponse.json({ error: lookupError.message }, { status: 500 })
  const authUserId = (row as { user_id: string | null } | null)?.user_id ?? null

  // Never let the admin delete their own account out from under themselves.
  if (authUserId && authUserId === user.id) {
    return NextResponse.json({ error: 'You cannot delete your own account.' }, { status: 400 })
  }

  // Deleting the auth user cascades to profiles and every user-data table
  // (all reference auth.users ON DELETE CASCADE). A missing auth user is fine.
  if (authUserId) {
    const { error: authError } = await admin.auth.admin.deleteUser(authUserId)
    if (authError && !/not found/i.test(authError.message)) {
      return NextResponse.json({ error: authError.message }, { status: 500 })
    }
  }

  // Fallback / safety net: if there was no linked auth user, the cascade never
  // ran, so remove the profile row directly.
  const { error: profileError } = await admin.from('profiles').delete().eq('id', profileId)
  if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
