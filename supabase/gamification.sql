-- Run this in the Supabase SQL Editor to enable gamification features.

-- user_stats: one row per user, tracks XP, streak, and daily goal progress
CREATE TABLE IF NOT EXISTS user_stats (
  user_id     UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  xp          INTEGER NOT NULL DEFAULT 0,
  streak      INTEGER NOT NULL DEFAULT 0,
  last_active DATE,
  daily_goal  INTEGER NOT NULL DEFAULT 10,
  daily_done  INTEGER NOT NULL DEFAULT 0,
  daily_date  DATE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own stats"
  ON user_stats FOR ALL
  USING (auth.uid() = user_id);

-- user_badges: one row per badge earned, unique per user+badge
CREATE TABLE IF NOT EXISTS user_badges (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id   TEXT NOT NULL,
  earned_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own badges"
  ON user_badges FOR ALL
  USING (auth.uid() = user_id);
