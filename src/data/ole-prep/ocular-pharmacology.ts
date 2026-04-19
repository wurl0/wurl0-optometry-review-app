import { OlePrepData } from '@/lib/ole-prep-types'

export const ocularPharmacologyData: OlePrepData = {
  subject: 'Ocular Pharmacology',
  slug: 'ocular-pharmacology',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Cycloplegic Strength (strongest to weakest)',
          device: 'All Snakes Have Cute Tails',
          breakdown: 'Atropine > Scopolamine > Homatropine > Cyclopentolate > Tropicamide. Atropine lasts 14 days; tropicamide lasts 4–6 hours.',
        },
        {
          kind: 'mnemonic',
          term: 'Atropine Toxicity Signs',
          device: 'Mad as a hatter, red as a beet, dry as a bone, blind as a bat, hot as a hare',
          breakdown: 'Mad = confusion/psychosis; Red = cutaneous flush; Dry = dry membranes, urinary retention; Blind = cycloplegia/mydriasis; Hot = hyperpyrexia. Antidote: physostigmine 1–4 mg IV.',
        },
        {
          kind: 'mnemonic',
          term: 'Ophthalmic Bottle Cap Colors',
          device: 'My Blue-Yellow Beta Blocks Green Miotics, Pink Steroids, Orange CAIs, Turquoise PGs',
          breakdown: 'Mydriatics/cycloplegics = RED. Beta blockers = YELLOW/BLUE. Miotics = GREEN. Corticosteroids = PINK. CAIs = ORANGE. Prostaglandin analogs = TURQUOISE. NSAIDs = GRAY. Anti-infectives = BROWN/TAN. Adrenergics = PURPLE.',
        },
        {
          kind: 'mnemonic',
          term: 'Dyes — Rose Bengal Before Fluorescein',
          device: 'RB First, Fluoro Second (Rose Before Fluorescein)',
          breakdown: 'Rose Bengal MUST be used BEFORE fluorescein. Rose Bengal stains devitalized cells and mucus (brilliant red). Fluorescein stains epithelial defects (bright green). If anesthetic is used with Rose Bengal, it can destroy cells — causing false-positive KCS.',
        },
        {
          kind: 'mnemonic',
          term: 'Anti-Glaucoma Drug Classes',
          device: 'Pretty Big Cats Always Make Ocular Pressure',
          breakdown: 'Prostaglandins (increase uveo-scleral outflow), Beta-blockers (decrease AH secretion), CAIs (decrease AH secretion), Alpha-2 agonists (decrease AH + increase outflow), Miotics (increase trabecular outflow), Osmotherapy (osmotic gradient), Parasympathomimetics (trabecular outflow).',
        },
        {
          kind: 'mnemonic',
          term: 'Cornea Verticillata (Whorl Keratopathy) Drugs',
          device: 'CIATI — "See It At The Iris"',
          breakdown: 'Chloroquine, Indomethacin, Amiodarone, Tamoxifen, surIn (suramin). All produce whorl-like epithelial deposits. Chloroquine = midline; Amiodarone = anterior/periphery.',
        },
        {
          kind: 'mnemonic',
          term: 'Horner\'s Syndrome Signs',
          device: 'MAP — Miosis, Anhidrosis, Ptosis (partial)',
          breakdown: 'Miosis (dilator pupillae denervation), partial blepharoptosis 1–2 mm (Mueller\'s muscle denervation), anhidrosis of face and neck (sweat gland denervation). Lesion at superior cervical sympathetic ganglion or its fibers via nasociliary → long ciliary nerve.',
        },
        {
          kind: 'mnemonic',
          term: 'Drugs Causing Angle-Closure Glaucoma',
          device: 'BDAT-SCAM',
          breakdown: 'Benztropine, Diazepam/chlorodiazepoxide, Antihistamines (chlorpheniramine), Tricyclic antidepressants, Scopolamine, Chlorpromazine/Amphetamines, Muscarinic blockers. All cause angle closure via mydriasis or pupillary block.',
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
          content: 'TROPICAMIDE is the most commonly used mydriatic and cycloplegic agent (DOC for routine mydriasis). CYCLOPENTOLATE is the DOC for routine cycloplegia. ATROPINE is the DOC for severe uveitis, amblyopia penalization, and cycloplegic refraction in young children.',
          highlight: 'Tropicamide = DOC mydriasis; Cyclopentolate = DOC cycloplegia; Atropine = DOC uveitis/amblyopia',
        },
        {
          kind: 'fact',
          content: 'ROSE BENGAL stains devitalized cells and mucus (brilliant red). FLUORESCEIN stains corneal epithelial DEFECTS (bright green). Rose Bengal MUST be used BEFORE fluorescein — anesthetic can destroy cells causing false-positive KCS results. Fluorescein promotes Pseudomonas growth (always use paper strips).',
          highlight: 'Rose Bengal before Fluorescein; fluorescein = epithelial defects; Rose Bengal = devitalized cells',
        },
        {
          kind: 'fact',
          content: 'The prostaglandin analogs (latanoprost, travoprost, bimatoprost) increase UVEO-SCLERAL outflow. Unique side effects: iris heterochromia (increased brown pigmentation), increased eyelash length and number, darkening of eyelids. Cap color = TURQUOISE.',
          highlight: 'PGs: increase uveo-scleral outflow; S/E: iris pigmentation, eyelash changes',
        },
        {
          kind: 'fact',
          content: 'CHLOROQUINE/HYDROXYCHLOROQUINE causes BULL\'S EYE MACULOPATHY (ring scotoma at 4–9° from fixation). Also causes whorl-like corneal deposits (cornea verticillata) at midline and tritan color defects. This is tested heavily as an ocular toxicity board question.',
          highlight: 'Chloroquine = bull\'s eye maculopathy + cornea verticillata (midline)',
        },
        {
          kind: 'fact',
          content: 'CORTICOSTEROIDS cause POSTERIOR SUBCAPSULAR CATARACT and OPEN-ANGLE GLAUCOMA (by inhibiting lysosomal enzyme at the aqueous chamber, impeding AH outflow). Provocation test: 0.1% dexamethasone TID × 4–6 weeks elevates IOP in steroid responders.',
          highlight: 'Steroids → PSC cataract + open-angle glaucoma',
        },
        {
          kind: 'fact',
          content: 'ETHAMBUTOL causes OPTIC NEURITIS with RED-GREEN color defects (especially blue-yellow tritan defects early). INH, rifampin, and chloramphenicol also cause optic neuritis/atrophy. These are the anti-TB agents to know for board ocular toxicity questions.',
          highlight: 'Ethambutol + INH → optic neuritis; red-green color defect',
        },
        {
          kind: 'fact',
          content: 'COCAINE 4% fails to dilate the Horner\'s pupil in ALL lesion levels (central, preganglionic, postganglionic). HYDROXYAMPHETAMINE 1% distinguishes between preganglionic (dilates) and postganglionic (does NOT dilate) lesions in Horner\'s syndrome.',
          highlight: 'Cocaine = confirms Horner\'s (any level). Hydroxyamphetamine = localizes to preganglionic vs. postganglionic.',
        },
        {
          kind: 'fact',
          content: 'IRIS CYSTS are a side effect of echothiophate and DFP (irreversible AChE inhibitors). They are PREVENTED and REVERSED by adding 2.5% phenylephrine. Echothiophate and DFP also cause anterior subcapsular cataracts and retinal detachment risk.',
          highlight: 'Echothiophate/DFP → iris cysts (prevent/reverse with 2.5% phenylephrine)',
        },
        {
          kind: 'fact',
          content: 'BENZALKONIUM CHLORIDE (BAK) is a bactericidal preservative and cationic surfactant (wetting agent) that enhances corneal penetration of lipid-insoluble drugs like carbachol. BAK breaks the corneal barrier, allowing better drug absorption.',
          highlight: 'BAK = bactericidal preservative + wetting agent that enhances penetration of lipid-insoluble drugs',
        },
        {
          kind: 'fact',
          content: 'DIGITALIS causes XANTHOPSIA — a yellow tinge to vision ("snowy vision"). AMIODARONE causes colored halos. Red-green defects: ethambutol, INH. TRITAN defects (earliest, affecting ganglion cells): indomethacin, chloroquine, phenothiazines.',
          highlight: 'Digitalis = xanthopsia (yellow); Amiodarone = colored halos; Ethambutol/INH = red-green defect',
        },
        {
          kind: 'fact',
          content: 'BETAXOLOL is the ONLY cardioselective (beta-1 selective) beta-blocker approved for glaucoma. It is safe in asthma, COPD, and insulin-dependent DM — conditions where non-selective beta-blockers (timolol, levobunolol) are contraindicated.',
          highlight: 'Betaxolol = cardioselective; safe in asthma/COPD/DM. Timolol = non-selective; C/I in asthma',
        },
        {
          kind: 'fact',
          content: 'ISOSORBIDE (oral osmotic agent) is SAFE in diabetic patients because it is NOT metabolized to glucose. GLYCEROL is CONTRAINDICATED in DM because it is metabolized to glucose and causes transient blood glucose rise.',
          highlight: 'Isosorbide = safe in DM. Glycerol = C/I in DM (metabolized to glucose)',
        },
        {
          kind: 'fact',
          content: 'MANNITOL is the most commonly used osmotic agent. It is given as SLOW IV infusion only, has a large molecular weight (stays in blood circulation), and is safe in renal disease. It is used for cerebral edema, pre-op IOP reduction, and acute angle-closure glaucoma.',
          highlight: 'Mannitol = most common osmotic agent; IV only; large MW; safe in renal disease',
        },
        {
          kind: 'fact',
          content: 'ACETAZOLAMIDE most common side effect is PARESTHESIA — numbness and tingling at the mouth and extremities. Other S/E: nephrolithiasis, K+ loss, myopia (ciliary body swelling), aplastic anemia (blood dyscrasia), metallic taste, diuresis. C/I: Addison\'s disease, kidney/liver disease, hyperchloremic acidosis, severe COPD.',
          highlight: 'Acetazolamide most common S/E = paresthesia (tingling lips and extremities)',
        },
        {
          kind: 'fact',
          content: 'PILOCARPINE is CONTRAINDICATED in MALIGNANT GLAUCOMA. It is used for both open-angle and angle-closure glaucoma (to widen the trabecular angle). 0.1% pilocarpine diagnoses Adie\'s pupil (constricts supersensitive Adie\'s pupil; normal pupil does not respond to 0.1%, only to 0.5–1%).',
          highlight: 'Pilocarpine C/I in malignant glaucoma. 0.1% = Adie\'s pupil test',
        },
        {
          kind: 'fact',
          content: 'NATAMYCIN 5% is the DOC for FILAMENTOUS fungal keratitis (Fusarium, Aspergillus). AMPHOTERICIN B is the DOC for CANDIDA keratitis and fungal endophthalmitis (intravitreal). TRIFLURIDINE 1% is the DOC for HSV (herpes simplex) keratitis.',
          highlight: 'Natamycin = filamentous fungi DOC. Amphotericin B = Candida DOC. Trifluridine = HSV DOC.',
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
          question: 'Which mydriatic/cycloplegic agent has the LONGEST duration of action?',
          wrong: 'Cyclopentolate (most commonly used)',
          correct: 'Atropine — duration 14 days (1% formulation)',
          why: 'Tropicamide is the most COMMONLY used, but has the SHORTEST duration (4–6 hrs). Atropine is the STRONGEST and LONGEST-acting (14 days). Do not confuse "most used" with "longest." Strength order: Atropine > Scopolamine > Homatropine > Cyclopentolate > Tropicamide.',
        },
        {
          kind: 'trap',
          question: 'Rose Bengal staining should be performed AFTER fluorescein. True or False?',
          wrong: 'True — apply fluorescein first, then Rose Bengal',
          correct: 'False — Rose Bengal is applied BEFORE fluorescein, not after',
          why: 'Rose Bengal must be used FIRST. If anesthetic is applied with Rose Bengal, it destroys cells causing false-positive KCS results. Rose Bengal stains devitalized cells (brilliant red). Fluorescein stains epithelial defects (bright green). Order matters on the board exam.',
        },
        {
          kind: 'trap',
          question: 'Corticosteroids cause posterior subcapsular cataract. Which type of glaucoma do they cause?',
          wrong: 'Angle-closure glaucoma',
          correct: 'Open-angle glaucoma — by inhibiting lysosomal enzymes at the aqueous chamber, impairing AH outflow',
          why: 'Steroids cause OPEN-ANGLE glaucoma, not angle-closure. The mechanism is inhibition of lysosomal enzymes at the AH outflow pathway. In contrast, drugs that cause ANGLE-CLOSURE include anticholinergics (atropine, cyclopentolate), antihistamines, and tricyclics — all via mydriasis/pupillary block.',
        },
        {
          kind: 'trap',
          question: 'Which beta-blocker is safe to use in a patient with bronchial asthma?',
          wrong: 'Timolol — most commonly used ophthalmic beta-blocker',
          correct: 'Betaxolol — cardioselective (beta-1) beta-blocker; safe in asthma and COPD',
          why: 'Timolol is non-selective (blocks beta-1 AND beta-2). Beta-2 blockade causes bronchoconstriction — dangerous in asthma. Betaxolol selectively blocks beta-1 only, sparing the beta-2 bronchial receptors. Betaxolol is also safe in COPD and insulin-dependent DM.',
        },
        {
          kind: 'trap',
          question: 'Cocaine 4% will NOT dilate the pupil in postganglionic Horner\'s syndrome. What about hydroxyamphetamine?',
          wrong: 'Hydroxyamphetamine also fails to dilate in all Horner\'s lesions',
          correct: 'Hydroxyamphetamine DOES dilate central and preganglionic lesions, but FAILS to dilate postganglionic Horner\'s',
          why: 'Cocaine fails in ALL Horner\'s lesions (blocks NE reuptake — no NE in any level of Horner\'s). Hydroxyamphetamine ENHANCES NE release — it can work if the postganglionic neuron is intact (central/preganglionic lesions). If postganglionic is damaged, no NE to release → no dilation. This distinction is a classic board distinction.',
        },
        {
          kind: 'trap',
          question: 'Glycerol (oral) is the safest osmotic agent for diabetic patients with acute angle-closure glaucoma.',
          wrong: 'True — glycerol is an osmotic agent and safe in all patients',
          correct: 'False — glycerol is CONTRAINDICATED in DM. Isosorbide is the safe oral osmotic for diabetics.',
          why: 'Glycerol is metabolized to glucose, causing transient blood glucose elevation — dangerous in diabetics. Isosorbide is NOT metabolized to glucose and is the safe alternative for diabetic patients. Mannitol (IV) is also safe if systemic route is needed.',
        },
        {
          kind: 'trap',
          question: 'Which dye is used to evaluate TBUT (tear break-up time)?',
          wrong: 'Rose Bengal',
          correct: 'Fluorescein — instilled and viewed with cobalt blue light; TBUT measured in seconds',
          why: 'Fluorescein evaluates TBUT and is used with a cobalt blue filter (peak absorption 465–490 nm, peak emission 520–530 nm, yellow-green color). Rose Bengal is used to diagnose KCS and Sjogren\'s by staining devitalized cells and mucin in the conjunctiva. Both are used in dry eye workup, but for different purposes.',
        },
        {
          kind: 'trap',
          question: 'Cyclopentolate 2% is preferred in pediatric patients for cycloplegic refraction.',
          wrong: 'True — 2% gives maximum cycloplegia',
          correct: 'False — 0.5–1% cyclopentolate is used in children to avoid CNS side effects; 2% causes psychosis, hallucinations, and seizures',
          why: 'Cyclopentolate 2% in children causes CNS toxicity: drowsiness, disorientation, visual hallucinations, personality changes, psychosis, and seizures. Use 0.5% for neonates and 1% for older children. Do punctal occlusion after instillation to prevent systemic absorption.',
        },
        {
          kind: 'trap',
          question: 'Pilocarpine is the treatment of choice for malignant glaucoma.',
          wrong: 'True — pilocarpine is a miotic used for all types of glaucoma',
          correct: 'False — Pilocarpine is CONTRAINDICATED in malignant glaucoma',
          why: 'Malignant glaucoma (aqueous misdirection syndrome) requires cycloplegics (atropine) and mydriatics to relax the ciliary body — not miotics. Pilocarpine contracts the ciliary muscle and would worsen the condition by pushing the lens-iris diaphragm forward. This is a critical clinical trap.',
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
          prompt: 'List the 5 cycloplegic agents in order from strongest to weakest, and give their duration of action.',
          answer: 'Atropine (14 days) > Scopolamine (24 hrs) > Homatropine (6 hrs–4 days) > Cyclopentolate (6–24 hrs) > Tropicamide (4–6 hrs). Tropicamide = DOC for routine mydriasis. Cyclopentolate = DOC for routine cycloplegia. Atropine = DOC for severe uveitis/amblyopia.',
        },
        {
          kind: 'recall',
          prompt: 'What are the five classes of anti-glaucoma drugs? Give one example from each class and its mechanism of action.',
          answer: 'Prostaglandin analogs (latanoprost — increases uveo-scleral outflow). Beta-blockers (timolol — decreases AH secretion). CAIs (acetazolamide — inhibits carbonic anhydrase → decreases AH secretion). Alpha-2 agonists (brimonidine — decreases AH + increases uveo-scleral). Miotics (pilocarpine — contracts Brucke\'s muscle → opens trabecular). Osmotherapy (mannitol — osmotic gradient reduces AH).',
        },
        {
          kind: 'recall',
          prompt: 'Which drugs are used to test for Horner\'s syndrome, and what does each test tell you?',
          answer: 'Cocaine 4%: blocks NE reuptake → fails to dilate Horner\'s at ALL lesion levels (confirms Horner\'s, any level). Hydroxyamphetamine 1%: enhances NE release → dilates central/preganglionic; FAILS to dilate postganglionic (localizes lesion). Phenylephrine 1% (vs. 2.5%): denervation supersensitivity in postganglionic — Horner\'s dilates at 1%; normal needs 2.5%.',
        },
        {
          kind: 'recall',
          prompt: 'Name the diagnostic dyes used in optometry, what each stains, and their antimicrobial properties.',
          answer: 'Fluorescein: corneal epithelial defects (bright green); no antimicrobial. Rose Bengal: devitalized cells/mucus (brilliant red); antiviral. Lissamine Green: devitalized cells/mucus; antiviral (0.06%). Methylene Blue: devitalized cells, corneal nerves; antibacterial. Trypan Blue: anterior capsule (phaco); devitalized cells. Indocyanine Green (ICG): diseased endothelial cells; IV for choroidal angiography.',
        },
        {
          kind: 'recall',
          prompt: 'What are the systemic side effects of atropine toxicity? What is the antidote?',
          answer: 'Mnemo: "Mad as a hatter, red as a beet, dry as a bone, blind as a bat, hot as a hare." Specifically: hallucination/confusion, cutaneous flush (red skin), dry mucous membranes/urinary retention, mydriasis/cycloplegia, hyperpyrexia (high-grade fever), tachycardia, somnolence. Antidote: physostigmine 1–4 mg IV.',
        },
        {
          kind: 'recall',
          prompt: 'Which systemic drugs cause the following specific ocular complications: (1) bull\'s eye maculopathy, (2) posterior subcapsular cataract, (3) xanthopsia, (4) optic neuritis with red-green defect, (5) colored halos.',
          answer: '(1) Bull\'s eye maculopathy: chloroquine/hydroxychloroquine. (2) Posterior subcapsular cataract: corticosteroids (prolonged use). (3) Xanthopsia (yellow tinge): digitalis. (4) Optic neuritis + red-green defect: ethambutol, INH. (5) Colored halos: amiodarone.',
        },
        {
          kind: 'recall',
          prompt: 'What is the most common side effect of acetazolamide? What are its contraindications?',
          answer: 'Most common S/E: paresthesia (numbness and tingling at mouth and extremities). Other S/E: nephrolithiasis, K+ loss, transient myopia (ciliary body swelling), aplastic anemia (blood dyscrasia), metallic taste, metabolic acidosis, diuresis. C/I: Addison\'s disease (adrenal insufficiency), kidney/liver disease, hyperchloremic acidosis, severe COPD.',
        },
        {
          kind: 'recall',
          prompt: 'What is the mechanism of action and key side effects of prostaglandin analogs for glaucoma?',
          answer: 'MOA: Increase UVEO-SCLERAL outflow (the 10–20% pathway). Key side effects: heterochromia (increased iris brown pigmentation), increased eyelash length and number, darkening of eyelashes and eyelids, conjunctival hyperemia, eye redness/itching, dry eyes, tearing, eyelid crusting. Drugs: latanoprost 0.005%, travoprost 0.004%, bimatoprost 0.03%. Cap color = TURQUOISE. First-line for OAG due to once-daily dosing.',
        },
        {
          kind: 'recall',
          prompt: 'Describe the pharmacological properties and uses of benzalkonium chloride (BAK).',
          answer: 'BAK is a quaternary ammonium cationic surfactant (wetting agent) and bactericidal preservative. MOA: alters cell membrane permeability. Enhances corneal penetration of lipid-insoluble drugs (e.g., carbachol). Used as: (1) biocide/antiseptic, (2) preservative in ophthalmic solutions, (3) wetting agent for drug penetration. Solutions are slightly alkaline, foam when shaken, bitter taste, faint almond odor. Acts on Gram-positive bacteria preferentially.',
        },
        {
          kind: 'recall',
          prompt: 'What are the approved diagnostic pharmaceutical agents (DPAs) for optometry? Give the exact concentrations.',
          answer: '5 approved DPAs: (1) Mydriatic without cycloplegia: 2.5% phenylephrine. (2) Mydriatic with cycloplegia: 0.5% tropicamide. (3) Cycloplegic: 0.5% cyclopentolate. (4) Local anesthetic: 0.5% proparacaine OR 0.4% benoxinate. (5) Diagnostic dye: fluorescein strip.',
        },
        {
          kind: 'recall',
          prompt: 'What are the contraindications for miotics? What drug is used to reverse iris cysts caused by echothiophate and DFP?',
          answer: 'Contraindications for miotics: cataract, age <40 years, neovascular glaucoma, uveitis glaucoma, retinal detachment, bronchial asthma, malignant glaucoma (pilocarpine specifically). Iris cysts from echothiophate/DFP: prevented and reversed by 2.5% phenylephrine. Echothiophate also used for accommodative esotropia; DFP for aphakic glaucoma and accommodative esotropia.',
        },
        {
          kind: 'recall',
          prompt: 'Compare the antifungal agents used in ophthalmology: indications, coverage, and limitations.',
          answer: 'Natamycin 5% suspension: DOC for filamentous fungi (Fusarium, Aspergillus); poorest corneal penetration; topical only. Amphotericin B 0.1–0.5%: DOC for Candida keratitis and fungal endophthalmitis; intravitreal for endophthalmitis; nephrotoxic systemically. Voriconazole (oral/IV/topical): emerging DOC for fungal keratitis; excellent penetration; broad spectrum. Fluconazole (oral): good for Candida; poor for filamentous fungi.',
        },
      ],
    },
  ],
}
