import { NotesQuizData, QuizQuestion } from '@/lib/notes-quiz-types'

// ─── Category registry ────────────────────────────────────────────────────────

export type QuizCategory = {
  id: string
  label: string
  icon: string
}

export const QUIZ_CATEGORIES: QuizCategory[] = [
  { id: 'gullstrand',      label: "Gullstrand's Eye",              icon: '👁️'  },
  { id: 'hofstetter',      label: "Hofstetter's & Accommodation",  icon: '🔢'  },
  { id: 'purkinje',        label: 'Purkinje Images',               icon: '🔦'  },
  { id: 'prism',           label: 'Prism Formulas',                icon: '🔺'  },
  { id: 'ior',             label: 'IOR Values',                    icon: '🌊'  },
  { id: 'keratometry',     label: 'Keratometry & CL',              icon: '🔵'  },
  { id: 'binocular',       label: 'Binocular Vision',              icon: '🎯'  },
  { id: 'eom',             label: 'EOM Anatomy',                   icon: '📐'  },
  { id: 'visual-field',    label: 'Visual Field & Photoreceptors', icon: '🌐'  },
  { id: 'pupil',           label: 'Pupil & Adaptation',            icon: '⚫'  },
  { id: 'pharmacology',    label: 'Pharmacology',                  icon: '⏱️'  },
  { id: 'refractive-error',label: 'Refractive Error',              icon: '📊'  },
]

// ─── Categorized question type ────────────────────────────────────────────────

type CategorizedQuestion = QuizQuestion & { category: string }

// ─── Question bank ────────────────────────────────────────────────────────────

const QUESTIONS: CategorizedQuestion[] = [

  // ── GULLSTRAND'S EYE ───────────────────────────────────────────────────────
  {
    category: 'gullstrand',
    kind: 'mcq',
    stem: "What is Gullstrand's total eye power in the relaxed state?",
    options: ['56.00 D', '58.64 D', '60.48 D', '43.00 D'],
    correct: 1,
    answer: '58.64 D. Max accommodated state: 70.57 D. Cornea contributes 43.00 D (unchanged during accommodation).',
  },
  {
    category: 'gullstrand',
    kind: 'mcq',
    stem: "What is the corneal power in Gullstrand's schematic eye?",
    options: ['40.0 D', '43.0 D', '46.0 D', '48.5 D'],
    correct: 1,
    answer: '43.0 D — unchanged during accommodation. Cornea provides ~2/3 of total eye power.',
  },
  {
    category: 'gullstrand',
    kind: 'mcq',
    stem: 'What is the axial length of an adult emmetropic eye?',
    options: ['20 mm', '22 mm', '24 mm', '26 mm'],
    correct: 2,
    answer: '24 mm. Newborn: 17 mm. 1 mm change ≈ 3.00 D change in refraction. Longer eye = more myopic.',
  },
  {
    category: 'gullstrand',
    kind: 'mcq',
    stem: 'A 1 mm increase in axial length causes approximately how much change in refractive error?',
    options: ['1.00 D more myopia', '2.00 D more myopia', '3.00 D more myopia', '4.00 D more myopia'],
    correct: 2,
    answer: '~3.00 D more myopia per 1 mm of axial elongation.',
  },
  {
    category: 'gullstrand',
    kind: 'mcq',
    stem: "What is the lens thickness in Gullstrand's relaxed schematic eye?",
    options: ['2.4 mm', '3.0 mm', '3.6 mm', '4.0 mm'],
    correct: 2,
    answer: 'Relaxed: 3.6 mm. Max accommodated: 4.0 mm (lens thickens during accommodation).',
  },
  {
    category: 'gullstrand',
    kind: 'identification',
    stem: "State Gullstrand's primary (N) and secondary (N′) nodal point locations from the corneal apex, and the secondary focal length.",
    answer: 'Primary N: 7.08 mm | Secondary N′: 7.33 mm | Separation: 0.25 mm | Secondary F′ (axial length): 24.38 mm | Primary F: 15.70 mm (in front of cornea)',
  },

  // ── HOFSTETTER'S & ACCOMMODATION ───────────────────────────────────────────
  {
    category: 'hofstetter',
    kind: 'mcq',
    stem: "Which of the following is Hofstetter's Maximum amplitude of accommodation formula?",
    options: ['18.5 − 0.30 × age', '15 − 0.25 × age', '25 − 0.40 × age', '20 − 0.35 × age'],
    correct: 2,
    answer: 'Maximum AA = 25 − 0.40 × age. Subtracts the most per year of age (0.40).',
  },
  {
    category: 'hofstetter',
    kind: 'mcq',
    stem: "Which is Hofstetter's Minimum amplitude of accommodation formula?",
    options: ['25 − 0.40 × age', '18.5 − 0.30 × age', '15 − 0.25 × age', '12 − 0.20 × age'],
    correct: 2,
    answer: 'Minimum AA = 15 − 0.25 × age. Subtracts the least per year (0.25).',
  },
  {
    category: 'hofstetter',
    kind: 'mcq',
    stem: "What is Hofstetter's Average amplitude of accommodation formula?",
    options: ['25 − 0.40 × age', '18.5 − 0.30 × age', '15 − 0.25 × age', '16 − 0.28 × age'],
    correct: 1,
    answer: 'Average AA = 18.5 − 0.30 × age.',
  },
  {
    category: 'hofstetter',
    kind: 'mcq',
    stem: 'At what age does presbyopia typically first present clinically?',
    options: ['35 years', '40 years', '45 years', '50 years'],
    correct: 2,
    answer: 'Typical onset at 45 years (range 40–50). Premature presbyopia: onset before age 40.',
  },
  {
    category: 'hofstetter',
    kind: 'mcq',
    stem: "What are Morgan's norms for NRA and PRA?",
    options: ['NRA +1.50 D / PRA −2.50 D', 'NRA +2.00 D / PRA −3.00 D', 'NRA +2.50 D / PRA −3.50 D', 'NRA +3.00 D / PRA −4.00 D'],
    correct: 2,
    answer: 'NRA: +2.50 D | PRA: −3.50 D.',
  },
  {
    category: 'hofstetter',
    kind: 'identification',
    stem: "State all three Hofstetter's AA formulas (maximum, average, minimum) and which subtracts the most per year.",
    answer: 'Max: 25 − 0.40 × age | Average: 18.5 − 0.30 × age | Minimum: 15 − 0.25 × age | Max subtracts the most (0.40); Min subtracts the least (0.25).',
  },

  // ── PURKINJE IMAGES ─────────────────────────────────────────────────────────
  {
    category: 'purkinje',
    kind: 'mcq',
    stem: 'Which Purkinje image is the only one that is REAL and INVERTED?',
    options: [
      'Purkinje I — anterior cornea',
      'Purkinje II — posterior cornea',
      'Purkinje III — anterior lens',
      'Purkinje IV — posterior lens',
    ],
    correct: 3,
    answer: 'Purkinje Image IV (posterior lens) is the only real, inverted image. Images I–III are virtual and erect.',
  },
  {
    category: 'purkinje',
    kind: 'mcq',
    stem: 'Purkinje Image III (anterior lens) changes during accommodation. What happens to it?',
    options: [
      'It grows larger as the lens steepens',
      'It stays the same size',
      'It shrinks from ~2.0 cm to ~1.0 cm',
      'It reverses and becomes inverted',
    ],
    correct: 2,
    answer: 'PIII shrinks from ~2.0 cm (relaxed) to ~1.0 cm (max accommodated). This confirms that the anterior lens surface steepens during accommodation.',
  },
  {
    category: 'purkinje',
    kind: 'identification',
    stem: 'State all four Purkinje images: source surface and whether each is erect/virtual or inverted/real.',
    answer: 'PI: Anterior cornea — erect, virtual | PII: Posterior cornea — erect, virtual | PIII: Anterior lens — erect, virtual (shrinks with accommodation) | PIV: Posterior lens — INVERTED, REAL',
  },

  // ── PRISM FORMULAS ──────────────────────────────────────────────────────────
  {
    category: 'prism',
    kind: 'mcq',
    stem: "Prentice's Rule states that prismatic effect (Δ) equals:",
    options: ['D / c', 'D × c', 'c / D', 'D + c'],
    correct: 1,
    answer: 'Δ = D × c. D = lens power in diopters; c = decentration from optical center in centimeters.',
  },
  {
    category: 'prism',
    kind: 'mcq',
    stem: 'What is the definition of 1 prism diopter (Δ)?',
    options: [
      '1 cm displacement at 2 meters',
      '1 mm displacement at 1 meter',
      '1 cm displacement at 1 meter',
      '1 degree of arc deviation',
    ],
    correct: 2,
    answer: '1 Δ = 1 cm displacement at 1 meter.',
  },
  {
    category: 'prism',
    kind: 'mcq',
    stem: 'In the prism deviation formula Dev = Aa × (n − 1), what does Aa represent?',
    options: [
      'Angle of refraction',
      'Apical angle of the prism',
      'Angle of incidence',
      'Angle of minimum deviation',
    ],
    correct: 1,
    answer: 'Aa = apical angle of the prism. n = refractive index of prism material. Deviation increases with a larger apical angle or higher IOR.',
  },

  // ── IOR VALUES ──────────────────────────────────────────────────────────────
  {
    category: 'ior',
    kind: 'mcq',
    stem: 'What is the refractive index of Crown Glass?',
    options: ['1.49', '1.50', '1.523', '1.58'],
    correct: 2,
    answer: 'Crown Glass n = 1.523. Also the lens clock calibration index.',
  },
  {
    category: 'ior',
    kind: 'mcq',
    stem: 'What is the refractive index of the cornea?',
    options: ['1.336', '1.357', '1.376', '1.386'],
    correct: 2,
    answer: 'Cornea n = 1.376. Note: the keratometer uses 1.3375 (calibration index) — not the true corneal IOR.',
  },
  {
    category: 'ior',
    kind: 'mcq',
    stem: 'What is the refractive index of the aqueous humor?',
    options: ['1.336', '1.357', '1.376', '1.406'],
    correct: 0,
    answer: 'Aqueous n = 1.336. Same as tears and vitreous (1.336).',
  },
  {
    category: 'ior',
    kind: 'mcq',
    stem: 'What is the refractive index of the lens nucleus?',
    options: ['1.336', '1.376', '1.386', '1.406'],
    correct: 3,
    answer: 'Lens nucleus n = 1.406. Lens cortex = 1.386. Nucleus is denser (higher IOR) than cortex.',
  },
  {
    category: 'ior',
    kind: 'mcq',
    stem: 'What is the refractive index of CR-39 plastic lens material?',
    options: ['1.46', '1.49', '1.523', '1.58'],
    correct: 1,
    answer: 'CR-39 (and PMMA) n = 1.49. Polycarbonate = 1.586. Crown Glass = 1.523.',
  },
  {
    category: 'ior',
    kind: 'mcq',
    stem: 'What is the critical angle for Crown Glass (n = 1.523)?',
    options: ['35.0°', '38.5°', '41.0°', '45.0°'],
    correct: 2,
    answer: 'Crown Glass θc ≈ 41°. Water θc ≈ 48.6°. Diamond θc ≈ 24.4°. TIR only occurs when light travels denser → less dense.',
  },
  {
    category: 'ior',
    kind: 'identification',
    stem: 'State the refractive indices of all five eye components in Gullstrand\'s schematic eye.',
    answer: 'Cornea: 1.376 | Aqueous: 1.336 | Lens cortex: 1.386 | Lens nucleus: 1.406 | Vitreous: 1.336',
  },
  {
    category: 'ior',
    kind: 'identification',
    stem: 'State the refractive indices of these optical materials: air, water, CR-39, Crown Glass, polycarbonate, and diamond.',
    answer: 'Air: 1.000 | Water: 1.333 | CR-39/PMMA: 1.49 | Crown Glass: 1.523 | Polycarbonate/Lt Flint: 1.586 | Diamond: 2.417',
  },

  // ── KERATOMETRY & CL ────────────────────────────────────────────────────────
  {
    category: 'keratometry',
    kind: 'mcq',
    stem: 'What constant does the keratometer use to convert radius of curvature to corneal power?',
    options: ['333.0 / r', '336.0 / r', '337.5 / r', '340.0 / r'],
    correct: 2,
    answer: 'D = 337.5 / r. Calibration index n = 1.3375. This accounts for the posterior corneal surface.',
  },
  {
    category: 'keratometry',
    kind: 'mcq',
    stem: 'What is the minimum Dk/t required for extended (overnight) contact lens wear?',
    options: ['25 Dk/t', '50 Dk/t', '75 Dk/t', '87 Dk/t'],
    correct: 3,
    answer: 'Extended wear: ≥ 87 Dk/t. Daily wear: ≥ 25 Dk/t.',
  },
  {
    category: 'keratometry',
    kind: 'mcq',
    stem: 'What is the average HVID (horizontal visible iris diameter)?',
    options: ['10.7 mm', '11.2 mm', '11.7 mm', '12.2 mm'],
    correct: 2,
    answer: 'HVID avg = 11.7 mm (range 10–14 mm). VVID avg = 10.6 mm. Trial RGP diameter = HVID − 2 mm.',
  },
  {
    category: 'keratometry',
    kind: 'mcq',
    stem: 'What is the minimum Dk/t required for daily wear contact lenses?',
    options: ['15 Dk/t', '25 Dk/t', '35 Dk/t', '50 Dk/t'],
    correct: 1,
    answer: 'Daily wear: ≥ 25 Dk/t. Extended wear: ≥ 87 Dk/t.',
  },

  // ── BINOCULAR VISION ────────────────────────────────────────────────────────
  {
    category: 'binocular',
    kind: 'mcq',
    stem: 'What is the normal AC/A ratio range?',
    options: ['2–4:1', '4–6:1', '6–8:1', '3–5:1'],
    correct: 1,
    answer: 'Normal AC/A = 4–6:1 (often stated as 4:1). High > 6:1. Low (convergence insufficiency) < 3:1.',
  },
  {
    category: 'binocular',
    kind: 'mcq',
    stem: "What are Morgan's norms for positive fusional vergence (BO) at NEAR (blur/break/recovery)?",
    options: ['9 / 19 / 10 Δ', '12 / 15 / 4 Δ', '9 / 17 / 8 Δ', '15 / 20 / 10 Δ'],
    correct: 1,
    answer: 'PFV (BO) NEAR: 12/15/4 Δ. NFV (BI) NEAR: 9/17/8 Δ.',
  },
  {
    category: 'binocular',
    kind: 'mcq',
    stem: 'What is the normal near point of convergence (NPC) break point?',
    options: ['≤ 3 cm', '≤ 6 cm', '≤ 10 cm', '≤ 12 cm'],
    correct: 1,
    answer: 'Normal NPC break ≤ 6 cm. Values > 6 cm suggest convergence insufficiency.',
  },
  {
    category: 'binocular',
    kind: 'mcq',
    stem: 'What is the normal stereoacuity threshold?',
    options: ['5–10 seconds of arc', '20–40 seconds of arc', '60–80 seconds of arc', '100–120 seconds of arc'],
    correct: 1,
    answer: 'Normal stereoacuity: 20–40 seconds of arc.',
  },
  {
    category: 'binocular',
    kind: 'mcq',
    stem: "Sheard's Criterion states that the compensating vergence must be at least:",
    options: [
      'Equal to the phoria',
      'Twice the phoria',
      'Three times the phoria',
      'Half the phoria',
    ],
    correct: 1,
    answer: 'Compensating vergence ≥ 2 × phoria. If not met, prescribe prism or vision therapy.',
  },
  {
    category: 'binocular',
    kind: 'identification',
    stem: "State Morgan's norms for PFV (BO) and NFV (BI) at NEAR and DISTANCE (blur/break/recovery).",
    answer: 'PFV (BO) NEAR: 12/15/4 Δ | NFV (BI) NEAR: 9/17/8 Δ | PFV (BO) DISTANCE: 9/19/10 Δ | NFV (BI) DISTANCE: x/7/4 Δ (no blur point at distance for BI)',
  },

  // ── EOM ANATOMY ─────────────────────────────────────────────────────────────
  {
    category: 'eom',
    kind: 'mcq',
    stem: 'How far is the medial rectus (MR) insertion from the limbus (Spiral of Tillaux)?',
    options: ['5.0 mm', '5.5 mm', '6.0 mm', '6.5 mm'],
    correct: 1,
    answer: 'MR = 5.5 mm — the closest rectus insertion. Order: MR (5.5) → IR (6.0) → LR (6.9) → SR (7.7 mm, farthest).',
  },
  {
    category: 'eom',
    kind: 'mcq',
    stem: 'Which extraocular muscle has the farthest insertion from the limbus?',
    options: ['Lateral Rectus (6.9 mm)', 'Superior Rectus (7.7 mm)', 'Inferior Rectus (6.0 mm)', 'Medial Rectus (5.5 mm)'],
    correct: 1,
    answer: 'Superior Rectus = 7.7 mm from limbus (farthest). MR = 5.5 mm (closest and strongest/heaviest EOM).',
  },
  {
    category: 'eom',
    kind: 'mcq',
    stem: 'Which extraocular muscle does NOT originate from the annulus of Zinn?',
    options: ['Superior Rectus', 'Inferior Oblique', 'Superior Oblique', 'Lateral Rectus'],
    correct: 1,
    answer: 'Inferior Oblique originates from the inferior nasal orbital rim — NOT from the annulus of Zinn. All other EOMs arise from the annulus.',
  },
  {
    category: 'eom',
    kind: 'identification',
    stem: 'State the Spiral of Tillaux — all four rectus insertion distances from the limbus, closest to farthest.',
    answer: 'MR: 5.5 mm | IR: 6.0 mm | LR: 6.9 mm | SR: 7.7 mm | MR is the closest and strongest/heaviest EOM.',
  },

  // ── VISUAL FIELD & PHOTORECEPTORS ────────────────────────────────────────────
  {
    category: 'visual-field',
    kind: 'mcq',
    stem: 'What is the peak sensitivity wavelength for scotopic (rod) vision?',
    options: ['450 nm', '500 nm', '560 nm', '600 nm'],
    correct: 1,
    answer: 'Scotopic (rods) peak = 500 nm (blue-green). Photopic (cones) peak = 560 nm (yellow-green).',
  },
  {
    category: 'visual-field',
    kind: 'mcq',
    stem: 'At what wavelength is peak photopic (cone) sensitivity?',
    options: ['500 nm', '520 nm', '540 nm', '560 nm'],
    correct: 3,
    answer: 'Photopic (cone) peak = 560 nm (yellow-green). Rod peak = 500 nm.',
  },
  {
    category: 'visual-field',
    kind: 'mcq',
    stem: 'Approximately how many rods are in the human retina?',
    options: ['6 million', '60 million', '120 million', '126 million'],
    correct: 2,
    answer: 'Rods: ~120 million. Cones: ~6 million. Total: ~126 million photoreceptors.',
  },
  {
    category: 'visual-field',
    kind: 'mcq',
    stem: 'What is the temporal extent of the normal monocular visual field?',
    options: ['60°', '75°', '90°', '100°'],
    correct: 3,
    answer: 'Temporal: 100° (widest). Superior: 60°. Inferior: 75°. Nasal: 60°.',
  },
  {
    category: 'visual-field',
    kind: 'identification',
    stem: 'State the normal monocular visual field extents in all four directions.',
    answer: 'Superior: 60° | Inferior: 75° | Temporal: 100° | Nasal: 60° | Total monocular: 150–180° | Binocular overlap: 120°',
  },

  // ── PUPIL & ADAPTATION ───────────────────────────────────────────────────────
  {
    category: 'pupil',
    kind: 'mcq',
    stem: 'How long does full dark adaptation take?',
    options: ['10–15 minutes', '20–30 minutes', '1–2 hours', '3–4 hours'],
    correct: 2,
    answer: 'Full dark adaptation (rod threshold): 1–2 hours. Light adaptation: ~10 minutes.',
  },
  {
    category: 'pupil',
    kind: 'mcq',
    stem: 'What pupil diameter is considered mydriasis?',
    options: ['> 3 mm', '> 4 mm', '> 5 mm', '> 6 mm'],
    correct: 2,
    answer: 'Mydriasis: > 5 mm. Miosis: ≤ 1.5 mm. Normal physiologic range: 3–4 mm.',
  },
  {
    category: 'pupil',
    kind: 'mcq',
    stem: 'What is the normal physiologic pupil diameter range?',
    options: ['1–3 mm', '2–5 mm', '3–4 mm', '4–6 mm'],
    correct: 1,
    answer: 'Normal range: 2–5 mm. Physiologic (resting): 3–4 mm. Mydriasis: > 5 mm. Miosis: ≤ 1.5 mm.',
  },

  // ── PHARMACOLOGY ─────────────────────────────────────────────────────────────
  {
    category: 'pharmacology',
    kind: 'mcq',
    stem: 'Which cycloplegic/mydriatic agent has the longest duration of action?',
    options: ['Scopolamine', 'Atropine', 'Homatropine', 'Cyclopentolate'],
    correct: 1,
    answer: 'Atropine: 7–14 days. Order: Atropine > Scopolamine (5–7 d) > Homatropine (24–48 h) > Cyclopentolate (6–24 h) > Tropicamide (4–6 h).',
  },
  {
    category: 'pharmacology',
    kind: 'mcq',
    stem: 'Which cycloplegic agent has the shortest duration of action?',
    options: ['Homatropine', 'Cyclopentolate', 'Tropicamide', 'Scopolamine'],
    correct: 2,
    answer: 'Tropicamide: 4–6 hours — the shortest acting cycloplegic.',
  },
  {
    category: 'pharmacology',
    kind: 'mcq',
    stem: 'After how long does topical dexamethasone typically cause secondary open-angle glaucoma?',
    options: ['2 weeks', '6 weeks', '3 months', '6 months'],
    correct: 1,
    answer: 'Secondary OAG: after 6 weeks of topical dexamethasone. Permanent OAG can develop after 18 months.',
  },
  {
    category: 'pharmacology',
    kind: 'mcq',
    stem: 'What is the normal intraocular pressure range?',
    options: ['6–16 mmHg', '10–21 mmHg', '12–24 mmHg', '8–18 mmHg'],
    correct: 1,
    answer: 'Normal IOP: 10–21 mmHg. Mean ≈ 15–16 mmHg. Ocular HTN: > 21 mmHg. Hypotony: < 6 mmHg.',
  },
  {
    category: 'pharmacology',
    kind: 'identification',
    stem: 'List all five major cycloplegics from longest to shortest duration of action with their durations.',
    answer: 'Atropine (7–14 days) → Scopolamine (5–7 days) → Homatropine (24–48 hrs) → Cyclopentolate (6–24 hrs) → Tropicamide (4–6 hrs)',
  },

  // ── REFRACTIVE ERROR ──────────────────────────────────────────────────────────
  {
    category: 'refractive-error',
    kind: 'mcq',
    stem: 'Which of the following correctly defines high myopia?',
    options: ['> −4.00 D', '> −5.00 D', '≥ −6.00 D', '≥ −8.00 D'],
    correct: 2,
    answer: 'High myopia: −6.00 D and above. Low: −0.25 to −3.00 D. Medium: −3.00 to −6.00 D.',
  },
  {
    category: 'refractive-error',
    kind: 'mcq',
    stem: 'Which of the following correctly defines high hyperopia?',
    options: ['> +3.00 D', '> +4.00 D', '≥ +5.00 D', '≥ +6.00 D'],
    correct: 2,
    answer: 'High hyperopia: +5.00 D and above. Low: +0.25 to +3.00 D. Medium: +3.00 to +5.00 D.',
  },
  {
    category: 'refractive-error',
    kind: 'mcq',
    stem: 'At what anisometropia magnitude does refractive amblyopia risk significantly increase?',
    options: ['> 1.00 D', '> 1.50 D', '> 2.00 D', '> 3.00 D'],
    correct: 3,
    answer: 'Class III anisometropia (> 3.00 D) carries significant risk of refractive amblyopia. Class I (< 1.50 D) = good fusion; Class II (1.50–3.00 D) = partial suppression.',
  },
  {
    category: 'refractive-error',
    kind: 'identification',
    stem: 'State the three degrees of myopia and the three degrees of hyperopia with their dioptric ranges.',
    answer: 'Myopia — Low: −0.25 to −3.00 D | Medium: −3.00 to −6.00 D | High: ≥ −6.00 D | Hyperopia — Low: +0.25 to +3.00 D | Medium: +3.00 to +5.00 D | High: ≥ +5.00 D',
  },
]

// ─── Public helpers ───────────────────────────────────────────────────────────

export function getQuizByCategory(categoryId: string): NotesQuizData {
  const questions: QuizQuestion[] = categoryId === 'all'
    ? QUESTIONS
    : QUESTIONS.filter(q => q.category === categoryId)
  return {
    subject: 'Optometry Constants',
    slug: 'optometry-constants',
    questions,
  }
}

export function getQuestionCount(categoryId: string): number {
  if (categoryId === 'all') return QUESTIONS.length
  return QUESTIONS.filter(q => q.category === categoryId).length
}
