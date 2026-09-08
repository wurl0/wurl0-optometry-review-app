import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Read/toggle the app-wide maintenance flag (app_settings.maintenance_mode).
// When on, the middleware returns a 503 to every non-admin while admins keep
// full access. Admin-only, same guard the other admin routes use.
async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const email = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (email !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return null
  }
  return user
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('app_settings')
    .select('maintenance_mode')
    .eq('id', 1)
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({
    maintenance: !!(data as { maintenance_mode?: boolean } | null)?.maintenance_mode,
  })
}

export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
  const { maintenance } = await req.json()
  if (typeof maintenance !== 'boolean') {
    return NextResponse.json({ error: 'Missing maintenance flag' }, { status: 400 })
  }
  const admin = createAdminClient()
  const { error } = await admin
    .from('app_settings')
    .upsert({ id: 1, maintenance_mode: maintenance, updated_at: new Date().toISOString() })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, maintenance })
}
