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

grant select, insert
  on public.exam_attempts
  to authenticated;

create policy "Users see own attempts"
  on exam_attempts for select
  using (auth.uid() = user_id);

create policy "Users insert own attempts"
  on exam_attempts for insert
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- App-wide settings (single row, id = 1). Currently holds maintenance mode.
-- Maintenance mode makes the app return a 503 to every non-admin visitor while
-- admins keep full access (see src/middleware.ts). Toggled from /admin.
-- ---------------------------------------------------------------------------
create table if not exists app_settings (
  id int primary key default 1,
  maintenance_mode boolean not null default false,
  updated_at timestamptz not null default now(),
  constraint app_settings_singleton check (id = 1)
);

insert into app_settings (id, maintenance_mode) values (1, false)
  on conflict (id) do nothing;

alter table app_settings enable row level security;

-- The flag is non-sensitive and the middleware reads it for EVERY visitor
-- (including logged-out ones), so allow anon/authenticated select.
drop policy if exists "anyone can read app settings" on app_settings;
create policy "anyone can read app settings" on app_settings for select using (true);
-- Writes go only through the service role (the /api/admin/maintenance route),
-- which bypasses RLS, so no insert/update policy is granted here.

-- ---------------------------------------------------------------------------
-- Usage analytics: a "last active" stamp + a lightweight page-view event log,
-- read by the admin Usage tab. Reading of the static /top2 reviewers is already
-- captured in reading_position/reading_progress; this fills in the React pages.
-- ---------------------------------------------------------------------------
alter table profiles add column if not exists last_active timestamptz;

create table if not exists app_events (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  type text not null,            -- currently 'page_view'
  path text,                     -- route only, query strings stripped
  meta jsonb,
  created_at timestamptz not null default now()
);
create index if not exists app_events_user_time on app_events (user_id, created_at desc);
create index if not exists app_events_time_idx on app_events (created_at desc);

alter table app_events enable row level security;
-- Users may log their own events; reads happen admin-side through the service role.
drop policy if exists "insert own events" on app_events;
create policy "insert own events" on app_events for insert with check (auth.uid() = user_id);
