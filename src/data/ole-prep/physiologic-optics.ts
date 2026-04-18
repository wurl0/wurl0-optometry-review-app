import { OlePrepData } from '@/lib/ole-prep-types'

const data: OlePrepData = {
  subject: 'Physiologic Optics',
  slug: 'physiologic-optics',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Refractive Indices Order',
          device: '"Air Always Causes Very Noticeable Lies"',
          breakdown: 'Air (1.000) · Aqueous & Vitreous (1.336) · Cornea (1.376) · Cortex (1.386) · Nucleus (1.406) — each step increases. Aqueous = Vitreous = 1.336.',
        },
        {
          kind: 'mnemonic',
          term: "Hofstetter's Formulas — Max Subtracts Most",
          device: '"MAX pays 40, AVG pays 30, MIN pays 25"',
          breakdown: 'Max = 25 − 0.40(age) | Avg = 18.5 − 0.30(age) | Min = 15 − 0.25(age). The biggest number (Max) subtracts the most per year.',
        },
        {
          kind: 'mnemonic',
          term: 'Hyperopia Subtypes Chain',
          device: '"TOTAL = MANIFEST + LATENT; MANIFEST = ABS + FAC"',
          breakdown: 'Total → Manifest (what you can measure without cycloplegia) + Latent (hidden). Manifest → Absolute (cannot overcome) + Facultative (can overcome with accommodation).',
        },
        {
          kind: 'mnemonic',
          term: 'WTR vs ATR Astigmatism',
          device: '"WITH = Vertical is strong. AGAINST = Horizontal is strong."',
          breakdown: 'WTR: curvature of greatest power near VERTICAL (60–120°) — like most people, the vertical meridian is dominant. ATR goes against this — horizontal is strongest. Both correct with cylinders.',
        },
        {
          kind: 'mnemonic',
          term: 'Historical Figures',
          device: '"Scheiner PROVED · Kepler DEFINED · Kastner FOUND · Helmholtz NAMED · Donders CLASSIFIED · Airy CORRECTED · Green CHARTED"',
          breakdown: 'Scheiner (1619) proved accommodation. Kepler (1611) defined myopia. Kastner (1855) found hyperopia. Helmholtz (1859) named it. Donders classified both (1858/1866). Airy corrected astigmatism. Green made the clock chart.',
        },
      ],
    },
    {
      id: 'high-yield',
      title: 'High-Yield Facts',
      icon: '⭐',
      items: [
        { kind: 'fact', content: 'Cornea contributes 2/3 of total eye power (~43 D). Total eye power = 58.64 D (Gullstrand).', highlight: '58.64 D' },
        { kind: 'fact', content: 'Presbyopia onset ~45 years. Symptoms when amplitude < 5.00 D. Caused by loss of LENS ELASTICITY (not ciliary muscle weakness).', highlight: '45 yrs / 5.00 D' },
        { kind: 'fact', content: 'Aqueous = Vitreous = 1.336. Cornea = 1.376. Lens cortex = 1.386. Lens nucleus = 1.406.', highlight: 'Refractive indices' },
        { kind: 'fact', content: 'Astigmatism is the MOST COMMONLY CORRECTED refractive error today.', highlight: 'Most common corrected' },
        { kind: 'fact', content: 'Accommodation stimulus: BLUR on the fovea (not proximity, not vergence).', highlight: 'Primary stimulus = blur' },
        { kind: 'fact', content: "Sorsby's: Correlative (simple) = 0.25–6.00 D. Component (pathological) = above 6.00 D.", highlight: "Sorsby's" },
        { kind: 'fact', content: 'Anisometropia threshold: ≥1.00 D (Grosvenor) or ≥2.00 D (Borish). Know BOTH definitions.', highlight: 'Anisometropia thresholds' },
        { kind: 'fact', content: 'Presbyopia appears EARLIER in uncorrected hyperopes than myopes — hyperope already uses accommodative reserve at distance.', highlight: 'Hyperope presbyopia first' },
      ],
    },
    {
      id: 'traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'Which type of hyperopia requires cycloplegic refraction to fully reveal?',
          wrong: 'Manifest hyperopia',
          correct: 'Latent hyperopia',
          why: 'Latent is HIDDEN by ciliary tone. Manifest can be measured without cycloplegia. Total requires cycloplegia.',
        },
        {
          kind: 'trap',
          question: 'WTR astigmatism: the axis of the CORRECTING cylinder is near which direction?',
          wrong: 'Vertical (90°)',
          correct: 'Horizontal (180°) — the correcting MINUS cylinder axis is 180° for WTR',
          why: 'WTR strongest POWER meridian is vertical → correcting cylinder AXIS is horizontal. Confused by the "vertical is strong" mnemonic — power and axis are perpendicular.',
        },
        {
          kind: 'trap',
          question: 'Presbyopia is caused by weakness of which structure?',
          wrong: 'Ciliary muscle weakness',
          correct: 'Loss of lens elasticity',
          why: 'The ciliary muscle contracts fine. The lens simply cannot spring back because it has hardened. This is why reading glasses help — they substitute for a lens that no longer changes shape.',
        },
        {
          kind: 'trap',
          question: 'At age 20, what is the MINIMUM amplitude of accommodation per Hofstetter?',
          wrong: '12.50 D (the average value)',
          correct: '10.00 D — Min = 15 − 0.25(20) = 10.00 D',
          why: 'Students pick the average (18.5 − 0.30×20 = 12.5 D) or maximum (17 D). Min uses the smallest coefficient (0.25) and smallest constant (15).',
        },
      ],
    },
    {
      id: 'recall',
      title: 'Active Recall',
      icon: '🎯',
      items: [
        { kind: 'recall', prompt: 'Total hyperopia = _____ + _____', answer: 'Manifest hyperopia + Latent hyperopia' },
        { kind: 'recall', prompt: 'Manifest hyperopia = _____ + _____', answer: 'Absolute hyperopia + Facultative hyperopia' },
        { kind: 'recall', prompt: "Hofstetter's average amplitude formula:", answer: '18.5 − 0.30(age)' },
        { kind: 'recall', prompt: 'Corneal refractive index:', answer: '1.376' },
        { kind: 'recall', prompt: 'Presbyopia symptoms appear when AA falls below:', answer: '5.00 D (typically ~age 45)' },
        { kind: 'recall', prompt: 'ATR astigmatism: strongest power near which meridian?', answer: 'Horizontal (0–30° or 150–180°)' },
        { kind: 'recall', prompt: 'Who defined myopia first, and in what year?', answer: 'Johannes Kepler, 1611' },
        { kind: 'recall', prompt: 'Axial length increase of 1 mm = approximately how many diopters of myopia?', answer: '~3 D of additional myopia' },
      ],
    },
  ],
}

export default data
