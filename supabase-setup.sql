-- Run this in your Supabase SQL editor after creating the project

create table if not exists exam_attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  subject text not null,
  score integer not null,
  total integer not null,
  percentage numeric(5, 2) not null,
  wrong_questions jsonb default '[]',
  created_at timestamptz default now()
);

alter table exam_attempts enable row level security;

create policy "Users see own attempts"
  on exam_attempts for select
  using (auth.uid() = user_id);

create policy "Users insert own attempts"
  on exam_attempts for insert
  with check (auth.uid() = user_id);
