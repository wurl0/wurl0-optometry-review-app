import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { questionId, schedule, todayStr, type QuestionPayload } from '@/lib/srs'
import { loadAccess, canServeCard } from '@/lib/access'

// Harvests a finished session's results into the review queue.
//
// Missed questions enter the queue (or reset to the bottom rung if already in it).
// Correct answers only count when the card was already due — retrieving it right on
// schedule advances it, wherever in the app that retrieval happened. A correct answer
// never creates a card; the queue is built from misses only.
//
// Called by the main app clients and by the Top 2 static reviewers via /top2/_srs.js.
// Auth comes from the Supabase session cookie; no user id is trusted from the body.

const MAX_ITEMS = 400

const SOURCES = new Set([
  'practice', 'exam', 'notes-quiz', 'drill',
  'subject-exam', 'preboards-2025', 'preboards-set2', 'preboards-set3', 'mock',
])

interface IncomingItem {
  stem?: unknown
  options?: unknown
  correct?: unknown
  explanation?: unknown
  subject?: unknown
  source?: unknown
  wasCorrect?: unknown
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  const items: IncomingItem[] = Array.isArray(body?.items) ? body.items : []
  if (!items.length) return NextResponse.json({ error: 'No items' }, { status: 400 })
  if (items.length > MAX_ITEMS) return NextResponse.json({ error: 'Too many items' }, { status: 400 })

  // The body is client-supplied, so a card may only be stored for content this user can
  // currently open. Same rule the pages serve by: nothing enters the queue that /review
  // would then refuse to show.
  const access = await loadAccess(supabase, user)

  // Validate and key each item by its stem hash, dropping anything malformed.
  const clean = new Map<string, { subject: string; source: string; payload: QuestionPayload; wasCorrect: boolean }>()
  for (const it of items) {
    if (typeof it.stem !== 'string' || !it.stem.trim()) continue
    if (typeof it.subject !== 'string' || !it.subject.trim()) continue
    if (typeof it.source !== 'string' || !SOURCES.has(it.source)) continue
    if (typeof it.correct !== 'number' && typeof it.correct !== 'boolean') continue
    if (!canServeCard(access, it.subject, it.source)) continue

    clean.set(questionId(it.stem), {
      subject: it.subject.slice(0, 60),
      source: it.source,
      wasCorrect: it.wasCorrect === true,
      payload: {
        stem: it.stem.slice(0, 2000),
        options: Array.isArray(it.options) ? it.options.slice(0, 6).map(o => String(o).slice(0, 500)) : undefined,
        correct: it.correct as number | boolean,
        explanation: typeof it.explanation === 'string' ? it.explanation.slice(0, 4000) : '',
      },
    })
  }
  if (!clean.size) return NextResponse.json({ added: 0, advanced: 0, reset: 0 })

  const ids = [...clean.keys()]
  const { data: existing } = await supabase
    .from('question_reviews')
    .select('question_id, box, reps, lapses, due_on, retired')
    .eq('user_id', user.id)
    .in('question_id', ids)

  const prior = new Map((existing ?? []).map(r => [r.question_id as string, r]))
  const today = todayStr()
  const now = new Date()

  interface Row {
    user_id: string
    question_id: string
    subject: string
    source: string
    payload: QuestionPayload
    box: number
    due_on: string
    retired: boolean
    reps: number
    lapses: number
    updated_at: string
  }

  const rows: Row[] = []
  let added = 0, advanced = 0, reset = 0

  for (const [qid, item] of clean) {
    const before = prior.get(qid)

    if (item.wasCorrect) {
      // Only a card that is already due gets credit. Not due, retired, or not in the
      // queue at all: nothing to do.
      if (!before || before.retired || before.due_on > today) continue
      const next = schedule(before.box, true, now)
      advanced++
      rows.push({
        user_id: user.id,
        question_id: qid,
        subject: item.subject,
        source: item.source,
        payload: item.payload,
        box: next.box,
        due_on: next.dueOn,
        retired: next.retired,
        reps: before.reps + 1,
        lapses: before.lapses,
        updated_at: new Date().toISOString(),
      })
      continue
    }

    // A miss always drops the card to the bottom rung, including one that had retired.
    const next = schedule(0, false, now)
    if (before) reset++
    else added++
    rows.push({
      user_id: user.id,
      question_id: qid,
      subject: item.subject,
      source: item.source,
      payload: item.payload,
      box: next.box,
      due_on: next.dueOn,
      retired: false,
      reps: (before?.reps ?? 0) + 1,
      lapses: before ? before.lapses + 1 : 0,
      updated_at: new Date().toISOString(),
    })
  }

  if (!rows.length) return NextResponse.json({ added: 0, advanced: 0, reset: 0 })

  const { error } = await supabase
    .from('question_reviews')
    .upsert(rows, { onConflict: 'user_id,question_id' })

  if (error) {
    console.error('srs/record upsert failed:', error.message)
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }

  return NextResponse.json({ added, advanced, reset })
}
