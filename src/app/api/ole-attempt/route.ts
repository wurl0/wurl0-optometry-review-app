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

  // Every source is a fresh attempt now (subject exams, preboard retakes, mocks),
  // so each one inserts and feeds the rolling average.
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
