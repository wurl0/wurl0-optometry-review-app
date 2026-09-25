-- Reconcile duplicate stems in public.questions. Idempotent: safe to re-run any time.
--
-- A duplicate keeps its row (history, provenance) but points canonical_id at its master; the
-- future build step emits only rows where canonical_id is null.
--
-- 2026-09-25: the 5 physiologic-optics / theoretical-optics pairs. All are schematic-eye and
-- refraction basics the TOS tests under physiologic optics (B), so the physiologic-optics copy
-- is master. Both copies now carry an answer-stating explanation (weak twins were upgraded
-- from their pair's text, in the table).

update public.questions dup
set    canonical_id = master.id
from   public.questions master
where  dup.subject    = 'theoretical-optics'
  and  master.subject = 'physiologic-optics'
  and  dup.stem_hash  = master.stem_hash
  and  dup.source = 'bank' and master.source = 'bank'
  and  dup.canonical_id is distinct from master.id;

-- 2026-09-25: "The superior oblique muscle is innervated by:" sits in binocular-vision and
-- ocular-anatomy. Nerve supply is anatomy (A), and the ocular-anatomy copy explains more, so it is master.
update public.questions dup
set    canonical_id = master.id
from   public.questions master
where  dup.subject    = 'binocular-vision'
  and  master.subject = 'ocular-anatomy'
  and  dup.stem_hash  = master.stem_hash
  and  dup.source = 'bank' and master.source = 'bank'
  and  dup.canonical_id is distinct from master.id;

-- Report anything still duplicated and unreconciled (should be 0 rows).
select stem_hash, array_agg(subject || ':' || id order by id) as rows
from   public.questions
where  canonical_id is null
group  by stem_hash
having count(*) > 1;
