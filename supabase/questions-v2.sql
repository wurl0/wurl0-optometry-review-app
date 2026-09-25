-- FoqusLab questions v2: structured rationales + answer log + mastery/advice.
--
-- Builds on questions-table.sql (live, 1,905 bank rows). Additive only: new nullable columns,
-- new tables, new views. Nothing the live app reads today changes.
--
-- Three layers, one per goal:
--   1. TEACH   questions gets one column per part of the MCQ Compact Rationale Standard
--              (answer, decisive clue, mechanism, why-not-the-others, teaching moment, exam tip),
--              so the app can teach, not just mark.
--   2. MEASURE question_attempts logs EVERY answer (not only misses), with the option picked,
--              confidence, time, and whether the rationale was opened.
--   3. ADVISE  question_stats (item quality) + user_mastery (per-user, per-subtopic) +
--              my_study_focus() (ranked "study this next, and why").

-- =====================================================================================
-- 1. TEACH: structured rationale on questions
-- =====================================================================================
-- One column per part of the MCQ Compact Rationale Standard
-- (Second Brain: 02 Areas/Optometry/MCQ Compact Rationale Standard.md):
--
--   1 Answer first        rendered from `correct`; answer_status + answer_note carry the
--                         "no unsupported certainty" rule (flag a source conflict, never hide it)
--   2 Decisive clue       decisive_clue, plus stem_keyword (strongest / safest / preferred /
--                         initial / most likely / except / best next) kept as its own field
--   3 Mechanism first     mechanism (plain language), then clinical_term
--   4 Why not the others  option_rationales, one entry per option, aligned to `options`
--   5 Teaching moment     teaching_moment
--   6 Exam tip            exam_tip
--
-- `explanation` stays as the legacy single-paragraph rationale: the fallback the app shows under
-- "Why this is correct" until an item is upgraded, and the audit trail of what it said before.
-- This is also the storage answer to Lisa's FoqusLab Results Review Design (distractors are
-- per-option data, not one prose block).

alter table public.questions
  add column if not exists code              text,     -- readable stable id, e.g. 'A0001', 'PEC-0417'
  add column if not exists answer_status     text,     -- 'verified' | 'verify' | 'conflict' | 'errata'; null = not yet checked
  add column if not exists answer_note       text,     -- what the conflict or errata is, and which sources disagree
  add column if not exists decisive_clue     text,     -- part 2: the finding or keyword that selects the answer, in one sentence
  add column if not exists stem_keyword      text,     -- part 2: the exact qualifier, lowercase ('except', 'most likely', ...)
  add column if not exists mechanism         text,     -- part 3: what physically or clinically happens, plain words
  add column if not exists clinical_term     text,     -- part 3: the label, named AFTER the mechanism
  add column if not exists option_rationales jsonb,    -- part 4: array aligned to options. Correct slot may hold a
                                                       -- short "why it fits"; every other slot a stem-specific mismatch.
                                                       -- NO letters inside: options shuffle, the app adds letters at render.
  add column if not exists teaching_moment   text,     -- part 5: one rule or contrast that transfers to similar items
  add column if not exists exam_tip          text,     -- part 6: trigger word, routing rule, or trap to avoid
  add column if not exists legacy_rationale  jsonb,    -- raw source fields kept for audit, e.g. Top 2 {w, k, decode}
  add column if not exists cognitive_level   text,     -- 'recall' | 'understand' | 'apply' | 'analyze'
  add column if not exists is_high_yield     boolean not null default false,
  add column if not exists source_refs       jsonb not null default '[]'::jsonb,  -- [{title, page}]: rule 10, ground in reviewer files
  add column if not exists media             jsonb not null default '[]'::jsonb,  -- [{url, alt, role:'stem'|'rationale'}]
  add column if not exists reviewed_by       uuid references auth.users(id),      -- QC gate: who cleared draft -> active
  add column if not exists reviewed_at       timestamptz;

-- The standard in one flag. clinical_term is optional (not every item has a label worth naming).
-- The worklist of items to upgrade is simply `where not meets_standard`.
alter table public.questions
  add column if not exists meets_standard boolean generated always as (
        coalesce(length(trim(decisive_clue)), 0)   > 0
    and coalesce(length(trim(mechanism)), 0)       > 0
    and coalesce(length(trim(teaching_moment)), 0) > 0
    and coalesce(length(trim(exam_tip)), 0)        > 0
    and (type = 'tf' or option_rationales is not null)
  ) stored;

alter table public.questions drop constraint if exists questions_answer_status_chk;
alter table public.questions add  constraint questions_answer_status_chk
  check (answer_status is null or answer_status in ('verified','verify','conflict','errata'));

-- a flagged answer must say why, or the flag just confuses the learner
alter table public.questions drop constraint if exists questions_answer_note_chk;
alter table public.questions add  constraint questions_answer_note_chk check (
  answer_status is null or answer_status = 'verified' or coalesce(length(trim(answer_note)), 0) > 0
);

-- difficulty was free text and is empty in all rows; pin its vocabulary before anything fills it.
-- Authored difficulty is a guess; the real one comes from question_stats.p_value below.
alter table public.questions drop constraint if exists questions_difficulty_chk;
alter table public.questions add  constraint questions_difficulty_chk
  check (difficulty is null or difficulty in ('easy','medium','hard'));

alter table public.questions drop constraint if exists questions_cognitive_chk;
alter table public.questions add  constraint questions_cognitive_chk
  check (cognitive_level is null or cognitive_level in ('recall','understand','apply','analyze'));

-- per-option array must line up with options, or "why not" text lands on the wrong choice
alter table public.questions drop constraint if exists questions_option_rationales_chk;
alter table public.questions add  constraint questions_option_rationales_chk check (
  option_rationales is null
  or (type = 'mcq' and jsonb_typeof(option_rationales) = 'array'
      and jsonb_array_length(option_rationales) = jsonb_array_length(options))
);

-- a question may not go live with a bare answer: the rationale IS the product
alter table public.questions drop constraint if exists questions_active_has_rationale_chk;
alter table public.questions add  constraint questions_active_has_rationale_chk check (
  status <> 'active' or coalesce(length(trim(explanation)), 0) > 0 or meets_standard
);

-- Anything NEW goes live only at full standard. The 1,905 legacy 'bank' rows are exempt so they
-- keep serving while they are upgraded; drop the exemption once `where not meets_standard` is empty.
alter table public.questions drop constraint if exists questions_new_meets_standard_chk;
alter table public.questions add  constraint questions_new_meets_standard_chk check (
  status <> 'active' or source = 'bank' or meets_standard
);

-- Options are shuffled at render, so "option B is wrong" points at a different choice for every
-- reader. Same rule lint_bank.py enforces; catching it here stops it at the door.
alter table public.questions drop constraint if exists questions_no_letter_refs_chk;
alter table public.questions add  constraint questions_no_letter_refs_chk check (
  concat_ws(' ', explanation, decisive_clue, mechanism, teaching_moment, exam_tip, option_rationales::text)
    !~ '\m([Oo]ption|[Cc]hoice|[Aa]nswer)s?\s+[A-D]\M'   -- letter case-sensitive: skips "answer a question"
) not valid;  -- enforced on every insert/update; 1 legacy row (binocular-vision, "Options A and D")
              -- still breaks it. Fix that row, then: alter table public.questions validate constraint questions_no_letter_refs_chk;

create unique index if not exists questions_code_uidx on public.questions (code) where code is not null;
create index if not exists questions_subtopic_idx on public.questions (area, subtopic) where status = 'active';

-- 'original' = authored in FoqusLab directly, not imported
alter table public.questions drop constraint if exists questions_source_chk;
alter table public.questions add  constraint questions_source_chk
  check (source in ('bank','top2','preboard','notes-quiz','original'));

-- =====================================================================================
-- 2. MEASURE: every answer, right or wrong
-- =====================================================================================
-- question_reviews only holds misses (for SRS); exam_attempts / ole_attempts only hold totals.
-- Neither can say "you are 40% on D3 contact lens fitting" or "option C fools 60% of users".
-- This table can. question_id is nullable so Top 2 static pages can log by stem_hash alone
-- until they are served from this table.

create table if not exists public.question_attempts (
  id                bigint generated always as identity primary key,
  user_id           uuid   not null references auth.users(id) on delete cascade,
  question_id       bigint references public.questions(id) on delete set null,
  stem_hash         text   not null,           -- same key as question_reviews.question_id
  question_version  integer,                   -- questions.version at answer time; stats can drop pre-fix answers
  context           text   not null,           -- where it was answered (see check)
  session_id        uuid,                      -- groups one practice run / exam sitting
  chosen            jsonb,                     -- 0-based index (mcq) or boolean (tf); null = skipped / timed out
  is_correct        boolean not null,
  confidence        smallint,                  -- 1 guess, 2 unsure, 3 sure (optional tap before reveal)
  time_ms           integer,                   -- time from display to answer
  rationale_viewed  boolean not null default false,
  rationale_ms      integer,                   -- time spent on the rationale screen
  created_at        timestamptz not null default now(),

  constraint qa_context_chk check (context in
    ('practice','exam','subject-exam','mock','preboard','top2','review','daily-queue','notes-quiz')),
  constraint qa_confidence_chk check (confidence is null or confidence between 1 and 3),
  constraint qa_time_chk check (time_ms is null or time_ms >= 0)
);

create index if not exists qa_user_time_idx on public.question_attempts (user_id, created_at desc);
create index if not exists qa_question_idx  on public.question_attempts (question_id);
create index if not exists qa_hash_idx      on public.question_attempts (stem_hash);

alter table public.question_attempts enable row level security;
grant select, insert on public.question_attempts to authenticated;
grant usage on sequence public.question_attempts_id_seq to authenticated;

drop policy if exists "own attempts read" on public.question_attempts;
create policy "own attempts read" on public.question_attempts
  for select to authenticated using (auth.uid() = user_id);
drop policy if exists "own attempts insert" on public.question_attempts;
create policy "own attempts insert" on public.question_attempts
  for insert to authenticated with check (auth.uid() = user_id);
-- no update/delete: the log is append-only

-- =====================================================================================
-- 3a. ADVISE (content side): item statistics across all users
-- =====================================================================================
-- Classic item analysis. First attempt per user only, so repeat drilling does not inflate it.
--   p_value         share correct. <0.30 = very hard or possibly mis-keyed; >0.90 = too easy
--   option_counts   how often each option was picked; a distractor nobody picks is dead weight,
--                   a distractor that beats the key flags a wrong answer key
--   discrimination  top-27% vs bottom-27% scorers (by overall accuracy). <0.2 = weak item
-- Materialized so it aggregates across users without opening their raw rows. Refresh nightly.

drop materialized view if exists public.question_stats;
create materialized view public.question_stats as
with first_try as (
  select distinct on (user_id, question_id)
         user_id, question_id, chosen, is_correct, time_ms, rationale_viewed
  from public.question_attempts
  where question_id is not null
  order by user_id, question_id, created_at
),
user_skill as (
  select user_id, ntile(100) over (order by avg(is_correct::int)) as pct
  from first_try group by user_id
),
per_q as (
  select f.question_id,
         count(*)                                             as n,
         avg(f.is_correct::int)                               as p_value,
         avg(f.is_correct::int) filter (where s.pct >= 74)    as p_top,
         avg(f.is_correct::int) filter (where s.pct <= 27)    as p_bottom,
         percentile_cont(0.5) within group (order by f.time_ms) as median_ms,
         avg(f.rationale_viewed::int)                         as rationale_view_rate
  from first_try f join user_skill s using (user_id)
  group by f.question_id
),
opts as (
  select question_id, jsonb_object_agg(coalesce(chosen::text, 'skip'), c) as option_counts
  from (select question_id, chosen, count(*) c from first_try group by 1, 2) x
  group by question_id
)
select p.question_id, p.n,
       round(p.p_value::numeric, 3)                    as p_value,
       round((p.p_top - p.p_bottom)::numeric, 3)       as discrimination,
       o.option_counts,
       p.median_ms::int                                as median_ms,
       round(p.rationale_view_rate::numeric, 3)        as rationale_view_rate,
       case when p.n < 20            then 'insufficient-data'
            when p.p_value < 0.30    then 'check-key-or-too-hard'
            when p.p_value > 0.90    then 'too-easy'
            when (p.p_top - p.p_bottom) < 0.20 then 'weak-discrimination'
            else 'ok' end                              as flag,
       now()                                           as refreshed_at
from per_q p join opts o using (question_id);

create unique index if not exists question_stats_pk on public.question_stats (question_id);
revoke all on public.question_stats from anon, authenticated;   -- admin / service role only for now

create or replace function public.refresh_question_stats() returns void
  language sql security definer set search_path = public as
$$ refresh materialized view concurrently public.question_stats $$;
revoke execute on function public.refresh_question_stats() from public, anon, authenticated;

-- =====================================================================================
-- 3b. ADVISE (learner side): per-user mastery and a ranked study focus
-- =====================================================================================
-- security_invoker = on: the view runs as the caller, so RLS on question_attempts limits every
-- user to their own rows. questions is readable by authenticated (active rows) already.

create or replace view public.user_mastery with (security_invoker = on) as
select a.user_id,
       q.area,
       q.subtopic,
       count(*)                                                        as answered,
       round(avg(a.is_correct::int)::numeric, 3)                       as accuracy,
       -- last 30 days, so recovery shows up instead of being buried by old misses
       round((avg(a.is_correct::int) filter (where a.created_at > now() - interval '30 days'))::numeric, 3)
                                                                       as accuracy_30d,
       -- sure but wrong = a misconception, the most expensive kind of error on board day
       count(*) filter (where a.confidence = 3 and not a.is_correct)   as confident_wrong,
       -- guessed right = unstable knowledge that will not survive a reworded stem
       count(*) filter (where a.confidence = 1 and a.is_correct)       as lucky_right,
       -- missed and skipped the rationale = the miss taught nothing
       count(*) filter (where not a.is_correct and not a.rationale_viewed) as missed_unread,
       max(a.created_at)                                               as last_seen
from public.question_attempts a
join public.questions q on q.id = a.question_id
group by a.user_id, q.area, q.subtopic;

grant select on public.user_mastery to authenticated;

-- Ranked study focus for the signed-in user. Weakest-first, weighted toward confident-wrong answers,
-- with a plain-language reason the app can show as-is.
create or replace function public.my_study_focus(max_rows int default 5)
returns table (area text, subtopic text, answered bigint, accuracy numeric,
               priority numeric, reason text)
language sql stable security invoker set search_path = public as
$$
  select m.area, m.subtopic, m.answered, coalesce(m.accuracy_30d, m.accuracy) as accuracy,
         round(( (1 - coalesce(m.accuracy_30d, m.accuracy))
               + 0.15 * m.confident_wrong::numeric / m.answered
               + 0.05 * m.missed_unread::numeric   / m.answered )::numeric, 3) as priority,
         case
           when m.confident_wrong >= 2
             then 'You answered these confidently and got them wrong. Reread the rationales, the idea you have is off.'
           when m.missed_unread >= 3
             then 'You are skipping the rationale after a miss. Open it: that is where the point is.'
           when m.lucky_right >= 3
             then 'Several right answers here were guesses. Drill it until you are sure.'
           when coalesce(m.accuracy_30d, m.accuracy) < 0.60
             then 'Below passing. Review the notes for this topic, then retry a short set.'
           when m.last_seen < now() - interval '14 days'
             then 'Not practiced in two weeks. A short refresher keeps it from fading.'
           else 'Close to solid. Keep it in rotation.'
         end as reason
  from public.user_mastery m
  where m.user_id = auth.uid() and m.answered >= 5
  order by priority desc, m.answered desc
  limit max_rows
$$;
grant execute on function public.my_study_focus(int) to authenticated;
