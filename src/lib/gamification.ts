import { SupabaseClient } from '@supabase/supabase-js'
import { Badge, BADGES } from './badges'

export interface GamificationResult {
  xpEarned: number
  totalXp: number
  streak: number
  dailyGoalMet: boolean
  newBadges: Badge[]
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0]
}

function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().split('T')[0]
}

export async function updateGamification(
  supabase: SupabaseClient,
  userId: string,
  session: {
    correct: number
    total: number
    isExam: boolean
    percentage: number
    subject: string
  }
): Promise<GamificationResult> {
  const today = todayStr()
  const yesterday = yesterdayStr()

  // Fetch current stats (may be null for new users)
  const { data: stats } = await supabase
    .from('user_stats')
    .select('xp, streak, last_active, daily_goal, daily_done, daily_date')
    .eq('user_id', userId)
    .single()

  const currentXp = stats?.xp ?? 0
  const currentStreak = stats?.streak ?? 0
  const lastActive: string | null = stats?.last_active ?? null
  const dailyGoal: number = stats?.daily_goal ?? 10
  const dailyDone: number = (stats?.daily_date === today ? stats?.daily_done : 0) ?? 0

  // XP calculation
  const baseXp = session.isExam ? session.correct * 10 : session.correct * 5
  const passBonus = session.isExam && session.percentage >= 75 ? 25 : 0
  const perfectBonus = session.percentage === 100 ? 15 : 0

  // Streak calculation
  let newStreak = currentStreak
  if (lastActive === today) {
    // already counted today
  } else if (lastActive === yesterday) {
    newStreak = currentStreak + 1
  } else {
    newStreak = 1
  }

  // Daily goal
  const newDailyDone = dailyDone + session.total
  const dailyGoalJustMet = dailyDone < dailyGoal && newDailyDone >= dailyGoal
  const dailyBonus = dailyGoalJustMet ? 50 : 0

  const xpEarned = baseXp + passBonus + perfectBonus + dailyBonus
  const newTotalXp = currentXp + xpEarned

  // Upsert stats
  await supabase.from('user_stats').upsert(
    {
      user_id: userId,
      xp: newTotalXp,
      streak: newStreak,
      last_active: today,
      daily_goal: dailyGoal,
      daily_done: newDailyDone,
      daily_date: today,
    },
    { onConflict: 'user_id' }
  )

  // Fetch earned badges
  const { data: earnedData } = await supabase
    .from('user_badges')
    .select('badge_id')
    .eq('user_id', userId)

  const earned = new Set((earnedData ?? []).map(b => b.badge_id))

  // Distinct subjects tried (from exam_attempts only)
  const { data: attempts } = await supabase
    .from('exam_attempts')
    .select('subject')
    .eq('user_id', userId)

  const distinctSubjects = new Set((attempts ?? []).map(a => a.subject)).size

  // Check badge eligibility
  const candidates: Array<{ badge: Badge; condition: boolean }> = [
    { badge: BADGES.first_step,    condition: true },
    { badge: BADGES.passing_grade, condition: session.isExam && session.percentage >= 75 },
    { badge: BADGES.perfect_score, condition: session.percentage === 100 },
    { badge: BADGES.streak_3,      condition: newStreak >= 3 },
    { badge: BADGES.streak_7,      condition: newStreak >= 7 },
    { badge: BADGES.century,       condition: newTotalXp >= 100 },
    { badge: BADGES.scholar,       condition: newTotalXp >= 500 },
    { badge: BADGES.daily_done,    condition: dailyGoalJustMet },
    { badge: BADGES.polymath,      condition: distinctSubjects >= 3 },
    { badge: BADGES.hardcore,      condition: session.isExam && session.total >= 50 },
  ]

  const newBadges = candidates
    .filter(({ badge, condition }) => condition && !earned.has(badge.id))
    .map(({ badge }) => badge)

  if (newBadges.length > 0) {
    await supabase.from('user_badges').insert(
      newBadges.map(b => ({ user_id: userId, badge_id: b.id }))
    )
  }

  return { xpEarned, totalXp: newTotalXp, streak: newStreak, dailyGoalMet: dailyGoalJustMet, newBadges }
}

export function xpLevel(xp: number): { level: number; progress: number; toNext: number } {
  const level = Math.floor(xp / 100) + 1
  const progress = xp % 100
  const toNext = 100 - progress
  return { level, progress, toNext }
}
