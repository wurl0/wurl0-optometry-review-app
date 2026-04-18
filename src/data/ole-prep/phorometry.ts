import { OlePrepData } from '@/lib/ole-prep-types'

const data: OlePrepData = {
  subject: 'Phorometry (21 Steps)',
  slug: 'phorometry',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'The One Probe Body Rule',
          device: '"INHIBIT = object AWAY = BIGGER | STIMULATE = object CLOSER = SMALLER"',
          breakdown: 'Works for both lenses and prisms. Convex (+) and Base-In both INHIBIT → bigger. Concave (−) and Base-Out both STIMULATE → smaller. Remember direction, size follows automatically.',
        },
        {
          kind: 'mnemonic',
          term: 'The A/B Rule',
          device: '"A = Almost done (stops at Alignment or blur) | B = Beyond blur (goes to Break + Recovery)"',
          breakdown: 'A tests = less invasive, stop early. B tests = push the system past blur to total breakdown. 16A (blur) vs 16B (break+recovery). 17A (blur) vs 17B (break+recovery).',
        },
        {
          kind: 'mnemonic',
          term: 'BO vs BI at Near',
          device: '"BO = Bulldog pushes IN = Positive (PRC, PFR) | BI = Bulldog pulls OUT = Negative (NRC, NFR)"',
          breakdown: 'BO prisms = stimulate convergence = Positive tests → #16A (PRC) and #16B (PFR). BI prisms = inhibit convergence = Negative tests → #17A (NRC) and #17B (NFR).',
        },
        {
          kind: 'mnemonic',
          term: 'Habitual vs Induced',
          device: '"#3 and #13A are HAbituals (HAs) | #8 and #13B are INduced (INs after refraction)"',
          breakdown: '#3 = Habitual phoria at far. #13A = Habitual phoria at near. #8 = Induced phoria at far (uses Test #7 result). #13B = Induced phoria at near (uses Gross #14A). HA = no refraction change; IN = refraction applied.',
        },
        {
          kind: 'mnemonic',
          term: 'PRA vs NRA Lens Direction',
          device: '"PRA is Pushy with Minus | NRA is Nice with Plus"',
          breakdown: 'PRA (#20) = MINUS lenses = stimulates (pushes) accommodation. NRA (#21) = PLUS lenses = inhibits (relaxes) accommodation. Both endpoints = blur out.',
        },
        {
          kind: 'mnemonic',
          term: '#14A vs #14B',
          device: '"14A has prisms Aboard | 14B is Bare (no prisms)"',
          breakdown: '#14A (Dissociated CC) = prisms present (3△BD OD + 3△BU OS). #14B (Binocular CC) = no prisms, both eyes fused. Same cross-cyl lens (−0.50D, red dot at 90°). Same endpoint: equality at highest plus.',
        },
        {
          kind: 'mnemonic',
          term: 'Near Reflex Triad',
          device: '"ACM fired together: Accommodation · Convergence · Miosis"',
          breakdown: 'All three triggered simultaneously via CN III (Edinger-Westphal nucleus). Peristriate area 19 → EW → ciliary m. (accommodation) + medial rectus (convergence) + sphincter pupillae (miosis).',
        },
      ],
    },
    {
      id: 'high-yield',
      title: 'High-Yield Facts',
      icon: '⭐',
      items: [
        { kind: 'fact', content: 'At 16" (40cm): stimulus to accommodation = 2.50 D. Stimulus to convergence = ~15 prism diopters (at 64mm PD).', highlight: 'Near stimulus values' },
        { kind: 'fact', content: 'Buffer for CONVERGENCE pattern = Exophoria. Buffer for ACCOMMODATION pattern = Hyperopia.', highlight: 'Two buffers' },
        { kind: 'fact', content: 'BO prisms cause BLUR before BREAK because convergence drives accommodation (near triad). Accommodation exhausts first.', highlight: 'BO = blur before break' },
        { kind: 'fact', content: 'Von Graefe method: dissociating prism = vertical (to measure lateral phoria). Measuring prism = lateral.', highlight: 'Von Graefe phoria' },
        { kind: 'fact', content: '#19 (AA): Non-presbyope = add MINUS until blur. Presbyope = add PLUS until first readable. Directions are OPPOSITE.', highlight: '#19 opposite directions' },
        { kind: 'fact', content: 'All far tests (#3–#12) use 20 ft / 6M and far PD. All near tests (#13A–#21) use 16" / 40cm and near PD.', highlight: 'Distance grouping' },
        { kind: 'fact', content: 'Blur endpoint = accommodation exhausted (lens cannot increase curvature further). Break endpoint = vergence exhausted (diplopia).', highlight: 'Blur vs Break' },
        { kind: 'fact', content: '#16A (PRC) stops at BLUR ONLY. Students who continue to break are measuring #16B (PFR) instead.', highlight: 'PRC = blur only' },
      ],
    },
    {
      id: 'traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'Test #3 and test #8 — what is the key difference?',
          wrong: 'Both use Test #7 (subjective refraction) lenses',
          correct: '#3 uses HABITUAL correction. #8 uses TEST #7 result. This is the most commonly tested distinction.',
          why: '#3 baseline before any refraction is applied. #8 shows how applying the refraction CHANGES the phoria. Same prism setup, different lenses.',
        },
        {
          kind: 'trap',
          question: 'In test #14A (Dissociated CC), are prisms present or absent?',
          wrong: 'Absent (students confuse 14A with 14B)',
          correct: 'Present — OD 3△ Base-Down + OS 3△ Base-Up',
          why: '#14A = Dissociated = prisms split the images vertically. #14B = Binocular = no prisms, both eyes fused together.',
        },
        {
          kind: 'trap',
          question: 'Base-In prism: does the target appear bigger or smaller?',
          wrong: 'Smaller (confusing with Base-Out)',
          correct: 'BIGGER — BI inhibits convergence → object perceived as farther away → appears larger',
          why: 'BO stimulates convergence → closer → smaller. BI inhibits → farther → bigger. The confusion comes from thinking prism always makes things bigger.',
        },
        {
          kind: 'trap',
          question: 'In test #19 (AA), a PRESBYOPE should be given which lenses?',
          wrong: 'Minus lenses (same as non-presbyope)',
          correct: 'PLUS lenses — add plus until the first readable (endpoint = 1st clear)',
          why: 'Non-presbyope has residual accommodation → stress it with minus until blur. Presbyope has little/no accommodation → reduce demand with plus until they can first see. Completely opposite approach.',
        },
      ],
    },
    {
      id: 'recall',
      title: 'Active Recall',
      icon: '🎯',
      items: [
        { kind: 'recall', prompt: 'Convex (+) lens effect on accommodation and target size:', answer: 'INHIBITS accommodation → target appears BIGGER (farther away)' },
        { kind: 'recall', prompt: 'Base-Out prism effect on convergence and target size:', answer: 'STIMULATES convergence → target appears SMALLER (closer)' },
        { kind: 'recall', prompt: '#16A (PRC) endpoint:', answer: 'BLUR only — stop before break' },
        { kind: 'recall', prompt: '#16B (PFR) endpoint:', answer: 'Break + Recovery' },
        { kind: 'recall', prompt: '#20 PRA uses which lenses?', answer: 'MINUS lenses (stimulates accommodation)' },
        { kind: 'recall', prompt: '#21 NRA uses which lenses?', answer: 'PLUS lenses (inhibits accommodation)' },
        { kind: 'recall', prompt: 'Tests that use BO prisms at near:', answer: '#16A (PRC) and #16B (PFR)' },
        { kind: 'recall', prompt: 'Stimulus to accommodation at 16" (40cm):', answer: '2.50 D' },
      ],
    },
  ],
}

export default data
