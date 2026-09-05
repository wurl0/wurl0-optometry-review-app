-- Run this in Supabase SQL Editor.
-- Adds account suspension: a reversible block that preserves approved + tier + grants.
-- A suspended user is treated like an unapproved one by the middleware, but their
-- access can be restored in one click without re-granting anything.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS suspended         boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS suspended_at      timestamptz,
  ADD COLUMN IF NOT EXISTS suspended_reason  text;
