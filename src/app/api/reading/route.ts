import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { loadAccess, canOpenItem } from '@/lib/access'
import { ITEM_BY_ID } from '@/lib/reviewer-manifest'

// Reading progress for the Top 2 reviewers. Called by /top2/_read.js, which runs inside a
// static page already behind the auth gate, so the session cookie identifies the user and
// no id is trusted from the body.
//
// GET  ?subject=A  -> { position, states } to restore the page
// POST { subject, position? , state? } -> record scroll position or a checkpoint result

const SUBJECTS = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])
const STATES = new Set(['solid', 'gaps'])

// Progress is about a subject's reviewer, so it follows that reviewer's grant.
async function canRead(subject: string, supabase: Awaited<ReturnType<typeof createClient>>, user: { id: string; email?: string }) {
  const access = await loadAccess(supabase, user)
  const item = ITEM_BY_ID.get(`${subject}.reviewer`)
  return !!item && canOpenItem(access, item)
}

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const subject = req.nextUrl.searchParams.get('subject') ?? ''
  if (!SUBJECTS.has(subject)) return NextResponse.json({ error: 'Invalid subject' }, { status: 400 })
  if (!(await canRead(subject, supabase, user))) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const [posRes, stateRes] = await Promise.all([
    supabase.from('reading_position')
      .select('section_id, section_title').eq('user_id', user.id).eq('subject', subject).maybeSingle(),
    supabase.from('reading_progress')
      .select('section_id, state').eq('user_id', user.id).eq('subject', subject),
  ])

  const states: Record<string, string> = {}
  for (const r of stateRes.data ?? []) states[r.section_id as string] = r.state as string

  return NextResponse.json({
    position: posRes.data ?? null,
    states,
  })
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  const subject = body?.subject
  if (typeof subject !== 'string' || !SUBJECTS.has(subject))
    return NextResponse.json({ error: 'Invalid subject' }, { status: 400 })
  if (!(await canRead(subject, supabase, user))) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  // Scroll position: overwritten constantly, one row per subject.
  if (body.position) {
    const { sectionId, sectionTitle } = body.position
    if (typeof sectionId !== 'string' || !sectionId)
      return NextResponse.json({ error: 'Invalid position' }, { status: 400 })
    await supabase.from('reading_position').upsert({
      user_id: user.id,
      subject,
      section_id: sectionId.slice(0, 200),
      section_title: typeof sectionTitle === 'string' ? sectionTitle.slice(0, 200) : null,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,subject' })
  }

  // A checkpoint result: only written when deliberately marked.
  if (body.state) {
    const { sectionId, sectionTitle, state } = body.state
    if (typeof sectionId !== 'string' || !sectionId || !STATES.has(state))
      return NextResponse.json({ error: 'Invalid state' }, { status: 400 })
    await supabase.from('reading_progress').upsert({
      user_id: user.id,
      subject,
      section_id: sectionId.slice(0, 200),
      section_title: typeof sectionTitle === 'string' ? sectionTitle.slice(0, 200) : null,
      state,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,subject,section_id' })
  }

  return NextResponse.json({ ok: true })
}
