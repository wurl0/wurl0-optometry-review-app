import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'
import { computeReadiness, type OleAttempt } from '@/lib/readiness'

type ProfileRow = {
  user_id: string
  full_name: string | null
  email: string | null
}

type AttemptRow = {
  user_id: string
  subject_code: string
  source: string
  percentage: number
  created_at: string
  area_breakdown: { area: string; percentage: number }[] | null
}

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userEmail = user?.email ?? user?.user_metadata?.email ?? ''
  if (!user || (userEmail !== process.env.ADMIN_EMAIL && user.id !== process.env.ADMIN_USER_ID)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const admin = createAdminClient()

  // ole_attempts.user_id references auth.users(id), which maps to profiles.user_id
  // (NOT profiles.id — that is the separate profile row key used for approvals).
  const { data: profileData, error: profileError } = await admin
    .from('profiles')
    .select('user_id, full_name, email')
    .eq('approved', true)
  if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 })

  const { data: attemptData, error: attemptError } = await admin
    .from('ole_attempts')
    .select('user_id, subject_code, source, percentage, created_at, area_breakdown')
  if (attemptError) return NextResponse.json({ error: attemptError.message }, { status: 500 })

  // Bucket attempts by user, then reuse computeReadiness so the rolling window,
  // coverage gate and pass thresholds stay defined only in lib/readiness.ts.
  const byUser = new Map<string, OleAttempt[]>()
  for (const r of (attemptData as AttemptRow[] | null) ?? []) {
    const list = byUser.get(r.user_id) ?? []
    list.push({
      subjectCode: r.subject_code,
      source: r.source as OleAttempt['source'],
      percentage: Number(r.percentage),
      createdAt: r.created_at,
      areaBreakdown: r.area_breakdown ?? [],
    })
    byUser.set(r.user_id, list)
  }

  const users = ((profileData as ProfileRow[] | null) ?? []).map(p => {
    const attempts = byUser.get(p.user_id) ?? []
    const lastAttemptAt = attempts.length
      ? attempts.reduce((max, a) => (a.createdAt > max ? a.createdAt : max), attempts[0].createdAt)
      : null
    return {
      userId: p.user_id,
      fullName: p.full_name,
      email: p.email,
      attemptCount: attempts.length,
      lastAttemptAt,
      readiness: computeReadiness(attempts),
    }
  })

  // Most-covered first, then by projected GWA. Users with nothing logged sink.
  users.sort((a, b) =>
    b.readiness.measuredCount - a.readiness.measuredCount ||
    (b.readiness.projectedGwa ?? -1) - (a.readiness.projectedGwa ?? -1)
  )

  return NextResponse.json({ users })
}
