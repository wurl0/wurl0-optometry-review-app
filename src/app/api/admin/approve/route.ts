import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

export async function POST(req: NextRequest) {
  // Verify the requester is the admin
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { profileId } = await req.json()
  if (!profileId) return NextResponse.json({ error: 'Missing profileId' }, { status: 400 })

  const admin = createAdminClient()
  const { error } = await admin
    .from('profiles')
    .update({ approved: true, approved_at: new Date().toISOString() })
    .eq('id', profileId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
