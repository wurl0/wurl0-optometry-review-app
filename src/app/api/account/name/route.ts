import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Read the signed-in user's display name (from auth user_metadata, kept in sync
// by the POST below). Used by client pages that prefill the name, e.g. the CBLE
// simulator's examinee field.
export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Prefer auth metadata (the home greeting's source); fall back to the profiles
  // row, then the email local-part, so the field is never left blank if the two
  // name stores have drifted.
  let name = (user.user_metadata?.full_name as string) || ''
  if (!name) {
    const admin = createAdminClient()
    const { data } = await admin
      .from('profiles')
      .select('full_name')
      .eq('user_id', user.id)
      .maybeSingle()
    name = (data?.full_name as string) || ''
  }
  if (!name) name = (user.email || '').split('@')[0]

  return NextResponse.json({ name })
}

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
