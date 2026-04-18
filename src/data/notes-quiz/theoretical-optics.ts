import { NotesQuizData } from '@/lib/notes-quiz-types'

const quiz: NotesQuizData = {
  subject: 'Theoretical Optics',
  slug: 'theoretical-optics',
  questions: [
    {
      kind: 'identification',
      stem: "What is the total refractive power of the unaccommodated eye in Gullstrand's schematic eye?",
      answer: '58.64 D — the cornea contributes approximately 43 D (2/3) and the lens approximately 19 D (1/3).',
    },
    {
      kind: 'mcq',
      stem: 'Low myopia is defined as which range?',
      options: ['0.25 D to 1.00 D', '0.25 D to 3.00 D', '3.00 D to 6.00 D', '1.00 D to 5.00 D'],
      correct: 1,
      answer: 'Low myopia: 0.25 D to 3.00 D | Medium: 3.00 to 6.00 D | High: 6.00 D and above.',
    },
    {
      kind: 'tf',
      stem: 'Absolute hyperopia can be overcome by accommodation to achieve normal vision.',
      correct: false,
      answer: 'False. Absolute hyperopia CANNOT be overcome by any amount of accommodation, resulting in subnormal vision. Facultative hyperopia CAN be overcome.',
    },
    {
      kind: 'identification',
      stem: "Write Hofstetter's formula for the AVERAGE amplitude of accommodation.",
      answer: '18.5 − 0.30(age) — e.g., at age 20: 18.5 − 6 = 12.50 D average',
    },
    {
      kind: 'mcq',
      stem: 'Against-the-rule (ATR) astigmatism has its strongest power meridian near which axis?',
      options: ['Vertical (90°)', 'Oblique (45°)', 'Horizontal (180°)', 'All meridians equally'],
      correct: 2,
      answer: 'ATR astigmatism: strongest curvature near the horizontal axis (0–30° or 150–180°). The opposite of WTR.',
    },
    {
      kind: 'tf',
      stem: 'Johannes Kepler gave the first actual definition of myopia.',
      correct: true,
      answer: 'True. Kepler (1611) defined myopia. Donders later classified it (1866). Kastner found hyperopia (1855); Helmholtz named it (1859).',
    },
    {
      kind: 'identification',
      stem: 'Complete the formula: Total Hyperopia = Manifest Hyperopia + ___.',
      answer: 'Latent Hyperopia — the hidden component masked by ciliary tone, revealed only by cycloplegic refraction.',
    },
    {
      kind: 'mcq',
      stem: 'Who was the first person to correct astigmatism using a spherocylindrical lens?',
      options: ['Donders', 'Helmholtz', 'George Biddle Airy', 'John Green'],
      correct: 2,
      answer: 'George Biddle Airy — he corrected his own astigmatism with a spherocylindrical lens. John Green later created the first astigmatism test chart (clock dial).',
    },
  ],
}

export default quiz
