import { NotesQuizData } from '@/lib/notes-quiz-types'

const quiz: NotesQuizData = {
  subject: 'Physiologic Optics',
  slug: 'physiologic-optics',
  questions: [
    {
      kind: 'identification',
      stem: 'What is the refractive index of aqueous humor?',
      answer: '1.336 (same as vitreous humor)',
    },
    {
      kind: 'mcq',
      stem: 'Which subtype of hyperopia can be overcome by accommodation, allowing potentially normal vision?',
      options: ['Absolute hyperopia', 'Facultative hyperopia', 'Latent hyperopia', 'Total hyperopia'],
      correct: 1,
      answer: 'Facultative hyperopia can be overcome by accommodation. Absolute cannot be overcome at all.',
    },
    {
      kind: 'tf',
      stem: 'Presbyopia symptoms typically appear when the amplitude of accommodation falls below 5.00 D.',
      correct: true,
      answer: 'True. Clinical onset is around age 45 (range 40–50), when amplitude drops near or below 5.00 D.',
    },
    {
      kind: 'identification',
      stem: "Write Hofstetter's formula for the MINIMUM amplitude of accommodation.",
      answer: '15 − 0.25(age) — e.g., at age 40: 15 − 10 = 5.00 D minimum',
    },
    {
      kind: 'mcq',
      stem: "What is the total refractive power of the unaccommodated eye per Gullstrand's schematic eye?",
      options: ['43.00 D', '52.00 D', '58.64 D', '67.00 D'],
      correct: 2,
      answer: '58.64 D — cornea contributes ~43 D (2/3) and the lens ~19 D (1/3), plus interaction effects.',
    },
    {
      kind: 'tf',
      stem: 'With-the-rule (WTR) astigmatism has its strongest power meridian near the horizontal axis.',
      correct: false,
      answer: 'False. WTR has its strongest curvature near the VERTICAL meridian (60°–120°). ATR is near the horizontal axis.',
    },
    {
      kind: 'identification',
      stem: 'Who first proved accommodation exists using a disc with two pinholes?',
      answer: 'Christopher Scheiner (1619) — the Scheiner disc demonstrates that accommodation exists by showing blur when one pinhole is covered.',
    },
    {
      kind: 'mcq',
      stem: 'What is the correction for compound myopic astigmatism?',
      options: ['Plus cylinder only', 'Minus sphere with minus cylinder', 'Minus sphere with plus cylinder', 'Minus cylinder only'],
      correct: 1,
      answer: 'Compound myopic: both focal lines fall in front of the retina. Both power meridians need reduction → minus sphere combined with minus cylinder.',
    },
  ],
}

export default quiz
