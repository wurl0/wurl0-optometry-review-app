import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { schedule } from '@/lib/srs'

// Grades one card during a review session. The card's current rung is read from the row
// rather than taken from the client, so the schedule cannot be advanced by a crafted body.

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  const qid = body?.questionId
  const correct = body?.correct

  if (typeof qid !== 'string' || !qid) return NextResponse.json({ error: 'Invalid questionId' }, { status: 400 })
  if (typeof correct !== 'boolean') return NextResponse.json({ error: 'Invalid correct' }, { status: 400 })

  const { data: card } = await supabase
    .from('question_reviews')
    .select('box, reps, lapses, retired, swept_at')
    .eq('user_id', user.id)
    .eq('question_id', qid)
    .single()

  if (!card) return NextResponse.json({ error: 'Card not found' }, { status: 404 })

  const next = schedule(card.box, correct)

  // A card that was RETIRED when it was served can only have come from the sweep, so this
  // grading IS its final pass. Stamp it so it is not swept twice — whether it survived
  // (retires again) or not (drops to the bottom rung and rejoins the ladder).
  const wasSweep = card.retired === true
  const sweptAt = wasSweep ? new Date().toISOString() : card.swept_at

  const { error } = await supabase
    .from('question_reviews')
    .update({
      box: next.box,
      due_on: next.dueOn,
      retired: next.retired,
      reps: card.reps + 1,
      lapses: correct ? card.lapses : card.lapses + 1,
      swept_at: sweptAt,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', user.id)
    .eq('question_id', qid)

  if (error) {
    console.error('srs/grade update failed:', error.message)
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }

  return NextResponse.json({ box: next.box, dueOn: next.dueOn, retired: next.retired })
}
