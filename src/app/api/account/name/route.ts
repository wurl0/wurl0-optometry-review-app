import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Self-service: the signed-in user renames themselves. The name lives in two
// stores that must stay in sync — auth user_metadata (used for the home greeting)
// and profiles.full_name (used in the admin panel and sign-up emails).
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { name } = await req.json()
  const trimmed = typeof name === 'string' ? name.trim() : ''
  if (!trimmed) return NextResponse.json({ error: 'Name cannot be empty.' }, { status: 400 })
  if (trimmed.length > 80) return NextResponse.json({ error: 'Name is too long (max 80 characters).' }, { status: 400 })

  const admin = createAdminClient()

  const { error: authError } = await admin.auth.admin.updateUserById(user.id, {
    user_metadata: { ...user.user_metadata, full_name: trimmed },
  })
  if (authError) return NextResponse.json({ error: authError.message }, { status: 500 })

  const { error: profileError } = await admin
    .from('profiles')
    .update({ full_name: trimmed })
    .eq('user_id', user.id)
  if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 })

  return NextResponse.json({ ok: true, name: trimmed })
}
