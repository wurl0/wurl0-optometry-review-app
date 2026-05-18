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
    {
      id: 'arc-suppression-sensory',
      title: 'ARC, Suppression & Sensory Adaptation',
      icon: '🔀',
      items: [
        {
          kind: 'mnemonic',
          term: 'Types of Retinal Correspondence',
          device: '"NRC = Normal fovea-to-fovea. ARC = Abnormal fovea-to-peripheral."',
          breakdown: 'NRC: right fovea shares visual direction with left fovea. ARC: fovea of one eye shares direction with extrafoveal point of the other. Occurs in small-angle squints as the brain attempts to regain binocular advantage.',
        },
        {
          kind: 'mnemonic',
          term: 'HARC vs UARC vs NRC',
          device: '"Harmonious = Hide the angle. Unharmonious = Unequal angles."',
          breakdown: 'HARC (Harmonious ARC): angle of anomaly equals angle of deviation — patient appears single despite squint. UARC (Unharmonious ARC): angle of anomaly does NOT equal angle of deviation — diplopia still present.',
        },
        {
          kind: 'fact',
          content: 'Suppression is foveal (central) to eliminate confusion, and extrafoveal (peripheral) to avoid diplopia. These are two separate suppression mechanisms.',
          highlight: 'Foveal suppression = confusion; Peripheral = diplopia',
        },
        {
          kind: 'fact',
          content: 'Facultative suppression: occurs only under binocular conditions. VA is normal monocularly. Obligatory suppression: persists even monocularly — results in amblyopia.',
          highlight: 'Obligatory suppression = amblyopia risk',
        },
        {
          kind: 'trap',
          question: 'A patient with strabismus sees a single image. Is this NRC or HARC?',
          wrong: 'NRC — single image means normal correspondence',
          correct: 'HARC — if cover test shows a shift but the patient reports single vision binocularly, the brain adapted via Harmonious ARC, not true NRC.',
          why: 'Bagolini test or afterimage test is needed to distinguish. HARC produces single vision despite manifest squint. Always confirm with a sensory test before concluding NRC.',
        },
        {
          kind: 'trap',
          question: 'Which test is the GOLD STANDARD for retinal correspondence status?',
          wrong: 'Bagolini Striated Glass',
          correct: 'Worth 4 Dot Test',
          why: 'Bagolini is useful for identifying ARC types but is not confirmatory. Worth 4 Dot is the gold standard for confirming retinal correspondence status.',
        },
        {
          kind: 'recall',
          prompt: 'In Bagolini Striated Glass test, crossing of lines at the center with a cover test shift indicates:',
          answer: 'Harmonious ARC (HARC)',
        },
        {
          kind: 'recall',
          prompt: 'In the Worth 4 Dot test, a patient sees 5 dots. What does this indicate?',
          answer: 'Diplopia — uncrossed diplopia with esotropia (red right of green), crossed diplopia with exotropia (red left of green)',
        },
        {
          kind: 'recall',
          prompt: 'Retinal rivalry occurs when:',
          answer: 'Dissimilar contours stimulate corresponding retinal areas — fusion is impossible and one image is suppressed alternately',
        },
      ],
    },
    {
      id: 'amblyopia-classification-management',
      title: 'Amblyopia: Classification & Management',
      icon: '👁️',
      items: [
        {
          kind: 'mnemonic',
          term: 'Amblyopia Types: Organic vs Functional',
          device: '"Organic = Obstruction (structural). Functional = Functional input failure."',
          breakdown: 'Organic: deprivation (cataract, ptosis, corneal opacity) or anatomical defects. Functional: strabismic (brain suppresses deviated eye) or refractive/anisometropic (blur from unequal refractive errors).',
        },
        {
          kind: 'mnemonic',
          term: 'Amblyopia Depth Classification',
          device: '"Mild = 20/30. Shallow = 20/40. Deep = 20/50 or worse."',
          breakdown: 'Mild: BCVA 20/25-20/30. Shallow: BCVA 20/40. Deep: BCVA 20/50 or worse. Amblyopia is NOT correctable by optical means alone.',
        },
        {
          kind: 'fact',
          content: "Amblyopia is a LAZY BRAIN, not a lazy eye. It is a neurodevelopmental visual disorder of the brain's ability to use both eyes as a team — not a structural eye problem.",
          highlight: 'Lazy brain, not lazy eye',
        },
        {
          kind: 'fact',
          content: 'Most common cause of amblyopia = unmanaged strabismus. Second = uncorrected refractive error (especially anisometropia). Third = visual deprivation (e.g., congenital cataract).',
          highlight: 'Strabismus = most common cause',
        },
        {
          kind: 'fact',
          content: 'Conventional occlusion = patch the GOOD eye, stimulate the bad eye. Inverse occlusion = patch the bad eye briefly, stimulate the good eye. Risk of conventional: rebound amblyopia in the good eye if overdone.',
          highlight: 'Conventional vs Inverse occlusion',
        },
        {
          kind: 'trap',
          question: 'A child with high anisometropia cannot tolerate full correction on the amblyopic eye. What should you do?',
          wrong: 'Reduce the prescription until comfortable',
          correct: 'Gradually adapt the patient to the correct prescription. Insufficient correction = insufficient retinal stimulation = inadequate amblyopia treatment.',
          why: 'The goal is to present a clear retinal image to the amblyopic eye. Reducing prescription for comfort at the cost of clarity defeats the entire treatment goal.',
        },
        {
          kind: 'trap',
          question: 'What is the key difference between Optometric Vision Therapy (OVT) and orthoptics?',
          wrong: 'They are the same — both strengthen the extraocular muscles',
          correct: 'OVT targets neurosensory and neuromuscular coordination via neuroplasticity. Orthoptics focuses primarily on strengthening extraocular muscles.',
          why: 'OVT involves eye-brain rewiring through neuroplasticity, not just muscle strengthening. This distinction frequently appears on board exams.',
        },
        {
          kind: 'recall',
          prompt: 'Amblyopia prevalence globally (WHO 2015) is:',
          answer: '1-5% globally; 4x more frequent in premature children; 6x more frequent in children with developmental delays',
        },
        {
          kind: 'recall',
          prompt: 'The two main clinical goals in amblyopia management are:',
          answer: '(1) Present a clear retinal image to the amblyopic eye; (2) Make the child use the amblyopic eye',
        },
      ],
    },
    {
      id: 'vergence-types-aca-ratio',
      title: 'Vergence Types, AC/A Ratio & Convergence Insufficiency',
      icon: '⚖️',
      items: [
        {
          kind: 'mnemonic',
          term: 'Four Components of Vergence',
          device: '"TAFP — Tonic, Accommodative, Fusional, Proximal"',
          breakdown: 'Tonic vergence: baseline tone of EOM at rest. Accommodative vergence: driven by accommodation (AC/A relationship). Fusional vergence: response to retinal disparity to maintain binocularity. Proximal vergence: triggered by awareness of nearness of an object.',
        },
        {
          kind: 'mnemonic',
          term: 'AC/A Ratio Methods',
          device: '"Gradient uses LENSES. Heterophoria uses DISTANCE."',
          breakdown: 'Gradient Method: measure phoria, then add +1.00 D lens and remeasure at SAME distance. AC/A = change in phoria per diopter. Heterophoria Method: measure phoria at distance AND near. AC/A = IPD + (Near phoria - Far phoria) / accommodation demand.',
        },
        {
          kind: 'fact',
          content: 'EXCESS conditions = HIGH AC/A ratio. INSUFFICIENCY conditions = LOW AC/A ratio. Convergence Excess and Divergence Excess have high AC/A. Convergence Insufficiency and Divergence Insufficiency have low AC/A.',
          highlight: 'Excess = High AC/A; Insufficiency = Low AC/A',
        },
        {
          kind: 'fact',
          content: 'Convergence Insufficiency (CI) diagnosis criteria: Exophoria greater at near than distance, receded NPC (>10 cm), reduced positive fusional convergence (PFC) at near, deficient NRA.',
          highlight: 'CI = exo at near > distance + NPC >10 cm',
        },
        {
          kind: 'fact',
          content: 'NPC normal range: 6-10 cm. NPC >10 cm = convergence insufficiency. NPC <6-8 cm = convergence excess. NPC is NOT a confirmatory test — it is supportive evidence.',
          highlight: 'NPC >10 cm = CI; <8 cm = excess',
        },
        {
          kind: 'fact',
          content: 'Divergence Excess: exo at distance GREATER than at near (by at least 10 PD). Characteristic sign: closing one eye in bright sunlight. Normal NPC, normal near stereopsis.',
          highlight: 'Divergence Excess = exo far > near + sun squinting',
        },
        {
          kind: 'trap',
          question: 'A patient has esophoria greater at DISTANCE than at near. What is the diagnosis?',
          wrong: 'Convergence excess',
          correct: 'Divergence insufficiency',
          why: 'Convergence excess = eso GREATER at NEAR. Divergence insufficiency = eso GREATER at DISTANCE. These are commonly swapped on boards.',
        },
        {
          kind: 'recall',
          prompt: 'Basic (mixed) exophoria is defined as:',
          answer: 'Exodeviation of similar magnitude at distance AND near (exo at distance = exo at near)',
        },
        {
          kind: 'recall',
          prompt: 'In convergence excess, the near deviation is at least how many prism diopters more esophoric than distance?',
          answer: 'At least 3 prism diopters more esophoric at near than distance',
        },
      ],
    },
    {
      id: 'cover-test-strabismus-classification',
      title: 'Cover Test Interpretation & Strabismus Classification',
      icon: '📋',
      items: [
        {
          kind: 'mnemonic',
          term: 'Cover Test Logic: Direct vs Indirect',
          device: '"Direct = observe the eye you DID NOT cover. Indirect = observe the COVERED eye when uncovered."',
          breakdown: 'Direct cover test: occlude the right eye, observe LEFT eye movement — detects tropia in the LEFT eye. Indirect: occlude the left eye, observe RIGHT eye — detects tropia in the RIGHT eye. The uncover (alternating cover) reveals phoria.',
        },
        {
          kind: 'mnemonic',
          term: 'Prism Direction for Strabismus Types',
          device: '"Eso = Base Out. Exo = Base In. Hyper = Base Down. Hypo = Base Up."',
          breakdown: 'To neutralize: Esotropia (eye turns in) needs Base Out prism. Exotropia (eye turns out) needs Base In prism. Hypertropia (eye turns up) needs Base Down. Hypotropia needs Base Up.',
        },
        {
          kind: 'fact',
          content: 'Concomitant strabismus: angle of deviation is the SAME in all positions of gaze. Incomitant strabismus: angle of deviation DIFFERS depending on gaze direction. Incomitant = likely neurological cause.',
          highlight: 'Concomitant = same angle everywhere',
        },
        {
          kind: 'fact',
          content: 'Phoria = LATENT deviation, revealed only by dissociation (cover test). Tropia = MANIFEST deviation, present without dissociation. Corneal light reflex test detects tropia only — phoria requires cover test dissociation.',
          highlight: 'Phoria = latent; Tropia = manifest',
        },
        {
          kind: 'fact',
          content: 'Hirschberg test estimation: At pupillary margin = 15 degrees (30 PD). Between pupillary margin and limbus = 30 degrees (60 PD). At limbus = 45 degrees (90 PD).',
          highlight: 'Hirschberg landmarks: 15/30/45 degrees',
        },
        {
          kind: 'fact',
          content: 'Prism Cover Test (PCT) is the GOLD STANDARD for measuring strabismus in prism diopters. In PCT, prism is on the DEVIATING eye; in Modified Krimsky, prism is on the GOOD eye.',
          highlight: 'PCT = gold standard for deviation measurement',
        },
        {
          kind: 'fact',
          content: 'In the corneal reflex (Hirschberg) test: Eso deviation = reflex appears TEMPORAL in the deviated eye. Exo deviation = reflex appears NASAL in the deviated eye. The reflex position is OPPOSITE to the type of deviation.',
          highlight: 'Reflex position is opposite to deviation direction',
        },
        {
          kind: 'trap',
          question: 'During cover test, the covered eye is observed to move when uncovered. What does this indicate?',
          wrong: 'Tropia (manifest deviation)',
          correct: 'Phoria (latent deviation) — the eye drifted when covered and refixated when uncovered.',
          why: 'Tropia is seen when the UNCOVERED eye moves (to take up fixation) when the other eye is covered. Recovery movement on UNCOVERING the covered eye = phoria. Boards commonly reverse these.',
        },
        {
          kind: 'trap',
          question: 'A patient with suspected microtropia has a normal cover test. What additional test should be done?',
          wrong: 'Repeat the cover test at near',
          correct: '4 Prism Base-Out test — detects a small central suppression scotoma that would mask a microtropia on standard cover testing.',
          why: 'Microtropia can be missed on routine cover test because the suppression scotoma prevents the patient from noticing the retinal image displacement.',
        },
        {
          kind: 'recall',
          prompt: 'In the Bruckner test, a BRIGHTER pupillary reflex indicates:',
          answer: 'Abnormal — the deviated/strabismic eye reflects more light because the image falls on extrafoveal retina',
        },
        {
          kind: 'recall',
          prompt: 'The 4 Prism Base-Out test detects:',
          answer: 'Small central suppression scotoma (foveal suppression) — presence of Monofixation Syndrome or microtropia',
        },
      ],
    },
    {
      id: 'sensory-tests-clinical',
      title: 'Sensory Tests & Clinical Interpretation',
      icon: '🧪',
      items: [
        {
          kind: 'mnemonic',
          term: 'Maddox Rod Orientation Rule',
          device: '"Vertical rod = Horizontal streak (tests VERTICAL deviation). Horizontal rod = Vertical streak (tests HORIZONTAL deviation)."',
          breakdown: 'The streak of light is PERPENDICULAR to the rod orientation. A vertically placed rod creates a horizontal streak — used for detecting vertical phorias. A horizontally placed rod creates a vertical streak — used for detecting horizontal phorias.',
        },
        {
          kind: 'fact',
          content: 'Double Maddox Rod test measures CYCLODEVIATION (torsion). Red MR on right eye, White MR on left eye, both at 90 degrees. Parallel streaks = no cyclodeviation. Non-parallel streaks = cyclodeviation is present.',
          highlight: 'Double Maddox Rod = cyclodeviation only',
        },
        {
          kind: 'fact',
          content: "Hering-Bielschowsky Afterimage test: highly dissociating. Cross response (symmetric cross) = NRC. Asymmetric crossing = ARC. Single line with gap = suppression. The test is independent of eye position after afterimages are formed.",
          highlight: 'Afterimage test = most dissociating sensory test',
        },
        {
          kind: 'fact',
          content: "Titmus Fly = 3000 seconds of arc (gross stereopsis). Titmus circle 9th set = 40 seconds of arc (fine stereopsis). TNO test range = 480 to 15 seconds of arc. TNO has no monocular cues — provides true positive stereopsis measurement.",
          highlight: 'TNO = no monocular cues; Titmus fly = 3000 arcsec',
        },
        {
          kind: 'fact',
          content: "Panum's fusional space is narrowest at the fixation point (6-10 arc min near fovea) and widens toward the periphery. Objects within Panum's area outside the horopter are still seen singly.",
          highlight: "Panum's area widens toward periphery",
        },
        {
          kind: 'trap',
          question: 'In the Worth 4 Dot test, the patient sees 4 dots at far but 2 red dots only at near. What does this mean?',
          wrong: 'The patient has NRC with normal fusion',
          correct: 'Suppression of the left eye at near — the patient can fuse at distance but suppresses the OS when fixating at near.',
          why: 'Worth 4 Dot can show different results at distance and near. Suppression may be distance-specific or near-specific. Always test at both distances.',
        },
        {
          kind: 'trap',
          question: 'The Titmus fly is flipped 90 degrees and the patient still reports the fly "popping out." What does this mean?',
          wrong: 'The patient has excellent stereopsis',
          correct: 'The patient is NOT using true stereopsis — they are using monocular cues. True stereopsis disappears when the book is inverted.',
          why: 'Flipping the Titmus book 90 degrees eliminates the stereoscopic effect. If the patient still sees depth, they are relying on monocular pictorial cues, not true binocular disparity.',
        },
        {
          kind: 'recall',
          prompt: 'In the Maddox Rod test for horizontal deviation, seeing the red streak to the RIGHT and the spot of light to the LEFT indicates:',
          answer: 'Esophoria or esotropia (uncrossed diplopia)',
        },
        {
          kind: 'recall',
          prompt: 'In the Synoptophore (Amblyoscope), the difference between the subjective angle and the objective angle is called:',
          answer: 'The angle of anomaly — its presence indicates ARC (anomalous retinal correspondence)',
        },
        {
          kind: 'recall',
          prompt: 'The Bagolini Striated Glass test uses what kind of lenses and what is its main clinical use?',
          answer: 'Plano striated lenses at 45 degrees OS and 135 degrees OD; used to assess retinal correspondence and detect suppression under near-physiological conditions',
        },
      ],
    },
  ],
}

export default data
