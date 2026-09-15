import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Set an account's role. 'service' marks a non-human account (e.g. Lisa's mirror
// reader): it is labeled in the admin Usage tab and left out of the active-user
// counts, so its reads never look like a stranger or inflate the numbers. Pass
// role: null to clear it back to a normal account. Admin-only. Accepts { email }
// or { profileId }.
const ALLOWED = new Set(['service'])

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { email, profileId, role } = await req.json().catch(() => ({}))
  if (!email && !profileId) return NextResponse.json({ error: 'Provide an email or profileId' }, { status: 400 })
  if (role !== null && !ALLOWED.has(role)) {
    return NextResponse.json({ error: 'role must be "service" or null' }, { status: 400 })
  }

  const admin = createAdminClient()
  const q = admin.from('profiles').update({ role })
  const { data, error } = await (profileId ? q.eq('id', profileId) : q.eq('email', email)).select('email')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!data || data.length === 0) return NextResponse.json({ error: 'No matching user' }, { status: 404 })

  return NextResponse.json({ ok: true, role, updated: data.length })
}
