-- Clear the stale preboard answer-key cards from the SRS review queue.
--
-- Context: 9 answer keys were corrected in the MCU Preboards Set 1 banks (Jul 22, 2026;
-- items D-46/57/80/91/97, B-43, F-33, C-4/115). The queue stores a payload SNAPSHOT per
-- row (Top 2 questions live in static HTML the server cannot read), so any card harvested
-- BEFORE the build was corrected still holds the old wrong 'correct' index and keeps
-- drilling it. This resets those.
--
-- Excluded on purpose:
--   D-80  -> stem hashes to 7178fbac-28, already cleared by fix-prism-srs-cleanup.sql.
--   F-4, F-35 -> answer was never wrong in the queue (only the JSON source stem drifted).
--
-- The SQL Editor runs as postgres and BYPASSES row-level security, so this touches ALL
-- users' rows. That is correct here. To scope to yourself, add
--   and r.user_id = '<your-uuid>'
-- to the DELETE (and payload UPDATEs).

-- 1) LOOK FIRST: which targeted cards exist, and which are stale.
with expected(question_id, correct) as (values
  ('f5856f29-22', 1),  -- D-57
  ('ae81ddd4-4s', 2),  -- D-46
  ('c75d1472-53', 3),  -- D-91
  ('8ef2dc5c-4v', 3),  -- D-97
  ('cc80f7d6-3m', 0),  -- B-43
  ('2d1f9de5-66', 3),  -- F-33
  ('cfbda4ab-2n', 3),  -- C-4
  ('a0695704-19', 3)  -- C-115
)
select r.question_id, r.subject, r.source, r.box, r.due_on, r.retired,
       (r.payload->>'correct') as stored_correct, e.correct as should_be,
       case when (r.payload->>'correct') is distinct from e.correct::text
            then 'STALE' else 'ok' end as status
from question_reviews r join expected e using (question_id)
order by status;


-- OPTION A (recommended): drop only the STALE cards. Correctly-harvested or absent
-- cards are left untouched. A dropped card re-enters with the corrected payload the next
-- time you take that preboard and miss it.
with expected(question_id, correct) as (values
  ('f5856f29-22', 1),  -- D-57
  ('ae81ddd4-4s', 2),  -- D-46
  ('c75d1472-53', 3),  -- D-91
  ('8ef2dc5c-4v', 3),  -- D-97
  ('cc80f7d6-3m', 0),  -- B-43
  ('2d1f9de5-66', 3),  -- F-33
  ('cfbda4ab-2n', 3),  -- C-4
  ('a0695704-19', 3)  -- C-115
)
delete from question_reviews r
using expected e
where r.question_id = e.question_id
  and (r.payload->>'correct') is distinct from e.correct::text;


-- OPTION B (instead of A): keep history, overwrite the stale payload with the corrected
-- snapshot, and send the card to the bottom rung due tomorrow. Run these only if you
-- prefer resurfacing on schedule over meeting the item again.
update question_reviews set  -- D-57  correct -> 1
  payload = '{"stem": "A “Hi-Drop” lens would most likely be used for what type of vision condition?", "options": ["Partial sight (low vision)", "Aphakia", "Aniseikonia", "Nystagmus"], "correct": 1, "explanation": "A ''Hi-Drop'' (high, dropped segment) design supplies a large near reading area used in APHAKIA, where the patient needs strong plus and a wide near field after cataract/lens removal. Not for low-vision magnifiers, aniseikonia, or nystagmus. Cross-link: aphakic optics also explain the field/ring-scotoma issues in Q40."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'f5856f29-22'
  and (payload->>'correct') is distinct from '1';

update question_reviews set  -- D-46  correct -> 2
  payload = '{"stem": "Given the following FT-35 bifocal prescription: +2.00 DS with a +2.50 D add, O.U. (both eyes) PD’s = 66/62 mm How could you induce a 1D base in prismatic effect, per eye, at near only?", "options": ["Use a 56 mm distance PD", "Use a 60 mm near PD", "Use a 54 mm near PD", "Can’t be done"], "correct": 2, "explanation": "Prentice: prism = decentration (cm) x power. The near prism comes from the ADD, not the distance Rx, which is exactly why changing the NEAR PD moves prism at near only. Per eye: d = prism / F = 1.00 / 2.50 = 0.40 cm = 4 mm of inward decentration. Both eyes: near PD 62 - (2 x 4) = 54 mm. Answer: use a 54 mm near PD. Check the distractor: a 60 mm near PD is only 1 mm per eye, giving 0.1 x 2.50 = 0.25 D, a quarter of what was asked. Why base-IN: with plus segs, eyes reading nasal to the seg optical centres throw the base toward the nose."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'ae81ddd4-4s'
  and (payload->>'correct') is distinct from '2';

update question_reviews set  -- D-91  correct -> 3
  payload = '{"stem": "An opaque object with a diameter of 10 inches is 35 inches from a light source whose diameter is 8 inches. A screen is 30 inches behind the opaque object   . What is the area of the shadow?", "options": ["508.31 in¬2", "510.62 in¬2", "616.19 in¬2", "107. 88 in¬2"], "correct": 3, "explanation": "Source diameter 8 in (radius 4) is SMALLER than the object (radius 5), so a true umbra forms and it grows with distance. Umbra radius on the screen = R_obj + (R_obj - R_src) x D/d, with d = 35 in from source to object and D = 30 in from object to screen. = 5 + (5 - 4) x 30/35 = 5 + 0.857 = 5.86 in. Area = pi x 5.86^2 = 107.88 in^2. For contrast the outer PENUMBRA edge is 5 + (5 + 4) x 30/35 = 12.71 in, area pi x 12.71^2 = 508.31 in^2, which is the listed distractor. ''Area of the shadow'' means the full-dark umbra, so 107.88 is the answer. Trap: the two edge formulas differ only in the sign between R_obj and R_src. Subtract for umbra, add for penumbra."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'c75d1472-53'
  and (payload->>'correct') is distinct from '3';

update question_reviews set  -- D-97  correct -> 3
  payload = '{"stem": "A circular aperture with a diameter of 30in is located 120in from a point source. The shadow is formed on a screen 360in from the aperture. What will be the area of illumination?", "options": ["180,956.16in2", "101,787.84in2", "407,151.36in2", "11309.76in2"], "correct": 3, "explanation": "Light spreads from a point source, so the lit patch is just the aperture scaled up by how much further the screen sits. Source to aperture = 120 in. Aperture to screen = 360 in. So source to screen = 480 in. Patch diameter = 30 x (480 / 120) = 30 x 4 = 120 in, radius 60 in. Area = pi x 60^2 = 3600 pi = 11,309.76 in^2. Both distances are measured from the SOURCE. Using 360/120 = 3 instead gives a 90 in patch and about 6,362 in^2, which is the usual slip. The keyed 180,956.16 is pi x 240^2, i.e. treating 480 as a radius, which is not a quantity in this problem. Contrast with the opaque-object shadow (Q91): same similar triangles, but there you track the dark region instead of the lit one."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = '8ef2dc5c-4v'
  and (payload->>'correct') is distinct from '3';

update question_reviews set  -- B-43  correct -> 0
  payload = '{"stem": "A Hirschberg test reveals a corneal light reflex that is displaced temporally by 1 mm in the right eye. This finding corresponds to:", "options": ["15 degrees of esotropia", "15 degrees of exotropia", "30 degrees of esotropia", "30 degrees of exotropia"], "correct": 0, "explanation": "The corneal reflex shifts OPPOSITE to the way the eye turns, because the reflex is a mirror image off the cornea rather than a marker on it. An eye rotated nasally (esotropia) throws its reflex TEMPORALLY. So a reflex displaced temporally by 1 mm in the right eye means ESOtropia. Magnitude: Hirschberg runs at about 15 degrees (roughly 7 prism dioptres) per millimetre of decentration, so 1 mm = 15 degrees. Answer: 15 degrees of esotropia. Cross-check against the landmarks: reflex at the pupil margin is about 15 degrees, mid-iris about 30, limbus about 45. The old key said exotropia. Get the direction by picturing the mirror: the eye turns in, the reflection slides out."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'cc80f7d6-3m'
  and (payload->>'correct') is distinct from '0';

update question_reviews set  -- F-33  correct -> 3
  payload = '{"stem": "An electronic magnifier magnifies a target with a size of 20/40 to 20/200; While the screen of the magnifier is placed 50cm away and if the patient moves nearer to the screen to 20cm what is the total magnification produced?", "options": ["2.5X.", "5X.", "7.5X.", "12.5X."], "correct": 3, "explanation": "Two separate magnifications are in play and they MULTIPLY, they do not add. Device magnification: the screen turns a 20/40-sized target into a 20/200-sized image, so 200/40 = 5X. Relative distance magnification: moving from 50 cm to 20 cm gives 50/20 = 2.5X. Total = 5 x 2.5 = 12.5X. Answer: 12.5X. Read the distractor set and the design is obvious: 2.5X is the approach alone, 5X is the screen alone, 7.5X is 5 + 2.5 for anyone who adds instead of multiplying, and 12.5X is the product. The old key was 2.5X, which counts only the approach and discards the screen''s own enlargement, but the question asks for TOTAL magnification."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = '2d1f9de5-66'
  and (payload->>'correct') is distinct from '3';

update question_reviews set  -- C-4  correct -> 3
  payload = '{"stem": "Given the prescription +1.00S = +1.00C x 090, how much of the +1.00 cylinder is in effect at axis 090?", "options": ["100%", "75%", "50%", "0%"], "correct": 3, "explanation": "A cylinder has ZERO power along its own axis and full power 90 degrees away. Formally the power at an angle t from the axis is F sin^2(t), so on the axis t = 0 and F sin^2(0) = 0. The Rx is +1.00S = +1.00C x 090, so 090 IS the cyl axis. Asking how much cyl acts at 090 is asking how much acts on its own axis: none of it. Answer: 0%. The full +1.00 acts at 180, and at 45 you would get sin^2(45) = 0.5, so half. The old key read 100%, which is what you get by treating ''axis 090'' as the power meridian. The ''x 090'' notation always names the axis, never the meridian where the power lands."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'cfbda4ab-2n'
  and (payload->>'correct') is distinct from '3';

update question_reviews set  -- C-115  correct -> 3
  payload = '{"stem": "What is the amount of physiologic astigmatism?", "options": ["-0.50 cyl x 90", "-0.50 WTR", "-0.50 cyl X 180", "Both b and c"], "correct": 3, "explanation": "Physiologic astigmatism is about 0.50 D WITH-THE-RULE, because the average young cornea is slightly steeper vertically. Correcting a steeper vertical meridian in minus-cyl form puts the axis at 180. So ''-0.50 WTR'' and ''-0.50 cyl x 180'' are two names for the same thing, and both b and c are correct. Answer: Both b and c. Option a, -0.50 cyl x 90, is against-the-rule, the opposite orientation."}'::jsonb,
  box = 0, due_on = current_date + 1, retired = false, updated_at = now()
where question_id = 'a0695704-19'
  and (payload->>'correct') is distinct from '3';


-- ─────────────────────────────────────────────────────────────────────────────────
-- ROUND 2 (Jul 22, 2026): D-114 "expected lens movement of an RGP lens during a blink"
--
-- DIFFERENT bug class from round 1. Here the wrong key sat in the JSON source AND the
-- build identically (both said D, "Excessive movement with lens displacement"), so the
-- source-vs-build diff could not see it. Its own rationale says ~1.0-2.0 mm, and the same
-- question in Preboards Set 2 (D-67) is keyed correctly, which is what exposed it.
-- Corrected to index 2 (C, "1.0-2.0 mm of movement") in the JSON, the .html twin, AND
-- public/top2/D-Preboards-2025.html.
--
-- Because the BUILD was wrong too, every harvest of this card is stale, not just old ones.

-- Look first.
select question_id, subject, source, box, due_on, reps, lapses, retired,
       payload->>'correct' as stored_correct
from question_reviews
where question_id = '23bdba8a-1s';

-- Drop it. Re-enters with the corrected payload next time it is met and missed.
delete from question_reviews
where question_id = '23bdba8a-1s'
  and (payload->>'correct') is distinct from '2';

-- ROUND 2b (Jul 22, 2026): two more of the same "key contradicts its own rationale" class,
-- both wrong in the JSON source AND the build, both found while Wyrlo cleared his queue.
--   D-120 orthokeratology end-of-day blur: rationale says INSUFFICIENT overnight wear
--         -> corrected D to B (index 1).
--   D-138 diffuse corneal staining: rationale argues solution toxicity/SICS the whole way
--         -> corrected D to B (index 1, "Allergic reaction to lens solution").
select question_id, subject, source, box, due_on, retired,
       payload->>'correct' as stored_correct
from question_reviews
where question_id in ('c0420ac5-33', 'bb344c74-2u');

delete from question_reviews
where question_id = 'c0420ac5-33' and (payload->>'correct') is distinct from '1';

delete from question_reviews
where question_id = 'bb344c74-2u' and (payload->>'correct') is distinct from '1';

-- ROUND 2c (Jul 22, 2026): D-81 decentration for 4Δ with -5.75 sph. DEFECTIVE ITEM,
-- not a wrong key. Options B "7 mm" and C "0.7 cm" are the same quantity (d = 4/5.75 =
-- 0.696 cm = 6.96 mm), so both are correct and the item cannot be graded as written.
-- Rationale rewritten to say so and errata set true. Card dropped so it stops grading
-- a correct "0.7 cm" as a miss.
--
-- NOTE: errata/flag does NOT exclude an item from the queue, so this will re-enter if
-- met and missed again. Decide whether to replace option C or filter flagged items.
delete from question_reviews where question_id = 'f9b72d05-2g';

-- ROUND 3 (Jul 22, 2026): 10 items from the emphasis-based audit across all 8 banks.
-- 14 of the 24 candidates were false positives (key correct, rationale merely naming a
-- distractor, plus EXCEPT questions the heuristic cannot read). These 10 are real:
--   C-119 5/6 of eyeball -> Sclera        C-121 -1.00=+1.00x180 -> ATR simple myopic
--   C-130 dull slow WITH -> High hyperopia C-131 myopia onset -> monitor axial length
--   G-40  benzalkonium   -> preservative   H-91  advertising w/o PRC -> illegal RA 8050
--   E-13  dilated veins  -> venous dilation E-79 newborn cloudy cornea -> congenital glaucoma
--   C-112 and D-100 are DEFECTIVE/disputed, errata set true (C-112 has two identical
--   'Compound myopic' options; D-100 is an inverse-square vs 'Law of Intensity' naming
--   dispute the rationale itself asks to flag).
-- errata now excludes an item from FUTURE harvests, but does not remove rows already in
-- the queue, so both are included in the delete below.
with expected(question_id, correct) as (values
  ('9528391d-21', 1),  -- bank 04 id 119
  ('65d44d0e-2h', 3),  -- bank 04 id 121
  ('27406bd1-3t', 0),  -- bank 04 id 130
  ('a3b874a7-8k', 1),  -- bank 04 id 131
  ('a237a259-2s', 1),  -- bank 04 id 112 [errata]
  ('521d7894-1c', 2),  -- bank 06 id 40
  ('ba04d303-1t', 1),  -- bank 07 id 91
  ('ecdde6b8-3a', 1),  -- bank 08 id 13
  ('1f419307-2w', 0),  -- bank 08 id 79
  ('9ed985c8-41', 2)  -- bank 01 id 100 [errata]
)
select r.question_id, r.subject, r.source, r.box, r.due_on,
       (r.payload->>'correct') as stored_correct, e.correct as should_be
from question_reviews r join expected e using (question_id);

with expected(question_id, correct) as (values
  ('9528391d-21', 1),  -- bank 04 id 119
  ('65d44d0e-2h', 3),  -- bank 04 id 121
  ('27406bd1-3t', 0),  -- bank 04 id 130
  ('a3b874a7-8k', 1),  -- bank 04 id 131
  ('a237a259-2s', 1),  -- bank 04 id 112 [errata]
  ('521d7894-1c', 2),  -- bank 06 id 40
  ('ba04d303-1t', 1),  -- bank 07 id 91
  ('ecdde6b8-3a', 1),  -- bank 08 id 13
  ('1f419307-2w', 0),  -- bank 08 id 79
  ('9ed985c8-41', 2)  -- bank 01 id 100 [errata]
)
delete from question_reviews r using expected e
where r.question_id = e.question_id
  and (r.payload->>'correct') is distinct from e.correct::text;
