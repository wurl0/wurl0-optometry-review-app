import { OlePrepData } from '@/lib/ole-prep-types'

export const ocularDiseaseData: OlePrepData = {
  subject: 'Ocular Disease',
  slug: 'ocular-disease',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Iron Corneal Pigment Lines',
          device: 'Hitch a Ferry to Florida\'s Stocker',
          breakdown: 'Hudson-Stahli (normal aging), Ferry line (filtering bleb), Fleischer ring (keratoconus), Stocker line (pterygium). All iron lines sit in the corneal EPITHELIUM.',
        },
        {
          kind: 'mnemonic',
          term: 'Lens Dislocation Directions (MSH)',
          device: 'Marfan Goes UP, Homocystinuria Goes DOWN, Weill-Marchesani Goes Round',
          breakdown: 'Marfan syndrome = lens displaced SUPERIORLY (up). Homocystinuria = lens displaced INFERIORLY (down). Weill-Marchesani = spherical lens, variable direction, high refractive power and myopia.',
        },
        {
          kind: 'mnemonic',
          term: 'Anti-Glaucoma Drug Classes',
          device: 'MAPCO Lowers Pressure',
          breakdown: 'M = Miotics (Pilocarpine, Carbachol); A = Alpha-2 agonists (Apraclonidine, Brimonidine); P = Prostaglandins (Latanoprost, Travoprost); C = CAI/Carbonic Anhydrase Inhibitors (Acetazolamide, Dorzolamide); O = Osmotic agents (Mannitol, Glycerol, Isosorbide, Urea)',
        },
        {
          kind: 'mnemonic',
          term: 'Trachoma Stages',
          device: 'I Am Cicatrised and Healed (IACH)',
          breakdown: 'I = Insidious (minute follicles at upper tarsal conjunctiva); A = Acute (intense inflammation, purulent discharge, ptosis); C = Cicatricial (scar tissue forms, follicles disappear); H = Healed (infiltration gone, scars remain)',
        },
        {
          kind: 'mnemonic',
          term: 'Ageing Changes in the Eye (Outside to Inside)',
          device: 'ECAL-CILR',
          breakdown: 'E = Eyelids (lose elasticity); C = Conjunctiva (goblet cells decrease); A = Anterior chamber (shallows from 3.6 to 3.0 mm); L = Lens (enlarges, stiffens, presbyopia); C = Ciliary body (thickens, AH decreases 25% per decade); I = Iris (thins, senile miosis); L = vitreous Liquefies (syneresis, floaters); R = Retina (RNFL thins 20-30%, worst superiorly)',
        },
        {
          kind: 'mnemonic',
          term: 'Proptosis Types',
          device: 'A-I-P-U-B',
          breakdown: 'A = Active (emphysema, hemorrhage, mucocele); I = Intermittent (varicosities, vascular tumor, recurrent hemorrhage); P = Pulsating (carotid cavernous sinus fistula, aneurysm); U = Unilateral (inflammatory — cellulitis, abscess, dacryoadenitis); B = Bilateral (endocrine — Grave\'s disease, thyrotoxic ophthalmopathy)',
        },
        {
          kind: 'mnemonic',
          term: 'Avitaminosis A Causes of Blindness',
          device: 'CORN',
          breakdown: 'C = Corneal destruction (xerophthalmia, keratomalacia — softening of cornea); O = Opsin loss in rods (nyctalopia/night blindness); R = Retinal photopigment loss; N = Nerve compression at optic canal (faulty bone growth)',
        },
        {
          kind: 'mnemonic',
          term: 'Lens-Induced Glaucomas',
          device: 'The 3 PHAs (PHAco-Morphic, PHAco-Lytic, PHAco-Genic)',
          breakdown: 'PHAcomorphic = SWOLLEN lens pushes iris → CLOSED angle. PHAcolytic = PROTEIN LEAK from hypermature lens → OPEN angle. PHAcogenic = RUPTURE of lens capsule → OPEN angle.',
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
          content: 'Glaucoma is the SECOND cause of blindness, after cataract (#1). POAG is treated MEDICALLY; PACG (emergency glaucoma) is treated SURGICALLY (laser iridotomy using YAG or Argon laser). Normal IOP = 10-21 mmHg.',
          highlight: 'Glaucoma = 2nd blindness cause; POAG = medical; PACG = surgical',
        },
        {
          kind: 'fact',
          content: 'Kayser-Fleischer ring (copper deposits) sits at DESCEMET\'S MEMBRANE and is the most important diagnostic sign in Wilson\'s disease (hepatolenticular degeneration). Present in 95% of patients with neurologic manifestations. Fleischer ring (iron) sits at the EPITHELIUM and is the earliest sign of keratoconus.',
          highlight: 'Kayser-Fleischer = Descemet\'s + Wilson\'s disease. Fleischer = epithelium + keratoconus.',
        },
        {
          kind: 'fact',
          content: 'Basal cell carcinoma is the MOST COMMON MALIGNANT tumor of the eyelids. It does NOT metastasize. The most common benign orbital tumor is hemangioma. The most common malignant orbital tumor is rhabdomyosarcoma (in male children, affects EOM).',
          highlight: 'Eyelid: BCC = most common malignant; Orbit: hemangioma = benign; rhabdomyosarcoma = malignant',
        },
        {
          kind: 'fact',
          content: 'Chalazion is CHRONIC, PAINLESS, caused by Meibomian gland duct obstruction, and the mass is FIXED TO THE TARSUS. Hordeolum (stye) is ACUTE, PAINFUL, caused by Staphylococcus aureus in Zeis/Moll glands, and the mass is MOVABLE. Chalazion causes astigmatism by pressing on the cornea.',
          highlight: 'Chalazion = chronic, painless, fixed, Meibomian, causes astigmatism; Hordeolum = acute, painful, movable, Stye',
        },
        {
          kind: 'fact',
          content: 'Acetazolamide (carbonic anhydrase inhibitor) causes MYOPIA as a side effect — it shallows the anterior chamber secondary to ciliary body swelling. Most common side effect is PARESTHESIA (numbness and tingling at mouth and extremities). Also causes nephrolithiasis (kidney stones) and K+ loss.',
          highlight: 'Acetazolamide: most common S/E = paresthesia; also causes myopia (via AC shallowing)',
        },
        {
          kind: 'fact',
          content: 'Glycerol (osmotic agent) is CONTRAINDICATED in diabetes because it causes a transient rise in blood glucose. Isosorbide is the SAFE oral osmotic agent for diabetics. Mannitol is the most commonly used osmotic agent (IV only; large MW stays in blood); it is safe in renal disease. Urea (IV only) is contraindicated in renal disease.',
          highlight: 'Glycerol = C/I in DM; Isosorbide = safe in DM; Mannitol = most used osmotic (IV)',
        },
        {
          kind: 'fact',
          content: 'Argyll-Robertson pupil (prostitute pupil) is BILATERAL and is a highly specific sign of NEUROSYPHILIS (tabes dorsalis). It FAILS TO CONSTRICT TO LIGHT but RETAINS constriction to accommodation and convergence. Caused by interruption of optic nerve path to oculomotor nucleus at pre-rectal nuclei.',
          highlight: 'Argyll-Robertson = bilateral + neurosyphilis + accommodates but does NOT react to light',
        },
        {
          kind: 'fact',
          content: 'Vernal conjunctivitis (VKC) affects MALES under 20, peaks in WARM DRY weather, causes INTOLERABLE ITCHING, and shows COBBLESTONE papillae on the UPPER TARSAL conjunctiva. It can cause shield corneal ulcers. GPC (from contact lens wear) has the SAME PAPILLAE LOCATION but causes NO severe corneal damage and is not seasonal.',
          highlight: 'VKC = cobblestone, male <20, warm weather, shield ulcers; GPC = same location but milder, CL-related',
        },
        {
          kind: 'fact',
          content: 'Trachoma (Chlamydia trachomatis) follicles are at the UPPER tarsal conjunctiva, and pannus forms at the UPPER LIMBUS. Chlamydial inclusion conjunctivitis (adult) has follicles at the INFERIOR palpebral conjunctiva. Drug of choice for trachoma: TETRACYCLINE (topical).',
          highlight: 'Trachoma = upper tarsal follicles + upper limbus pannus; Treatment DOC = tetracycline',
        },
        {
          kind: 'fact',
          content: 'The Pigment Dispersion Syndrome (PDS) triad: (1) Krukenberg spindle (vertical melanin on corneal endothelium), (2) slit-like radial mid-peripheral iris transillumination defects, (3) Sampaolesi\'s line (pigment on trabecular meshwork). Mechanism: iris bows posteriorly, rubs zonules, sheds pigment.',
          highlight: 'PDS triad: Krukenberg spindle + iris transillumination + Sampaolesi\'s line',
        },
        {
          kind: 'fact',
          content: 'Marfan syndrome causes SUPERIOR (upward) lens dislocation. Homocystinuria causes INFERIOR (downward) dislocation. Gene in Marfan = Fibrillin (FBN-1, chromosome 15). Defect in Homocystinuria = Cystathionine beta-synthase deficiency.',
          highlight: 'Marfan = lens UP (fibrillin gene); Homocystinuria = lens DOWN (enzyme deficiency)',
        },
        {
          kind: 'fact',
          content: 'Acute Dacryocystitis sign: REGURGITATION OF PUS on pressure over the lacrimal sac. Chronic dacryocystitis: REGURGITATION OF BLOOD on pressure over the lacrimal sac. Epiphora = tears overflow due to OBSTRUCTION (not overproduction).',
          highlight: 'Acute dacryocystitis = PUS on pressure; Chronic = BLOOD on pressure',
        },
        {
          kind: 'fact',
          content: 'Posterior subcapsular cataract (PSC) is the most common age-related cataract type AND the type caused by steroids. Both affect the POSTERIOR CAPSULE. Diabetic cataract is a bilateral snowflake opacity that can MATURE IN 72 HOURS. Nuclear cataract causes "Second sight" (Senopia) — patient can suddenly read without glasses due to increased lens myopia.',
          highlight: 'PSC = age-related + steroids; Diabetic = snowflake, matures in 72h; Nuclear = Senopia',
        },
        {
          kind: 'fact',
          content: 'MRI is ABSOLUTELY CONTRAINDICATED in patients with ferrous (iron) intraocular foreign bodies. CT scan must be used instead. Siderosis (iron IOFB) causes progressive ERG b-wave attenuation, heterochromia iridis, and anterior capsular cataract with radial iron deposits.',
          highlight: 'Ferrous IOFB = MRI CONTRAINDICATED; use CT; causes siderosis (ERG b-wave attenuation)',
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
          question: 'POAG and PACG — which is treated medically and which surgically?',
          wrong: 'Both are treated medically with eye drops',
          correct: 'POAG = treated MEDICALLY (drops). PACG = treated SURGICALLY (laser iridotomy).',
          why: 'This is the single most heavily tested glaucoma fact. Open angle = chronic = medical management. Closed angle = emergency = surgical because the drainage angle is physically blocked by the iris and must be relieved urgently.',
        },
        {
          kind: 'trap',
          question: 'Glycerol or Isosorbide — which osmotic agent is safe in diabetes?',
          wrong: 'Glycerol, because it is commonly used',
          correct: 'Isosorbide is SAFE in DM. Glycerol is CONTRAINDICATED in DM (causes transient rise in blood glucose).',
          why: 'Both are oral osmotic agents. The key: Glycerol is metabolized to glucose, which is dangerous in diabetics. Isosorbide is not metabolized to glucose and is the safe alternative. Mannitol and Urea are both IV only.',
        },
        {
          kind: 'trap',
          question: 'In the corneal pigment lines, which is the earliest sign of keratoconus?',
          wrong: 'Munson sign',
          correct: 'FLEISCHER RING is the earliest sign of keratoconus — iron pigmentation (hemosiderin) at the base of the cone; circular; best seen with cobalt blue light.',
          why: 'Munson sign (corneal cone visible when looking from behind the patient over the eyebrow) is a clinical sign but appears later. Fleischer ring is the very first detectable finding. Both are iron deposits — Fleischer at the epithelium.',
        },
        {
          kind: 'trap',
          question: 'Kayser-Fleischer ring and Fleischer ring — same or different?',
          wrong: 'Both are iron deposits at the epithelium associated with keratoconus',
          correct: 'Completely different. Fleischer ring = iron at EPITHELIUM = keratoconus. Kayser-Fleischer = COPPER at DESCEMET\'S MEMBRANE = Wilson\'s disease.',
          why: 'These two rings are classic board traps because of their similar names. Fleischer is iron, superficial, pathological for keratoconus. Kayser-Fleischer is copper, in the deepest corneal layer, pathological for Wilson\'s disease. Entirely different pigment, layer, and disease.',
        },
        {
          kind: 'trap',
          question: 'Ciliary injection responds to topical epinephrine 1:1000 — True or False?',
          wrong: 'True — both injection types respond to epinephrine',
          correct: 'FALSE. Conjunctival injection DOES respond (vessels constrict). Ciliary injection does NOT respond to epinephrine. Ciliary injection also does NOT move when the conjunctiva is pressed. These two findings always mean serious underlying pathology.',
          why: 'The board loves this distinction. Ciliary injection = keratitis, uveitis, glaucoma. Conjunctival injection = conjunctivitis. The two key physical test differences are: (1) moves with conjunctiva pressure (conjunctival yes, ciliary no) and (2) responds to 1:1000 epinephrine (conjunctival yes, ciliary no).',
        },
        {
          kind: 'trap',
          question: 'Adie\'s tonic pupil: it accommodates but doesn\'t react to light. Is it the same as Argyll-Robertson pupil?',
          wrong: 'Yes, both are the same type of pupil disorder',
          correct: 'NO. Both "accommodate but do not react" to light, but they are entirely different: Adie\'s = UNILATERAL, benign peripheral neuropathy, ciliary ganglion damage, responsive to 0.1% Pilocarpine. Argyll-Robertson = BILATERAL, neurosyphilis (tabes dorsalis), central pathway damage.',
          why: 'Both pupils share the same functional description (accommodates but does not react to light) but differ in cause, laterality, and mechanism. Argyll-Robertson is a highly specific sign of neurosyphilis. Adie\'s is a benign condition. On the exam: bilateral = Argyll-Robertson; unilateral = Adie\'s.',
        },
        {
          kind: 'trap',
          question: 'Rubeosis iridis and Iris Bombe — do both cause closed angle glaucoma with pupillary block?',
          wrong: 'Yes, both cause secondary closed angle glaucoma with pupillary block',
          correct: 'NO. Rubeosis iridis causes closed angle glaucoma WITHOUT pupillary block (neovascularization blocks the trabecular angle). Iris Bombe causes closed angle glaucoma WITH pupillary block (iris adheres to lens).',
          why: 'Both conditions cause secondary closed angle glaucoma, but the mechanism and presence of pupillary block differ completely. Rubeosis = new vessels physically block the drain. Iris Bombe = iris is stuck to the lens, blocking the pupil. This distinction determines the surgical approach.',
        },
        {
          kind: 'trap',
          question: 'Phacolytic glaucoma — is it open or closed angle?',
          wrong: 'Closed angle — the swollen lens pushes the iris forward',
          correct: 'OPEN ANGLE. Phacolytic = protein LEAKS from a hypermature cataract. Macrophages engulf the leaked protein and clog the trabecular meshwork, causing OPEN angle glaucoma. PHAcomorphic (swollen lens) is the CLOSED angle type.',
          why: 'The 3 PHAs: PHAcomorphic = CLOSED (swollen lens); PHAcolytic = OPEN (protein leak); PHAcogenic = OPEN (capsule rupture). The exam consistently tests this distinction. "Morphic" = swollen lens physically pushing iris forward = closed. "Lytic" = protein escaping = trabecular clog = open.',
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
          prompt: 'Name the 4 iron corneal pigment lines, their shapes, and what each is associated with.',
          answer: '1. Hudson-Stahli = horizontal = normal aging (>50 years). 2. Fleischer ring = circular at cone base = keratoconus (earliest sign). 3. Ferry line = horizontal = filtering bleb (glaucoma surgery). 4. Stocker line = vertical arc = pterygium. All iron lines sit in the EPITHELIUM.',
        },
        {
          kind: 'recall',
          prompt: 'What are the 5 differences between Hordeolum and Chalazion?',
          answer: '1. Onset: Hordeolum = ACUTE; Chalazion = CHRONIC. 2. Pain: Hordeolum = PAINFUL; Chalazion = PAINLESS. 3. Gland: Hordeolum = Zeis & Moll; Chalazion = Meibomian. 4. Cause: Hordeolum = Staphylococcus; Chalazion = duct obstruction. 5. Mass: Hordeolum = MOVABLE; Chalazion = FIXED to tarsus (causes astigmatism).',
        },
        {
          kind: 'recall',
          prompt: 'List the 4 trachoma stages and the key finding of each.',
          answer: 'Stage I (Insidious) — minute follicles at UPPER tarsal conjunctiva. Stage II (Acute) — intense inflammation, profuse purulent discharge, ptosis. Stage III (Cicatricial) — scar tissue, papillae and follicles disappear. Stage IV (Healed) — scars remain, infiltration gone. Drug of choice = tetracycline (topical).',
        },
        {
          kind: 'recall',
          prompt: 'What are the 3 signs of Pigment Dispersion Syndrome (PDS)?',
          answer: '1. Krukenberg spindle — vertical melanin deposit on corneal ENDOTHELIUM. 2. Slit-like, radial, mid-peripheral iris transillumination defects. 3. Sampaolesi\'s line — pigment on trabecular meshwork causing ocular hypertension. Mechanism: iris bows posteriorly, rubs on lens zonules, pigment is shed.',
        },
        {
          kind: 'recall',
          prompt: 'Differentiate POAG from PACG across 6 features.',
          answer: '1. Onset: POAG = gradual/painless; PACG = sudden/painful. 2. Angle: POAG = open (trabecular blockage); PACG = closed (iris blocks meshwork). 3. Vision: POAG = peripheral loss first; PACG = blurred + halos. 4. Pupil: POAG = normal; PACG = mid-dilated, non-reactive. 5. Cornea: POAG = normal; PACG = edematous, cloudy. 6. Treatment: POAG = medical; PACG = surgical (laser iridotomy).',
        },
        {
          kind: 'recall',
          prompt: 'Name the osmotic anti-glaucoma agents. Which is contraindicated in DM? Which is safe in DM? Which is contraindicated in renal disease?',
          answer: 'Glycerol (oral) — C/I in DM (raises blood glucose). Isosorbide (oral) — SAFE in DM. Mannitol (IV only) — most commonly used; large MW stays in blood; safe in renal disease. Urea (IV only) — C/I in renal disease.',
        },
        {
          kind: 'recall',
          prompt: 'What are the 3 types of cataract caused by the most common triggers? Where does each opacity sit?',
          answer: '1. Age-related / Steroid-induced = Posterior Subcapsular (PSC) — posterior capsule. PSC is most common age-related type. 2. Diabetic = Snowflake — anterior + posterior subcapsular; bilateral; matures in 72 hours. 3. Traumatic = Rosette-shaped — at PSC or rosette shape; from contusion or capsule rupture.',
        },
        {
          kind: 'recall',
          prompt: 'Which direction does the lens dislocate in Marfan syndrome vs Homocystinuria? What is the gene/defect in each?',
          answer: 'Marfan = lens dislocates SUPERIORLY (up). Gene = Fibrillin (FBN-1, chromosome 15). Homocystinuria = lens dislocates INFERIORLY (down). Defect = Cystathionine beta-synthase deficiency. Weill-Marchesani = spherical (spherophakia), variable direction, high refractive power, myopia.',
        },
        {
          kind: 'recall',
          prompt: 'Describe the ECAL-CILR ageing sequence — what changes in each structure and its consequence?',
          answer: 'E = Eyelids (elasticity lost → entropion/ectropion/ptosis). C = Conjunctiva (goblet cells decrease → dry eye, pinguecula). A = Anterior chamber (shallows 3.6→3.0 mm → PACG risk). L = Lens (enlarges/stiffens → presbyopia, nuclear cataract). C = Ciliary body (thickens; AH decreases 25%/decade). I = Iris (thins → senile miosis). L = vitreous Liquefies (syneresis → floaters). R = Retina (RNFL thins 20-30% → ARMD, reduced contrast).',
        },
        {
          kind: 'recall',
          prompt: 'What are the 3 conditions that "accommodate but do not react to light"? How do you differentiate them?',
          answer: 'Adie\'s tonic pupil: UNILATERAL; benign peripheral neuropathy; ciliary ganglion damage; responds to 0.1% pilocarpine (normal pupil needs 0.5-1.0%). Argyll-Robertson: BILATERAL; neurosyphilis (tabes dorsalis); central pathway damage; highly specific for neurosyphilis. RAPD (Marcus Gunn): different — the affected pupil DILATES when light swings from the normal eye; indicates optic nerve or severe retinal disease.',
        },
        {
          kind: 'recall',
          prompt: 'What are the signs of an orbital blow-out fracture?',
          answer: '1. Periocular ecchymosis and edema. 2. Infraorbital nerve anesthesia (lower lid, cheek, upper lip, upper teeth numb). 3. Diplopia (from muscle hemorrhage/edema or inferior rectus/oblique entrapment). 4. Enophthalmos (may be delayed as edema resolves). Patient must NOT blow nose. Diagnose with CT coronal sections.',
        },
        {
          kind: 'recall',
          prompt: 'What is "Senopia" / "Second Sight"? Which cataract type causes it? Is it a true improvement?',
          answer: 'Senopia = patient can suddenly read without glasses again. Caused by NUCLEAR SCLEROSIS (nuclear cataract) — the increasing lens density increases lens power, causing increasing myopia. The patient becomes more myopic and can temporarily read without near-add glasses. It is NOT an improvement — it is a sign of progressive nuclear sclerosis.',
        },
      ],
    },
  ],
}
