-- FoqusLab: one questions table, one source of truth for every MCQ page.
--
-- Design decided 2026-09-18 (see ventures/foquslab/foundation.md "Content architecture").
-- Additive: creating this touches nothing the live app reads. The app keeps importing
-- src/data/*.json until a page is deliberately pointed at the DB, post-boards.
--
-- The model: the DB is the AUTHORING source. A build step derives the served artifacts
-- (the JSON the app bundles, and later the Top 2 renderer). Single source of truth does
-- NOT mean every page queries Postgres live.

create table if not exists public.questions (
  -- identity
  id            bigint generated always as identity primary key,  -- stable, survives edits
  stem_hash     text    not null,   -- fnv1a(normalizeStem(stem)) + '-' + len36, per src/lib/srs.ts
                                     -- the bridge to question_reviews + daily_queue, and the dedup key

  -- the question itself (mirrors question_reviews.payload so deriving JSON is a straight copy)
  type          text    not null,   -- 'mcq' | 'tf'
  stem          text    not null,
  options       jsonb,              -- array of strings for mcq, null for tf
  correct       jsonb   not null,   -- 0-based index (mcq) or boolean (tf)
  explanation   text,               -- the rationale

  -- classification
  subject       text    not null,   -- bank slug ('primary-eye-care') or Top 2 code ('C')
  area          text,               -- OLE 2016 TOS area 'A'..'H'; classify by where the TOS TESTS
                                     -- it (see SYLLABI-TOPIC-MAP.md), not the bank it lives in. Nullable until populated.
  subtopic      text,               -- e.g. 'A2 Orbit & EOM'
  section_code  text,               -- e.g. 'A2-01'
  is_trap       boolean not null default false,
  tags          jsonb   not null default '[]'::jsonb,
  difficulty    text,               -- nullable now, grow-into

  -- provenance (nothing is orphaned from where it came)
  source        text    not null,   -- 'bank' | 'top2' | 'preboard' | 'notes-quiz'
  source_ref    text,               -- human label, e.g. 'MCU 2025 Preboard'
  origin_file   text,               -- literal file it was loaded from

  -- lifecycle + dedup
  status        text    not null default 'active',   -- 'active' | 'draft' | 'retired'
  canonical_id  bigint  references public.questions(id),  -- a duplicate points at its master;
                                                          -- the build step emits only canonical rows
  version       integer not null default 1,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  constraint questions_type_chk   check (type in ('mcq','tf')),
  constraint questions_source_chk check (source in ('bank','top2','preboard','notes-quiz')),
  constraint questions_status_chk check (status in ('active','draft','retired')),
  constraint questions_area_chk   check (area is null or area in ('A','B','C','D','E','F','G','H')),
  -- integrity: mcq has options + numeric answer; tf has neither options nor numeric answer
  constraint questions_correct_chk check (
       (type = 'mcq' and jsonb_typeof(options) = 'array' and jsonb_typeof(correct) = 'number')
    or (type = 'tf'  and options is null                 and jsonb_typeof(correct) = 'boolean')
  )
);

-- hot reads
create index if not exists questions_subject_idx   on public.questions (subject) where status = 'active';
create index if not exists questions_area_idx      on public.questions (area)    where status = 'active';
create index if not exists questions_stem_hash_idx on public.questions (stem_hash);
create index if not exists questions_source_idx    on public.questions (source);
create index if not exists questions_tags_idx      on public.questions using gin (tags);

-- keep updated_at honest
create or replace function public.touch_updated_at() returns trigger
  language plpgsql as $$ begin new.updated_at = now(); return new; end $$;

drop trigger if exists questions_touch on public.questions;
create trigger questions_touch before update on public.questions
  for each row execute function public.touch_updated_at();

-- RLS: authenticated users read active content; writes go through the service role
-- (backfill + build scripts + admin), which bypasses RLS.
alter table public.questions enable row level security;

drop policy if exists "read active questions" on public.questions;
create policy "read active questions" on public.questions
  for select to authenticated using (status = 'active');
