import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Toggle a user's suspension. Suspending blocks app access (see middleware) while
// preserving approved + tier + grants, so restoring is a single flip.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { profileId, suspended, reason } = await req.json()
  if (!profileId || typeof suspended !== 'boolean') {
    return NextResponse.json({ error: 'Missing profileId or suspended flag' }, { status: 400 })
  }

  const admin = createAdminClient()

  // Guard against the admin suspending themselves. profiles.id is a random UUID;
  // the auth user id is profiles.user_id.
  const { data: row, error: lookupError } = await admin
    .from('profiles')
    .select('user_id')
    .eq('id', profileId)
    .single()
  if (lookupError) return NextResponse.json({ error: lookupError.message }, { status: 500 })
  if ((row as { user_id: string | null } | null)?.user_id === user.id) {
    return NextResponse.json({ error: 'You cannot suspend your own account.' }, { status: 400 })
  }

  const { error } = await admin
    .from('profiles')
    .update({
      suspended,
      suspended_at: suspended ? new Date().toISOString() : null,
      suspended_reason: suspended ? (reason ?? null) : null,
    })
    .eq('id', profileId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, suspended })
}
