import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

const SUBJECT_CODES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const SOURCES = ['subject-exam', 'preboards-2025', 'preboards-set2', 'mock']

// Receives a finished-exam score from a Top 2 HTML page (via /top2/_report.js).
// The page is already behind the middleware auth gate, so the Supabase cookie
// identifies the user; we never trust a user_id from the body.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 })

  const { subjectCode, source, score, total, areaBreakdown, wrongTopics } = body

  if (!SUBJECT_CODES.includes(subjectCode))
    return NextResponse.json({ error: 'Invalid subjectCode' }, { status: 400 })
  if (!SOURCES.includes(source))
    return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0 || score < 0 || score > total)
    return NextResponse.json({ error: 'Invalid score/total' }, { status: 400 })

  const percentage = Math.round((score / total) * 100 * 100) / 100

  // Preboards are a review of one past sitting: a fixed historical score. Log it
  // once per subject so reopening the review never duplicates the data point.
  // Subject exams and mocks are fresh attempts, so they always insert.
  if (source === 'preboards-2025' || source === 'preboards-set2') {
    const { count } = await supabase
      .from('ole_attempts')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('subject_code', subjectCode)
      .eq('source', source)
    if ((count ?? 0) > 0) return NextResponse.json({ ok: true, skipped: 'already-logged' })
  }

  const { error } = await supabase.from('ole_attempts').insert({
    user_id: user.id,
    subject_code: subjectCode,
    source,
    score,
    total,
    percentage,
    area_breakdown: Array.isArray(areaBreakdown) ? areaBreakdown : [],
    wrong_topics: Array.isArray(wrongTopics) ? wrongTopics : [],
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, percentage })
}
