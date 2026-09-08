import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'

// Admin Usage dashboard data. Fuses every activity signal the app already records
// (exam attempts, review sweeps, reviewer reading, and page-view events) into one
// per-user picture, so passive reading counts as "using it" even with zero exams.
// Admin-only, same guard as the other admin routes. Best-effort: any single source
// missing (table/column not there yet) is skipped, never fatal.

type Row = Record<string, unknown>
const s = (v: unknown) => (typeof v === 'string' ? v : null)
const maxTime = (...vals: (string | null | undefined)[]) =>
  vals.filter(Boolean).sort().slice(-1)[0] ?? null

async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const email = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (email !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) return null
  return user
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  const db = createAdminClient()

  // Pull the sources. Each is optional; a failed select just yields [].
  const rowsOf = async (q: PromiseLike<{ data: unknown }>): Promise<Row[]> => {
    try { const { data } = await q; return (data as Row[]) ?? [] } catch { return [] }
  }

  const since30 = new Date(Date.now() - 30 * 864e5).toISOString()

  const [profiles, attempts, reviews, readPos, readProg, events] = await Promise.all([
    rowsOf(db.from('profiles').select('user_id, email, full_name, approved, tier, grants, suspended, created_at, last_active')),
    rowsOf(db.from('exam_attempts').select('user_id, subject, percentage, created_at')),
    rowsOf(db.from('question_reviews').select('user_id, swept_at').not('swept_at', 'is', null)),
    rowsOf(db.from('reading_position').select('user_id, subject, section_title, updated_at')),
    rowsOf(db.from('reading_progress').select('user_id, subject, updated_at')),
    rowsOf(db.from('app_events').select('user_id, path, created_at').gte('created_at', since30).order('created_at', { ascending: false }).limit(20000)),
  ])

  // Per-user rollups keyed by user_id.
  type Agg = {
    exams: number; lastExam: string | null;
    reviews: number; lastReview: string | null;
    reading: number; lastRead: string | null; subjectsRead: Set<string>;
    pageViews: number; lastView: string | null; paths: Map<string, number>;
  }
  const agg = new Map<string, Agg>()
  const get = (id: string): Agg => {
    let a = agg.get(id)
    if (!a) { a = { exams: 0, lastExam: null, reviews: 0, lastReview: null, reading: 0, lastRead: null, subjectsRead: new Set(), pageViews: 0, lastView: null, paths: new Map() }; agg.set(id, a) }
    return a
  }

  for (const r of attempts) { const a = get(String(r.user_id)); a.exams++; a.lastExam = maxTime(a.lastExam, s(r.created_at)) }
  for (const r of reviews) { const a = get(String(r.user_id)); a.reviews++; a.lastReview = maxTime(a.lastReview, s(r.swept_at)) }
  for (const r of readPos) { const a = get(String(r.user_id)); a.reading++; a.lastRead = maxTime(a.lastRead, s(r.updated_at)); if (s(r.subject)) a.subjectsRead.add(s(r.subject)!) }
  for (const r of readProg) { const a = get(String(r.user_id)); a.lastRead = maxTime(a.lastRead, s(r.updated_at)); if (s(r.subject)) a.subjectsRead.add(s(r.subject)!) }
  for (const r of events) {
    const a = get(String(r.user_id)); a.pageViews++; a.lastView = maxTime(a.lastView, s(r.created_at))
    const p = s(r.path); if (p) a.paths.set(p, (a.paths.get(p) ?? 0) + 1)
  }

  const now = Date.now()
  const within = (t: string | null, ms: number) => !!t && now - new Date(t).getTime() <= ms
  const DAY = 864e5

  const users = (profiles as Row[]).map(p => {
    const id = String(p.user_id)
    const a = agg.get(id)
    const lastActive = maxTime(
      s(p.last_active), a?.lastExam, a?.lastReview, a?.lastRead, a?.lastView,
    )
    const topPath = a && a.paths.size
      ? [...a.paths.entries()].sort((x, y) => y[1] - x[1])[0][0]
      : null
    return {
      email: s(p.email), name: s(p.full_name), tier: s(p.tier) ?? 'base',
      approved: !!p.approved, suspended: !!p.suspended,
      createdAt: s(p.created_at), lastActive,
      exams: a?.exams ?? 0, reviews: a?.reviews ?? 0,
      readingUpdates: a?.reading ?? 0, subjectsRead: a ? [...a.subjectsRead].sort() : [],
      pageViews: a?.pageViews ?? 0, topPath,
    }
  }).sort((x, y) => (y.lastActive ?? '').localeCompare(x.lastActive ?? ''))

  const approvedUsers = users.filter(u => u.approved)
  const summary = {
    signups: users.length,
    approved: approvedUsers.length,
    hasAccess: (profiles as Row[]).filter(p => p.approved && ((s(p.tier) && s(p.tier) !== 'base') || (Array.isArray(p.grants) && p.grants.length > 0))).length,
    everActive: approvedUsers.filter(u => u.lastActive).length,
    active24h: approvedUsers.filter(u => within(u.lastActive, DAY)).length,
    active7d: approvedUsers.filter(u => within(u.lastActive, 7 * DAY)).length,
    active30d: approvedUsers.filter(u => within(u.lastActive, 30 * DAY)).length,
  }

  // Most-visited pages across everyone (last 30 days).
  const pageAgg = new Map<string, { views: number; users: Set<string> }>()
  for (const r of events) {
    const p = s(r.path); if (!p) continue
    let e = pageAgg.get(p); if (!e) { e = { views: 0, users: new Set() }; pageAgg.set(p, e) }
    e.views++; e.users.add(String(r.user_id))
  }
  const topPages = [...pageAgg.entries()]
    .map(([path, e]) => ({ path, views: e.views, users: e.users.size }))
    .sort((a, b) => b.views - a.views).slice(0, 25)

  // Reading activity: latest read per user+subject, most recent first. This is the
  // "they read the reviewer even without doing exams" signal.
  const emailById = new Map<string, string | null>()
  for (const p of profiles as Row[]) emailById.set(String(p.user_id), s(p.email))
  const readMap = new Map<string, { email: string | null; subject: string; sectionTitle: string | null; updatedAt: string | null }>()
  for (const r of readPos) {
    const id = String(r.user_id); const subject = s(r.subject) ?? '?'
    const key = id + '|' + subject
    const prev = readMap.get(key)
    const updatedAt = s(r.updated_at)
    if (!prev || (updatedAt ?? '') > (prev.updatedAt ?? '')) {
      readMap.set(key, { email: emailById.get(id) ?? null, subject, sectionTitle: s(r.section_title), updatedAt })
    }
  }
  const reading = [...readMap.values()]
    .sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? '')).slice(0, 40)

  // Attempts by subject.
  const subjAgg = new Map<string, { attempts: number; users: Set<string>; sum: number }>()
  for (const r of attempts) {
    const subj = s(r.subject) ?? '?'
    let e = subjAgg.get(subj); if (!e) { e = { attempts: 0, users: new Set(), sum: 0 }; subjAgg.set(subj, e) }
    e.attempts++; e.users.add(String(r.user_id)); e.sum += Number(r.percentage) || 0
  }
  const bySubject = [...subjAgg.entries()]
    .map(([subject, e]) => ({ subject, attempts: e.attempts, users: e.users.size, avgPct: Math.round(e.sum / e.attempts) }))
    .sort((a, b) => b.attempts - a.attempts)

  return NextResponse.json({ summary, users, topPages, reading, bySubject })
}
