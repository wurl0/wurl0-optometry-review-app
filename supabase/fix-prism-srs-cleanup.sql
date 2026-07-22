-- Clear the stale resultant-prism cards from the review queue.
--
-- Commit 302c18d corrected 8 answer keys across 11 prism items. The queue stores a
-- payload SNAPSHOT on each row (the Top 2 questions live in static HTML the server
-- cannot read), so any card harvested before that commit still holds the mirrored
-- OD/OS answer and would keep drilling the wrong convention.
--
-- The 11 instances share 4 stems after normalization, so this touches at most 4 rows
-- per user. Run in the Supabase SQL Editor.
--
-- NOTE: the SQL Editor runs as the postgres superuser and BYPASSES row-level security,
-- so this operates across ALL users' rows, not just the runner's. That is fine here: the
-- deleted cards all held the pre-fix mirrored payload, so removing them is correct for
-- everyone. To scope to a single user, add "and user_id = '<uuid>'" to each statement.
--
-- RUN LOG (2026-07-22): executed top to bottom. SELECT returned 5 rows (4 questions, one
-- shared by two users). The DELETE removed all 5; the OPTION B UPDATEs then matched 0 rows
-- (already deleted), so Option A is what landed. A re-run of the SELECT returned 0 rows,
-- confirming the queue is clean. Kept as a record; do not re-run.

-- Look first.
select question_id, subject, source, box, due_on, reps, lapses, retired,
       payload->>'correct' as stored_correct
from question_reviews
where question_id in ('7178fbac-28', '933a3bca-28', 'e1c364ab-28', 'cb69abe4-28');


-- OPTION A (recommended): drop the cards. They re-enter the queue with the corrected
-- payload the next time you meet the question and miss it.
delete from question_reviews
where question_id in ('7178fbac-28', '933a3bca-28', 'e1c364ab-28', 'cb69abe4-28');


-- OPTION B: keep your history but overwrite the stale payload and send each card back
-- to the bottom of the ladder, due tomorrow. Use this instead of A if you would rather
-- these resurface on schedule than wait to meet them again.
update question_reviews set
  payload = '{"stem": "Find the single prism equivalent to a 5Δ BU combined with a 3.5Δ BO in front of OS.", "options": ["6 Δ BU and BO @ 55", "6 Δ BU and BO @ 125", "6 Δ BU and BO @ 235", "6 Δ BU and BO @ 305"], "correct": 0, "explanation": "Magnitude = √(5.0² + 3.5²) = 6.10Δ, and all four options share it, so this is a direction question. Reference angle = arctan(5.0/3.5) = 55.0° off the horizontal. Place it on the 360 scale: 0° sits on the examiner''s right, which for OS is temporal (base OUT), with base up at 90 and base down at 270. Base up and base out therefore lands in the upper-temporal quadrant, giving 55°. Answer: 6.10Δ @ 55. The trap is 125, which is the correct answer for the same two prisms in front of the other eye, so check OD vs OS before committing."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = '7178fbac-28';

update question_reviews set
  payload = '{"stem": "Find the single prism equivalent to a 6.5Δ BD combined with a 4Δ BO in front of OD.", "options": ["7.63 Δ BD and BO @ 58", "7.63 Δ BD and BO @ 122", "7.63 Δ BD and BO @ 236", "7.63 Δ BD and BO @ 302"], "correct": 2, "explanation": "Magnitude = √(6.5² + 4.0²) = 7.63Δ, and all four options share it, so this is a direction question. Reference angle = arctan(6.5/4.0) = 58.4° off the horizontal. Place it on the 360 scale: 0° sits on the examiner''s right, which for OD is nasal (base IN), with base up at 90 and base down at 270. Base down and base out therefore lands in the lower-temporal quadrant, giving 238°. The listed option 236 is the nearest value to 238. Answer: 7.63Δ @ 236. The trap is 302, which is the correct answer for the same two prisms in front of the other eye, so check OD vs OS before committing."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = '933a3bca-28';

update question_reviews set
  payload = '{"stem": "Find the single prism equivalent to a 3Δ BD combined with a 1.5Δ BO in front of OS.", "options": ["3.35 Δ BD and BO @ 63", "3.35 Δ BD and BO @ 117", "3.35 Δ BD and BO @ 243", "3.35 Δ BD and BO @ 297"], "correct": 3, "explanation": "Magnitude = √(3.0² + 1.5²) = 3.35Δ, and all four options share it, so this is a direction question. Reference angle = arctan(3.0/1.5) = 63.4° off the horizontal. Place it on the 360 scale: 0° sits on the examiner''s right, which for OS is temporal (base OUT), with base up at 90 and base down at 270. Base down and base out therefore lands in the lower-temporal quadrant, giving 297°. Answer: 3.35Δ @ 297. The trap is 243, which is the correct answer for the same two prisms in front of the other eye, so check OD vs OS before committing."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'e1c364ab-28';

update question_reviews set
  payload = '{"stem": "Find the single prism equivalent to a 8Δ BU combined with a 2.5Δ BI in front of OS.", "options": ["8.38 Δ BU and BI @ 73", "8.38 Δ BU and BI @ 107", "8.38 Δ BU and BI @ 253", "8.38 Δ BU and BI @ 287"], "correct": 1, "explanation": "Magnitude = √(8.0² + 2.5²) = 8.38Δ, and all four options share it, so this is a direction question. Reference angle = arctan(8.0/2.5) = 72.6° off the horizontal. Place it on the 360 scale: 0° sits on the examiner''s right, which for OS is temporal (base OUT), with base up at 90 and base down at 270. Base up and base in therefore lands in the upper-nasal quadrant, giving 107°. Answer: 8.38Δ @ 107. The trap is 73, which is the correct answer for the same two prisms in front of the other eye, so check OD vs OS before committing."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'cb69abe4-28';
