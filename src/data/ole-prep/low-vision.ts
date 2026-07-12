import { OlePrepData } from '@/lib/ole-prep-types'

export const lowVisionData: OlePrepData = {
  subject: 'Low Vision',
  slug: 'low-vision',
  sections: [
    {
      id: 'lv-power-table',
      title: 'Low Vision Power & Magnification Table',
      icon: '🔍',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'LOW POWER LENS TABLE',
          content: '+2.50D = 1× → reads 2/400 | +5.00D = 2× → 2/200 | +10.00D = 4× → 2/100 | +20.00D = 8× → 2/50 | +40.00D = 16× → 2/25 (≈ 20/20)',
        },
        {
          kind: 'formula' as const,
          title: 'Lens Power to Magnification',
          formula: 'M = D / 4     (25 cm reference)',
          variables: [
            { symbol: 'M', definition: 'magnification' },
            { symbol: 'D', definition: 'lens power in diopters' },
          ],
          notes: '1× = +4.00D at 25 cm. Divide add power by 4 to get magnification at 25 cm working distance.',
        },
        {
          kind: 'fact' as const,
          highlight: 'REFERENCE DISTANCES',
          content: '200 mm = 1× | 100 mm = 2× | 50 mm = 4× | 25 mm = 8×. Halving the distance doubles the magnification.',
        },
      ],
    },
    {
      id: 'lv-magnification-types',
      title: 'Types of Magnification',
      icon: '🔎',
      items: [
        {
          kind: 'formula' as const,
          title: 'Relative Size Magnification (RSM)',
          formula: 'RSM = h₁ / h₂',
          variables: [
            { symbol: 'h₁', definition: 'enlarged (new) size of object' },
            { symbol: 'h₂', definition: 'original size of object' },
          ],
          notes: 'Physically enlarging the object — large-print books, bold fonts.',
        },
        {
          kind: 'formula' as const,
          title: 'Relative Distance Magnification (RDM)',
          formula: 'RDM = d₁ / d₂',
          variables: [
            { symbol: 'd₁', definition: 'original (reference) working distance' },
            { symbol: 'd₂', definition: 'new (reduced) working distance' },
          ],
          notes: 'Moving the object closer. Halving the distance = 2× magnification.',
        },
        {
          kind: 'formula' as const,
          title: 'Predicting Reading Add for LV',
          formula: 'Add (D) = 100 / working distance (cm)',
          notes: 'Example: reads at 10 cm → Add = 100 ÷ 10 = +10.00D. Working distance and add are reciprocally related.',
        },
        {
          kind: 'formula' as const,
          title: 'Reciprocal of Vision (Required Magnification)',
          formula: 'M = reference acuity distance\n    ─────────────────────────\n    patient acuity distance',
          notes: 'Example: Patient = 2/200, target = 2/20. M = 200 ÷ 20 = 10×.',
        },
        {
          kind: 'recall' as const,
          prompt: 'A patient\'s best corrected VA is 2/100. What magnification and add power do they need to achieve 2/20 target?',
          answer: 'Magnification: M = 100 ÷ 20 = 5×. Add power: 5 × 4 = +20.00D. Working distance = 100 ÷ 20 = 5 cm.',
        },
      ],
    },
    {
      id: 'lv-telescope-formulas',
      title: 'Telescope & Angular Magnification',
      icon: '🔭',
      items: [
        {
          kind: 'formula' as const,
          title: 'Telescope Magnification',
          formula: 'M = Fo / Fe',
          variables: [
            { symbol: 'Fo', definition: 'focal length of objective (longer, weaker)' },
            { symbol: 'Fe', definition: 'focal length of eyepiece (shorter, stronger)' },
          ],
          diagram: `<svg viewBox="0 0 280 100" width="280" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="8" height="30" fill="#6366f1" rx="2"/><text x="24" y="82" text-anchor="middle" font-size="8" fill="#4f46e5">Obj</text><rect x="230" y="30" width="6" height="40" fill="#10b981" rx="2"/><text x="233" y="82" text-anchor="middle" font-size="8" fill="#059669">Eye</text><line x1="0" y1="50" x2="28" y2="50" stroke="#f59e0b" stroke-width="1.5"/><circle cx="100" cy="50" r="3" fill="#f59e0b"/><text x="100" y="43" text-anchor="middle" font-size="8" fill="#d97706">F shared</text><line x1="28" y1="35" x2="100" y2="50" stroke="#f59e0b" stroke-width="1.5"/><line x1="28" y1="65" x2="100" y2="50" stroke="#f59e0b" stroke-width="1.5"/><line x1="100" y1="50" x2="230" y2="30" stroke="#6366f1" stroke-width="1.5"/><line x1="100" y1="50" x2="230" y2="70" stroke="#6366f1" stroke-width="1.5"/><text x="60" y="68" text-anchor="middle" font-size="8" fill="#4f46e5">Fo</text><text x="165" y="68" text-anchor="middle" font-size="8" fill="#059669">Fe</text><text x="140" y="95" text-anchor="middle" font-size="8" fill="#6b7280">M = Fo÷Fe  |  L = Fo+Fe</text></svg>`,
        },
        {
          kind: 'formula' as const,
          title: 'Length of Telescope',
          formula: 'L = Fo + Fe',
          notes: 'Keplerian (converging eyepiece): L = Fo + Fe, inverted image, wider field.\nGalilean (diverging eyepiece): L = Fo − Fe, erect image, narrower field, used in LV spectacles.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Galilean vs Keplerian telescope — image orientation, tube length, clinical use?',
          answer: 'Galilean: diverging eyepiece → erect image, L = Fo − Fe (shorter tube), narrower field; used in spectacle-mounted LV (lightweight). Keplerian: converging eyepiece → inverted image (needs erecting prism), L = Fo + Fe (longer), wider field, better quality; used in binoculars.',
        },
        {
          kind: 'trap' as const,
          question: 'A telescope with objective 100 mm and eyepiece 25 mm has magnification of 0.25×. True or False?',
          wrong: 'True — Fe ÷ Fo = 25 ÷ 100 = 0.25×',
          correct: 'False — M = Fo ÷ Fe = 100 ÷ 25 = 4×. Objective (Fo) is always the numerator.',
          why: 'M = Fo/Fe not reversed. Reversing gives a fraction <1 = minification, not magnification.',
        },
      ],
    },
    {
      id: 'lv-board-facts',
      title: 'High-Yield Facts & Board Traps',
      icon: '⚡',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'THE +4.00D REFERENCE RULE',
          content: 'Every +4.00D at 25 cm = 1× magnification. +8D = 2×, +12D = 3×, +16D = 4×. Foundation of the LV power table and reading add formula.',
        },
        {
          kind: 'fact' as const,
          highlight: 'WORKING DISTANCE = FOCAL LENGTH',
          content: 'Working distance (m) = 1 ÷ Add power (D). +10D → WD = 0.1 m = 10 cm. Object must be at this distance for maximum clarity.',
        },
        {
          kind: 'trap' as const,
          question: 'A higher add power prescription is always better for a low vision patient because it provides more magnification. True or False?',
          wrong: 'True — more power = more magnification = easier reading',
          correct: 'False — higher add = shorter required working distance, causing postural strain. Always prescribe the MINIMUM add that meets the patient\'s functional goal.',
          why: '+20D requires material at 5 cm — very uncomfortable for extended reading. Excess magnification reduces practical usability. Minimum add for maximum function is the clinical standard.',
        },
        {
          kind: 'recall' as const,
          prompt: 'List the 3 types of magnification in low vision and what each modifies.',
          answer: 'Relative Size (RSM = h₁/h₂): makes object physically larger. Relative Distance (RDM = d₁/d₂): brings object closer. Angular/Optical Magnification: uses lenses/telescopes to increase angular subtense — the most common clinical type.',
        },
      ],
    },
    {
      id: 'lv-definitions',
      title: 'Definitions & Classification',
      icon: '📊',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'LEGAL BLINDNESS',
          content: 'VA 20/200 (6/60) or worse in the BETTER eye with best correction, OR a visual field ≤20° in the widest meridian. Either one qualifies — acuity OR field.',
        },
        {
          kind: 'trap' as const,
          question: 'WHO blindness is defined by a visual field narrower than which value?',
          wrong: 'Under 20° from fixation',
          correct: 'Under 10° from fixation. (WHO low vision uses under 20°; legal blindness uses 20° or less.)',
          why: 'Three different field cutoffs: WHO blindness <10°, WHO low vision <20°, legal blindness ≤20°. VA 20/200 is the shared acuity threshold for WHO blindness and legal blindness.',
        },
        {
          kind: 'trap' as const,
          question: 'What is the leading cause of visual IMPAIRMENT worldwide?',
          wrong: 'Cataract',
          correct: 'Uncorrected refractive error. (Cataract leads BLINDNESS in low- and middle-income countries.)',
          why: 'Impairment vs blindness differ: uncorrected refractive error leads impairment; cataract leads blindness. Both are largely avoidable.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Define functional low vision, and habilitation vs rehabilitation.',
          answer: 'Functional low vision = impairment not fully corrected by conventional specs, contacts, or medical/surgical treatment, that restricts everyday life. Habilitation = congenital loss (build skills never had); rehabilitation = acquired loss (restore lost skills).',
        },
      ],
    },
    {
      id: 'lv-mnemonics',
      title: 'Mnemonics & Quick Rules',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic' as const,
          term: 'Starting reading add',
          device: 'Kestenbaum — add = reciprocal of the Snellen fraction',
          breakdown: 'Add (D) = denominator ÷ numerator of the distance VA. 20/200 → 200/20 = +10 D; 20/100 → +5 D. It is a STARTING add — verify with a trial frame.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'Legal blindness threshold',
          device: '"20/200 or 20°"',
          breakdown: 'Either the acuity (20/200 or worse, better eye, best-corrected) OR the field (≤20° widest meridian) triggers it — whichever fails first.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'X-notation depends on the reference distance',
          device: 'Spectacle ÷2.5 (40 cm) · Hand/Stand ÷4 (25 cm)',
          breakdown: 'The same +10 D lens is 4× at the 40 cm reference (D/2.5) but 2.5× at the 25 cm reference (D/4). Always convert to DIOPTRES before comparing devices, or the "×" numbers mislead you.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'Goal acuity is bigger than threshold',
          device: 'Spot 1, Fluent 3, Max 5 (lines of reserve)',
          breakdown: 'Reading needs print larger than the smallest resolvable letter: 1 line of reserve to spot a word, 3 lines for fluent reading, 5 for fast fluent. That reserve is why you magnify beyond threshold.',
        },
      ],
    },
    {
      id: 'lv-devices-contrast-field',
      title: 'Devices, Contrast & Visual Field',
      icon: '🔦',
      items: [
        {
          kind: 'trap' as const,
          question: 'A patient with 20/20 high-contrast acuity cannot have a functional vision problem. True or False?',
          wrong: 'True — 20/20 is normal vision',
          correct: 'False — poor CONTRAST sensitivity causes real handicap (night driving, recognising faces, low-contrast text) despite 20/20 acuity.',
          why: 'Acuity charts are high-contrast; the real world is mostly grey. Early cataract and refractive error drop contrast at high spatial frequencies first. Pelli-Robson measures contrast sensitivity.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Match the low-vision device to the task.',
          answer: 'Spectacle magnifier: hands-free, wide field, but fixed very close working distance. Hand magnifier: variable WD, good for spot reading, needs steady hands. Stand magnifier: fixed lens-to-object distance — good for tremor/Parkinson. CCTV: high magnification + contrast reversal, best for sustained reading. Telescope: distance tasks.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Characteristic visual-field defect for macular disease, retinitis pigmentosa, and glaucoma?',
          answer: 'Macular disease / AMD → central scotoma (central vision loss). Retinitis pigmentosa → peripheral constriction (tunnel vision). Glaucoma → arcuate scotoma. Amsler grid detects metamorphopsia (macular distortion).',
        },
      ],
    },
  ],
}
