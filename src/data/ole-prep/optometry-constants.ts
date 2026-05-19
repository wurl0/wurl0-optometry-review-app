import { OlePrepData } from '@/lib/ole-prep-types'

export const optometryConstantsData: OlePrepData = {
  subject: 'Optometry Constants',
  slug: 'optometry-constants',
  sections: [
    {
      id: 'gullstrand',
      title: "Gullstrand's Schematic Eye",
      icon: '👁️',
      items: [
        {
          kind: 'recall',
          prompt: 'Total eye power — relaxed vs. maximally accommodated',
          answer: 'Relaxed: 58.64 D | Maximally accommodated: 70.57 D',
        },
        {
          kind: 'recall',
          prompt: 'Corneal power (Gullstrand)',
          answer: '43.0 D (unchanged during accommodation)',
        },
        {
          kind: 'recall',
          prompt: 'Crystalline lens power — relaxed vs. accommodated',
          answer: 'Relaxed: 19.11 D | Maximally accommodated: 33.0 D',
        },
        {
          kind: 'recall',
          prompt: 'Refractive indices: cornea, aqueous, lens cortex, lens nucleus, vitreous',
          answer: 'Cornea: 1.376 | Aqueous: 1.336 | Cortex: 1.386 | Nucleus: 1.406 | Vitreous: 1.336',
        },
        {
          kind: 'recall',
          prompt: 'Radii of curvature — anterior cornea, posterior cornea',
          answer: 'Anterior cornea: 7.7 mm | Posterior cornea: 6.8 mm (unchanged during accommodation)',
        },
        {
          kind: 'recall',
          prompt: 'Anterior lens radius — relaxed vs. accommodated',
          answer: 'Relaxed: 10.0 mm | Maximally accommodated: 5.33 mm',
        },
        {
          kind: 'recall',
          prompt: 'Posterior lens radius — relaxed vs. accommodated',
          answer: 'Relaxed: 6.0 mm | Maximally accommodated: 5.33 mm',
        },
        {
          kind: 'recall',
          prompt: 'Lens thickness — relaxed vs. accommodated',
          answer: 'Relaxed: 3.6 mm | Maximally accommodated: 4.0 mm',
        },
        {
          kind: 'recall',
          prompt: 'Corneal thickness',
          answer: '0.5 mm (unchanged during accommodation)',
        },
        {
          kind: 'recall',
          prompt: 'Distance from corneal apex to anterior lens surface — relaxed vs. accommodated',
          answer: 'Relaxed: 3.6 mm | Maximally accommodated: 3.2 mm',
        },
        {
          kind: 'recall',
          prompt: 'Distance from corneal apex to posterior lens surface',
          answer: '7.2 mm (constant in both states)',
        },
        {
          kind: 'recall',
          prompt: 'Primary and secondary nodal points (from corneal apex)',
          answer: 'Primary N: 7.08 mm | Secondary N′: 7.33 mm | Separation: 0.25 mm',
        },
        {
          kind: 'recall',
          prompt: 'Primary and secondary focal lengths (from corneal apex)',
          answer: 'Primary focal length (F): 15.70 mm | Secondary focal length (F′): 24.38 mm',
        },
        {
          kind: 'recall',
          prompt: 'Separation between principal points P and P′',
          answer: '0.3 mm',
        },
        {
          kind: 'recall',
          prompt: 'Axial length of the adult emmetropic eye',
          answer: '24 mm (newborn: 17 mm)',
        },
        {
          kind: 'fact',
          highlight: 'KEY RATIO',
          content: '1 mm change in axial length = 3.00 D change in refractive error. Longer eye → more myopic.',
        },
        {
          kind: 'fact',
          highlight: 'CORNEA vs LENS',
          content: 'Cornea contributes ~2/3 of total eye power (average 43 D, range 36–50 D). Lens contributes ~1/3.',
        },
      ],
    },
    {
      id: 'purkinje',
      title: 'Purkinje Images',
      icon: '🔦',
      items: [
        {
          kind: 'recall',
          prompt: 'What are the four Purkinje images and their sources?',
          answer: 'I — anterior cornea | II — posterior cornea | III — anterior lens | IV — posterior lens',
        },
        {
          kind: 'recall',
          prompt: 'Which Purkinje image changes size during accommodation and what does it indicate?',
          answer: 'Image III (anterior lens) — shrinks during accommodation (from 2.0 cm to 1.0 cm), confirming the lens is changing shape.',
        },
        {
          kind: 'fact',
          highlight: 'ORIENTATION',
          content: 'Purkinje images I, II, III are erect and virtual. Image IV (posterior lens) is inverted and real.',
        },
      ],
    },
    {
      id: 'accommodation-formulas',
      title: "Hofstetter's & Accommodation",
      icon: '🔢',
      items: [
        {
          kind: 'recall',
          prompt: "Hofstetter's three formulas for amplitude of accommodation",
          answer: 'Maximum: 25 − 0.40(age) | Average: 18.5 − 0.30(age) | Minimum: 15 − 0.25(age)',
        },
        {
          kind: 'mnemonic',
          term: "Hofstetter's — which subtracts the most?",
          device: '"MAX pays 40, AVG pays 30, MIN pays 25"',
          breakdown: 'Max = 25 − 0.40(age) | Avg = 18.5 − 0.30(age) | Min = 15 − 0.25(age). The largest formula subtracts the most per year of age.',
        },
        {
          kind: 'recall',
          prompt: "Donder's Table — amplitude of accommodation at key ages",
          answer: 'Age 10: 14 D | Age 20: 10 D | Age 30: 7 D | Age 40: 5 D | Age 45: 3.5 D | Age 50: 2.5 D | Age 60: 1 D | Age 75: 0 D',
        },
        {
          kind: 'recall',
          prompt: 'Reading addition formula',
          answer: 'ADD = Working Distance − ½(Amplitude of Accommodation)',
        },
        {
          kind: 'recall',
          prompt: 'NRA and PRA norms',
          answer: 'NRA: +2.50 D | PRA: −3.50 D',
        },
        {
          kind: 'fact',
          highlight: 'PRESBYOPIA ONSET',
          content: 'Typical onset at 45 years (range 40–50). Premature presbyopia: onset before age 40.',
        },
      ],
    },
    {
      id: 'lens-vergence',
      title: 'Lens Power & Vergence',
      icon: '📏',
      items: [
        {
          kind: 'formula' as const,
          title: 'Surface Power — Corrected Form',
          formula: 'D = (n₂ − n₁) / R',
          variables: [
            { symbol: 'n₁', definition: 'IOR of medium light is coming FROM' },
            { symbol: 'n₂', definition: 'IOR of medium light is entering' },
            { symbol: 'R', definition: 'radius of curvature in METERS (+ = center on right)' },
          ],
          notes: 'Simplified for air (n₁=1): D = (n−1)/R. Use full form for surfaces inside the eye or immersed in media.',
        },
        {
          kind: 'formula' as const,
          title: 'Vergence — With Index of Refraction',
          formula: 'L = n / l          L\' = L + F',
          variables: [
            { symbol: 'L', definition: 'incident vergence (D); negative = diverging' },
            { symbol: "L'", definition: 'emergent vergence (D); positive = converging' },
            { symbol: 'n', definition: 'IOR of the medium containing the light' },
            { symbol: 'l', definition: 'distance in METERS (neg for diverging, pos for converging)' },
            { symbol: 'F', definition: 'power of the refracting element (D)' },
          ],
          notes: 'In air (n=1): L = 1/l. From infinity: L = 0. Use sign convention consistently.',
        },
        {
          kind: 'recall',
          prompt: 'Surface power formula (simplified — in air)',
          answer: 'D = (n − 1) / r — where r is in meters and n is the refractive index of the lens material',
        },
        {
          kind: 'recall',
          prompt: 'Vergence formula (in air)',
          answer: 'V = 1/d — d in meters, V in diopters',
        },
        {
          kind: 'recall',
          prompt: 'Power from focal length — in meters, cm, mm, and inches',
          answer: 'D = 1/f (m) | D = 100/f (cm) | D = 1000/f (mm) | D = 40/f (in)',
        },
        {
          kind: 'recall',
          prompt: 'Thick lens equivalent power formula',
          answer: 'Deq = F1 + F2 − (t/n)(F1)(F2) — t = thickness, n = index',
        },
        {
          kind: 'recall',
          prompt: 'Vertex distance correction — spectacle to contact lens',
          answer: 'DCL = DSpec / [1 − d × DSpec] — d = vertex distance in meters',
        },
        {
          kind: 'recall',
          prompt: 'Spherical equivalent formula',
          answer: 'SE = Sphere + ½ Cylinder',
        },
        {
          kind: 'recall',
          prompt: 'Lens clock conversion formula',
          answer: 'F = R(n − 1) / (c − 1) — R = gauge reading; c = 1.53 (crown glass calibration)',
        },
      ],
    },
    {
      id: 'prism',
      title: 'Prism Formulas',
      icon: '🔺',
      items: [
        {
          kind: 'recall',
          prompt: "Prentice's Rule",
          answer: 'Prism (Δ) = D × d — D = lens power in diopters; d = decentration in centimeters',
        },
        {
          kind: 'recall',
          prompt: 'Prism deviation formula',
          answer: 'Dev = Aa(n − 1) — Aa = apical angle; n = refractive index',
        },
        {
          kind: 'formula' as const,
          title: 'Resultant Prism (Two Components Combined)',
          formula: 'Δ_total = √(Δ_H² + Δ_V²)',
          variables: [
            { symbol: 'Δ_H', definition: 'horizontal prism (base in or out)' },
            { symbol: 'Δ_V', definition: 'vertical prism (base up or down)' },
          ],
          notes: 'Direction: θ = arctan(Δ_V / Δ_H). Base direction of resultant found by resolving the angle.',
        },
        {
          kind: 'recall',
          prompt: 'Prism diopter unit definition',
          answer: '1 Δ = 1 cm displacement at 1 meter distance',
        },
        {
          kind: 'fact',
          highlight: 'PRISM UNITS COMPARED',
          content: 'Prism diopter (Δ): 1 cm/m | Prism degree (°): 0.9 cm/m | Prism degree (°d): 1.75 cm/m',
        },
      ],
    },
    {
      id: 'refraction-constants',
      title: "Snell's Law & Refraction Constants",
      icon: '🌊',
      items: [
        {
          kind: 'formula' as const,
          title: "Snell's Law",
          formula: 'n₁ × sin θ₁ = n₂ × sin θ₂',
          variables: [
            { symbol: 'n₁', definition: 'IOR of medium light is coming from' },
            { symbol: 'θ₁', definition: 'angle of incidence (from normal)' },
            { symbol: 'n₂', definition: 'IOR of medium light is entering' },
            { symbol: 'θ₂', definition: 'angle of refraction (from normal)' },
          ],
          notes: 'Calculator: (n₁ × sin θ₁) ÷ n₂ = Ans → Shift Sin → θ₂. Light bends TOWARD normal when entering denser medium.',
        },
        {
          kind: 'formula' as const,
          title: 'Shallowing Effect (Apparent Depth)',
          formula: 'q / n\' = p / n',
          variables: [
            { symbol: 'q', definition: 'apparent distance (image position)' },
            { symbol: "n'", definition: 'IOR of medium where the observer/eye is' },
            { symbol: 'p', definition: 'actual distance of object' },
            { symbol: 'n', definition: 'IOR of medium where the object is' },
          ],
          notes: 'Fish in water appears shallower than it really is. Mnemonic: "Fish ↑ Bird" — observer in less dense medium sees object higher/closer than actual.',
        },
        {
          kind: 'formula' as const,
          title: 'Critical Angle (Total Internal Reflection)',
          formula: 'sin θc = n₂ / n₁',
          variables: [
            { symbol: 'θc', definition: 'critical angle — at or beyond this angle, TIR occurs' },
            { symbol: 'n₁', definition: 'IOR of denser medium (where light originates)' },
            { symbol: 'n₂', definition: 'IOR of less dense medium (usually air = 1.000)' },
          ],
          notes: 'TIR only occurs when light travels from DENSER to LESS DENSE medium. Crown glass (1.523): θc ≈ 41°. Diamond (2.417): θc ≈ 24.4°.',
        },
        {
          kind: 'formula' as const,
          title: 'Lateral Displacement (Plane Refractor)',
          formula: 'd = t × sin(i − R) / cos R',
          variables: [
            { symbol: 'd', definition: 'lateral displacement of the emerging ray' },
            { symbol: 't', definition: 'thickness of the refracting medium' },
            { symbol: 'i', definition: 'angle of incidence' },
            { symbol: 'R', definition: "angle of refraction (find via Snell's Law first)" },
          ],
        },
        {
          kind: 'recall' as const,
          prompt: 'Critical angle for Crown Glass (n = 1.523) and water (n = 1.333)',
          answer: 'Crown Glass: sin θc = 1/1.523 → θc ≈ 41.0° | Water: sin θc = 1/1.333 → θc ≈ 48.6°',
        },
      ],
    },
    {
      id: 'keratometry',
      title: 'Contact Lens & Keratometry',
      icon: '🔵',
      items: [
        {
          kind: 'recall',
          prompt: 'Keratometer conversion formula',
          answer: 'D = 337.5 / r — r in mm. Calibration index: 1.3375',
        },
        {
          kind: 'recall',
          prompt: 'SCL base curve selection methods',
          answer: 'Method 1: Flattest K + 0.3–0.9 mm | Method 2: Average K + 1.0 mm | Method 3: 4 D flatter than average K',
        },
        {
          kind: 'recall',
          prompt: 'RGP starting base curve',
          answer: 'Within ±0.10 mm of flattest corneal radius',
        },
        {
          kind: 'recall',
          prompt: 'Minimum Dk/t for daily wear and extended wear',
          answer: 'Daily wear: 25 Dk/t | Extended wear: 87 Dk/t',
        },
        {
          kind: 'recall',
          prompt: 'HVID and VVID averages',
          answer: 'HVID: avg 11.7 mm (range 10–14 mm) | VVID: avg 10.6 mm',
        },
        {
          kind: 'recall',
          prompt: 'Trial RGP lens diameter rule',
          answer: '2 mm smaller than HVID',
        },
      ],
    },
    {
      id: 'binocular-vision-norms',
      title: 'Binocular Vision Norms',
      icon: '🎯',
      items: [
        {
          kind: 'recall',
          prompt: 'Normal AC/A ratio',
          answer: '4:1 (range 4–6:1) | High AC/A: >6:1 | Low AC/A (CI): <3:1',
        },
        {
          kind: 'recall',
          prompt: 'AC/A heterophoria method formula',
          answer: 'AC/A = PD + (Δnear − Δfar) / D — PD in cm; eso = positive, exo = negative',
        },
        {
          kind: 'recall',
          prompt: "Sheard's criterion",
          answer: 'Compensating vergence must be ≥ 2× the phoria for the patient to be comfortable',
        },
        {
          kind: 'recall',
          prompt: "Percival's criterion",
          answer: 'The phoria must fall within the middle third of the total fusional vergence range',
        },
        {
          kind: 'recall',
          prompt: "Morgan's norms — PFV and NFV at near (blur/break/recovery)",
          answer: 'PFV: 12/15/4 | NFV: 9/17/8',
        },
        {
          kind: 'recall',
          prompt: "Morgan's norms — PFV and NFV at distance (blur/break/recovery)",
          answer: 'PFV: 9/19/10 | NFV: x/7/4 (blur point often not found at distance)',
        },
        {
          kind: 'recall',
          prompt: 'Normal fusional vergence amplitudes (BI and BO prism findings)',
          answer: 'Convergence (BI): 35–40Δ | Divergence (BO): 5–7Δ | Supravergence: 3Δ each eye | Infravergence: 3Δ each eye | Cyclovergence: 2–3Δ',
        },
        {
          kind: 'recall',
          prompt: 'Normal NPC break point',
          answer: '≤ 6 cm — values >6 cm suggest convergence insufficiency',
        },
        {
          kind: 'recall',
          prompt: 'Normal stereoacuity threshold',
          answer: '20–40 seconds of arc',
        },
        {
          kind: 'recall',
          prompt: "Panum's fusional area — fovea vs. periphery",
          answer: 'Fovea: 6–10 arcminutes | Periphery: 30–40 arcminutes (up to 12° from fovea)',
        },
        {
          kind: 'recall',
          prompt: 'Vergence facility norm',
          answer: '≥ 15 cycles/min (3 BI / 12 BO flippers)',
        },
        {
          kind: 'recall',
          prompt: 'Accommodative facility norm',
          answer: '≥ 2.5 cycles/min (±2.00 D flippers)',
        },
      ],
    },
    {
      id: 'visual-field',
      title: 'Visual Field & Photoreceptors',
      icon: '🌐',
      items: [
        {
          kind: 'recall',
          prompt: 'Normal monocular visual field extents (confrontation, large bright targets)',
          answer: 'Superior: 60° | Inferior: 75° | Temporal: 100° | Nasal: 60°',
        },
        {
          kind: 'recall',
          prompt: 'Total monocular field extent and binocular overlap',
          answer: 'Total monocular: 150–180° | Binocular overlap: 120°',
        },
        {
          kind: 'recall',
          prompt: 'Rod and cone counts in the human retina',
          answer: 'Total: 126 million | Rods: 120 million | Cones: 6 million',
        },
        {
          kind: 'recall',
          prompt: 'Scotopic vs. photopic peak sensitivity wavelengths',
          answer: 'Scotopic (rods): 500 nm (blue-green) | Photopic (cones): 560 nm (yellow-green)',
        },
        {
          kind: 'recall',
          prompt: 'Cone type wavelength ranges and peaks (S, M, L)',
          answer: 'S (Blue): 400–500 nm, peak 420–440 nm | M (Green): 450–630 nm, peak 534–555 nm | L (Red): 500–700 nm, peak 564–580 nm',
        },
        {
          kind: 'fact',
          highlight: 'VISIBLE SPECTRUM',
          content: 'Visible light range: 380–780 nm (violet to red).',
        },
      ],
    },
    {
      id: 'pupil-adaptation',
      title: 'Pupil & Adaptation',
      icon: '⚫',
      items: [
        {
          kind: 'recall',
          prompt: 'Normal pupil size ranges',
          answer: 'Normal range: 2–5 mm | Physiologic: 3–4 mm | Mydriasis: >5 mm | Miosis: ≤1.5 mm',
        },
        {
          kind: 'recall',
          prompt: 'Dark adaptation time vs. light adaptation time',
          answer: 'Full dark adaptation: 1–2 hours | Light adaptation (pigment migration): ~10 minutes',
        },
      ],
    },
    {
      id: 'eom-anatomy-constants',
      title: 'EOM Anatomy & Axes of Fick',
      icon: '📐',
      items: [
        {
          kind: 'recall',
          prompt: 'Spiral of Tillaux — rectus muscle insertion distances from the limbus',
          answer: 'MR: 5.5 mm | IR: 6.0 mm | LR: 6.9 mm | SR: 7.7 mm (in order of increasing distance from limbus)',
        },
        {
          kind: 'recall',
          prompt: 'Axes of Fick — three axes of eye rotation with their lengths',
          answer: 'Y-axis (sagittal/optic axis): 24 mm — torsion | X-axis (transverse/horizontal): 22 mm — elevation and depression | Z-axis (vertical/frontal): 22 mm — adduction and abduction',
        },
        {
          kind: 'recall',
          prompt: 'Which EOM is the strongest and heaviest, and which inserts closest to vs. farthest from the limbus?',
          answer: 'Strongest/heaviest: Medial Rectus (MR). Closest to limbus: MR at 5.5 mm. Farthest from limbus: SR at 7.7 mm.',
        },
        {
          kind: 'recall',
          prompt: 'Length of the Superior Oblique including trochlea, and which EOM does NOT arise from the annulus of Zinn?',
          answer: 'SO total length (including trochlea): 60 mm — the longest EOM overall. The Inferior Oblique (IO) is the ONLY EOM that does not arise from the annulus of Zinn; it originates from the inferior nasal orbital rim.',
        },
        {
          kind: 'fact',
          highlight: 'ANGLE ALPHA',
          content: 'Angle Alpha (α) = angle between the visual axis and the optic axis at the nodal point. Normal value: ~5° nasal. The visual axis is nasal to the optic axis.',
        },
      ],
    },
    {
      id: 'pharmacology-constants',
      title: 'Pharmacology Time Constants',
      icon: '⏱️',
      items: [
        {
          kind: 'recall',
          prompt: 'Cycloplegic/mydriatic agents — duration of action from longest to shortest',
          answer: 'Atropine: 7–14 days | Scopolamine: 5–7 days | Homatropine: 24–48 hrs | Cyclopentolate: 6–24 hrs | Tropicamide: 4–6 hrs',
        },
        {
          kind: 'recall',
          prompt: 'Normal intraocular pressure range',
          answer: '10–21 mmHg (mean ~15–16 mmHg). Values >21 mmHg = ocular hypertension. Values <6 mmHg = hypotony.',
        },
        {
          kind: 'recall',
          prompt: 'Anti-psychotic EPS onset timeline (3 stages)',
          answer: 'Acute dystonia: 1–3 days | Akathisia: 3–90 days | Tardive dyskinesia: 90–365 days (up to 1 year of use)',
        },
        {
          kind: 'recall',
          prompt: 'Aminoglycoside toxicity threshold — after how many days does ototoxicity/nephrotoxicity risk rise?',
          answer: 'Risk significantly increases after >5 days of use.',
        },
        {
          kind: 'recall',
          prompt: 'Corticosteroid-induced glaucoma time thresholds (topical dexamethasone)',
          answer: 'Secondary OAG: develops after 6 weeks of topical dexamethasone use. Permanent OAG: after 18 months of continued use.',
        },
        {
          kind: 'recall',
          prompt: 'Botulinum toxin duration of effect for strabismus treatment',
          answer: '3–6 months per injection (temporary; reinjection required for sustained effect)',
        },
      ],
    },
    {
      id: 'speed-light-ior-constants',
      title: 'Speed of Light & IOR Values',
      icon: '💡',
      items: [
        {
          kind: 'formula' as const,
          title: 'Index of Refraction — Two Forms',
          formula: 'n = c / v          n = sin i / sin r',
          variables: [
            { symbol: 'c', definition: 'speed of light in vacuum (300,000 km/s)' },
            { symbol: 'v', definition: 'speed of light in the medium' },
            { symbol: 'i', definition: 'angle of incidence (in less dense medium)' },
            { symbol: 'r', definition: 'angle of refraction (in denser medium)' },
          ],
          notes: 'Both definitions yield the same n. Form 1 uses speeds; Form 2 uses angles (Snell version). n > 1 means slower than vacuum.',
        },
        {
          kind: 'formula' as const,
          title: 'Wave Equation',
          formula: 'v = f × λ',
          variables: [
            { symbol: 'v', definition: 'speed of light in medium (m/s)' },
            { symbol: 'f', definition: 'frequency (Hz) — DOES NOT change between media' },
            { symbol: 'λ', definition: 'wavelength (m) — changes with medium' },
          ],
          notes: 'Entering a denser medium: speed ↓, wavelength ↓, frequency stays constant. Color = frequency, not wavelength.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Speed of light in vacuum and common optical media',
          answer: 'Vacuum: 186,050 mi/sec (300,000 km/sec) | Air: 186,000 mi/sec | H₂O: 140,000 mi/sec | Glass: 124,000 mi/sec | Diamond: 77,550 mi/sec',
        },
        {
          kind: 'recall' as const,
          prompt: 'Index of refraction of common optical materials',
          answer: 'Air: 1.000 | Ice: 1.31 | H₂O: 1.33 | Ethyl Alcohol: 1.36 | CR-39: 1.49 | PMMA: 1.49 | Oil: 1.51 | Crown Glass: 1.523 | Polycarbonate/Light Flint: 1.58 | Dense Flint: 1.67 | Zircon: 1.923 | Diamond: 2.417',
        },
        {
          kind: 'recall' as const,
          prompt: 'Index of refraction of the eye components with powers where applicable',
          answer: 'Tears: 1.336 | Cornea: 1.376 (43.00D) | Aqueous: 1.376 | Lens cortex: 1.386 (14.11D) | Lens nucleus: 1.406 | Vitreous: 1.336–1.357',
        },
      ],
    },
    {
      id: 'photometry-unit-constants',
      title: 'Photometry Units & Formulas',
      icon: '🔦',
      items: [
        {
          kind: 'formula' as const,
          title: 'Luminous Flux',
          formula: 'F = 4πI     unit: Lumen',
        },
        {
          kind: 'formula' as const,
          title: 'Luminous Intensity',
          formula: 'J = F / W   unit: candle\nW = A / r² (steradians)',
        },
        {
          kind: 'formula' as const,
          title: 'Illuminance — Inverse Square Law',
          formula: 'E = I / d²  unit: FC or lux\nLaw: I₁/d₁² = I₂/d₂²',
          notes: 'FC = lumen/sq ft | lux = lumen/sq m | doubling distance = ¼ illuminance',
        },
        {
          kind: 'formula' as const,
          title: 'Cosine Law of Illuminance',
          formula: 'E = (I × cos θ) / d²',
          variables: [
            { symbol: 'E', definition: 'illuminance at the surface (FC or lux)' },
            { symbol: 'I', definition: 'luminous intensity of source (candela)' },
            { symbol: 'θ', definition: 'angle of incidence of light relative to surface normal' },
            { symbol: 'd', definition: 'distance from source to surface' },
          ],
          notes: 'When θ = 0° (perpendicular), cos θ = 1 → reduces to E = I/d². As angle increases, illuminance decreases.',
        },
        {
          kind: 'formula' as const,
          title: 'Apparent Height / Angular Elevation',
          formula: 'tan θ = h / d',
          variables: [
            { symbol: 'θ', definition: 'angular height or elevation (degrees)' },
            { symbol: 'h', definition: 'actual height of the object' },
            { symbol: 'd', definition: 'horizontal distance from observer to object' },
          ],
          notes: 'Calculator: h ÷ d → Shift Tan Ans → degrees. Same formula as angular subtense.',
        },
      ],
    },
    {
      id: 'lv-constants',
      title: 'Low Vision Formula Constants',
      icon: '🔍',
      items: [
        {
          kind: 'recall' as const,
          prompt: 'Low power lens table — diopter, magnification, expected visual acuity',
          answer: '+2.50D = 1× → 2/400 | +5.00D = 2× → 2/200 | +10.00D = 4× → 2/100 | +20.00D = 8× → 2/50 | +40.00D = 16× → 2/25',
        },
        {
          kind: 'formula' as const,
          title: 'Telescope Magnification & Length',
          formula: 'M = Fo / Fe\nL = Fo + Fe',
        },
        {
          kind: 'formula' as const,
          title: 'Predicting LV Reading Add',
          formula: 'Add (D) = 100 / WD (cm)',
        },
        {
          kind: 'formula' as const,
          title: 'Relative Distance Magnification',
          formula: 'RDM = d₁ / d₂',
        },
        {
          kind: 'formula' as const,
          title: 'Relative Size Magnification',
          formula: 'RSM = h₁ / h₂',
        },
      ],
    },
    {
      id: 'cl-power-constants',
      title: 'Contact Lens Power Formula Constants',
      icon: '🔵',
      items: [
        {
          kind: 'formula' as const,
          title: '① Surface Power',
          formula: 'D = (n − 1) / r',
        },
        {
          kind: 'formula' as const,
          title: '② Nominal Power',
          formula: 'Dn = D₁ + D₂',
        },
        {
          kind: 'formula' as const,
          title: '③ Equivalent Power (True)',
          formula: 'Deq = Dn − (t/n) × D₁ × D₂',
        },
        {
          kind: 'formula' as const,
          title: '④ Effective Power (Back Vertex)',
          formula: 'Dv = Dn + (t/n) × D₁²',
        },
        {
          kind: 'formula' as const,
          title: '⑤ Neutralizing Power (Front Vertex)',
          formula: 'DFV = Dn + (t/n) × D₂²',
        },
        {
          kind: 'formula' as const,
          title: 'Vertex Distance Conversion',
          formula: 'DCL = Dspec / (1 − d × Dspec)\nDefault VD = 0.012 m if not given',
          notes: 'Use when spectacle power > ±4.00D',
        },
        {
          kind: 'recall' as const,
          prompt: 'Name the 5 CL power types in order and their formulas',
          answer: '① Surface: D=(n−1)/r | ② Nominal: Dn=D₁+D₂ | ③ Equivalent: Deq=Dn−t/n(D₁)(D₂) | ④ Effective/Back Vertex: Dv=Dn+t/n(D₁²) | ⑤ Neutralizing/Front Vertex: DFV=Dn+t/n(D₂²)',
        },
      ],
    },
    {
      id: 'mirror-shadow-formula-constants',
      title: 'Mirror & Shadow Formula Constants',
      icon: '🪞',
      items: [
        {
          kind: 'formula' as const,
          title: 'Mirror Equation',
          formula: '1/f = 1/p + 1/q',
          notes: 'Shortcut: f = (p⁻¹ + q⁻¹)⁻¹',
        },
        {
          kind: 'formula' as const,
          title: 'Images in Inclined Mirrors',
          formula: 'n = (360 ÷ A) ± 1',
          notes: '+1 if 360/A is odd; −1 if even',
        },
        {
          kind: 'formula' as const,
          title: 'Minimum Mirror Size',
          formula: 'Mirror size = Object size / 2',
        },
        {
          kind: 'recall' as const,
          prompt: 'Shadow formulas — point source diameter and extended source umbra/penumbra',
          answer: 'Point source: a/b = c/d. Area: As = πr². Extended source: Umbra = x−y; Penumbra = x+y; from A₁/b=x/d and A₂/b=y/e. Total: As = Au + Ap.',
        },
      ],
    },
    {
      id: 'refractive-error',
      title: 'Refractive Error Classification',
      icon: '📊',
      items: [
        {
          kind: 'recall',
          prompt: 'Myopia classification by degree',
          answer: 'Low: −0.25 to −3.00 D | Medium: −3.00 to −6.00 D | High: −6.00 D and above',
        },
        {
          kind: 'recall',
          prompt: 'Hyperopia classification by degree',
          answer: 'Low: +0.25 to +3.00 D | Medium: +3.00 to +5.00 D | High: +5.00 D and above',
        },
        {
          kind: 'recall',
          prompt: 'Anisometropia classes I–III thresholds',
          answer: 'Class I: <1.50 D | Class II: 1.50–3.00 D | Class III: >3.00 D (refractive amblyopia risk)',
        },
        {
          kind: 'fact',
          highlight: 'ANISOMETROPIA LIMIT',
          content: 'Differences >6.00 D generally cannot be corrected with spectacles due to aniseikonia and prismatic imbalance.',
        },
      ],
    },
  ],
}
