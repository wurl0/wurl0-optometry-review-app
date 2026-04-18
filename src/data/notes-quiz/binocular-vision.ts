import { NotesQuizData } from '@/lib/notes-quiz-types'

const quiz: NotesQuizData = {
  subject: 'Binocular Vision',
  slug: 'binocular-vision',
  questions: [
    {
      kind: 'identification',
      stem: 'What is the extent of the common binocular visual field?',
      answer: '120 degrees — the overlapping central field seen by both eyes simultaneously.',
    },
    {
      kind: 'mcq',
      stem: 'At what age is visual acuity expected to reach 20/20?',
      options: ['1 year', '2 years', '3 years', '5 years'],
      correct: 2,
      answer: '3 years — VA reaches 20/20 around age 3. At 1 year it is approximately 20/70.',
    },
    {
      kind: 'tf',
      stem: 'Stereopsis is the first and most basic advantage of binocular vision.',
      correct: false,
      answer: 'False. SINGLE VISION is the first and foremost advantage. Stereopsis is the HIGHEST form (Grade 3 fusion).',
    },
    {
      kind: 'identification',
      stem: "What are Worth's 3 grades of binocular vision, in order?",
      answer: 'Grade 1: Simultaneous Macular Perception | Grade 2: Fusion | Grade 3: Stereopsis (depth perception)',
    },
    {
      kind: 'mcq',
      stem: 'Fusional mechanism (motor and sensory fusion) is fully developed at what age?',
      options: ['3 months', '6 months', '1–1.5 years', '3 years'],
      correct: 2,
      answer: '1–1.5 years — the fusional mechanism becomes fully developed between 1 and 1.5 years of age.',
    },
    {
      kind: 'tf',
      stem: 'The temporal crescent is the region of the visual field seen only by one eye (monocular only).',
      correct: true,
      answer: 'True. The 30° temporal crescent on each side is not covered by the other eye, making it purely monocular.',
    },
    {
      kind: 'identification',
      stem: "By Hirschberg's test and cover tests, esotropia refers to what type of strabismus?",
      answer: 'Convergent strabismus — the eye turns inward (medially). Exotropia = divergent (outward).',
    },
    {
      kind: 'mcq',
      stem: 'Which movement describes synchronous movement of BOTH eyes in the SAME direction?',
      options: ['Duction', 'Version', 'Vergence', 'Excycloduction'],
      correct: 1,
      answer: 'Version — both eyes move together in the same direction (e.g., dextroversion = both eyes right). Vergence = opposite directions.',
    },
  ],
}

export default quiz
