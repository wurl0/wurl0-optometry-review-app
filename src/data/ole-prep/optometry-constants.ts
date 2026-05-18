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
          kind: 'recall',
          prompt: 'Surface power formula',
          answer: 'D = (n − 1) / r — where r is in meters and n is the refractive index',
        },
        {
          kind: 'recall',
          prompt: 'Vergence formula',
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
