import { OlePrepData } from '@/lib/ole-prep-types'

export const ocularAnatomyData: OlePrepData = {
  subject: 'Ocular Anatomy',
  slug: 'ocular-anatomy',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: '12 Cranial Nerves (Names)',
          device: 'On Old Olympus\'s Towering Tops, A Fine-Vested German Viewed Some Hope',
          breakdown: 'Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Spinal Accessory, Hypoglossal',
        },
        {
          kind: 'mnemonic',
          term: 'Cranial Nerve Types (M/S/B)',
          device: 'Some Say Money Matters But My Brother Says Big Brains Matter Most',
          breakdown: 'S=Sensory, M=Motor, B=Both: CN1 S, CN2 S, CN3 M, CN4 M, CN5 B, CN6 M, CN7 B, CN8 S, CN9 B, CN10 B, CN11 M, CN12 M',
        },
        {
          kind: 'mnemonic',
          term: 'CN#5 Branches (Foramen)',
          device: 'Standing Room Only',
          breakdown: 'V1 Superior orbital fissure (SOF), V2 foramen Rotundum, V3 foramen Ovale',
        },
        {
          kind: 'mnemonic',
          term: 'Bones of the Orbit (7)',
          device: 'My First List Zipper Pulls Easily, Slowly',
          breakdown: 'Maxilla, Frontal, Lacrimal, Zygomatic, Palatine, Ethmoid, Sphenoid',
        },
        {
          kind: 'mnemonic',
          term: 'Structures through SOF (Superior Orbital Fissure)',
          device: 'LAN S O',
          breakdown: 'CN3 (L = lower/superior branch), CN4 (A = abducens is NOT in SOF — correction: CN4 Trochlear), CN5 ophthalmic, CN6 Abducens, Superior ophthalmic vein. Remember: CN3, CN4, CN5 ophthalmic, CN6, Superior ophthalmic vein',
        },
        {
          kind: 'mnemonic',
          term: 'Neural Ectoderm derivatives',
          device: 'Retina Needs Dual Support',
          breakdown: 'Retina, optic Nerve, Dilator pupillae, Sphincter pupillae',
        },
        {
          kind: 'mnemonic',
          term: 'Surface Ectoderm derivatives',
          device: 'Lens Lounges in Meibomian Seas & Swamps',
          breakdown: 'Lens, Lacrimal apparatus, Meibomian/tarsal glands, Sebaceous glands (Zeis), Sweat glands (Moll)',
        },
        {
          kind: 'mnemonic',
          term: 'Caloric Test Direction of Nystagmus',
          device: 'COWS',
          breakdown: 'Cold → Opposite; Warm → Same (direction of fast phase of nystagmus)',
        },
      ],
    },
    {
      id: 'high-yield-facts',
      title: 'High-Yield Facts',
      icon: '⚡',
      items: [
        {
          kind: 'fact',
          content: 'The thinnest wall of the orbit is the MEDIAL WALL (lamina papyracea / OS planum of ethmoid) — also called the weakest wall. The LATERAL wall is the thickest and strongest.',
          highlight: 'Medial = thinnest; Lateral = thickest',
        },
        {
          kind: 'fact',
          content: 'The cornea is avascular EXCEPT at the limbus (supplied by conjunctival artery from ACA). The nasociliary nerve innervates the ENTIRE cornea EXCEPT Descemet\'s membrane and endothelium.',
          highlight: 'No vessels except limbus; no nerves in Descemet\'s + endothelium',
        },
        {
          kind: 'fact',
          content: 'Corneal endothelium uses Na-K ATPase (Ouabain inhibits it) for deturgescence. Damage → permanent swelling (Fuch\'s endothelial dystrophy). Epithelial damage → localized; endothelial damage → far more serious.',
          highlight: 'Endothelial damage is irreversible',
        },
        {
          kind: 'fact',
          content: 'Retinal detachment occurs between the RPE and photoreceptor layer (between Bruch\'s membrane adherence and rods/cones). Permanent vision loss within 24–72 hours if unrepaired.',
          highlight: 'RPE to photoreceptor = detachment site',
        },
        {
          kind: 'fact',
          content: 'CN#4 (Trochlear) is the only cranial nerve to: (1) emerge from the dorsal surface of the brain, (2) completely decussate, (3) have the longest intracranial course (75 mm), and (4) be the thinnest CN.',
          highlight: 'CN#4: dorsal, crossed, thinnest, longest intracranial',
        },
        {
          kind: 'fact',
          content: 'The optic disc (physiologic blind spot) contains NO photoreceptors — only ganglion cell axons entering the optic nerve. Normal cup-to-disc ratio is 0.3.',
          highlight: 'Optic disc = no photoreceptors = blind spot',
        },
        {
          kind: 'fact',
          content: 'Argyll Robertson pupil ("Prostitute Pupils"): accommodates but does not react to light. Caused by Treponema pallidum (syphilis/tabes dorsalis). "Near response exceeds light response" is pathognomonic.',
          highlight: 'Syphilis → AR pupil → accommodates but no light reflex',
        },
        {
          kind: 'fact',
          content: 'Adie\'s Tonic Pupil: constricts with 0.125% Pilocarpine (supersensitivity — denervated sphincter). Normal pupil only responds to 0.5–1.0% Pilocarpine. Hallmark triad: Mydriasis + Diaphoresis + Loss of deep tendon reflex.',
          highlight: '0.125% Pilocarpine = Adie\'s; normal needs 0.5–1.0%',
        },
        {
          kind: 'fact',
          content: 'Pars Plana (Orbiculus Ciliaris) = LEAST vascular structure of ciliary body and preferred site of surgical entry (e.g., vitreous biopsy). Pars Plicata (Corona Ciliaris) = MOST vascular.',
          highlight: 'Pars plana = surgical site; pars plicata = most vascular',
        },
        {
          kind: 'fact',
          content: 'The foveola (0.4 mm) contains ONLY cones in hexagonal arrangement, NO rods, NO capillaries — region of maximum visual acuity.',
          highlight: 'Foveola = cones only, no rods, no vessels',
        },
        {
          kind: 'fact',
          content: 'Goblet cells of conjunctiva are numerous at the fornix, LESS in bulbar, and ABSENT at lid margins and limbus. They secrete mucin (wetting agent for precorneal tear film).',
          highlight: 'Goblet cells absent at lid margins and limbus',
        },
        {
          kind: 'fact',
          content: 'Chemosis (conjunctival swelling) greatly affects the FORNIX, less the bulbar, and NEVER the palpebral (firmly adherent to tarsus). The palpebral is firmly attached — it cannot swell outward.',
          highlight: 'Chemosis: fornix > bulbar > palpebral (never)',
        },
        {
          kind: 'fact',
          content: 'Greater Iris Circle (Circulus Iridis Major) = union of 2 LONG PCA + 7 ACA. Lesser Iris Circle = formed by branches of GIC at pupillary zone (marks the collarette).',
          highlight: 'Greater iris circle = 2 long PCA + 7 ACA',
        },
        {
          kind: 'fact',
          content: 'Each rectus muscle is supplied by 2 muscular arteries EXCEPT the Lateral Rectus — supplied by only 1 muscular artery + the lacrimal artery.',
          highlight: 'LR has only 1 muscular artery (all others have 2)',
        },
      ],
    },
    {
      id: 'board-traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'The lamina papyracea is the thinnest orbital wall — which bone forms it?',
          wrong: 'Lacrimal bone',
          correct: 'OS planum of ethmoid (part of the medial wall)',
          why: 'The lamina papyracea is the orbital plate of the ethmoid. The lacrimal bone is also part of the medial wall but forms the lacrimal fossa, not the lamina papyracea.',
        },
        {
          kind: 'trap',
          question: 'A patient\'s pupil accommodates but does not respond to light. What is the most likely condition?',
          wrong: "Adie's Tonic Pupil",
          correct: 'Argyll Robertson Pupil (syphilis)',
          why: '"Accommodates but does not react to light" is the pathognomonic description of Argyll Robertson pupil caused by neurosyphilis. Adie\'s pupil reacts SLOWLY to both light and accommodation — it does NOT completely fail to respond to light.',
        },
        {
          kind: 'trap',
          question: 'Which corneal layer CANNOT regenerate?',
          wrong: "Descemet's Membrane",
          correct: "Bowman's Membrane",
          why: "Descemet's membrane CAN regenerate (produced by endothelium). Bowman's membrane is acellular and CANNOT regenerate. Corneal epithelium can also regenerate because of many epithelial cells.",
        },
        {
          kind: 'trap',
          question: 'Retinal detachment occurs between which two layers?',
          wrong: 'RPE and Bruch\'s membrane',
          correct: 'RPE and photoreceptor layer',
          why: "RPE is firmly adherent to Bruch's membrane (lamina vitrea of choroid). The loose attachment is between RPE and the photoreceptors (rods & cones) — this is the anatomical site of detachment.",
        },
        {
          kind: 'trap',
          question: 'The Inferior Oblique is the shortest EOM. True or False?',
          wrong: 'True — IO has the shortest total measurement',
          correct: 'True — but Superior Oblique is the longest EOM (including tendon)',
          why: 'IO is the shortest EOM overall (37 mm total). SO is the LONGEST EOM from origin to insertion including the tendon (60 mm total). SR is the longest EOM EXCLUDING the tendon.',
        },
        {
          kind: 'trap',
          question: 'Which cranial nerve has the longest intracranial course?',
          wrong: 'CN#10 (Vagus — longest CN in body)',
          correct: 'CN#4 (Trochlear — longest intracranial course at 75 mm)',
          why: 'CN#10 is the longest cranial nerve in the BODY, but CN#4 has the longest INTRACRANIAL course (75 mm). CN#6 has the shortest intracranial course.',
        },
        {
          kind: 'trap',
          question: 'RAPD is detected by which test, and what happens to the pupil in the AFFECTED eye?',
          wrong: 'The affected pupil constricts less when light is shone on it',
          correct: 'Swinging-flashlight test: the affected pupil DILATES (escapes) when light swings from normal to affected eye',
          why: 'In RAPD, when you swing light FROM the unaffected eye TO the affected eye, the affected pupil appears to dilate (escape) because the consensual constriction from the normal eye is stronger than the direct response of the damaged afferent pathway.',
        },
        {
          kind: 'trap',
          question: 'Which structure passes through the Inferior Orbital Fissure (IOF)?',
          wrong: 'CN#3 and CN#4',
          correct: 'CN#5 maxillary division (V2) — specifically the infraorbital nerve, infraorbital artery, inferior ophthalmic vein, and sympathetic nerve',
          why: 'CN#3, CN#4, CN#5 ophthalmic (V1), and CN#6 all pass through the SUPERIOR orbital fissure (SOF). The IOF is below the SOF and carries V2 (maxillary division) and related structures.',
        },
      ],
    },
    {
      id: 'active-recall',
      title: 'Active Recall',
      icon: '🔁',
      items: [
        {
          kind: 'recall',
          prompt: 'List the 3 hallmark signs of Adie\'s Tonic Pupil.',
          answer: 'Mydriasis (non-responsive to light), Diaphoresis (excessive sweating), Loss of deep tendon reflex',
        },
        {
          kind: 'recall',
          prompt: 'What are the layers of the cornea from outer to inner (include all 6)?',
          answer: '1. Epithelium → 2. Bowman\'s Membrane → 3. Stroma → 4. Dua\'s Layer → 5. Descemet\'s Membrane → 6. Endothelium',
        },
        {
          kind: 'recall',
          prompt: 'Name the 6 extraocular muscles and their primary actions.',
          answer: 'MR = Adduction; LR = Abduction; SR = Elevation; IR = Depression; SO = Intorsion; IO = Extorsion',
        },
        {
          kind: 'recall',
          prompt: 'What is the difference between Enucleation, Evisceration, and Exenteration?',
          answer: 'Enucleation = remove eyeball only; Evisceration = remove contents of eye (cornea included), sclera + EOM left; Exenteration = remove entire orbital contents including eyelids and sometimes bone',
        },
        {
          kind: 'recall',
          prompt: 'What structures pass through the Superior Orbital Fissure (SOF)?',
          answer: 'CN#3, CN#4, CN#5 (ophthalmic — frontal, lacrimal, nasociliary), CN#6, Superior ophthalmic vein',
        },
        {
          kind: 'recall',
          prompt: 'What is the embryologic origin of the crystalline lens?',
          answer: 'Surface Ectoderm (specifically the lens placode — an invagination of surface ectoderm)',
        },
        {
          kind: 'recall',
          prompt: 'What does the Swinging-Flashlight Test detect, and what is a positive finding?',
          answer: 'Detects RAPD (Relative Afferent Pupillary Defect). Positive: when light swings to affected eye, both pupils dilate (escape) instead of maintaining constriction — indicates optic nerve damage or severe retinal disease.',
        },
        {
          kind: 'recall',
          prompt: 'What are the 11 histologic layers of the retina from outside inward?',
          answer: 'RPE → Photoreceptors → External Limiting Membrane → Outer Nuclear Layer → Fibers of Henle → Outer Plexiform Layer → Inner Nuclear Layer → Inner Plexiform Layer → Ganglion Cell Layer → Nerve Fiber Layer → Internal Limiting Membrane',
        },
        {
          kind: 'recall',
          prompt: 'What are the 3 smooth muscle fiber types of the ciliary body and their arrangement?',
          answer: 'Longitudinal (Brücke\'s) = outermost; Radial = middle; Circular (Müller\'s) = innermost (site of zonular fiber attachment)',
        },
        {
          kind: 'recall',
          prompt: 'Which structures are innervated by the SYMPATHETIC nervous system in the eye?',
          answer: 'Dilator pupillae, Ciliary muscles (inhibitory), Mueller\'s muscle, Lacrimal glands, Choroidal & conjunctival blood vessels',
        },
      ],
    },
  ],
}
