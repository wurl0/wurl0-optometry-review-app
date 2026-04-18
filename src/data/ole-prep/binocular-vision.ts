import { OlePrepData } from '@/lib/ole-prep-types'

const data: OlePrepData = {
  subject: 'Binocular Vision',
  slug: 'binocular-vision',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: "Worth's 3 Grades",
          device: '"SFS — Simultaneously Fusing Stereoscopically"',
          breakdown: 'Grade 1: Simultaneous Macular Perception | Grade 2: Fusion | Grade 3: Stereopsis. Always listed in this order. Stereopsis is the highest, not the first.',
        },
        {
          kind: 'mnemonic',
          term: 'Visual Acuity Milestones',
          device: '"Birth: barely (5/200) → 1 year: barely good (20/70) → 3 years: perfectly good (20/20)"',
          breakdown: 'At birth VA ≤ 5/200. At 1 year: 20/70. At 3 years: 20/20. Fusional mechanism full at 1–1.5 years.',
        },
        {
          kind: 'mnemonic',
          term: 'Visual Field Numbers',
          device: '"18-12-3" = 180° total, 120° binocular, 30° temporal crescent each side',
          breakdown: '180° total binocular field. 120° common binocular. 30° monocular temporal crescent per eye (30×2 = 60° total monocular). Each monocular field = 150°.',
        },
        {
          kind: 'mnemonic',
          term: 'Eye Movement Types',
          device: '"DuVeVe" = DUctions (one), VErsions (both same), VErgences (both opposite)',
          breakdown: 'Duction = ONE eye only. Version = BOTH eyes SAME direction (dextro/levo/supra/infra). Vergence = BOTH eyes OPPOSITE directions (convergence, divergence, vertical divergences).',
        },
        {
          kind: 'mnemonic',
          term: 'Prerequisites for SBV',
          device: '"Front Fovea Fuse Far" — 4 Fs',
          breakdown: 'Frontally placed eyes · Foveal stimulation · Fusion (sensory + motor) · Far: partial decussation of optic fibers. Plus equal image sizes (iseikonia) and efficient EOM function.',
        },
      ],
    },
    {
      id: 'high-yield',
      title: 'High-Yield Facts',
      icon: '⭐',
      items: [
        { kind: 'fact', content: 'FIRST advantage of BV = Single Vision. HIGHEST grade = Stereopsis (Grade 3).', highlight: 'First ≠ Highest' },
        { kind: 'fact', content: 'Common binocular visual field = 120°. Total binocular field = 180°. Temporal crescent (monocular only) = 30° each side.', highlight: '120° / 180° / 30°' },
        { kind: 'fact', content: 'Eyes expected to be straight by 3–4 months. Fusional mechanism fully developed at 1–1.5 years.', highlight: 'Key milestone ages' },
        { kind: 'fact', content: 'Strabismus types: Esotropia = convergent (in). Exotropia = divergent (out). Hypertropia = upward. Hypotropia = downward.', highlight: 'Eso=in, Exo=out' },
        { kind: 'fact', content: 'Aniseikonia (unequal image size) disrupts fusion. Causes: anisometropia, aphakia, retinal disorders.', highlight: 'Aniseikonia → fusional disruption' },
        { kind: 'fact', content: 'Suppression = cortical inhibition of one eye\'s image to avoid diplopia — seen in strabismus and anisometropia.', highlight: 'Suppression' },
        { kind: 'fact', content: 'Critical period for amblyopia treatment: up to ~7–10 years. After this, neuroplasticity decreases significantly.', highlight: 'Critical period ≤ 7–10 yrs' },
        { kind: 'fact', content: 'Horopter: the locus of all points in space whose images fall on corresponding retinal points simultaneously.', highlight: 'Horopter definition' },
      ],
    },
    {
      id: 'traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'What is the FIRST and foremost advantage of binocular vision?',
          wrong: 'Stereopsis / depth perception',
          correct: 'Single vision',
          why: 'Stereopsis is the HIGHEST form (Grade 3), but single vision is the FIRST and most fundamental advantage. Questions often swap these.',
        },
        {
          kind: 'trap',
          question: 'Iseikonia vs Aniseikonia — which is NORMAL?',
          wrong: 'Aniseikonia (students think "iso" means problem)',
          correct: 'Iseikonia = normal (equal images). Aniseikonia = unequal images (abnormal).',
          why: 'Iso = equal = normal. Like isometropia (equal refractive error between eyes = normal). The "an-" prefix = without/not = abnormal.',
        },
        {
          kind: 'trap',
          question: 'At what age are the eyes expected to be STRAIGHT?',
          wrong: '6 months',
          correct: '3–4 months',
          why: 'Eyes are expected to be properly aligned by 3–4 months. Esotropia after 4 months is abnormal and requires evaluation.',
        },
        {
          kind: 'trap',
          question: 'Convergence is which type of eye movement?',
          wrong: 'Version (same direction)',
          correct: 'Vergence (opposite directions — eyes turn inward)',
          why: 'Convergence = both eyes turn INWARD = OPPOSITE directions = VERGENCE. Version = same direction. Students confuse convergence (the word) with version (the category of movement).',
        },
      ],
    },
    {
      id: 'recall',
      title: 'Active Recall',
      icon: '🎯',
      items: [
        { kind: 'recall', prompt: "Worth's Grade 2 is:", answer: 'Fusion (blending of the two ocular images into one percept)' },
        { kind: 'recall', prompt: 'At birth, visual acuity is approximately:', answer: '5/200 or less' },
        { kind: 'recall', prompt: 'The common binocular visual field spans:', answer: '120 degrees' },
        { kind: 'recall', prompt: 'Fusional mechanism (motor + sensory) is fully developed at:', answer: '1–1.5 years of age' },
        { kind: 'recall', prompt: 'Name the 3 types of eye movements (by which eyes are involved and direction):', answer: 'Duction (one eye), Version (both same direction), Vergence (both opposite directions)' },
        { kind: 'recall', prompt: 'Suppression occurs to avoid:', answer: 'Diplopia (double vision) — the brain inhibits one eye\'s image' },
        { kind: 'recall', prompt: 'Horopter is defined as:', answer: 'The locus of points whose images fall on corresponding retinal points simultaneously' },
        { kind: 'recall', prompt: 'Strabismus with the eye turning OUT is called:', answer: 'Exotropia (exo = outside, divergent strabismus)' },
      ],
    },
  ],
}

export default data
