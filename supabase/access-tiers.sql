-- Tiered, item-level access control for the Top 2 reviewer.
-- Run this in the Supabase SQL Editor. Safe to re-run (idempotent).

-- Per-user access shape. Default 'base' = original app only.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS tier text NOT NULL DEFAULT 'base';

-- Per-user list of granted content item IDs (e.g. {"A.exam","A.preboards-set2"}).
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS grants text[] NOT NULL DEFAULT '{}';

-- Restrict tier to known values.
DO $$
BEGIN
  ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_tier_chk CHECK (tier IN ('base','select','full','admin'));
EXCEPTION
  WHEN duplicate_object THEN NULL;  -- constraint already present
END $$;

-- RLS unchanged: the existing "Users can view own profile" SELECT policy already lets
-- middleware read tier and grants. Writes to other users' rows stay server-side only,
-- via the admin API routes using the service-role client.
