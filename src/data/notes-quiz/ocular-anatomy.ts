import { NotesQuizData } from '@/lib/notes-quiz-types'

export const ocularAnatomyQuiz: NotesQuizData = {
  subject: 'Ocular Anatomy',
  slug: 'ocular-anatomy',
  questions: [
    {
      kind: 'mcq',
      stem: 'Which embryonic layer gives rise to the crystalline lens?',
      options: ['Neural ectoderm', 'Surface ectoderm', 'Mesoderm', 'Neural crest'],
      correct: 1,
      answer: 'Surface ectoderm gives rise to the crystalline lens, lacrimal apparatus, Meibomian glands, and glands of Zeis and Moll. Neural ectoderm gives rise to the retina, optic nerve, and pupil muscles.',
    },
    {
      kind: 'mcq',
      stem: 'The thinnest and weakest wall of the orbit is the:',
      options: ['Roof (frontal bone)', 'Medial wall (lamina papyracea)', 'Floor (maxilla)', 'Lateral wall (sphenoid + zygomatic)'],
      correct: 1,
      answer: 'The medial wall is the thinnest wall, formed largely by the lamina papyracea (OS planum of ethmoid) which is as thin as paper. The lateral wall is the thickest and strongest. The floor is triangular and the weakest (fractures → enophthalmos).',
    },
    {
      kind: 'mcq',
      stem: 'A patient presents with a pupil that "accommodates but does not react to light." This is most consistent with:',
      options: ["Adie's Tonic Pupil", 'Horner\'s Syndrome', 'Argyll Robertson Pupil', 'RAPD'],
      correct: 2,
      answer: 'Argyll Robertson Pupil is the classic "accommodates but does not react to light" pupil, caused by Treponema pallidum (syphilis/tabes dorsalis). Adie\'s pupil reacts SLOWLY to light and accommodation, not completely absent. Horner\'s shows miosis + ptosis + anhidrosis.',
    },
    {
      kind: 'mcq',
      stem: 'Which layer of the cornea is responsible for deturgescence via the Na-K ATPase pump?',
      options: ['Bowman\'s Membrane', 'Corneal Stroma', 'Dua\'s Layer', 'Corneal Endothelium'],
      correct: 3,
      answer: 'The corneal endothelium (single layer of hexagonal cells) is responsible for deturgescence using the Na-K ATPase pump. Ouabain inhibits ATPase. Damage to the endothelium causes permanent, marked corneal swelling (Fuch\'s endothelial dystrophy) — far more serious than epithelial damage.',
    },
    {
      kind: 'mcq',
      stem: 'Which of the following structures passes through the Inferior Orbital Fissure (IOF)?',
      options: ['CN#3 (Oculomotor)', 'CN#4 (Trochlear)', 'CN#5 Maxillary division (V2)', 'Superior ophthalmic vein'],
      correct: 2,
      answer: 'The IOF carries CN#5 V2 (maxillary division — specifically the infraorbital nerve, infraorbital artery, inferior ophthalmic vein, and sympathetic nerve). CN#3, CN#4, CN#5 V1, CN#6, and superior ophthalmic vein all pass through the SUPERIOR Orbital Fissure (SOF).',
    },
    {
      kind: 'mcq',
      stem: 'The pars plana (orbiculus ciliaris) is preferred as a surgical entry site because it is:',
      options: ['The most vascular structure of the ciliary body', 'The least vascular structure of the ciliary body', 'Adjacent to the posterior aqueous chamber', 'Directly continuous with the retina'],
      correct: 1,
      answer: 'The pars plana is the LEAST vascular structure of the ciliary body (4 mm wide from ora serrata to pars plicata), making it the safest entry site for procedures like vitrectomy. The pars plicata (corona ciliaris) is the MOST vascular structure.',
    },
    {
      kind: 'mcq',
      stem: 'Which cranial nerve is the only one to completely decussate and emerge from the dorsal surface of the brain?',
      options: ['CN#2', 'CN#3', 'CN#4', 'CN#6'],
      correct: 2,
      answer: 'CN#4 (Trochlear nerve) is the only cranial nerve to (1) completely decussate, (2) emerge from the dorsal surface of the brainstem, (3) have the longest intracranial course (75 mm), and (4) be the thinnest (2,150–3,400 nerve fibers). It innervates the contralateral SO.',
    },
    {
      kind: 'tf',
      stem: 'The retinal detachment plane is between the RPE and Bruch\'s membrane.',
      correct: false,
      answer: 'FALSE. Retinal detachment occurs between the RPE and the photoreceptor layer (rods & cones). The RPE is firmly adherent to Bruch\'s membrane (lamina vitrea of choroid). The loose attachment between RPE and photoreceptors is the anatomical basis for detachment. Permanent vision loss occurs within 24–72 hours if unrepaired.',
    },
    {
      kind: 'tf',
      stem: "Bowman's membrane cannot regenerate, but Descemet's membrane can.",
      correct: true,
      answer: "TRUE. Bowman's membrane is acellular and has NO capacity to regenerate. Descemet's membrane CAN regenerate because it is the product of secretions of the corneal endothelium (acting as its basement membrane). Corneal epithelium also regenerates due to the many epithelial cells present.",
    },
    {
      kind: 'identification',
      stem: 'This is the most vascular layer of the ciliary body and is 2 mm wide. It contains 60–70 ciliary processes that produce aqueous humor.',
      answer: 'Pars Plicata (Corona Ciliaris)',
    },
    {
      kind: 'identification',
      stem: 'This mnemonic — COWS — is used in the caloric reflex test. What does each letter stand for?',
      answer: 'Cold = Opposite; Warm = Same (direction of the fast phase of nystagmus relative to the ear being irrigated)',
    },
    {
      kind: 'identification',
      stem: 'This test uses 5–10% cocaine to differentiate Horner\'s syndrome. In all forms of Horner\'s, the affected pupil does NOT dilate. What does a 1% hydroxyamphetamine test add to the diagnosis?',
      answer: '1% Hydroxyamphetamine distinguishes central/pre-ganglionic Horner\'s (pupil dilates — more NE stored) from post-ganglionic Horner\'s (pupil does NOT dilate — post-ganglionic neuron is damaged, no NE to release). Instillation done 24–48 hours after cocaine test.',
    },
  ],
}
