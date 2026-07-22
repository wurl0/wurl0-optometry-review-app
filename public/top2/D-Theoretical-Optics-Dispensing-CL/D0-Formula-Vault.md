# WAA | Board Review 2026

## D0 — Formula Vault: Every Calculation in Subject D

*Personal study notes | Built Jul 22, 2026 | One page for all of D1, D2, D3*

---

## The Simple Version

Every calculation item in Theoretical Optics is one of about fifty formulas, and you only ever need one of them per question. The hard part of a TO problem is almost never the algebra. It is picking the right formula in ten seconds and not losing the mark on a unit or a sign.

This page is the pick-and-check layer. It holds the formula, what each symbol is, the unit that must be used, and the single mistake that most often costs the mark. It does not re-teach the formulas. The derivation, the analogy and the reason each one has the form it does live in D1-01, D1-02, D1-03, D2-01 and D3-01, and every entry here points back to where its explanation sits.

Use it two ways: as the last sweep before a paper, and as a blank-sheet target where you rewrite the whole vault from memory.

---

## But Why?

TO is the most arithmetic-heavy subject on the OLE, and the marks in it are lost in a very narrow band. Reviewing past preboard misses, almost none were "I did not know the formula." They were mm used where cm was required, a base direction flipped, a transposition axis off by the wrong 90, or a resultant prism added instead of squared.

That failure pattern is why a scattered set of formulas across five long notes is a problem. When a formula lives inside a twelve-page topic note, you meet it once, in context, with the answer already framed. On the exam you meet it cold, out of order, with four options engineered around the exact slip you are prone to. Those are different retrieval tasks.

Collecting them onto one page forces the comparison the exam forces: which of these fifty is this, and what is different about it from its neighbour. Prentice next to the prism-diopter definition makes the cm-versus-mm split obvious. Effective power next to vertex conversion makes it clear they are the same formula read in two directions. That adjacency is the actual value here, not the convenience of a lookup.

---

## How to Use This Page

**During a paper, in this order:**

1. Read the last line of the stem first. What is being asked for decides the formula, not the story before it.
2. Name the block. Vergence, refraction, imaging, prism, Rx algebra, thick lens, dispensing, CL, accommodation. Nine possibilities, not fifty.
3. Convert units before you touch the algebra. Write the converted numbers down.
4. Compute the magnitude.
5. Settle the sign or direction last, as a separate decision. Roughly half of the engineered distractors in D are your correct magnitude with the direction flipped.

**Before a paper:** cover the Formula column of any block and rebuild it from the Use it when column. That is retrieval; reading the page is not.

---

## Master Index — Cue to Formula

Scan the stem for the cue, jump to the block.

| Stem cue | Block | Formula to reach for |
|---|---|---|
| Focal length given, power asked (or reverse) | 1 | D = 1/f |
| Radius of curvature + two indices | 1 | D = (n₂ − n₁)/R |
| Speed of light in a material | 1 | n = c/v |
| "Far point of a −3.00 myope" | 1 | far point cm = 100/D |
| Two angles at a boundary | 2 | Snell |
| "Total internal reflection", "critical angle" | 2 | sin CA = n₂/n₁ |
| Glass slab, ray displaced sideways | 2 | d = t·sin(i − R)/cos R |
| "Apparent depth", coin in water | 2 | q = p(n'/n) |
| "% reflected per surface", AR coating | 2 | Reflectance formula |
| Object distance + focal length, image asked | 3 | 1/p + 1/q = 1/f |
| Mirror with radius given | 3 | f = R/2 |
| "How many times larger", "erect or inverted" | 3 | m = −q/p |
| Decentration in mm + lens power | 4 | Prentice P = d × F |
| Prism diopters to degrees, or apical angle | 4 | Δ = 100 tan θ ; a = θ/(n − 1) |
| Sphero-cyl Rx + a named meridian | 4 | D(θ) = Sph + Cyl·sin²α |
| A vertical AND a horizontal prism given | 4 | r = √(v² + h²) |
| Two cylinders at different axes | 4 | Obliquely crossed cylinders |
| Bifocal segment type + add power | 4 | Image jump I = h × D_add |
| "Express in plus cyl", flipped axis options | 5 | Transposition |
| Two cylinders written as a cross | 5 | Cross-cyl to sphero-cyl |
| "Reading Rx", "intermediate Rx" | 5 | Sphere + add, sphere + ½ add |
| Front and back surface + thickness | 6 | Dn, Deq, BVP, FVP |
| Vertex distance changes, or specs to CL | 6 | D_new = D/(1 − d·D) |
| "Image size difference", aniseikonia | 6 | SM, CLM, RSM |
| Lens thickness, lens clock, caliper | 7 | Sagitta |
| Frame PD, patient PD, eye size, DBL | 7 | Decentration, inset |
| "How much should the lens be decentred to give X prism" | 7 | d = P/D |
| K readings + spectacle cyl | 8 | Residual astigmatism |
| CL power from spectacle Rx | 8 | Vertex conversion |
| Age given, amplitude asked | 9 | Hofstetter |
| Retinoscopy gross finding | 9 | Subtract working distance |

---

## Block 1 — Vergence and Power

The foundation block. Anything downstream that says "power" assumes these.

| Formula | Use it when | The trap |
|---|---|---|
| `D = 1/f` (f in m) | Focal length to power, or back | Using cm without converting |
| `D = 100/f` (f in cm) | The clinical default | Forgetting that 100 is only for cm |
| `D = 1000/f` (f in mm) | Radii, sags, CL specs | Using 100 with mm, off by 10× |
| `D = 40/f` (f in inches) | Older Philippine board items | Rare but it does appear |
| `D = (n₂ − n₁)/R` (R in m) | Single refracting surface | Subtracting the indices backwards |
| `D = 1000(n₂ − n₁)/R` (R in mm) | Corneal surfaces, CL surfaces | The 1000 belongs to mm only |
| `n = c/v` and `v = c/n` | Speed of light in a medium | n is always ≥ 1; an answer below 1 is wrong |
| `far point (cm) = 100/D` | Punctum remotum of an ametrope | Myope's far point is in front, hyperope's is virtual and behind |
| `D_total = D₁ + D₂` | Thin lenses in contact | Only valid in contact; separated lenses need thick-lens formulas |

```
SURFACE POWER, worked both ways on the cornea:

  Anterior:  D = 1000(1.376 − 1.000) / 7.7  = +48.83 D
  Posterior: D = 1000(1.336 − 1.376) / 6.8  =  −5.88 D
  Net corneal power ≈ 48.83 − 5.88 ≈ +43 D

  The posterior surface is minus because n DROPS across it (1.376 → 1.336).
  That sign is the whole reason the cornea is 43 D and not 49 D.
```

> **Sign of R:** positive when the surface is convex toward the incoming light, negative when concave toward it. Get R's sign right and the power sign takes care of itself.

Depth: D1-01 Formula 2 and Formula 5, D1-02 Formula 6.

---

## Block 2 — Refraction, Index, and Surface Losses

| Formula | Use it when | The trap |
|---|---|---|
| `n₁ sin i = n₂ sin R` | Any ray crossing a boundary | Angles are measured from the NORMAL, not the surface |
| `sin CA = n₂/n₁` | Critical angle, TIR | Only exists going dense to rare; n₁ must be the bigger one |
| `d = t·sin(i − R)/cos R` | Plane parallel slab, lateral shift | You must solve Snell for R first |
| `q = p × (n'/n)` | Apparent depth, shallowing | Observer's index goes on top |
| `Reflectance % = [(n' − n)/(n' + n)]² × 100` | Light lost per surface | The whole bracket is squared, then ×100 |
| `AR coating thickness = λ/4` | Why AR works | Quarter wave, not half |

```
CRITICAL ANGLE, three materials:

  Crown glass → air:   sin CA = 1.000/1.523 → CA = 41.04°
  Polycarbonate → air: sin CA = 1.000/1.586 → CA = 39.27°
  Diamond → air:       sin CA = 1.000/2.417 → CA = 24.44°

  Rule: higher n → LOWER critical angle → TIR happens more easily.
```

```
REFLECTANCE, CR-39 (n = 1.498), the number to be able to rebuild:

  = [(1.49 − 1)/(1.49 + 1)]² × 100
  = (0.49/2.49)² × 100
  = 3.87 % per surface

  Uncoated, two surfaces: ~7.75 % lost, ~92 % transmitted
  Single AR (back only):  ~4.45 % lost, ~95.5 % transmitted
  Multicoat (both):       ~3.87 % lost, ~96 % transmitted
```

> **Direction rule, worth more than the formula:** low n to high n bends TOWARD the normal. High n to low n bends AWAY. If your computed R is on the wrong side of i, you inverted the ratio.

Depth: D1-01 Formula 1, D1-02 Formulas 3 and 4, D2-01 AR Coating.

---

## Block 3 — Image Formation, Lenses and Mirrors

One equation covers both lenses and mirrors. What changes is which physical side "positive q" lands on.

| Formula | Use it when | The trap |
|---|---|---|
| `1/p + 1/q = 1/f` | Any thin lens or mirror | Mixing units between p, q and f |
| `f = R/2` | Mirror with radius given | Only mirrors; a lens surface uses Block 1 |
| `m = −q/p = i/o` | Size and orientation | Dropping the minus and reporting a real image as upright |
| `p = q = 2f, m = −1` | "Same size" stems | This is the symmetry point, not an arbitrary case |
| `minimum object-to-image separation = 4f` | Bench problems | Below 4f no real image forms at any lens position |

**The zone table.** This answers most image-formation items without any arithmetic at all:

| Object position | q | m | Image |
|---|---|---|---|
| Infinity | +f | 0 | Point image at F |
| Beyond 2F | between f and 2f | negative, \|m\| < 1 | Real, inverted, minified |
| At 2F | 2f | −1 | Real, inverted, same size |
| Between F and 2F | beyond 2f | negative, \|m\| > 1 | Real, inverted, magnified |
| At F | infinity | undefined | No image, rays emerge parallel |
| Inside F | negative | positive, \|m\| > 1 | Virtual, upright, magnified |
| Any position, minus lens or convex mirror | negative | positive, \|m\| < 1 | Virtual, upright, minified |

> **Two reads that skip the algebra:**
> Sign of m gives orientation. Positive is upright, negative is inverted.
> Magnitude of m gives size. Whichever of object or image sits farther from the element is the bigger one.
> A minus lens is always virtual, always upright, always smaller, at every object distance. No calculation needed.

Depth: D1-02 Formulas 2 and 5, D1-03 in full.

---

## Block 4 — Prism

The densest block on the OLE and the one where direction, not magnitude, decides the mark.

| Formula | Use it when | The trap |
|---|---|---|
| `P = d × F` (d in cm) | Prismatic effect off-centre | d in mm gives an answer 10× too small |
| `P = (mm × D)/10` | Same rule, exam shortcut | None; this form exists to stop the mm slip |
| `Δ = 100 tan θ` | Prism diopters to degrees | tan, never sin |
| `Δ = displacement (cm) / distance (m)` | The definition itself | Mixed units are the definition, not a mistake |
| `a = θ/(n − 1)` | Apical angle of a prism | θ is the deviation in degrees, not the Δ value |
| `D(θ) = Sph + Cyl·sin²α` | Power in a named meridian | α is measured from the CYL AXIS, not from 180 |
| `r = √(v² + h²)` | Resultant of two prisms | Adding v + h instead of the hypotenuse |
| `tan α = v/h` | Base direction of the resultant | Reference angle only; the quadrant still has to be placed |
| `v = r·sin α`, `h = r·cos α` | Splitting one oblique prism | Only if α is measured from horizontal |
| `I = h × D_add` | Image jump at a bifocal | h is seg top to seg OPTICAL CENTRE, in cm |
| `Image displacement = DIP + NIP` | Total effect at reading level | Two separate Prentice calculations, then combine |

```
POWER IN AN OBLIQUE MERIDIAN, the two anchors:

  Meridian = the cyl axis      → α = 0   → sin²0 = 0    → answer is the SPHERE ALONE
  Meridian ⊥ to the cyl axis   → α = 90  → sin²90 = 1   → answer is SPHERE + FULL CYL

  Anything between takes a fraction. At 45° away, sin²45 = 0.5, exactly half the cyl.
```

```
RESULTANT PRISM, full worked shape:

  Vertical component   v = 1.0Δ Base Down
  Horizontal component h = 1.5Δ Base Out

  Magnitude:  r = √(1.0² + 1.5²) = √3.25 = 1.8Δ
  Reference:  α = arctan(v/h) = arctan(1.0/1.5) = 33.7°
  Quadrant:   down and out → 180-270° for OD
  Placed:     180 + 33.7 = 213.7°

  Sanity check that costs one second: r must be BIGGER than either component
  and SMALLER than their sum. Here 1.5 < 1.8 < 2.5. ✓
```

```
SEGMENT OPTICAL CENTRE DISTANCES (the h in image jump):

  Round-top (Kryptok)   → 11 mm → h = 1.1 cm
  Flat-top (FT-28/35)   →  7 mm → h = 0.7 cm
  Ultex                 → 20 mm → h = 2.0 cm
  Executive / Franklin  →  0 mm → h = 0    → ZERO IMAGE JUMP

  The Executive answer is a fact, not a calculation. Its OC sits on the seg line.
```

> **Base direction, the two wordings.** They give opposite answers and the stem's exact phrasing decides which applies.
> "Decentred" → plus lens SAME direction, minus lens OPPOSITE.
> "From the optical centre", or the OC does not match the PD → plus lens OPPOSITE, minus lens SAME.
>
> **Quadrant placement for the resultant** (OD; mirror the horizontal component for OS):
> up and in → α · up and out → 180 − α · down and out → 180 + α · down and in → 360 − α
> The engineered distractor is the mirror quadrant, which is the correct answer for the other eye. Check OD versus OS before committing.

Depth: D1-01 Formula 3, D1-02 Formula 7, D2-01 Resultant Prism and Image Jump, D2-01 Fast Picks.

---

## Block 5 — Prescription Algebra

No units and no physics here, only bookkeeping. Which is exactly why the losses are careless ones.

**Transposition, three steps:**

```
  1. New sphere   = old sphere + old cylinder   (algebraic)
  2. New cylinder = same magnitude, FLIPPED sign
  3. New axis     = old axis ± 90               (keep the result in 0-180)
                    add 90 if axis ≤ 90, subtract 90 if axis > 90

  Example: Plano −2.00 × 45
    sphere  = 0 + (−2.00) = −2.00
    cyl     = +2.00
    axis    = 45 + 90 = 135
    Result  = −2.00 +2.00 × 135
```

**The optical cross check.** Thirty seconds, and it catches every transposition slip:

```
  At the CYL AXIS meridian:      power = sphere alone
  At the meridian 90° AWAY:      power = sphere + cylinder

  Original  Plano −2.00 × 45  →  at 45°: 0.00 D    at 135°: −2.00 D
  Transposed −2.00 +2.00 × 135 → at 135°: −2.00 D  at 45°: 0.00 D  ✓

  If the two crosses do not match, the transposition is wrong. No exceptions.
```

**Cross-cylinder to sphero-cylinder:**

```
  Given a cross such as  −2.50 × 155 = +1.50 × 65

  1. Pick either cylinder → it becomes the SPHERE
  2. New cylinder = (the other cylinder) − (the one you picked)
  3. New axis     = the axis of the cylinder you did NOT pick

  Picking −2.50:  sph −2.50, cyl = +1.50 − (−2.50) = +4.00, axis 65
                  → −2.50 +4.00 × 65
  Picking +1.50:  sph +1.50, cyl = −2.50 − (+1.50) = −4.00, axis 155
                  → +1.50 −4.00 × 155

  Both are correct and both describe the same lens. Match whichever form the options use.
```

**Sphero-cylinder to cross-cylinder:**

```
  Given  +3.25 −0.50 × 90

  Cylinder 1 = the sphere, at an axis 90° from the given axis:  +3.25 × 180
  Cylinder 2 = sphere + cyl, at the given axis:                 +2.75 × 90
  Result: +3.25 × 180 = +2.75 × 90
```

**Reading and intermediate prescriptions:**

| Want | Formula | What stays fixed |
|---|---|---|
| Reading Rx | sphere = distance sphere + full add | Cylinder and axis unchanged |
| Intermediate Rx | sphere = distance sphere + (½ × add) | Cylinder and axis unchanged |

**Toric transposition, the three forms.** These come up as multi-step fabrication items:

| Form | Meaning | Where the cylinder goes |
|---|---|---|
| SVTT | Single vision toric | Convert to PLUS cyl; base curve on the front; back sphere = plus sph − BC |
| FBTT | Fused bifocal toric | Convert to MINUS cyl; front stays a sphere; toric on the back |
| UBTT | Ultex / one-piece bifocal toric | Convert to PLUS cyl; toric on the FRONT; back sphere = negative BC |

```
BASE CURVE SELECTION (used in toric transposition):

  Rx −2.25 to −4.00 D  → BC 4.00 D
  Rx +2.00 to −2.00 D  → BC 6.00 D
  Rx +2.25 to +4.50 D  → BC 8.00 D
```

> Executive and Franklin bifocals are one-piece, so they take UBTT. Fused segments take FBTT. Name the seg type first and the form follows.

Depth: D1-01 Formula Breakdown transposition subsections, D2-01 Toric Transposition.

---

## Block 6 — Thick Lens, Vertex Distance, and Magnification

The one formula family where lens thickness stops being ignorable.

| Formula | Use it when | The trap |
|---|---|---|
| `Dn = D₁ + D₂` | Nominal (approximate) power | This is the value that ignores thickness |
| `Deq = D₁ + D₂ − (t/n)(D₁ × D₂)` | Equivalent power | The product term carries its own sign |
| `BVP = Dn + (t/n)(D₁)²` | Back vertex, what the lensometer reads | Uses the FRONT surface power, squared |
| `FVP = Dn + (t/n)(D₂)²` | Front vertex, neutralising power | Uses the BACK surface power, squared |
| `D_new = D/(1 − d × D)` | Vertex change, specs to CL and back | d in METRES; 14 mm is 0.014 |
| `SM = 1/[(1 − (t/n)D₁) × (1 − d·F_v)]` | Spectacle magnification | Two factors, both denominators |
| `CLM = 1 − d × D_Spec` | CL versus spectacle image size | Note it is a subtraction, not a division |

```
THICK LENS, one worked set so the pattern is visible (t = 7 mm, n = 1.6, D₁ = +12.00, D₂ = −5.00):

  t/n = 0.007/1.6 = 0.004375

  Dn  = +12.00 + (−5.00)                        = +7.00 D
  Deq = +7.00 − 0.004375 × (+12.00 × −5.00)     = +7.00 + 0.26 = +7.26 D
  BVP = +7.00 + 0.004375 × (+12.00)²            = +7.00 + 0.63 = +7.63 D
  FVP = +7.00 + 0.004375 × (−5.00)²             = +7.00 + 0.11 = +7.11 D

  Read the pattern: BVP uses D₁², FVP uses D₂², Deq uses the product. All three
  start from Dn. That is the only thing to remember.
```

```
VERTEX CONVERSION, the direction that trips people:

  D_new = D / (1 − d × D)        d in metres, POSITIVE when moving the lens CLOSER

  −8.00 D spectacle at 4 mm vertex, what does it become at the cornea?
    = −8.00 / (1 − 0.004 × (−8.00))
    = −8.00 / (1 + 0.032)
    = −8.00 / 1.032
    = −7.75 D

  Sanity check: moving a MINUS lens closer to the eye needs LESS minus.
                Moving a PLUS lens closer needs MORE plus.
  If your answer moved the wrong way, the sign inside the bracket is flipped.
```

> **When it matters.** Below about 4.00 D the vertex correction rounds away. Above it, the exam expects it. A stem that bothers to tell you the vertex distance is telling you to use it.

**Relative spectacle magnification, and the choice it drives:**

| Ametropia type | With spectacles | With CLs | Which to prefer |
|---|---|---|---|
| Refractive (aphakia, corneal astigmatism) | RSM = 1 + d·F_Spec | RSM ≈ 1 | Contact lenses |
| Axial (most myopia) | RSM ≈ 1 | RSM = 1 − (f_eye − 1.55)·F_Spec | Spectacles |

> Myope: specs minify, CLs give a bigger image. Hyperope: specs magnify, CLs give a smaller image. Aphakia in spectacles runs about +30 % magnification, which is why CLs are the answer to almost every aphakia-plus-aniseikonia stem.

Depth: D1-01 Thick Lenses, D2-01 Effective Power and Spectacle Magnification, D3-01 CL Optics.

---

## Block 7 — Dispensing and Fabrication

| Formula | Use it when | The trap |
|---|---|---|
| `s = r − √(r² − y²)` | Exact sagitta | y is the SEMI-diameter, half the lens size |
| `s ≈ y²/(2r)` | Approximate sagitta | Fine when y is small relative to r |
| `D = 1000 × s × 2(n − 1)/A²` | Surface power from calipers | A is also a semi-diameter |
| `T_true = D_marked × (n − 1)/0.530` | Lens clock on non-crown material | The clock is calibrated for n = 1.530 |
| `Frame PD (DBC) = A + DBL` | Before any decentration sum | A is eye size, DBL is bridge |
| `Decentration = (Frame PD − Patient PD)/2` | Per eye, in mm | The ÷2 is per eye; forgetting it doubles the answer |
| `d = P/D` | Prism achieved by decentring | Result is in cm; convert to mm to answer |
| `Segment inset = (Distance PD − Near PD)/2` | From the distance OC | Distance PD first, near PD second |
| `Total inset = (Frame PD − Near PD)/2` | From the geometric centre | Frame PD, not distance PD |

```
INSET, showing the two add up (Rx OU −3.00 add +1.00, dist PD 62, near PD 60, A 45, DBL 20):

  Frame PD    = 45 + 20 = 65      → 32.5 mm from frame centre
  Near PD     = 60                → 30.0 mm from frame centre
  Total inset = 32.5 − 30.0       = 2.5 mm per eye

  Check: decentration (65−62)/2 = 1.5  +  seg inset (62−60)/2 = 1.0  = 2.5 ✓

  Total inset = distance decentration + segment inset. Always.
```

```
SAGITTA, plus versus minus:

  Plus lens:  centre thicker than edge → s = CT − ET
  Minus lens: edge thicker than centre → s = ET − CT

  Same formula, and the subtraction order is the only thing that changes.
```

**Benchwork sequence** (order questions appear most years): centering, layout, cutting, chipping/crumbling, edging, glazing/mounting.

**Periscopic lens:** plus lenses have a back surface of −1.25 D; minus lenses have a front surface of +1.25 D.

Depth: D2-01 Sagittae Formula, Benchwork Stages, Boxing System.

---

## Block 8 — Contact Lenses

| Formula | Use it when | The trap |
|---|---|---|
| `D = (n − 1)/r` | CL surface power | r in metres, or use the 1000 form for mm |
| `D_CL = D_Spec/(1 − d × D_Spec)` | Spectacle Rx to CL power | Same formula as Block 6; d in metres |
| `Residual astig = Total astig − Corneal astig` | K readings plus spectacle cyl | Total comes from refraction, corneal from Ks |
| `CLM = 1 − d × D_Spec` | Image size change moving to CLs | Below 1 for plus, above 1 for minus |

```
RESIDUAL ASTIGMATISM, the decision it drives:

  Total (spectacle) astigmatism  −3.00 D
  Corneal astigmatism (Ks)       45.00 − 43.00 = 2.00 D
  Residual                       3.00 − 2.00 = 1.00 D

  > 0.75 D  → toric CL needed
  ≤ 0.75 D  → spherical RGP is adequate; the tear lens handles it

  Why: the RGP tear lens neutralises the CORNEAL component only. The residual is
  mostly LENTICULAR, and no tear lens can reach inside the eye.

  Soft lenses drape and form NO tear lens, so a SCL corrects ≤0.75 D of astigmatism
  at best and anything more needs a toric SCL.
```

**Accommodation demand, specs versus CLs.** No formula, and it is asked as a direction:

| Patient | Moving specs to CLs | Clinical consequence |
|---|---|---|
| Myope | Accommodation demand INCREASES | May need a near add sooner |
| Hyperope | Accommodation demand DECREASES | Near add may be postponed |

Depth: D3-01 CL Optics, Vertex Distance Conversion, Residual Astigmatism, CL Magnification.

---

## Block 9 — Accommodation and Working Distance

| Formula | Use it when | The trap |
|---|---|---|
| `Min AOA = 15 − 0.25 × age` | Lower bound for the age | Below this is pathological, not aging |
| `Ave AOA = 18.5 − 0.30 × age` | Expected value | The most-asked of the three |
| `Max AOA = 25 − 0.40 × age` | Upper bound | Watch the 0.40 slope |
| `Near point (cm) = 100 / AOA` | Amplitude to distance | Same reciprocal as Block 1 |
| `Add = near demand (D) − AOA available` | Reading add | Demand is 100/working distance in cm |

```
HOFSTETTER at 40 years, the age worth having pre-computed:

  Min = 15   − 0.25(40) = 5.00 D
  Ave = 18.5 − 0.30(40) = 6.50 D
  Max = 25   − 0.40(40) = 9.00 D

  Reading the result: measured amplitude BELOW the minimum for the age is not
  presbyopia, it is accommodative insufficiency. That distinction is the item.
```

```
RETINOSCOPY WORKING DISTANCE, subtract it from the gross finding:

  67 cm  → subtract 1.50 D
  50 cm  → subtract 2.00 D
  100 cm → subtract 1.00 D

  WITH motion   → add plus to neutralise
  AGAINST motion → add minus to neutralise
  NEUTRAL       → far point is AT the working distance
```

Depth: D1-01 Formula 4 and Optical Instruments.

---

## Sign Conventions, All in One Table

Half of D's wrong answers are the right magnitude with a wrong sign. This is the table to rebuild from memory.

| Quantity | Positive means | Negative means |
|---|---|---|
| Lens power D | Converging, plus, thicker at centre | Diverging, minus, thicker at edge |
| Focal length f | Real focus on the far side | Virtual focus on the near side |
| Object distance p | Real object (the normal case) | Virtual object, only inside a multi-element system |
| Image distance q | Real image | Virtual image, on the object's own side |
| Magnification m | Upright (erect) | Inverted |
| \|m\| | Greater than 1 is magnified | Less than 1 is minified |
| Radius R | Convex toward the incoming light | Concave toward the incoming light |
| Cylinder | Plus-cyl form | Minus-cyl form; both describe the same lens |

**Three shortcuts that skip the sign work entirely:**

- Real images are always inverted. Virtual images are always upright. They arrive together.
- A myope's correction is always minus, a hyperope's always plus. A positive answer for a myope means a setup error.
- A minus lens can only ever produce a virtual, upright, minified image. No object distance changes that.

---

## The Unit Traps

Ranked by how often they actually cost a mark.

| # | Trap | The rule |
|---|---|---|
| 1 | Prentice with d in mm | d must be cm. Or use P = (mm × D)/10 |
| 2 | Vertex distance in mm | d must be metres. 14 mm is 0.014 |
| 3 | Wrong reciprocal constant | 1 for m, 100 for cm, 1000 for mm, 40 for inches |
| 4 | Surface power with the wrong multiplier | The multiplier follows R's unit, not the answer's |
| 5 | Thickness in mm inside t/n | t must be metres |
| 6 | Semi-diameter versus full diameter | Sagitta's y and the caliper's A are both HALF the lens |
| 7 | Forgetting the ÷2 in decentration | Decentration and inset are both per eye |
| 8 | Prism angle in Δ used as degrees | Δ = 100 tan θ converts first |
| 9 | Sag in mm inside the caliper formula | That formula already carries the 1000 |
| 10 | Mixing p, q and f units | Pick one unit and convert everything into it before starting |

> The habit that removes most of these: **write the converted numbers down before starting the algebra.** Not in your head. The conversion is where the mark goes, so it deserves ink.

---

## Constants That Plug Into Formulas

Only the values that appear inside a calculation. The full anatomical set is in the D1 Constants Anchor Card.

| Constant | Value | Which formula needs it |
|---|---|---|
| c, speed of light | 300,000 km/s (186,000 mi/s) | n = c/v |
| n, cornea | 1.376 | Surface power, Snell |
| n, aqueous and vitreous | 1.336 | Surface power |
| n, crown glass | 1.523 | Critical angle, reflectance |
| n, CR-39 | 1.498 | Reflectance, thickness |
| n, polycarbonate | 1.586 | Critical angle, thickness |
| n, Trivex | 1.532 | Material comparisons |
| n, lens clock calibration | 1.530 | T_true correction |
| R, anterior cornea | 7.7 mm | Surface power |
| R, posterior cornea | 6.8 mm | Surface power |
| Corneal power | +43 D | Any eye-model sum |
| Total eye power, Gullstrand | 58.64 D | Schematic eye items |
| Total eye power, reduced eye | 60 D | Simplified calculations |
| Optimal pinhole diameter | 1.2 mm | Diffraction items |
| Standard vertex distance | 12-14 mm | Vertex conversion |
| Toric base curves | 4.00 / 6.00 / 8.00 D | Toric transposition |

---

## Board Traps

- **Prentice in millimetres.** The most reliably engineered distractor in the whole subject. One option is your answer, one is your answer ÷10 or ×10. Convert first.
- **The mirror-quadrant resultant prism.** When all four options share one magnitude, the item is testing direction. The twin option is the correct answer for the other eye.
- **Base direction wording.** "Decentred" and "from the optical centre" flip the rule. Read the exact phrase before choosing.
- **Transposition axis.** An option whose axis is not exactly 90° from the original is wrong regardless of how right the powers look.
- **Full cylinder at an in-between meridian.** sin²α only equals 1 at 90° from the axis. A 45° meridian takes half.
- **Resultant prism added.** Any option equal to v + h is bait. The answer is the hypotenuse, always between the larger component and the sum.
- **BVP versus FVP.** BVP squares the FRONT surface, FVP squares the BACK. Swapping them produces a plausible wrong number.
- **Vertex correction in the wrong direction.** Minus lenses need less minus as they move closer; plus lenses need more plus.
- **Executive image jump.** It is zero, and the item usually offers a computed non-zero value that looks reasonable.
- **Residual astigmatism from a soft lens.** SCLs form no tear lens, so the corneal-versus-lenticular split does not apply the way it does for RGPs.

---

## High-Yield Summary

- Nine blocks, not fifty formulas. Naming the block is most of the work.
- Convert units on paper before any algebra. That single habit removes the majority of D's lost marks.
- Settle magnitude and direction as two separate decisions. Distractors are built on the assumption you will fuse them.
- Real means inverted, virtual means upright. Never two facts.
- Effective power and vertex conversion are one formula read in two directions.
- BVP squares the front surface, FVP squares the back, Deq uses the product, all built on Dn.
- The optical cross verifies every transposition in about thirty seconds.
- Total inset always equals distance decentration plus segment inset. Use it as a check.
- Residual astigmatism above 0.75 D means toric. Below it, spherical RGP.
- A measured amplitude below Hofstetter's minimum for the age is pathology, not presbyopia.

---

## Pen and Paper Drills

### Drill 1 — Block Naming, 5 minutes

Write the nine block names from memory in order. Under each, write how many formulas it holds. Then check against this page. The count matters more than the formulas; it tells you which block you are underweighting.

### Drill 2 — Blank Vault Rebuild, 25 minutes

One block per sitting, cold. Rule a sheet into three columns: Formula, Use it when, Trap. Fill the Use it when column first, from memory, then write the formula each cue demands. Building it in that order matches how the exam presents the problem.

Rotation: Block 4 (prism) and Block 5 (Rx algebra) twice as often as the rest. They carry the most items and the most engineered distractors.

### Drill 3 — Unit Conversion Sprint, 10 minutes

Write ten quantities in the wrong unit and convert each before doing anything else. Examples to generate: 8 mm decentration for Prentice, 14 mm vertex for a conversion, 7 mm thickness for t/n, a 45 mm eye size into a semi-diameter. No algebra, only conversion. This is deliberately boring and it is the drill that moves the score.

### Drill 4 — Sign Table from Memory

Cover the sign conventions table. Rewrite all eight rows, then write the three shortcuts underneath. Mark yourself only on the rows you got backwards, and rewrite those five times.

### Drill 5 — Direction-Only Set

Take ten past prism items and answer ONLY the base direction, skipping the magnitude entirely. Getting direction right independent of the arithmetic is the skill; doing them together lets a right magnitude hide a wrong direction.

### Drill 6 — Teach-Back

Pick one formula per session and say aloud, without notes: what each symbol is, what unit it demands, what the answer's sign tells you, and what the engineered wrong answer would be. If you cannot state the wrong answer, you do not yet know the formula well enough to defend it under time.

### Recall Interval Schedule

| Sitting | When | What |
|---|---|---|
| 1 | Same day | Drill 1 and one block from Drill 2 |
| 2 | Day 1 | Drill 3, then a different block |
| 3 | Day 3 | Drill 4 and Drill 5 |
| 4 | Day 7 | Full-vault rebuild, all nine blocks |
| 5 | Day 14 | Drill 5 and Drill 6 on the blocks that failed at day 7 |

---

## Verify Before Relying

Four formulas that appear in Philippine TO papers are **not currently derived anywhere in the D notes**. They are listed here for completeness, flagged so they are not mistaken for sourced material. Confirm each against a lecture handout before trusting it under exam conditions.

| Formula | What it does | Status |
|---|---|---|
| `D = 337.5/r` (r in mm) | Keratometric dioptric power from corneal radius, using the keratometric index 1.3375 | Standard, but no D note derives it |
| Tear lens: steeper base curve adds plus, flatter adds minus (SAM/FAP) | RGP power adjustment from the fitting relationship | Referenced conceptually in D3-01, no worked rule |
| `MBS = ED + 2×decentration + 2 mm` | Minimum blank size for edging | Not in D2-01 |
| `Add ≈ near demand − ½ amplitude` | Reading add leaving half the amplitude in reserve | D1-01 uses full available amplitude instead |

If any of these turn out to be examinable, they should be written up properly in D1, D2 or D3 with the full breakdown, and then summarised back here. A formula that only exists on the summary page is a formula without a why.
