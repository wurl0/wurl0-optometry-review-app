-- Run this in the Supabase SQL Editor to sync the Daily Queue check-offs across devices.
--
-- The Daily Queue (public/top2/00-Master-Index/Daily-Queue.html) used to store its
-- check-offs in localStorage, so a box ticked on a laptop never showed on a phone. This
-- table moves that state server-side, one row per ticked item, keyed to the user.
--
-- item_id is the queue's own "day_ticket" key (e.g. "3_0" = day index 3, ticket 0). It is
-- deterministic from the fixed START date in the page, so the same item has the same id on
-- every device. The page keeps writing localStorage too, as an instant offline cache; this
-- table is the shared source of truth it reconciles against on load.

create table if not exists daily_queue (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  item_id    text not null,                 -- "<dayIndex>_<ticketIndex>", e.g. "3_0"
  checked    boolean not null default false,
  updated_at timestamptz default now(),
  unique (user_id, item_id)
);

alter table daily_queue enable row level security;

grant select, insert, update, delete
  on public.daily_queue
  to authenticated;

create policy "Users manage their own daily queue"
  on daily_queue for all
  using (auth.uid() = user_id);
