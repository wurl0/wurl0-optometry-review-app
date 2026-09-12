import { NotesQuizData } from '@/lib/notes-quiz-types'

const quiz: NotesQuizData = {
  subject: 'Primary Eye Care',
  slug: 'primary-eye-care',
  questions: [
    {
      kind: 'mcq',
      stem: 'Which type of Snellen chart is considered the GOLD STANDARD for visual acuity testing?',
      options: ['Landolt Ring/C', 'ETDRS (Early Treatment Diabetic Retinopathy Study)', 'Bailey-Lovie', 'E Test'],
      correct: 1,
      answer:
        'ETDRS (Rick Ferris, 1982) is the gold standard. It has the same number of letters per row, equal log scale separation, and balanced difficult letters. The Landolt Ring is the official international standard but ETDRS is the research/clinical gold standard.',
    },
    {
      kind: 'tf',
      stem: 'If a pinhole IMPROVES the patient\'s visual acuity, this indicates a non-refractive cause.',
      correct: false,
      answer:
        'False. If pinhole IMPROVES vision → the cause is REFRACTIVE (uncorrected refractive error). If pinhole does NOT improve or worsens vision → fully corrected OR non-refractive cause (e.g., macular disease). Always done monocularly.',
    },
    {
      kind: 'mcq',
      stem: 'A patient has a corneal reflex that appears on the TEMPORAL side of the pupil during Hirschberg test. What does this indicate?',
      options: ['Exo-deviation', 'Eso-deviation', 'Hypertropia', 'Normal finding'],
      correct: 1,
      answer:
        'Temporal corneal reflex = ESO-deviation (eye is turned inward/nasally). Extremely nasal reflex = EXO-deviation. Slightly nasal = normal (reflex is normally 0.5mm nasal to pupil centre). Downward = hypertropia. Upward = hypotropia.',
    },
    {
      kind: 'identification',
      stem: 'State the endpoint rule for Duochrome (Bichrome) sphere refinement when equal clarity CANNOT be achieved.',
      answer:
        'Leave GREEN CLEARER — this indicates the patient is on the more-plus (less-minus) side, which is the safer endpoint. Green = shorter wavelength = focuses in front of retina. Red = longer = behind retina. Goal is equality, but green clearer is the fallback.',
    },
    {
      kind: 'mcq',
      stem: 'What is the FIRST thing to do in a practical exam BEFORE taking the case history?',
      options: ['Measure VA', 'Get patient\'s pupil diameter', 'Set up the phoropter', 'Perform cover test'],
      correct: 1,
      answer:
        'Get the patient\'s PUPIL DIAMETER first. This is a board exam board trap — pupil diameter must be recorded before beginning case history. Female patients: also consider menstrual period as blood chemistry changes may cause variations in refractive error.',
    },
    {
      kind: 'tf',
      stem: 'Van Herick Grade 1 means the anterior chamber angle is CLOSED and represents an acute glaucoma emergency.',
      correct: false,
      answer:
        'False. Grade 0 = CLOSED angle = acute angle closure glaucoma emergency (no shadow, cornea "sits" on iris). Grade 1 = RISKY NARROW angle = susceptible to closure (<1:4 ratio) but not yet closed. Grade 2 = narrow. Grades 3–4 = open.',
    },
    {
      kind: 'identification',
      stem: 'State the NPC clinical interpretation: what does a break point of 3cm indicate, and what does a break point of 12cm indicate?',
      answer:
        '3cm (< 5cm) = CONVERGENCE EXCESS. 12cm (> 10cm) = CONVERGENCE INSUFFICIENCY. Normal NPC = 6–10cm. Management for convergence insufficiency = convergence exercises (vision therapy) + prism/lenses.',
    },
    {
      kind: 'mcq',
      stem: 'Which colour vision test can detect TRITAN (blue-yellow) defects, unlike Ishihara plates?',
      options: ['Farnsworth D-15', 'Hardy Rand Rittler (HRR)', 'Verhoeff Ring', 'Farnsworth-Munsell 100 Hue'],
      correct: 1,
      answer:
        'HRR (Hardy Rand Rittler) can detect protan, deutan, AND tritan defects. Ishihara screens ONLY protan and deutan (red-green). Farnsworth-Munsell 100 Hue is most sensitive for mild/moderate congenital AND early acquired defects. D-15: pass = mild deficiency; fail = severe.',
    },
    {
      kind: 'mcq',
      stem: 'A patient improves from 20/60 to 20/25 when looking through a pinhole. This suggests the cause of the blur is:',
      options: ['a media opacity', 'uncorrected refractive error', 'macular disease', 'optic nerve disease'],
      correct: 1,
      answer: 'A pinhole eliminates most refractive blur, so improvement points to uncorrected refractive error. Little or no improvement suggests media opacity or retinal/optic nerve disease.',
    },
    {
      kind: 'mcq',
      stem: 'Using Hofstetter\'s average formula, the expected amplitude of accommodation for a 40-year-old is about:',
      options: ['4.5 D', '6.5 D', '9.0 D', '2.0 D'],
      correct: 1,
      answer: 'Average expected AA = 18.5 − 0.30 × age = 18.5 − 12 = 6.5 D at age 40. The minimum formula (15 − 0.25 × age) gives 5.0 D.',
    },
    {
      kind: 'mcq',
      stem: 'On the Hirschberg test, the corneal light reflex of a normal eye is located:',
      options: ['exactly central', 'slightly nasal to the pupil center', 'slightly temporal to the pupil center', 'at the pupil margin'],
      correct: 1,
      answer: 'The normal reflex sits about 0.5 mm nasal to the pupil center because of angle kappa. A temporally displaced reflex suggests esotropia, a nasal one exotropia.',
    },
    {
      kind: 'mcq',
      stem: 'Dynamic retinoscopy differs from static retinoscopy in that the patient:',
      options: ['fixates at distance with accommodation relaxed', 'fixates a near target with accommodation active', 'is fully cyclopleged', 'wears a pinhole'],
      correct: 1,
      answer: 'Dynamic retinoscopy uses a near fixation target with active accommodation and no working-distance allowance, to assess the accommodative response (lag). Static retinoscopy uses distance fixation with relaxed accommodation.',
    },
    {
      kind: 'mcq',
      stem: 'The lowest form of visual acuity, detecting the presence of a target against its background, is:',
      options: ['minimum separable', 'minimum visible', 'minimum legible', 'minimum discriminable'],
      correct: 1,
      answer: 'Minimum visible (detection) is the lowest form of acuity. Resolution is minimum separable, letter recognition is minimum legible (Snellen), and Vernier alignment is minimum discriminable.',
    },
  ],
}

export default quiz
