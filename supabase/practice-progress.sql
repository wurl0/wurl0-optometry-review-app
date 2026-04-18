-- Run this in the Supabase SQL Editor to enable the level-based practice system.

-- practice_progress: tracks which levels each user has completed per subject
-- One row per (user, subject, level) — upserted on each completion attempt
CREATE TABLE IF NOT EXISTS practice_progress (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject      TEXT NOT NULL,
  level        INTEGER NOT NULL,      -- 1, 2, or 3
  passed       BOOLEAN NOT NULL DEFAULT false,
  score        INTEGER,
  total        INTEGER,
  percentage   NUMERIC,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, subject, level)
);

ALTER TABLE practice_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own practice progress"
  ON practice_progress FOR ALL
  USING (auth.uid() = user_id);
