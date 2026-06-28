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

    // ── Embryology / Primordia ──────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'Which ocular structure is derived from neural crest cells?',
      options: ['Crystalline lens', 'Trabecular meshwork', 'Extraocular muscles', 'Retina'],
      correct: 1,
      answer: 'Neural crest gives rise to the trabecular meshwork, the bony orbit, and the optic nerve meninges. The lens comes from surface ectoderm, the EOMs from mesoderm, and the retina from neural ectoderm.',
    },
    {
      kind: 'mcq',
      stem: 'The extraocular muscles, ciliary muscle, and vitreous arise from which germ layer?',
      options: ['Neural ectoderm', 'Surface ectoderm', 'Mesoderm', 'Neural crest'],
      correct: 2,
      answer: 'Mesoderm gives rise to the EOMs, ciliary muscle, vitreous, and Tenon\'s capsule. Neural ectoderm forms the retina and pupil muscles; surface ectoderm forms the lens and glands.',
    },

    // ── Bony Orbit ──────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'The thickest and strongest wall of the orbit is formed mainly by the:',
      options: ['Frontal bone + lesser wing of sphenoid', 'Greater wing of sphenoid + zygomatic bone', 'Maxilla + palatine + zygomatic', 'Lamina papyracea of the ethmoid'],
      correct: 1,
      answer: 'The lateral (outer) wall is the thickest and strongest, formed by the greater wing of the sphenoid and the zygomatic bone. It carries the lateral orbital tubercle (attachment for the LR check ligament, Ligament of Lockwood, and lateral palpebral ligament).',
    },
    {
      kind: 'mcq',
      stem: 'A blow-out fracture producing enophthalmos most commonly involves which orbital wall?',
      options: ['Roof', 'Medial wall', 'Floor', 'Lateral wall'],
      correct: 2,
      answer: 'The orbital floor (maxilla + palatine + zygomatic) is triangular and the weakest wall; fracture leads to enophthalmos as orbital contents prolapse into the maxillary sinus. The medial wall is the thinnest, but the floor is the classic blow-out site.',
    },
    {
      kind: 'mcq',
      stem: 'Which structures pass through the optic foramen and canal?',
      options: ['CN#2, ophthalmic artery, sympathetic nerve', 'CN#3, CN#4, CN#6', 'CN#5 V2 and infraorbital artery', 'Superior ophthalmic vein'],
      correct: 0,
      answer: 'The optic foramen (lesser wing of sphenoid) transmits CN#2 (optic nerve), the ophthalmic artery, and sympathetic fibers. CN#3, #4, #6 and the superior ophthalmic vein pass through the superior orbital fissure.',
    },
    {
      kind: 'tf',
      stem: 'The superior ophthalmic vein passes through the inferior orbital fissure.',
      correct: false,
      answer: 'FALSE. The superior ophthalmic vein passes through the SUPERIOR orbital fissure along with CN#3, #4, #6, and the ophthalmic division of CN#5. The inferior orbital fissure carries CN#5 V2 (infraorbital nerve), the infraorbital artery, the inferior ophthalmic vein, and sympathetic fibers.',
    },

    // ── Orbital Fascia & Surgery ────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'Removal of the entire eyeball while preserving the other orbital structures is called:',
      options: ['Exenteration', 'Evisceration', 'Enucleation', 'Keratoplasty'],
      correct: 2,
      answer: 'Enucleation removes the whole eyeball only. Evisceration removes the intraocular contents but leaves the sclera and EOMs; exenteration removes the entire orbital contents including eyelids and part of the bony orbit.',
    },
    {
      kind: 'mcq',
      stem: 'Which procedure removes the contents of the eye (including cornea) while leaving the sclera and extraocular muscles intact?',
      options: ['Enucleation', 'Evisceration', 'Exenteration', 'Trabeculectomy'],
      correct: 1,
      answer: 'Evisceration removes intraocular contents with the sclera and EOMs left in place, often used for endophthalmitis unresponsive to antibiotics. Enucleation removes the whole globe; exenteration clears the entire orbit.',
    },
    {
      kind: 'mcq',
      stem: 'The Ligament of Lockwood (suspensory ligament of the eyeball) is formed by thickening of Tenon\'s capsule with the fascia of which muscles?',
      options: ['Inferior rectus and inferior oblique', 'Superior rectus and superior oblique', 'Medial and lateral recti', 'Levator palpebrae and Muller\'s muscle'],
      correct: 0,
      answer: 'Tenon\'s capsule thickens at its lower portion with the fascia of the inferior rectus and inferior oblique to form the Ligament of Lockwood, which supports the globe like a hammock.',
    },

    // ── Eyelids ─────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'Which eyelid muscle is innervated by the sympathetic nervous system?',
      options: ['Orbicularis oculi', 'Levator palpebrae superioris', 'Muller\'s muscle', 'Sphincter pupillae'],
      correct: 2,
      answer: 'Muller\'s muscle (superior tarsal muscle) is smooth muscle under sympathetic control; its loss in Horner\'s syndrome causes a 1–2 mm ptosis. The LPS is CN#3, orbicularis oculi is CN#7.',
    },
    {
      kind: 'mcq',
      stem: 'The orbicularis oculi, responsible for eyelid closure, is innervated by which cranial nerve?',
      options: ['CN#3', 'CN#5', 'CN#7', 'CN#6'],
      correct: 2,
      answer: 'The orbicularis oculi is innervated by CN#7 (facial nerve). Damage causes lagophthalmos (inability to fully close the lid). The LPS that opens the lid is CN#3.',
    },
    {
      kind: 'tf',
      stem: 'The upper tarsus measures about 11 mm in vertical height while the lower tarsus measures about 5 mm.',
      correct: true,
      answer: 'TRUE. The upper tarsus is roughly 11 mm vertically and the lower tarsus about 5 mm, with both around 1 mm thick and 25–30 mm long. The tarsus is the dense fibrous skeleton of the lid and houses the Meibomian glands.',
    },
    {
      kind: 'mcq',
      stem: 'Misdirection of the eyelashes toward the globe is termed:',
      options: ['Poliosis', 'Madarosis', 'Trichiasis', 'Distichiasis'],
      correct: 2,
      answer: 'Trichiasis is misdirection of the cilia. Poliosis is whitening of the lashes, madarosis is loss of lashes, and distichiasis is an extra (supernumerary) row of lashes.',
    },
    {
      kind: 'mcq',
      stem: 'The skin of the eyelid is notable for being:',
      options: ['The thickest skin in the body', 'The thinnest skin in the body', 'Heavily keratinized', 'Rich in subcutaneous fat'],
      correct: 1,
      answer: 'Eyelid skin is the thinnest in the body, overlying loose areolar connective tissue that is devoid of fat (which is why it swells easily with edema).',
    },

    // ── Conjunctiva ─────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'Mucin-secreting goblet cells of the conjunctiva are MOST numerous at the:',
      options: ['Limbus', 'Lid margins', 'Fornix', 'Bulbar conjunctiva'],
      correct: 2,
      answer: 'Goblet cells are most numerous at the fornix, fewer in the bulbar conjunctiva, and ABSENT at the lid margins and limbus. Their mucin is the wetting agent of the precorneal tear film.',
    },
    {
      kind: 'tf',
      stem: 'Chemosis (conjunctival swelling) most severely affects the palpebral conjunctiva.',
      correct: false,
      answer: 'FALSE. Chemosis greatly affects the fornix, less so the bulbar conjunctiva, and NEVER the palpebral conjunctiva, because the palpebral conjunctiva is firmly adherent to the tarsus.',
    },
    {
      kind: 'mcq',
      stem: 'The conjunctival fornix is absent at which location?',
      options: ['Superior', 'Inferior', 'Lateral', 'Medial'],
      correct: 3,
      answer: 'There is NO medial fornix; the conjunctiva there is taken up by the plica semilunaris and caruncle. The superior fornix sits 10 mm from the limbus, the inferior 8 mm, and the lateral 14 mm.',
    },

    // ── Sclera ──────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'The sclera is THINNEST at which location?',
      options: ['Entrance of the optic nerve', 'At the limbus', 'Just behind the insertions of the recti muscles', 'At the posterior pole'],
      correct: 2,
      answer: 'The sclera is thinnest (about 0.3 mm) just behind the recti insertions, in front of the equator. It is thickest (about 1 mm) at the entrance of the optic nerve.',
    },
    {
      kind: 'mcq',
      stem: 'Which scleral layer is the innermost and contains melanocytes?',
      options: ['Episclera', 'Scleral stroma', 'Lamina fusca', 'Bowman\'s membrane'],
      correct: 2,
      answer: 'The lamina fusca (dark layer) is the innermost scleral layer and contains melanocytes. The episclera is the outer vascular layer and the scleral stroma gives the sclera its white opacity.',
    },
    {
      kind: 'tf',
      stem: 'The sclera occupies five-sixths of the outer fibrous coat of the eye and the cornea the remaining one-sixth.',
      correct: true,
      answer: 'TRUE. The opaque sclera makes up 5/6 of the outer tunic and the transparent cornea the remaining 1/6, meeting at the limbus.',
    },

    // ── Cornea ──────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'Central corneal thickness is measured with which instrument?',
      options: ['Keratometer', 'Pachymeter', 'Tonometer', 'Gonioscope'],
      correct: 1,
      answer: 'Central corneal thickness (about 0.52–0.56 mm) is measured by a pachymeter. A keratometer measures corneal curvature, and a tonometer measures intraocular pressure.',
    },
    {
      kind: 'mcq',
      stem: 'Approximately what proportion of total corneal thickness is the corneal stroma (substantia propria)?',
      options: ['10%', '25%', '50%', '90%'],
      correct: 3,
      answer: 'The stroma is about 90% of corneal thickness, making it the thickest layer. It is avascular, rich in unmyelinated nasociliary nerves, and made of collagen lamellae in glycosaminoglycans.',
    },
    {
      kind: 'mcq',
      stem: 'The total refractive power of the cornea is approximately:',
      options: ['1.376 diopters', '43 diopters', '60 diopters', '20 diopters'],
      correct: 1,
      answer: 'The cornea contributes about 43 D, making it the most powerful single refractive element of the eye. 1.376 is its index of refraction, and about 60 D is the total power of the whole eye.',
    },
    {
      kind: 'mcq',
      stem: 'Sensory innervation of the cornea is supplied by the:',
      options: ['Nasociliary branch of CN#5', 'Short ciliary nerve', 'CN#7 (facial)', 'CN#3 (oculomotor)'],
      correct: 0,
      answer: 'The nasociliary nerve (a branch of CN#5 ophthalmic division) supplies the whole cornea EXCEPT Descemet\'s membrane and the endothelium. This dense sensory supply is why corneal abrasions are so painful.',
    },
    {
      kind: 'tf',
      stem: 'The corneal endothelium maintains deturgescence through a Na-K ATPase pump that is inhibited by ouabain.',
      correct: true,
      answer: 'TRUE. The single-layered hexagonal endothelium keeps the cornea relatively dehydrated (deturgescence) using the Na-K ATPase pump, which ouabain inhibits. Endothelial damage causes permanent corneal swelling.',
    },
    {
      kind: 'mcq',
      stem: 'The newly described corneal layer lying between the stroma and Descemet\'s membrane, able to withstand about 2 bars of pressure, is:',
      options: ['Bowman\'s membrane', 'Dua\'s layer', 'Lamina fusca', 'Bruch\'s membrane'],
      correct: 1,
      answer: 'Dua\'s layer (about 6–15 µm) sits between the stroma and Descemet\'s membrane and is strong and impervious to air, withstanding up to roughly 2 bars (200 kPa).',
    },

    // ── Uvea ────────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'The MOST vascular structure of the ciliary body, bearing 60–70 ciliary processes that produce aqueous humor, is the:',
      options: ['Pars plana', 'Pars plicata', 'Lamina fusca', 'Ora serrata'],
      correct: 1,
      answer: 'The pars plicata (corona ciliaris), about 2 mm wide, is the most vascular part of the ciliary body and carries the ciliary processes. The pars plana is the least vascular and is the safe surgical entry site.',
    },
    {
      kind: 'mcq',
      stem: 'The sphincter (constrictor) pupillae is innervated by:',
      options: ['The sympathetic nervous system', 'Parasympathetic fibers of CN#3', 'CN#5', 'CN#7'],
      correct: 1,
      answer: 'The sphincter pupillae (miosis, <2 mm) is driven by parasympathetic fibers of CN#3 from the Edinger-Westphal nucleus via the short ciliary nerves. The dilator pupillae is sympathetic.',
    },
    {
      kind: 'mcq',
      stem: 'The dilator pupillae muscle is innervated by:',
      options: ['Parasympathetic fibers of CN#3', 'The sympathetic nervous system', 'CN#4', 'CN#6'],
      correct: 1,
      answer: 'The dilator pupillae (mydriasis, >5 mm) is under sympathetic control. The sphincter pupillae is parasympathetic (CN#3).',
    },
    {
      kind: 'mcq',
      stem: 'The choriocapillaris (membrane of Ruysch) primarily supplies the:',
      options: ['Inner sensory retina', 'RPE and photoreceptors', 'Iris', 'Ciliary muscle'],
      correct: 1,
      answer: 'The choriocapillaris supplies the RPE and photoreceptors and accounts for roughly 65–85% of blood flow to the retina. The inner sensory retina is supplied by the central retinal artery.',
    },
    {
      kind: 'tf',
      stem: 'When the ciliary muscle contracts, it relaxes the zonules of Zinn and allows the lens to become more biconvex.',
      correct: true,
      answer: 'TRUE. Ciliary muscle contraction (CN#3, parasympathetic) draws the ciliary processes forward and relaxes the zonules, letting the lens round up for accommodation at near.',
    },

    // ── Pupillary Reflexes & Disorders ──────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'The classic triad of Horner\'s syndrome includes all of the following EXCEPT:',
      options: ['Miosis', 'Ptosis', 'Anhidrosis', 'Mydriasis'],
      correct: 3,
      answer: 'Horner\'s syndrome (lesion of the sympathetic pathway) causes miosis (dilator pupillae), partial ptosis (Muller\'s muscle), and facial anhidrosis. Mydriasis is the opposite and does not occur.',
    },
    {
      kind: 'mcq',
      stem: 'The swinging-flashlight test is used to diagnose:',
      options: ['Argyll Robertson pupil', 'A relative afferent pupillary defect (Marcus-Gunn)', 'Adie\'s tonic pupil', 'Horner\'s syndrome'],
      correct: 1,
      answer: 'The swinging-flashlight test detects an RAPD (Marcus-Gunn pupil): when the light swings to the affected eye, both pupils dilate because of the diminished afferent signal from optic nerve or severe retinal disease.',
    },

    // ── Retina ──────────────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'Rhodopsin, the visual pigment of the rods, has peak spectral sensitivity at approximately:',
      options: ['440 nm', '507 nm', '535 nm', '555 nm'],
      correct: 1,
      answer: 'Rod rhodopsin (visual purple) peaks near 507 nm and mediates scotopic (dim-light) vision. The cone pigment iodopsin varies by cone type (blue 440, green 535, red 750 nm).',
    },
    {
      kind: 'mcq',
      stem: 'The site of keenest vision, which is also the thinnest and a capillary-free part of the retina, is the:',
      options: ['Optic disc', 'Fovea centralis', 'Ora serrata', 'Macula lutea'],
      correct: 1,
      answer: 'The fovea centralis is a 1.5 mm pit at the center of the macula; it is the thinnest, capillary-free region with the keenest vision. Its rim (parafovea) is the thickest part of the retina.',
    },
    {
      kind: 'mcq',
      stem: 'The physiologic blind spot corresponds anatomically to the:',
      options: ['Fovea centralis', 'Optic disc', 'Macula lutea', 'Ora serrata'],
      correct: 1,
      answer: 'The optic disc (optic nerve head) has no photoreceptors, producing the physiologic blind spot. It is about 1.5 mm in diameter and sits nasal to the fovea.',
    },
    {
      kind: 'mcq',
      stem: 'Approximately how many rods are present in the human retina?',
      options: ['6 million', '13 million', '130 million', '1.2 million'],
      correct: 2,
      answer: 'There are about 130 million rods (peripheral retina, scotopic vision) versus about 6 million cones (central retina, photopic vision).',
    },
    {
      kind: 'tf',
      stem: 'The retinal pigment epithelium (RPE) is the outermost retinal layer and is firmly adherent to Bruch\'s membrane.',
      correct: true,
      answer: 'TRUE. The RPE is the outermost of the 11 retinal layers and is firmly bound to Bruch\'s membrane. Its loose attachment to the overlying photoreceptors is why detachment occurs between the RPE and photoreceptor layer.',
    },

    // ── Visual Pathways ─────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'A lesion of the crossing (decussating) fibers at the optic chiasm produces:',
      options: ['Binasal hemianopsia', 'Bitemporal hemianopsia', 'Homonymous hemianopsia', 'Total monocular blindness'],
      correct: 1,
      answer: 'Crossing (nasal) fibers at the chiasm carry the temporal visual fields, so their interruption (classically by a pituitary tumor) causes bitemporal hemianopsia. Damage to the uncrossed fibers gives binasal hemianopsia.',
    },
    {
      kind: 'mcq',
      stem: 'The primary visual cortex (area striata) corresponds to which Brodmann area?',
      options: ['Area 17', 'Area 18', 'Area 19', 'Area 4'],
      correct: 0,
      answer: 'The primary visual cortex is Brodmann area 17 on the medial occipital lobe, marked by the white line (stria of Gennari). Areas 18 and 19 are visual association cortex.',
    },
    {
      kind: 'mcq',
      stem: 'Which part of the optic nerve is the LONGEST?',
      options: ['Intraocular', 'Intraorbital', 'Intracanalicular', 'Intracranial'],
      correct: 1,
      answer: 'The intraorbital part (about 30 mm, with an S-shaped curve that allows eye movement) is the longest. The intraocular part (0.7–1.0 mm) is the shortest.',
    },

    // ── Extraocular Muscles ─────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'The PRIMARY action of the superior oblique is:',
      options: ['Elevation', 'Depression', 'Intorsion', 'Extorsion'],
      correct: 2,
      answer: 'The superior oblique\'s primary action is intorsion, with depression as secondary and abduction as tertiary. It is innervated by CN#4.',
    },
    {
      kind: 'mcq',
      stem: 'Which extraocular muscle is innervated by CN#6?',
      options: ['Superior rectus', 'Medial rectus', 'Lateral rectus', 'Superior oblique'],
      correct: 2,
      answer: 'CN#6 (abducens) innervates the lateral rectus (abduction). Remember LR6 SO4 and all the rest CN#3.',
    },
    {
      kind: 'mcq',
      stem: 'Which extraocular muscle does NOT originate from the Annulus of Zinn and does not form part of the muscle cone?',
      options: ['Superior rectus', 'Inferior oblique', 'Superior oblique', 'Lateral rectus'],
      correct: 1,
      answer: 'The inferior oblique arises from the orbital floor (maxilla), not the Annulus of Zinn, and is the only EOM that does not form part of the muscle cone. It is also the shortest EOM.',
    },
    {
      kind: 'mcq',
      stem: 'The superior oblique muscle is innervated by:',
      options: ['CN#3', 'CN#4', 'CN#6', 'CN#7'],
      correct: 1,
      answer: 'The superior oblique is innervated by CN#4 (trochlear), the only cranial nerve that completely decussates and exits the dorsal brainstem. It runs through the trochlea (pulley) before inserting.',
    },
    {
      kind: 'tf',
      stem: 'Hering\'s Law states that yoke muscles receive equal and simultaneous innervation.',
      correct: true,
      answer: 'TRUE. Hering\'s Law of equal innervation applies to yoke (paired agonist) muscles in the two eyes. Sherrington\'s Law is the reciprocal one: increased innervation to an agonist means decreased innervation to its antagonist.',
    },

    // ── Cranial Nerves ──────────────────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'CN#3 (oculomotor) innervates all of the following EXCEPT:',
      options: ['Levator palpebrae superioris', 'Sphincter pupillae', 'Superior oblique', 'Inferior oblique'],
      correct: 2,
      answer: 'The superior oblique is innervated by CN#4, not CN#3. CN#3 supplies the LPS, sphincter pupillae, ciliary muscle, and all recti except the lateral rectus, plus the inferior oblique.',
    },
    {
      kind: 'mcq',
      stem: 'The maxillary division (V2) of the trigeminal nerve exits the skull through the:',
      options: ['Superior orbital fissure', 'Foramen rotundum', 'Foramen ovale', 'Optic foramen'],
      correct: 1,
      answer: 'V2 exits via the foramen rotundum. V1 (ophthalmic) passes through the superior orbital fissure and V3 (mandibular) through the foramen ovale. Mnemonic: Standing Room Only.',
    },
    {
      kind: 'mcq',
      stem: 'Parasympathetic fibers controlling the sphincter pupillae originate from which nucleus?',
      options: ['Edinger-Westphal nucleus', 'Superior cervical ganglion', 'Lateral geniculate body', 'Pterygopalatine ganglion'],
      correct: 0,
      answer: 'The Edinger-Westphal nucleus (parasympathetic part of CN#3) sends fibers to the ciliary ganglion and then via the short ciliary nerves to the sphincter pupillae and ciliary muscle.',
    },
    {
      kind: 'tf',
      stem: 'A complete CN#3 palsy produces divergent strabismus, complete ptosis, a dilated pupil, and cycloplegia.',
      correct: true,
      answer: 'TRUE. Loss of CN#3 leaves the eye pulled out and down (unopposed LR and SO), with complete ptosis (LPS), a fixed dilated pupil (sphincter pupillae), and cycloplegia (paralysis of accommodation).',
    },

    // ── Ophthalmic Artery & Numbers ─────────────────────────────────────────
    {
      kind: 'mcq',
      stem: 'The ophthalmic artery is the first intracranial branch of the:',
      options: ['External carotid artery', 'Internal carotid artery', 'Middle cerebral artery', 'Facial artery'],
      correct: 1,
      answer: 'The ophthalmic artery is the first intracranial branch of the internal carotid artery; it enters the orbit through the optic canal infero-lateral to the optic nerve.',
    },
    {
      kind: 'mcq',
      stem: 'The first intraorbital branch of the ophthalmic artery is the:',
      options: ['Lacrimal artery', 'Central retinal artery', 'Short posterior ciliary artery', 'Supraorbital artery'],
      correct: 1,
      answer: 'The central retinal artery is the first intraorbital branch; it enters the optic nerve about 10–12 mm behind the globe and supplies the inner sensory retina (about 20–30% of retinal blood flow).',
    },
    {
      kind: 'mcq',
      stem: 'The average antero-posterior (axial) diameter of the adult eyeball is about:',
      options: ['20 mm', '24 mm', '28 mm', '16 mm'],
      correct: 1,
      answer: 'The average axial length is about 24 mm (range 22–27 mm). The eyeball weighs about 10 g with a volume near 6.5 mL.',
    },
    {
      kind: 'tf',
      stem: 'The normal cup-to-disc (C/D) ratio is approximately 0.3.',
      correct: true,
      answer: 'TRUE. A normal C/D ratio is about 0.3. The physiologic cup is the funnel-shaped depression at the center of the 1.5 mm optic disc; a markedly enlarged ratio suggests glaucomatous optic neuropathy.',
    },
  ],
}
