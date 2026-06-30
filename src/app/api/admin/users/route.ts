import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const admin = createAdminClient()
  let { data: profiles, error } = await admin
    .from('profiles')
    .select('id, full_name, email, approved, approved_at, created_at, tier, grants')
    .order('created_at', { ascending: false })

  // Pre-migration fallback: if tier/grants columns do not exist yet, load without them.
  if (error) {
    const retry = await admin
      .from('profiles')
      .select('id, full_name, email, approved, approved_at, created_at')
      .order('created_at', { ascending: false })
    profiles = retry.data
    error = retry.error
  }

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ profiles })
}
