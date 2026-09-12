-- Run this in the Supabase SQL Editor.
-- Per-user timed block ("maintenance for one user"). While blocked_until is a future
-- timestamp, that single user gets the SAME neutral 503 page as global maintenance
-- (see src/middleware.ts), so it reads as an outage rather than a personal suspension.
-- NULL = not blocked. A past timestamp = expired (treated as not blocked). The block
-- lifts itself when the time passes; no cron needed.
--
-- This is separate from `suspended` (which is a permanent, honest block that sends the
-- user to the /suspended page). Use blocked_until for a quiet, temporary "come back later".

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS blocked_until timestamptz;
