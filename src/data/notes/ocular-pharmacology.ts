import { NotesData } from '@/lib/notes-types'

export const ocularPharmacologyNotes: NotesData = {
  subject: 'Ocular Pharmacology',
  slug: 'ocular-pharmacology',
  sections: [
    {
      id: 'drug-delivery',
      title: 'Ocular Drug Delivery',
      blocks: [
        {
          kind: 'diagram',
          id: 'op-drug-delivery',
        },
        {
          kind: 'text',
          content: 'Ocular pharmacology deals with the effects of drugs on the eye and its appendages. Drug delivery route determines concentration achieved at the target tissue, onset of action, and side-effect profile.',
        },
        {
          kind: 'sub',
          title: 'Routes of Administration',
          blocks: [
            {
              kind: 'table',
              headers: ['Route', 'Target Structures', 'Notes'],
              rows: [
                ['Topical (drops, ointment, gel)', 'Cornea, conjunctiva, ciliary body, anterior segment', 'Most common; systemic route cannot reach anterior segment due to blood-aqueous barrier'],
                ['Subconjunctival injection', 'Beneath bulbar conjunctiva', 'Delivers greater drug concentration than topical'],
                ['Sub-Tenon injection (anterior/posterior)', 'Between sclera and Tenon\'s capsule', 'Posterior sub-Tenon reaches retrobulbar space'],
                ['Retrobulbar injection', 'Behind globe (muscle cone apex)', 'Used for anesthetic agents'],
                ['Intracameral injection', 'Anterior aqueous chamber', 'Used for endophthalmitis treatment'],
                ['Intravitreal injection', 'Vitreous chamber', 'Used for retinal detachment, anti-VEGF'],
                ['Oral/IV (systemic)', 'All vascular structures', 'Acetazolamide, mannitol, IV antibiotics, fluorescein angiography'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Systemic routes do NOT penetrate the anterior segment due to the blood-aqueous barrier. Topical administration achieves higher concentration in the anterior segment than systemic dosing.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood-Ocular Barriers',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Blood-Aqueous Barrier — between capillary of ciliary body and iris epithelium. Lowered by trauma, drugs (echothiophate), chemical, and inflammation.',
                'Blood-Retinal Barrier — between capillary (choriocapillary) of retina and RPE.',
                'Retinal and iris capillaries are non-fenestrated; choroid and ciliary body capillaries are fenestrated, allowing diffusion of non-lipophilic substances.',
                'Tight junctions (zonulae occludens) between RPE and non-pigment epithelium of ciliary body.',
                'Damage to tight junctions (mechanical, chemical, BAK wetting agent) enhances corneal penetration.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Topical Preparations',
          blocks: [
            {
              kind: 'table',
              headers: ['Formulation', 'Key Feature', 'Example'],
              rows: [
                ['Aqueous solution', 'Dissolved in liquid medium; most common', 'Timolol eye drops'],
                ['Oily solution', 'For drugs rapidly destroyed by water', 'DFP (diisopropyl fluorophosphate)'],
                ['Suspension', 'Drug not readily dissolved; must be shaken', 'Prednisolone acetate'],
                ['Gel', 'Increases contact time; blurs vision', 'Pilocarpine 4% gel, Timolol gel'],
                ['Ointment', 'Lipid-soluble semisolid; melts on contact; prolongs action', 'Maxitrol, erythromycin ointment'],
                ['Cream', 'Water-miscible; applied to eyelid SKIN only, not cul-de-sac', 'Betamethasone cream'],
                ['Therapeutic soft contact lens', 'Drug reservoir; increases contact time', 'Drug-soaked SCL'],
                ['Collagen shields', 'Dissolves slowly, high initial drug concentration', 'Post-op drug delivery'],
                ['Ocusert', 'Ovoid hydrophilic plastic device releasing drug slowly', 'Pilo20 (20 mcg/hr for 7 days)'],
                ['Drug-impregnated paper strip', 'Single-use, sterile; prevents Pseudomonas contamination', 'Fluorescein strips'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pharmaceutical Characteristics',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'pH: Ophthalmic solutions with pH <6.6 or >7.8 cause discomfort. Buffering agents include boric acid salts (most common), citric acid salts, phosphoric acid salts, acetic acid salts.',
                'Tonicity: Solutions should be isotonic (0.9% NaCl). Eye tolerates 0.6–1.8% NaCl. Hypotonic solutions enhance corneal penetration but can damage corneal endothelium. 5% NaCl reduces corneal edema; >10% NaCl causes permanent damage.',
                'Viscosity agents: Added to increase contact time in cul-de-sac, improving drug absorption (e.g., methylcellulose 1–4%, polyvinyl alcohol 1.4%, carboxymethylcellulose CMC).',
                'Preservatives are added to prevent microbial contamination. Two classes: bacteriostatic (inhibit growth, e.g., thimerosal) and bactericidal (kill directly, e.g., benzalkonium chloride BAK).',
                'BAK (benzalkonium chloride): cationic surfactant and wetting agent that enhances corneal penetration of lipid-insoluble drugs (e.g., carbachol). Also acts as bactericidal preservative.',
                'Thimerosal (mercuric compound): bacteriostatic; side effects include allergic reactions and band keratopathy.',
                'EDTA (edetic acid): antioxidant preservative; chelates bivalent cations; enhances other preservatives.',
              ],
            },
            {
              kind: 'pearl',
              content: 'Drug cap colors are board-tested: Mydriatics/cycloplegics = RED. Beta blockers = YELLOW/BLUE. Miotics = GREEN. NSAIDs = GRAY. Anti-infectives = BROWN/TAN. Corticosteroids = PINK. Adrenergics = PURPLE. CAIs = ORANGE. Prostaglandin analogs = TURQUOISE.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Viscoelastic Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Agent', 'Properties', 'Uses'],
              rows: [
                ['Sodium hyaluronate (Na hyaluronate)', 'High MW, high viscosity, non-allergenic; natural shock absorber in vitreous/AH', 'Surgical aid in ECCE/IOL, keratoplasty, glaucoma surgery, vitreous replacement, artificial tears (1:10 dilution), severe KCS'],
                ['Chondroitin sulfate', 'Medium MW polysaccharide found in cornea; combined with Na hyaluronate (Healon/Viscoat)', 'Same as Na hyaluronate; excellent coating of endothelium and lens implant'],
                ['Hydroxypropyl methylcellulose (HPMC) 2%', 'Low viscosity; very adherent to lens implant — NOT used intraocularly', 'Artificial tears, lubricant for moderate to severe dry eye, decreases corneal sensitivity, recurrent corneal erosions'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Dyes and Staining Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Dye', 'What It Stains', 'Key Facts', 'Antimicrobial'],
              rows: [
                ['Fluorescein (strip/IV)', 'Corneal epithelial defects (bright green)', 'Peak absorption 465–490 nm; peak emission 520–530 nm; Seidel test; promotes Pseudomonas growth; stains soft CLs; do NOT use with SCLs', 'None'],
                ['Fluorexon', 'Large epithelial defects, devitalized cells, mucus', 'High MW (710); does NOT stain most soft CLs; safe with SCLs', 'None'],
                ['Rose Bengal 1–2%', 'Devitalized cells, mucus (brilliant red)', 'Stains nucleus > cytoplasm; use BEFORE fluorescein; antiviral property; diagnoses KCS, Herpes, Sjogren\'s', 'Antiviral'],
                ['Indocyanine Green (ICG) 1%', 'Diseased/dead endothelial cells', 'IV use; peak absorption 805 nm; peak fluorescence 835 nm (infrared); best for choroidal neovascular membranes', 'None'],
                ['Lissamine Green 1%', 'Devitalized cells, mucus', 'MW 576.6; antiviral at 0.06%; screens for vitamin A deficiency/xerophthalmia; no S/E but longer staining', 'Antiviral'],
                ['Methylene Blue 5%', 'Devitalized cells, mucus, corneal nerve tissue', 'Bacteriostatic; peak absorption 660 nm; stains 1 day; irrigation prior to DCR; more eye irritation', 'Antibacterial'],
                ['Trypan Blue 0.1%', 'Devitalized cells', 'Anionic dye; stains anterior capsule during capsulorhexis in phaco; indicator of corneal endothelial integrity', 'None'],
                ['Argyrol 10–20%', 'Mucus/debris on lids', 'Pre-op scrub adequacy indicator; excellent for surgical prep', 'None'],
                ['Alcian Blue 1%', 'Mucous deposits (stained blue)', 'Differentiates mucous from diseased cells (unstained)', 'None'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Rose Bengal must be used BEFORE fluorescein (anesthetic can destroy cells causing false-positive KCS results if used together). Fluorescein promotes Pseudomonas growth — always use single-use paper strips. IV fluorescein for angiography; IV ICG for choroidal neovascular membranes (ICG has larger wavelength, penetrates better).',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Chelating Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Agent', 'Binds', 'Use'],
              rows: [
                ['EDTA', 'Calcium, Lead, Magnesium, Zinc', 'Band keratopathy (removes calcium from Bowman\'s), preservative (bacteriostatic), inhibits collagenase in ulcerated cornea'],
                ['Deferoxamine 10%', 'Ferric ions (Fe3+)', 'Removal of corneal metallic rust stains (siderosis), NOT iron from hemoglobin'],
                ['Penicillamine', 'Copper (Cu), Pb, Zn, Hg', 'Copper deposits (chalcosis) in Wilson\'s disease, gold deposits (chrysiasis)'],
                ['BAL 5% (British AntiLewisite)', 'Arsenic', 'Arsenic poisoning, war gas casualties'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'diagnostic-agents',
      title: 'Diagnostic Agents',
      blocks: [
        {
          kind: 'text',
          content: 'Diagnostic pharmaceutical agents (DPAs) approved for optometric use include mydriatics, cycloplegics, local anesthetics, and diagnostic dyes. These are used to assess refractive status, pupillary reflexes, anterior and posterior segments, and IOP.',
        },
        {
          kind: 'sub',
          title: 'Cycloplegic Agents — Comparison',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Mydriasis Onset', 'Cycloplegia Onset', 'Duration', 'Strength (rank)'],
              rows: [
                ['Atropine 0.5–1–2–3%', '30 min', '1 hr', '14 days', '1st (strongest)'],
                ['Scopolamine 0.25%', '40 min', '40 min', '24 hrs', '2nd'],
                ['Homatropine 2%, 5%', '30 min', '30–90 min', '6 hrs–4 days', '3rd'],
                ['Cyclopentolate 0.5–1–2%', '15–30 min', '15–45 min', '6–24 hrs', '4th — DOC for routine cycloplegia'],
                ['Tropicamide 0.5–1%', '20–30 min', '20–25 min', '4–6 hrs', '5th (weakest) — DOC for routine mydriasis'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Mnemonic for cycloplegic strength: "All Snakes Have Cute Tails" = Atropine > Scopolamine > Homatropine > Cyclopentolate > Tropicamide. Tropicamide is the most commonly used mydriatic. Cyclopentolate is the DOC for routine cycloplegia. Atropine is the DOC for uveitis, young children, and amblyopia penalization.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Individual Cycloplegic/Mydriatic Profiles',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Atropine (ATROPAL): from Atropa belladonna; prototype and longest-acting; DOC for uveitis, amblyopia penalization, cycloplegic refraction in young children; Tx of poisoning = 1–4 mg physostigmine IV. Systemic toxicity: "Mad as a hatter, red as a beet, dry as a bone, blind as a bat, hot as a hare."',
                'Scopolamine 0.25%: from Scopolia carmolica; used for iridocyclitis; causes somnolence, visual hallucination.',
                'Homatropine (2%, 5%): primary use = iridocyclitis; also for mild-moderate uveitis and axial lenticular opacities.',
                'Cyclopentolate (0.5%, 1%, 2%): DOC for routine cycloplegia; combined with phenylephrine for resistant pupils. CNS side effects with 2% in children: drowsiness, disorientation, visual hallucination, psychosis, seizures. Use 0.5–1% to prevent CNS effects; do punctal occlusion.',
                'Tropicamide (MYDRIACYL): most commonly used mydriatic and cycloplegic; synthetic, non-ionized lipophilic form; weak cycloplegic; DOC for routine mydriasis. Safe in HPN, angina, CVD patients (no vasopressor effect).',
                'Reverse mydriasis of tropicamide: 2% pilocarpine or 0.5% dapiprazole (alpha-1 blocker); reversal within 90 minutes.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Approved DPAs for Optometry (5)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Mydriatic without cycloplegia: 2.5% Phenylephrine',
                'Mydriatic with cycloplegia: 0.5% Tropicamide, 0.5% Cyclopentolate',
                'Local anesthetic: 0.5% Proparacaine (ester type), 0.4% Benoxinate (ester type)',
                'Diagnostic dye: Fluorescein strip',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Local Anesthetics',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Type', 'Notes'],
              rows: [
                ['Proparacaine 0.5%', 'Ester', 'Most common topical ophthalmic anesthetic; DOC for tonometry'],
                ['Benoxinate 0.4%', 'Ester', 'Used in Fluress (combined with fluorescein 0.25%)'],
                ['Oxybuprocaine', 'Ester', 'Alternative topical anesthetic'],
                ['Tetracaine', 'Ester', 'Longer duration than proparacaine'],
                ['Cocaine 4%', 'Natural ester + ISA', 'Indirect sympathomimetic; used for Horner\'s syndrome testing; blocks NE reuptake'],
              ],
            },
            {
              kind: 'pearl',
              content: 'All approved topical ophthalmic anesthetics are ESTER-type. Fluress = 0.25% fluorescein + 0.4% benoxinate + 1% chlorobutanol + 0.1% EDTA + boric acid. Vasovagal responses (syncope, grand mal seizure) are rare but known S/E of Fluress during applanation tonometry.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Botulinum Toxin A',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Neurotoxin from Clostridium botulinum; reconstituted solution for injection.',
                'MOA: blocks release of ACh at neuromuscular junction by inhibiting calcium at synaptic cleft → paralysis of EOM and periocular muscle for ~3 months.',
                'Maximum effect at 1–2 weeks; lasts 2–6 months.',
                'Uses: strabismus treatment, blepharospasm, hemifacial spasm, lid retraction in Grave\'s ophthalmopathy, spastic entropion, myokymia.',
                'S/E: ptosis, diplopia, exposure keratopathy, subconjunctival hemorrhage.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'antiglaucoma',
      title: 'Anti-Glaucoma Drugs',
      blocks: [
        {
          kind: 'diagram',
          id: 'op-antiglaucoma',
        },
        {
          kind: 'text',
          content: 'Glaucoma is defined as intraocular pressure (IOP) >21 mmHg. Normal IOP = 10–21 mmHg (fluctuates 2–5 mmHg daily). Anti-glaucoma therapy aims to either decrease aqueous humor (AH) secretion or enhance AH outflow at the trabecular (80%) or uveo-scleral (10–20%) pathways.',
        },
        {
          kind: 'sub',
          title: 'Prostaglandin Analogs',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Concentration', 'Brand'],
              rows: [
                ['Latanoprost', '0.005%', 'Xalatan'],
                ['Travoprost', '0.004%', 'Travatan'],
                ['Bimatoprost', '0.03%', 'Lumigan'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'MOA: increase uveo-scleral outflow.',
                'Cap color: TURQUOISE.',
                'First-line treatment for open-angle glaucoma due to once-daily dosing and minimal systemic effects.',
                'Ocular S/E: heterochromia (increased iris brown pigmentation), increased eyelash length/number, darkening of eyelashes and eyelids, eye redness/discomfort/itching, dry eyes, tearing, eyelid crusting, increased photosensitivity, blurred vision.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Beta-Blockers',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Selectivity', 'ISA', 'MSA', 'Notes'],
              rows: [
                ['Timolol 0.25–0.5%', 'Non-selective', 'No', 'No', 'Prototype; IOP decrease in 30–60 min; cap YELLOW/BLUE'],
                ['Levobunolol 0.25–0.5%', 'Non-selective', 'Mild', 'Mild', 'More lipophilic'],
                ['Metipranolol 0.3%', 'Non-selective', 'No', 'No', 'Newest non-selective'],
                ['Carteolol 1%', 'Non-selective', 'Partial', 'No', 'Partial beta-receptor agonist'],
                ['Betaxolol 0.25–0.5%', 'Beta-1 selective (cardioselective)', 'No', 'No', 'More lipophilic; safe in asthma, COPD, DM'],
                ['Metoprolol 0.1%', 'Beta-1 selective', 'No', 'No', 'Combined with pilocarpine 2%'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'MOA: inhibit adenylate cyclase → decrease AH secretion.',
                'Uses: primary/secondary open-angle glaucoma, angle-closure glaucoma, congenital glaucoma.',
                'C/I for non-selective: bronchial asthma, COPD, DM (masking hypoglycemia).',
                'Cardioselective (betaxolol, metoprolol) are safe in asthma/COPD/DM patients.',
                'Systemic S/E: bronchoconstriction (non-selective), cardiac failure, hypoglycemia (non-selective), bradycardia, hypotension (most common).',
                'Combination: Timolol + pilocarpine, Timolol + acetazolamide, Timolol + dipivefrin.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Carbonic Anhydrase Inhibitors (CAIs)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Route', 'Notes'],
              rows: [
                ['Acetazolamide 250 mg q4h', 'Oral', 'Most commonly used; S/E: paresthesia (most common), nephrolithiasis, K+ loss, myopia, blood dyscrasia (aplastic anemia), metabolic acidosis'],
                ['Methazolamide', 'Oral', 'Less effective'],
                ['Ethozolamide', 'Oral', '—'],
                ['Dichlorphenamide', 'Oral', '—'],
                ['Brinzolamide 1%', 'Topical', 'Ophthalmic CAI'],
                ['Dorzolamide 2%', 'Topical', 'Combined with timolol for enhanced effect'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'MOA: inhibit carbonic anhydrase → reduce HCO3 transport and Na+ → decrease AH secretion.',
                'Produces synergistic effect with miotics.',
                'C/I: adrenal insufficiency (Addison\'s), kidney/liver disease, hyperchloremic acidosis, severe COPD.',
                'Most common S/E: paresthesia — numbness and tingling at mouth and extremities.',
                'Cap color: ORANGE.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Alpha-2 Agonists',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Apraclonidine 0.5–1%: clonidine derivative; partial selective alpha agonist (A1 and A2); no MSA; lowers IOP even during sleep without affecting BP or PR. Use: lowers IOP after argon laser trabeculoplasty, iridotomy, YAG laser capsulotomy. S/E: mild mydriasis, lid retraction, conjunctival bleaching.',
                'Brimonidine 0.2–0.5%: very selective alpha-2 agonist (newest); lowers IOP by decreasing AH secretion and increasing uveo-scleral outflow.',
                'Clonidine: very selective alpha-2 agonist with MSA; lowers BP systemically.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Miotics (Cholinergic Agents)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Pilocarpine (0.25–10%): onset 2 hrs, duration 8 hrs. MOA: contracts Brucke\'s muscle → opens trabecular. Uses: open-angle and angle-closure glaucoma, counter mydriatic effect, Adie\'s pupil diagnosis (0.1%). C/I: malignant glaucoma.',
                'Carbachol (0.75–3%): not hydrolyzed by AChE; combined with BAK for poor corneal penetration; use for pilocarpine-resistant cases and post-cataract miosis. Cap color: GREEN.',
                'Physostigmine 0.25–0.5% (carbamyl ester — reversible): lowers IOP; treats pediculosis of eyelids. Antidote: atropine 2 mg IV q5 min.',
                'Echothiophate (organophosphorus — irreversible): long-acting; used for accommodative esotropia. S/E: iris cysts (reversed by 2.5% phenylephrine).',
                'DFP (diisopropylfluorophosphate — irreversible): used for aphakic glaucoma, accommodative esotropia, pediculosis.',
                'C/I for all miotics: cataract, age <40 years, neovascular/uveitis glaucoma, retinal detachment, bronchial asthma.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Osmotherapy Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Route', 'Notes'],
              rows: [
                ['Glycerin', 'Oral', 'Onset 10 min (peak 30 min); duration 5 hrs; C/I in DM (metabolized to glucose)'],
                ['Isosorbide', 'Oral', 'Safe in DM — not metabolized to glucose; onset 1–3 hrs; duration 3–5 hrs'],
                ['Mannitol', 'IV slow infusion', 'Most commonly used; large MW stays in blood; also for cerebral edema'],
                ['Urea', 'IV only', 'C/I in renal disease'],
                ['Glycerol, ascorbate, sucrose', 'Various', 'For corneal edema'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'MOA: enhance reabsorption of AH in uveal vasculature by creating osmotic gradient, decreasing AH secretion.',
                'Uses: angle-closure glaucoma, pre-operative IOP reduction, cerebral edema (mannitol), corneal edema.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-Glaucoma Drug Summary Table',
          blocks: [
            {
              kind: 'table',
              headers: ['Class', 'Drugs', 'MOA', 'Cap Color'],
              rows: [
                ['Prostaglandin analogs', 'Latanoprost, travoprost, bimatoprost', 'Increase uveo-scleral outflow', 'Turquoise'],
                ['Beta-blockers (non-selective)', 'Timolol, levobunolol, metipranolol, carteolol', 'Decrease AH secretion', 'Yellow/Blue'],
                ['Beta-blockers (selective)', 'Betaxolol, metoprolol', 'Decrease AH secretion', 'Yellow/Blue'],
                ['CAIs (oral)', 'Acetazolamide, methazolamide', 'Decrease AH secretion', 'Orange'],
                ['CAIs (topical)', 'Brinzolamide, dorzolamide', 'Decrease AH secretion', 'Orange'],
                ['Alpha-2 agonists', 'Brimonidine, apraclonidine', 'Decrease AH + increase uveo-scleral', 'Purple'],
                ['Miotics (direct)', 'Pilocarpine, carbachol, ACh', 'Increase trabecular outflow', 'Green'],
                ['Miotics (indirect)', 'Physostigmine, echothiophate, DFP', 'Increase trabecular outflow', 'Green'],
                ['Osmotherapy', 'Mannitol, glycerin, isosorbide', 'Osmotic gradient reduces AH', '—'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'autonomic-drugs',
      title: 'Autonomic Drugs in Ophthalmology',
      blocks: [
        {
          kind: 'diagram',
          id: 'op-autonomic-eye',
        },
        {
          kind: 'text',
          content: 'The autonomic nervous system (ANS) controls most involuntary ocular functions. Sympathetic stimulation causes mydriasis, lid retraction, and vasoconstriction. Parasympathetic stimulation causes miosis, accommodation, and increased AH outflow.',
        },
        {
          kind: 'sub',
          title: 'Ocular Adrenergic Receptors and Effects',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Receptor', 'Effect'],
              rows: [
                ['Iris dilator pupillae', 'Alpha-1', 'Mydriasis (contraction)'],
                ['Trabecular meshwork', 'Alpha-1', 'Opens trabecula directly'],
                ['Conjunctival vessels', 'Alpha-1', 'Vasoconstriction'],
                ['Ciliary process', 'Alpha-2', 'Decrease AH secretion (inhibitory)'],
                ['Ciliary process', 'Beta-2', 'Increase AH secretion (excitatory)'],
                ['Ciliary muscles', 'Beta-2', 'Relax'],
                ['Mueller\'s muscle (eyelids)', 'Alpha-1', 'Contraction → lid retraction'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Sympathomimetic Agents (Adrenergic Agonists)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Phenylephrine 0.12%, 2.5%, 10%: selective direct alpha-1 agonist. 0.12% = decongestant; 2.5–10% = mydriasis. Onset 20–90 min; max dilation 45–60 min; duration 3–8 hrs. Uses: Horner\'s syndrome (1%), break posterior synechiae (with atropine), conjunctival injection, fundoscopy mydriasis, prevent iris cysts from echothiophate/DFP.',
                'Epinephrine 0.5–1–2%: non-selective; acts on alpha-1 (opens trabecula), alpha-2 (decreases AH), beta-2 (increases AH). C/I: angle-closure glaucoma, aphakic eye (CME), CVD, DM, hyperthyroidism. Ocular S/E: adrenochrome deposits on cornea/conjunctiva, cystoid macular edema in aphakia.',
                'Dipivefrin (dipivalyl epinephrine): prodrug; converted to epinephrine by esterase; more lipophilic; fewer side effects than epinephrine.',
                'Apraclonidine 0.5–1%: alpha-1 and alpha-2 agonist; no MSA; does not affect BP/PR; used post-laser to prevent IOP spike.',
                'Brimonidine 0.2–0.5%: selective alpha-2 agonist; decreases AH secretion and increases uveo-scleral outflow.',
                'Hydroxyamphetamine 1%: indirect sympathomimetic; enhances NE release; distinguishes central/preganglionic (dilates) vs. postganglionic (does NOT dilate) Horner\'s.',
                'Cocaine 4%: indirect sympathomimetic + local anesthetic; blocks NE reuptake; used in Horner\'s syndrome test (affected eye fails to dilate in ALL lesion levels).',
                'Ocular decongestants: Naphazoline 0.025–1%, tetrahydrozoline 0.05%, oxymetazoline 0.025% — alpha-1 agonists; conjunctival vasoconstrictors.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Adrenergic Antagonists (Sympatholytics)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Dapiprazole 0.5% (REV-EYES): selective alpha-1 blocker; reverses mydriasis of phenylephrine and tropicamide (2 drops + 2 drops 5 min later). S/E: conjunctival injection, chemosis, lid edema, pruritus.',
                'Thymoxamine 0.5–1%: orphan drug; alpha-1 blocker; reverses 2.5% phenylephrine mydriasis; used to differentiate glaucoma types (angle-closure → widens angle/lowers IOP; open-angle → widens angle but IOP stays elevated); reduces lid retraction in Grave\'s disease.',
                'Non-selective alpha blockers (systemic uses — HPN, BPH, pheochromocytoma): phenoxybenzamine, phentolamine, prazosin, terazosin, doxazosin.',
                'Alpha-2 blocker: yohimbine — no ocular preparation.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Cholinergic Agonists (Parasympathomimetics)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Class', 'Notes'],
              rows: [
                ['Acetylcholine 1% (intracameral)', 'Direct-acting choline ester', 'Quickly destroyed by AChE; used for post-cataract miosis only'],
                ['Methacholine 2.5%', 'Direct-acting choline ester', 'More resistant to AChE; diagnosis of Adie\'s pupil (tonic pupil)'],
                ['Carbachol 0.75–3%', 'Direct-acting choline ester', 'Not hydrolyzed by AChE; enhanced by BAK (poor corneal penetration); powerful miotic; glaucoma + post-cataract'],
                ['Pilocarpine 0.25–10%', 'Direct-acting alkaloid', 'DOC for glaucoma; 0.1% for Adie\'s pupil; 0.5–1% for fixed dilated pupils; C/I malignant glaucoma'],
                ['Physostigmine 0.25–0.5%', 'Indirect (reversible carbamyl ester AChE inhibitor)', 'Open-angle glaucoma, synechial glaucoma, pediculosis'],
                ['Echothiophate', 'Indirect (irreversible organophosphate)', 'Accommodative esotropia; long-acting; retinal detachment risk'],
                ['DFP', 'Indirect (irreversible organophosphate)', 'Aphakic glaucoma, accommodative esotropia; 2–4 weeks action'],
                ['Neostigmine', 'Indirect (reversible)', 'DOC for myasthenia gravis'],
                ['Edrophonium', 'Indirect (reversible)', 'Tensilon test — diagnosis of myasthenia gravis'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Cholinergic Antagonists (Parasympatholytics)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Effects: mydriasis + cycloplegia. C/I: angle-closure glaucoma (all mydriatic agents).',
                'Uses: uveitis, synechiae prevention, cycloplegic refraction, ophthalmoscopy, retinal photography, latent hyperopia, accommodative esotropia.',
                'Systemic S/E: decreased GI motility, dry mucous membranes, urinary retention, decreased sweating, tachycardia, bronchodilation.',
                'Muscarinic blockers listed by strength (strongest to weakest): Atropine → Scopolamine → Homatropine → Cyclopentolate → Tropicamide.',
                'Nicotinic blockers: ganglionic blockers (hexamethonium, trimethaphan) and neuromuscular blockers. Non-depolarizing: pancuronium, vecuronium, d-tubocurarine (curare), atracurium. Depolarizing: succinylcholine, decamethonium.',
                'Botulinum toxin A: blocks ACh release at neuromuscular junction; strabismus treatment; blepharospasm.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Horner\'s Syndrome Pharmacological Testing',
          blocks: [
            {
              kind: 'table',
              headers: ['Test Drug', 'MOA', 'Result in Horner\'s', 'Purpose'],
              rows: [
                ['Cocaine 4%', 'Blocks NE reuptake', 'Affected eye fails to dilate (ALL lesion levels)', 'Confirms Horner\'s syndrome (any level)'],
                ['Hydroxyamphetamine 1%', 'Enhances NE release', 'Dilates central and preganglionic lesions; DOES NOT dilate postganglionic', 'Localizes lesion (preganglionic vs. postganglionic)'],
                ['Phenylephrine 1% (vs 2.5%)', 'Direct alpha-1 agonist', 'Horner\'s pupil dilates at 1%; normal at 2.5% (denervation supersensitivity)', 'Confirms and localizes Horner\'s'],
                ['Epinephrine 0.1% (vs 1%)', 'Direct agonist', 'Horner\'s dilates at 0.1%; normal requires 1%', 'Alternative confirmation'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Adrenergic Receptor Subtypes — Full Ocular and Systemic Map',
          blocks: [
            {
              kind: 'table',
              headers: ['Receptor', 'Location', 'Agonist Effect', 'Clinical Relevance'],
              rows: [
                ['Alpha-1', 'Iris dilator pupillae, conjunctival vessels, Mueller\'s muscle, trabecular meshwork', 'Mydriasis, vasoconstriction, lid retraction, opens trabecula', 'Phenylephrine, epinephrine; blocked by dapiprazole, thymoxamine'],
                ['Alpha-2', 'Ciliary process (presynaptic + postsynaptic)', 'DECREASES aqueous humor secretion (inhibitory pathway via Gi → decreased cAMP)', 'Brimonidine, apraclonidine — lower IOP; clonidine systemic antihypertensive'],
                ['Beta-1', 'Heart (SA/AV nodes, myocardium)', 'Increases HR, contractility; increases renin', 'Cardioselective beta-blockers (betaxolol, metoprolol) spare this receptor in asthma patients'],
                ['Beta-2', 'Ciliary process (excitatory), ciliary muscle, vascular/bronchiolar smooth muscle', 'INCREASES AH secretion; relaxes ciliary muscle and bronchioles', 'Non-selective beta-blockers (timolol) block beta-2 at ciliary process → decreases AH → lowers IOP; also cause bronchoconstriction'],
                ['Beta-3', 'Adipose tissue', 'Lipolysis', 'Minimal ocular relevance'],
                ['D1 (peripheral)', 'Renal and splanchnic vasculature', 'Vasodilation', 'Fenoldopam for hypertensive crisis; Dopamine at low doses'],
                ['D2 (peripheral)', 'GI tract smooth muscle', 'Decreased GI motility', 'Bromocriptine (Parkinson\'s disease)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Ciliary process has BOTH alpha-2 (inhibitory → decreases AH when stimulated) AND beta-2 (excitatory → increases AH when stimulated) receptors. Non-selective beta-blockers like timolol block BOTH beta-1 AND beta-2 — in the ciliary process this decreases AH secretion (therapeutic for glaucoma); in the bronchi this causes bronchoconstriction (dangerous in asthma). Betaxolol (beta-1 selective) avoids bronchial beta-2 blockade.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Indirect Sympathomimetics and Mixed Agents (Ocular Relevance)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Indirect sympathomimetics: block NE reuptake OR cause release of NE from cytoplasmic pools/vesicles. NE then traverses synapse and binds alpha/beta receptors.',
                'Cocaine: blocks NE reuptake — indirect sympathomimetic + local anesthetic; used for Horner\'s diagnosis and nasal vasoconstriction (DCR).',
                'Hydroxyamphetamine 1%: enhances NE RELEASE from presynaptic terminals — fails if postganglionic neuron is absent (3rd-order Horner\'s).',
                'Ephedrine/Pseudoephedrine: mixed-acting (direct + indirect); decongestant; used for nasal congestion and mild hypotension.',
                'Amphetamine, Methamphetamine, Tyramine: indirect; increase NE/dopamine release and block reuptake.',
                'Tricyclic antidepressants (TCAs): block NE reuptake — indirect sympathomimetic effect; can cause mydriasis and angle-closure glaucoma.',
                'Caution with nasal decongestants (alpha-1 agonists — naphazoline, oxymetazoline, tetrahydrozoline): topical use for >5 days may cause REBOUND CONGESTION (rhinitis medicamentosa).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anti-infective',
      title: 'Anti-Infective Agents',
      blocks: [
        {
          kind: 'text',
          content: 'Ophthalmic anti-infectives include antibacterials, antivirals, and antifungals. Choice depends on the causative organism, tissue affected, and route of administration. Cap color for anti-infectives is BROWN (anti-infective) or TAN (antibiotic).',
        },
        {
          kind: 'sub',
          title: 'Antibacterial Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug Class', 'Examples', 'Spectrum/Use'],
              rows: [
                ['Fluoroquinolones', 'Ciprofloxacin 0.3%, ofloxacin 0.3%, levofloxacin 0.5%, moxifloxacin 0.5%, gatifloxacin 0.3%', 'Broad spectrum; bacterial conjunctivitis, corneal ulcers, endophthalmitis prophylaxis; excellent corneal penetration; inhibit DNA gyrase (topoisomerase II)'],
                ['Aminoglycosides', 'Gentamicin 0.3%, tobramycin 0.3%, neomycin, amikacin, sisomicin, netilmicin', 'Gram-negative coverage (Pseudomonas); tobramycin is preferred ophthalmic agent; bind 30S ribosome; S/E: superficial keratitis with prolonged use; nephrotoxic and ototoxic systemically'],
                ['Chloramphenicol', 'Chloramphenicol 0.5%', 'Broad spectrum (gram-positive and gram-negative including anaerobes); binds 50S ribosome; S/E: aplastic anemia (bone marrow toxicity from nitrobenzene nucleus), optic neuritis/atrophy; gray baby syndrome with systemic use in neonates'],
                ['Sulfonamides', 'Sulfacetamide 10%, 15%, 30%', 'Bacteriostatic; broad spectrum; PABA analog — inhibit dihydropteroate synthetase (folic acid synthesis); contact dermatitis; cornea verticillata with systemic use'],
                ['Macrolides', 'Erythromycin 0.5% ointment, azithromycin 1% (AzaSite)', 'Chlamydial infections, Gram-positive organisms; bind 23S rRNA in 50S subunit; azithromycin has extended tissue half-life'],
                ['Tetracyclines', 'Tetracycline, doxycycline (oral)', 'Chlamydia (trachoma, inclusion conjunctivitis), rosacea, meibomian gland dysfunction; bind 30S ribosome; S/E: induces myopia, brown tooth staining in children'],
                ['Glycylcyclines', 'Tigecycline (Tygacil) — systemic only', 'Broad-spectrum bacteriostatic; binds 30S ribosome; effective against MRSA and multi-drug-resistant Acinetobacter; no ophthalmic prep currently'],
                ['Polymyxin B combinations', 'Polymyxin B + trimethoprim (Polytrim), Polymyxin B + neomycin + bacitracin (Neosporin)', 'Gram-negative bacteria; prophylaxis; polymyxin B disrupts cell membrane via cationic detergent mechanism'],
                ['Bacitracin', 'Bacitracin ointment', 'Gram-positive coverage; pre-op prophylaxis; inhibits lipid carrier dephosphorylation (peptidoglycan transport blocked); too toxic for systemic use'],
                ['Vancomycin (intravitreal)', 'Vancomycin — intravitreal injection for endophthalmitis', 'Reserved for gram-positive endophthalmitis (MRSA, resistant cocci); binds D-Ala-D-Ala — different mechanism than beta-lactams; glycopeptide'],
                ['Lincosamides', 'Clindamycin — topical/systemic', 'Toxoplasma retinochoroiditis (systemic); anaerobic coverage; binds 50S ribosome; same binding site as macrolides'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Fluoroquinolone generations for the board: 1st = nalidixic acid (systemic UTI only); 2nd = ciprofloxacin, ofloxacin, norfloxacin (have ocular preparations); 3rd = levofloxacin, moxifloxacin, sparfloxacin, gemifloxacin; 4th = trovafloxacin. All generations inhibit DNA gyrase. Moxifloxacin 0.5% (Vigamox) and gatifloxacin 0.3% (Zymar) are 3rd-generation ophthalmic agents with expanded gram-positive coverage.',
            },
            {
              kind: 'sub',
              title: 'Antibacterial Mechanism Summary',
              blocks: [
                {
                  kind: 'table',
                  headers: ['MOA', 'Drug Classes'],
                  rows: [
                    ['Inhibit cell wall synthesis (PBP/transpeptidase)', 'Penicillins, Cephalosporins, Carbapenems, Monobactams (beta-lactams)'],
                    ['Inhibit cell wall synthesis (D-Ala-D-Ala binding)', 'Vancomycin (glycopeptide)'],
                    ['Inhibit cell wall synthesis (lipid carrier)', 'Bacitracin'],
                    ['Disrupt cell membrane', 'Polymyxin B/Colistin (cationic detergent)'],
                    ['Inhibit protein synthesis at 30S', 'Aminoglycosides, Tetracyclines, Glycylcyclines'],
                    ['Inhibit protein synthesis at 50S', 'Chloramphenicol, Macrolides, Lincosamides, Oxazolidinones, Streptogramins'],
                    ['Inhibit DNA gyrase (nucleic acid synthesis)', 'Fluoroquinolones'],
                    ['Inhibit RNA polymerase (nucleic acid synthesis)', 'Rifampin'],
                    ['Inhibit folic acid synthesis', 'Sulfonamides (PABA analog), Trimethoprim (DHFR inhibitor)'],
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Antiviral Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Indication', 'Notes'],
              rows: [
                ['Trifluridine (TFT) 1% solution', 'Herpes simplex keratitis (DOC)', 'Thymidine analog; inhibits viral DNA synthesis; S/E: superficial keratitis with prolonged use'],
                ['Idoxuridine (IDU) 0.1% solution, 0.5% ointment', 'HSV keratitis (historical)', 'First antiviral for eye; less effective than trifluridine; toxic to normal corneal epithelium'],
                ['Vidarabine (Ara-A) 3% ointment', 'HSV keratitis, HSV iritis', 'Alternative to IDU; adenine arabinoside'],
                ['Acyclovir (oral/IV/topical)', 'HSV keratitis, VZV, herpes zoster ophthalmicus', 'Systemic preferred for stromal keratitis/uveitis; topical has poor penetration'],
                ['Ganciclovir (intravitreal implant/oral/IV)', 'CMV retinitis', 'Guanosine analog; intravitreal implant for AIDS-related CMV retinitis'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Antifungal Agents',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Natamycin 5% suspension: DOC for fungal keratitis (filamentous fungi — Fusarium, Aspergillus); polyene antifungal; poorest corneal penetration.',
                'Amphotericin B 0.1–0.5%: DOC for Candida keratitis and endophthalmitis; polyene; intravitreal for fungal endophthalmitis.',
                'Voriconazole (oral/IV/topical): emerging DOC for fungal keratitis; excellent penetration.',
                'Fluconazole (oral): azole antifungal; good for Candida; poor for filamentous.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anti-inflammatory',
      title: 'Anti-Inflammatory Agents',
      blocks: [
        {
          kind: 'text',
          content: 'Inflammation in the eye is managed with corticosteroids and NSAIDs. Steroids are more potent but carry significant risks (cataract, glaucoma). NSAIDs have specific roles in miosis prevention and post-op pain.',
        },
        {
          kind: 'sub',
          title: 'Corticosteroids',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Penetration', 'Potency', 'Notes'],
              rows: [
                ['Prednisolone acetate 1%', 'Best corneal penetration (suspension)', 'High', 'DOC for intraocular inflammation; must be shaken'],
                ['Dexamethasone 0.1%', 'Good', 'High', 'Available as solution, suspension, ointment; used in provocative test (elevated IOP with TID use × 4–6 wks)'],
                ['Betamethasone 0.1%', 'Good', 'High', 'Also as cream for eyelid skin'],
                ['Fluorometholone (FML) 0.1–0.25%', 'Poor anterior chamber penetration', 'Low', 'Reduced IOP elevation; used for anterior segment only; safe for contact lens wearers'],
                ['Loteprednol 0.2–0.5%', 'Good', 'Moderate', 'Retrometabolism to inactive metabolite; minimal IOP elevation; DOC for allergic conjunctivitis'],
                ['Medrysone 1%', 'Poor', 'Low', 'For conjunctiva/eyelid only'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'MOA: inhibit phospholipase A2 → decrease prostaglandins, leukotrienes, and arachidonic acid metabolites.',
                'Ocular S/E: posterior subcapsular cataract, open-angle glaucoma (inhibition of lysosomal enzyme at aqueous chamber impeding outflow), corneal melting/thinning, increased susceptibility to infection.',
                'Cap color: PINK.',
                'Uses: uveitis, allergic conjunctivitis, corneal inflammation, post-operative inflammation, vernal/atopic keratoconjunctivitis.',
                'Corticosteroid-induced IOP elevation: 0.1% dexamethasone or betamethasone TID × 4–6 weeks elevates IOP (used as provocative test for POAG).',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'NSAIDs',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Use', 'Notes'],
              rows: [
                ['Ketorolac 0.5%', 'Post-op pain, allergic conjunctivitis, CME prevention', 'Most commonly used ophthalmic NSAID'],
                ['Diclofenac 0.1%', 'Post-op inflammation, photophobia after PRK', 'Good penetration'],
                ['Flurbiprofen 0.03%', 'Intraoperative miosis prevention', 'Added to irrigation solution'],
                ['Suprofen 1%', 'Intraoperative miosis prevention', '—'],
                ['Indomethacin (systemic)', 'Anti-inflammatory', 'S/E: punctate corneal opacity, cornea verticillata, myopia, tritan defects, pigmentary retinopathy, retinal hemorrhage'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'MOA: inhibit cyclooxygenase (COX) → decrease prostaglandin synthesis.',
                'Key use: prevention of intraoperative miosis (added to irrigation solution or as pre-op drops).',
                'Cap color: GRAY.',
                'Less IOP elevation than corticosteroids but no anti-fibrotic or anti-infective properties.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dry-eye-lubricants',
      title: 'Dry Eye & Lubricants',
      blocks: [
        {
          kind: 'text',
          content: 'Tear substitutes and lubricants manage dry eye syndrome (KCS) by supplementing the aqueous, mucin, or lipid layer of the tear film.',
        },
        {
          kind: 'sub',
          title: 'Artificial Tears (Solution)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Carboxymethylcellulose (CMC): most common in over-the-counter artificial tears; viscosity agent.',
                'Polyvinyl alcohol (PVA) 1.4%: mucomimetic; surface-active agent.',
                'Methylcellulose 1–4%: viscosity agent; prolonged contact time.',
                'Hydroxyethylcellulose: viscosity agent.',
                'Hydroxypropyl methylcellulose (HPMC) 2%: stabilizes precorneal tear film; prolongs TBUT.',
                'Hyaluronic acid (sodium hyaluronate): viscous; highly effective for severe dry eye.',
                'Polyethylene glycol / propylene glycol: Systane; dual-polymer system.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Artificial Tears (Ointment) and Special Preparations',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'White petrolatum: base for most ophthalmic ointments; used at bedtime for severe KCS.',
                'Mineral oil: lubricant in ointment base.',
                'Lanolin: lubricant in ointment base.',
                'Lacrisert (hydroxypropyl cellulose pellet): for severe mucin-phase tear deficiency; placed in inferior cul-de-sac.',
                'Cyclosporine A 0.05% (Restasis): immunomodulator; reduces T-cell mediated inflammation in KCS; increases tear production; use BID for 3–6 months.',
                'Lifitegrast 5% (Xiidra): LFA-1 antagonist; inhibits T-cell trafficking; for dry eye disease; use BID.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drugs That Cause Dry Eye',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Indication'],
              rows: [
                ['Oral retinoids (isotretinoin)', 'Cystic acne'],
                ['Antihistamines (chlorpheniramine, diphenhydramine)', 'Allergic rhinitis/sinusitis'],
                ['Anticholinergics (diphenoxylate, atropine)', 'Parkinson\'s disease'],
                ['Diuretics (hydrochlorothiazide)', 'Hypertension'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'systemic-ocular-effects',
      title: 'Systemic Drug Ocular Side Effects',
      blocks: [
        {
          kind: 'text',
          content: 'Many systemic medications produce significant ocular side effects. These are high-yield board topics. The most tested include chloroquine (bull\'s eye maculopathy), corticosteroids (PSC cataract, glaucoma), ethambutol (optic neuritis), amiodarone (cornea verticillata), and phenothiazines (stellate cataract).',
        },
        {
          kind: 'sub',
          title: 'Key Drug-Ocular Toxicity Associations',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Ocular Toxicity'],
              rows: [
                ['Chloroquine/hydroxychloroquine', 'Bull\'s eye maculopathy, whorl-like corneal deposits (cornea verticillata at midline), optic nerve atrophy, tritan defects, cycloplegia'],
                ['Corticosteroids', 'Posterior subcapsular cataract, open-angle glaucoma, myopia, diplopia/nystagmus'],
                ['Ethambutol', 'Optic neuritis/neuropathy, red-green color defect'],
                ['INH (isoniazid)', 'Optic neuritis/atrophy, neuroretinitis, red-green defect'],
                ['Rifampin', 'Optic neuritis/neuropathy, blepharoconjunctivitis'],
                ['Amiodarone', 'Whorl-like corneal deposits (anterior epithelium), colored halos, papilledema, blepharoconjunctivitis'],
                ['Phenothiazines', 'Anterior subcapsular cataract (stellate pattern Grades IV–V), corneal endothelial dusting, tritan defects, pigmentary retinopathy, mydriasis/cycloplegia'],
                ['Digitalis', 'Xanthopsia (yellow color disturbance), "snowy vision"'],
                ['Indomethacin', 'Punctate corneal opacity, cornea verticillata, myopia, tritan defects, pigmentary retinopathy'],
                ['Tamoxifen', 'Crystalline retinopathy, cornea verticillata'],
                ['Oral contraceptives', 'Retinal vascular occlusive disease (CRAO, CRVO), optic neuritis, papilledema, CLI'],
                ['Vitamin A excess', 'Papilledema, retinal hemorrhage, dry eyes, blepharoconjunctivitis, myopia, pseudotumor cerebri'],
                ['Gold salts', 'Chrysiasis (gold deposits), blepharoconjunctivitis, iritis'],
                ['Quinine', 'Vessel attenuation, retinal toxicity'],
                ['Chloramphenicol', 'Optic neuritis/atrophy, aplastic anemia'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Cornea verticillata (whorl-like epithelial deposits): Chloroquine (midline), Amiodarone (anterior/periphery), Indomethacin, Tamoxifen, Suramin. Drugs causing angle-closure glaucoma: benztropine, diazepam, chlorpheniramine, tricyclics, scopolamine, amphetamines. Drugs lowering IOP: beta-blockers, diuretics, CAIs, marijuana.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug-Induced Lens Changes',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Posterior subcapsular cataract: corticosteroids (prolonged use).',
                'Anterior subcapsular cataract: echothiophate and DFP (indirect miotics), phenothiazines (stellate pattern, Grades IV–V).',
                'Lovastatin (cholesterol-lowering): lens opacities.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug-Induced Color Vision Changes',
          blocks: [
            {
              kind: 'table',
              headers: ['Color Anomaly', 'Drug'],
              rows: [
                ['Xanthopsia (yellow tinge)', 'Digitalis ("snowy vision")'],
                ['Colored halos', 'Amiodarone'],
                ['Red-green defects', 'Ethambutol, INH'],
                ['Tritan defects (earliest, ganglion cells)', 'Indomethacin, chloroquine, phenothiazines'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'high-yield-drug-table',
      title: 'High-Yield Drug Reference Table',
      blocks: [
        {
          kind: 'table',
          headers: ['Drug', 'Class', 'MOA', 'Primary Ocular Use', 'Key S/E or Notes'],
          rows: [
            ['Pilocarpine', 'Direct cholinergic (M3 agonist)', 'Contracts Brucke\'s muscle → opens trabecular', 'Glaucoma, Adie\'s pupil test', 'Drug-induced myopia, miosis, headache; C/I malignant glaucoma'],
            ['Atropine', 'Muscarinic blocker', 'Antagonizes ACh at M3 receptor', 'Cycloplegic refraction, uveitis, amblyopia', 'Longest-acting; dry/hot/flushed systemic toxicity; angle-closure C/I'],
            ['Tropicamide', 'Muscarinic blocker', 'Antagonizes ACh at M3 receptor', 'Routine mydriasis (DOC)', 'Weakest cycloplegic; safest; duration 4–6 hrs'],
            ['Cyclopentolate', 'Muscarinic blocker', 'Antagonizes ACh at M3 receptor', 'Routine cycloplegia (DOC)', 'CNS S/E in children with 2%; use 0.5–1%'],
            ['Phenylephrine', 'Direct alpha-1 agonist', 'Stimulates alpha-1 → dilator pupillae', 'Diagnostic mydriasis, decongestant', 'Horner\'s test; no cycloplegia; 10% causes HPN'],
            ['Timolol', 'Non-selective beta-blocker', 'Inhibits adenylate cyclase → decreases AH', 'Open-angle glaucoma (first-line)', 'C/I: asthma, COPD, CHF, DM; bradycardia'],
            ['Betaxolol', 'Cardioselective beta-1 blocker', 'Inhibits adenylate cyclase → decreases AH', 'Glaucoma (safe in asthma)', 'Safe in COPD, asthma, DM'],
            ['Latanoprost 0.005%', 'Prostaglandin F2α analog', 'Increases uveo-scleral outflow', 'Open-angle glaucoma (once daily)', 'Iris pigmentation, eyelash changes; avoid pregnancy'],
            ['Brimonidine', 'Selective alpha-2 agonist', 'Decreases AH secretion + increases uveo-scleral', 'Glaucoma; post-laser IOP spike', 'Alpha-2 selective; avoids systemic adrenergic effects'],
            ['Apraclonidine', 'Alpha-1 and alpha-2 agonist', 'Decreases AH secretion', 'Post-laser IOP prevention', 'No effect on BP/PR; S/E: mydriasis, lid retraction'],
            ['Acetazolamide', 'Systemic CAI', 'Inhibits carbonic anhydrase → decreases HCO3/Na+', 'Glaucoma, pre-op IOP reduction', 'Paresthesia (most common S/E), aplastic anemia'],
            ['Dorzolamide', 'Topical CAI', 'Inhibits carbonic anhydrase', 'Open-angle glaucoma (topical)', 'Combined with timolol (Cosopt)'],
            ['Echothiophate', 'Irreversible AChE inhibitor', 'Blocks AChE → Ach accumulates', 'Accommodative esotropia', 'Long-acting; iris cysts (reversed by 2.5% PE)'],
            ['Physostigmine', 'Reversible AChE inhibitor', 'Blocks AChE → ACh accumulates', 'Open-angle glaucoma, pediculosis', 'Antidote for atropine overdose; also reverses anticholinesterase poisoning'],
            ['Epinephrine', 'Non-selective adrenergic agonist', 'Alpha-1 (opens trabecula) + alpha-2 (decreases AH)', 'Open-angle glaucoma', 'C/I: angle-closure, aphakia (CME), CVD; adrenochrome deposits'],
            ['Mannitol', 'Osmotic agent', 'Creates osmotic gradient → decreases AH', 'Acute angle-closure glaucoma, cerebral edema', 'IV only; most commonly used osmotic; safe in renal disease'],
            ['Glycerol', 'Osmotic agent (oral)', 'Creates osmotic gradient → decreases AH', 'Pre-op IOP reduction', 'Oral; C/I in DM (metabolized to glucose)'],
            ['Fluorescein', 'Diagnostic dye', 'Stains corneal epithelial defects', 'TBUT, Seidel test, Jones test, FAG, GAT', 'Promotes Pseudomonas; use strips; peak absorption 465–490 nm'],
            ['Rose Bengal', 'Vital dye', 'Stains devitalized cells and mucus', 'KCS, Herpes, Sjogren\'s', 'Use BEFORE fluorescein; antiviral; stings on application'],
            ['Proparacaine 0.5%', 'Ester local anesthetic', 'Blocks Na+ channels in corneal nerves', 'Tonometry, removal of foreign body', 'Most common topical anesthetic; approved DPA'],
            ['Trifluridine 1%', 'Antiviral (thymidine analog)', 'Inhibits viral DNA synthesis', 'HSV keratitis (DOC)', 'S/E: superficial keratitis with prolonged use'],
            ['Natamycin 5%', 'Polyene antifungal', 'Binds ergosterol in fungal cell membrane', 'Fungal keratitis (DOC for filamentous fungi)', 'Poorest corneal penetration of antifungals'],
            ['Amphotericin B', 'Polyene antifungal', 'Binds ergosterol', 'Candida endophthalmitis (DOC), intravitreal', 'Nephrotoxic systemically'],
            ['Prednisolone acetate 1%', 'Topical corticosteroid', 'Inhibits phospholipase A2 → decreases inflammation', 'Intraocular inflammation (DOC)', 'Best corneal penetration; S/E: PSC cataract, glaucoma'],
            ['Fluorometholone 0.1%', 'Topical corticosteroid', 'Inhibits phospholipase A2', 'Anterior segment (low risk)', 'Minimal IOP elevation; for conjunctiva/cornea only'],
            ['Ketorolac 0.5%', 'Topical NSAID', 'Inhibits COX → decreases prostaglandins', 'Post-op pain, CME prevention', 'Most used ophthalmic NSAID; gray cap'],
            ['Dapiprazole 0.5%', 'Alpha-1 blocker', 'Blocks alpha-1 → miosis', 'Reverse diagnostic mydriasis', 'REV-EYES; reverses phenylephrine and tropicamide'],
            ['Cocaine 4%', 'Indirect sympathomimetic + LA', 'Blocks NE reuptake; local anesthesia', 'Horner\'s syndrome test', 'Fails to dilate Horner\'s pupil at ALL levels'],
            ['Hydroxyamphetamine 1%', 'Indirect sympathomimetic', 'Enhances NE release', 'Horner\'s localization test', 'Dilates central/preganglionic; FAILS postganglionic'],
          ],
        },
      ],
    },
  ],
}
