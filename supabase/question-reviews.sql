-- Run this in the Supabase SQL Editor to enable the spaced-repetition review queue.
--
-- Every question missed anywhere in the app (practice, exams, notes quizzes) or in the
-- Top 2 reviewers gets a row here, then comes back on an expanding schedule until it is
-- answered right enough times to retire to the "solid" pile.
--
-- The question payload is stored on the row rather than referenced by id. The main banks
-- live in src/data/*.json but the Top 2 questions are embedded in static HTML the server
-- cannot read, so a snapshot is the only way one queue can serve both.

create table if not exists question_reviews (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  question_id  text not null,                 -- fnv1a hash of the normalized stem
  subject      text not null,                 -- bank slug ('primary-eye-care') or Top 2 code ('C')
  source       text not null,                 -- 'practice' | 'exam' | 'notes-quiz' | 'subject-exam' | 'preboards-2025' | 'preboards-set2' | 'mock'
  payload      jsonb not null,                -- { stem, options, correct, explanation }
  box          integer not null default 0,    -- index into the interval ladder in src/lib/srs.ts
  due_on       date not null,
  reps         integer not null default 0,    -- total times graded in the queue
  lapses       integer not null default 0,    -- times missed after first entry
  retired      boolean not null default false,-- cleared the ladder = "solid"
  created_at   timestamptz default now(),
  updated_at   timestamptz default now(),
  unique (user_id, question_id)
);

-- The hot read is "what is due for me today". Partial index keeps retired cards out of it.
create index if not exists question_reviews_due_idx
  on question_reviews (user_id, due_on)
  where retired = false;

alter table question_reviews enable row level security;

grant select, insert, update, delete
  on public.question_reviews
  to authenticated;

create policy "Users manage their own question reviews"
  on question_reviews for all
  using (auth.uid() = user_id);
