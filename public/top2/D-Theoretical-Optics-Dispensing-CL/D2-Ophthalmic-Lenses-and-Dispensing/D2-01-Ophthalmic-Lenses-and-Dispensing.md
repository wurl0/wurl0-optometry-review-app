# WAA | Board Review 2026
## D2-01 — Ophthalmic Lenses and Dispensing
*Personal study notes | TOS: D.2 | Syllabi: Ophthalmic Optics Sections 1.0–9.0*

---

## The Simple Version

An ophthalmic lens is not just a piece of plastic or glass — it is a precisely engineered optical element with properties that determine how well a patient sees. The material sets the optical and mechanical baseline: index of refraction controls thickness, Abbe value controls color fringing, and specific gravity controls weight. The lens form determines aberrations for off-axis viewing. Absorptive lenses add a second function: they selectively block wavelengths that harm or discomfort the eye. Dispensing ties everything together — frame selection, fitting, adjustment, and verification to ensure the patient gets exactly what was prescribed.

**Teaching angle:** Ask students — "Why would you not give polycarbonate lenses to a patient who spends all day reading reports at a computer?" The Abbe value of 30 means significant color fringing in peripheral gaze — and for a desk worker who reads through the lens periphery all day, CR-39 (Abbe 58) would be far more comfortable.

---

## But Why?

**Why does higher index allow a thinner lens?**
Because higher index material bends light more per unit of surface curvature. Less curvature is needed to achieve the same dioptric power — and less curvature means the lens can be ground thinner without losing its corrective effect.

**Why does higher index also cause more color fringing (lower Abbe value)?**
Because any refracting material bends different wavelengths by slightly different amounts — this is dispersion. Higher-index materials have greater dispersion (more difference in n across wavelengths), so when viewing off-axis, white light separates into visible colors at the lens periphery.

**Why is polycarbonate the best choice for children and sports?**
Because its Dk/t (oxygen transmissibility equivalent for lenses is not the issue here — rather impact resistance) is extraordinarily high. Polycarbonate can withstand a 5/8-inch steel ball dropped from 50 inches without fracturing — the gold standard for safety eyewear. CR-39 and glass would shatter under the same impact.

---

## The Details

### Terminology Unpacked

| Term | Meaning | Context |
|---|---|---|
| Abbe value (ν) | Named after Ernst Abbe | Measure of chromatic dispersion; higher = less aberration; ν = (nD − 1)/(nF − nC) |
| Specific gravity (SG) | Density relative to water | Higher SG = heavier lens |
| Absorptive lens | — | Lens that selectively blocks specific wavelengths |
| Photochromic | Greek *photos* + *chroma* | Lens that darkens on UV exposure via silver halide reaction |
| Slab-off (bicentric grinding) | — | Corrects differential vertical prismatic effect in anisometropia |
| Prism ballast | — | Base-down prism in toric CL to stabilize orientation |
| CPF filter | Corning Contrast Preservation Filter | Longpass filter for low vision patients |
| UV 400 | — | Blocks all UV below 400 nm; current gold standard |
| Wratten filter | Named after Frederick Wratten | Gelatin/glass trial filter for low vision assessment |

---

### How It Works — The Mechanism

**Lens material properties — the key trade-offs:**

Higher index → thinner lens → more CA (lower Abbe) → more reflectance at surfaces
Lower Abbe → more color fringing in periphery → patient complaint of "blur at sides"

```
n-Abbe-SG RELATIONSHIP:
 n ↑ (higher index) → Abbe ↓ (more CA) → SG usually ↓ (lighter) or variable
 Exception: Trivex (n=1.532, Abbe=43-45) — good middle ground

IMPACT RESISTANCE ORDER (best to worst):
 Polycarbonate > High-index plastic > CR-39 > Crown glass
```

**Photochromic lens mechanism:**

```
UV EXPOSURE (outdoors):
Silver halide crystals → UV breaks Ag-X bond → Ag⁰ atoms form → lens darkens
(Reaction: AgX + UV → Ag + X)

NO UV (indoors, car):
Reaction reverses → Ag⁰ reassociates with X → lens clears

Darkening time: 30–60 seconds
Clearing time: 2–5 minutes (longer in cold; faster in warm)
LIMITATION: Car windshield blocks UV → photochromic lens does NOT activate in car
```

**Absorptive lens wavelength action:**

```
CPF FILTERS (longpass — blocks everything BELOW the cutoff):
 CPF 450 → cuts < 450 nm → light yellow → early changes
 CPF 511 → cuts < 511 nm → yellow-orange → cataract, aniridia
 CPF 527 → cuts < 527 nm → orange → RP, glaucoma, ARMD
 CPF 550 → cuts < 550 nm → amber-red → achromatopsia, severe photophobia
 Rule: Higher CPF number → longer cutoff → more filtered → darker appearance

WRATTEN FILTERS (trial filters for LV assessment):
 #12 Yellow → ~500 nm cutoff → mild contrast enhancement
 #15 Deep yellow → ~510 nm → moderate contrast
 #21 Orange → ~540 nm → RP, macular disease
 #22 Orange → ~550 nm → similar to CPF 550
 #25 Red → ~600 nm → achromatopsia, severe cone dysfunction
 #29 Dark red → ~640 nm → maximum filtering; profound photophobia
```

---

### Structure or Process Map

**Lens material master table:**

| Material | n | Abbe (ν) | SG | Impact resistance | Key advantage | Key limitation |
|---|---|---|---|---|---|---|
| Crown glass (ophthalmic) | 1.523 | 58.9 | 2.54 | Lowest | Lowest CA | Heaviest; shatters |
| CR-39 (Columbia Resin) | 1.498 | 58 | 1.32 | Fair | Low CA; easy to tint | Scratches easily; thicker |
| Trivex (Phoenix) | 1.532 | 43–45 | 1.11 | High | Lightest; rigid (drill-mount) | Scratches easily |
| Polycarbonate | 1.586 | 30 | 1.20 | HIGHEST | Best impact; UV blocks to 385nm | High CA; hard to tint |
| PMMA | 1.49 | — | — | Fair | CL rigid material | Poor gas permeability |
| High-index glass | 1.600+ | 36 | 1.45 | Low | Thinnest | Fragile; high CA; expensive |
| High-index plastic | 1.597 | 37 | 1.34 | Low | Thin | High CA; fragile; expensive |

> **Polycarbonate** inherently blocks UV < 385nm without added treatment — unique among lens materials.

**Lens forms and aberrations:**

```
LENS FORMS (from most to least aberration):
 Biconvex > Plano-convex > Meniscus (best for reducing marginal aberrations)
 Mass-produced lenses use meniscus form (corrected curve)

PERISCOPIC LENS:
 Plus lenses: back surface = −1.25 D
 Minus lenses: front surface = +1.25 D

BASE CURVES (toric transposition):
 Rx −2.25 to −4.00 D → BC 4.00 D
 Rx +2.00 to −2.00 D → BC 6.00 D
 Rx +2.25 to +4.50 D → BC 8.00 D
```

**Bifocal and multifocal designs:**

```
FUSED BIFOCAL (Kryptok, FT-28, FT-35)
 — Segment of higher-index glass (flint) fused into major lens (crown)
 — Advantages: smooth upper edge, cosmetically invisible, durable
 — Disadvantages: image jump, limited styles

ONE-PIECE BIFOCAL (Executive/Franklin, Ultex)
 — Entire lens ground from one piece of glass/plastic
 — Executive: full-width segment divides lens horizontally
 — Advantage: wide near segment; no prismatic jump at segment top
 — Disadvantage: heavy, thick

PROGRESSIVE ADDITION LENS (PAL/No-line)
 — Distance zone (top) → intermediate corridor → near zone (bottom)
 — No visible line; intermediate vision capability
 — Disadvantage: peripheral distortion; adaptation period required
 — Advantage: cosmetically superior; full range of vision

BLENDED BIFOCAL
 — Segment line ground away; intermediate zone blurred
 — Less cosmetically appealing than PAL; no intermediate zone
```

**Slab-off (bicentric grinding) for anisometropia:**

```
PURPOSE: Correct differential vertical prismatic effect when prescriptions differ significantly between eyes
INDICATION: Anisometropia with significant difference in sphere (typically >1.50-2.00 D vertical prism differential)
METHOD: Front slab-off = removes minus from upper portion of weaker lens
 Back slab-off = removes plus from upper portion of stronger lens
Conventional: slab-off on MORE MINUS lens (or LESS PLUS)
```

**Prism in lenses — Prentice's rule application:**

```
P = d × F (d in cm, F in diopters)

Plus lens: base faces optical center (prism apex in periphery)
 → Object displaced TOWARD apex (away from OC)
Minus lens: apex faces optical center (prism base in periphery)
 → Object displaced toward APEX (toward OC)

Direction of image displacement: ALWAYS toward prism APEX
Direction of prism displacement: image moves TOWARD apex; eye position moves TOWARD base
```

**Clinical indications for absorptive lenses by diagnosis:**

| Condition | Problem | Recommended filter |
|---|---|---|
| Albinism | Foveal hypoplasia + reduced pigment → photophobia | Dark tint + UV 400 + side shields |
| Aniridia | No iris = no pupillary light control | Dark absorptive + side/superior/inferior shields + CPF 511+ |
| Achromatopsia | No cone function = extreme daytime photophobia | Dark red (CPF 550 or Wratten #25/#29) |
| Retinitis Pigmentosa | Rod degeneration + photophobia | Yellow/amber (CPF 511 or 527) |
| ARMD | Central field loss + glare | Yellow/amber absorptive lens |
| Cataract | Light scatter through cloudy lens | AR coating; post-op UV 400 |

---

### Toric Transposition — Lens Manufacturing

Toric transposition describes how a prescription is ground onto a lens surface when a cylinder is involved. Instead of writing out the full Rx as one number, the lens lab breaks it into two surface powers (front and back) using a fixed reference curve called the **base curve (BC)**. The BC anchors all the other surface calculations.

**Core concept:** The front and back surface powers must combine to produce the exact Rx at every meridian. Toric transposition is the arithmetic for finding those surface powers given the BC.

---

**When to use each type:**

| Type | Bifocal style | Which surface is toric | Which surface is sphere | Cylinder form |
|---|---|---|---|---|
| **SVTT** — Single Vision Toric | SV lens (no add) | Front (convex) | Back (concave) | PLUS cyl |
| **FBTT** — Fused Bifocal Toric | Kryptok, FT-28, FT-35 (fused) | Back (concave) | Front = BC (sphere, segment side) | MINUS cyl |
| **UBTT** — Ultex Bifocal Toric | Ultex, Executive (one-piece) | Front (convex) | Back = BC (concave) | PLUS cyl |

> Memory rule: **F**used → **F**ront sphere (BC on front), back toric. **U**ltex → back sphere (BC on back), front toric. **SV** → same as UBTT layout except BC is on front.

---

**Optical cross notation convention (used throughout):**
"+P × A°" on a surface means that surface contributes power P in the direction **perpendicular to A°**.
Example: +6.00 × 90° contributes +6.00 in the 180° direction (horizontal).
Verification: add front + back powers at each direction → must equal the original Rx powers at those same directions.

---

#### SVTT — Single Vision Toric Transposition

**Steps:**
1. Convert Rx to **plus cylinder form** if not already
2. Place BC with axis **90° from the plus cyl axis** → this is the first front meridian
3. Add BC + cylinder power at the **plus cyl axis** → this is the second front meridian
4. Back sphere = **sphere (plus cyl form) − BC**
5. Verify with optical cross

**Example:** +0.75 s = −1.00 c × 90, BC +6.00

```
Step 1 — plus cyl form:
 Sph = +0.75 + (−1.00) = −0.25 Cyl = +1.00 Axis = 90 + 90 = 180°
 → −0.25 +1.00 × 180°

Step 2 — BC at axis 90° from cyl axis 180° = at axis 90°:
 Front: +6.00 × 90°

Step 3 — BC + cyl at cyl axis 180°:
 Front: +6.00 + 1.00 = +7.00 × 180°

Step 4 — back sphere:
 Back = −0.25 − (+6.00) = −6.25 sph

Result:
 Front toric: +6.00 × 90° / +7.00 × 180°
 Back sphere: −6.25 sph

Verification (optical cross):
 +6.00 × 90° → contributes +6.00 in the 180° direction
 +7.00 × 180° → contributes +7.00 in the 90° direction
 Back: −6.25 in both

 Net @ 90° direction: +7.00 − 6.25 = +0.75 ✓ (Rx @ 90°: sphere = +0.75)
 Net @ 180° direction: +6.00 − 6.25 = −0.25 ✓ (Rx @ 180°: +0.75 − 1.00 = −0.25)
```

**SVTT Practice Problems (solved):**

*P1: +4.50 s = −2.25 c × 90, BC 8.00*
```
Plus cyl: +2.25 +2.25 × 180°
Front: +8.00 × 90° / +10.25 × 180° (8.00 + 2.25)
Back: +2.25 − 8.00 = −5.75 sph
```

*P2: −2.50 s = −2.75 c × 45, BC 4.00*
```
Plus cyl: −5.25 +2.75 × 135°
Front: +4.00 × 45° / +6.75 × 135° (4.00 + 2.75; axis 90° from 135° = 45°)
Back: −5.25 − 4.00 = −9.25 sph
```

*P3: +2.50 s = −1.00 c × 90, BC 6.00*
```
Plus cyl: +1.50 +1.00 × 180°
Front: +6.00 × 90° / +7.00 × 180°
Back: +1.50 − 6.00 = −4.50 sph
```

---

#### FBTT — Fused Bifocal Toric Transposition

**Steps:**
1. Convert Rx to **minus cylinder form**
2. Front = BC (spherical — it is on the segment side and must be a sphere)
3. Back at axis **90° away from minus cyl axis**: power = **sphere (minus cyl form) − BC**
4. Back at **minus cyl axis**: Step 3 result + minus cyl power
5. Verify with optical cross

**Example:** +1.00 s = +0.25 c × 90, add 2.50 KK, BC 6.00

```
Step 1 — minus cyl form:
 Sph = +1.00 + 0.25 = +1.25 Cyl = −0.25 Axis = 90 + 90 = 180°
 → +1.25 −0.25 × 180°

Step 2 — Front = +6.00 sph (BC, spherical, segment side)

Step 3 — Back at axis 90° away from minus cyl axis 180° = at axis 90°:
 Back = sphere − BC = +1.25 − 6.00 = −4.75 × 90°

Step 4 — Back at minus cyl axis 180°:
 Back = −4.75 + (−0.25) = −5.00 × 180°

Result:
 Front sphere: +6.00 sph (BC)
 Back toric: −4.75 × 90° / −5.00 × 180°

Verification:
 Front +6.00 sph → contributes +6.00 in both directions
 Back −4.75 × 90° → contributes −4.75 in 180° direction
 Back −5.00 × 180° → contributes −5.00 in 90° direction

 Net @ 90° direction: +6.00 + (−5.00) = +1.00 ✓ (Rx @ 90°: +1.00 in original)
 Net @ 180° direction: +6.00 + (−4.75) = +1.25 ✓ (Rx @ 180°: +1.25 in original)
```

**FBTT Seatwork Problems (solved):**

*SW1: +1.00 sph = −2.75 c × 90, add 2.00 FT, BC 6.00*
```
Minus cyl: +1.00 −2.75 × 90° ✓
Front: +6.00 sph
Back at axis 90° from cyl axis 90° = at axis 180°: +1.00 − 6.00 = −5.00 × 180°
Back at cyl axis 90°: −5.00 + (−2.75) = −7.75 × 90°
→ Front: +6.00 sph | Back: −5.00 × 180° / −7.75 × 90°
```

*SW6: +6.50 s = −1.25 c × 70, add 2.00 KK, BC plano*
```
Minus cyl: +6.50 −1.25 × 70° ✓
Front: 0 sph (plano BC)
Back at axis 90° from 70° = at axis 160°: +6.50 − 0 = +6.50 × 160°
Back at cyl axis 70°: +6.50 + (−1.25) = +5.25 × 70°
→ Front: plano sph | Back: +6.50 × 160° / +5.25 × 70°
```

---

#### UBTT — Ultex Bifocal Toric Transposition

**Steps:**
1. Convert Rx to **plus cylinder form**
2. BC is the back surface sphere (written as negative/concave in the result)
3. Front at axis **90° away from plus cyl axis**: = **sphere (plus cyl form) + BC**
4. Front at **plus cyl axis**: Step 3 result + plus cyl power
5. Verify with optical cross

**Example:** +2.00 s = +1.00 c × 60, add 2.50 Ultex, BC 4.00

```
Step 1 — plus cyl: +2.00 +1.00 × 60° ✓ (already in plus cyl)

Step 2 — Back = −4.00 sph (BC, concave)

Step 3 — Front at axis 90° from plus cyl axis 60° = at axis 150°:
 Front = sphere + BC = +2.00 + 4.00 = +6.00 × 150°

Step 4 — Front at plus cyl axis 60°:
 Front = +6.00 + 1.00 = +7.00 × 60°

Result:
 Front toric: +6.00 × 150° / +7.00 × 60°
 Back sphere: −4.00 sph (BC)

Verification:
 +6.00 × 150° → contributes +6.00 in the 60° direction
 +7.00 × 60° → contributes +7.00 in the 150° direction
 Back: −4.00 in both

 Net @ 60° direction: +6.00 + (−4.00) = +2.00 ✓
 Net @ 150° direction: +7.00 + (−4.00) = +3.00 ✓ (Rx @ 150°: +2.00 + 1.00 = +3.00)
```

**UBTT Try Problem (solved):** +2.50 s = −1.50 c × 10, add 2.00 Ultex, BC 6.00

```
Plus cyl: Sph = 2.50 − 1.50 = +1.00; Cyl = +1.50; Axis = 10 + 90 = 100°
→ +1.00 +1.50 × 100°

Front at axis 90° from 100° = at axis 10°: +1.00 + 6.00 = +7.00 × 10°
Front at cyl axis 100°: +7.00 + 1.50 = +8.50 × 100°
Back: −6.00 sph

Result: Front +7.00 × 10° / +8.50 × 100° | Back −6.00 sph
```

**UBTT Seatwork Problems (solved):**

*SW2: +2.50 sph = −3.75 c × 180, add 2.25 Ultex, BC 6.00*
```
Plus cyl: Sph = 2.50 − 3.75 = −1.25; Cyl = +3.75; Axis = 180 + 90 = 90°
→ −1.25 +3.75 × 90°
Front at axis 180° (90° from 90°): −1.25 + 6.00 = +4.75 × 180°
Front at axis 90°: +4.75 + 3.75 = +8.50 × 90°
Back: −6.00 sph
→ Front: +4.75 × 180° / +8.50 × 90° | Back: −6.00 sph
```

*SW4: +5.75 s = +2.50 c × 40, add 2.00 Ultex, BC 4.00*
```
Plus cyl: +5.75 +2.50 × 40° ✓ (already plus cyl)
Front at axis 130° (90° from 40°): +5.75 + 4.00 = +9.75 × 130°
Front at axis 40°: +9.75 + 2.50 = +12.25 × 40°
Back: −4.00 sph
→ Front: +9.75 × 130° / +12.25 × 40° | Back: −4.00 sph
```

*SW3: +2.25 s = −1.25 c × 100, BC 6.00 (SV → SVTT)*
```
Plus cyl: Sph = 2.25 − 1.25 = +1.00; Cyl = +1.25; Axis = 100 + 90 = 190° = 10°
→ +1.00 +1.25 × 10°
Front: +6.00 × 100° (BC at axis 90° from 10° = 100°) / +7.25 × 10°
Back: +1.00 − 6.00 = −5.00 sph
```

*SW5: +4.75 s = −2.00 c × 150, BC 1.25 (SV → SVTT)*
```
Plus cyl: Sph = 4.75 − 2.00 = +2.75; Cyl = +2.00; Axis = 150 + 90 = 240° = 60°
→ +2.75 +2.00 × 60°
Front: +1.25 × 150° / +3.25 × 60°
Back: +2.75 − 1.25 = +1.50 sph
```

*SW7: +0.50 s = −0.25 c × 90, add 1.25 Executive, BC 6.00*
```
Executive = one-piece → UBTT
Plus cyl: Sph = 0.50 − 0.25 = +0.25; Cyl = +0.25; Axis = 90 + 90 = 180°
→ +0.25 +0.25 × 180°
Front at axis 90° (90° from 180°): +0.25 + 6.00 = +6.25 × 90°
Front at axis 180°: +6.25 + 0.25 = +6.50 × 180°
Back: −6.00 sph
→ Front: +6.25 × 90° / +6.50 × 180° | Back: −6.00 sph
```

---

#### Quick Reference — Toric Transposition Formula Sheet

```
SVTT:
 Form: plus cyl
 Front (toric): BC × (90° from cyl axis) / (BC + cyl) × cyl axis
 Back (sphere): sphere(+cyl) − BC

FBTT:
 Form: minus cyl
 Front (sphere): BC
 Back (toric): [sphere − BC] × (90° from cyl axis) / [sphere − BC + cyl] × cyl axis

UBTT:
 Form: plus cyl
 Front (toric): (sphere + BC) × (90° from cyl axis) / (sphere + BC + cyl) × cyl axis
 Back (sphere): −BC
```

---

### Comparisons That Matter

**CR-39 vs Polycarbonate — the everyday clinical choice:**

| Feature | CR-39 | Polycarbonate |
|---|---|---|
| Index | 1.498 | 1.586 |
| Abbe value | 58 (LOW CA) | 30 (HIGH CA) |
| Impact resistance | Fair | BEST (must for children, sports) |
| Weight | Moderate | Light (SG 1.20) |
| UV protection | Needs coating | Inherent (< 385nm) |
| Tintability | Excellent | Difficult |
| Best for | Office/computer wearers; color-sensitive | Children; safety eyewear; sports |
| Board clue | "Clear optics, needs UV coat" | "Impact king, color compromise" |

**CPF vs Wratten filters:**

| Feature | CPF filter | Wratten filter |
|---|---|---|
| Purpose | Prescribed absorptive lens for daily wear | Trial filter used during LV assessment |
| Form | Spectacle lens (permanent) | Gelatin/glass filter (trial) |
| Use | Final prescription | Diagnostic — "try before you buy" |
| Board clue | CPF is the final product; Wratten is the test |

---

### Numbers and Values to Know

| Parameter | Value | Significance |
|---|---|---|
| Crown glass n | 1.523 | Reference standard for ophthalmic glass |
| CR-39 n | 1.498 | Standard plastic; good CA control |
| Polycarbonate n | 1.586 | Most impact resistant |
| Polycarbonate SG | 1.20 | Lightest manufactured lens |
| Trivex n | 1.532 | Best for drill-mount (rigid) |
| Trivex Abbe | 43–45 | Better than polycarbonate |
| Crown glass Abbe | 58.9 | Best CA control in glass |
| CR-39 Abbe | 58 | Best CA control in plastic |
| Impact test | 5/8-inch steel ball from 50 inches | FDA standard for ophthalmic lenses |
| CPF 450 cutoff | < 450 nm | Lightest CPF; early changes |
| CPF 550 cutoff | < 550 nm | Darkest CPF; achromatopsia |
| UV 400 | Blocks all UV < 400 nm | Current gold standard for UV protection |
| Photochromic clearing | 2–5 minutes | Longer in cold, faster in warm |
| Photochromic darkening | 30–60 seconds | Rapid darkening in UV |

---

### Memory Anchors

**Lens material properties — n and Abbe are INVERSE:**
High n → Low Abbe → More CA → More color fringing

**Impact resistance order — "Polycarb Hits Hardest; Glass Shatters:"**
Polycarbonate > High-index plastic > CR-39 > Crown glass

**CPF numbers — "Higher number = darker filter":**
CPF 450 (lightest) → CPF 550 (darkest); number = cutoff wavelength

**Photochromic car rule — "Windshield blocks UV → no activation in car":**

**Prentice's rule direction:**
Plus lens: object moves away from OC (toward apex)
Minus lens: object moves toward OC (toward apex)
Always: image moves TOWARD the APEX of the prism

**Slab-off indication — "Anisometropia with reading — slab on the MORE MINUS side"**

---

## Visual Map

```
LENS MATERIAL SPECTRUM (n vs Abbe)
────────────────────────────────────────
HIGH ABBE (LOW CA) LOW ABBE (HIGH CA)
Crown glass (Abbe 58.9) ←──────────────→ Polycarbonate (Abbe 30)
CR-39 (Abbe 58) Trivex (Abbe 43-45) is in between
 n=1.49 ←──────→ n=1.586+

CPF FILTER SERIES
──────────────────────────────────────────────────────────────
WAVELENGTH (nm)
UV 400 450 500 550 600 700 (visible)
|----|----|----|----|----|----|
 CPF450: cuts here
 CPF511: cuts here
 CPF527: cuts here
 CPF550: cuts here
Higher cutoff = more filtered = darker = for more severe photophobia

BIFOCAL DESIGNS
───────────────
FUSED: [DISTANCE ] ← segment fused into carrier
 [______NEAR______]
ONE-PIECE: [DISTANCE ] ← one piece; Executive = full-width
 [NEAR ]
PROGRESSIVE: [DISTANCE ]
 [ corridor ]
 [ NEAR ]
```

---

## Board Traps

- **Trap 1:** "Polycarbonate has the highest Abbe value" — Wrong. Polycarbonate has Abbe = 30 (LOWEST among common lens materials). Crown glass has the highest (58.9).
- **Trap 2:** "Polycarbonate requires UV coating to protect against UV" — Wrong. Polycarbonate inherently blocks UV below 385nm without additional coating.
- **Trap 3:** "Photochromic lenses are ideal for driving" — Wrong. They do NOT activate inside cars because windshields block the UV needed to trigger the silver halide reaction.
- **Trap 4:** "CPF 527 is lighter than CPF 450" — Wrong. Higher CPF number = more filtered = DARKER appearance. CPF 450 is the lightest; CPF 550 is the darkest.
- **Trap 5:** "Slab-off is applied to the more plus lens in anisometropia" — Wrong. Conventional slab-off is applied to the MORE MINUS (or LESS PLUS) lens.
- **Trap 6:** "CR-39 has lower Abbe value than polycarbonate" — Wrong. CR-39 Abbe = 58; polycarbonate Abbe = 30. CR-39 has HIGHER Abbe (less CA).
- **Trap 7:** "SVTT and FBTT both use plus cylinder form" — Wrong. FBTT uses MINUS cylinder form because the cylinder is on the back surface (opposite the segment). SVTT and UBTT use plus cyl.
- **Trap 8:** "In UBTT, the back surface is derived from calculation" — Wrong. In UBTT, the BC IS the back surface (−BC). The front is derived. In SVTT, the BC is the front surface and the back is derived.
- **Trap 9:** "For FBTT, the BC goes on the back surface" — Wrong. In FBTT, the BC is on the FRONT (segment side) and must be spherical. The back is toric (concave).
- **Trap 10:** "The optical cross axis notation means power in the direction of that axis" — Wrong. "+6.00 × 90°" means the surface contributes +6.00 in the PERPENDICULAR direction (180°), exactly like cylinder notation.

---

## High-Yield Summary

| Must-Know | Answer |
|---|---|
| Polycarbonate Abbe value | 30 (lowest = most CA) |
| Crown glass Abbe value | 58.9 (highest = least CA) |
| CR-39 Abbe value | 58 |
| Trivex Abbe value | 43–45 |
| Most impact resistant lens | Polycarbonate |
| Lightest lens (SG) | Trivex (1.11); polycarbonate (1.20) |
| Polycarbonate inherent UV | Blocks < 385 nm without coating |
| Photochromic mechanism | Silver halide crystals; UV triggers darkening |
| Photochromic car limitation | No activation (windshield blocks UV) |
| Achromatopsia filter | CPF 550 or Wratten #25/#29 (dark red) |
| RP filter | Yellow/amber (CPF 511 or 527) |
| Aniridia filter | Dark absorptive + side shields + CPF 511+ |
| Wratten filters | Trial filters for LV assessment |
| UV 400 | Blocks all UV < 400 nm (gold standard) |
| Slab-off indication | Anisometropia vertical prism correction |
| SVTT cylinder form | Plus cyl; BC on front; back = sph(+cyl) − BC |
| FBTT cylinder form | MINUS cyl; BC on front (sphere); back toric |
| UBTT cylinder form | Plus cyl; BC on back (−BC); front = sph + BC (one meridian) |
| Bifocal → FBTT | Fused: Kryptok, FT-28, FT-35 |
| Bifocal → UBTT | One-piece: Ultex, Executive |

---

## Practice Questions

**1.** A 35-year-old graphic designer spends 10 hours daily reading fine print on a computer. He is myopic (−2.50 D OU) and wants thin lenses. Which lens material would you prioritize?

- A. Polycarbonate (n=1.586, Abbe=30)
- B. CR-39 (n=1.498, Abbe=58)
- C. High-index glass (n=1.600, Abbe=36)
- D. Trivex (n=1.532, Abbe=43)

<details>
<summary>Answer</summary>

**B. CR-39 (n=1.498, Abbe=58).**

For a sedentary professional spending hours reading through lenses — especially at a monitor where off-axis gaze is constant — optical quality (Abbe value) is the priority. CR-39 has Abbe=58, producing minimal color fringing even in peripheral gaze. While polycarbonate (A) would be thinner, its Abbe=30 produces significant color aberration during sustained near work, causing visual fatigue. High-index glass is thinner but has lower Abbe (36) and is heavier. Trivex (Abbe 43-45) is a reasonable compromise but costs more without significant advantage here. For −2.50 D, the lens is already relatively thin in CR-39. Safety is not a primary concern for this patient in a seated work environment.

</details>

---

**2.** A patient with anisometropia (OD +1.00D, OS +4.50D) looks down 8mm below the optical centers while reading. What is the vertical prism differential at the reading level, and which method should be used to correct it?

- A. 2.8Δ differential; drop the distance OC
- B. 2.8Δ differential; slab-off on OS (most plus lens)
- C. 3.6Δ differential; slab-off on OD (most minus)
- D. 0.8Δ differential; dissimilar segments

<details>
<summary>Answer</summary>

**B. 2.8Δ differential; slab-off on OS (most plus lens).**

Using Prentice's rule for each eye at 8mm (0.8cm) below OC: OD prism = 0.8 × 1.00 = 0.8Δ BU; OS prism = 0.8 × 4.50 = 3.6Δ BU. Differential = 3.6 − 0.8 = 2.8Δ. Since 2.8Δ > 1.5Δ, slab-off is indicated. For two plus lenses, slab-off is ground on the MOST PLUS lens (OS = +4.50). Slab-off creates base-up prism in the reading zone to neutralize the differential. Option C is wrong — slab-off on OD would be the most minus rule, which applies to two minus lenses, not two plus lenses. Option A (drop OC) is only used for differentials ≤ 1.5Δ.

</details>

---

**3.** A spectacle lens (CR-39, n = 1.498) is uncoated. What percentage of light is lost to reflection from both surfaces?

- A. 3.87%
- B. 7.75%
- C. 4.45%
- D. 0.58%

<details>
<summary>Answer</summary>

**B. 7.75%.**

Using the reflectance formula: [(n' − n)/(n' + n)]² × 100 = [(1.498 − 1)/(1.498 + 1)]² × 100 = (0.498/2.498)² × 100 ≈ 3.87% per surface. For an uncoated lens, both the front and back surfaces reflect equally: 3.87% × 2 = 7.75% total light lost. This leaves ~92.25% transmitted. Option A (3.87%) is per-surface only. Option C (4.45%) is the loss with single-coat AR (front uncoated + back 85% reduced). Option D (0.58%) is the back surface reflection with a single coat (15% of 3.87%).

</details>

---

## Pen and Paper Drills

> Close note. Write first, check after.

### Drill 1 — Brain Dump
Write "OPHTHALMIC LENSES AND DISPENSING." 5 minutes. Write: 4 lens materials with n and Abbe, impact resistance order, CPF series (4 filters + cutoffs + conditions), photochromic mechanism, Prentice's rule.

### Drill 2 — Blank Diagram
Draw the CPF filter spectrum. Mark the 4 CPF numbers and their cutoff wavelengths on the visible spectrum. For each, write the primary clinical indication.

### Drill 3 — Flash Card Prompts

| Front | Back |
|---|---|
| Polycarbonate n, Abbe, SG? | 1.586, 30, 1.20 |
| CR-39 n, Abbe, SG? | 1.498, 58, 1.32 |
| Crown glass n, Abbe, SG? | 1.523, 58.9, 2.54 |
| Most impact resistant? | Polycarbonate |
| Photochromic: why no darkening in car? | Windshield blocks UV |
| CPF 550 for? | Achromatopsia/severe photophobia |
| CPF 527 for? | RP, glaucoma, ARMD |
| Wratten filters purpose? | Trial filters for LV assessment |
| Slab-off for? | Anisometropia vertical prism |
| Sagitta formula (simplified)? | s ≈ y²/2r |
| Plus lens: sag = ? | CT − ET |
| Lens moved away + plus power? | Effective power increases |
| Executive bifocal image jump? | Zero (OC at segment line) |
| Image jump formula? | I = h × D_add (h = OC-to-top, cm) |
| Vertical imbalance > 1.5Δ → correct with? | Slab-off or prism in segments |
| Slab-off ground on which lens? | Most minus (or least plus) lens |
| AR coating physics? | λ/4 thin film — destructive interference cancels reflection |
| Uncoated CR-39 light transmission? | ~92% (loses ~7.75% to reflection) |
| Benchwork stage 1? | Centering (mark OC, cylinder axis, prism base-apex) |

### Drill 4 — Toric Transposition Set (no notes)

Work each problem from scratch. Label front and back surfaces, show all steps, verify with optical cross.

1. SVTT: `+3.00 s = −1.50 c × 90 BC 6.00`
2. FBTT: `+2.00 s = −0.75 c × 90 add 2.00 KK BC 6.00`
3. UBTT: `+1.50 s = +1.00 c × 45 add 2.00 Ultex BC 4.00`

Decide the type first (SV → SVTT; Kryptok/FT → FBTT; Ultex/Executive → UBTT). Then apply the correct cylinder form. Draw the optical cross at the end and confirm the net powers match the original Rx at both meridians.

### Recall Interval Schedule

| Session | When | Drill |
|---|---|---|
| 1st | Today | Brain Dump |
| 2nd | Tomorrow | CPF spectrum diagram + Flash Cards |
| 3rd | 3 days | Lens material table from memory |
| Final | 2 weeks | All drills |

---

## Extended Formulas & Dispensing Topics

*(From Practical and Mechanical Optics - Dr. Vinola (Complete).pdf — added June 6, 2026)*

---

### Sagittae Formula

**Plain version:** A lens curve is a piece of a sphere. If you want to know how deep the bowl of that curve is over a given lens size, that depth is the sag. The sag tells you how much thicker the center is versus the edge (for plus) or the edge versus the center (for minus). Opticians use it to calculate the lens thickness with a caliper or lens clock.

**Clinical term:** Sagitta (sag) — the perpendicular depth of a lens curve from a chord across the surface.

```
EXACT FORMULA:
 s = r − √(r² − y²)

 Where:
 s = sag (depth of curve, in mm)
 r = radius of curvature (mm)
 y = semi-diameter of lens (half the lens size, in mm)

SIMPLIFIED (for small y compared to r):
 s ≈ y² / (2r)

CALIPER METHOD to find lens power:
 D = 1000 × s × 2(n − 1) / A²

 Where:
 D = surface power (diopters)
 s = sag in mm (s = CT − ET for plus lens; s = ET − CT for minus lens)
 n = index of refraction
 A = semi-diameter in mm
```

**Plus lens:** Center thicker than edge → sag = CT − ET (CT = center thickness, ET = edge thickness)
**Minus lens:** Edge thicker than center → sag = ET − CT

**Clinical use:** Lens clock (Geneva lens measure) reads sag to calculate surface power. Calibrated for crown glass (n = 1.530). For different index, use: T_true = D_marked × (n − 1)/0.530.

---

### Effective Power and Vertex Distance

**Plain version:** The same spectacle lens gives a different effective correction depending on how far it sits from your eye. Move the lens closer → the light has less distance to converge → effectively less plus (or less minus). Move it away → more distance for convergence → more plus (or more minus). When you refit someone from one vertex distance to another, you have to recalculate the power to keep the same effect on the eye.

**Clinical term:** Effective power (positional power) — the power of a lens at a specific vertex distance, calculated to produce the same correction as the original lens at its original distance.

```
TWO SCENARIOS:

1. LENS MOVED AWAY from the eye (farther from cornea):
 D_far = Dv / (1 − d × Dv)

2. LENS MOVED TOWARD the eye (closer to cornea):
 D_near = Dv / (1 + d × Dv)

 Where:
 Dv = original lens power (diopters)
 d = change in vertex distance (METERS)

DIRECTION RULES:
 Lens direction | Plus lens effect | Minus lens effect
 ─────────────────|──────────────────|───────────────────
 Away from eye | Increases power | Decreases power
 Toward eye | Decreases power | Increases power

Note: When the LENS moves away, EFFECTIVE power (same lens, new position) follows OPPOSITE formula:
 Same lens moved far: D_eff = Dv / (1 − d × Dv)
 Same lens moved near: D_eff = Dv / (1 + d × Dv)
```

**Sample (Dr. Viñola):** Patient has −8.00D worn at 12 mm. Repositioned to 16 mm (d = 0.004 m away):
```
D_far = −8.00 / (1 − 0.004 × (−8.00))
 = −8.00 / (1 + 0.032)
 = −8.00 / 1.032
 D_far = −7.75 D
```

**For astigmatic lenses:** Apply vertex distance separately to each principal meridian, then draw a new optical cross and transpose.

**Spectacle-to-CL conversion:** Same formula where d = vertex distance (typically 12–14 mm = 0.012–0.014 m) and the target is the corneal plane.
```
D_CL = D_Spec / (1 − d × D_Spec)
```

---

### Obliquely Crossed Cylinders

**Plain version:** If you have two cylindrical lenses whose axes are NOT 90° apart (not at right angles), you cannot simply add their powers — they cancel and combine in complicated ways. To find the result, you can use a graphical method on an optical cross or an algebraic formula. The resulting prescription will be a spherocylindrical lens at some new axis.

**Clinical term:** Obliquely crossed cylinders — two cylinder lenses with axes that differ by an angle other than 90°.

```
RESULTANT POWER FORMULA:
 Combined power at any meridian = D₁sin²(θ₁) + D₂sin²(θ₂)
 
 For two cylinders at axes α and β, the resultant cylinder C at axis γ satisfies:
 C = √[(D₁cos2α − D₂cos2β)² + (D₁sin2α − D₂sin2β)²]

AXIS OF RESULTANT:
 tan(2γ) = (D₁sin2α − D₂sin2β) / (D₁cos2α − D₂cos2β)

RESULTANT SPHERE:
 S_result = (D₁ + D₂ − C) / 2
```

**Board-level approach (practical):**
When two plus cylinders are obliquely crossed, the result is a spherocylindrical lens whose power is between the two cylinders and whose axis bisects the two original axes (modified by relative powers).

**Key rule:** If both cylinders are equal in power, the resultant axis is exactly between the two original axes.

---

### Power in an Oblique Meridian, Resultant Prism, and Base Direction

Three formulas the board chains together in one item: find the power in a meridian, turn it into prism with Prentice, then combine the horizontal and vertical prisms into one resultant.

**1. Power in an oblique meridian**

```
D(θ) = Sph + Cyl · sin²α
```

- **Plain version:** a cylinder has NO power along its own axis and FULL power 90° away. At an angle in between it expresses only a fraction of its power, and that fraction is sin²α. Add the sphere (equal in every meridian) for the total.
- **Each part:** Sph = spherical power; Cyl = cylinder power; α = angle FROM THE CYLINDER AXIS to the meridian you want; sin²α = the fraction of cyl power expressed there.
- **Where it comes from:** the curvature of a cylindrical surface varies as sin² between its two principal meridians (a projection / Euler-type relationship). Power follows curvature.
- **Why sin² (not sin or cos):** measured from the axis, power must be 0 at α = 0° and maximal at α = 90°; sin²α is exactly the curve that does that. (Measured from the power meridian instead, the same idea reads as cos²α.)
- **Endpoint check (always do this):** α = 0° (along axis) → sin²0 = 0 → D = Sph. α = 90° (power meridian) → sin²90 = 1 → D = Sph + Cyl. Both correct.
- **Cross-subject:** corneal power in oblique meridians (keratometry/astigmatism), oblique-axis retinoscopy, and it is the single term the obliquely-crossed-cylinder formula above sums twice.

**2. Resultant (oblique) prism — combine a vertical and a horizontal prism**

```
r = √(v² + h²) magnitude
tan α = v / h base direction (α from horizontal)
v = r·sinα , h = r·cosα (splitting one oblique prism back into components)
```

- **Plain version:** if a lens gives some sideways prism (h) and some up/down prism (v), the eye feels ONE prism pointing diagonally. Because v and h are at right angles, they are the legs of a right triangle and the resultant is the hypotenuse.
- **Each part:** v = vertical prism (BU/BD); h = horizontal prism (BI/BO); r = single resultant prism; α = its base angle measured up from horizontal.
- **Where it comes from:** prism is a vector (magnitude + base direction). Perpendicular components combine by Pythagoras, with no cross term because v ⊥ h. (Non-perpendicular prisms would need the law of cosines.)
- **Cross-subject:** Prentice's rule gives the v and h components from decentration in each meridian; this fuses them. It is also the reverse of splitting a prescribed oblique prism into BI/BO + BU/BD for grinding.

**3. Base direction — the recurring trap (magnitude is the easy part)**

A question is phrased one of two ways, and the two are MIRROR IMAGES. Match the rule to the wording:
- **Decentration** = the lens / optical center is moved (the "laboratory" act): *"the lens was decentered 2.5 mm nasal."*
- **Displacement** = the eye views a point off the OC: *"8 mm temporal to the OC,"* or the OC distance differs from the PD.

| Lens | DECENTRATION (OC is moved) | DISPLACEMENT (eye views off the OC) |
|---|---|---|
| Plus | base SAME direction as the move | base OPPOSITE the viewing point |
| Minus | base OPPOSITE the move | base SAME as the viewing point |

They mirror because moving the OC one way equals viewing the opposite way through the lens. So *"decentered 2.5 mm nasal"* (decentration) = *"eye views 2.5 mm temporal"* (displacement); both give the same base. When the distance between the OCs is greater than the PD, each eye views nasal to its OC (displacement).

Then read the side off as a base label: **temporal → Base OUT, nasal → Base IN, up → Base UP, down → Base DOWN.**

**Worked example A (power in a meridian → prism):** Rx +5.00 −1.50 × 45, point 8 mm temporal, both eyes.

```
Horizontal (180°) meridian: α = |180 − 45| = 135°, sin²135° = 0.5
 D₁₈₀ = +5.00 + (−1.50)(0.5) = +4.25 D
Prentice: P = d·F = 0.8 cm × 4.25 D = 3.4Δ
Base: +4.25 PLUS, point 8 mm TEMPORAL (displacement) → plus → OPPOSITE → nasal → Base In
 Answer = 3.4Δ BI (a keyed "3.4Δ BO" is the base-direction trap)
```

**Worked example B (resolve into v/h, then recombine):** Rx +4.00 −3.00 × 45, decentered 6 mm out + 4 mm down.

```
Horizontal (180°): α = 135°, sin² = 0.5 → +4.00 + (−3.00)(0.5) = +2.5 D
 H = 0.6 cm × 2.5 = 1.5Δ ; decentered out (decentration) → plus → SAME → Base OUT
Vertical (90°): α = |90 − 45| = 45°, sin² = 0.5 → +2.5 D
 V = 0.4 cm × 2.5 = 1.0Δ ; decentered down (decentration) → plus → SAME → Base DOWN
Resultant: r = √(1.0² + 1.5²) = √3.25 = 1.8Δ
 tan α = v/h = 1.0/1.5 → α = 33.7° (base out-and-down quadrant)
```

---

### Fast Picks — TO Exam Shortcuts

Read the options first, kill the wrong numbers, then settle the flip. Each rule is `cue → rule → trap`.

**Power in an oblique meridian** — cue: a sphero-cyl Rx plus a named meridian.
- Meridian = the cyl axis → answer is the **sphere alone** (sin²0 = 0). Meridian ⟂ to axis → **sphere + cyl**.
- Trap: any option that applies the *full* cylinder to an in-between meridian.

**Resultant prism** — cue: both a vertical and a horizontal prism are given.
- r is the hypotenuse: always **bigger than either component, smaller than their sum** (v + h). A 45° split gives r ≈ 1.41× a component.
- Trap: the option equal to **v + h** (added instead of √), and anything smaller than the larger component.

**Base direction** — cue: lens sign + the wording.
- "Decentered" → `+ same, − opposite`. "From the OC" or OC ≠ PD → `+ opposite, − same`.
- Trap: the twin option with your magnitude but flipped **BI/BO** — that is the keyed bait.

**Prentice's rule** — cue: a decentration (mm) and a lens power.
- P = (mm × D) ÷ 10. Only one option's number matches; pick the base with the sign rule above.
- Trap: the option that forgot to ÷10 (used mm as cm), off by 10×.

**Transposition** — cue: "express in plus/minus cyl," or options with a flipped axis.
- New sphere = sph + cyl; flip the cyl sign; axis ± 90 (keep it 0–180).
- Trap: an option whose sphere ≠ (old sph + cyl), or whose axis is not exactly 90° away.

---

### Image Jump and Vertical Imbalance

**Plain version:** When your eye crosses from the distance part of a bifocal into the segment, the segment has its own optical center. As soon as your line of sight hits the top edge of the segment, there is a sudden prismatic jump — the image appears to jump upward. This is image jump. If a patient has different prescriptions in the two eyes and looks down to read, each lens induces different amounts of prism at the reading level. If those prism amounts are not equal, the brain receives two images at different heights — vertical imbalance.

**Image jump formula:**
```
I = h × D_add

 I = image jump (prism diopters)
 h = distance from segment top edge to segment optical center (cm)
 D_add = reading addition power

SEGMENT OPTICAL CENTER DISTANCES from top of segment:
 Round-top (Kryptok) → 11 mm → h = 1.1 cm
 Flat top (FT-28/35) → 7 mm → h = 0.7 cm
 Executive / Franklin → 0 mm → h = 0 (NO IMAGE JUMP)
 Ultex → 20 mm → h = 2.0 cm

Rule: Executive bifocal has ZERO image jump (OC at segment line).
```

**Image displacement (at reading point):**
```
Total prismatic effect at reading level:
 Image Displacement = DIP + NIP
 
 DIP (Distance Induced Prism) = D_distance × h_distance (h = distance from OC to reading point, cm)
 NIP (Near Induced Prism) = D_add × P_segment (P = distance from segment OC to reading point, cm)
```

**Vertical imbalance — when to treat:**
```
IF vertical imbalance ≤ 1.5Δ:
 Correct by: Drop distance OC | Dissimilar segments

IF vertical imbalance > 1.5Δ:
 Correct by: Slab-off | Prism in segments

SLAB-OFF INDICATION RULE:
 Ground on the MOST MINUS (or LEAST PLUS) lens in the 90° meridian
 Orientation: Base-UP prism in reading area

REVERSE SLAB-OFF:
 Molded on MOST PLUS (or LEAST MINUS) lens
 Orientation: Base-DOWN prism in reading area
 Used in plastic lenses (cannot grind — molded instead)
```

---

### Spectacle Magnification

**Plain version:** When you put glasses on, the image on your retina is a different size than it was without glasses. Plus lenses make things bigger; minus lenses make things smaller. When two eyes have different spectacle prescriptions (anisometropia), the two retinal images are different sizes — one eye sees a bigger image than the other. If the size difference is large enough, the brain cannot fuse them. This size difference (aniseikonia) is what spectacle magnification quantifies.

**Clinical term:** Spectacle magnification (SM) — ratio of the corrected retinal image size to the uncorrected retinal image size.

```
SPECTACLE MAGNIFICATION (SM):
 SM = 1 / [(1 − (t/n)D₁) × (1 − dF_v)]

 Where:
 t = center thickness (meters)
 n = index of refraction
 D₁ = front surface power
 d = vertex distance (meters)
 F_v = back vertex power

SIMPLIFIED (shape factor × power factor):
 Shape factor = 1 / (1 − (t/n)D₁)
 Power factor = 1 / (1 − d × F_v)

CL MAGNIFICATION (CLM) — comparing CL to spectacle correction:
 CLM = 1 − d × D_Spec

 Where d = spectacle vertex distance, D_Spec = spectacle power

RELATIVE SPECTACLE MAGNIFICATION (RSM):
 For REFRACTIVE ametropia:
 RSM = 1 + d × F_Spec (with spectacles)
 RSM ≈ 1 (with CLs, since d ≈ 0)

 For AXIAL ametropia:
 RSM = 1 − g × F_Spec (with spectacles, g ≈ 0)
 RSM = 1 − (f_eye − 1.55) × F_Spec (with CLs)
```

**Clinical rules:**
- Myope: spectacles → smaller image; CL → larger image (closer to emmetropic size)
- Hyperope: spectacles → larger image; CL → smaller image
- Aphakia: heavily magnified with spectacles (+12D = ~30% magnification); CL reduces this
- RSM guides correction choice in anisometropia — if axial ametropia → prefer spectacles; if refractive → prefer CLs

---

### Anti-Reflection (AR) Coating

**Plain version:** Every uncoated lens surface bounces back some light instead of letting it through. For CR-39 (n = 1.49), about 4% of light is reflected at each surface. With two surfaces, almost 8% of light is lost — plus the patient sees annoying reflections. An AR coating is a super-thin layer (about 1/4 wavelength of light thick) applied to the lens surface. The light reflected off the top of the coating and the light reflected off the bottom cancel each other out through interference — the reflections disappear.

**Reflectance formula:**
```
Reflectance (%) = [(n' − n) / (n' + n)]² × 100

 n = index of first medium (air = 1.0)
 n' = index of lens material

Example — CR-39 (n = 1.49):
 = [(1.49 − 1) / (1.49 + 1)]² × 100
 = (0.49 / 2.49)² × 100
 = (0.1968)² × 100
 = 3.87% per surface
 Uncoated (two surfaces): 3.87 × 2 = 7.75% lost; transmits ~92%
```

**Light transmission by material:**

| Material | n | Light transmission (uncoated) |
|---|---|---|
| CR-39 | 1.49 | ~92% |
| Crown glass | 1.523 | ~91% |
| Polycarbonate | 1.586 | ~90% |
| High index 1.6 | 1.60 | ~88% |
| High index 1.7 | 1.70 | ~85% |

**Rule:** Higher index = more reflection = lower transmission uncoated. AR coating is MORE beneficial on high-index lenses.

**AR coating types:**
```
SINGLE COATING:
 Back surface only; reduces back reflection by ~85%
 Back surface reflection: 3.87% × 15% = 0.58%
 Total loss: 3.87% (front) + 0.58% (back) = 4.45%
 Transmission: ~95.5%

DOUBLE (MULTICOATING):
 Both surfaces coated; back surface reflection → ~0%
 Total loss: ~3.87% (front only)
 Transmission: ~96%
```

**Clinical indications for AR coating:**
- High-index lenses (> 1.6) — high natural reflectance
- Polycarbonate lenses — difficult to tint, AR improves aesthetics
- Night driving — reduces incoming headlight reflection on lens back surface
- Computer users — reduces screen reflection on back surface
- Cosmetic: makes lenses appear invisible in photographs

---

### Benchwork Stages (Processing)

**Plain version:** After you write a prescription and the lab selects the lens blank, it goes through a fixed sequence of steps before reaching the patient. Every step is named and each step has a purpose.

```
BENCHWORK SEQUENCE (6 stages):
1. CENTERING — Mark optical center, cylinder axis, prism base-apex line on lens front surface
2. LAYOUT — Mark proper decentration and orientation (set cylinder axis + base-apex to correct position)
3. CUTTING — Trace shape of frame former onto lens; cut excess glass (hand or machine)
4. CHIPPING / CRUMBLING — Remove surplus glass left after cutting (rough removal of irregular edges)
5. EDGING — Smooth and bevel the lens edge to exact shape (flat edging or bevel edging)
6. GLAZING / MOUNTING — Insert finished lens into frame (glazing = into channel/rimmed frame; mounting = into rimless)
```

**Decentration (boxing system):**
```
Decentration = (Frame PD − Patient PD) / 2 (per eye, in mm)

Frame PD (DBC) = A + DBL
 A = horizontal eye size
 DBL = distance between lenses (bridge size)

Patient PD = monocular PDs for each eye

Prismatic effect from decentration:
 P = d × D (Prentice's rule; d in cm, D in diopters)

To achieve prescribed prism via decentration:
 d = P / D (cm)
```

The same boxing-system logic carries over to the near segment. At near the eyes converge, so the near PD is smaller than the distance PD, and the segment (or the near zone of a PAL) has to sit nasal to the distance OC by the amount the eyes turn in. That nasal shift is the **inset**, the near-vision counterpart of the decentration above, referenced to the same frame center.

```
Segment inset (from the distance OC)      = (Distance PD − Near PD) / 2   (per eye, mm)

Total inset (from the boxing/geometric center) = (Frame PD − Near PD) / 2   (per eye, mm)

Relationship:  Total inset = Distance decentration + Segment inset
                           = (Frame PD − Distance PD)/2  +  (Distance PD − Near PD)/2
```

**Board trap:** "total inset" is measured from the frame's geometric center, so it uses **Frame PD and Near PD**, not the distance PD. The lens power and the reading add are distractors; they never enter the inset calculation.

```
Worked example (Rx OU −3.00 add +1.00, distance PD 62, near PD 60, eye size 45, DBL 20):
 Frame PD = 45 + 20 = 65  → 32.5 mm from the frame center
 Near PD  = 60            → 30.0 mm from the frame center
 Total inset = 32.5 − 30.0 = 2.5 mm per eye
 Check: decentration (65−62)/2 = 1.5  +  segment inset (62−60)/2 = 1.0  = 2.5 ✓
```

---

### Memory Anchors — Extended Topics

**Sag formula: "SAG = you dig a hole"** — s ≈ y²/2r; bigger semi-diameter (y) = deeper hole; flatter curve (bigger r) = shallower hole.

**Effective power direction — "Plus lens: farther = stronger":**
Moving a plus lens away from the eye increases its effective power. Moving a minus lens away decreases its effective magnitude.

**Image jump order (most to least jump): Ultex > Kryptok > FT > Executive:**
Ultex = 20mm OC → most jump; Executive = 0mm OC → zero jump.

**AR coating rule: High-index = must coat.** Higher n = more reflectance = greater benefit from AR coating.

---

### High-Yield Summary — Extended Topics

| Must-Know | Answer |
|---|---|
| Sagittae formula (simplified) | s ≈ y²/2r; exact: s = r − √(r²−y²) |
| Plus lens: sag = ? | CT − ET (center thicker) |
| Lens moved away + plus power | Effective power increases |
| Spectacle to CL power formula | D_CL = D_Spec / (1 − d × D_Spec) |
| Image jump formula | I = h × D_add (h = OC-to-top distance in cm) |
| Executive bifocal image jump | ZERO (OC at segment line) |
| Vertical imbalance > 1.5Δ correction | Slab-off or prism in segments |
| Slab-off is ground on | Most minus (or least plus) lens |
| Distance decentration (per eye) | (Frame PD − Distance PD) / 2 |
| Total inset from frame center (per eye) | (Frame PD − Near PD) / 2 = decentration + segment inset |
| Uncoated CR-39 transmission | ~92% (7.75% reflected from two surfaces) |
| Higher index lens + AR coating | More important — higher native reflectance |

---

## Sources Used

- [x] `PMO-Practical-Mechanical-Optics.md` — Lens materials (crown glass, flint, barium, CR-39, polycarbonate, Trivex, PMMA, high-index), Abbe value, SG, impact resistance, optical and mechanical properties
- [x] `PMO-5of5-Dr-Vinola.md` — Dispensing procedures, frame selection, bifocal types
- [x] `Gap-Lectures/12-Absorptive-Lenses-Clinical-Theory.md` — UV bands, CPF filters, Wratten numbers, photochromic mechanism, clinical indications by diagnosis, UV 400 standard
- [x] `SYLLABI-TOPIC-MAP.md` — TOS D.2 scope reference
- [x] `Practical and Mechanical Optics - Dr. Vinola (Complete).pdf` (2024) — Sagittae formula, thick lens powers, vertex distance/effective power, image jump, vertical imbalance, slab-off rules, decentration, spectacle magnification, anti-reflection coating physics, benchwork stages, lensometer procedures, boxing system, bifocal image displacement

*Note written: June 5, 2026 | Confidence: [ ] Low [ ] Okay [ ] Solid*
