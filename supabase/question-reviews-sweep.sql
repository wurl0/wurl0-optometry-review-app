-- Run this in the Supabase SQL Editor to enable the pre-exam sweep.
--
-- The ladder retires a card after five clean recalls, and then never shows it again. A
-- card retired in mid-August would therefore go untested for the last six weeks before
-- the boards — the exact gap the queue exists to close.
--
-- The sweep gives every retired card ONE final pass during the taper. It needs no new
-- scheduling logic: a retired card already sits on the top rung, so recalling it re-retires
-- it and missing it drops it to the bottom of the ladder like any other miss. All this
-- column does is remember that a card has had its final pass, so it is not swept twice.

alter table question_reviews
  add column if not exists swept_at timestamptz;

-- The sweep reads "retired cards this user has not swept yet".
create index if not exists question_reviews_sweep_idx
  on question_reviews (user_id)
  where retired = true and swept_at is null;
