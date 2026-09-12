import { NotesQuizData } from '@/lib/notes-quiz-types'

const quiz: NotesQuizData = {
  subject: 'Phorometry (21 Steps)',
  slug: 'phorometry',
  questions: [
    {
      kind: 'identification',
      stem: 'What effect does a Base-Out (BO) prism have on convergence?',
      answer: 'STIMULATES convergence — BO bends light inward, forcing eyes to turn inward (medial rectus contracts more). Target appears smaller/closer.',
    },
    {
      kind: 'mcq',
      stem: 'Which test adds MINUS lenses to measure Positive Relative Accommodation (PRA)?',
      options: ['Test #19 (AA)', 'Test #20 (PRA)', 'Test #21 (NRA)', 'Test #14A (Dissociated CC)'],
      correct: 1,
      answer: 'Test #20 (PRA) uses MINUS lenses — stimulates accommodation until blur. Test #21 (NRA) uses PLUS lenses — inhibits accommodation.',
    },
    {
      kind: 'tf',
      stem: 'In test #14A (Dissociated Cross-Cylinder), dissociating prisms (3△BD/3△BU) are present.',
      correct: true,
      answer: 'True. #14A = Dissociated = prisms present (OD 3△BD, OS 3△BU). #14B = Binocular = no prisms. This is the most tested distinction between these two tests.',
    },
    {
      kind: 'identification',
      stem: 'What is the endpoint for test #16A (Positive Relative Convergence / PRC)?',
      answer: 'Blur only — do NOT continue to break. PRC stops at blur (accommodation exhausted). PFR (#16B) continues to break + recovery.',
    },
    {
      kind: 'mcq',
      stem: 'Test #3 (Habitual Lateral Phoria at Far) uses which lenses?',
      options: ["Test #7 (H/E) result", 'Gross #14A lenses', 'Habitual correction', 'No lenses (bare eye)'],
      correct: 2,
      answer: 'Habitual correction — test #3 uses what the patient normally wears. Test #8 uses the Test #7 (subjective refraction) result. This distinction is the most tested board trap for this pair.',
    },
    {
      kind: 'tf',
      stem: 'When Base-Out (BO) prisms are used, the target appears bigger.',
      correct: false,
      answer: 'False. BO STIMULATES convergence → object seems CLOSER → target appears SMALLER. Base-In (inhibits) → bigger. Stimulate = smaller; Inhibit = bigger.',
    },
    {
      kind: 'identification',
      stem: "State the 'A rule' in phorometry testing.",
      answer: 'A tests stop at BLUR or ALIGNMENT (less invasive). B tests continue to BREAK + RECOVERY. Example: 16A (PRC) = blur only; 16B (PFR) = break + recovery.',
    },
    {
      kind: 'mcq',
      stem: 'In Base-Out (BO) prism testing, why does BLUR appear before BREAK?',
      options: [
        'Because BO inhibits convergence first',
        'Because BO stimulates convergence, which drives accommodation; accommodation hits its limit before fusion breaks',
        'Because the prism changes the refractive index of the cornea',
        'Because BO always causes immediate diplopia',
      ],
      correct: 1,
      answer: 'BO forces extra convergence → convergence drives accommodation (near triad linkage) → accommodation reaches its maximum first → blur. Vergence system breaks only after accommodation is already exhausted.',
    },
    {
      kind: 'mcq',
      stem: 'A concave (minus) lens used as a probe body during phorometry:',
      options: ['inhibits accommodation', 'stimulates accommodation', 'inhibits convergence', 'stimulates convergence'],
      correct: 1,
      answer: 'A concave (minus) lens diverges light before it enters the eye, so the crystalline lens must add power. The ciliary muscle contracts more, stimulating accommodation. A convex (plus) lens does the reverse.',
    },
    {
      kind: 'mcq',
      stem: 'Base-out prism stimulates convergence because it makes the images land:',
      options: ['nasally, so the eyes diverge', 'temporally, so the eyes converge', 'higher, so the eyes depress', 'lower, so the eyes elevate'],
      correct: 1,
      answer: 'Base-out bends light inward toward the nose, so images fall on the temporal retina and the eyes must turn inward (converge) to fuse. This tests positive fusional vergence.',
    },
    {
      kind: 'mcq',
      stem: 'Base-in prism inhibits (relaxes) convergence because it makes the images land:',
      options: ['temporally, so the eyes converge', 'nasally, so the eyes diverge', 'higher, so the eyes depress', 'centrally, with no change'],
      correct: 1,
      answer: 'Base-in bends light outward toward the temples, so images fall on the nasal retina and the eyes must diverge to fuse, relaxing convergence. This tests negative fusional vergence.',
    },
    {
      kind: 'mcq',
      stem: 'In the von Graefe phoria test, the dissociating prism classically placed before the right eye is:',
      options: ['6 base-up', '12 to 15 base-in', '6 base-out', '10 base-down'],
      correct: 1,
      answer: 'The classic von Graefe set-up uses a large dissociating prism of about 12 to 15 base-in before the right eye and 6 base-up before the left, splitting the images so a measuring prism can realign them.',
    },
    {
      kind: 'mcq',
      stem: 'Under the OEP A/B rule, the B-type tests differ from A-type tests in that they:',
      options: ['stop at blur or alignment', 'continue to the break and recovery points', 'use plus lenses only', 'are done at distance only'],
      correct: 1,
      answer: 'B-type tests (such as #14B) push past the alignment point to the break and recovery endpoints, so they are more invasive. A-type tests stop earlier at blur or alignment.',
    },
  ],
}

export default quiz
