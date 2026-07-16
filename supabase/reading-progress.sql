-- Run this in the Supabase SQL Editor to enable reading progress in the Top 2 reviewers.
--
-- Two things are tracked, and they are deliberately different:
--
--   position — the furthest section reached in a subject. Recorded automatically as you
--              scroll, so "where was I" costs no effort and nothing to remember.
--   state    — per section, whether a recall checkpoint was passed ('solid') or not
--              ('gaps'). Only written when you deliberately mark it.
--
-- Server-side rather than localStorage because the reviewers get read on an iPad, a
-- phone and a laptop, and a progress marker that disagrees between them is worse than none.

-- One row per (user, subject, section). Sections are identified by the slug the generator
-- already puts on every <section id="...">.
create table if not exists reading_progress (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  subject     text not null,               -- 'A'..'H'
  section_id  text not null,               -- the <section> slug
  section_title text,                      -- denormalised for the resume label
  state       text not null,               -- 'solid' | 'gaps'
  updated_at  timestamptz default now(),
  unique (user_id, subject, section_id)
);

alter table reading_progress enable row level security;

grant select, insert, update, delete
  on public.reading_progress
  to authenticated;

create policy "Users manage their own reading progress"
  on reading_progress for all
  using (auth.uid() = user_id);

-- One row per (user, subject): the furthest section reached. Separate from the table
-- above because position is written constantly while scrolling and states are not.
create table if not exists reading_position (
  user_id       uuid not null references auth.users(id) on delete cascade,
  subject       text not null,
  section_id    text not null,
  section_title text,
  updated_at    timestamptz default now(),
  primary key (user_id, subject)
);

alter table reading_position enable row level security;

grant select, insert, update, delete
  on public.reading_position
  to authenticated;

create policy "Users manage their own reading position"
  on reading_position for all
  using (auth.uid() = user_id);
