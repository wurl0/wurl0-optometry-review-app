# WAA | Board Review 2026
## D1-02 — Geometric Optics: Reflection, Refraction, Lenses, Mirrors, and Prisms
*Personal study notes | TOS: D.1 | Syllabi: Theoretical Optics Section 2.0 — Basic Optics*

---

## The Simple Version

Geometric optics is the set of rules that predict exactly where light goes when it hits a surface, passes through a material, or enters a lens. Four things happen to light: it reflects off surfaces, refracts (bends) when crossing between media, gets deviated by prisms, and converges or diverges through lenses. Every clinical instrument you use in optometry — the retinoscope, keratometer, lensmeter, ophthalmoscope, trial lens set — works because of these four behaviors. The thin lens equation (1/p + 1/q = 1/f) and the mirror equation (same formula) predict where every image forms. Prentice's rule is just the prism equation applied to lenses. Master these equations and every image-formation problem in optometry collapses into algebra.

**Teaching angle:** Ask students — "The mirror formula and the thin lens formula are identical. Why?" Because both describe the same physical principle: light rays bending or reflecting to converge at a point, with the same relationship between object distance, image distance, and focal length.

---

## But Why?

**Why is the angle of incidence always equal to the angle of reflection?**
Because reflection is elastic — light bounces off a surface the same way a billiard ball bounces off a cushion at perfect elasticity. The perpendicular component of velocity reverses; the parallel component is unchanged. That exact symmetry produces equal angles.

**Why does a concave mirror produce a real image while a convex mirror never does?**
Because a concave mirror focuses reflected rays inward — they converge to a real point in front of the mirror. A convex mirror always diverges reflected rays outward — they never converge, so they can only appear to come from a virtual point behind the mirror.

**Why does an object in water appear shallower than it really is?**
Because the refracted rays traveling from water to air bend away from the normal. When your eye traces these rays backward in a straight line (as the eye always does), it locates the apparent source at the shallower intersection point, not at the actual depth.

**Why does a prism displace the image toward the apex, not the base?**
Because light bends toward the base. The eye follows the emerging ray backward — in the direction opposite to the displacement of the ray — which points toward the apex. The image appears where the eye traces the emerging ray back to, which is the apex side.

---

## The Details

### Terminology Unpacked

| Term | Meaning | Context |
|---|---|---|
| Normal | Latin *normalis* — perpendicular | Imaginary line perpendicular to the surface at the point of incidence; all angles measured from this |
| Specular reflection | Latin *speculum* — mirror | Regular reflection from smooth surfaces; rays reflect uniformly |
| Diffuse reflection | Latin *diffundere* — to spread | Irregular reflection from rough surfaces; rays scatter in all directions |
| Center of curvature (C) | — | Center of the sphere from which a curved mirror was cut; C = 2F |
| Focal point (F) | — | Point where parallel rays converge after reflection (concave) or appear to diverge from (convex) |
| Radius of curvature (R) | — | Distance from vertex to center of curvature; R = 2f |
| Curvature (C) | — | Reciprocal of radius: C = 1/r; mirror power F = 2C = 2/r |
| Vertex (V) | — | Center of the mirror surface where the principal axis meets it |
| Principal axis | — | Line passing through the center of curvature and the vertex |
| Plane refractor | — | Flat slab of transparent material with parallel surfaces; no dioptric power; only displaces light |
| Lateral displacement | — | Sideways shift of the ray after passing through a plane refractor; direction unchanged |
| Shallowing effect | — | Objects in denser media appear closer than they really are because refraction makes emerging rays appear to come from a shallower point |
| Prism diopter (△) | — | Deflection of 1 cm at 1 m distance; the standard clinical unit for prism power |
| Apex | Latin *apex* — tip | Thin edge of a prism where the two refracting surfaces meet |
| Base | — | Thick edge of a prism opposite the apex |
| Surface power (D) | — | Refractive power contributed by a single curved surface, determined by its radius and the n difference across it |

---

## Formula / Law / Rule / Theory Breakdown

---

### Law 1 — Laws of Reflection

```
Law 1: Angle of incidence (i) = Angle of reflection (r)
Law 2: The incident ray, the reflected ray, and the normal all lie in the same plane
```

**What each part means:**
- Angle of incidence = angle between the incoming ray and the normal (not the surface)
- Angle of reflection = angle between the reflected ray and the normal
- "Same plane" = these three lines are coplanar — they don't go off in a third dimension

**Where it comes from:**
Euclid described equal angles around 300 BCE. Newton's corpuscular theory explained it mechanically (elastic bounce). Wave theory confirmed it — at a perfectly smooth surface, the wavefront reverses its perpendicular component while maintaining its parallel component. The result: perfect angular symmetry.

**The analogy that makes it click:**
A billiard ball hitting a flat cushion at perfect elasticity: the ball's horizontal speed stays the same; only the vertical component reverses. If you throw the ball at 30° to the cushion, it bounces off at 30° on the other side. Light is the ball; the normal is the perpendicular to the cushion.

**Why i = r and not i = 90° − r or some other formula:**
Any other relationship would require a surface that adds or removes energy from the light during reflection. Perfectly elastic reflection conserves energy completely — the only way to do that with an equal-and-opposite bounce is equal angles.

**What it does NOT explain:**
Laws of reflection apply to specular (smooth) surfaces. Diffuse (rough) reflection has the same law at each microscopic point, but the surface normals point in random directions — so the reflected rays scatter everywhere even though each individual ray obeys i = r.

**Cross-subject connections:**
- **C4 (Retinoscopy):** The retinoscopy reflex is created by light reflecting off the retina. The direction and movement of the reflex follows reflection geometry — understanding that the reflex comes from a specific retinal location and travels back through the optical system at specific angles is fundamental to interpreting the retinoscopy finding.
- **A2-03 (Cornea):** The corneal reflex in Hirschberg testing and the keratometer mire images both use specular reflection off the anterior corneal surface. The position of the reflex directly measures corneal curvature through reflection geometry.

**Reading the Result — Reflection:**

| Finding | What it means |
|---|---|
| Reflex exactly on center of cornea | No angle kappa; no apparent deviation |
| Reflex displaced temporally | Positive angle kappa OR exotropia — use cover test to distinguish |
| Smooth, sharp mire image on keratometer | Regular corneal surface (regular astigmatism or emmetropia) |
| Distorted mire image | Irregular corneal surface (keratoconus, corneal scar) |

---

### Formula 2 — Mirror Equation

```
1/p + 1/q = 1/f        (same as thin lens equation)

p = object distance (from vertex to object; always positive for real objects)
q = image distance (from vertex to image)
f = focal length (from vertex to focal point); f = R/2

Linear magnification:  m = −q/p = i/o
```

**What each part means:**
- 1/p = vergence of incoming light (how strongly the rays diverge from the object)
- 1/q = vergence of reflected light (how strongly rays converge to form image)
- 1/f = the mirror's "bending power" — how much vergence it adds per unit of reflection
- The equation says: incoming vergence + mirror power = outgoing vergence

**Where it comes from:**
The mirror equation is a geometric consequence of the law of reflection applied to a curved surface. For a spherical mirror with radius R, tracing just two rays (using the laws of reflection) shows that they meet at a distance q where 1/p + 1/q = 2/R = 1/f. It was first derived rigorously by Alhazen around 1000 CE.

**The analogy that makes it click:**
Think of the mirror as a "vergence machine." Light arriving from an object carries a certain amount of divergence (= 1/p). The mirror adds its own convergence (= 1/f). The result (1/q) tells you how much total convergence the reflected light has — which tells you where it focuses.
- If 1/f is large (strong mirror, short f) → image forms close
- If the object is very far away (1/p ≈ 0) → image forms at the focal point

**Why f = R/2:**
The center of curvature C is at distance R. For a ray hitting the mirror at the vertex and one parallel to the axis, both reflect and meet exactly halfway between V and C — at R/2. This is a geometric consequence of equal angles at every point on a sphere.

**Sign conventions for mirrors:**

| | Positive (+) | Negative (−) |
|---|---|---|
| f | Concave mirror (converging) | Convex mirror (diverging) |
| q | Real image (in front of mirror) | Virtual image (behind mirror) |
| m | Upright image | Inverted image |
| i (image size) | Upright | Inverted |

**Reading the Result — Mirror Equation:**

| Result | What it means | Practical interpretation |
|---|---|---|
| q positive | Real image — forms in FRONT of the mirror | Can be projected on a screen; real |
| q negative | Virtual image — forms BEHIND the mirror | Cannot be projected; apparent image only |
| m = +1 | Same size; upright | Object at C of concave mirror... no, that gives m = −1. m = +1 → virtual, upright, same size (not a standard case) |
| m = −1 | Same size; inverted | Object exactly at C of concave mirror (q = C = 2f) |
| |m| > 1 | Magnified | Object between F and C of concave; or any position for concave (virtual case) |
| |m| < 1 | Minified | Object beyond C (concave); or any position on convex mirror |
| m positive, |m| > 1 | Upright AND magnified → virtual | Object between F and V (inside F) of concave mirror — magnifying mirror |
| m negative, |m| < 1 | Inverted AND minified → real | Object beyond C of concave mirror |

> **Concave mirror cases — the six rules:**
>
> | Object position | Image | Location | m sign |
> |---|---|---|---|
> | At ∞ | Real, inverted, point | At F | − |
> | Beyond C | Real, inverted, minified | Between C and F | − |
> | At C | Real, inverted, same size | At C | −1 |
> | Between C and F | Real, inverted, magnified | Beyond C | − |
> | At F | No image | — | undefined |
> | Between F and V | Virtual, upright, magnified | Behind mirror | + |
>
> **Convex mirror: ALWAYS virtual, upright, minified — regardless of object position.**

**Cross-subject connections:**
- **C4 (Objective Examination):** Direct ophthalmoscope produces a 15× virtual upright image (equivalent to object inside F — concave mirror case 6). Indirect ophthalmoscope produces a real inverted image (equivalent to case 2 or 4). The mirror equation explains why each instrument gives the image it does.
- **F7 (Low Vision — Magnification):** Stand magnifiers use a concave lens or mirror to produce a virtual upright magnified image — directly applying the mirror/lens equation with the object inside the focal length.

---

### Formula 3 — Lateral Displacement (Plane Refractor)

```
d = t × sin(i − R) / cos R

d = lateral displacement (same units as t)
t = thickness of the plane refractor (glass slab)
i = angle of incidence
R = angle of refraction (found via Snell's law first)
```

**What each part means:**
- A plane refractor has two parallel flat surfaces — light exits parallel to how it entered (no permanent angular deviation) but shifted sideways by distance d
- t = how thick the glass is (more glass = more shift)
- (i − R) = the angle between the original ray direction and the direction inside the glass — this is the "tilt" inside the material
- cos R = corrects for the oblique path the light takes while traveling thickness t inside the medium

**Where it comes from:**
The derivation is pure geometry. Inside the glass, the ray travels at angle R. The perpendicular path through thickness t at angle R has actual path length = t/cos R. The sideways component of this path = (t/cos R) × sin(i − R). Simplifying gives d = t sin(i − R)/cos R.

**The analogy that makes it click:**
Imagine walking straight into a shallow pool at an angle, then walking out the other side. Inside the pool, your path bends toward the vertical (less tilt). When you come out, you're tilted the same as when you entered — but you've shifted sideways because you walked a slightly different angled path inside. The thicker the pool (more glass), the more sideways shift.

**Why the direction is preserved but displacement occurs:**
Because both surfaces are parallel. At the first surface, Snell's law bends the ray toward normal. At the second surface, the reverse happens — the ray exits at the original angle. Net angular effect = zero. But the offset path inside creates a lateral shift.

**Reading the Result — Lateral Displacement:**

| Result | What it means | Clinical note |
|---|---|---|
| d > 0 | Light is displaced in the direction away from the normal | Expected for any oblique incidence |
| d = 0 | Normal incidence (i = 0) | Ray hits surface perpendicularly; no displacement |
| Larger t (thicker glass) | More lateral displacement | Thick glass presents more displacement — relevant in high-power lenses |
| Larger (i − R) | More displacement | Steeper angle of approach = more shift |

---

### Formula 4 — Shallowing Effect (Apparent Depth)

```
q / n' = p / n

q = apparent distance (image distance from surface)
n' = index where the observer is (usually air = 1.0)
p = actual distance (object distance from surface)
n = index where the object is (denser medium)

Simplified (observer in air): q = p × (n'/n) = p / n
```

**What each part means:**
- The object is at actual depth p inside a denser medium (water, glass)
- The observer in air traces the refracted rays backward — they appear to come from a shallower point q
- The ratio n'/n tells you how much shallower: since n > n', q < p — the object appears closer than it is

**Where it comes from:**
This is Snell's law applied to the paraxial approximation (small angles). For small angles, sin θ ≈ tan θ ≈ θ. The geometry of the refracted rays traced backward gives q = p × (n_observer / n_object). This was known to ancient opticians but formalized with Snell's law.

**The analogy that makes it click:**
You're in a swimming pool looking up. Your friend outside looks straight down and sees you — but your image appears 25% closer to the surface than you actually are (water n=1.33, so you appear at 1/1.33 = 75% of your actual depth). This is why pools look shallower than they are, and why fish appear closer than they are to a bird.

**Reading the Result — Shallowing Effect:**

| Finding | What it means | Board trap |
|---|---|---|
| q < p | Object appears CLOSER than actual — expected when going dense→rare | Objects in water always look shallower to an observer in air |
| q = p/n | For observer in air: apparent depth = actual depth ÷ n | A coin at 40cm in water (n=1.33) appears at 40/1.33 = 30cm |
| q > p | Object appears FARTHER than actual — when going rare→dense | A bird in air appears farther away to a fish underwater |
| n > 1.33 → smaller q | Denser medium = more shallowing | Dense glass makes objects appear even closer |

> **Clinical application:** Slit-lamp depth measurements of corneal foreign bodies, anterior chamber depth, and lens thickness must be corrected for the refractive index of the cornea/aqueous. The apparent position of structures is always shallower than the actual depth by a factor of n.

---

### Formula 5 — Thin Lens Equation

```
1/p + 1/q = 1/f     (identical to mirror equation)

p = object distance (from optical center of lens)
q = image distance (from optical center of lens)
f = focal length of the lens
D = 1/f (in meters) = lens power in diopters

Linear magnification: m = −q/p = i/o
```

**What each part means:**
- 1/p = vergence of light arriving at the lens from the object (divergent = positive, from real object)
- 1/q = vergence of light leaving the lens toward the image
- 1/f = how much vergence the lens adds per pass-through (= dioptric power)
- The equation is simply: vergence in + lens power = vergence out

**Where it comes from:**
Derived from Snell's law applied to both surfaces of a thin lens simultaneously, assuming the lens is thin enough that both refractions happen at the same plane. René Descartes formulated it around 1637. For a thick lens, additional correction is needed.

**The analogy that makes it click:**
Same "vergence machine" as the mirror. An object sends divergent rays toward the lens — those rays carry 1/p of divergence. The lens adds 1/f of convergence. The result 1/q tells you the remaining vergence after the lens acts. If 1/q is positive, the rays are converging (real image). If negative, they're still diverging (virtual image).

**Sign conventions for lenses:**

| | Positive (+) | Negative (−) |
|---|---|---|
| f | Converging (convex/plus) lens | Diverging (concave/minus) lens |
| p | Real object (in front of lens) | Virtual object |
| q | Real image (behind lens) | Virtual image (same side as object) |
| m | Upright image | Inverted image |

**Reading the Result — Thin Lens Equation:**

| Result | What it means | Practical test |
|---|---|---|
| q positive | Real image — forms on FAR side of lens from object | Can be projected on a screen or film |
| q negative | Virtual image — forms on SAME side as object | Cannot be projected; eye must look through lens to see it |
| m = −q/p positive | Upright image → virtual | Magnifying glass; reading glasses over CL; indirect ophthalmoscope? No — that's real |
| m = −q/p negative | Inverted image → real | Camera, eye, projector |
| |m| > 1 | Magnified | Object between F and 2F (real, inverted) or inside F (virtual, upright) |
| |m| < 1 | Minified | Object beyond 2F (real, inverted); any position for minus lens |

> **The practical two-question check after every lens calculation:**
> 1. Is q positive or negative? → Tells you real or virtual.
> 2. Is m positive or negative? → Tells you upright or inverted.
> These two answers, combined with |m|, completely describe the image.

**Sample calculations — worked in full:**

```
Problem 1: Converging lens (+5.00 D = f 20 cm), object 30 cm away.

1/30 + 1/q = 1/20
1/q = 1/20 − 1/30 = 3/60 − 2/60 = 1/60
q = +60 cm → REAL image (behind lens)

m = −q/p = −60/30 = −2.0
m negative → INVERTED; |m| = 2 → MAGNIFIED 2×
Result: Real, inverted, magnified, 60cm behind lens
```

```
Problem 2: Concave lens (−20 cm = f), object 35 cm away.

1/35 + 1/q = 1/(−20) = −0.05
1/q = −0.05 − 1/35 = −0.05 − 0.0286 = −0.0786
q = −12.73 cm → VIRTUAL image (same side as object)

m = −(−12.73)/35 = +0.36
m positive → UPRIGHT; |m| = 0.36 → MINIFIED
Result: Virtual, upright, minified — ALWAYS for concave lens
```

```
Problem 3: Concave mirror (f = 20 mm), tooth 16 mm away (dentist's mirror)

1/16 + 1/q = 1/20
1/q = 1/20 − 1/16 = 4/80 − 5/80 = −1/80
q = −80 mm → VIRTUAL image (behind mirror)

m = −(−80)/16 = +5.0
m positive → UPRIGHT; |m| = 5 → MAGNIFIED 5×
Result: Virtual, upright, magnified 5× — classic magnifying mirror use case
```

---

### Formula 6 — Surface Power of a Single Refracting Surface

```
D = (n₂ − n₁) / R    (R in meters)
D = 100(n₂ − n₁) / R  (R in cm)
D = 1000(n₂ − n₁) / R (R in mm)
D = 40(n₂ − n₁) / R   (R in inches)

D = refractive power of the surface
n₁ = index of the incoming medium (usually air = 1.0)
n₂ = index of the refracting medium
R = radius of curvature (positive for convex, negative for concave, towards incident light)
```

**What each part means:**
- (n₂ − n₁) = the "step" in optical density at the surface — larger step = more bending
- R = how curved the surface is — smaller R = tighter curve = more power
- D is inversely proportional to R: tighter curves give more power per same n difference

**Where it comes from:**
Derived from Snell's law applied to a curved surface in the paraxial approximation. The power of a single surface depends on the n difference across it and its curvature. If n₂ = n₁, the surface has no power regardless of curvature (explains why a lens in water with matching index becomes powerless).

**The analogy that makes it click:**
Think of the n difference as the "steepness of the hill" at the surface, and R as the "width of the doorway." A large n step (steep hill) with a tight curve (narrow door) creates maximum bending. The cornea works this way: large n step (air 1.0 → cornea 1.376) with a relatively tight radius (7.8mm) gives the eye's most powerful surface at 43D.

**Reading the Result — Surface Power:**

| Result | What it means | Clinical connection |
|---|---|---|
| D positive | Convex surface — converging | Front surface of cornea (+48D), front surface of plus spectacle lens |
| D negative | Concave surface — diverging | Posterior corneal surface (−5D reduces total corneal power to ~43D) |
| D ≈ 0 despite curvature | n₁ ≈ n₂ (matching media) | Contact lens in tear film — reduces corneal surface power to near zero; the CL's own surfaces take over |
| Large D from small R | Tight curvature = high power | Keratoconic cornea: steep K reading → high corneal power → myopia |
| Large D from large n step | n difference matters more than curvature | Air-cornea interface (n step 0.376) far more powerful than aqueous-lens interface |

**Sample calculations:**

```
Cornea: R = 7.7 mm, n₁ = 1.0 (air), n₂ = 1.376
D = 1000(1.376 − 1.0) / 7.7 = 1000(0.376)/7.7 = +48.83 D (front surface)

Posterior cornea: R = 6.8 mm, n₁ = 1.376, n₂ = 1.336
D = 1000(1.336 − 1.376) / 6.8 = 1000(−0.04)/6.8 = −5.88 D (reduces total)

Net corneal power ≈ 48.83 − 5.88 ≈ 43 D ✓
```

---

### Formula 7 — Prism Diopter and Deviation

```
PRISM DIOPTER DEFINITION:
△ = displacement (cm) / distance (m)
△ = 100 tan θ
tan θ = △/100

PRISM ANGLE FORMULA:
a = θ / (n − 1)

a = apical angle of the prism (degrees)
θ = angle of deviation (degrees)
n = index of refraction of prism material
```

**What each part means:**
- A prism diopter is how much the prism deflects a ray — measured as centimeters of displacement per meter of distance
- 1△ = 1 cm of displacement at 1 meter (like Prentice's rule)
- θ = how many degrees the ray is bent; tan θ converts this to the displacement ratio
- a = the physical "wedge angle" of the glass; combined with n, it determines θ

**Where it comes from:**
Prentice defined the prism diopter in the 1890s to give clinicians a unit that directly relates to measurement on a screen at known distance. The apical angle formula comes from the small-angle approximation: for small-angle prisms (all ophthalmic prisms), the deviation θ ≈ (n−1) × apical angle. So a = θ/(n−1).

**The analogy that makes it click:**
Imagine holding a wedge of glass in front of your eye. The wedge is thicker at the base. Light passing through the thick side bends more than the thin side. The thicker the base (larger apical angle) AND the denser the glass (larger n), the more the light bends. The deviation θ = apical angle × (n−1). Double the apical angle → double the deviation. Use denser glass (higher n) → same apical angle gives more deviation.

**Properties of prisms — the four rules:**

```
1. Light bends TOWARD THE BASE
2. Object (image) is displaced TOWARD THE APEX
3. The eye turns TOWARD THE APEX (to follow the deviated ray)
4. Prisms do NOT change vergence — diverging rays stay diverging; no dioptric power
```

**Clinical use of prisms in spectacles:**

| Condition | Prism needed | Base direction |
|---|---|---|
| Esotropia (eye turns in) | Need to diverge → pull gaze out | Base OUT (BO) — image shifts nasally, eye follows |
| Exotropia (eye turns out) | Need to converge → pull gaze in | Base IN (BI) — image shifts temporally, eye follows |
| Hypertropia (eye turns up) | Need to pull gaze down | Base DOWN (BD) on the hypertropic eye |
| Hypotropia (eye turns down) | Need to pull gaze up | Base UP (BU) on the hypotropic eye |

> **Clinical Aha rule:** The CORRECTING prism has its BASE pointing in the direction the eye needs to go — toward the deviated direction.
> - Eye turns IN (esotropia) → needs to go OUT → Base OUT corrects it
> - Eye turns OUT (exotropia) → needs to go IN → Base IN corrects it

**Reading the Result — Prisms:**

| Result | What it means | Trap |
|---|---|---|
| P = 5△, looking through BO prism | Light bends toward base; image displaced toward apex (nasal) | Image displacement = TOWARD APEX — opposite to base direction |
| P = 0△ | Object is at the optical center of the lens | No prism effect anywhere along the optical axis |
| Large △ through high-power lens | Significant image displacement at reading distance | Prentice's rule: P = d × F — larger the distance from OC, larger the prism |
| a large for small n−1 material | Need thick glass prism for same deviation | High-index glass (larger n−1) gives more deviation per unit of apical angle → thinner prism |

**Sample prism calculations:**

```
2.5△ prism, n = 1.507. Find apical angle:
tan θ = 2.5/100 = 0.025 → θ = 1.43°
a = 1.43 / (1.507 − 1) = 1.43 / 0.507 = 2.82°

5.5△ prism, a = 4°. Find n:
tan θ = 5.5/100 → θ = 3.15°
4 = 3.15/(n−1) → n−1 = 0.7875 → n = 1.79

Decentration: −8.00 D lens, patient looks 12mm below OC:
P = 1.2 cm × 8.00 = 9.6△ Base Down
(Minus lens: base opposite to decentration direction; looking down = inferior decentration; base is DOWN)
```

---

### Structure or Process Map

**Cylinder lenses and astigmatism classification:**

```
CYLINDER LENS:
  — Power varies by meridian
  — Maximum power: at the POWER MERIDIAN (90° from axis)
  — Zero power: at the AXIS MERIDIAN
  — Used to correct astigmatism

TYPES OF ASTIGMATIC PRESCRIPTION:

1. Simple cylinder (sphere = 0):
   Plano −1.25 × 90 (simple myopic astigmatism at 90°)
   +1.25 × 180 (simple hyperopic astigmatism)

2. Compound cylinder (both meridians same sign, sph ≠ cyl):
   −1.00 −0.50 × 180 (compound myopic)
   +1.00 +0.50 × 90  (compound hyperopic)

3. Mixed cylinder (one meridian plus, other minus; |cyl| > |sph|):
   +1.25 −2.50 × 180 (this is mixed — one meridian +1.25D, other −1.25D)

4. Cross cylinder (no sphere; two pure cylinders):
   +1.25 × 45 = −1.00 × 135
```

**Types of lens forms:**

```
PLUS LENSES (converging; thicker at center):
  Biconvex — two convex surfaces
  Plano-convex — one flat, one convex
  Equiconvex — both surfaces equal curvature
  Plus meniscus — front convex, back concave (front steeper)

MINUS LENSES (diverging; thinner at center):
  Biconcave — two concave surfaces
  Plano-concave — one flat, one concave
  Equiconcave — both surfaces equal
  Minus meniscus — front convex, back concave (back steeper)

PERISCOPIC FORMS (reduce aberrations):
  Plus periscopic: back surface = −1.25 D
  Minus periscopic: front surface = +1.25 D

MASS PRODUCTION: Most lenses are meniscus form — reduces off-axis aberrations
```

**Lens movement test (neutralization):**

```
Move the lens in any direction:

AGAINST movement (object moves opposite to lens direction) → PLUS lens
WITH movement (object moves same direction as lens) → MINUS lens
NO movement → Plano (no power)

This is the fundamental clinical neutralization test used with retinoscopy and in the dispensing lab.
```

---

### Comparisons That Matter

**Plane mirror vs Spherical mirror:**

| Feature | Plane mirror | Concave mirror | Convex mirror |
|---|---|---|---|
| Image orientation | Upright | Upright (inside F) OR inverted (outside F) | Always upright |
| Image size | Same as object | Variable (depends on position) | Always minified |
| Image nature | Virtual | Virtual (inside F) OR real (outside F) | Always virtual |
| Focal length | ∞ (no focal point) | Positive | Negative |
| Field of view | Narrow (= mirror size) | Narrow | Wide (diverging rays) |
| Clinical use | Patient hand mirrors | Dentist's mouth mirror, makeup mirror | Rearview mirrors, security mirrors |

**Concave vs Convex lens movement test:**

| Action | Plus (convex) lens | Minus (concave) lens |
|---|---|---|
| Move lens upward | Object appears to move DOWN | Object appears to move UP |
| Move lens right | Object appears to move LEFT | Object appears to move RIGHT |
| Remember | Against movement = PLUS | With movement = MINUS |
| Why | Plus lens creates real inverted image for objects beyond F; image moves opposite | Minus lens creates virtual upright image; image moves same direction |

---

### Numbers and Values to Know

| Parameter | Value | Clinical Significance |
|---|---|---|
| Mirror: f = R/2 | f is always half the radius of curvature | Concave mirror with R=40mm → f=20mm |
| Convex mirror focal length | Always negative | Virtual focus; always minified images |
| Plane mirror image | Object distance = image distance; same size | Upright, virtual, lateral reversal (perverted) |
| 1° of prism deviation | = 1.75△ | Conversion between degrees and prism diopters |
| Prism: light bends | TOWARD BASE | Object appears displaced TOWARD APEX |
| Plane refractor | No dioptric power; only lateral displacement | Parallel exit ray; d = t sin(i−R)/cos R |
| Shallowing: observer in air | q = p/n | Object in water at 40cm appears at 40/1.33 = 30cm |
| Surface power (cornea front) | ~+48D | Cornea contributes ~2/3 of total eye power |
| Surface power (cornea back) | ~−6D | Posterior surface REDUCES total power |
| Net corneal power | ~43D | Result of both surfaces |
| Curvature formula | C = 1/r; mirror power F = 2C = 2/r | Steeper curve (smaller r) = higher power |
| Spherical aberration | Peripheral rays focus closer than paraxial rays (concave mirror) | Caused by spherical surface geometry; paraboloidal mirrors eliminate it |

---

### Memory Anchors

**Mirror cases — "BSCV FMAV" (Beyond, Same, between C and F, at F, before V → Minified, Same, Magnified):**
Beyond C: minified; at C: same size; between C and F: magnified; at F: no image; before F (inside F): virtual magnified

**Prism rules — "BASE is the Bully; APEX is the Address":**
Light bends TOWARD BASE; image displaced TOWARD APEX; eye turns TOWARD APEX

**Esotropia → Base OUT; Exotropia → Base IN:**
"The base points toward where the eye needs to go"

**Lens movement test — "PLUS = AGAINST; MINUS = WITH":**
Plus lens moves against you; minus lens moves with you. Like a seesaw: plus pushes back.

**Surface power rule — "No n-step = No power":**
If n₁ = n₂, the surface does nothing regardless of curvature. Contact lens in matching tear film = no corneal power.

**Shallowing rule — "Divide by n to find apparent depth":**
Actual depth ÷ n = apparent depth (for observer in air)

---

## Visual Map

```
MIRROR EQUATION (identical to lens equation)
─────────────────────────────────────────────
1/p + 1/q = 1/f

Object → Mirror         Image location:
near (p < f):  q < 0 → virtual, behind mirror (UPRIGHT, MAGNIFIED)
at f:          q = ∞ → no image
p > f:         q > 0 → real, in front of mirror (INVERTED)

PRISM DEVIATION
────────────────────────────────────
        APEX (thin)
         /
        /  ← image displaced here (toward apex)
       /   ← eye turns here (toward apex)
------/--------  (optical interface)
       \   ← light bends here (toward base)
        \
        BASE (thick)

SIGN CONVENTION SUMMARY (lenses and mirrors)
─────────────────────────────────────────────
f (+): converging (convex lens / concave mirror)
f (−): diverging (concave lens / convex mirror)
q (+): real image (far side of lens / front of mirror)
q (−): virtual image (near side of lens / behind mirror)
m (+): upright image
m (−): inverted image
|m| > 1: magnified
|m| < 1: minified
```

---

## Board Traps

- **Trap 1:** "The image in a plane mirror is real" — Wrong. Always virtual and upright, same size, same distance behind the mirror as object in front.
- **Trap 2:** "A convex mirror can form a real image" — Wrong. Convex mirrors always form virtual, upright, minified images regardless of object position.
- **Trap 3:** "The prism base direction tells you which way the image moves" — Wrong. Light moves toward the BASE; the IMAGE moves toward the APEX. Opposite directions.
- **Trap 4:** "A plane refractor has dioptric power and changes vergence" — Wrong. A plane refractor (flat glass slab) only laterally displaces rays. The exit ray is parallel to the entrance ray — no change in vergence, no dioptric power.
- **Trap 5:** "A minus lens can produce a real image" — Wrong. A minus (concave) lens always produces a virtual, upright, minified image regardless of object position.
- **Trap 6:** "Surface power only depends on the radius of curvature" — Wrong. Surface power depends on BOTH the radius AND the n difference across the surface. A surface with matching media (n₁ = n₂) has zero power regardless of curvature.
- **Trap 7:** "Objects in water always appear at their true depth" — Wrong. Objects in denser media appear closer to the observer due to refraction (shallowing effect). Apparent depth = actual depth ÷ n.
- **Trap 8:** "Correcting prism for esotropia is Base In" — Wrong. Esotropia needs Base OUT. The eye deviates inward; the base points outward to draw the gaze back out.
- **Trap 9:** "The lens movement test shows WITH movement for a plus lens" — Wrong. Plus lens shows AGAINST movement (object moves opposite to lens direction). Minus = WITH.

---

## High-Yield Summary

| Must-Know | Answer |
|---|---|
| Laws of reflection | i = r; incident ray, normal, reflected ray coplanar |
| Plane mirror image | Virtual, upright, same size, same distance behind mirror |
| Convex mirror image | Always virtual, upright, minified |
| f for concave mirror | Positive |
| f for convex mirror | Negative (diverging) |
| Mirror/lens formula | 1/p + 1/q = 1/f |
| q positive → | Real image (front of mirror / behind lens) |
| q negative → | Virtual image (behind mirror / same side as object) |
| m positive → | Upright image |
| m negative → | Inverted image |
| Concave lens image | Always virtual, upright, minified |
| Shallowing formula | q = p × (n_observer / n_object) |
| Prism: light bends | TOWARD BASE |
| Prism: image displaced | TOWARD APEX |
| Esotropia corrected by | Base OUT prism |
| Exotropia corrected by | Base IN prism |
| 1° deviation = | 1.75△ |
| Surface power formula | D = (n₂ − n₁)/R × conversion factor |
| Contact lens reduces corneal power because | n step between air and cornea eliminated; replaced by n step at CL back surface |
| Lens movement test: plus = | AGAINST movement |
| Lens movement test: minus = | WITH movement |

---

## Practice Questions

**1.** A dentist uses a concave mirror with radius of curvature 40mm to examine a tooth positioned 15mm from the mirror. What type of image is formed and what is the magnification?

- A. Real, inverted, magnified
- B. Virtual, upright, magnified
- C. Real, inverted, minified
- D. Virtual, upright, minified

<details>
<summary>Answer</summary>

**B. Virtual, upright, magnified.**

f = R/2 = 40/2 = 20mm. Object at 15mm = inside the focal length (15 < 20). When the object is between F and the mirror, the concave mirror produces a virtual, upright, magnified image behind the mirror (same as a magnifying mirror). Using the formula: 1/15 + 1/q = 1/20 → 1/q = 1/20 − 1/15 = 3/60 − 4/60 = −1/60 → q = −60mm (negative = virtual, behind mirror). m = −q/p = −(−60)/15 = +4. Positive m = upright; |m| = 4 = magnified 4×. This is exactly how dentist's mouth mirrors work — they are concave mirrors used with the tooth just inside the focal length to produce a magnified virtual image.

</details>

---

**2.** A prism is prescribed for a patient with 8△ of right exotropia. The correct prism for the right eye is:

- A. 8△ Base Out right eye
- B. 8△ Base In right eye
- C. 4△ Base Out each eye
- D. 4△ Base In each eye

<details>
<summary>Answer</summary>

**B. 8△ Base In right eye (or D: 4△ Base In each eye — both are acceptable splits).**

Exotropia means the right eye deviates outward (temporally). To correct it, the prism must redirect the visual axis inward (nasally). A Base In prism has its apex temporal — light bends toward the base (nasal), and the eye follows the image toward the apex (temporal). Wait — re-reading: image displaces toward APEX. Apex is temporal → image appears temporal → eye moves toward apex (temporal). That would increase the exotropia. Let me reconsider.

**Correction:** For exotropia (eye turns OUT), the correcting prism is Base IN. Here's the reasoning: the prism must move the image nasally (inward) so the eye moves inward to fixate it. With Base IN, the base faces nasally — light bends toward the nasal base — the image displaces toward the temporal APEX. The eye follows TOWARD THE APEX (temporal)... this seems wrong.

**Clarification:** The rule is — the CORRECTING prism base points toward the deviated direction. Right exotropia = eye deviated OUT (temporal). Correcting prism base points INWARD (nasal) = Base IN. This places the base between the deviated eye and the image, bending light toward it. Answer: **B** (Base In right eye) or **D** (split equally). The Board most commonly asks for the full prism on the affected eye: B.

</details>

---

**3.** A coin sits 40cm below the surface of water (n=1.33). Where does the coin appear to an observer directly above the water?

- A. 40 cm below the surface
- B. 30 cm below the surface
- C. 53 cm below the surface
- D. 27 cm below the surface

<details>
<summary>Answer</summary>

**B. 30 cm below the surface.**

Using the shallowing formula for an observer in air (n' = 1.0):
q = p × (n'/n) = 40 × (1.0/1.33) = 40/1.33 = 30.08 ≈ 30 cm.

The coin appears 30cm deep, not 40cm. This is the shallowing effect — objects in denser media always appear closer to the observer due to refraction at the surface. The ratio 1/n = 1/1.33 = 0.75 means objects in water appear at 75% of their actual depth. This is also why pools appear shallower than they are, and why slit-lamp depth measurements must be corrected by dividing by the medium's index.

</details>

---

## Pen and Paper Drills

> Close note first. Write first, check after.

### Drill 1 — Brain Dump
Write "GEOMETRIC OPTICS." 5 minutes. Write: laws of reflection (2 laws), plane mirror image properties, mirror equation, thin lens equation, prism direction rules, shallowing formula, surface power formula, lens movement test.

**Core targets:**
1. Mirror and lens equation (same formula) — write it and state what each variable's sign means
2. Prism: which way does light bend? Which way does the image move?
3. Correcting prism directions for esotropia, exotropia, hypertropia, hypotropia

### Drill 2 — Blank Diagram
Draw the six cases of image formation for a concave mirror. For each case, sketch object position relative to F and C, sketch the image location, and write one-word descriptors (real/virtual, upright/inverted, same/larger/smaller).

### Drill 3 — Teach-Back Write
Explain the shallowing effect to a patient who asks why the water in the pool looks so shallow. Start from what happens to light at the surface. Do not use the word "refraction" until your final sentence.

### Drill 4 — Flash Card Prompts

| Front | Back |
|---|---|
| Plane mirror image? | Virtual, upright, same size, same distance behind |
| Convex mirror image? | Always virtual, upright, minified |
| q positive in lens/mirror eq? | Real image |
| q negative? | Virtual image |
| m positive? | Upright |
| m negative? | Inverted |
| Prism: light bends toward? | BASE |
| Prism: image displaced toward? | APEX |
| Esotropia → prism? | Base OUT |
| Exotropia → prism? | Base IN |
| Plus lens movement test? | AGAINST (with-against rule) |
| Shallowing: object at 40cm in water (n=1.33)? | Appears at 30cm |
| Surface power = 0 when? | n₁ = n₂ (matching media) |

### Drill 5 — Calculation Set (all formula types)

Work all of these without looking at rules. Use the sign convention table to interpret each answer:

1. Concave mirror (f=30cm), object 20cm away → find q, m, describe image
2. Convex mirror (R=60cm), object 40cm away → find q, m, describe image
3. Converging lens (+3.00D), object 40cm away → find q, m
4. Diverging lens (f=−15cm), object 25cm away → find q, m
5. Shallowing: diamond (n=2.417) cube 30cm below surface → apparent depth?
6. Prism: 3.5△ prism, n=1.523 → find apical angle
7. Lens decentration: +6.00D lens, patient looks 8mm temporal to OC → P=? Base direction?

### Recall Interval Schedule

| Session | When | Drill |
|---|---|---|
| 1st | Today | Brain Dump |
| 2nd | Tomorrow | Six-case concave mirror diagram + Flash Cards |
| 3rd | 3 days | Teach-Back (shallowing to patient) |
| 4th | 1 week | Full calculation set (all 7 problems) |
| Final | 2 weeks | All drills |

---

## Sources Used

- [x] `TO-Compiled-Notes.md` — Reflection (laws, types, plane mirror, spherical mirror), mirror equation with sample problems, refraction laws, plane refractors (lateral displacement), shallowing effect, critical angle, thin lens equation with sample problems, surface power formula, cylinder lenses (types), prisms (parts, properties, deviation, prism diopter, Prentice's rule, clinical use, decentration)
- [x] `SYLLABI-TOPIC-MAP.md` — TOS D.1 scope reference (Theoretical Optics Section 2.0 — Basic Optics)

---

*Note written: June 5, 2026 | Confidence: [ ] Low [ ] Okay [ ] Solid*
