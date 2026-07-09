-- Run this in the Supabase SQL Editor to enable OLE readiness tracking.
-- Captures the score from every scored Top 2 item (subject exams, preboards, mocks)
-- so the readiness tracker can compute a weighted theoretical GWA per user.

create table if not exists ole_attempts (
  id             uuid default gen_random_uuid() primary key,
  user_id        uuid references auth.users(id) on delete cascade not null,
  subject_code   text not null,                  -- 'A'..'H'
  source         text not null,                  -- 'subject-exam' | 'preboards-2025' | 'preboards-set2' | 'mock'
  score          integer not null,
  total          integer not null,
  percentage     numeric(5, 2) not null,
  area_breakdown jsonb default '[]',             -- [{ area: 'D3 Contact Lens', correct: 5, total: 11, percentage: 45.5 }]
  wrong_topics   jsonb default '[]',             -- [{ area, stem, correct }] for the "specific misses" drill-down
  created_at     timestamptz default now()
);

-- Read patterns: latest N attempts per (user, subject). Index the sort key.
create index if not exists ole_attempts_user_subject_idx
  on ole_attempts (user_id, subject_code, created_at desc);

alter table ole_attempts enable row level security;

grant select, insert
  on public.ole_attempts
  to authenticated;

create policy "Users see own ole attempts"
  on ole_attempts for select
  using (auth.uid() = user_id);

create policy "Users insert own ole attempts"
  on ole_attempts for insert
  with check (auth.uid() = user_id);
