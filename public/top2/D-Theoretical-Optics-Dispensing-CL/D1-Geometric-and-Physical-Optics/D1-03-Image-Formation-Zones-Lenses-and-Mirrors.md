# WAA | Board Review 2026
## D1-03 — Image Formation Zones: Where the Image Goes and Why
*Personal study notes | TOS: D.1 | 150 items*

> **Companion note.** `D1-02` holds the equations (mirror equation, thin lens equation, sign conventions, magnification). This note holds the layer underneath them: how to see the answer before you calculate, and how to eliminate options by scanning. Use D1-02 when a number is required. Use this note when the stem only asks "what kind of image forms?"
>
> **Interactive:** `D1-Image-Formation-Zones-Interactive.html` drives a lens and a concave mirror from one slider so you can watch the two produce identical descriptions at every object position. Use it for Drill 2 before you draw the number line from memory, then close it and draw. `D1-Ray-Diagram-Interactive.html` is the lens-only ray tracer and covers the ray construction rather than the zones.

---

## The Simple Version

> *Explain this like you're teaching it to someone who has never seen it before. No jargon. One clear paragraph.*

A converging lens has a fixed amount of bending power, and the object and the image have to share it. Picture the object and the image sitting on opposite ends of a seesaw balanced in the middle. Push the object toward the lens and the image runs away from the lens. Pull the object back and the image comes in close. They cross paths at exactly one spot, the place we call 2F, and that is the only position where they sit at equal distances and come out the same size. Everything else follows from that one movement. If the image ends up farther out than the object, it is bigger. If it ends up closer in, it is smaller. And if you shove the object so close that it passes the focal point, the light never gets to converge at all, so the image stops being something you could catch on a screen and becomes something your brain has to invent by tracing the rays backward.

**Teaching angle:** Hand the class a spoon. Ask them to look at their face in the curved-in side, then slowly move it away until they flip upside down. Then ask: "What just happened at the moment you flipped?" That moment is F, and they will never forget it because they felt it.

---

## But Why?

*The 5-Why chain. Start from the clinical observation and drill down to the mechanism.*

**Why does an object at exactly 2F produce an image the same size as itself?**
Because the image also lands at 2F on the other side, and magnification is just the ratio of those two distances.

**Why does the image land at 2F when the object is at 2F?**
Because the lens has a fixed vergence budget of 1/f, and at that position the object's divergence and the image's convergence each take exactly half of it: 1/2f + 1/2f = 1/f.

**Why does the budget have to split evenly at that one position and nowhere else?**
Because 1/p and 1/q must always sum to 1/f. If one term grows, the other must shrink. The only point where they can be equal is when both equal half the total, which forces p = q = 2f.

**Why does one term growing force the other to shrink?**
Because the lens cannot add more convergence than it has. Its power is fixed by its curvature and index. Light arriving with more divergence uses up more of that fixed power, so less is left over to converge the light on the far side.

**Why does that produce a virtual image when the object goes inside F?**
Because once the object is closer than f, its divergence (1/p) is larger than the entire budget (1/f). The lens spends everything it has and the light is still diverging when it leaves. 1/q goes negative. Nothing converges anywhere, so no light physically meets at a point. Your visual system, which always assumes light travels in straight lines, traces the diverging rays backward and places an image where they appear to have come from. That is the whole meaning of the word "virtual."

> This chain is the one to rehearse. Every zone rule in this note is a consequence of the fixed-budget idea in Why 3 and Why 4.

---

## The Details

---

### Terminology Unpacked

| Term | Literal Meaning / Word Roots | What It Actually Means in Context |
|---|---|---|
| Real image | Latin *res*, "thing" | Light physically arrives and crosses at that point. You could hold a card there and see it. Always inverted for a single element with a real object. |
| Virtual image | Latin *virtus*, "power/capacity", something that acts as if it were there | Light never arrives at that point. The rays only appear to come from it when traced backward. Cannot be caught on a screen. Always upright for a single element with a real object. |
| Conjugate | Latin *con-* "together" + *jugare* "to yoke", i.e. yoked together | The object plane and image plane are locked to each other. Swap them and the optics still work. This is why the 2F/2F case is symmetric. |
| Conjugate foci | — | The paired object and image positions for a given lens. Every object position has exactly one image position. |
| Magnification (linear/lateral) | Latin *magnus*, "great" | Image height ÷ object height. Computed as m = −q/p, so it is really just the ratio of the two distances with a sign attached. |
| Erect / upright | — | Same orientation as the object. Interchangeable words on the board; do not read a distinction into them. |
| Minified | Latin *minus*, "less" | Smaller than the object. The board also says "diminished" and "reduced." Same thing. |
| Inverted | Latin *invertere*, "to turn upside down" | Upside down relative to the object. On the board this always travels with "real." |
| 2F (lens) | — | Twice the focal distance. The symmetry point. |
| C, center of curvature (mirror) | — | The center of the sphere the mirror was cut from. Since f = R/2, **C sits at 2f**. C is the mirror's 2F. |
| Vertex (V) | Latin *vertex*, "highest point/crown" | The pole of the mirror, where the principal axis meets the surface. Distances for mirrors are measured from here. |

> **Lookalike trap flagged:** mirror questions say "C" and lens questions say "2F." Students memorize two separate tables and then blank under pressure. **They are the same landmark.** C = 2F. Once you see that, the concave mirror table stops being new information.
>
> **Second lookalike:** "real" and "erect" never appear together for a single element with a real object; neither do "virtual" and "inverted." If an option pairs them, it is fabricated.

---

### How It Works — The Mechanism

**The trigger:**
An object sits somewhere on the principal axis and radiates diverging light toward the element.

**The sequence:**
1. Light leaves the object diverging. The amount of divergence it carries is 1/p. The closer the object, the more steeply it diverges, so the larger 1/p is.
2. The element adds a fixed amount of convergence, 1/f, set by its curvature and index. This number does not change no matter where the object goes.
3. What is left over is the outgoing vergence, 1/q. That leftover decides everything: its sign says real or virtual, its size says near or far.
4. The image height is then forced by geometry: the chief ray through the optical center is undeviated, so the image and object heights sit in the same ratio as their distances. m = −q/p.

**The key players:**
- Object distance p — role: the demand on the system. Always positive for a real object. Bigger demand as the object comes closer.
- Focal length f — role: the fixed supply. Positive for converging (plus lens, concave mirror), negative for diverging (minus lens, convex mirror).
- Image distance q — role: the leftover. Positive means real, negative means virtual.
- The optical centre / chief ray — role: the reason magnification is a pure distance ratio and not something more complicated.

> The whole topic is supply and demand on a fixed budget. Once p is the demand and f is the supply, every zone rule is arithmetic you can see without doing.

---

### Formula / Law / Rule / Theory Breakdown

---

**Rule: The Conjugate Zone Rule (the seesaw)**

```
1/p + 1/q = 1/f          with p always positive for a real object
m = −q/p

Consequences, in the order you use them on the board:
  (1) sign of q      → real (+) or virtual (−)
  (2) real ⇒ inverted ; virtual ⇒ upright
  (3) |m| = q/p      → whichever is FARTHER from the element is BIGGER
  (4) p = 2f         → q = 2f, m = −1, the symmetry point
```

**What it states in plain language:**
The object and the image trade places around the lens. Move one closer and the other moves away, and the one sitting farther from the lens is always the bigger of the two.

**What each part means:**
- p = how far the actual thing is from the lens. Physically, how steeply its light is spreading when it arrives.
- q = how far from the lens the light either converges (positive) or appears to come from (negative).
- f = the fixed bending budget of the element. Nothing the object does changes it.
- The **sum** in 1/p + 1/q = 1/f is the crux: because the right side is fixed, the two terms on the left are locked in a trade. This is the mathematical form of the seesaw.
- The **minus sign** in m = −q/p exists to encode orientation, not size. It is the bookkeeping that makes "real" and "inverted" arrive together automatically instead of being two separate facts to memorize.

**Where it comes from:**
The relation traces to Alhazen's work on spherical mirrors around 1000 CE, later generalised to refracting surfaces. The observation that forced it: a lens does not have one image position, it has a different image position for every object position, yet the pattern is orderly. People needed a single statement that predicted all of them. The reciprocal form appears because what actually adds linearly in optics is vergence (the reciprocal of distance), not distance itself. That is why the equation looks awkward until you stop reading it as distances and start reading it as vergences.

**The analogy that makes it click:**
Two people splitting a fixed bill.

- The bill total is 1/f. This is the lens's power and it never changes.
- The object's share is 1/p. A close object is a greedy diner: steep divergence, big share.
- What is left for the image is 1/q.

Now every case falls out:
- Object far away → tiny share (1/p ≈ 0) → the image pays almost the whole bill (1/q ≈ 1/f) → image sits at F.
- Object at 2f → its share is 1/2f, exactly half the bill → the image's share is the other half → image at 2f too. **Equal shares means equal distances means same size.** This is why 2F is the symmetry point and not some arbitrary memorized case.
- Object between f and 2f → it takes more than half → less is left for the image → 1/q is small → q is large → image sits far out and is therefore magnified.
- Object at f → it takes the entire bill → nothing left → 1/q = 0 → q = infinity → no image forms.
- Object inside f → it demands more than the bill total → the account goes negative → 1/q negative → virtual image, on the object's own side.

The analogy maps exactly: fixed total ↔ 1/f, each diner's share ↔ 1/p and 1/q, overspending ↔ virtual image.

**Why this form and not another:**
Suppose the relation were p + q = constant instead of 1/p + 1/q = 1/f. Then the object and image would still trade off, but linearly, and there would be no focal point, no infinity case, and no virtual images. An object at any distance would always produce a real image somewhere. The reciprocal form is exactly what creates a hard boundary at p = f, and that boundary is the entire real/virtual divide. **The reciprocals are not a mathematical inconvenience; they are the thing that makes the focal point exist.**

Second test: suppose m were +q/p instead of −q/p. Then real images would come out upright, and the retinal image would not be inverted, and there would be no need for cortical reinversion. The minus sign is doing real physical work.

**What it does NOT explain (its limits):**
- Paraxial only. Rays far from the axis do not obey it; that is spherical aberration.
- Thin element only. For thick lenses and the eye itself you need principal planes and Gullstrand's cardinal points (see `D1-Gullstrand-Cardinal-Points-Interactive.html`).
- Single element with a **real** object. Inside a multi-element system the intermediate image can act as a virtual object with negative p, and the "real ⇒ inverted" shortcut breaks.
- Monochromatic. Says nothing about chromatic aberration.
- Spherical surfaces only. Says nothing about the two-focal-line behaviour of a toric surface, which is the whole of astigmatism.
- It gives lateral magnification only. Axial (depth) magnification behaves as the square of it, which is why a magnifier distorts depth more than width.

**Cross-subject connections:**
- **C4 (Objective Examination), indirect ophthalmoscopy:** the condensing lens is held so the patient's retina sits between F and 2F of the lens. That zone is exactly the "real, inverted, magnified" case, which is precisely why the BIO image is aerial, inverted, and reversed. Change the working distance and you slide along the zone table, which is why moving the lens changes both magnification and field.
- **C4, direct ophthalmoscopy:** the patient's own optics place the retina inside F of the eye's dioptric system, giving a virtual, upright, roughly 15× magnified image. Same rule, different zone, opposite answer. The two ophthalmoscopes are the same rule read at two different object positions.
- **F7 (Low Vision), simple and stand magnifiers:** a magnifier only works held closer than its focal length. That is the inside-F zone: virtual, upright, magnified. A stand magnifier fixes that distance mechanically so a patient with tremor cannot accidentally cross F and flip the image.
- **B1 / C2 (retinal image formation):** a real-world object sits far beyond 2F of the eye's +60 D system, which is the "real, inverted, minified" zone. This is the origin of the inverted retinal image, and therefore the reason the visual cortex must reinvert.
- **D2 (Dispensing), the same-size method of finding focal length:** slide an object and a screen until the image is exactly the same size as the object. That configuration is p = q = 2f, so f = p/2. The minimum possible object-to-screen separation for a real image is **4f**, and it occurs at this configuration. If the bench separation is less than 4f, no real image forms at any lens position.

**Reading the Result — instant interpretation rules:**

| Result / Value | What it tells you | Board / Clinical trap to watch |
|---|---|---|
| q positive | Real image. Opposite side for a lens, same side (in front) for a mirror | The side flips between lens and mirror; the sign convention does not |
| q negative | Virtual image, on the object's own side | Cannot be projected; the eye must look through/at the element |
| m = −1 | Same size, inverted, real | Object at exactly 2F (lens) or exactly C (mirror). This is the answer to "same size" stems |
| m negative, \|m\| < 1 | Real, inverted, minified | Object beyond 2F / beyond C |
| m negative, \|m\| > 1 | Real, inverted, magnified | Object between F and 2F / between F and C |
| m positive, \|m\| > 1 | Virtual, upright, magnified | Object inside F. The magnifying-glass case |
| m positive, \|m\| < 1 | Virtual, upright, minified | Only from a diverging element (minus lens or convex mirror), at any distance |
| 1/q = 0 | No image. Emergent rays parallel | Object exactly at F. The stem will say "at the focal point" |

> The key question for any result: **is the sign what I expect, and is the magnitude reasonable?** If m came out positive but you expected a projected image, you put the object on the wrong side of F.

---

### Structure or Process Map

**The decision tree, in the order to run it:**

```
Is the element converging or diverging?
  |
  +-- DIVERGING (minus lens, convex mirror)
  |     └── STOP. Virtual, upright, minified. Always. No zones. No exceptions.
  |
  +-- CONVERGING (plus lens, concave mirror)
        |
        Where is the object relative to F?
        |
        +-- INSIDE F -------> Virtual, upright, MAGNIFIED
        |                     (image on object's own side, farther out than the object)
        |
        +-- AT F -----------> No image. Rays emerge parallel. Image "at infinity"
        |
        +-- OUTSIDE F ------> REAL, INVERTED. Now compare to 2F (= C for a mirror):
              |
              +-- Between F and 2F ---> MAGNIFIED   (image beyond 2F)
              +-- At 2F --------------> SAME SIZE    (image at 2F)
              +-- Beyond 2F ----------> MINIFIED     (image between F and 2F)
              +-- At infinity --------> point image at F
```

**Why the last four lines do not need memorizing:**
Read them off the seesaw instead. In every one of those rows the image sits on the opposite side of 2F from the object, and the farther one is the bigger one. Object beyond 2F means image inside 2F means image is closer means image is smaller. You can regenerate the entire table from that one sentence.

---

### Comparisons That Matter

**Converging vs diverging: the reason one is hard and one is free**

| Feature | Converging (+ lens, concave mirror) | Diverging (− lens, convex mirror) |
|---|---|---|
| Focal length sign | Positive | Negative |
| Number of cases to know | Five zones | One. Always the same |
| Image nature | Real outside F, virtual inside F | Always virtual |
| Image orientation | Inverted outside F, upright inside F | Always upright |
| Image size | Depends on zone | Always minified |
| Image location | Anywhere from F to infinity | Always between the element and F |
| Everyday object | Magnifying glass, shaving mirror, spoon's inner curve | Car side mirror, shop security mirror, spoon's back |
| Board clue | The stem gives you a distance and expects you to compare it to f | The stem gives a distance and it is irrelevant. If you are calculating hard on a minus lens, you have misread the question |

**Lens vs mirror: the only real difference**

| Feature | Converging lens | Concave mirror |
|---|---|---|
| The symmetry landmark | 2F | C (and C = 2F, same place) |
| Real image sits | On the far side (light passes through and keeps going) | On the same side, in front (light bounces back) |
| Zone rules | Identical | Identical |
| Board clue | "Beyond 2F" | "Beyond C", the same sentence in different clothes |

> **The one line to carry into the exam room:** a concave mirror is a converging lens folded back on itself. Same five zones, same order, same answers. Only the side the real image lands on differs, and that is decided by where the light actually went.

---

### Numbers and Values to Know

Worked with f = +20 cm so the arithmetic is checkable at a glance.

| Object at p | q (calculated) | m | Image description |
|---|---|---|---|
| Infinity | +20 cm | 0 | Point image at F |
| 100 cm (beyond 2F) | +25 cm | −0.25 | Real, inverted, minified |
| 60 cm (beyond 2F) | +30 cm | −0.50 | Real, inverted, minified |
| **40 cm (at 2F)** | **+40 cm** | **−1.00** | **Real, inverted, same size** |
| 30 cm (between F and 2F) | +60 cm | −2.00 | Real, inverted, magnified |
| 25 cm (between F and 2F) | +100 cm | −4.00 | Real, inverted, magnified |
| 20 cm (at F) | infinity | undefined | No image, rays parallel |
| 15 cm (inside F) | −60 cm | +4.00 | Virtual, upright, magnified |
| 10 cm (inside F) | −20 cm | +2.00 | Virtual, upright, magnified |

| Parameter | Value | Clinical Significance |
|---|---|---|
| C in terms of f (mirror) | C = 2f, since f = R/2 | The mirror's C and the lens's 2F are the same landmark |
| Symmetry point | p = q = 2f, m = −1 | The same-size method for measuring focal length |
| Minimum object-to-image separation, real image | 4f | Below this separation no real image forms at any lens position |
| Boundary of real vs virtual | p = f | The single most tested threshold in this topic |
| Boundary of magnified vs minified (real images) | p = 2f | Second most tested |
| Direct ophthalmoscope magnification | about 15× | Virtual, upright. Inside-F case |
| Retinal image | Real, inverted, minified | Object far beyond 2F of the eye's +60 D system |

---

### Memory Anchors

**Story or analogy, the spoon test:**
You already own the experiment. Curved-in side of a spoon held close: your face is large and right way up. Move it away and you flip upside down and shrink. The flip happened when your face crossed F. Turn the spoon over and use the back: small, upright, always, no matter what you do. The inner curve is the concave mirror and behaves like a plus lens. The back is the convex mirror and behaves like a minus lens. One household object stores the whole topic.

**Pattern recognition, the two sentences that replace both tables:**
1. **The farther one is the bigger one.** (Gives you size, every time, for both lenses and mirrors, without a formula.)
2. **Only an object inside F makes a virtual image.** (Gives you nature and orientation, since real always means inverted and virtual always means upright.)

**Grouping trick:**
Diverging elements have no cases at all. Minus lens and convex mirror are always virtual, always upright, always minified. That deletes half the syllabus for this topic. All the difficulty lives in converging elements, and all of that is one seesaw.

**Derivable pattern, the bill split:**
1/p + 1/q = 1/f is two people splitting a fixed bill. Object far away pays little, image pays nearly all, image lands at F. Object at 2f, each pays half, image at 2f, same size. Object inside f, it overspends the whole bill, the account goes negative, image goes virtual. You never memorize the zones; you re-derive them in about four seconds.

---

## Visual Map

```
        CONVERGING LENS (f = 20 cm), object walking in from the left

   ...beyond 2F........ 2F ....... F ...... LENS ...... F ....... 2F .......
        |               |          |          |          |         |
   obj here        obj here    obj here       |     img lands   img lands
        |               |          |          |          |         |
        v               v          v          |          v         v
   real, inv,      real, inv,   NO IMAGE      |    (when obj      (when obj
   MINIFIED        SAME SIZE   (rays parallel)|     beyond 2F)     at 2F)
   img between     img at 2F                  |
   F and 2F                                   |
                                              |
   obj between F and 2F --> real, inv, MAGNIFIED, img beyond 2F
   obj INSIDE F ----------> virtual, upright, MAGNIFIED
                            img on the OBJECT'S side, farther out


        THE SEESAW (why the table above is not four separate facts)

              object  <-----------[ 2F ]-----------> image
                  push one in, the other runs out
                  they meet only at 2F/2F, where sizes are equal
                  WHOEVER IS FARTHER FROM THE LENS IS BIGGER


        CONCAVE MIRROR = the same picture, folded

              beyond C | at C | between C and F | at F | inside F
                 |        |           |            |        |
              minified  same       magnified    no image  virtual
                        size        (all real, inverted)   upright
                                                            magnified

              C = 2F.  Nothing new. Same five zones.


        DIVERGING (minus lens / convex mirror)

              [any object position] ---> virtual, upright, minified
              image always squeezed between the element and F
```

---

## Board Traps

- **Trap 1: "Real, inverted, larger" offered when the object is at exactly 2F.** Bait for anyone who registers "the object is fairly close" without checking whether the distance is exactly twice f. Divide p by f first. If the answer is exactly 2, the word is "same," never "larger."
- **Trap 2: "Virtual, magnified" offered for an object outside F.** Bait for anyone who remembers that a convex lens can magnify but never checks which side of F the object is on. A converging lens only produces virtual images from inside F.
- **Trap 3: "Real, erect" or "virtual, inverted" as options.** For a single element with a real object these do not exist. Cross them out on sight without reading the rest of the option. This alone often reduces four choices to two.
- **Trap 4: calculating on a diverging element.** If the stem gives a minus lens or a convex mirror and asks only for the image *description*, the numbers are decoration. Virtual, upright, minified. Answer and move on.
- **Trap 5: treating C and 2F as different landmarks.** A mirror stem saying "object beyond C" and a lens stem saying "object beyond 2F" are the same question. Students who memorized two tables freeze here.
- **Trap 6: forgetting which side the real image lands on.** Lens real image is on the far side; mirror real image is in front, on the object's side. The rule is not arbitrary: the real image is always where the light physically went. Light passes through a lens; light bounces back off a mirror.
- **Trap 7: "at F" stems.** The expected answer is that no image forms and the emergent rays are parallel, sometimes phrased as "image at infinity." Options offering a specific image size are all wrong.
- **Trap 8 (notation caution):** the Board Primer's sign list states "Image size (I) is (+) for real image, (−) for virtual image." That conflicts with I = m × O, where m is *negative* for real images. The magnification sign convention on the same page (m negative if real, positive if virtual) is the one consistent with m = −q/p and the one to use. Do not let the I-sign line contaminate your m-sign reasoning.

---

## High-Yield Summary

| Must-Know | Value |
|---|---|
| Object at 2F (or C) | Real, inverted, **same size**, image at 2F |
| Object beyond 2F (or C) | Real, inverted, minified, image between F and 2F |
| Object between F and 2F | Real, inverted, magnified, image beyond 2F |
| Object at F | No image; rays emerge parallel |
| Object inside F | Virtual, upright, magnified, image on object's side |
| Any diverging element, any distance | Virtual, upright, minified |
| Size rule, no formula needed | Whichever is farther from the element is bigger |
| Orientation rule | Real always inverted; virtual always upright |
| C vs 2F | Same landmark. C = 2f |
| Minimum object-to-image separation for a real image | 4f, at the 2F/2F configuration |
| Where a real image sits | Lens: far side. Mirror: in front. Wherever the light actually went |

---

## Fast Pick (elimination layer)

**Cue to scan:** the sign of the element (plus/minus, concave/convex), then p ÷ f.

**Fast-pick rule:**

| p ÷ f | Answer |
|---|---|
| less than 1 | virtual, upright, larger |
| exactly 1 | no image |
| between 1 and 2 | real, inverted, larger |
| exactly 2 | real, inverted, same size |
| more than 2 | real, inverted, smaller |
| any value, diverging element | virtual, upright, smaller |

**Elimination order:**
1. Kill every option pairing real with upright, or virtual with inverted. Usually removes one or two choices before any arithmetic.
2. If the element is diverging, pick "virtual, upright, smaller" and stop.
3. Otherwise compute p ÷ f, one division, and read the row above.
4. If two options survive and differ only in size, apply "the farther one is bigger" as the tiebreak.

**Distractor traps to cross out on sight:** "virtual, magnified" on an outside-F stem; "larger" on an exactly-2F stem; any real+upright or virtual+inverted pairing.

---

## Practice Questions

**1.** A concave mirror has a radius of curvature of 40 cm. An object is placed 30 cm in front of it. The image is:

- A. Real, inverted, minified
- B. Real, inverted, magnified
- C. Virtual, upright, magnified
- D. Real, upright, same size

<details>
<summary>Answer</summary>

**B. Real, inverted, magnified.**

f = R/2 = 20 cm, so C = 40 cm. The object at 30 cm sits between F (20) and C (40), which is the "real, inverted, magnified" zone. Confirm: q = pf/(p−f) = (30 × 20)/10 = +60 cm, m = −60/30 = −2. Image is 60 cm in front of the mirror, twice the size, inverted.

Seesaw check: the image (60) is farther from the mirror than the object (30), so the image is the bigger one. Consistent.

A is the beyond-C answer. C is the inside-F answer. **D is fabricated: real never travels with upright.** Note that the stem gives R, not f. Halving it first is the whole question.

</details>

---

**2.** An object is placed 10 cm from a +5.00 D lens. The image formed is:

- A. Real, inverted, 2× magnified
- B. Virtual, upright, 2× magnified
- C. Real, inverted, same size
- D. Virtual, upright, 0.5× minified

<details>
<summary>Answer</summary>

**B. Virtual, upright, 2× magnified.**

f = 100/5.00 = 20 cm. The object at 10 cm is inside F, so this is the simple-magnifier case. q = (10 × 20)/(10 − 20) = −20 cm (virtual, same side as the object), m = −(−20)/10 = +2.

Fast pick: p ÷ f = 10/20 = 0.5, less than 1, so virtual, upright, larger. One division and you are done.

A and C both require the object to be outside F. **D is impossible for a plus lens: a converging element can never produce a virtual minified image.** That is diverging-element behaviour, and it is the classic bait for students who mix the two tables.

Cross-link (F7): this is exactly a +5.00 D hand magnifier held 10 cm from print. Push it past 20 cm and the patient's image flips and becomes real, which is why patients report the print "going upside down" when they hold the magnifier too far out.

</details>

---

## Pen and Paper Drills

> **The rule:** Read the section. Close the note. Then do the drill. Only check after you've written something.

---

### Drill 1 — Brain Dump
Write the topic name at the top of a blank page. Set a 5-minute timer. Write everything you can retrieve without looking. Then open the note, compare, and circle every gap.

**What to brain dump for this note:**
1. The five converging zones in order, with image nature, orientation, size, and location for each
2. The two sentences that replace both tables (the size rule and the virtual rule)
3. The bill-split explanation of why 2F is the symmetry point

---

### Drill 2 — Blank Diagram or Table
Reproduce from memory, on paper.

**What to reproduce:** the Visual Map number line. Draw the axis, mark the lens, F and 2F on both sides. Then, for each of the five object zones, draw the object arrow and the image arrow in the correct positions with the correct relative heights and the correct orientation. Do not just write words. **Draw the arrows.** If the image arrow ends up on the wrong side of 2F, you have not internalised the seesaw yet.

Then do it a second time on the same page as a concave mirror, marking C instead of 2F, and confirm you produced the identical set of answers.

---

### Drill 3 — Teach-Back Write
Flip the paper over. Write 4 to 5 sentences teaching this to a classmate.

**Teach-back prompt:** Explain why an image can be caught on a screen in one case and not the other, **without using the words "real" or "virtual."** You will be forced to describe where the light physically goes, which is the actual understanding. If you find yourself reaching for the banned words, that is the hole.

---

### Drill 4 — Flash Card Prompts

| Front (Question) | Back (Answer) |
|---|---|
| Object at 2F of a converging lens | Real, inverted, same size, image at 2F |
| Object between F and 2F | Real, inverted, magnified, image beyond 2F |
| Object beyond 2F | Real, inverted, minified, image between F and 2F |
| Object inside F | Virtual, upright, magnified, image on object's side |
| Convex mirror, object anywhere | Virtual, upright, minified |
| C equals what, in terms of f? | 2f. C is the mirror's 2F |
| Minimum object-to-image separation for a real image | 4f, at the 2F/2F configuration |

---

### Drill 5 — Sequence from Scratch
Write the elimination sequence in order, from reading the stem to choosing the answer, without looking.

**Sequence to write:** (1) identify converging or diverging, (2) if diverging, answer virtual/upright/minified and stop, (3) compute p ÷ f, (4) map the ratio to the zone, (5) cross out any real+upright or virtual+inverted option, (6) tiebreak on size with "the farther one is bigger."

Then run it cold against five stems you write yourself, mixing lenses and mirrors, and including one stem that gives R instead of f.

---

### Recall Interval Schedule for This Note

| Session | When | What to do |
|---|---|---|
| 1st review | Same day you write it | Brain Dump (Drill 1) |
| 2nd review | Next day | Blank Diagram + Flash Cards (Drills 2 + 4) |
| 3rd review | 3 days later | Teach-Back Write (Drill 3) |
| 4th review | 1 week later | Sequence from Scratch (Drill 5) |
| Final check | 2 weeks later | All 5 drills; flag anything still shaky |

> If you nail a drill cleanly, move it to the "solid" pile. If you miss anything, it stays active and the interval resets.

---

## Sources Used

- [x] `2026 OLE Board Primer/Theoretical Optics and Contact Lens/THEORETICAL AND GEOMETRICAL OPTICS.docx` — Mirrors section: cardinal points (C, F, V), the three ray-tracing behaviours, spherical mirror formula, sign conventions, magnification M = −q/p
- [x] `D1-02-Geometric-Optics-Reflection-Refraction-Lenses-Mirrors-Prisms.md` — Formula 2 (mirror equation, six concave-mirror cases) and Formula 5 (thin lens equation, sign conventions, worked examples). This note is the conceptual companion to those two sections; the equations are not duplicated here.
- [x] `D1-CONSTANTS-anchor-card.md` — checked for overlap on f = R/2

> **Resolved July 21, 2026:** `D1-02`'s "Reading the Result — Mirror Equation" table previously carried an unresolved self-correction on the m = +1 row, ending "(not a standard case)". That was wrong. m = +1 forces q = −p, which substituted into the mirror equation gives 1/f = 0, so f and R are infinite: **it is the plane mirror**, the most common mirror on the exam. The row now says so. The same edit corrected the \|m\| > 1 row (it read "any position for concave," but a concave mirror minifies beyond C; it magnifies only between F and C, or inside F) and escaped the \|m\| pipes in both the mirror and lens tables, which were splitting those rows into five columns instead of three.

---

*Note written: July 21, 2026 | Confidence: [ ] Low [ ] Okay [ ] Solid*
