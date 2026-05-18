import { OlePrepData } from '@/lib/ole-prep-types'

export const generalPharmacologyData: OlePrepData = {
  subject: 'General Pharmacology',
  slug: 'general-pharmacology',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Cycloplegics: Longest to Shortest Duration',
          device: 'A Shy Horse Can Trot',
          breakdown: 'Atropine (7–14 days), Scopolamine (5–7 days), Homatropine (24–48 hrs), Cyclopentolate (6–24 hrs), Tropicamide (4–6 hrs)',
        },
        {
          kind: 'mnemonic',
          term: 'ADME — Pharmacokinetics',
          device: 'All Drugs May Excrete',
          breakdown: 'Absorption, Distribution, Metabolism (Biotransformation), Excretion — the four pharmacokinetic processes',
        },
        {
          kind: 'mnemonic',
          term: 'Local Anesthetic Esters (6)',
          device: 'Pretty Terrible Bunnies Planting Beautiful Corn',
          breakdown: 'Proparacaine, Tetracaine, Benoxinate, Procaine, Benzocaine, Cocaine — the ester group local anesthetics',
        },
        {
          kind: 'mnemonic',
          term: 'Biotransformation Stage I Reactions',
          device: 'ORH — Oxidation, Reduction, Hydrolysis',
          breakdown: 'Stage I reactions: Oxidation (most common — adds O2 or removes H), Reduction (adds H or removes O), Hydrolysis (breaks drug into parts). All non-synthetic. Result: active or inactive products going to Stage II.',
        },
        {
          kind: 'mnemonic',
          term: 'Anti-TB 1st Line Drugs',
          device: 'IRES — Isoniazid, Rifampicin, Ethambutol, Streptomycin',
          breakdown: 'The 4 first-line anti-TB drugs. Isoniazid (INH) = peripheral neuritis + optic neuritis. Rifampicin = enzyme inductor. Ethambutol = optic neuritis (dose-dependent, board favorite). Streptomycin = ototoxicity + nephrotoxicity.',
        },
        {
          kind: 'mnemonic',
          term: 'Cephalosporin Generations Coverage',
          device: 'GP (1st) → PEcK (2nd) → PEcKS (3rd) → HENPEcKS (4th)',
          breakdown: '1st gen: gram-positive only. 2nd gen: adds Proteus, E. coli, Klebsiella. 3rd gen: adds Serratia. 4th gen: adds Haemophilus, Enterobacter, Neisseria — broadest coverage.',
        },
        {
          kind: 'mnemonic',
          term: 'Digitalis Toxicity: Earliest Sign',
          device: 'GI before the Heart Dies',
          breakdown: 'Anorexia is the EARLIEST sign of digitalis intoxication — GI symptoms (anorexia → nausea → vomiting → diarrhea) precede cardiac symptoms (arrhythmia, AV block). Important for boards: do not confuse with the ocular signs (xanthopsia, blue-yellow color defect).',
        },
        {
          kind: 'mnemonic',
          term: 'Drug Interaction Enhancement Types',
          device: '1+1=2 (Addition), 1+1=3 (Synergism), 0+1=2 (Potentiation)',
          breakdown: 'Addition: equal to sum of parts. Synergism: greater than sum of parts. Potentiation: inactive drug boosts active drug. These equations are direct board answers.',
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
          content: 'The THERAPEUTIC INDEX (TI) = TD50 / ED50. A larger TI means a WIDER margin of safety between effective and toxic doses. Drugs with a LOW TI (narrow margin) — like digoxin, warfarin, and lithium — require careful monitoring to avoid toxicity.',
          highlight: 'TI = TD50 / ED50; high TI = safer drug',
        },
        {
          kind: 'fact',
          content: 'Steady state concentration is reached after 4–5 HALF-LIVES of regular dosing. At steady state, drug intake and elimination are in dynamic equilibrium. This applies regardless of the dose size — only the half-life determines when steady state is reached.',
          highlight: 'Steady state = 4–5 half-lives',
        },
        {
          kind: 'fact',
          content: 'PROPARACAINE 0.5% is the most common topical ocular anesthetic: rapid onset (5–15 seconds), shortest duration (~20 minutes), fewest side effects, least irritating. It does NOT penetrate the cornea or conjunctiva. Used for tonometry, gonioscopy, and minor conjunctival/corneal procedures.',
          highlight: 'Proparacaine: fastest onset topical anesthetic; most common; 20-min duration',
        },
        {
          kind: 'fact',
          content: 'COCAINE is the ONLY NATURAL local anesthetic (from Erythroxylon coca leaves) and the FIRST to be discovered. It has adrenergic (mydriatic and vasoconstrictive) effects. It is NOT used for tonometry because it softens the cornea, giving falsely lower IOP values in glaucoma patients.',
          highlight: 'Cocaine = only natural LA; DO NOT use for tonometry (softens cornea)',
        },
        {
          kind: 'fact',
          content: 'ETHAMBUTOL is the anti-TB drug most associated with OPTIC NEURITIS — it is dose-dependent and reversible on discontinuation. Isoniazid (INH) can also cause optic neuritis but is classically more associated with peripheral neuritis and hepatotoxicity. Both are 1st-line drugs.',
          highlight: 'Ethambutol = optic neuritis (dose-dependent); Isoniazid = peripheral neuritis',
        },
        {
          kind: 'fact',
          content: 'CHLOROQUINE and HYDROXYCHLOROQUINE cause a characteristic "BULL\'S EYE" maculopathy pattern on retinal examination. The earliest clinical manifestation is decreased visual acuity. Other ocular signs: whorl-like corneal pigment deposits, halos around lights, pallor of optic disc, paracentral scotoma.',
          highlight: 'Chloroquine: bull\'s eye maculopathy; earliest sign = decreased VA',
        },
        {
          kind: 'fact',
          content: 'CORTICOSTEROID-INDUCED GLAUCOMA: Secondary open-angle glaucoma develops due to glycosaminoglycan accumulation at the trabecular meshwork after 6 weeks of topical dexamethasone use. After 18 months of therapy, it can cause PERMANENT glaucoma.',
          highlight: 'Topical dexamethasone: OAG after 6 weeks; permanent OAG after 18 months',
        },
        {
          kind: 'fact',
          content: 'ESTERS vs AMIDES — key differences: Esters are metabolized by blood esterases; Amides by the liver. Esters are NOT active at acid pH (ineffective in purulent/infected tissue). Amides ARE active at acid pH. Esters decrease sulfa drug effect; Amides do not interact with sulfa drugs.',
          highlight: 'Esters: blood esterases; inactive at acid pH; decrease sulfa effect',
        },
        {
          kind: 'fact',
          content: 'DIGITALIS TOXICITY: Earliest sign is ANOREXIA (GI symptoms precede cardiac). Ocular side effects include XANTHOPSIA (blue-yellow color defect), colored borders around objects, flickering vision, "glare phenomenon," scotoma, decreased vision, diplopia, and mydriasis.',
          highlight: 'Digitalis earliest toxicity: anorexia; ocular: xanthopsia (blue-yellow)',
        },
        {
          kind: 'fact',
          content: 'TETRACYCLINE is the drug of choice for TRACHOMA and INCLUSION CONJUNCTIVITIS. CHLORAMPHENICOL is the DOC for TYPHOID FEVER. Both are broad-spectrum antibiotics that inhibit protein synthesis at the ribosomal level.',
          highlight: 'Tetracycline = DOC for Trachoma; Chloramphenicol = DOC for Typhoid',
        },
        {
          kind: 'fact',
          content: 'AMINOGLYCOSIDES (Gentamicin, Tobramycin, Neomycin, Streptomycin) are effective for gram-NEGATIVE bacteria and have TWO major systemic toxicities: OTOTOXICITY (vestibulotoxic — vertigo, loss of balance) and NEPHROTOXICITY, especially if used for more than 5 days.',
          highlight: 'Aminoglycosides: gram-negative; ototoxic + nephrotoxic if >5 days',
        },
        {
          kind: 'fact',
          content: 'COVALENT BOND is the STRONGEST drug-receptor bond and produces IRREVERSIBLE effects (e.g., irreversible antagonism, aspirin\'s irreversible COX inhibition). VAN DER WAALS BOND is the WEAKEST but the MOST COMMON — most drugs interact with receptors via intermolecular forces.',
          highlight: 'Covalent = strongest = irreversible; Van der Waals = weakest = most common',
        },
        {
          kind: 'fact',
          content: 'NALOXONE is the antidote for ACUTE OPIOID OVERDOSE (competitive opioid receptor antagonist; rapidly reverses respiratory depression). NALTREXONE is the long-acting form used for MAINTENANCE in opioid addiction treatment programs.',
          highlight: 'Naloxone = acute opioid OD antidote; Naltrexone = maintenance for addiction',
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
          question: 'Cocaine can be used safely for applanation tonometry because it is a local anesthetic. True or False?',
          wrong: 'True — it is a local anesthetic approved for topical use',
          correct: 'False — cocaine is CONTRAINDICATED for tonometry because it SOFTENS the cornea, giving falsely LOWER IOP readings',
          why: 'The softening of the cornea from cocaine causes the tonometer to indent more easily, producing artificially low IOP values. This is clinically dangerous in glaucoma patients. Proparacaine or Benoxinate should be used for tonometry instead.',
        },
        {
          kind: 'trap',
          question: 'Potency and Efficacy mean the same thing in pharmacology. True or False?',
          wrong: 'True — both refer to how "strong" a drug is',
          correct: 'False — Potency = lowest concentration needed (EC50/ED50). Efficacy = maximum achievable effect (Emax). A drug can be highly potent at low doses but have low maximum efficacy.',
          why: 'Potency relates to DOSE needed (how little drug produces an effect). Efficacy relates to CEILING EFFECT (how big an effect is possible). Example: Morphine has HIGH efficacy (can eliminate severe pain) while codeine has LOWER efficacy (cannot match morphine\'s maximal effect even at very high doses).',
        },
        {
          kind: 'trap',
          question: 'Ethambutol\'s most clinically significant side effect is hepatotoxicity. True or False?',
          wrong: 'True — like most antibiotics, it mainly affects the liver',
          correct: 'False — Ethambutol\'s hallmark toxicity is OPTIC NEURITIS (dose-dependent and reversible)',
          why: 'Ethambutol specifically causes retrobulbar optic neuritis. It is dose-dependent and may present as decreased visual acuity and color vision disturbances. Boards frequently pair Ethambutol with optic neuritis. Isoniazid causes peripheral neuritis AND hepatotoxicity. Pyrazinamide causes hepatotoxicity. Streptomycin causes ototoxicity.',
        },
        {
          kind: 'trap',
          question: 'The Therapeutic Index formula is ED50 / LD50. Is this correct?',
          wrong: 'Yes — ED50 divided by LD50',
          correct: 'No — TI = TD50 / ED50 (Toxic Dose 50 divided by Effective Dose 50)',
          why: 'TI = TD50 / ED50. A HIGH TI means toxic dose is much higher than effective dose = SAFER. A LOW TI means the gap is small = dangerous (must monitor closely). Note: some texts use LD50 as the numerator for animal studies, but clinically TD50 is used. The higher the TI, the safer the drug.',
        },
        {
          kind: 'trap',
          question: 'Corticosteroid-induced glaucoma requires years of systemic therapy to develop. True or False?',
          wrong: 'True — only long-term systemic therapy causes it',
          correct: 'False — secondary OAG can develop after just 6 WEEKS of TOPICAL dexamethasone; topical route is actually highly implicated',
          why: 'Topical dexamethasone is a well-known cause of steroid-induced glaucoma. Glycosaminoglycans accumulate at the trabecular meshwork after 6 weeks. After 18 months of continued therapy, permanent glaucoma can result. This is one of the most boards-tested drug-induced ocular complications.',
        },
        {
          kind: 'trap',
          question: 'First-order elimination means 100% of the drug is cleared at a constant rate. True or False?',
          wrong: 'True — constant rate means all drug is cleared equally',
          correct: 'False — First-order elimination: the RATE is proportional to concentration (percentage constant, not amount). Zero-order elimination clears a CONSTANT AMOUNT per unit time regardless of concentration.',
          why: 'In first-order kinetics, as concentration falls, the absolute amount eliminated also falls (percentage stays constant → half-life is constant). In zero-order kinetics (e.g., alcohol at high doses, aspirin overdose), a fixed amount is cleared per unit time — so half-life is NOT constant and increases as dose increases.',
        },
        {
          kind: 'trap',
          question: 'An antagonist actively reverses the baseline effects of a receptor — it has negative intrinsic activity. True or False?',
          wrong: 'True — antagonists block receptor activity below baseline',
          correct: 'False — this describes an INVERSE AGONIST. An ANTAGONIST has ZERO intrinsic activity: no effect alone, but blocks agonists when present.',
          why: 'This is a classic receptor pharmacology trap. Antagonist = 0 intrinsic activity. Inverse agonist = negative intrinsic activity (actively lowers baseline receptor activity). Partial agonist = has affinity but lower intrinsic activity than full agonist. Knowing these distinctions is essential for MCQs on receptor pharmacology.',
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
          prompt: 'What are the four processes of pharmacokinetics (ADME)?',
          answer: 'Absorption (drug enters blood from site of administration), Distribution (drug leaves blood and enters tissues), Metabolism/Biotransformation (drug modified by liver — Stage I: oxidation/reduction/hydrolysis; Stage II: conjugation), Excretion (drug leaves body as water-soluble metabolites).',
        },
        {
          kind: 'recall',
          prompt: 'List the 5 cycloplegic agents from longest to shortest duration of action.',
          answer: 'Atropine (7–14 days) > Scopolamine (5–7 days) > Homatropine (24–48 hrs) > Cyclopentolate (6–24 hrs) > Tropicamide (4–6 hrs). Mnemonic: "A Shy Horse Can Trot".',
        },
        {
          kind: 'recall',
          prompt: 'What are the differences between agonist, partial agonist, antagonist, and inverse agonist?',
          answer: 'Agonist: high affinity + high intrinsic activity → maximal response. Partial agonist: full affinity + LOW intrinsic activity → submaximal response; blocks full agonist. Antagonist: affinity present + ZERO intrinsic activity → no effect alone; blocks agonist. Inverse agonist: NEGATIVE intrinsic activity → actively reverses baseline receptor activity.',
        },
        {
          kind: 'recall',
          prompt: 'What are the 4 mechanisms of drug-receptor bonds from strongest to weakest?',
          answer: 'Covalent (strongest; irreversible) → Ionic → Hydrogen → Hydrophobic → Van der Waals (weakest; but most common because most drugs use intermolecular forces). Covalent bonds produce irreversible effects.',
        },
        {
          kind: 'recall',
          prompt: 'List the 3 types of drug interaction enhancement with their formulas.',
          answer: 'Addition (1+1=2): combined response equals sum of individual responses. Synergism (1+1=3): combined response exceeds sum. Potentiation (0+1=2): drug A has no effect alone but enhances drug B\'s effect.',
        },
        {
          kind: 'recall',
          prompt: 'What is the Therapeutic Index formula and what does a high TI mean?',
          answer: 'TI = TD50 / ED50. A high TI means a WIDE margin between effective and toxic doses = SAFER drug. A low TI (e.g., digoxin, warfarin, lithium) means narrow margin = careful monitoring required.',
        },
        {
          kind: 'recall',
          prompt: 'List the ocular side effects of chloroquine/hydroxychloroquine therapy.',
          answer: '"Bull\'s eye" maculopathy, whorl-like corneal pigment deposits, halos around lights, pallor of optic disc, abnormal ERG, decreased visual acuity (earliest sign), central/paracentral scotoma, narrowing of arterioles, color vision changes, nyctalopia.',
        },
        {
          kind: 'recall',
          prompt: 'What are the signs of digitalis intoxication, starting with the earliest?',
          answer: 'GI (earliest): anorexia (earliest of all), nausea, vomiting, diarrhea. CNS: drowsiness, fatigue, confusion, visual disturbances. Cardiac: arrhythmia, PVCs, AV heart block, ventricular tachycardia. Ocular: xanthopsia (blue-yellow color defect), colored borders, flickering vision, scotoma, diplopia, mydriasis.',
        },
        {
          kind: 'recall',
          prompt: 'Name the ocular anesthetics used for specific procedures.',
          answer: 'Goldmann Applanation Tonometry & Gonioscopy: Proparacaine or Benoxinate. ERG: Tetracaine. Forced Duction Test: Cocaine or Lidocaine. Corneal Epithelial Debridement: Cocaine. Horner\'s Syndrome Diagnosis: Cocaine 4%–10%. Injectable anesthetics (retrobulbar/periocular): Lidocaine (most common), Bupivacaine (longest), Procaine.',
        },
        {
          kind: 'recall',
          prompt: 'What are the major side effects of aminoglycosides, and when do they occur?',
          answer: 'Ototoxicity (damage to CN VIII — vestibulotoxic: vertigo and loss of balance; cochleotoxic: hearing loss) and Nephrotoxicity, especially if used for MORE THAN 5 DAYS. Examples: Gentamicin, Tobramycin, Neomycin, Streptomycin, Amikacin. Most effective against gram-negative bacteria.',
        },
        {
          kind: 'recall',
          prompt: 'Distinguish between first-order and zero-order drug kinetics (absorption AND elimination).',
          answer: 'Absorption: First-order = constant FRACTION of drug reaches blood (oral, rectal, etc.); Zero-order = 100% reaches blood (IV, IA, IC routes). Elimination: First-order = rate proportional to plasma concentration (percentage constant; half-life constant); Zero-order = constant AMOUNT eliminated per time regardless of concentration (e.g., alcohol at high doses).',
        },
        {
          kind: 'recall',
          prompt: 'List the BFAD drug schedules with an example and key prescribing rule for each.',
          answer: 'C-I (e.g., marijuana, LSD): no medical use; not available therapeutically. C-II (e.g., morphine, cocaine): written Rx only; supply within 72 hrs; no refill except emergency. C-III (e.g., codeine): cannot be refilled >6 months from date issued. C-IV (e.g., diazepam): cannot be refilled >6 months from date issued. C-V (e.g., loperamide): loperamide OTC; Robitussin AC needs prescription.',
        },
      ],
    },
    {
      id: 'glaucoma-pharmacotherapy',
      title: 'Glaucoma Pharmacotherapy',
      icon: '👁️',
      items: [
        {
          kind: 'fact',
          content: 'PROSTAGLANDIN ANALOGS (PGF2α derivatives) — MOST EFFECTIVE class for IOP reduction. Examples: Latanoprost (Xalatan), Travoprost (Travatan), Bimatoprost (Lumigan). MOA: increase UVEOSCLERAL outflow of aqueous humor. Given once daily at NIGHT. S/E: iris darkening (prostaglandin-induced melanogenesis), eyelash growth (hypertrichosis), conjunctival hyperemia, anterior uveitis.',
          highlight: 'Latanoprost/Travoprost: PGF2α; most effective IOP reduction; once nightly; iris darkening S/E',
        },
        {
          kind: 'fact',
          content: 'BETA-BLOCKERS for glaucoma: MOA = decrease aqueous humor PRODUCTION. Non-selective: Timolol (DOC for glaucoma), Carteolol, Levobunolol — C/I: asthma, COPD, bradycardia, heart block. Selective B1: Betaxolol — SAFER in asthma/COPD patients (still use with caution). S/E: bradycardia, hypotension, bronchospasm; Betaxolol may reduce ocular perfusion less than timolol.',
          highlight: 'Timolol = DOC glaucoma (non-selective); Betaxolol = safer in asthma (selective B1)',
        },
        {
          kind: 'fact',
          content: 'CARBONIC ANHYDRASE INHIBITORS (CAIs) — MOA: inhibit carbonic anhydrase in ciliary body → decrease aqueous humor production. Systemic: Acetazolamide (Diamox) — DOC for acute angle-closure emergency; also reduces ICP. S/E: paresthesia, metabolic acidosis, kidney stones, sulfa allergy. Topical: Dorzolamide (Trusopt), Brinzolamide (Azopt) — fewer systemic S/E; avoid in sulfa allergy.',
          highlight: 'Acetazolamide = DOC acute angle closure + lowers ICP; Dorzolamide = topical CAI',
        },
        {
          kind: 'fact',
          content: 'ALPHA-2 AGONISTS for glaucoma: Brimonidine (Alphagan), Apraclonidine. MOA: decrease aqueous production AND increase uveoscleral outflow (dual mechanism). Brimonidine also has neuroprotective properties. S/E: ocular allergy (brimonidine has ~25% allergy rate), dry mouth, drowsiness, rebound hyperemia. C/I: neonates/young children (systemic absorption → CNS depression).',
          highlight: 'Brimonidine: dual MOA (decrease production + increase uveoscleral outflow); high allergy rate',
        },
        {
          kind: 'fact',
          content: 'MIOTICS (Cholinergic agonists) for glaucoma: Pilocarpine — MOST widely used miotic; direct muscarinic agonist. MOA: contract ciliary muscle → opens trabecular meshwork → increases CONVENTIONAL outflow. Also contracts sphincter pupillae → miosis. Used in acute angle-closure (breaks the pupillary block) and chronic open-angle glaucoma. S/E: induced myopia, brow ache, dim vision (miosis), retinal detachment risk. Carbachol: more potent, longer acting, resistant to cholinesterase.',
          highlight: 'Pilocarpine: most common miotic; increases conventional outflow; causes miosis + induced myopia',
        },
        {
          kind: 'fact',
          content: 'OSMOTIC DIURETICS for acute glaucoma — MOA: create osmotic gradient to draw fluid from vitreous and anterior chamber into blood. Mannitol (IV): DRUG OF CHOICE for acute angle-closure attack unresponsive to drops; also reduces ICP. Glycerol (oral): alternative to mannitol. Given as temporizing measure before surgery. S/E: headache, nausea, dehydration, electrolyte imbalance; avoid in renal failure.',
          highlight: 'Mannitol IV = DOC acute angle-closure emergency; also lowers ICP; osmotic diuretic',
        },
        {
          kind: 'mnemonic',
          term: 'Glaucoma Drug Classes by MOA',
          device: 'PABCAMO: Prostaglandins, Alpha-2 agonists, Betas, CAIs, Alpha-1, Miotics, Osmotic',
          breakdown: 'Prostaglandins (increase uveoscleral outflow). Alpha-2 agonists (decrease production + increase uveoscleral). Beta-blockers (decrease production). CAIs (decrease production). Miotics/Cholinergics (increase conventional/trabecular outflow). Osmotic diuretics (emergency dehydration of vitreous).',
        },
        {
          kind: 'trap',
          question: 'Betaxolol is as safe as timolol for patients with asthma because it is a beta-blocker with IOP-lowering effects. True or False?',
          wrong: 'True — betaxolol is safe because it lowers IOP just like timolol',
          correct: 'False — Betaxolol is RELATIVELY safer in asthma because it is SELECTIVE for B1 receptors (less B2 blockade), but it is still used with caution. Timolol is NON-SELECTIVE and is absolutely contraindicated in asthma/COPD.',
          why: 'Non-selective beta-blockers (timolol, levobunolol, carteolol) block both B1 (heart) and B2 (lungs) receptors — causing bronchospasm. Betaxolol blocks B1 predominantly, sparing the bronchial B2 receptors. It is not completely safe in severe asthma, but is the preferred beta-blocker when one is needed in a pulmonary patient.',
        },
        {
          kind: 'recall',
          prompt: 'List the 5 classes of glaucoma medications, their MOA, and one key example of each.',
          answer: '(1) Prostaglandin analogs: increase uveoscleral outflow — Latanoprost. (2) Beta-blockers: decrease aqueous production — Timolol (DOC), Betaxolol (B1-selective). (3) CAIs: decrease aqueous production — Acetazolamide (systemic), Dorzolamide (topical). (4) Alpha-2 agonists: decrease production + increase uveoscleral outflow — Brimonidine. (5) Miotics (cholinergics): increase conventional outflow — Pilocarpine. Emergency: Mannitol (osmotic; vitreous dehydration).',
        },
      ],
    },
    {
      id: 'cns-neuro-pharmacology',
      title: 'CNS & Neuromuscular Pharmacology',
      icon: '🧠',
      items: [
        {
          kind: 'fact',
          content: 'BOTULINUM TOXIN (Botox) in ophthalmology: MOA = inhibits release of acetylcholine at the neuromuscular junction → local flaccid paralysis of the injected muscle. Used for treatment of strabismus (replacing or supplementing surgery), blepharospasm, and hemifacial spasm. Duration of effect: 3–6 months. NOT a permanent solution — reinjection required.',
          highlight: 'Botulinum toxin: inhibits ACh release at NMJ; used for strabismus, blepharospasm; lasts 3–6 months',
        },
        {
          kind: 'fact',
          content: 'ANTI-PSYCHOTIC EXTRAPYRAMIDAL SIDE EFFECTS (EPS) — most serious adverse effect of typical antipsychotics (phenothiazines, butyrophenones like haloperidol). MOA: D2 receptor blockade in basal ganglia. EPS in chronological order: Acute dystonia (first 1–3 days): sustained muscle contractions, oculogyric crisis. Akathisia (3–90 days): motor restlessness, inability to sit still. Tardive dyskinesia (90–365 days): repetitive involuntary movements of face/tongue — IRREVERSIBLE, worst S/E.',
          highlight: 'EPS timeline: Acute dystonia (1–3d) → Akathisia (3–90d) → Tardive dyskinesia (90–365d)',
        },
        {
          kind: 'fact',
          content: 'MORPHINE and OPIOID OCULAR EFFECTS: Morphine and most opioids cause MIOSIS (pupillary constriction) via opioid receptor stimulation of the Edinger-Westphal nucleus (CN3 parasympathetic). This is a key clinical sign of opioid overdose — pinpoint pupils. Meperidine (pethidine) is the exception — it can cause MYDRIASIS via its atropine-like (anticholinergic) effect.',
          highlight: 'Morphine → miosis (pinpoint pupils); Meperidine exception → mydriasis (anticholinergic)',
        },
        {
          kind: 'fact',
          content: 'ANTI-PARKINSONIAN DRUGS: L-dopa (levodopa) + Carbidopa — DOC for Parkinson\'s. L-dopa crosses the blood-brain barrier; Carbidopa = dopa-decarboxylase inhibitor (prevents peripheral conversion, reduces S/E). MAO-B inhibitor: Selegiline — slows dopamine breakdown. COMT inhibitors: tolcapone, entacapone. Anticholinergics: benztropine, trihexyphenidyl (useful for tremor, cause mydriasis as S/E).',
          highlight: 'L-dopa + Carbidopa = DOC Parkinson\'s; anticholinergics cause mydriasis as S/E',
        },
        {
          kind: 'fact',
          content: 'ANTI-EPILEPTIC DRUGS (DOC by seizure type): Grand mal (generalized tonic-clonic): Phenytoin (hydantoin) = DOC. Petit mal (absence): Ethosuximide = DOC. Status epilepticus: IV Diazepam (BZD) = DOC. Phenobarbital: oldest anti-epileptic; used for grand mal and status. Valproic acid: broad spectrum (grand mal, petit mal, mixed). Carbamazepine: temporal lobe/complex partial seizures.',
          highlight: 'Grand mal DOC = Phenytoin; Petit mal DOC = Ethosuximide; Status epilepticus DOC = IV Diazepam',
        },
        {
          kind: 'fact',
          content: 'BENZODIAZEPINES and reversal: Diazepam, lorazepam, midazolam — MOA: enhance GABA-A receptor activity (increase Cl- influx). Uses: anxiolytic, sedation, muscle relaxant, anti-epileptic, anti-panic. ANTIDOTE: Flumazenil = competitive BZD receptor antagonist; reverses sedation and respiratory depression. Barbiturate OD has NO antidote — supportive care only.',
          highlight: 'BZD antidote = Flumazenil (competitive antagonist); Barbiturate OD = no antidote',
        },
        {
          kind: 'mnemonic',
          term: 'Anti-Psychotic EPS Timeline',
          device: 'DAT — Days, Akathisia, Tardive',
          breakdown: 'Acute Dystonia: Days 1–3. Akathisia: 3–90 days. Tardive dyskinesia: 90–365 days (90 days to 1 year). Tardive dyskinesia is the worst because it may be IRREVERSIBLE. Oculogyric crisis (eyes rolling up) is a classic acute dystonia presentation.',
        },
        {
          kind: 'trap',
          question: 'Meperidine (Demerol) causes miosis like other opioids because it acts on opioid receptors. True or False?',
          wrong: 'True — all opioids cause miosis via opioid receptors',
          correct: 'False — Meperidine is the EXCEPTION among opioids. It has ATROPINE-LIKE (anticholinergic) activity that can cause MYDRIASIS, unlike other opioids which cause miosis.',
          why: 'All opioids stimulate Edinger-Westphal nucleus → miosis. Meperidine\'s anticholinergic property blocks muscarinic receptors on the sphincter pupillae → mydriasis. This is a classic boards distinction. Morphine OD = pinpoint pupils; Meperidine OD = dilated pupils is a testable fact.',
        },
        {
          kind: 'recall',
          prompt: 'List the EPS side effects of anti-psychotic drugs in order of onset, and which is the most dangerous.',
          answer: '(1) Acute dystonia: 1–3 days; sustained muscle contractions, oculogyric crisis; treated with anticholinergics (benztropine) or antihistamines (diphenhydramine). (2) Akathisia: 3–90 days; motor restlessness; treated with propranolol or BZDs. (3) Tardive dyskinesia: 90–365 days; repetitive involuntary orofacial movements; may be IRREVERSIBLE — the most dangerous EPS. Reduce dose or switch to atypical antipsychotic (clozapine).',
        },
      ],
    },
    {
      id: 'anti-inflammatory-analgesics',
      title: 'Anti-Inflammatory Drugs & Analgesics',
      icon: '💊',
      items: [
        {
          kind: 'mnemonic',
          term: 'Aspirin\'s 4 A\'s',
          device: '4 A\'s: Antipyretic, Analgesic, Anti-inflammatory, Anti-platelet',
          breakdown: 'Aspirin (Acetylsalicylic acid) has 4 main effects. Anti-platelet effect: irreversibly inhibits COX-1 in platelets (permanent for platelet lifespan ~7–10 days). C/I: gouty arthritis (increases uric acid retention). Risk: Reye\'s syndrome in children with viral illness.',
        },
        {
          kind: 'fact',
          content: 'NSAID MECHANISM AND S/E: MOA = inhibit cyclooxygenase (COX) → decrease prostaglandin synthesis. COX-1 (constitutive): protects gastric mucosa, platelet aggregation. COX-2 (inducible): inflammation, pain, fever. Non-selective COX inhibitors (aspirin, ibuprofen, indomethacin) inhibit both → GI S/E. Selective COX-2 inhibitors (celecoxib) — fewer GI S/E but increased MI/CVA risk (rofecoxib, valdecoxib withdrawn). S/E of NSAIDs: PUD, prolonged bleeding, hepatotoxicity, nephrotoxicity.',
          highlight: 'NSAIDs: inhibit COX → decrease PGs; S/E: PUD, bleeding, hepatotoxicity, nephrotoxicity',
        },
        {
          kind: 'fact',
          content: 'ACETAMINOPHEN (Paracetamol): NOT an NSAID — has analgesic and antipyretic effects ONLY; no anti-inflammatory property. Advantage over aspirin: no Reye\'s syndrome risk, no GI bleeding, no antiplatelet effect. S/E: hepatotoxicity in overdose (depletes glutathione). ANTIDOTE: N-acetylcysteine (effective if given within 8–24 hours). Ibuprofen is a better antipyretic than paracetamol.',
          highlight: 'Acetaminophen: NOT NSAID (no anti-inflammatory); OD antidote = N-acetylcysteine',
        },
        {
          kind: 'fact',
          content: 'CORTICOSTEROIDS — GLUCOCORTICOIDS by duration: Short/medium-acting (8–12h): Cortisone, Cortisol (hydrocortisone), Prednisone, Prednisolone, Methylprednisolone. Intermediate-acting (12–36h): Triamcinolone. Long-acting (36–54h): Dexamethasone, Betamethasone. MINERALOCORTICOIDS: Fludrocortisone, Deoxycorticosterone — affect electrolytes. MOA anti-inflammatory: inhibit leukotrienes (slow substance of anaphylaxis), inhibit WBC migration, inhibit PGs synthesis.',
          highlight: 'Short: prednisone/prednisolone; Long: dexamethasone/betamethasone; MOA: inhibit leukotrienes + PGs',
        },
        {
          kind: 'fact',
          content: 'GOUT TREATMENT: Colchicine = drug of choice for ACUTE gout attack; MOA = inhibit migration of PMN (neutrophils) into the joint; S/E = diarrhea (dose-limiting); toxicity signs = bloody diarrhea, hematuria. Allopurinol = drug of choice for CHRONIC gout; MOA = inhibit xanthine oxidase (enzyme converting hypoxanthine → xanthine → uric acid). Uricosuric agents (probenecid, sulfinpyrazone) = chronic gout; MOA = inhibit tubular reabsorption of uric acid.',
          highlight: 'Gout: Colchicine = acute (inhibit PMN migration); Allopurinol = chronic (inhibit xanthine oxidase)',
        },
        {
          kind: 'fact',
          content: 'ANTIHISTAMINES — H1, H2, H3 receptors: H1 = endothelium and smooth muscles (inflammation, bronchoconstriction, itch); H2 = gastric parietal cells and myocardium (HCl secretion, heart rate); H3 = CNS (inhibitory; decreases histamine release). H1 ANTIHISTAMINES: 1st generation (sedating): diphenhydramine, promethazine, hydroxyzine, meclizine (anti-vertigo). 2nd generation (non-sedating): cetirizine, loratadine, fexofenadine, desloratadine, azelastine. S/E of 1st gen: sedation, blurred vision (anticholinergic mydriasis), urinary retention, dry mouth.',
          highlight: '1st gen antihistamines: sedating + anticholinergic (blurred vision, mydriasis); 2nd gen: non-sedating',
        },
        {
          kind: 'fact',
          content: 'NARCOTIC ANALGESICS — key facts for boards: Morphine = causes MIOSIS (pupillary constriction) via Edinger-Westphal stimulation. Codeine = powerful cough suppressant; ether of morphine; lower CNS depression. Meperidine = anticholinergic effect → MYDRIASIS (exception to opioid miosis rule). Naloxone = pure opioid antagonist; DOC for acute opioid overdose. Naltrexone = DOC for heroin-dependent patients (maintenance). Dextromethorphan = cough suppressant with NO analgesia.',
          highlight: 'Morphine = miosis; Meperidine = mydriasis (exception); Naloxone = OD antidote; Naltrexone = heroin DOC',
        },
        {
          kind: 'trap',
          question: 'Colchicine treats acute gout by reducing uric acid production in the joint. True or False?',
          wrong: 'True — it inhibits uric acid synthesis like allopurinol',
          correct: 'False — Colchicine does NOT affect uric acid levels. It treats acute gout by INHIBITING PMN (neutrophil) MIGRATION into the joint, reducing the inflammatory cascade. Allopurinol reduces uric acid by inhibiting xanthine oxidase, but is used for CHRONIC gout prevention, not acute attacks.',
          why: 'This is a classic mechanism mix-up. Colchicine = anti-inflammatory (blocks neutrophil influx). Allopurinol = uric acid lowering (xanthine oxidase inhibitor). Probenecid = uricosuric (increases renal uric acid excretion). All three have different mechanisms and different indications.',
        },
        {
          kind: 'trap',
          question: 'Second-generation antihistamines are preferred over first-generation for allergic conjunctivitis because they have no ocular side effects. True or False?',
          wrong: 'True — 2nd gen are completely free of ocular side effects',
          correct: 'False — 2nd gen antihistamines have significantly fewer anticholinergic S/E than 1st gen, but they are preferred mainly because they do not cause sedation. 1st gen (diphenhydramine, etc.) cause blurred vision and mydriasis due to anticholinergic effects on the ciliary muscle and iris sphincter.',
          why: '1st generation antihistamines have antimuscarinic activity — they block M3 receptors on the ciliary muscle and sphincter pupillae, causing cycloplegia (blurred vision/near point recedes) and mydriasis. This is clinically important for optometrists who need to know drug-induced pupil dilation vs pathological causes.',
        },
        {
          kind: 'recall',
          prompt: 'What is the DOC for acute gout vs chronic gout, and what is the MOA of each?',
          answer: 'Acute gout: Colchicine — MOA = inhibit migration of PMN (neutrophils) into the joint, interrupting the inflammatory cycle. Also NSAIDs (especially indomethacin). Chronic gout prevention: Allopurinol — MOA = inhibit xanthine oxidase, preventing conversion of hypoxanthine → xanthine → uric acid, thus lowering serum uric acid. Uricosuric agents (probenecid): inhibit tubular reabsorption of uric acid for chronic management.',
        },
        {
          kind: 'recall',
          prompt: 'List the glucocorticoids by duration of action (short/medium → intermediate → long acting).',
          answer: 'Short/Medium-acting (8–12 hrs): Cortisone, Hydrocortisone (cortisol), Prednisone, Prednisolone, Methylprednisolone. Intermediate-acting (12–36 hrs): Triamcinolone, Fluprednisolone. Long-acting (36–54 hrs): Dexamethasone, Betamethasone. Key for boards: Dexamethasone is the most potent and longest acting — also the one causing corticosteroid-induced glaucoma after 6 weeks of topical use.',
        },
      ],
    },
  ],
}
