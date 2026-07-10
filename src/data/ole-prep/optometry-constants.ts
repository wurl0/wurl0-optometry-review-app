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
          kind: 'formula' as const,
          title: 'Total Eye Power',
          formula: 'Relaxed:            58.64 D\nMax accommodated:   70.57 D',
        },
        {
          kind: 'formula' as const,
          title: 'Corneal Power (Gullstrand)',
          formula: '43.0 D  (unchanged during accommodation)',
        },
        {
          kind: 'formula' as const,
          title: 'Crystalline Lens Power',
          formula: 'Relaxed:            19.11 D\nMax accommodated:   33.0 D',
        },
        {
          kind: 'formula' as const,
          title: 'Refractive Indices — Eye Components',
          formula: 'Cornea:        1.376\nAqueous:       1.336\nLens cortex:   1.386\nLens nucleus:  1.406\nVitreous:      1.336',
        },
        {
          kind: 'formula' as const,
          title: 'Radii of Curvature — Cornea',
          formula: 'Anterior cornea:  7.7 mm  (unchanged)\nPosterior cornea: 6.8 mm  (unchanged)',
        },
        {
          kind: 'formula' as const,
          title: 'Anterior Lens Radius',
          formula: 'Relaxed:          10.0 mm\nMax accommodated:  5.33 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Posterior Lens Radius',
          formula: 'Relaxed:          6.0 mm\nMax accommodated:  5.33 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Lens Thickness',
          formula: 'Relaxed:          3.6 mm\nMax accommodated:  4.0 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Corneal Thickness',
          formula: '0.5 mm  (unchanged during accommodation)',
        },
        {
          kind: 'formula' as const,
          title: 'Corneal Apex → Anterior Lens Surface',
          formula: 'Relaxed:          3.6 mm\nMax accommodated:  3.2 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Corneal Apex → Posterior Lens Surface',
          formula: '7.2 mm  (constant in both states)',
        },
        {
          kind: 'formula' as const,
          title: 'Nodal Points (from corneal apex)',
          formula: 'Primary N:    7.08 mm\nSecondary N′: 7.33 mm\nSeparation:   0.25 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Focal Lengths (from corneal apex)',
          formula: 'Primary F:    15.70 mm  (in front of cornea)\nSecondary F′: 24.38 mm  (axial length)',
        },
        {
          kind: 'formula' as const,
          title: 'Principal Point Separation (P to P′)',
          formula: '0.3 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Axial Length — Emmetropic Eye',
          formula: 'Adult: 24 mm  |  Newborn: 17 mm',
          notes: '1 mm change in axial length ≈ 3.00 D change in refraction. Longer eye = more myopic.',
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
          kind: 'formula' as const,
          title: 'Four Purkinje Images — Sources',
          formula: 'PI  (I):   Anterior cornea  — erect, virtual\nPII (II):  Posterior cornea — erect, virtual\nPIII(III): Anterior lens   — erect, virtual\nPIV (IV):  Posterior lens  — INVERTED, REAL',
          notes: 'Only Image IV is inverted and real. Image III shrinks during accommodation (2.0 → 1.0 cm) — confirms lens shape change.',
        },
        {
          kind: 'formula' as const,
          title: 'Purkinje Image III — Accommodation Change',
          formula: 'Relaxed:          ~2.0 cm\nMax accommodated:  ~1.0 cm\n(shrinks = lens anterior surface steepens)',
        },
      ],
    },
    {
      id: 'accommodation-formulas',
      title: "Hofstetter's & Accommodation",
      icon: '🔢',
      items: [
        {
          kind: 'formula' as const,
          title: "Hofstetter's Amplitude of Accommodation",
          formula: 'Maximum:  25 − 0.40 × age\nAverage:  18.5 − 0.30 × age\nMinimum:  15 − 0.25 × age',
          notes: 'Max subtracts most per year (0.40). Min subtracts least (0.25). Result in diopters.',
        },
        {
          kind: 'mnemonic',
          term: "Hofstetter's — which subtracts the most?",
          device: '"MAX pays 40, AVG pays 30, MIN pays 25"',
          breakdown: 'Max = 25 − 0.40(age) | Avg = 18.5 − 0.30(age) | Min = 15 − 0.25(age). The largest formula subtracts the most per year of age.',
        },
        {
          kind: 'formula' as const,
          title: "Donder's Table — AA by Age",
          formula: 'Age 10: 14 D  |  Age 20: 10 D\nAge 30:  7 D  |  Age 40:  5 D\nAge 45: 3.5 D |  Age 50: 2.5 D\nAge 60:  1 D  |  Age 75:  0 D',
        },
        {
          kind: 'formula' as const,
          title: 'Reading Addition Formula',
          formula: 'ADD = WD − ½(AA)',
          variables: [
            { symbol: 'WD', definition: 'working distance vergence in diopters (= 1/m)' },
            { symbol: 'AA', definition: 'amplitude of accommodation (diopters)' },
          ],
        },
        {
          kind: 'formula' as const,
          title: 'NRA and PRA Norms',
          formula: 'NRA:  +2.50 D\nPRA:  −3.50 D',
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
          title: 'Surface Power — Full Form',
          formula: 'D = (n₂ − n₁) / R',
          variables: [
            { symbol: 'n₁', definition: 'IOR of medium light is coming FROM' },
            { symbol: 'n₂', definition: 'IOR of medium light is entering' },
            { symbol: 'R', definition: 'radius of curvature in METERS (+ = center on right)' },
          ],
          notes: 'In air (n₁=1): simplifies to D = (n−1)/R.',
        },
        {
          kind: 'formula' as const,
          title: 'Vergence — With Index of Refraction',
          formula: 'L = n / l          L\' = L + F',
          variables: [
            { symbol: 'L', definition: 'incident vergence (D); negative = diverging' },
            { symbol: "L'", definition: 'emergent vergence (D); positive = converging' },
            { symbol: 'n', definition: 'IOR of the medium containing the light' },
            { symbol: 'l', definition: 'distance in METERS (use sign convention)' },
            { symbol: 'F', definition: 'power of the refracting element (D)' },
          ],
          notes: 'In air (n=1): L = 1/l. From infinity: L = 0.',
        },
        {
          kind: 'formula' as const,
          title: 'Power from Focal Length',
          formula: 'D = 1/f (m)      D = 100/f (cm)\nD = 1000/f (mm)  D = 40/f (in)',
        },
        {
          kind: 'formula' as const,
          title: 'Thick Lens Equivalent Power',
          formula: 'Deq = F₁ + F₂ − (t/n)(F₁)(F₂)',
          variables: [
            { symbol: 'F₁, F₂', definition: 'front and back surface powers (D)' },
            { symbol: 't', definition: 'center thickness (meters)' },
            { symbol: 'n', definition: 'refractive index of lens material' },
          ],
        },
        {
          kind: 'formula' as const,
          title: 'Vertex Distance Conversion (Spec → CL)',
          formula: 'DCL = DSpec / (1 − d × DSpec)',
          variables: [
            { symbol: 'd', definition: 'vertex distance in METERS (default 0.012 m)' },
          ],
          notes: 'Apply when spectacle power > ±4.00 D. CL will be less plus/minus than spec Rx.',
        },
        {
          kind: 'formula' as const,
          title: 'Spherical Equivalent',
          formula: 'SE = Sphere + ½ Cylinder',
        },
        {
          kind: 'formula' as const,
          title: 'Lens Clock Conversion (Non-Crown Glass)',
          formula: 'F_actual = F_reading × (n_actual − 1) / (1.523 − 1)',
          notes: 'Lens clock calibrated for Crown Glass (n=1.523). Rescale for CR-39 (1.49), poly (1.586), etc.',
        },
      ],
    },
    {
      id: 'prism',
      title: 'Prism Formulas',
      icon: '🔺',
      items: [
        {
          kind: 'formula' as const,
          title: "Prentice's Rule",
          formula: 'Δ = D × c',
          variables: [
            { symbol: 'Δ', definition: 'prismatic effect (prism diopters)' },
            { symbol: 'D', definition: 'lens power (diopters)' },
            { symbol: 'c', definition: 'decentration from optical center (centimeters)' },
          ],
          notes: 'Plus lens: base away from OC. Minus lens: base toward OC.',
        },
        {
          kind: 'formula' as const,
          title: 'Prism Deviation Formula',
          formula: 'Dev = Aa × (n − 1)',
          variables: [
            { symbol: 'Aa', definition: 'apical angle of the prism' },
            { symbol: 'n', definition: 'refractive index of the prism material' },
          ],
        },
        {
          kind: 'formula' as const,
          title: 'Resultant Prism (Two Components)',
          formula: 'Δ_total = √(Δ_H² + Δ_V²)',
          variables: [
            { symbol: 'Δ_H', definition: 'horizontal prism (base in or out)' },
            { symbol: 'Δ_V', definition: 'vertical prism (base up or down)' },
          ],
          notes: 'Direction: θ = arctan(Δ_V / Δ_H).',
        },
        {
          kind: 'formula' as const,
          title: 'Prism Diopter — Unit Definition',
          formula: '1 Δ = 1 cm displacement at 1 meter',
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
          notes: 'Calculator: (n₁ × sin θ₁) ÷ n₂ = Ans → Shift Sin → θ₂. Light bends TOWARD normal entering denser medium.',
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
          notes: '"Fish ↑ Bird" — observer in less dense medium sees object closer than actual.',
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
          notes: 'TIR only when light travels DENSER → LESS DENSE. Crown glass (1.523): θc ≈ 41°. Diamond (2.417): θc ≈ 24.4°.',
        },
        {
          kind: 'formula' as const,
          title: 'Critical Angle — Key Values',
          formula: 'Crown Glass (1.523):  θc ≈ 41.0°\nWater (1.333):        θc ≈ 48.6°\nCR-39 (1.49):         θc ≈ 42.2°\nDiamond (2.417):      θc ≈ 24.4°',
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
      ],
    },
    {
      id: 'keratometry',
      title: 'Contact Lens & Keratometry',
      icon: '🔵',
      items: [
        {
          kind: 'formula' as const,
          title: 'Keratometer Conversion',
          formula: 'D = 337.5 / r       r = 337.5 / D',
          variables: [
            { symbol: 'D', definition: 'corneal power in diopters' },
            { symbol: 'r', definition: 'radius of curvature in MILLIMETERS' },
          ],
          notes: 'Calibration index: n = 1.3375 (not true corneal IOR of 1.376 — accounts for posterior surface).',
        },
        {
          kind: 'formula' as const,
          title: 'SCL Base Curve Selection',
          formula: 'Method 1: Flattest K + 0.3–0.9 mm\nMethod 2: Average K + 1.0 mm\nMethod 3: 4 D flatter than average K',
        },
        {
          kind: 'formula' as const,
          title: 'RGP Starting Base Curve',
          formula: 'Within ±0.10 mm of flattest corneal radius',
        },
        {
          kind: 'formula' as const,
          title: 'Minimum Dk/t Requirements',
          formula: 'Daily wear:    25 Dk/t\nExtended wear: 87 Dk/t',
        },
        {
          kind: 'formula' as const,
          title: 'HVID and VVID Averages',
          formula: 'HVID: avg 11.7 mm  (range 10–14 mm)\nVVID: avg 10.6 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Trial RGP Lens Diameter',
          formula: 'Trial diameter = HVID − 2 mm',
        },
      ],
    },
    {
      id: 'binocular-vision-norms',
      title: 'Binocular Vision Norms',
      icon: '🎯',
      items: [
        {
          kind: 'formula' as const,
          title: 'Normal AC/A Ratio',
          formula: 'Normal:   4:1  (range 4–6:1)\nHigh:    > 6:1\nLow/CI:  < 3:1',
        },
        {
          kind: 'formula' as const,
          title: 'AC/A Ratio — Heterophoria Method',
          formula: 'AC/A = PD + (Δnear − Δfar) / D',
          variables: [
            { symbol: 'PD', definition: 'interpupillary distance in CENTIMETERS' },
            { symbol: 'Δnear', definition: 'near phoria (eso = +, exo = −)' },
            { symbol: 'Δfar', definition: 'distance phoria (eso = +, exo = −)' },
            { symbol: 'D', definition: 'near test distance in diopters (usually 2.50 D = 40 cm)' },
          ],
        },
        {
          kind: 'formula' as const,
          title: "Sheard's Criterion",
          formula: 'Compensating vergence ≥ 2 × phoria',
          notes: 'Fusional reserve must be at least twice the demand. If not met, prescribe prism or vision therapy.',
        },
        {
          kind: 'formula' as const,
          title: "Percival's Criterion",
          formula: 'Phoria must fall within middle ⅓ of total fusional vergence range',
          notes: 'Middle third = between 1/3 and 2/3 of total BI-to-BO range.',
        },
        {
          kind: 'formula' as const,
          title: "Morgan's Norms — NEAR (blur / break / recovery)",
          formula: 'PFV (BO):  12 / 15 / 4 Δ\nNFV (BI):   9 / 17 / 8 Δ',
        },
        {
          kind: 'formula' as const,
          title: "Morgan's Norms — DISTANCE (blur / break / recovery)",
          formula: 'PFV (BO):  9 / 19 / 10 Δ\nNFV (BI):  x /  7 /  4 Δ',
          notes: 'NFV blur point often absent at distance.',
        },
        {
          kind: 'formula' as const,
          title: 'Normal Fusional Vergence Amplitudes',
          formula: 'Convergence (BO):  35–40 Δ\nDivergence (BI):    5–7  Δ\nSupravergence:        3   Δ / eye\nInfravergence:         3   Δ / eye\nCyclovergence:        2–3  Δ',
        },
        {
          kind: 'formula' as const,
          title: 'Normal NPC Break Point',
          formula: '≤ 6 cm',
          notes: 'Values > 6 cm suggest convergence insufficiency.',
        },
        {
          kind: 'formula' as const,
          title: 'Normal Stereoacuity Threshold',
          formula: '20–40 seconds of arc',
        },
        {
          kind: 'formula' as const,
          title: "Panum's Fusional Area",
          formula: 'Fovea:     6–10 arcminutes\nPeriphery: 30–40 arcminutes  (up to 12° from fovea)',
        },
        {
          kind: 'formula' as const,
          title: 'Vergence Facility Norm',
          formula: '≥ 15 cycles/min\n(3 BI / 12 BO flippers)',
        },
        {
          kind: 'formula' as const,
          title: 'Accommodative Facility Norm',
          formula: '≥ 2.5 cycles/min\n(±2.00 D flippers)',
        },
      ],
    },
    {
      id: 'visual-field',
      title: 'Visual Field & Photoreceptors',
      icon: '🌐',
      items: [
        {
          kind: 'formula' as const,
          title: 'Normal Monocular Visual Field Extents',
          formula: 'Superior:  60°\nInferior:  75°\nTemporal: 100°\nNasal:     60°',
          notes: 'Large bright targets, confrontation testing.',
        },
        {
          kind: 'formula' as const,
          title: 'Total Field Extents',
          formula: 'Total monocular:    150–180°\nBinocular overlap:       120°',
        },
        {
          kind: 'formula' as const,
          title: 'Retinal Photoreceptor Counts',
          formula: 'Total:  126 million\nRods:   120 million\nCones:    6 million',
        },
        {
          kind: 'formula' as const,
          title: 'Peak Sensitivity Wavelengths',
          formula: 'Scotopic (rods):  500 nm  (blue-green)\nPhotopic (cones): 560 nm  (yellow-green)',
        },
        {
          kind: 'formula' as const,
          title: 'Cone Types — Wavelength Ranges & Peaks',
          formula: 'S (Blue):  400–500 nm   peak 420–440 nm\nM (Green): 450–630 nm   peak 534–555 nm\nL (Red):   500–700 nm   peak 564–580 nm',
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
          kind: 'formula' as const,
          title: 'Normal Pupil Size Ranges',
          formula: 'Normal range:   2–5 mm\nPhysiologic:    3–4 mm\nMydriasis:     > 5 mm\nMiosis:        ≤ 1.5 mm',
        },
        {
          kind: 'formula' as const,
          title: 'Adaptation Times',
          formula: 'Dark adaptation (full):   1–2 hours\nLight adaptation:         ~10 minutes',
        },
      ],
    },
    {
      id: 'eom-anatomy-constants',
      title: 'EOM Anatomy & Axes of Fick',
      icon: '📐',
      items: [
        {
          kind: 'formula' as const,
          title: 'Spiral of Tillaux — Rectus Insertions from Limbus',
          formula: 'MR:  5.5 mm  (closest)\nIR:  6.0 mm\nLR:  6.9 mm\nSR:  7.7 mm  (farthest)',
          notes: 'MR = strongest/heaviest EOM. SR = farthest from limbus.',
        },
        {
          kind: 'formula' as const,
          title: 'Axes of Fick — Eye Rotation',
          formula: 'Y-axis (sagittal/optic):   24 mm — torsion\nX-axis (transverse/horiz): 22 mm — elevation/depression\nZ-axis (vertical/frontal): 22 mm — adduction/abduction',
        },
        {
          kind: 'formula' as const,
          title: 'EOM Special Facts',
          formula: 'Strongest/heaviest:    MR (Medial Rectus)\nSO total length:       60 mm  (longest EOM)\nIO origin:             NOT from annulus of Zinn\n                       (inferior nasal orbital rim)',
          notes: 'All other EOMs arise from the annulus of Zinn. IO is the exception.',
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
          kind: 'formula' as const,
          title: 'Cycloplegic/Mydriatic Duration — Longest to Shortest',
          formula: 'Atropine:       7–14 days\nScopolamine:    5–7 days\nHomatropine:    24–48 hrs\nCyclopentolate: 6–24 hrs\nTropicamide:    4–6 hrs',
        },
        {
          kind: 'formula' as const,
          title: 'Normal Intraocular Pressure',
          formula: 'Normal:         10–21 mmHg\nMean:           ~15–16 mmHg\nOcular HTN:     > 21 mmHg\nHypotony:       < 6 mmHg',
        },
        {
          kind: 'formula' as const,
          title: 'Anti-Psychotic EPS Onset Timeline',
          formula: 'Acute dystonia:      1–3 days\nAkathisia:          3–90 days\nTardive dyskinesia: 90–365 days  (up to 1 year)',
        },
        {
          kind: 'formula' as const,
          title: 'Aminoglycoside Toxicity Threshold',
          formula: 'Risk of ototoxicity/nephrotoxicity: > 5 days of use',
        },
        {
          kind: 'formula' as const,
          title: 'Corticosteroid-Induced Glaucoma (Topical Dexamethasone)',
          formula: 'Secondary OAG:  after 6 weeks\nPermanent OAG:  after 18 months',
        },
        {
          kind: 'formula' as const,
          title: 'Botulinum Toxin Duration (Strabismus)',
          formula: '3–6 months per injection\n(temporary; reinjection required)',
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
          notes: 'n > 1 means slower than vacuum. Both forms give the same n.',
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
          notes: 'Entering a denser medium: speed ↓, wavelength ↓, frequency stays constant.',
        },
        {
          kind: 'formula' as const,
          title: 'Speed of Light in Common Media',
          formula: 'Vacuum:  186,050 mi/sec  (300,000 km/sec)\nAir:     186,000 mi/sec\nH₂O:     140,000 mi/sec\nGlass:   124,000 mi/sec\nDiamond:  77,550 mi/sec',
        },
        {
          kind: 'formula' as const,
          title: 'IOR — Optical Materials',
          formula: 'Air:             1.000\nIce:             1.31\nH₂O:            1.33\nEthyl Alcohol:   1.36\nCR-39 / PMMA:    1.49\nOil:             1.51\nCrown Glass:     1.523\nPolycarb / Lt Flint: 1.58\nDense Flint:     1.67\nZircon:          1.923\nDiamond:         2.417',
        },
        {
          kind: 'formula' as const,
          title: 'IOR — Eye Components',
          formula: 'Tears:          1.336\nCornea:         1.376  (43.00 D)\nAqueous:        1.336\nLens cortex:    1.386  (14.11 D)\nLens nucleus:   1.406\nVitreous:       1.336–1.357',
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
            { symbol: 'θ', definition: 'angle of incidence relative to surface normal' },
          ],
          notes: 'When θ = 0° (perpendicular): reduces to E = I/d². As angle increases, illuminance decreases.',
        },
        {
          kind: 'formula' as const,
          title: 'Apparent Height / Angular Elevation',
          formula: 'tan θ = h / d',
          variables: [
            { symbol: 'θ', definition: 'angular height (degrees)' },
            { symbol: 'h', definition: 'actual height of object' },
            { symbol: 'd', definition: 'distance from observer to object' },
          ],
          notes: 'Calculator: h ÷ d → Shift Tan Ans → degrees.',
        },
      ],
    },
    {
      id: 'lv-constants',
      title: 'Low Vision Formula Constants',
      icon: '🔍',
      items: [
        {
          kind: 'formula' as const,
          title: 'Low Power Lens Table (D → Magnification → Expected VA)',
          formula: '+2.50 D  =  1×  →  2/400\n+5.00 D  =  2×  →  2/200\n+10.00 D =  4×  →  2/100\n+20.00 D =  8×  →  2/50\n+40.00 D = 16×  →  2/25',
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
          kind: 'formula' as const,
          title: '5 CL Power Types — Quick Reference',
          formula: '① Surface:   D = (n−1)/r\n② Nominal:   Dn = D₁ + D₂\n③ Equivalent: Deq = Dn − t/n(D₁)(D₂)\n④ Back Vertex: Dv = Dn + t/n(D₁²)\n⑤ Front Vertex: DFV = Dn + t/n(D₂²)',
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
          kind: 'formula' as const,
          title: 'Shadow Formulas — Point Source',
          formula: 'a / b = c / d\nArea: As = πr²',
          variables: [
            { symbol: 'a', definition: 'diameter of opaque disk' },
            { symbol: 'b', definition: 'distance of disk from source' },
            { symbol: 'c', definition: 'diameter of shadow on screen' },
            { symbol: 'd', definition: 'distance of screen from source' },
          ],
        },
        {
          kind: 'formula' as const,
          title: 'Shadow — Extended Source (Umbra & Penumbra)',
          formula: 'Umbra     = x − y\nPenumbra  = x + y\nTotal: As = Au + Ap\n\nA₁/b = x/d   A₂/b = y/e',
          notes: 'A₁ = disk diameter, A₂ = source diameter, b = source-to-disk, d = source-to-screen, e = disk-to-screen.',
        },
      ],
    },
    {
      id: 'refractive-error',
      title: 'Refractive Error Classification',
      icon: '📊',
      items: [
        {
          kind: 'formula' as const,
          title: 'Myopia — Classification by Degree',
          formula: 'Low:    −0.25 to −3.00 D\nMedium: −3.00 to −6.00 D\nHigh:   −6.00 D and above',
        },
        {
          kind: 'formula' as const,
          title: 'Hyperopia — Classification by Degree',
          formula: 'Low:    +0.25 to +3.00 D\nMedium: +3.00 to +5.00 D\nHigh:   +5.00 D and above',
        },
        {
          kind: 'formula' as const,
          title: 'Anisometropia Classes I–III',
          formula: 'Class I:   < 1.50 D  (good fusion)\nClass II:  1.50–3.00 D (partial suppression)\nClass III: > 3.00 D  (refractive amblyopia risk)',
          notes: '>6.00 D difference generally cannot be corrected with spectacles due to intolerable aniseikonia.',
        },
        {
          kind: 'fact',
          highlight: 'ANISOMETROPIA LIMIT',
          content: 'Differences >6.00 D generally cannot be corrected with spectacles due to aniseikonia and prismatic imbalance.',
        },
      ],
    },
    {
      id: 'peds-constants',
      title: 'Pediatric Optometry Constants',
      icon: '🧸',
      items: [
        {
          kind: 'formula' as const,
          title: 'Visual Acuity by Age',
          formula: 'Birth = 20/800\n1 mo  = 20/400\n6 mo  = 20/200\n1 yr  = 20/50\n3 yr  = 20/20',
          notes: 'Adult acuity is reached at age 3, not 1 year. Eyes must be straight by 3-4 months.',
        },
        {
          kind: 'formula' as const,
          title: 'Hirschberg Reflex → Deviation',
          formula: '1 mm displacement ≈ 7 prism diopters\npupil edge ≈ 15 pd | mid ≈ 30 pd | limbus ≈ 45 pd',
        },
        {
          kind: 'formula' as const,
          title: 'Refraction Norms & Rx Thresholds',
          formula: '3 mo +3.00D → 4-6 yr +0.50D (emmetropization)\nRx if: hyperopia > +3.50 D, astig > 1.50 D,\naniso > 1.00 D, or any myopia',
        },
        {
          kind: 'formula' as const,
          title: 'Critical Period & MEM',
          formula: 'Plasticity: peak birth-3 yr, window to 7-8 yr\nNormal MEM lag = +0.50 to +0.75 D (WITH = lag)',
          notes: 'Amblyopia order: cycloplegic refraction → full glasses 12-16 wk → patching. Patching is not first.',
        },
      ],
    },
  ],
}
