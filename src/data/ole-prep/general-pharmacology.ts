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
  ],
}
