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

  const [profiles, attempts, practice, ole, reviews, readPos, readProg, events] = await Promise.all([
    rowsOf(db.from('profiles').select('user_id, email, full_name, approved, tier, grants, suspended, created_at, last_active')),
    rowsOf(db.from('exam_attempts').select('user_id, subject, percentage, created_at')),
    rowsOf(db.from('practice_progress').select('user_id, completed_at')),          // main-app practice quizzes
    rowsOf(db.from('ole_attempts').select('user_id, percentage, created_at')),     // Top 2 exams
    rowsOf(db.from('question_reviews').select('user_id, swept_at').not('swept_at', 'is', null)),
    rowsOf(db.from('reading_position').select('user_id, subject, section_title, updated_at')),
    rowsOf(db.from('reading_progress').select('user_id, subject, updated_at')),
    rowsOf(db.from('app_events').select('user_id, type, path, created_at').gte('created_at', since30).order('created_at', { ascending: false }).limit(20000)),
  ])

  // Per-user rollups keyed by user_id.
  type Agg = {
    quizzes: number; lastQuiz: string | null;          // exam_attempts + practice_progress + ole_attempts
    reviews: number; lastReview: string | null;        // SRS review / drill answers
    top2Reads: number; lastRead: string | null;        // Top 2 static reviewers (reading_position/progress)
    mainReadMins: number;                              // main-app + React reviewer dwell, ~1 min per heartbeat
    pageViews: number; lastEvent: string | null;
  }
  const agg = new Map<string, Agg>()
  const get = (id: string): Agg => {
    let a = agg.get(id)
    if (!a) { a = { quizzes: 0, lastQuiz: null, reviews: 0, lastReview: null, top2Reads: 0, lastRead: null, mainReadMins: 0, pageViews: 0, lastEvent: null }; agg.set(id, a) }
    return a
  }

  // Any answered quiz counts: main-app subject exams, main-app practice, and Top 2 exams.
  for (const r of attempts) { const a = get(String(r.user_id)); a.quizzes++; a.lastQuiz = maxTime(a.lastQuiz, s(r.created_at)) }
  for (const r of practice) { const a = get(String(r.user_id)); a.quizzes++; a.lastQuiz = maxTime(a.lastQuiz, s(r.completed_at)) }
  for (const r of ole) { const a = get(String(r.user_id)); a.quizzes++; a.lastQuiz = maxTime(a.lastQuiz, s(r.created_at)) }
  for (const r of reviews) { const a = get(String(r.user_id)); a.reviews++; a.lastReview = maxTime(a.lastReview, s(r.swept_at)) }
  for (const r of readPos) { const a = get(String(r.user_id)); a.top2Reads++; a.lastRead = maxTime(a.lastRead, s(r.updated_at)) }
  for (const r of readProg) { const a = get(String(r.user_id)); a.lastRead = maxTime(a.lastRead, s(r.updated_at)) }
  for (const r of events) {
    const a = get(String(r.user_id))
    a.lastEvent = maxTime(a.lastEvent, s(r.created_at))   // any event counts toward recency
    if (s(r.type) === 'reading') {
      a.mainReadMins++                                     // one heartbeat ~= one minute reading
      a.lastRead = maxTime(a.lastRead, s(r.created_at))
    } else {
      a.pageViews++
    }
  }

  const now = Date.now()
  const within = (t: string | null, ms: number) => !!t && now - new Date(t).getTime() <= ms
  const DAY = 864e5

  const users = (profiles as Row[]).map(p => {
    const id = String(p.user_id)
    const a = agg.get(id)
    const lastActive = maxTime(
      s(p.last_active), a?.lastQuiz, a?.lastReview, a?.lastRead, a?.lastEvent,
    )
    return {
      email: s(p.email), name: s(p.full_name), tier: s(p.tier) ?? 'base',
      approved: !!p.approved, suspended: !!p.suspended,
      createdAt: s(p.created_at), lastActive,
      quizzes: a?.quizzes ?? 0, reviews: a?.reviews ?? 0,
      pageViews: a?.pageViews ?? 0,
      readMins: a?.mainReadMins ?? 0, top2Reads: a?.top2Reads ?? 0,
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
    if (s(r.type) === 'reading') continue   // heartbeats aren't navigations
    const p = s(r.path); if (!p) continue
    let e = pageAgg.get(p); if (!e) { e = { views: 0, users: new Set() }; pageAgg.set(p, e) }
    e.views++; e.users.add(String(r.user_id))
  }
  const topPages = [...pageAgg.entries()]
    .map(([path, e]) => ({ path, views: e.views, users: e.users.size }))
    .sort((a, b) => b.views - a.views).slice(0, 25)

  // Reading activity, merged across surfaces so main-app reviewers show alongside Top 2:
  //  - Top 2 static reviewers (reading_position), labeled by subject letter + section.
  //  - Main-app / React reviewers (reading heartbeats), labeled by the path's subject.
  const emailById = new Map<string, string | null>()
  for (const p of profiles as Row[]) emailById.set(String(p.user_id), s(p.email))

  type Read = { source: string; label: string; email: string | null; updatedAt: string | null }
  const readMap = new Map<string, Read>()   // key: user|source|label -> latest
  const keep = (key: string, r: Read) => {
    const prev = readMap.get(key)
    if (!prev || (r.updatedAt ?? '') > (prev.updatedAt ?? '')) readMap.set(key, r)
  }
  for (const r of readPos) {
    const id = String(r.user_id); const subject = s(r.subject) ?? '?'; const sect = s(r.section_title)
    keep(id + '|top2|' + subject, {
      source: 'Top 2', label: subject + (sect ? ' · ' + sect : ''),
      email: emailById.get(id) ?? null, updatedAt: s(r.updated_at),
    })
  }
  const slugOf = (path: string | null): string => {
    if (!path) return 'reviewer'
    if (path.startsWith('/reviewer')) return 'Top 2 cockpit'
    const parts = path.split('/')                    // /notes/<slug>, /ole-prep/<slug>
    return parts[2] || path
  }
  for (const r of events) {
    if (s(r.type) !== 'reading') continue
    const id = String(r.user_id); const label = slugOf(s(r.path))
    keep(id + '|main|' + label, {
      source: 'Main', label,
      email: emailById.get(id) ?? null, updatedAt: s(r.created_at),
    })
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
