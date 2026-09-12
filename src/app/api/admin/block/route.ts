import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Set or clear a user's per-user timed block (profiles.blocked_until). While that
// timestamp is in the future, the middleware serves them the neutral 503 maintenance
// page. This is the quiet, temporary "come back later" block; it preserves everything
// (approved, tier, grants) and lifts itself when the time passes.
//
// Body: { profileId, until }  where `until` is an ISO timestamp to block until, or null
// to bring the user back online now.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { profileId, until } = await req.json()
  if (!profileId || (until !== null && typeof until !== 'string')) {
    return NextResponse.json({ error: 'Missing profileId or invalid until' }, { status: 400 })
  }
  // Reject an unparseable/past timestamp so we never write a no-op block.
  if (until !== null && !(new Date(until).getTime() > Date.now())) {
    return NextResponse.json({ error: 'until must be a future ISO timestamp, or null to clear' }, { status: 400 })
  }

  const admin = createAdminClient()

  // Guard against the admin blocking themselves out. profiles.id is the row key;
  // the auth user id is profiles.user_id.
  const { data: row, error: lookupError } = await admin
    .from('profiles')
    .select('user_id')
    .eq('id', profileId)
    .single()
  if (lookupError) return NextResponse.json({ error: lookupError.message }, { status: 500 })
  if ((row as { user_id: string | null } | null)?.user_id === user.id) {
    return NextResponse.json({ error: 'You cannot block your own account.' }, { status: 400 })
  }

  const { error } = await admin
    .from('profiles')
    .update({ blocked_until: until })
    .eq('id', profileId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, blocked_until: until })
}
