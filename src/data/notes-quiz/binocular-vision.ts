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
    {
      kind: 'mcq',
      stem: 'Hering\'s law of equal innervation states that:',
      options: ['antagonist muscles relax when the agonist contracts', 'yoke muscles of the two eyes receive equal innervation', 'accommodation drives convergence', 'the pupil constricts with near effort'],
      correct: 1,
      answer: 'Hering\'s law (a binocular law) says that yoke (contralateral synergist) muscles receive equal innervation, keeping the visual axes parallel. In dextroversion the right lateral rectus and left medial rectus fire equally.',
    },
    {
      kind: 'mcq',
      stem: 'Sherrington\'s law of reciprocal innervation describes that when a muscle contracts:',
      options: ['its yoke muscle contracts equally', 'its direct antagonist relaxes to an equal degree', 'both eyes converge', 'accommodation relaxes'],
      correct: 1,
      answer: 'Sherrington\'s law is a monocular law: as one muscle contracts, its direct antagonist relaxes equally. In supraduction the superior rectus contracts as the inferior rectus relaxes.',
    },
    {
      kind: 'mcq',
      stem: 'Which condition is a requirement for binocular fusion?',
      options: ['unequal acuity between the eyes', 'normal retinal correspondence', 'suppression of one image', 'markedly different image sizes'],
      correct: 1,
      answer: 'Fusion requires roughly equal acuity, monocular fixation, normal retinal correspondence, normal motility, and similar images. Suppression and large size differences prevent it.',
    },
    {
      kind: 'mcq',
      stem: 'Adduction and abduction of the eye occur around which axis of Fick?',
      options: ['the transverse (X) axis', 'the vertical (Z) axis', 'the antero-posterior (Y) axis', 'the visual axis'],
      correct: 1,
      answer: 'Horizontal movements (adduction and abduction) occur around the vertical Z-axis. The transverse X-axis produces elevation and depression, and the antero-posterior Y-axis produces torsion.',
    },
    {
      kind: 'mcq',
      stem: 'The primary position of gaze, with the eyes directed straight ahead, is also called the:',
      options: ['ortho position', 'cardinal position', 'tertiary position', 'vergence position'],
      correct: 0,
      answer: 'The primary position (eyes straight ahead) is the ortho position. The four secondary positions are dextro, levo, supra, and infra; the four tertiary positions are oblique.',
    },
  ],
}

export default quiz
