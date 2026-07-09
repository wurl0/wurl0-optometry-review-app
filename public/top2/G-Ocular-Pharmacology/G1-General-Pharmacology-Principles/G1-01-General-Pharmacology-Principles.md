# WAA | Board Review 2026
## G1 — General Pharmacology Principles
*Personal study notes | TOS: G Ocular Pharmacology | Source: Gen-Pharmacology*

---

## The Simple Version

Before you can understand any eye drop, you need the rules that apply to every drug. Pharmacology splits into two halves that mirror each other:

- **Pharmacokinetics** is what the *body does to the drug*. Absorption, Distribution, Metabolism, Excretion (ADME). Think of the drug as a traveler: how it gets in, where it goes, how it gets broken down, how it leaves.
- **Pharmacodynamics** is what the *drug does to the body*. Mechanism of action and the effect it produces, almost always by binding a receptor.

Everything else in this note (routes, dosing, half-life, therapeutic index, the prescription, the controlled-substance schedules) hangs off those two ideas.

**Teaching angle:** ask "what the body does to the drug, and what the drug does to the body." If you can sort any fact into one of those two buckets, you understand where it belongs.

---

## But Why?

**Why split pharmacokinetics and pharmacodynamics at all?**
Because they answer different questions. Kinetics decides how much drug reaches the target and for how long. Dynamics decides what happens once it gets there. A drug can have a perfect mechanism (good dynamics) and still fail because it never reaches the eye in useful amounts (bad kinetics). Both must work.

**Why does the liver matter so much?**
The liver is the main site of metabolism. It chemically rewrites drugs, usually turning fat-soluble drugs into water-soluble metabolites the kidney can flush out. This is also why the route of administration matters: anything swallowed passes through the liver first (first-pass effect) and loses some potency before it ever reaches the blood.

**Why are most drugs weak bases or weak acids?**
Because the body absorbs the uncharged (non-ionized) form across lipid membranes. Lipid-soluble equals uncharged equals absorbable. The pH of the environment decides how much of the drug is in that absorbable form. This is the single idea behind absorption, corneal penetration, and even why you alkalinize urine to dump a barbiturate overdose.

**Why do we care about half-life?**
Because it tells you how often to dose and how long an effect lasts. It is the bridge between a chemistry fact and a clinical schedule.

---

## The Details

### Terminology Unpacked

| Term | Meaning | Board hook |
|---|---|---|
| Pharmacokinetics | What the body does to the drug (ADME) | "Body acts on drug" |
| Pharmacodynamics | What the drug does to the body (MOA + effect) | "Drug acts on body" |
| Pharmacognosy | Identification of crude naturally occurring drugs | "Gnosy = knowing the plant" |
| Posology | Study of drug dosage | "Poso = how much" |
| Toxicology | Study of poisons and toxic effects | |
| Potency | Lowest dose that produces the desired effect | Low dose works = high potency |
| Efficacy | Maximum effect a drug can produce regardless of dose | Ceiling of effect |
| Bioavailability | Fraction of unchanged drug reaching systemic circulation | IV = 100% |
| Tolerance | Reduced effect after repeated exposure (enzyme induction) | Need more for same effect |
| Tachyphylaxis | Tolerance developing rapidly after only a few doses | Fast tolerance |
| Hypersensitivity / hyperreactive | Usual effect at unexpectedly low dose | |
| Hyporeactive | Usual effect at unexpectedly large dose | |
| Idiosyncratic reaction | Illogical, unpredictable reaction (mydriatic causing miosis) | No logical PK cause |
| Placebo | No intrinsic activity but may give therapeutic benefit | |

**Drug name layers:** Chemical name (full structure, never used) → Generic name (active ingredient, scientific, widely used) → Brand / trade / proprietary name (company name). A generic drug is one whose patent expired or was never patented.

---

### Pharmacokinetics — ADME

**1. Absorption — how the drug gets into the blood**

Five transport mechanisms:

| Mechanism | Direction | Energy | Carrier | Moves |
|---|---|---|---|---|
| Simple diffusion (most drugs) | High to low | No | No | Lipid-soluble drugs |
| Facilitated diffusion | High to low | No | Yes | Lipid-insoluble drugs |
| Active transport | Low to high | Yes | Yes | Electrolytes |
| Filtration | Pressure gradient | No | No | Small molecules through pores |
| Pinocytosis | Endo/exocytosis | Yes | No | Dissolved substances |

- Main factor affecting diffusion is **molecular size** (then shape, then charge).
- **Lipid-soluble = uncharged = non-ionized = non-polar = alkaline form.** Examples: alkaloids, anesthetics, weak bases, corticosteroids.
- Extremely lipophilic drugs get trapped in the corneal epithelium and release slowly, so too much lipid solubility also hurts penetration. The eye needs a drug that is *both* lipid- and water-soluble to cross all corneal layers (epithelium = lipid, stroma = water).

**First-pass effect:** gastric acid plus liver metabolism degrade an oral drug before it reaches circulation. Routes that bypass it: sublingual, buccal, rectal (partially), and all parenteral routes.

**2. Distribution — where the drug goes**

Drug travels in two forms:
- **Free / unbound** = active, reaches the target, produces effect.
- **Bound** (to albumin) = inactive reservoir, stays in blood until released or excreted.

Only the free fraction works. Barriers that limit distribution: blood-brain barrier and blood-ocular barrier.

**3. Metabolism / Biotransformation — mostly in the liver**

Goal: make the drug more **polar (water-soluble)** so the kidney can excrete it. Enzyme system: hepatic microsomal **cytochrome P-450**.

| Phase | What happens | Reactions |
|---|---|---|
| Phase I | Unmask or add a polar group (OH, SH, NH₂) | Oxidation (most common, via P-450), Reduction, Hydrolysis |
| Phase II | Conjugate the drug to a polar molecule (glucuronate, sulfate, glycine, acetate, methyl, glutathione) | Conjugation |

Organs of metabolism: **liver (main)**, kidneys, lungs, adrenal glands.

**4. Excretion — how the drug leaves**

Main organ: **kidneys** (glomerular filtration + tubular secretion). Minor routes: liver/bile, lungs, GIT, and glands (lacrimal, salivary, sweat, sebaceous, mammary). The mammary route is why nursing mothers need caution.

- **Atropine is excreted unchanged in urine**, which is why a urine test for atropine toxicity exists (the "cat eye test").
- **Penicillin is not metabolized by the liver**; it is removed by renal excretion.

---

### Formula Breakdowns

#### Half-life (t½) and the elimination constant

**k = 0.693 / t½**

1. **Plain language:** half-life is the time for the plasma drug level to fall by 50%. The number 0.693 links half-life to the elimination rate constant k.
2. **The parts:** t½ = half-life (time). k (or Ke) = elimination rate constant (fraction removed per unit time). 0.693 = the natural log of 2 (ln 2).
3. **Where it comes from:** drug elimination is usually first-order (exponential decay). Solving "half remains" in an exponential gives ln 2 = 0.693. So 0.693 is not arbitrary, it is what "half" equals in exponential math.
4. **Analogy:** like a phone battery that always loses half its remaining charge in the same time, no matter how full it started.
5. **Why this form:** writing k = 0.693/t½ lets you convert an easily measured half-life into the rate constant used in clearance and dosing math.
6. **Limits:** only valid for first-order kinetics. Zero-order drugs (alcohol, phenytoin at high dose) eliminate at a constant amount, not a constant fraction, so half-life is not fixed.
7. **Cross-subject link:** same exponential decay math as radioactive isotopes in physics and as light absorbance fall-off, which you have already met in optics.

Two half-lives to name:
- **Distribution half-life (t½ α):** fast early drop as drug spreads into tissues.
- **Elimination half-life (t½ β):** slower drop from metabolism and excretion.

#### Volume of distribution

**Vd = total amount of drug in body / concentration of drug in plasma**

- Most important PK parameter. It estimates how much the drug hides in tissues versus stays in plasma.
- A large Vd means the drug is heavily tissue-bound (little left in blood). A small Vd means it stays mostly in plasma.

#### Body clearance

**Cl = Vd × Ke = Vd × (0.693 / t½)**

- Clearance is the volume of plasma fully cleared of drug per unit time. It ties the two parameters above together: how much is around (Vd) times how fast it leaves (Ke).

#### Therapeutic index (margin of safety)

**TI = LD₅₀ / ED₅₀**

1. **Plain language:** how safe a drug is. The gap between the dose that helps and the dose that kills.
2. **Parts:** LD₅₀ = dose lethal to 50% of subjects. ED₅₀ = dose effective in 50% of subjects.
3. **Origin:** both come from quantal dose-response curves run across a population.
4. **Analogy:** the shoulder of a mountain road. A wide shoulder (high TI) is forgiving; a narrow one (low TI) means small errors are fatal.
5. **Why this form:** a ratio makes safety comparable across drugs of very different potency.
6. **Limits:** a high TI does not mean zero side effects, only a wide lethal margin.
7. **Cross-link:** related to the **therapeutic window**, the dose range that sits above the effective dose but below the toxic dose. Narrow-window drugs (and narrow TI drugs) need blood-level monitoring.

---

### Routes of Administration

```
SYSTEMIC (reaches general circulation)
 Alimentary (passes liver) Parenteral (bypasses first pass)
 Oral - safest, first-pass Intradermal - skin testing
 Buccal - bypasses liver Subcutaneous
 Sublingual - bypasses liver Intramuscular
 Rectal - partial bypass Intravenous - no absorption step
 Intra-arterial / Intracardiac (special)

LOCAL (little systemic effect)
 Topical - eye, nose, throat, airway, vagina, ear
 Local injectables - nerve block, epidural, spinal

KINETIC RULE
 Zero-order absorption = 100% reaches blood = IV, IA, IC only
 First-order absorption = constant fraction reaches blood = every other route
```

- **Alimentary** advantages: safest, convenient, no sterile technique. Disadvantage: variable bioavailability, first-pass loss.
- **Parenteral** advantages: rapid (ER use), accurate dose. Disadvantage: needs sterile technique and trained staff, rapid absorption can be toxic.

---

### Dosing

- **Loading (initial) dose:** higher first dose to reach therapeutic plasma level fast.
- **Maintenance dose:** the amount that keeps the effect going.
- **Therapeutic dose:** computed from body weight (kg).
- **Toxic dose:** approximate, independent of body weight.
- **Mydriatic dosing example:** intermittent, one drop every 5 minutes until full mydriasis.

**Drug interaction effects to separate carefully:**
- **Additive:** 1 + 1 = 2 (combined effect equals the sum).
- **Synergism:** 1 + 1 > 2 (combined effect greater than the sum).
- **Potentiation:** 0 + 1 > 1 (a drug with no effect of its own boosts a second drug).

---

### Pharmacodynamics — Receptors and Antagonism

- **Receptor:** the lock; drug is the key (lock-and-key principle). Sites: type I cell membrane, type II cytoplasm, type III nucleus.
- **Affinity:** strength of attraction between drug and receptor. High affinity binds even at low concentration.
- **Bonds:** covalent = strongest = irreversible. Van der Waals = weakest but most important (reversible, most drugs).

| Term | Definition |
|---|---|
| Agonist | Binds receptor and produces the effect |
| Antagonist | Binds receptor and blocks the agonist |
| Competitive antagonist | Reversible, same site, weak Van der Waals bond, overcome by more agonist |
| Non-competitive antagonist | Irreversible covalent bond, not overcome by more agonist |
| Physiologic antagonism | Two drugs, two different receptors, opposite effects |
| Chemical antagonism | Two drugs combine into an inactive third compound |

---

### Prescription Order (PO) and the Law

Eight parts of a prescription:
1. **Practitioner information** (name, degree, license, PTR, S2 number)
2. **Patient information** (name, address, age, sex)
3. **Date**
4. **Superscription** = the symbol **Rx** (Latin *recipe*, "to take")
5. **Inscription** = drug, concentration, dosage form
6. **Subscription** = directions to the pharmacist (how much to dispense)
7. **Signatura (Sig.)** = directions to the patient (route, amount, frequency, duration)
8. **Refill / labeling / signature**

- **S2 number** is required for controlled/regulated drugs and is not renewed after 6 months.
- **FDA** monitors existing drugs and approves new ones; concerns are efficacy and safety.
- **PDEA** is the Philippine enforcement agency for controlled substances.
- **OTC drugs** dispense without a prescription; **Legend/Rx drugs** need a prescriber.

**Three legal doctrines:**
- **Informed consent:** patient must understand the procedure, alternatives, pros/cons, and risks before deciding.
- **Respondeat superior** ("let the master answer"): the superior is responsible for a subordinate's actions.
- **Minors and incompetents:** need guardian consent.

---

## Numbers and Values to Know

| Parameter | Value |
|---|---|
| ln 2 constant in half-life | 0.693 |
| Bioavailability by IV | 100% (zero-order) |
| Ointment oil:water | 80% oil / 20% water |
| Cream oil:water | 50% / 50% |
| Teaspoon | 5 mL |
| Tablespoon | 15 mL |
| Schedule II written Rx supplied within | 72 hours |
| Schedule III/IV refills | not more than 5x, not beyond 6 months |
| Years to develop a new drug | ~10 years |
| Drug-development phases | Preclinical (animals) → Phase I (healthy volunteers) → II (200–300 patients) → III (1000–3000) → IV (post-market) |

---

## Memory Anchors

- **ADME** = Absorption, Distribution, Metabolism, Excretion (the kinetics journey).
- **"Body to drug = kinetics; drug to body = dynamics."**
- **Lipid = Uncharged = Alkaline = Absorbable** (one chain, four words).
- **0.693 is ln 2**, the math meaning of "half."
- **Liver metabolizes, kidney excretes.**
- **Potency = position (low dose), Efficacy = ceiling (max effect).**
- **Additive sum, Synergy more, Potentiation zero-plus-one.**
- **Rx parts order:** Practitioner, Patient, Date, Superscription, Inscription, Subscription, Sig, Refill.
- **Controlled schedules I to V:** abuse potential falls as the number rises (I = heroin/LSD, no medical use; V = loperamide, lowest abuse).

---

## Board Traps

- **Trap:** potency and efficacy are the same. Wrong. Potency is *how little* you need; efficacy is *how much effect* is possible. A drug can be very potent but have low efficacy.
- **Trap:** IV drugs undergo absorption. Wrong. IV, IA, and IC bypass absorption entirely (zero-order, 100% bioavailable).
- **Trap:** the liver excretes drugs. Careful. The liver *metabolizes* (and eliminates by changing the drug); the kidney *excretes*.
- **Trap:** more lipid solubility always means better eye penetration. Wrong. Too lipophilic and the drug gets stuck in the corneal epithelium. The cornea needs a drug that is both lipid- and water-soluble.
- **Trap:** competitive antagonism cannot be overcome. Wrong. Competitive (Van der Waals, reversible) is overcome by more agonist; non-competitive (covalent, irreversible) is not.
- **Trap:** Schedule I drugs can be prescribed with extra paperwork. Wrong. Schedule I has no accepted medical use and is not available for therapeutic prescription.
- **Trap:** atropine is metabolized before excretion. Wrong. It is excreted unchanged in urine (basis of the toxicity test).

---

## High-Yield Summary

| Must-Know | Answer |
|---|---|
| What the body does to the drug | Pharmacokinetics (ADME) |
| What the drug does to the body | Pharmacodynamics (MOA + effect) |
| Main organ of metabolism | Liver (cytochrome P-450) |
| Main organ of excretion | Kidneys |
| Most important PK parameter | Volume of distribution |
| Half-life constant | 0.693 (ln 2) |
| Therapeutic index | LD₅₀ / ED₅₀ |
| Routes with 100% bioavailability | IV, IA, IC (zero-order) |
| Strongest receptor bond | Covalent (irreversible) |
| Weakest but most important bond | Van der Waals (reversible) |
| Symbol Rx means | Recipe, "to take" |
| Drug with no medical use | Schedule I (heroin, LSD) |

---

## Practice Questions

**1.** A drug produces its maximum possible effect at a relatively low dose. Which two properties does this describe?

- A. Low potency, high efficacy
- B. High potency, high efficacy
- C. High potency, low efficacy
- D. Low potency, low efficacy

<details><summary>Answer</summary>

**B.** Acting at a low dose describes high potency. Reaching the maximum possible effect describes high efficacy. The two are independent: potency is about the dose needed, efficacy is about the size of the effect.
</details>

**2.** Which route of administration delivers 100% of the drug to the systemic circulation?

- A. Oral
- B. Sublingual
- C. Intravenous
- D. Rectal

<details><summary>Answer</summary>

**C. Intravenous.** IV (along with intra-arterial and intracardiac) bypasses absorption entirely, so bioavailability is 100% and follows zero-order kinetics. The other routes all involve an absorption step and a constant fraction reaching the blood (first-order).
</details>

**3.** A drug is excreted unchanged in the urine and forms the basis of a urine toxicity test. Which drug?

- A. Penicillin
- B. Atropine
- C. Tropicamide
- D. Phenobarbital

<details><summary>Answer</summary>

**B. Atropine.** It is excreted unchanged in urine, the basis of the atropine toxicity ("cat eye") test. Penicillin is also renally excreted but is the classic example of a drug not metabolized by the liver, not the toxicity-test drug. Phenobarbital is excreted unchanged too but the source ties the urine test specifically to atropine.
</details>

**4.** Two drugs are given together. Drug X has no effect of its own but increases the effect of Drug Y. This is:

- A. Additive effect
- B. Synergism
- C. Potentiation
- D. Antagonism

<details><summary>Answer</summary>

**C. Potentiation.** A drug lacking its own effect that boosts another is potentiation (0 + 1 > 1). Additive is sum of two active drugs; synergism is two active drugs producing more than their sum.
</details>

**5.** Which best describes a competitive antagonist?

- A. Forms an irreversible covalent bond and cannot be displaced
- B. Binds a different receptor to produce an opposite effect
- C. Reversibly competes at the same receptor and is overcome by more agonist
- D. Combines with the agonist to form an inactive compound

<details><summary>Answer</summary>

**C.** A competitive antagonist uses a weak, reversible Van der Waals bond at the same receptor, so adding more agonist overcomes it. Option A is non-competitive, B is physiologic antagonism, D is chemical antagonism.
</details>

---

## Pen and Paper Drills

### Drill 1 — Brain Dump
On a blank page write the ADME chain and, under each letter, the main organ involved and one key fact. Do not look.

### Drill 2 — Blank Table
Redraw the three-transport table (simple diffusion, facilitated diffusion, active transport) with direction, energy, carrier, and what each moves.

### Drill 3 — Teach-Back Write
Explain potency vs efficacy to a classmate in three sentences using a real example. No looking.

### Drill 4 — Formula From Scratch
Write the four formulas (k = 0.693/t½, Vd, Cl, TI) and label every term. Then state one limit of each.

### Drill 5 — Sequence
Write the eight parts of a prescription order in order, then label which two parts use Latin (Superscription = Rx, Signatura = Sig).

### Recall Interval Schedule
| Session | When | Drill |
|---|---|---|
| 1st | Same day | Brain Dump |
| 2nd | Next day | Blank Table + Formulas |
| 3rd | 3 days | Teach-Back |
| 4th | 1 week | Sequence |
| Final | 2 weeks | All five, flag gaps |

---

## Sources Used
- General Pharmacology — Dr. Ado 
- Cross-reference: G2 Autonomic Drugs (receptor detail), G3 DPA (F1 note), RA 8050 (prescription law, see H1)

*Note written: June 2026 | Confidence: [ ] Low [ ] Okay [ ] Solid*
