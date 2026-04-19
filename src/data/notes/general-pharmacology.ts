import { NotesData } from '@/lib/notes-types'

export const generalPharmacologyNotes: NotesData = {
  subject: 'General Pharmacology',
  slug: 'general-pharmacology',
  sections: [
    {
      id: 'definitions-terminology',
      title: 'Definitions & Terminology',
      blocks: [
        {
          kind: 'text',
          content: 'Pharmacology is the science of drugs — studying their properties and use. The main goal is to develop more effective medicinal drugs for treatment and prophylaxis of disease. General Pharmacology covers the foundational concepts: pharmacokinetics (what the body does to the drug) and pharmacodynamics (what the drug does to the body).',
        },
        {
          kind: 'sub',
          title: 'Core Definitions',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Pharmacology', 'Science of drugs — their properties, uses, and effects'],
                ['Clinical Pharmacology', 'Evaluates drug actions, preferred routes, and safe dosage in humans via clinical trials'],
                ['Drugs', 'Chemicals that alter functions of living organisms; given for diagnosis, prevention, control, or cure of disease'],
                ['Pharmacy', 'Science of identification, selection, preservation, standardization, compounding, and dispensing of medical substances'],
                ['Pharmacodynamics', 'Study of biological and therapeutic effects of drugs ("what the drug does to the body")'],
                ['Pharmacokinetics', 'Study of absorption, distribution, metabolism, and excretion (ADME) of drugs ("what the body does to the drug")'],
                ['Pharmacotherapeutics', 'Proper selection and use of drugs for prevention and treatment of disease'],
                ['Toxicology', 'Science of poisons; many drugs at larger doses act as poisons'],
                ['Chemotherapy', 'Effect of drugs on microorganisms, parasites, and neoplastic cells in living organisms'],
                ['Pharmacopeia', 'Official code listing established drugs and preparations with physical properties and tests for identity, purity, and potency'],
                ['Pharmacognosy', 'Identification of crude effects of naturally occurring drugs'],
                ['Posology', 'Study of drug dosage'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug Properties & Names',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Potency', 'Lowest concentration of drug needed to produce the desired pharmacologic effect (EC50/ED50)'],
                ['Efficacy', 'Highest concentration of drug needed to produce the desired pharmacologic effect (Emax)'],
                ['Drug Product', 'Finished dosage form containing active ingredients'],
                ['Active Ingredients', 'Chemical components responsible for claimed therapeutic effects'],
                ['Generic Drug', 'Drug product whose patent has expired or was never patented'],
                ['Generic Name', 'Shortened scientific name based on active ingredient; widely used'],
                ['Chemical Name', 'Complete description of chemical structure; not commonly used clinically'],
                ['Brand/Trade Name', 'Name given by pharmaceutical company to distinguish their product'],
                ['Half-life (t½)', 'Time for plasma concentration of drug to decrease by 50% after discontinuance; formula: 0.693/t½'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Potency vs Efficacy distinction is a board favorite. Potency = lowest dose for effect (EC50). Efficacy = maximum effect a drug can produce (Emax). A drug can be highly potent (small dose needed) but have low efficacy (weak maximal effect).',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Altered Drug Responses',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Hypersensitivity / Hyperreactivity', 'Drug produces usual effect at unexpectedly low dosage'],
                ['Supersensitivity', 'Increased sensitivity resulting from denervation allergy'],
                ['Hyporeactivity', 'Drug produces usual effect at unexpectedly large dosage'],
                ['Tolerance', 'Decreased sensitivity from prior drug exposure; due to enzyme induction (more drug metabolized, lower plasma effect)'],
                ['Tachyphylaxis', 'Tolerance that develops rapidly after only a few doses'],
                ['Immunity', 'Reduced sensitivity resulting from antibody formation'],
                ['Idiosyncratic Reaction', 'Untoward reaction with no obvious pharmacodynamic cause; not attributable to hypersensitivity'],
                ['Placebo', 'Substance without intrinsic pharmacologic activity but may yield valuable therapeutic effect'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Drugs for Ocular Diseases',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Prophylactic Drugs — prevent ocular diseases',
                'Diagnostic Drugs — detect or diagnose ocular diseases',
                'Therapeutic Drugs — treat ocular disease',
                '  a. Curative — reverses a basic pathologic process',
                '  b. Protective — limits damage caused by a pathologic process',
                '  c. Palliative — relieves symptoms without modifying the causal process',
                'Rational Drug — therapeutic mechanism is understood',
                'Empirical Drug — rests on clinical and statistical evidence of effectiveness',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'BFAD Controlled Substance Schedules',
          blocks: [
            {
              kind: 'table',
              headers: ['Schedule', 'Abuse Potential', 'Examples', 'Prescribing Rules'],
              rows: [
                ['Schedule I (C-I)', 'High; no accepted medical use', 'Marijuana, Heroin, LSD, Mescaline, THC', 'Not available for therapeutic use'],
                ['Schedule II (C-II)', 'High; severe psychic or physical dependence', 'Meperidine, Cocaine, Morphine, Methadone, Amphetamine, Pentobarbital', 'Written prescription; supplied within 72 hrs; cannot refill except emergency'],
                ['Schedule III (C-III)', 'Less abuse; moderate/low physical or high psychological dependence', 'Codeine, Hydrocodone', 'May not be refilled more than 6 months after issue date'],
                ['Schedule IV (C-IV)', 'Less abuse; limited dependence', 'Diazepam, Alprazolam, Clorazepate, Phenobarbital', 'May not be refilled more than 6 months after issue date'],
                ['Schedule V (C-V)', 'Limited abuse potential', 'Loperamide, Robitussin AC', 'Loperamide dispensed without PO; Robitussin AC needs PO'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug Development Phases',
          blocks: [
            {
              kind: 'table',
              headers: ['Phase', 'Purpose', 'Subjects', 'Duration'],
              rows: [
                ['Preclinical Testing', 'Determine drug effects and safety', 'Lab animals', '1–2 years'],
                ['Phase I (Clinical)', 'Determine effects, safe dosage, pharmacokinetics', 'Small group of healthy volunteers', '<1 year'],
                ['Phase II (Clinical)', 'Assess drug effectiveness for target disease', '200–300 patients', '2 years'],
                ['Phase III (Clinical)', 'Assess effectiveness and safety in larger population', '1,000–3,000 patients', '3 years'],
                ['Phase IV (Post-NDA)', 'Monitor problems after NDA approval', 'General population', 'Indefinite'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Sequence: Preclinical → IND application → Phase I–III → NDA Approval → Phase IV (post-marketing surveillance). Phase IV is the only phase done after NDA approval.',
            },
          ],
        },
      ],
    },
    {
      id: 'pharmacokinetics',
      title: 'Pharmacokinetics (ADME)',
      blocks: [
        {
          kind: 'diagram',
          id: 'gp-pharmacokinetics',
        },
        {
          kind: 'text',
          content: 'Pharmacokinetics is the mathematical description of the rate and extent of drug uptake and distribution in the body. It covers: (a) Routes of Administration, (b) Absorption, (c) Distribution, (d) Biotransformation, (e) Elimination, and (f) Excretion.',
        },
        {
          kind: 'sub',
          title: 'Routes of Drug Administration',
          blocks: [
            {
              kind: 'table',
              headers: ['Category', 'Routes'],
              rows: [
                ['Enteral', 'Sublingual (under tongue), Oral (per os/by mouth), Rectal (in rectum)'],
                ['Parenteral', 'Injections, Inhalations, Intranasal, Transcutaneous, Intravenous'],
                ['Topical', 'On surface of skin, On surface of mucous membrane'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'IV administration: rapid onset, short duration, 100% bioavailability',
                'Oral administration: slow onset, lower concentration, longer duration',
                'First-pass metabolism occurs with oral drugs — drug exposed to liver before reaching systemic circulation',
                'IV drugs bypass first-pass effect and enter systemic circulation directly',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug Absorption',
          blocks: [
            {
              kind: 'text',
              content: 'Absorption is the entry of a drug into the blood from the site of administration. Drugs must cross cell membranes via four mechanisms.',
            },
            {
              kind: 'table',
              headers: ['Mechanism', 'Direction', 'Energy', 'Carrier', 'Saturable'],
              rows: [
                ['Passive Diffusion', 'Down concentration gradient', 'Not required', 'Not required', 'No'],
                ['Facilitated Diffusion (Filtration)', 'Down concentration gradient', 'Not required', 'Required', 'Yes'],
                ['Active Transport', 'Against gradient', 'ATP required', 'Required', 'Yes'],
                ['Endocytosis', 'Into cell', 'Required', 'Not required', 'No'],
              ],
            },
            {
              kind: 'sub',
              title: 'Bioavailability',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Bioavailability = fraction of administered drug reaching systemic circulation',
                    'IV route: 100% bioavailability (zero-order kinetics)',
                    'All other routes: <100% (first-order kinetics)',
                    'Factors: solubility, dietary pattern, tablet size, quality control, first-pass metabolism',
                    'Absolute bioavailability: compares non-IV to IV administration of same drug',
                    'Relative bioavailability: compares two formulations of same drug',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Kinetics of Absorption',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'First-order kinetics: constant FRACTION of drug reaches blood; applies to all routes except IV, IA, IC',
                    'Zero-order kinetics: 100% of drug reaches blood; applies to IV, IA, IC routes only',
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug Distribution',
          blocks: [
            {
              kind: 'text',
              content: 'Distribution is the process by which a drug leaves the bloodstream and enters the interstitium or cells of tissues. Five major factors affect distribution.',
            },
            {
              kind: 'table',
              headers: ['Factor', 'Details'],
              rows: [
                ['A. Protein Barriers', 'Free/unbound form = active, reaches site of action. Bound form = binds albumin in blood until excreted. Metabolite = post-hepatic transformation product. Pro-drug (inactive) = requires metabolism to activate.'],
                ['B. Blood Flow', 'Higher blood flow = faster distribution to that tissue'],
                ['C. Tissue Permeability', 'Lipid-soluble drugs penetrate better; Blood-brain barrier limits CNS access'],
                ['D. Size of Organ', 'Larger organ = larger volume of distribution'],
                ['E. Presence of Receptors', 'Drug concentrates where receptors are present'],
              ],
            },
            {
              kind: 'sub',
              title: 'Drug Receptors',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Receptor = specific molecular protein or macromolecule (DNA) that interacts with drug to initiate biochemical events',
                    'Follows "lock and key" principle',
                    'Must be selective and modifiable to produce effect',
                    'Affinity = amount of attraction between drug and receptor',
                    'High affinity: drug binds receptor at low concentration',
                    'Receptor Sites: Type I (cell membrane), Type II (cytoplasm), Type III (nucleus)',
                  ],
                },
                {
                  kind: 'table',
                  headers: ['Bond Type', 'Strength', 'Effect'],
                  rows: [
                    ['Covalent Bond', 'Strongest', 'Irreversible effect'],
                    ['Ionic Bond', 'Strong', 'Reversible'],
                    ['Hydrogen Bond', 'Moderate', 'Reversible'],
                    ['Hydrophobic Bond', 'Moderate', 'Reversible'],
                    ['Van der Waals Bond', 'Weakest (but most common)', 'Reversible; most drugs contain cationic and anionic groups'],
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Biotransformation (Drug Metabolism)',
          blocks: [
            {
              kind: 'text',
              content: 'Biotransformation is the metabolism of drugs in the body. The primary organ is the liver, operating through the cytochrome P450 (CYP450) microsomal enzyme system. Two sequential stages produce metabolites for excretion.',
            },
            {
              kind: 'table',
              headers: ['Stage', 'Reactions', 'Enzymes', 'Result'],
              rows: [
                ['Stage I (Non-synthetic)', 'Oxidation (most common), Reduction, Hydrolysis', 'Cytochrome P450 system', 'Active or inactive products entering Stage II'],
                ['Stage II (Synthetic/Conjugation)', 'Conjugation with glucuronic/sulfuric acids, methylation, acetylation', 'Transferases', 'Inactive metabolites excreted from body'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Oxidation: addition of O2 or removal of Hydrogen (most common Stage I reaction)',
                'Reduction: addition of Hydrogen or removal of Oxygen',
                'Hydrolysis: drug broken into separate parts',
                'Inductors of microsomal oxidation (increase enzyme activity): Phenobarbital, Chlorpromazine',
                'Inhibitors of microsomal oxidation (decrease enzyme activity): Metronidazole',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Excretion & Elimination',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Excretion = process by which drug leaves the body; drugs excreted as non-polar (water-soluble) metabolites via liver metabolism',
                'Elimination = disappearance of active drug molecule from blood circulation; relates to termination of drug action',
                'First-order elimination: rate of elimination proportionate to drug concentration in plasma',
                'Zero-order elimination: elimination at constant rate regardless of plasma concentration',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pharmacokinetic Metrics',
          blocks: [
            {
              kind: 'table',
              headers: ['Metric', 'Definition'],
              rows: [
                ['Volume of Distribution (Vd)', 'Apparent volume in which drug is distributed; relates drug concentration to drug amount in body'],
                ['Elimination Half-life (t½)', 'Time required for drug concentration to reach half its original value'],
                ['Steady State Concentration (Css)', 'Concentration when drug intake and elimination are in dynamic equilibrium; reached after 4–5 half-lives of regular dosing'],
                ['Area Under the Curve (AUC)', 'Integral of concentration-time curve after single dose or at steady state; reflects total drug exposure'],
                ['Clearance (Cl)', 'Volume of plasma cleared of drug per unit time'],
                ['Bioavailability (F)', 'Systemically available fraction of a drug; IV = 100%; all other routes < 100%'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Steady state is reached after 4–5 half-lives. This is clinically important — drug levels plateau after this period regardless of continued dosing at the same rate.',
            },
          ],
        },
      ],
    },
    {
      id: 'pharmacodynamics',
      title: 'Pharmacodynamics',
      blocks: [
        {
          kind: 'text',
          content: 'Pharmacodynamics is the study of biological and therapeutic effects of drugs on the body — mechanisms of action, receptor interactions, and dose-response relationships.',
        },
        {
          kind: 'sub',
          title: 'Types of Drug Ligands',
          blocks: [
            {
              kind: 'table',
              headers: ['Ligand', 'Affinity', 'Intrinsic Activity', 'Effect'],
              rows: [
                ['Agonist', 'High', 'High', 'Activates receptor; produces maximal biological response similar to physiologic signal'],
                ['Partial Agonist', 'Full', 'Low', 'Activates receptor but produces submaximal effect; antagonizes full agonist when present'],
                ['Inverse Agonist', 'Present', '<0 (negative)', 'Decreases number of activated receptors below baseline; reverses activity of receptors'],
                ['Antagonist', 'Present', '0 (zero)', 'Blocks agonist binding; no effect alone; efficacy is zero'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Inverse agonist vs antagonist: An antagonist has ZERO intrinsic activity (no effect alone but blocks agonist). An inverse agonist has NEGATIVE intrinsic activity (actively opposes baseline receptor activity, even without agonist present).',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Antagonism',
          blocks: [
            {
              kind: 'sub',
              title: 'By Mechanism of Action',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Chemical antagonism — antagonist neutralizes agonist (e.g., chelation of heavy metals)',
                    'Physiologic antagonism — antagonist acts at a separate receptor producing functionally opposite effects',
                    'Pharmacologic antagonism — antagonist acts at a similar receptor causing competitive antagonism',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'By Surmountability',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Competitive (surmountable) antagonism — agonist and antagonist compete at the same active site; increasing agonist dose can overcome the antagonist',
                    'Non-competitive (non-surmountable) antagonism — antagonist acts at a site beyond the active site; cannot be overcome by increasing agonist',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'By Bond Interaction',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Reversible antagonism — forms non-covalent bond (intermolecular forces); effect can be reversed',
                    'Irreversible antagonism — binds covalently to active site; reduces number of receptors available to agonist',
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drug Interaction Enhancement',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Formula', 'Definition'],
              rows: [
                ['Addition', '1 + 1 = 2', 'Response of combined drugs equals the sum of individual responses'],
                ['Synergism', '1 + 1 = 3', 'Response of combined drugs is greater than the sum of individual responses'],
                ['Potentiation', '0 + 1 = 2', 'Drug A has no effect alone but enhances the effect of Drug B'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Dose-Response Relationships',
          blocks: [
            {
              kind: 'diagram',
              id: 'gp-dose-response',
            },
            {
              kind: 'sub',
              title: '1. Graded Dose-Response',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Plots magnitude of response against increasing drug doses',
                    'Response increases continuously with greater concentration of unbound drug at receptor site',
                    'POTENCY: EC50 or ED50 — concentration/dose producing 50% of maximal response',
                    'EFFICACY: Emax — maximum response achievable; reflected by intrinsic activity',
                    'Graded dose-response curve indicates maximal efficacy of a drug',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: '2. Quantal Dose-Response',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Plots percent of population that responds vs drug dose',
                    'Used to assess margin of safety of a drug',
                    'ED50: dose at which 50% of individuals exhibit the specified quantal effect (effective dose)',
                    'TD50: dose required to produce toxic effect in 50% of animals (toxic dose)',
                    'LD50: dose causing death in 50% of population (lethal dose)',
                    'Therapeutic Index (TI) = TD50 / ED50',
                    'Larger TI = wider margin between effective and toxic doses = safer drug',
                  ],
                },
                {
                  kind: 'pearl',
                  content: 'Therapeutic Index = TD50 / ED50. A HIGH TI means the drug is SAFER (wide gap between effective and toxic doses). A LOW TI means narrow margin of safety (e.g., digoxin, warfarin, lithium have low TI — require careful monitoring).',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'drug-interactions-adverse',
      title: 'Drug Interactions & Adverse Effects',
      blocks: [
        {
          kind: 'sub',
          title: 'Prescription Components',
          blocks: [
            {
              kind: 'table',
              headers: ['Component', 'Definition'],
              rows: [
                ['Superscription', 'Latin symbol Rx ("take thou / recipe") — the prescription sign'],
                ['Inscription', 'Name and strength of medication (brand or generic name)'],
                ['Subscription', 'Directions to the dispenser — dosage form or number of dosage units'],
                ['Signal/Transcription (Sig.)', 'Directions to the patient — written in English or Latin abbreviations'],
                ['Refill Directions', 'How many times prescription can be refilled'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Medical Abbreviations',
          blocks: [
            {
              kind: 'table',
              headers: ['Abbreviation', 'Latin', 'Meaning'],
              rows: [
                ['BID', 'Bis in die', 'Twice a day'],
                ['TID', 'Ter in die', 'Three times a day'],
                ['QID', 'Quarter in die', 'Four times a day'],
                ['a.c.', 'Ante cibus', 'Before meal'],
                ['h.s.', 'Hora somni', 'At bedtime'],
                ['p.r.n.', 'Pro re nata', 'When needed/as needed'],
                ['p.o.', 'Per os', 'By mouth'],
                ['gtt/gtt.', 'Gutta', 'A drop/drops'],
                ['O.D.', 'Oculus dexter', 'Right eye'],
                ['O.S.', 'Oculus sinister', 'Left eye'],
                ['O.U.', 'Oculo utro/uterque', 'Each eye / Both eyes'],
                ['q.h.', 'Quaque hora', 'Every hour'],
                ['Ung.', 'Unguentum', 'Ointment'],
                ['Sol.', 'Solutio', 'Solution'],
                ['Tab.', 'Tabella', 'Tablet'],
                ['Cap.', 'Capsula', 'Capsule'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Corticosteroid Ocular Side Effects',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Secondary Open-Angle Glaucoma — accumulation of glycosaminoglycans at trabecular meshwork; occurs after 6 weeks of topical dexamethasone; permanent glaucoma after 18 months',
                'Posterior Subcapsular Lens Opacity (cataract)',
                'Secondary Keratomycosis (fungal infection)',
                'Mild Ptosis, Mild Exophthalmos',
                'Mydriasis',
                'Papilledema',
                'Edematous Eyelids',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drugs of Abuse — Urine Metabolites',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Metabolite in Urine'],
              rows: [
                ['Amphetamine', 'Benzoic acid and p-hydroxyamphetamine'],
                ['Methamphetamine', 'Amphetamine is the metabolite'],
                ['Cocaine', 'Benzoylecgonine'],
                ['Marijuana (THC)', 'Delta-9-tetrahydrocannabinol metabolites (carboxy-THC)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'OTC Drug Side Effects',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Acetaminophen (Paracetamol) — analgesic and antipyretic; liver dysfunction/hepatotoxicity in overdose; Antidote: N-acetylcysteine (effective if given 8–24 hrs after ingestion)',
                'Acetylsalicylic Acid (Aspirin) — analgesic, antipyretic, anti-inflammatory; overdose causes metabolic acidosis and respiratory alkalosis, fever, coma; Antidote: NaHCO3',
                'Opioid analgesics — ocular side effects: miosis, decreased visual acuity, decreased accommodation, myopia',
                'Naloxone — treatment of acute opioid overdose',
                'Naltrexone — maintenance drug for opioid addicts in treatment programs',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'local-anesthetics',
      title: 'Local Anesthetic Agents',
      blocks: [
        {
          kind: 'text',
          content: 'Local anesthetics block nerve conduction by decreasing Na+ permeability of nerve cell membranes, preventing depolarization. Two theories explain the mechanism.',
        },
        {
          kind: 'sub',
          title: 'Mechanisms of Action',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Specific Receptor Theory: blocks Na+ channels; drug in ionized form blocks external or internal channel openings; competes with calcium (which regulates Na+ movement)',
                'Membrane Expansion Theory: drug in uncharged/un-ionized form is absorbed at cell membrane and alters Na+ channel configuration',
                'In unmyelinated fibers: 8–10 mm segment must be blocked; requires smaller amounts of anesthetic',
                'In myelinated fibers: at least 3 nodes of Ranvier must be blocked; requires higher concentrations',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Structural Components',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Aromatic unsaturated (lipophilic) acid — essential for anesthetic activity',
                '2. Intermediate alkyl chain — longer chain = greater potency AND greater toxicity',
                '3. Tertiary amino (ionizing) group',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Classification: Esters vs Amides',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Esters', 'Amides'],
              rows: [
                ['Duration', 'Short action', 'Long action'],
                ['Metabolism', 'Blood esterases', 'Liver'],
                ['Effect at acid pH', 'NOT active (purulent inflammation)', 'ACTIVE (purulent inflammation)'],
                ['Interaction with sulfa drugs', 'Decreases effect of sulfa drugs', 'No interaction with sulfa drugs'],
              ],
            },
            {
              kind: 'sub',
              title: 'Ester Group',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Procaine (Novocain) — 2nd discovered; dilates blood vessels; short procedures; infiltration, conductive, spinal anesthesia; may cause allergic reactions/anaphylaxis',
                    'Tetracaine (Dicaine) — 10x more potent than cocaine; 10x more toxic than procaine; surface anesthesia only; hydrolyzed by AChE; 0.5% solution or ointment',
                    'Benoxinate 0.4% — para-aminobenzoic acid ester; antibacterial against Pseudomonas aeruginosa; used for applanation tonometry',
                    'Proparacaine 0.5% — most common topical; rapid onset (5–15 sec); short duration (20 min); very few side effects; least irritating; does not penetrate cornea/conjunctiva; for tonometry, gonioscopy, minor procedures',
                    'Benzocaine (Anaesthesinum) — ester; not dissolved in water; surface anesthesia only; burns/wounds; may cause methemoglobin on large areas',
                    'Cocaine 2%, 4%, 10% — 1st discovered; only NATURAL local anesthetic; from Erythroxylon coca; has adrenergic (mydriatic and vasoconstrictive) effects; NOT used for tonometry (softens cornea = falsely lower IOP values); onset 2–5 min; duration 30 min to 2 hrs',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Amide Group',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Lidocaine (Xylocaine) 1%, 2% — most common injectable; 50% more toxic than procaine; 1-hour duration; suitable for all types of anesthesia; also used for ventricular tachyarrhythmia (IV)',
                    'Bupivacaine (Marcaine) — one of most active local anesthetics; infiltration, conductive, and spinal anesthesia; has toxic action on the heart',
                    'Mepivacaine, Prilocaine, Etidocaine — injectable amides; onset 5–15 sec; duration 1–5 hrs',
                    'Articaine — more active than lidocaine and procaine; used in dentistry; combined with vasoconstrictor = Ultracaine',
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ocular Indications of Local Anesthetics',
          blocks: [
            {
              kind: 'table',
              headers: ['Procedure', 'Preferred Agent'],
              rows: [
                ['Forced Duction Test', 'Cocaine or Lidocaine'],
                ['ERG (Electroretinography)', 'Tetracaine'],
                ['Goldmann Applanation Tonometry', 'Proparacaine or Benoxinate'],
                ['Gonioscopy', 'Proparacaine or Benoxinate'],
                ['Corneal Epithelial Debridement', 'Cocaine'],
                ['Diagnosis of Horner\'s Syndrome', 'Cocaine 4%–10%'],
                ['Dacryocystorhinostomy', 'Cocaine (nasal spray)'],
                ['Lacrimal Duct Irrigation, Foreign Body Removal, Suture Removal', 'Injectable anesthetics'],
                ['Laser Iridotomy, Laser Trabeculoplasty', 'Injectable anesthetics'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ocular Side Effects of Topical Anesthetics',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Mild stinging and burning sensation — most common',
                'Vasodilation',
                'Shortening of TBUT (tear break-up time)',
                'Decreased reflex tearing',
                'Decreased blinking',
                'Decreased epithelial mitosis and migration',
                'Corneal edema',
                'Slowed epithelial healing',
                'Punctate Epithelial Keratitis',
                'Epithelial desquamation',
                'Allergy at lids and conjunctiva',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Systemic Side Effects of Local Anesthetics',
          blocks: [
            {
              kind: 'table',
              headers: ['System', 'Early/Excitatory', 'Late/Depressive'],
              rows: [
                ['CNS', 'Restlessness, anxiety, dizziness, tinnitus, miosis, tremors, convulsive seizures (most serious)', 'Drowsiness, sedation, unconsciousness, coma, respiratory failure, death'],
                ['CVS', 'Hypertension, bradycardia then tachycardia (arrhythmia)', 'Decreased cardiac output, peripheral vasodilation (hypotension), AV heart block, circulatory collapse, methemoglobinemia (cyanosis)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Additives to Prolong Anesthetic Effect',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Epinephrine — vasoconstrictive effect; reduces systemic absorption; prolongs anesthesia',
                'Hyaluronidase (Spreading Factor) — enhances infiltration and dispersion; more effective motor block',
                'Bicarbonate — increases percentage of drug in non-ionized form; enhances absorption',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cardiovascular-drugs',
      title: 'Cardiovascular System Drugs',
      blocks: [
        {
          kind: 'sub',
          title: 'Anti-hypertensive Agents',
          blocks: [
            {
              kind: 'pearl',
              content: 'Side effect common to all anti-hypertensive classes (except diuretics and anti-hyperlipidemic agents): orthostatic hypotension.',
            },
            {
              kind: 'table',
              headers: ['Class', 'MOA', 'Key Drugs', 'Notes'],
              rows: [
                ['Thiazide Diuretics', 'Inhibit renal tubular reabsorption of Na+ and water', 'Hydrochlorothiazide (HCT)', 'Most commonly used anti-hypertensive diuretic; combined with ACE inhibitors, beta-blockers, ARBs'],
                ['Loop Diuretics', 'Inhibit Na-K-2Cl cotransporter in loop of Henle', 'Furosemide, Bumetanide, Ethacrynic acid', 'More potent diuretic but weaker anti-hypertensive; severe electrolyte imbalance'],
                ['K+-sparing Diuretics', 'Block aldosterone or Na+ channels', 'Spironolactone, Amiloride, Triamterene', 'Modest anti-hypertensive; minimal K+ loss; useful in mineralocorticoid excess'],
                ['Beta-Blockers (Non-selective)', 'Block alpha and beta receptors', 'Propranolol (1st), Timolol, Nadolol, Labetalol', 'Contraindicated in COPD and DM with insulin/oral hypoglycemics; SE: bradycardia'],
                ['Beta-Blockers (Cardioselective)', 'Block B1 selectively', 'Practolol (1st), Metoprolol, Betaxolol, Atenolol, Esmolol', 'Safe in COPD and DM; selective for cardiac B1 receptors'],
                ['Calcium Channel Blockers', 'Block voltage-gated Ca2+ channels', 'Nifedipine, Amlodipine, Verapamil, Diltiazem', 'Also used for angina and arrhythmia; combined with beta-blockers or diuretics'],
                ['ACE Inhibitors', 'Inhibit angiotensin-converting enzyme; inhibit Na+ and water retention', 'Captopril, Enalapril, Lisinopril, Perindopril', 'Combined with diuretics and beta-blockers'],
                ['ARBs (Angiotensin II Antagonists)', 'Block angiotensin II receptors', 'Losartan, Valsartan, Candesartan, Olmesartan', 'Combined with diuretics'],
                ['Arteriolar Vasodilators', 'Direct vasodilation', 'Hydralazine, Minoxidil, Diazoxide IV', 'Cause Na+ and water retention — must combine with diuretics and beta-blockers; Hydralazine safe in pre-eclampsia; Minoxidil also used as hair grower'],
                ['Central Sympatholytics', 'Stimulate alpha2 (inhibitory) receptors; decrease sympathetic outflow', 'Clonidine, Methyldopa', 'Alpha2 agonists (stimulate inhibitory pathway)'],
                ['Pre-ganglionic Adrenergic Blockers', 'Displace or inhibit NE at presynaptic ends', 'Guanethidine, Guandrel, Reserpine', 'Reserpine inhibits storage and release of NE'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-hyperlipidemic Agents',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Fibric Acids — for elevated triglycerides and LDL; MOA: increase lipase in peripheral tissue; Clofibrate, Fenofibrate, Bezafibrate, Gemfibrozil (can cause cholelithiasis)',
                'HMG-CoA Reductase Inhibitors (Statins) — for hypercholesterolemia; MOA: inhibit HMG-CoA reductase (enzyme catalyzing cholesterol synthesis in liver); SE: elevates ALT/SGOT; Atorvastatin, Simvastatin, Fluvastatin, Lovastatin, Pravastatin',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drugs for Congestive Heart Failure (CHF)',
          blocks: [
            {
              kind: 'pearl',
              content: '3D Management of CHF: Diet, Diuretics, and Digitalis.',
            },
            {
              kind: 'table',
              headers: ['Drug Class', 'Key Drugs', 'MOA / Notes'],
              rows: [
                ['Cardiac Glycosides (Digitalis)', 'Digoxin (maintenance), Digitoxin, Deslanatoside', 'Positive inotropic (+CO), negative chronotropic (↓HR); MOA: inhibit Na-K pump on myocardial cell membrane'],
                ['K+-sparing Diuretics', 'Spironolactone, Amiloride, Triamterene', 'Also treat digitalis intoxication'],
                ['ACE Inhibitors', 'Captopril, Enalapril', 'Reduce afterload; combined with diuretics'],
                ['Catecholamines', 'Dopamine, Dobutamine', 'Stimulate B1 receptors'],
                ['Vasodilators', 'Prazosin (alpha1-blocker), Hydralazine, Nitroglycerin', 'Reduce preload and afterload'],
                ['Phosphodiesterase Inhibitors', 'Amrinone, Milrinone', 'Short-term treatment only'],
              ],
            },
            {
              kind: 'sub',
              title: 'Digitalis Intoxication',
              blocks: [
                {
                  kind: 'table',
                  headers: ['System', 'Signs & Symptoms'],
                  rows: [
                    ['GI (earliest signs)', 'Anorexia (earliest), nausea, vomiting, diarrhea'],
                    ['CNS', 'Drowsiness, fatigue, confusion, visual disturbances'],
                    ['Cardiac', 'Arrhythmia, PVCs, AV heart block, paroxysmal atrial tachycardia, ventricular tachycardia'],
                    ['Ocular', 'Xanthopsia (blue-yellow color defect), colored borders around objects, flickering vision, "glare phenomenon" (objects appear brown-orange or covered in white snow), scotoma, decreased vision, diplopia, mydriasis'],
                  ],
                },
                {
                  kind: 'bullets',
                  items: [
                    'Treatment of Digitalis Intoxication:',
                    '1. Discontinue medication',
                    '2. Give K+-sparing diuretics',
                    '3. K+ administration',
                    '4. Anti-arrhythmic agents (lidocaine, phenytoin, propranolol, procainamide)',
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Drugs for Angina Pectoris',
          blocks: [
            {
              kind: 'table',
              headers: ['Type of Angina', 'Cause', 'Treatment of Choice'],
              rows: [
                ['Stable (Exertional)', 'Oxygen demand exceeds supply due to coronary atherosclerosis; precipitated by exertion', 'Organic Nitrates + Beta-blockers + CCB'],
                ['Variant / Prinzmetal', 'Coronary artery vasospasm; pain at rest', 'CCB (drug of choice) + Organic Nitrates'],
                ['Unstable', 'Coronary artery thrombosis or vasoconstriction; combination of stable and Prinzmetal', 'CCB + Organic Nitrates, or CCB + Beta-blockers'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Organic Nitrates: Nitroglycerin, Isosorbide Dinitrate (IDN), Isosorbide Mononitrate (IMN), Erythrityl Tetranitrate — MOA: NO3 is precursor of Nitrous Oxide (vasodilator); increases cGMP production → inhibits smooth muscle contraction',
                'Dipyridamole: inhibits adenosine uptake by RBCs (vasodilating effect at coronary arteries); inhibits platelet aggregation',
                'Aspirin: inhibits platelet aggregation via COX inhibition',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-Arrhythmic Drug Classes',
          blocks: [
            {
              kind: 'table',
              headers: ['Class', 'MOA', 'Key Drugs'],
              rows: [
                ['Class I (Na+ channel blockers)', 'Block Na+ channels; prevent depolarization spreading', 'IA: Procainamide, Quinidine, Disopyramide; IB: Lidocaine (DOC), Phenytoin, Tocainide; IC: Flecainide, Eucainide'],
                ['Class II (Beta-blockers)', 'Block beta-adrenergic receptors', 'Non-selective: Propranolol; Cardioselective: Metoprolol'],
                ['Class III (Repolarization prolongers)', 'Prolong repolarization phase', 'Amiodarone; Bretylium (adrenergic blocker; SE: orthostatic hypotension)'],
                ['Class IV (CCB)', 'Block voltage-gated Ca2+ channels', 'Verapamil (more effective), Diltiazem'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ans-drugs',
      title: 'Autonomic Nervous System Drugs',
      blocks: [
        {
          kind: 'diagram',
          id: 'gp-ans-drugs',
        },
        {
          kind: 'text',
          content: 'The Autonomic Nervous System (ANS) has two divisions: Sympathetic (thoraco-lumbar / adrenergic) and Parasympathetic (cranio-sacral / cholinergic). Drugs acting on the ANS include those that mimic (mimetics/agonists) or block (lytics/antagonists) these systems.',
        },
        {
          kind: 'sub',
          title: 'Sympathomimetics (Adrenergic Agonists)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Receptor Action', 'Clinical Use'],
              rows: [
                ['Epinephrine (Adrenaline)', 'Alpha + Beta', 'Emergency (anaphylaxis, cardiac arrest); combined with anesthetics as vasoconstrictor'],
                ['Norepinephrine (Noradrenaline)', 'Alpha1, Alpha2, Beta1', 'Vasopressor; increases blood pressure'],
                ['Dopamine', 'Dopaminergic + Beta1 (low dose: renal vasodilation; high dose: alpha effect)', 'CHF, shock; inotropic support'],
                ['Dobutamine', 'Beta1 (selective)', 'CHF — positive inotropic without significant vasoconstriction'],
                ['Phenylephrine', 'Alpha1 (selective)', 'Mydriasis (without cycloplegia); nasal decongestant; anti-histamine'],
                ['Clonidine', 'Alpha2 (central)', 'Anti-hypertensive; stimulates inhibitory alpha2 receptors in CNS'],
                ['Ephedrine', 'Alpha + Beta (indirect)', 'Bronchodilator; decongestant; raises blood pressure'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Sympatholytics (Adrenergic Blockers)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug Class', 'Key Drugs', 'Use'],
              rows: [
                ['Non-selective Beta-blockers', 'Propranolol, Timolol, Nadolol, Metipranolol', 'Hypertension, angina, arrhythmia, glaucoma (Timolol — reduces aqueous production)'],
                ['Cardioselective Beta-blockers (B1)', 'Metoprolol, Betaxolol, Atenolol, Esmolol', 'Safer in COPD/DM; preferred in asthmatic patients'],
                ['Alpha1-blockers', 'Prazosin, Terazosin, Doxazosin', 'Hypertension, CHF; vasodilation; SE: orthostatic hypotension'],
                ['Alpha2-blockers', 'Yohimbine', 'Experimental; reverses alpha2 effects'],
                ['Combined alpha + beta blockers', 'Labetalol (IV)', 'Hypertensive emergencies'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Parasympathomimetics (Cholinergic Agonists)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'MOA', 'Ocular Use'],
              rows: [
                ['Pilocarpine', 'Direct muscarinic agonist', 'Glaucoma (miosis, opens trabecular meshwork); reverse mydriasis after exam'],
                ['Carbachol', 'Direct muscarinic + nicotinic agonist', 'Glaucoma; more resistant to acetylcholinesterase than acetylcholine'],
                ['Acetylcholine (ACh)', 'Direct muscarinic agonist', 'Intraoperative miosis during cataract surgery'],
                ['Physostigmine', 'Indirect (anticholinesterase inhibitor — reversible)', 'Glaucoma; antidote for atropine poisoning'],
                ['Neostigmine', 'Indirect (anticholinesterase — reversible)', 'Myasthenia gravis; reverse neuromuscular blockade'],
                ['Echothiophate Iodide', 'Indirect (anticholinesterase — irreversible)', 'Glaucoma; risk of cataract with long-term use'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Parasympatholytics (Anticholinergics / Muscarinic Blockers)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Duration', 'Ocular Use / Notes'],
              rows: [
                ['Atropine 1%', 'Days (7–14 days)', 'Longest-acting; maximum cycloplegia and mydriasis; treatment of amblyopia; uveitis'],
                ['Scopolamine 0.25%', '5–7 days', 'Similar to atropine; also used for motion sickness'],
                ['Homatropine 2%, 5%', '24–48 hrs', 'Cycloplegia for refraction; uveitis'],
                ['Cyclopentolate 0.5%, 1%, 2%', '6–24 hrs', 'Drug of choice for cycloplegic refraction in children'],
                ['Tropicamide 0.5%, 1%', '4–6 hrs', 'Shortest-acting; routine mydriasis; fundus examination; not reliable for cycloplegia in children'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Cycloplegic order by duration (longest to shortest): Atropine > Scopolamine > Homatropine > Cyclopentolate > Tropicamide. Memory tip: "A Shy Horse Can Trot" (Atropine, Scopolamine, Homatropine, Cyclopentolate, Tropicamide).',
            },
          ],
        },
      ],
    },
    {
      id: 'cns-drugs',
      title: 'CNS Drugs',
      blocks: [
        {
          kind: 'sub',
          title: 'Narcotic Analgesics (Opioids)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Used as post-operative analgesia; Schedule C-II controlled substances',
                'Examples: Meperidine (Demerol), Codeine, Morphine, Methadone, Fentanyl Citrate, Nalbuphine, Hydromorphone, Oxycodone, Hydrocodone',
                'Ocular side effects: miosis (hallmark), decreased visual acuity, decreased accommodation, myopia',
                'Naloxone — treatment of acute opioid overdose (antidote)',
                'Naltrexone — maintenance drug for opioid addicts in treatment programs',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Hypnotic-Sedatives',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Barbiturates: Amobarbital, Secobarbital, Phenobarbital (also an inductor of microsomal oxidation), Butalbital, Pentobarbital',
                'Benzodiazepines: Alprazolam, Chlordiazepoxide, Flurazepam, Diazepam (all Schedule IV)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Stimulants & Hallucinogens (Controlled)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Amphetamine, Methamphetamine — CNS stimulants; Schedule II; metabolite: benzoic acid / p-hydroxyamphetamine (amphetamine as methamphetamine metabolite)',
                'Phencyclidine (PCP), Delta-9-THC (Marijuana/Hashish) — Schedule I hallucinogens',
                'Cocaine — Schedule II; from Erythroxylon coca; only natural local anesthetic; metabolite: benzoylecgonine',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anti-infective-drugs',
      title: 'Anti-infective Drugs',
      blocks: [
        {
          kind: 'text',
          content: 'Anti-infective agents are chemical substances (natural, semi-synthetic, or synthetic) that inhibit growth (bacteriostatic) or kill (bactericidal) microorganisms.',
        },
        {
          kind: 'sub',
          title: 'Antibiotic Classification by MOA',
          blocks: [
            {
              kind: 'table',
              headers: ['Mechanism', 'Drug Examples'],
              rows: [
                ['Inhibit cell wall synthesis', 'Penicillin, Bacitracin, Vancomycin, Cephalosporins'],
                ['Alter cell membrane permeability', 'Polymixin B'],
                ['Inhibit protein synthesis (translation)', 'Tetracycline, Aminoglycosides, Macrolides, Chloramphenicol'],
                ['Inhibit nucleic acid synthesis', 'Quinolones, Rifampicin'],
                ['Inhibit folic acid synthesis', 'Sulfonamides'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Antibiotic Classification by Spectrum',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Narrow Spectrum — kill/inhibit limited bacteria: Penicillin, Chloramphenicol, Erythromycin',
                'Broad Spectrum — kill/inhibit wide variety: Amoxicillin, Cephalosporins, Aminoglycosides',
                'Bactericidal — actual killing effect',
                'Bacteriostatic — inhibits bacterial replication/growth',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Mechanisms of Antibiotic Resistance',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Bacteria develop enzymes that destroy the active drug (e.g., Penicillinase / Beta-lactamase)',
                '2. Bacteria change permeability to the drug',
                '3. Bacteria develop altered structural target (receptor) for the drug',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Major Antibiotic Groups',
          blocks: [
            {
              kind: 'table',
              headers: ['Group', 'Key Drugs', 'Notes'],
              rows: [
                ['Sulfonamides', 'Sulfamethoxazole (+ trimethoprim = co-trimoxazole), Sulfacetamide (topical), Sulfadiazine', 'Inhibit folic acid synthesis; esters decrease sulfa drug effect'],
                ['Fluoroquinolones', 'Ciprofloxacin, Ofloxacin, Norfloxacin, Levofloxacin (have ocular prep); Lomefloxacin, Enoxacin, Sparfloxacin, Trovafloxacin', 'Inhibit DNA gyrase (nucleic acid synthesis)'],
                ['Penicillins', 'Penicillin G+V; Penicillinase-resistant: Cloxacillin, Dicloxacillin, Oxacillin; Broad spectrum: Ampicillin, Amoxicillin; Anti-pseudomonal: Carbenicillin, Piperacillin', 'Discovered by Alexander Fleming; from Penicillium mold; MOA: inhibit cell wall synthesis'],
                ['Cephalosporins (1st gen)', 'Cefalexin, Cefazolin', 'Good for gram-positive bacteria'],
                ['Cephalosporins (2nd gen)', 'Cefuroxime, Cefaclor', 'Effective for PEcK organisms'],
                ['Cephalosporins (3rd gen)', 'Cefotaxime, Ceftriaxone', 'Effective for PEcKS organisms'],
                ['Cephalosporins (4th gen)', 'Cefditoren, Cefepime, Cefpirome', 'Effective for HENPEcKS organisms'],
                ['Aminoglycosides', 'Streptomycin (oldest), Gentamicin, Tobramycin, Neomycin (also for Acanthamoeba), Amikacin, Kanamycin', 'Effective for gram-negative; SE: ototoxicity and nephrotoxicity if used >5 days; vestibulotoxic (vertigo, balance loss)'],
                ['Tetracyclines', 'Short-acting: Tetracycline, Oxytetracycline; Intermediate: Methacycline, Demeclocycline; Long-acting: Doxycycline, Minocycline', 'DOC for Trachoma and inclusion conjunctivitis'],
                ['Chloramphenicol', 'Chloramphenicol', 'DOC for typhoid fever'],
                ['Macrolides', 'Erythromycin, Clarithromycin, Roxithromycin, Azithromycin', 'Useful for patients allergic to other antibiotics'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-Protozoal & Anti-Malarial Agents',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Metronidazole — for Entamoeba coli/histolytica, Trichomonas vaginalis; also inhibits microsomal oxidation',
                'Itraconazole — for Acanthamoeba (combined with neomycin)',
                'Chloroquine and Hydroxychloroquine — uncomplicated malaria; ocular SE: "whorl-like" corneal pigment deposits, halos, "bull\'s eye" maculopathy, pale optic disc, abnormal ERG, decreased VA (most common early), central/paracentral scotoma, arteriolar narrowing, color vision changes, nyctalopia',
                'Quinine — for Plasmodium falciparum',
                'Pyrimethamine + sulfadoxine — for Plasmodium falciparum',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-fungal (Antimycotic) Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Class', 'Drugs', 'Use'],
              rows: [
                ['Polyenes', 'Amphotericin B (IV), Natamycin (Nystatin)', 'Amphotericin B for systemic fungal infections; Nystatin = DOC for oral candidiasis'],
                ['Pyrimidines', 'Flucytosine', 'Ocular antifungal'],
                ['Imidazoles', 'Miconazole, Ketoconazole', 'Topical/ocular; hepatotoxic'],
                ['Triazoles', 'Fluconazole, Itraconazole', 'Broad-spectrum antifungals'],
                ['Others', 'Griseofulvin, Clotrimazole, Tioconazole', 'Griseofulvin for ringworm (Tinea); topical for skin/mucous membrane infections'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Amphotericin B ocular SE: greenish corneal discoloration, corneal clouding, chemosis',
                'All antimycotic agents: preparations mostly topical for Fusarium, Candida, Aspergillus; class SE: hepatotoxic',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-viral Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Indication'],
              rows: [
                ['Amantadine', 'Drug of choice for Influenza A'],
                ['Idoxuridine', '1st approved anti-viral agent'],
                ['Acyclovir, Famciclovir, Ganciclovir, Valaciclovir', 'Anti-herpes agents (Herpes simplex, Herpes zoster)'],
                ['Zidovudine, Didanosine, Lamivudine, Zalcitabine, Stavudine', 'Anti-retroviral agents for HIV'],
                ['Oseltamivir', "For H5N1 (bird's flu)"],
                ['Inosiplex', 'For chickenpox'],
                ['Methisoprinol', 'For Mumps virus'],
                ['Methisazole', 'Prophylactic for smallpox'],
              ],
            },
            {
              kind: 'table',
              headers: ['Route', 'Ocular Antiviral Agents'],
              rows: [
                ['Topical', 'Vidarabine, Trifluridine'],
                ['Oral', 'Acyclovir, Valaciclovir, Ganciclovir'],
                ['Intravenous', 'Ganciclovir, Foscarnet, Cidofovir'],
                ['Intravitreal', 'Fomivirsen'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-tuberculosis Agents',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug', 'Line', 'Key Ocular/Systemic Side Effects'],
              rows: [
                ['Isoniazid (INH)', '1st line', 'Peripheral neuritis, optic neuritis, hepatotoxic'],
                ['Rifampicin', '1st line', 'Enzyme inductor; turns body fluids orange-red'],
                ['Ethambutol', '1st line', 'OPTIC NEURITIS — board favorite; dose-dependent'],
                ['Streptomycin (IM)', '1st line', 'Ototoxicity and nephrotoxicity'],
                ['Pyrazinamide', '2nd line', 'Hepatotoxic; given for 2 months'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Ethambutol is the anti-TB drug most associated with OPTIC NEURITIS (dose-dependent). Isoniazid can also cause optic neuritis but is classically associated with peripheral neuritis. Both are 1st-line TB drugs — board loves testing which causes optic neuritis.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-inflammatory Agents',
          blocks: [
            {
              kind: 'sub',
              title: 'Corticosteroids',
              blocks: [
                {
                  kind: 'text',
                  content: 'Corticosteroids are the most important anti-inflammatory agents in ophthalmology. Mode of administration: topical for anterior segment; systemic/periocular/intravitreal for posterior segment.',
                },
                {
                  kind: 'table',
                  headers: ['Drug', 'Duration', 'Relative Potency'],
                  rows: [
                    ['Cortisone', 'Short', '0.8%'],
                    ['Hydrocortisone', 'Short', '1%'],
                    ['Prednisolone / Prednisone', 'Short-medium', '4–5% (10x more potent than cortisone)'],
                    ['Methylprednisolone', 'Short-medium', 'Similar to prednisolone'],
                    ['Triamcinolone', 'Intermediate', '4%'],
                    ['Betamethasone / Dexamethasone', 'Long', '25–30% (30–50x more potent than cortisone)'],
                    ['Fluorometholone', 'Long', '40–50%'],
                    ['Fluocinolone', 'Long', '240%'],
                  ],
                },
                {
                  kind: 'bullets',
                  items: [
                    'Key effects: anti-inflammatory, decrease capillary permeability, inhibit fibroblast activity (retard healing), mydriasis, blepharoptosis',
                    'Key systemic SE: mental changes (euphoria to psychosis), activation of TB infection, GI ulceration, osteoporosis, electrolyte imbalance, impaired wound healing, "Moon Face" (Cushing syndrome)',
                    'Ocular SE: secondary OAG (6 weeks of topical dexamethasone → glycosaminoglycan accumulation → trabecular blockage; permanent after 18 months), PSC cataract, secondary keratomycosis, mild ptosis, mydriasis, papilledema',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'NSAIDs (Topical Ocular)',
              blocks: [
                {
                  kind: 'table',
                  headers: ['Drug', 'Key Use'],
                  rows: [
                    ['Flurbiprofen', 'Inhibits cell mitosis; delays wound healing; maintains mydriasis during surgery'],
                    ['Diclofenac Na+', 'Decreases intraocular inflammation after surgery'],
                    ['Ketorolac', 'Potent analgesic (180x aspirin); anti-pruritic; allergic conjunctivitis'],
                    ['Indomethacin', 'Anti-inflammatory; CME prevention'],
                    ['Oxyphenbutazone, Phenylbutazone', 'Anti-inflammatory'],
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Anti-histamine Agents',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Prevent histamine by acting on H1 receptors',
                    'Used for allergic conditions of conjunctiva and eyelids',
                    'Examples: Naphazoline, Lodoxamide, Tetrahydrozoline, Antazoline',
                    'Phenylephrine — sympathomimetic amine component in many OTC eye drop combinations',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'high-yield-pharmacology',
      title: 'High-Yield Numbers & Quick Reference',
      blocks: [
        {
          kind: 'table',
          headers: ['Item', 'Key Fact'],
          rows: [
            ['Therapeutic Index (TI)', 'TD50 / ED50; larger TI = safer drug'],
            ['Steady state reached', 'After 4–5 half-lives of regular dosing'],
            ['IV bioavailability', '100% (zero-order kinetics)'],
            ['Oral bioavailability', '<100% (first-order kinetics; subject to first-pass metabolism)'],
            ['Proparacaine onset', '5–15 seconds; duration ~20 minutes'],
            ['Atropine duration', '7–14 days (longest cycloplegic)'],
            ['Tropicamide duration', '4–6 hours (shortest cycloplegic)'],
            ['Cocaine: Horner\'s syndrome test', '4%–10% cocaine; fails to dilate in Horner\'s (lesion)'],
            ['Tetracaine potency', '10x more potent than cocaine; 10x more toxic than procaine'],
            ['Strongest receptor bond', 'Covalent bond → irreversible effect'],
            ['Weakest receptor bond', 'Van der Waals bond → but most common (most drugs use this)'],
            ['Esters metabolized by', 'Blood esterases'],
            ['Amides metabolized by', 'Liver'],
            ['Digitalis: earliest toxicity sign', 'Anorexia (GI symptoms before cardiac)'],
            ['Digitalis ocular SE', 'Xanthopsia (blue-yellow), "bull\'s eye" visual field changes'],
            ['Chloroquine ocular SE', '"Bull\'s eye" maculopathy; whorl-like corneal deposits; decreased VA is earliest'],
            ['Ethambutol SE', 'Optic neuritis (dose-dependent)'],
            ['Isoniazid SE', 'Peripheral neuritis, optic neuritis, hepatotoxic'],
            ['Aminoglycosides SE', 'Ototoxicity + nephrotoxicity if used >5 days'],
            ['Tetracycline: DOC for', 'Trachoma and inclusion conjunctivitis'],
            ['Chloramphenicol: DOC for', 'Typhoid fever'],
            ['Amantadine: DOC for', 'Influenza A'],
            ['Nystatin: DOC for', 'Oral candidiasis'],
            ['1st approved antiviral', 'Idoxuridine'],
            ['Corticosteroid-induced glaucoma', 'After 6 weeks of topical dexamethasone; permanent OAG after 18 months'],
            ['Corticosteroid: most potent listed', 'Fluocinolone (240%)'],
            ['Ketorolac analgesic potency', '180x more potent than aspirin'],
            ['Naloxone', 'Antidote for acute opioid overdose'],
            ['N-acetylcysteine', 'Antidote for acetaminophen overdose (effective 8–24 hrs after ingestion)'],
            ['NaHCO3', 'Antidote for aspirin (ASA) overdose'],
            ['Benzoylecgonine', 'Cocaine metabolite detectable in urine'],
            ['Schedule I drugs', 'No accepted medical use; not available therapeutically (marijuana, heroin, LSD)'],
            ['Schedule II prescription rule', 'Written only; supplied within 72 hrs; no refill except emergency'],
          ],
        },
      ],
    },
  ],
}
