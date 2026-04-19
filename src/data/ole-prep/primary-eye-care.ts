import { OlePrepData } from '@/lib/ole-prep-types'

const data: OlePrepData = {
  subject: 'Primary Eye Care',
  slug: 'primary-eye-care',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: '13 Factors Affecting Visual Acuity',
          device: '"I-S-N-R-L-D-L-T-P-A-R-C-A"',
          breakdown:
            'Intensity of illumination · Spectral nature of light · Nature of surrounding field · Region of retina stimulated · Lateral illumination and glare · Distance of test target · Lid pressure · Tear film and blinking · Pupil size · Presence of ametropia · Retinal mosaic · Clarity of optical media · Ability to interpret blurred image',
        },
        {
          kind: 'mnemonic',
          term: '4 Basic Steps of Subjective Refraction',
          device: '"F-D-S-B"',
          breakdown:
            'Find best sphere (Fogging/Defogging) → Determine cylindrical component (axis and power) → Sphere refinement (Duochrome) → Binocular Balancing/Equalization. Never skip steps — each builds on the last.',
        },
        {
          kind: 'mnemonic',
          term: 'Light Reflex Pathway (10 Steps)',
          device: '"Retina–ON–OC–OT–PN–EW–Pre–CG–Post–Sph"',
          breakdown:
            'Retina → Optic Nerve → Optic Chiasm → Optic Tract → Pretectal Nucleus → Edinger-Westphal Nucleus → Preganglionic Fiber → Ciliary Ganglion → Postganglionic Fiber → Sphincter Pupillae. Stops BEFORE lateral geniculate — that\'s why swinging flashlight test works.',
        },
        {
          kind: 'mnemonic',
          term: 'EOM Normal Recording',
          device: '"FESA" or "SAFE"',
          breakdown:
            'FESA: Full, Extensive, Smooth, Accurate. SAFE: Smooth, Accurate, Full, Extensive. Either is acceptable. Used when documenting normal ocular motility findings.',
        },
        {
          kind: 'mnemonic',
          term: 'Photopigments (Red-Green-Blue)',
          device: '"Erythrolabe = RED | Chlorolabe = GREEN | Cyanolabe = BLUE"',
          breakdown:
            'Erythro = red (erythrocyte/red blood cell). Chloro = green (chlorophyll). Cyano = blue (cyan). These are the three cone photopigments. Deuteranopia (missing chlorolabe) is the MOST COMMON colour defect.',
        },
        {
          kind: 'mnemonic',
          term: '7 Rules for Healthy Eyes',
          device: '"Clear Pupil, White Sclera, Lid Opens, Lashes Out, Kids Straight, See Normal"',
          breakdown:
            '1. Cornea clear · 2. Pupil black · 3. Sclera white · 4. Eyelids open and close properly · 5. Eyelashes point away · 6. Children\'s eyes appear straight · 7. Vision should be normal. Board exams love asking which rule applies to a given abnormality.',
        },
        {
          kind: 'mnemonic',
          term: 'Headache Location by Cause',
          device: '"Frontal = Hyperopia | Occipital = Old/Presb | Temporal = asTimatism | Parietal = Psychological"',
          breakdown:
            'Frontal: hyperopia, sinusitis, convergence excess. Occipital: presbyopia, high BP, convergence insufficiency, vertical imbalance. Temporal: astigmatism. Parietal: tension headache, psychological. The location is a clue — not a diagnosis.',
        },
      ],
    },
    {
      id: 'high-yield',
      title: 'High-Yield Facts',
      icon: '⭐',
      items: [
        {
          kind: 'fact',
          content:
            'Standard VA test distance: 20 ft / 6 m. Standard near VA: 16 inches / 40 cm. Standard illumination: 20 foot-candles (fc).',
          highlight: 'VA test distances',
        },
        {
          kind: 'fact',
          content:
            'Normal NPC: 6–10 cm. < 5 cm = convergence excess. > 10 cm = convergence insufficiency. Break = diplopia. Recovery = single vision again.',
          highlight: 'NPC values',
        },
        {
          kind: 'fact',
          content:
            'Expected phoria: Distance = 1 exo to 3 exo. Near = ortho to 6 exo. A TROPIA IS NEVER NORMAL.',
          highlight: 'Phoria norms',
        },
        {
          kind: 'fact',
          content:
            'Hirschberg: normal corneal reflex is 0.5mm NASAL to pupil centre. Physiologic angle kappa = up to 5° (10Δ). Extremely nasal = exo-deviation. Temporal = eso-deviation.',
          highlight: 'Hirschberg interpretation',
        },
        {
          kind: 'fact',
          content:
            'Ishihara: test at 75cm, 3–5 seconds per plate, monocular. <4 incorrect = normal. ≥5 incorrect = defective red-green. CANNOT detect tritan (blue) defects.',
          highlight: 'Ishihara protocol',
        },
        {
          kind: 'fact',
          content:
            'Duochrome: Green = shorter wavelength = focuses IN FRONT of retina. Red = longer = focuses BEHIND. Goal = equal clarity. If no equality → leave GREEN CLEARER (safer = more plus).',
          highlight: 'Duochrome principle',
        },
        {
          kind: 'fact',
          content:
            'Van Herick: Grade 0 = CLOSED angle = acute glaucoma emergency. Grade 1 = at risk for closure. Done at 60° angle on slit-lamp.',
          highlight: 'Van Herick grading',
        },
        {
          kind: 'fact',
          content:
            'Direct ophthalmoscopy: 15x magnification, erect (virtual) image, 8° FOV, easy technique. Indirect: 2–3x, inverted (real), 40° FOV, needs mydriasis, stereopsis present.',
          highlight: 'Direct vs Indirect',
        },
        {
          kind: 'fact',
          content:
            'Retinoscopy: WITH motion = hyperopia/emmet/small myope → add PLUS. AGAINST motion = myopia > working distance → add MINUS. Working distance lens at 50cm = −2.00D.',
          highlight: 'Retinoscopy movements',
        },
        {
          kind: 'fact',
          content:
            'Pinhole disc: 0.75mm for acuity BETTER than 20/200. 1.0mm for acuity POORER than 20/200. Improvement with pinhole = refractive cause. No improvement = non-refractive cause.',
          highlight: 'Pinhole rules',
        },
        {
          kind: 'fact',
          content:
            'Marcus Gunn Pupil (RAPD): paradoxical DILATION of impaired eye when light swung to it. Caused by optic neuritis, optic neuropathy, glaucoma, retinal detachment.',
          highlight: 'Marcus Gunn / RAPD',
        },
        {
          kind: 'fact',
          content:
            'Normal fundus A:V ratio = 2:3 (Vein:Artery = 3:2). Fovea appears DARKER than surrounding retina. Optic disc diameter: 1.5–1.7mm. Disc color: red-yellow.',
          highlight: 'Normal fundus values',
        },
      ],
    },
    {
      id: 'traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'In practical exams, what is the FIRST thing to do before taking case history?',
          wrong: 'Start the case history interview immediately',
          correct: 'Get the patient\'s PUPIL DIAMETER first',
          why: 'Pupil diameter should be recorded BEFORE beginning case history. This is a frequently tested board exam clinical pearl from Dr. Ferrer.',
        },
        {
          kind: 'trap',
          question: 'High blood sugar → patient becomes MORE or LESS myopic?',
          wrong: 'More hyperopic (lens relaxes)',
          correct: 'MORE MYOPIC — high blood sugar inflames the lens, pushing focus IN FRONT of retina',
          why: 'High glucose → lens swells/inflames → refracting power increases → focus shifts anterior to retina → myopia increases. Low blood sugar = opposite: MORE hyperopic, LESS myopic.',
        },
        {
          kind: 'trap',
          question: 'If pinhole DOES NOT improve or WORSENS vision — what does this mean?',
          wrong: 'The patient needs a stronger prescription',
          correct: 'Vision is FULLY CORRECTED or the cause is NON-REFRACTIVE',
          why: 'Pinhole improves vision only if there is uncorrected refractive error. No improvement = the optics are already at their best, or the problem is pathological (e.g., macular disease, optic nerve).',
        },
        {
          kind: 'trap',
          question: 'Duochrome endpoint — if equal clarity CANNOT be achieved, which side should be left clearer?',
          wrong: 'Red clearer (more minus)',
          correct: 'GREEN CLEARER — indicates the patient is on the MORE PLUS side (safer endpoint)',
          why: 'Green = shorter wavelength = in front of retina = more plus / less minus. Leaving green clearer avoids over-minusing the patient. "If in doubt, leave green out" is the safer endpoint.',
        },
        {
          kind: 'trap',
          question: 'Hirschberg: corneal reflex appears on TEMPORAL side — which deviation is this?',
          wrong: 'Exo-deviation (eye turned out)',
          correct: 'ESO-DEVIATION — the eye is turned IN (nasally)',
          why: 'Think of it inversely: if the reflex is temporal, the light from the nasal side hit the pupil centre — the eye must be rotated inward (eso). Extremely nasal reflex = exo-deviation.',
        },
        {
          kind: 'trap',
          question: 'Ishihara plates 14–15 (Hidden Design plates): who sees the hidden figure?',
          wrong: 'Normal trichromats see it',
          correct: 'Colour-DEFICIENT patients MAY see the hidden figure; NORMALS CANNOT',
          why: 'These plates are designed so the image is invisible to normal trichromats but detectable by those with a colour deficiency. The opposite of transformation plates.',
        },
        {
          kind: 'trap',
          question: 'What does "no doubling during NPC test" indicate?',
          wrong: 'Normal NPC — no convergence problem',
          correct: '"Wandering attention" or SUPPRESSION — NOT a normal NPC finding',
          why: 'Normally, as the target approaches, the patient should eventually report diplopia (break point). If they never see double, they may be suppressing one eye rather than truly fusing. This is NOT a sign of strong convergence.',
        },
        {
          kind: 'trap',
          question: 'Van Herick Grade 0 — what is the clinical emergency?',
          wrong: 'Narrow angle — monitor and refer if needed',
          correct: 'CLOSED ANGLE = ACUTE ANGLE CLOSURE GLAUCOMA — immediate emergency referral',
          why: 'Grade 0 = no shadow, cornea "sits" on iris = angle is fully closed. This is an ocular emergency with sudden IOP spike. Grade 1 = at high risk but not yet closed.',
        },
      ],
    },
    {
      id: 'recall',
      title: 'Active Recall',
      icon: '🎯',
      items: [
        {
          kind: 'recall',
          prompt: 'Normal NPC range:',
          answer: '6–10 cm (accommodative target)',
        },
        {
          kind: 'recall',
          prompt: 'Duochrome: green side = shorter/longer wavelength?',
          answer: 'Shorter wavelength — focuses IN FRONT of retina',
        },
        {
          kind: 'recall',
          prompt: 'Retinoscopy: WITH motion → add which lens?',
          answer: 'PLUS lens (hyperopia/emmetropia/small myopia)',
        },
        {
          kind: 'recall',
          prompt: 'Pinhole: 0.75mm disc is for acuity of?',
          answer: 'BETTER than 20/200',
        },
        {
          kind: 'recall',
          prompt: 'Corneal reflex appears temporal → what deviation?',
          answer: 'ESO-deviation (eye turned inward)',
        },
        {
          kind: 'recall',
          prompt: 'Ishihara: <4 incorrect = ?',
          answer: 'Normal colour vision',
        },
        {
          kind: 'recall',
          prompt: 'Van Herick Grade 0 = ?',
          answer: 'CLOSED angle = acute angle closure glaucoma emergency',
        },
        {
          kind: 'recall',
          prompt: 'Marcus Gunn Pupil (RAPD) = paradoxical _____ of the impaired eye',
          answer: 'DILATION when light is swung to it (afferent defect)',
        },
        {
          kind: 'recall',
          prompt: 'Direct ophthalmoscopy magnification vs indirect:',
          answer: 'Direct = 15x. Indirect = 2–3x binocular',
        },
        {
          kind: 'recall',
          prompt: 'Standard dissociation setup for phoria tests:',
          answer: 'OD: 12–15Δ Base-In | OS: 6Δ Base-Up',
        },
      ],
    },
  ],
}

export default data
