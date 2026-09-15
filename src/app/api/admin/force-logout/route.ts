import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Force sign-out: stamp profiles.force_logout_at = now for a user. The middleware
// rejects any session whose token was issued before that stamp, so every existing
// login for that account is bounced to /login on its next request (a heartbeat or
// click, so within ~60s). The account is NOT suspended: the user can sign in again
// immediately with valid credentials. Use it to boot a session you don't recognize.
//
// Admin-only, same guard as the other admin routes. Accepts { email } or { profileId }.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { email, profileId } = await req.json().catch(() => ({}))
  if (!email && !profileId) {
    return NextResponse.json({ error: 'Provide an email or profileId' }, { status: 400 })
  }

  const admin = createAdminClient()
  const now = new Date().toISOString()

  const q = admin.from('profiles').update({ force_logout_at: now })
  const { data, error } = await (profileId ? q.eq('id', profileId) : q.eq('email', email)).select('email')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'No matching user' }, { status: 404 })
  }

  return NextResponse.json({ ok: true, signedOut: data.length, at: now })
}
