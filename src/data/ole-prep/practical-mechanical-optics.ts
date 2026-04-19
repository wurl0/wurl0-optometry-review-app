import { OlePrepData } from '@/lib/ole-prep-types'

export const practicalMechanicalOpticsData: OlePrepData = {
  subject: 'Practical and Mechanical Optics',
  slug: 'practical-mechanical-optics',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Impact Resistance Ranking',
          device: 'Police Can Grab Ordinary suspects (P-C-G-O)',
          breakdown: 'Polycarbonate > CR-39 (high-index plastic first, then CR-39) > Glass Ordinary. Full ranking: Polycarbonate > High-Index Plastic > CR-39 > Ordinary Glass. Polycarbonate passes the FDA drop-ball test most readily: 5/8-inch steel ball dropped from 50 inches.',
        },
        {
          kind: 'mnemonic',
          term: 'Abbe Value Rule',
          device: 'Higher Abbe = Happier Eyes (Less color fringe)',
          breakdown: 'Higher Abbe value = less chromatic aberration = clearer peripheral vision. Abbe 60 = least chromatic aberration. Abbe 30 = most chromatic aberration. Polycarbonate Abbe = 30 (worst). CR-39 and glass Abbe ≈ 58 (best among common materials). Lower RI materials generally have higher Abbe values.',
        },
        {
          kind: 'mnemonic',
          term: 'Lens Power Types — Back vs Front Vertex',
          device: 'BACK = BOWL down (concave faces you); FRONT = DOME up (convex faces you)',
          breakdown: 'To measure Back Vertex Power (BVP): place the CONCAVE (bowl/back) surface against the lens stop. To measure Front Vertex Power (FVP/neutralizing power): place the CONVEX (dome/front) surface against the lens stop. BVP is the standard lensometer reading. FVP is used for hand neutralization and measures power at the front surface.',
        },
        {
          kind: 'mnemonic',
          term: 'Slab-Off Rule',
          device: 'MOST MINUS → Slab (Regular); MOST PLUS → Reverse Slab',
          breakdown: 'Regular slab-off: ground on the lens with the MOST MINUS (or LEAST PLUS) power on the 90° meridian; creates BASE UP prism in reading area. Reverse slab-off: molded on the MOST PLUS (or LEAST MINUS) lens; creates BASE DOWN prism. Two minus lenses: slab on highest minus. Two plus lenses: slab on lowest plus. One plus and one minus: slab on the minus lens.',
        },
        {
          kind: 'mnemonic',
          term: 'Image Jump by Bifocal Type — "K-F-U-E Go Jump"',
          device: 'Kryptok 11mm, Flat top 7mm, Ultex 20mm, Executive 0mm',
          breakdown: 'Distance from upper dividing line to optical pole determines image jump (I = h × D). Kryptok = 11mm; Flat Top = 7mm; Ultex = 20mm; Executive = 0mm (NO image jump). Executive = zero because the optical pole IS at the dividing line.',
        },
        {
          kind: 'mnemonic',
          term: 'Positional Power Direction — Plus and Minus Lenses',
          device: 'Plus: Away = Less, Toward = More. Minus: Away = More, Toward = Less.',
          breakdown: 'Moving a plus lens away from the eye DECREASES its effective plus power. Moving a plus lens toward the eye INCREASES its effective plus power. The reverse is true for minus lenses. Clinically: if a plus lens sits too far from the eye (vertex > prescribed), it undercorrects. For minus lenses, too far = overcorrects.',
        },
        {
          kind: 'mnemonic',
          term: 'Photochromic Lens Limitations',
          device: 'Cars Block UV = Photochromics Fail In Cars',
          breakdown: 'Photochromic lenses require UV light to darken. Car windshields block UV. Therefore, photochromic lenses do NOT darken adequately while driving. They also perform less well in high heat (summer) and darken more in cold. Organic photochromics (Transitions) are temperature-sensitive; glass photochromics use silver halide and are more consistent.',
        },
        {
          kind: 'mnemonic',
          term: 'Boxing System "A and B"',
          device: 'A = Across (horizontal eye size); B = Bottom-to-top (vertical depth)',
          breakdown: '"A" measurement = horizontal (side-to-side) distance of lens box = eye size. "B" measurement = vertical (top-to-bottom) distance = frame depth. DBL = Distance Between Lenses (bridge). DBC = Distance Between Centers = A + DBL = frame PD. Mechanical center = 2mm ABOVE the geometric center.',
        },
        {
          kind: 'mnemonic',
          term: 'Pantoscopic Tilt OC Rule',
          device: '1 degree tilt = OC drops 0.5 mm (half-millimeter)',
          breakdown: 'For every 1 degree of pantoscopic tilt, lower the optical center by 0.5 mm. Pantoscopic tilt angles the bottom of the frame closer to the face. Typical range is 8–12 degrees. If there is decentration, it induces prismatic effect — this is the key troubleshooting principle for progressive lens fitting.',
        },
        {
          kind: 'mnemonic',
          term: 'Specific Gravity of Key Materials (Heaviest to Lightest)',
          device: 'Extra Dense Flint is Heaviest → Trivex is Lightest',
          breakdown: 'Heaviest to lightest by SG: Extra Dense Flint (4.02) > Dense Flint (3.53) > Dense Barium (3.36) > Light Barium (3.21) > Barium Crown (2.99) > Ophthalmic Crown Glass (2.54) > CR-39 (1.32) > Polycarbonate (1.20) > Trivex (1.11). Trivex is the lightest overall. Polycarbonate is lightest among plastics commonly used.',
        },
      ],
    },
    {
      id: 'high-yield-facts',
      title: 'High-Yield Facts',
      icon: '⚡',
      items: [
        {
          kind: 'fact',
          content: 'Ophthalmic Crown glass is the most commonly used glass lens material: 70% silica, 14-16% sodium oxide, 11-13% calcium oxide. RI = 1.523, Abbe = 58.9, SG = 2.54. It is the standard for single-vision glass lenses and distance portions of glass bifocals.',
          highlight: 'Ophthalmic Crown: RI 1.523, Abbe 58.9, SG 2.54 — the reference standard for glass',
        },
        {
          kind: 'fact',
          content: 'Polycarbonate is the most impact-resistant lens material and is preferred for children and sports eyewear. RI = 1.586, Abbe = 30 (lowest — most chromatic aberration), SG = 1.20 (one of the lightest). It absorbs 100% of UV up to 380nm without additional coating. Center thickness can be ground to 1.2mm.',
          highlight: 'Polycarbonate: most impact-resistant; Abbe 30 (worst CA); absorbs 100% UV; preferred for children/sports',
        },
        {
          kind: 'fact',
          content: 'CR-39 (Columbia Resin 39) was developed by Pittsburgh Plate Glass industries. It is a thermosetting plastic. RI = 1.498, Abbe = 58, SG = 1.32. It has half the weight of ophthalmic crown glass. It does not fog, does not allow welding spatter to stick, and can be tinted to any color. Disadvantage: soft and scratches easily.',
          highlight: 'CR-39: thermosetting; half weight of crown; Abbe 58; developed by Pittsburgh Plate Glass; no fogging',
        },
        {
          kind: 'fact',
          content: 'Trivex (Phoenix/Triology) has the lowest specific gravity (1.11) — lightest of all materials. RI = 1.532, Abbe = 40–45. It is more rigid than polycarbonate, making it the best choice for rimless (drill-mount) frames. Similar to polycarbonate but with better optical quality. Disadvantage: scratches easily.',
          highlight: 'Trivex: lightest (SG 1.11); most rigid (best for rimless frames); better optics than polycarbonate',
        },
        {
          kind: 'fact',
          content: 'The lensometer (focimeter/vertometer) default measures BACK VERTEX POWER (BVP) — concave side of lens faces the examiner (placed against the lens stop). To measure front vertex power (FVP), convex side is placed against the lens stop. Always check the right lens first. The reticle is focused by the eyepiece before inserting the lens.',
          highlight: 'Lensometer: BVP = concave (back) against stop; FVP = convex (front) against stop; right lens first',
        },
        {
          kind: 'fact',
          content: 'Hand neutralization measures the FRONT VERTEX POWER of a lens. Against motion observed = plus lens (neutralize with plus trial lens). With motion observed = minus lens (neutralize with minus trial lens). For toric lenses: rotational motion is seen — use rotation to find cylinder axis; neutralize one limb at a time. This method is more accurate for low-power lenses than for toric lenses.',
          highlight: 'Hand neutralization = front vertex power; against motion = plus; with motion = minus; rotation = cylinder',
        },
        {
          kind: 'fact',
          content: 'Prentice\'s Rule: prism (Δ) = h (cm) × D (diopters). A lens of +5.00D decentered 4mm (0.4 cm) induces 0.4 × 5.00 = 2.0Δ prism. Risley prism formula: Rotary Δ = 2 × Δ × sin θ. Image jump: I = h × D (h = distance from upper dividing line to optical pole in cm; D = reading add).',
          highlight: 'Prentice: Δ = h(cm) × D; Risley: Rotary Δ = 2Δ sin θ; Image jump: I = hD',
        },
        {
          kind: 'fact',
          content: 'Executive bifocals have ZERO image jump because the optical pole of the segment is at the dividing line (h = 0). The executive segment covers the entire bottom half of the lens. Disadvantages: heavy, cosmetically unappealing, segment edge chips, deep cleft gathers dirt. Advantage: widest reading field of any bifocal.',
          highlight: 'Executive bifocal: zero image jump (h=0); widest near field; heavy and cosmetically poor',
        },
        {
          kind: 'fact',
          content: 'Regular slab-off is bicentric grinding that creates BASE-UP prism in the reading area of a lens. It is ground on the lens with the MOST MINUS (or least plus) power on the 90° meridian. Reverse slab-off (molded on plastic) creates BASE-DOWN prism and is placed on the MOST PLUS lens. Slab-off is used when vertical imbalance exceeds 1.5 prism diopters.',
          highlight: 'Slab-off: BU prism on most minus lens; reverse slab-off: BD prism on most plus lens; use when > 1.5Δ imbalance',
        },
        {
          kind: 'fact',
          content: 'Reflectance formula: R = 100(n-1)² / (n+1)². Higher RI = more reflectance. At RI = 1.5: 7.8% per surface. At RI = 1.6: 10.4%. At RI = 1.7: 12.3%. AR coating reduces reflectance by destructive interference. Key clinical implication: high-index lenses always need AR coating more than standard-index lenses.',
          highlight: 'Higher RI = more reflectance; n=1.5 → 7.8%; n=1.6 → 10.4%; AR coating more important for high-index lenses',
        },
        {
          kind: 'fact',
          content: 'Martin\'s formula for lens tilt: S\' = S[1 + (sin²θ / 3)] for general use; S\' = S[1 + (sin²θ / 2n)] when RI is given. Induced cylinder: C\' = S\' × (tan θ)². Pantoscopic/retroscopic tilt induces power changes along 180°. Face form tilt induces changes along 90°. For every 1° of pantoscopic tilt, the OC is lowered by 0.5mm.',
          highlight: 'Martin\'s formula: S\' = S[1 + sin²θ/3]; C\' = S\' × tan²θ; pantoscopic tilt → 180° changes; face form → 90°',
        },
        {
          kind: 'fact',
          content: 'Photochromic lenses do NOT darken adequately inside cars because windshields block UV radiation. They are temperature-sensitive: darker in cold, lighter in heat. Glass photochromics use silver halide crystals; plastic photochromics use organic molecules (e.g., Transitions brand). They cannot be relied upon as sole sun protection when driving.',
          highlight: 'Photochromics fail in cars (UV blocked by windshield); cold = darker; heat = lighter; not reliable for driving',
        },
        {
          kind: 'fact',
          content: 'The DBC (Distance Between Centers) or GCD (Geometric Center Distance) = "A" measurement + DBL. This gives the frame PD. The mechanical center is 2mm above the geometric center — this is where the lens is actually cut and edged. The boxing system was adopted by the Optical Manufacturers Association in 1962.',
          highlight: 'DBC = A + DBL = frame PD; mechanical center = 2mm above GC; boxing system adopted 1962',
        },
        {
          kind: 'fact',
          content: 'Benchwork sequence (CCCCEG): Centering → Layout → Cutting → Chipping → Edging → Glazing (insertion). All centering marks are placed on the FRONT surface of the lens. Glazing = inserting lens into eye wire/rim. Mounting = fitting lens into full rim frame. Drilling = boring holes for rimless/three-piece mounting.',
          highlight: 'Benchwork: Center → Layout → Cut → Chip → Edge → Glaze; all marks on front surface',
        },
      ],
    },
    {
      id: 'board-traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'Which has a higher Abbe value — polycarbonate or CR-39? Which causes more chromatic aberration?',
          wrong: 'Polycarbonate has a higher Abbe value because it is the most used lens material',
          correct: 'CR-39 has the higher Abbe value (58 vs 30). Polycarbonate has the LOWEST Abbe value (30) among common ophthalmic materials and causes the MOST chromatic aberration.',
          why: 'Higher Abbe value = LESS chromatic aberration. Polycarbonate\'s chief optical disadvantage is its low Abbe value (30), causing peripheral color fringing. CR-39 and ophthalmic crown glass have similar Abbe values (~58), making them optically cleaner. High-index lenses generally have lower Abbe values as RI increases.',
        },
        {
          kind: 'trap',
          question: 'To measure front vertex power with the lensometer, which side of the lens faces the lens stop?',
          wrong: 'The concave (back) surface, as usual',
          correct: 'The CONVEX (front) surface is placed against the lens stop to measure front vertex power (FVP). The concave (back) surface against the stop is the standard setup for measuring BACK vertex power (BVP).',
          why: 'Back vertex power (BVP) is the standard lensometer measurement and requires the back (concave) surface against the stop. Front vertex power (FVP) = neutralizing power, and requires the front (convex) surface against the stop. Hand neutralization also measures FVP.',
        },
        {
          kind: 'trap',
          question: 'Does moving a plus lens farther from the eye increase or decrease its effective power?',
          wrong: 'Moving a plus lens farther increases its effective plus power',
          correct: 'Moving a plus lens FARTHER from the eye DECREASES its effective plus power. Moving it TOWARD the eye INCREASES the effective plus power. The opposite is true for minus lenses.',
          why: 'This is tested heavily through vertex distance problems. The formula Df = Dv/(1 − dDv) for a lens moved farther: for a plus lens (Dv > 0), the denominator > 1, so Df < Dv — power decreases. For a minus lens (Dv < 0), the denominator < 1, so the magnitude of power increases. Knowing the direction of change for plus vs minus × toward vs away is essential.',
        },
        {
          kind: 'trap',
          question: 'Which bifocal has zero image jump?',
          wrong: 'Flat top bifocal, because the segment line is straight',
          correct: 'EXECUTIVE bifocal has zero image jump. The optical pole of the segment coincides exactly with the dividing line (h = 0 mm), so I = h × D = 0. Flat top = 7mm; Kryptok = 11mm; Ultex = 20mm.',
          why: 'Image jump formula: I = h × D, where h = distance from upper dividing line to segment optical pole. The executive segment has its optical pole AT the dividing line, making h = 0. This eliminates image jump entirely — the trade-off is that executive lenses are heavy and cosmetically unattractive.',
        },
        {
          kind: 'trap',
          question: 'Regular slab-off is applied to which lens — the most plus or most minus?',
          wrong: 'The most plus lens, to add more base-up prism there',
          correct: 'Regular slab-off is applied to the MOST MINUS (least plus) lens. It creates BASE-UP prism in the reading zone of that lens. Reverse slab-off is applied to the MOST PLUS (least minus) lens and creates BASE-DOWN prism.',
          why: 'The principle: vertical imbalance arises because the more minus (or less plus) lens induces less base-up effect at near. Slab-off adds BU prism to the most minus lens to equalize the prismatic effect. Reverse slab-off is the opposite — it adds BD to the most plus lens instead.',
        },
        {
          kind: 'trap',
          question: 'Trivex or polycarbonate — which is better for rimless frames, and which is more impact resistant?',
          wrong: 'Polycarbonate is better for rimless frames because it is the most impact resistant',
          correct: 'TRIVEX is better for rimless frames because it is MORE RIGID — less likely to crack at the drill holes. Polycarbonate is MORE impact resistant overall. Trivex is lighter but not as thin as polycarbonate.',
          why: 'Polycarbonate flexes under stress, which can cause crack propagation from drill holes in rimless mounts. Trivex\'s greater rigidity makes it more suitable for three-piece/rimless mountings. For impact resistance, polycarbonate remains superior. Know both the clinical use case (rimless = Trivex) and the material property (impact resistance = polycarbonate).',
        },
      ],
    },
    {
      id: 'active-recall',
      title: 'Active Recall',
      icon: '🔁',
      items: [
        {
          kind: 'recall',
          prompt: 'Name the four glass lens types, their refractive indices, and primary clinical uses.',
          answer: '1. Ophthalmic Crown — RI 1.523, Abbe 58.9, SG 2.54 — standard single-vision glass and bifocal distance. 2. Dense Flint — RI 1.616-1.666, Abbe 38, SG 3.53 — bifocal segments in fused bifocals. 3. Barium Crown — RI 1.701, Abbe 31, SG 2.99 — segments in specific fused bifocals (barium increases RI without excess chromatic dispersion). 4. Glass High Index (GHI) — RI 1.600, Abbe 36, SG 1.45 — cosmetically thin high-power lenses.',
        },
        {
          kind: 'recall',
          prompt: 'Compare CR-39, polycarbonate, and Trivex across RI, Abbe value, specific gravity, and best clinical indication.',
          answer: 'CR-39: RI 1.498, Abbe 58, SG 1.32 — standard plastic; best optical quality (least chromatic aberration); half weight of glass. Polycarbonate: RI 1.586, Abbe 30, SG 1.20 — most impact resistant; 100% UV absorption; preferred for children/sports; worst chromatic aberration. Trivex: RI 1.532, Abbe 40-45, SG 1.11 — lightest; most rigid (best for rimless frames); better optical quality than polycarbonate.',
        },
        {
          kind: 'recall',
          prompt: 'What are the five types of lens power? Define each and give the formula where applicable.',
          answer: '1. Nominal (Dn) = D1 + D2 — ignores thickness; thin lens approximation. 2. Equivalent Power (Deq) = D1 + D2 − (t/n)(D1 × D2) — true power; accounts for thickness. 3. Back Vertex Power (BVP) = D1 + D2 + (t/n)(D1)² — standard lensometer reading; concave side against stop. 4. Front Vertex Power (FVP) = D1 + D2 + (t/n)(D2)² — neutralizing power; convex side against stop. 5. Positional/Effective Power — same lens moved; effective power changes with vertex distance.',
        },
        {
          kind: 'recall',
          prompt: 'What are the five methods of neutralization? Which measures front vertex power?',
          answer: '1. Focal length measurement (D = 1/f). 2. Lens measure (Geneva lens clock) — measures surface curvature; use True & Marked Power formula for non-1.530 glass. 3. Caliper — measures thickness difference (sagitta). 4. Hand neutralization (trial case) — MEASURES FRONT VERTEX POWER; against motion = plus; with motion = minus; rotation = toric. 5. Lensometer — measures BACK vertex power (standard); most commonly used in practice.',
        },
        {
          kind: 'recall',
          prompt: 'State Prentice\'s Rule. A prescription calls for +4.00D with 1.5Δ BI prism. What decentration is needed, and in which direction?',
          answer: 'Prentice\'s Rule: Δ = h (cm) × D. Rearranged: h = Δ / D = 1.5 / 4.00 = 0.375 cm = 3.75 mm. Direction: for a plus lens, BI prism = decentration INWARD (nasal) — the prism base is in, so the optical center moves toward the nose. Key: always convert h to cm for Prentice\'s Rule.',
        },
        {
          kind: 'recall',
          prompt: 'State the image jump distances for each bifocal type and the formula for image jump.',
          answer: 'Formula: I = h × D (h in cm, D = reading add). Distances from upper dividing line to optical pole: Executive = 0mm (zero image jump). Flat Top (D-seg) = 7mm. Kryptok (KK) = 11mm. Ultex = 20mm. Example: Flat top add +2.50 → I = 0.7 × 2.50 = 1.75Δ image jump. The distance portion power does NOT affect image jump — only the add and segment distance (h).',
        },
        {
          kind: 'recall',
          prompt: 'What is slab-off? When is it used? On which lens is regular slab-off vs reverse slab-off applied?',
          answer: 'Slab-off (bicentric grinding) corrects vertical imbalance by creating a second optical center that adds prism to the reading zone. Used when vertical imbalance > 1.5 prism diopters. Regular slab-off: ground on MOST MINUS (least plus) lens; creates BASE-UP prism; applied to back surface of glass lens. Reverse slab-off: molded on MOST PLUS (least minus) lens; creates BASE-DOWN prism; molded on convex side of plastic lens.',
        },
        {
          kind: 'recall',
          prompt: 'Describe the steps of lensometer operation for measuring a spherocylindrical lens.',
          answer: '1. Focus eyepiece: set power wheel to zero; turn eyepiece CCW then slowly CW until reticle is in sharp focus. 2. Insert glasses, right lens first; place CONCAVE (back) surface against lens stop. 3. Center the lens; rotate power wheel to find first clear sharp LINES (1st meridian). 4. Read the 1st meridian power. 5. Rotate power wheel until lines are sharp again 90° away (2nd meridian). 6. Read 2nd meridian power. 7. Cylinder = difference between 1st and 2nd readings; axis = the first meridian where lines were found. Note: circle of dots = sphere only.',
        },
        {
          kind: 'recall',
          prompt: 'Define the boxing system "A" and "B" measurements, DBL, DBC, and mechanical center.',
          answer: '"A" measurement (eye size) = horizontal distance between widest points of lens box. "B" measurement (frame depth) = vertical distance of lens box. DBL (Distance Between Lenses) = shortest distance between nasal edges = bridge size. DBC (Distance Between Centers) = A + DBL = frame PD. Mechanical center = 2mm ABOVE the geometric center (GC); this is where the lens is cut and edged. Datum line = horizontal line through vertical center of frame. Seg drop = distance from datum line to top of bifocal segment.',
        },
        {
          kind: 'recall',
          prompt: 'What does Martin\'s formula calculate? Give the two formula versions and state which axis is affected by pantoscopic vs face form tilt.',
          answer: 'Martin\'s formula calculates the new sphere power (S\') and induced cylinder (C\') when a lens is tilted. General: S\' = S[1 + (sin²θ / 3)]. With RI: S\' = S[1 + (sin²θ / 2n)]. Induced cylinder: C\' = S\' × (tan θ)². Pantoscopic/retroscopic tilt → affects 180° axis (induced cylinder at 180°). Face form tilt → affects 90° axis (induced cylinder at 90°). No rounding needed for Martin\'s formula answers — informational only. Pantoscopic OC rule: lower OC 0.5mm per 1° of tilt.',
        },
      ],
    },
  ],
}
