-- Backfill profiles for auth users that have no profiles row (created before the
-- handle_new_user trigger existed, or added directly in the dashboard/DB).
-- Run in the Supabase SQL Editor.

-- 1. Check who is missing first:
-- SELECT u.id, u.email, u.created_at
-- FROM auth.users u
-- LEFT JOIN public.profiles p ON p.user_id = u.id
-- WHERE p.user_id IS NULL;

-- 2. Create their profiles. approved = true preserves their current access
--    (they keep using the app and show under Approved with tier 'base').
--    Change `true, now()` to `false, null` if you want to force re-approval instead.
INSERT INTO public.profiles (user_id, full_name, email, approved, approved_at)
SELECT u.id,
       u.raw_user_meta_data->>'full_name',
       u.email,
       true,
       now()
FROM auth.users u
LEFT JOIN public.profiles p ON p.user_id = u.id
WHERE p.user_id IS NULL
ON CONFLICT (user_id) DO NOTHING;
