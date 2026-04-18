export interface Badge {
  id: string
  name: string
  emoji: string
  description: string
}

export const BADGES: Record<string, Badge> = {
  first_step:    { id: 'first_step',    emoji: '🎯', name: 'First Step',       description: 'Complete your first session' },
  passing_grade: { id: 'passing_grade', emoji: '✅', name: 'Passing Grade',    description: 'Score 75%+ on an exam' },
  perfect_score: { id: 'perfect_score', emoji: '💯', name: 'Perfect Score',    description: 'Score 100% on any session' },
  streak_3:      { id: 'streak_3',      emoji: '🔥', name: '3-Day Streak',     description: 'Study 3 days in a row' },
  streak_7:      { id: 'streak_7',      emoji: '🏆', name: 'Week Strong',      description: 'Study 7 days in a row' },
  century:       { id: 'century',       emoji: '⚡', name: 'Century',          description: 'Earn 100 XP' },
  scholar:       { id: 'scholar',       emoji: '🎓', name: 'Scholar',          description: 'Earn 500 XP' },
  daily_done:    { id: 'daily_done',    emoji: '🌟', name: 'Daily Champion',   description: 'Complete your daily goal' },
  polymath:      { id: 'polymath',      emoji: '🧠', name: 'Polymath',         description: 'Try at least 3 different subjects' },
  hardcore:      { id: 'hardcore',      emoji: '💪', name: 'Hardcore',         description: 'Answer 50+ questions in a single exam' },
  quick_study:   { id: 'quick_study',   emoji: '📝', name: 'Quick Study',      description: 'Pass a notes quiz' },
}

export const ALL_BADGES: Badge[] = Object.values(BADGES)
