import { OlePrepData } from '@/lib/ole-prep-types'

const data: OlePrepData = {
  subject: 'Theoretical Optics',
  slug: 'theoretical-optics',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Refractive Index Order (low → high)',
          device: '"All Aqua Creatures Constantly Nibble" — Air, Aqueous/Vitreous, Cornea, Cortex, Nucleus',
          breakdown: 'Air (1.000) → Aqueous = Vitreous (1.336) → Cornea (1.376) → Lens Cortex (1.386) → Lens Nucleus (1.406). Each step increases. Aqueous equals vitreous.',
        },
        {
          kind: 'mnemonic',
          term: 'Hyperopia Classification Chain',
          device: '"TOTAL cake: MANIFEST layer + LATENT layer; MANIFEST = ABSOLUTE piece + FACULTATIVE piece"',
          breakdown: 'Total = Manifest + Latent. Manifest = Absolute (cannot overcome) + Facultative (can overcome). Latent = hidden (Tonic + Clonic).',
        },
        {
          kind: 'mnemonic',
          term: 'Astigmatism Focal Types — Order of Severity',
          device: '"Simple comes first (one line on retina), Compound is worse (both lines off), Mixed is the extremes (both sides)"',
          breakdown: 'Simple myopic → Compound myopic (both in front) | Simple hyperopic → Compound hyperopic (both behind) | Mixed = one each side. Correction: simple = cylinder only; compound = sphere + cylinder; mixed = opposite signs.',
        },
        {
          kind: 'mnemonic',
          term: 'Historical Figures: Who Did What',
          device: '"Scheiner PROVED · Kepler DEFINED · Kastner FOUND · Helmholtz NAMED · Donders CLASSIFIED (×2) · Airy FIXED · Green CHARTED"',
          breakdown: 'Scheiner 1619 (proved accommodation). Kepler 1611 (defined myopia). Kastner 1855 (found hyperopia). Helmholtz 1859 (named it). Donders 1858+1866 (classified both). Airy (first correction of astigmatism with sph-cyl). Green (clock dial chart).',
        },
        {
          kind: 'mnemonic',
          term: "Hofstetter's Three Formulas",
          device: '"Max is 25 and cuts 40 cents per year; Avg is 18.5 and cuts 30; Min is 15 and cuts 25"',
          breakdown: 'Maximum AA = 25 − 0.40(age) | Average AA = 18.5 − 0.30(age) | Minimum AA = 15 − 0.25(age). Higher starting = higher annual decrease.',
        },
      ],
    },
    {
      id: 'high-yield',
      title: 'High-Yield Facts',
      icon: '⭐',
      items: [
        { kind: 'fact', content: 'Total eye power = 58.64 D (Gullstrand). Cornea = ~43 D (2/3). Lens = ~19 D (1/3).', highlight: '58.64 D total' },
        { kind: 'fact', content: 'Front corneal surface radius = 7.7 mm. Back = 6.8 mm. Axial length (secondary focal length) = 24.38 mm.', highlight: 'Key radii' },
        { kind: 'fact', content: 'Myopia: axial (most common) — 1 mm extra axial length ≈ +3 D myopia. Hyperopia: opposite.', highlight: '1 mm = ~3 D' },
        { kind: 'fact', content: 'Simple myopic astigmatism: one focal line ON retina, one IN FRONT. Correction: minus cylinder only.', highlight: 'Simple myopic astig' },
        { kind: 'fact', content: 'Mixed astigmatism: one focal line in front, one behind retina. Correction: opposite sign lenses.', highlight: 'Mixed astig' },
        { kind: 'fact', content: 'Anisometropia ≥1 D (Grosvenor) or ≥2 D (Borish). Most common cause of amblyopia in children = unilateral high hyperopia / anisometropia.', highlight: 'Anisometropia & amblyopia' },
        { kind: 'fact', content: 'Regular astigmatism: two principal meridians perpendicular to each other → correctable with spectacle lenses.', highlight: 'Regular = perpendicular meridians' },
        { kind: 'fact', content: 'Irregular astigmatism (e.g., keratoconus): meridians not perpendicular → requires RGP contact lenses.', highlight: 'Irregular = RGP needed' },
      ],
    },
    {
      id: 'traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'Who FIRST identified and described hyperopia?',
          wrong: 'Helmholtz',
          correct: 'Kastner (1855) — Helmholtz only named it (1859)',
          why: 'Kastner found it first. Helmholtz coined the term "hyperopia." Donders classified it. Three different people, three different contributions — very commonly confused.',
        },
        {
          kind: 'trap',
          question: 'Absolute hyperopia: can the patient see clearly with maximum accommodation?',
          wrong: 'Yes — with enough effort',
          correct: 'No — absolute means it CANNOT be overcome. Results in subnormal vision.',
          why: 'Facultative can be overcome. Absolute cannot, by definition. The word "absolute" = unconditional = no amount of accommodation compensates.',
        },
        {
          kind: 'trap',
          question: 'What is the correction for simple HYPEROPIC astigmatism?',
          wrong: 'Minus cylinder only',
          correct: 'Plus cylinder only — one focal line is on retina, one is BEHIND',
          why: 'Simple myopic = minus cyl (focal line in front → push it back). Simple hyperopic = plus cyl (focal line behind → pull it forward). Don\'t mix up the signs.',
        },
        {
          kind: 'trap',
          question: 'What is the SECONDARY focal length (axial length) of the schematic eye?',
          wrong: '15.70 mm (this is the primary focal length)',
          correct: '24.38 mm',
          why: 'Primary focal length = 15.70 mm (in front of cornea). Secondary focal length = 24.38 mm (axial length of the eye, behind retina). These two numbers are frequently swapped.',
        },
      ],
    },
    {
      id: 'recall',
      title: 'Active Recall',
      icon: '🎯',
      items: [
        { kind: 'recall', prompt: 'Lens nucleus refractive index:', answer: '1.406 (highest in the eye)' },
        { kind: 'recall', prompt: 'Total hyperopia = Manifest + ___', answer: 'Latent hyperopia' },
        { kind: 'recall', prompt: 'Simple compound myopic astigmatism correction:', answer: 'Compound myopic = minus sphere + minus cylinder' },
        { kind: 'recall', prompt: 'George Biddle Airy is known for:', answer: 'First to CORRECT astigmatism with a spherocylindrical lens (on himself)' },
        { kind: 'recall', prompt: 'Axial length (secondary focal length) of the schematic eye:', answer: '24.38 mm' },
        { kind: 'recall', prompt: 'Against-the-rule (ATR) astigmatism: strongest meridian near:', answer: 'Horizontal axis (0–30° or 150–180°)' },
        { kind: 'recall', prompt: 'Sorsby\'s pathological (component) hyperopia is defined as:', answer: 'Above 6.00 D — progressive, degenerative' },
        { kind: 'recall', prompt: 'Irregular astigmatism requires which correction?', answer: 'Rigid gas permeable (RGP) contact lenses' },
      ],
    },
    {
      id: 'myopia-classification-special',
      title: 'Myopia: Classification & Special Conditions',
      icon: '🔍',
      items: [
        {
          kind: 'mnemonic',
          term: 'Myopia Classification by Amount',
          device: '"Low-3, Medium-6, High-above" — same bracket pattern as hyperopia',
          breakdown: 'Low degree: 0.25 to 3.00 D. Medium: 3.00 to 6.00 D. High: 6.00 D and above. Sorsby\'s correlative type = up to 6.00 D (simple, benign, stationary). Sorsby\'s component type = above 6.00 D (pathological, progressive, degenerative).',
        },
        {
          kind: 'mnemonic',
          term: 'Myopia Age of Onset Categories',
          device: '"Babies → Youth → Early Adult → Late Adult"',
          breakdown: 'Congenital myopia: present at birth (1-2% prevalence). Youth-onset: 6-15 years (15-30%). Early adult-onset: ~18-40 years. Late adult-onset: after 40 years (8-10%). Earlier onset generally = faster progression and greater final myopia.',
        },
        {
          kind: 'fact',
          content: 'Myopia prevalence: overall 25-40%. Below -6.00 D = 20% more common in MALES. Above -6.00 D = TWICE as common in FEMALES. Factors: age, race (Chinese and Japanese highest), years of education, amount of near work.',
          highlight: 'Low myopia: males. High myopia: females',
        },
        {
          kind: 'fact',
          content: "Pseudomyopia (false myopia): tonic spasm of accommodation making an emmetrope or hyperope appear myopic. Also called school myopia, college myopia, functional myopia, or refractive myopia. Approaches: fogging lenses (strong plus), prism base-in, orthoptic techniques.",
          highlight: 'Pseudomyopia = tonic accommodative spasm',
        },
        {
          kind: 'fact',
          content: 'Night myopia (nocturnal myopia): myopia that appears in dim illumination. The amount of error is less in daylight. Related to increased pupil size allowing more peripheral rays to enter, increasing spherical aberration.',
          highlight: 'Night myopia = dim illumination only',
        },
        {
          kind: 'fact',
          content: "Objective signs of myopia: dilated appearance of pupil, squinting of eyes, staring expression, exophthalmos (in high amounts of myopia), myopic crescent (visible under ophthalmoscope). Myopic crescent = temporal crescent at optic disc margin.",
          highlight: 'Exophthalmos only in high myopia',
        },
        {
          kind: 'fact',
          content: 'Myopia progression rate: typically 0.25 to 0.55 D per year until teen years. Earlier onset, faster progression, and greater final myopia. Myopic shift in the elderly is usually due to crystalline lens changes (nuclear sclerosis).',
          highlight: '0.25-0.55 D/year progression',
        },
        {
          kind: 'trap',
          question: 'Which type of myopia is Sorsby\'s COMPONENT type?',
          wrong: 'Correlative myopia — correlates with all components equally',
          correct: 'Component type = above 6.00 D, pathological, progressive, degenerative. Correlative type = up to 6.00 D, simple, benign, stationary.',
          why: 'Sorsby\'s correlative = mild-moderate, physiologic variation. Component = pathological abnormality of one or more ocular components. Same classification system applies to hyperopia.',
        },
        {
          kind: 'trap',
          question: 'High myopia (above -6.00 D) is more common in which sex?',
          wrong: 'Males (since myopia overall is more common in males)',
          correct: 'Females — high myopia (>-6.00 D) is twice as common in females. Low myopia (<-6.00 D) is 20% more common in males.',
          why: 'The sex distribution reverses with severity. Low myopia = male-predominant. High myopia = female-predominant. This distinction frequently appears on board exams.',
        },
        {
          kind: 'recall',
          prompt: 'Name four other terms for pseudomyopia.',
          answer: 'School myopia, college myopia, false myopia, refractive myopia, functional myopia',
        },
        {
          kind: 'recall',
          prompt: 'Keratoconus causes myopia by:',
          answer: 'Corneal curvature becoming irregular and increasing, resulting in an increase in the error of refraction',
        },
      ],
    },
    {
      id: 'anisometropia-aniseikonia',
      title: 'Anisometropia, Aniseikonia & Related Conditions',
      icon: '⚖️',
      items: [
        {
          kind: 'mnemonic',
          term: 'Anisometropia Classes I-V (Borish)',
          device: '"Class I: Both use. II: Mostly fuse. III: Amblyopia deep. IV: One for each. V: Strabismus added."',
          breakdown: 'Class I (<1.50 D): both eyes used together, good fusion and stereopsis. Class II (1.50-3.00 D): fusion present most of time, possible central suppression. Class III (>3.00 D): deep amblyopia in poorer eye (refractive amblyopia, corrects only to 20/100). Class IV: equal vision in both eyes but uses one for distance, other for near. Class V: equal vision + muscle imbalance = strabismic amblyopia.',
        },
        {
          kind: 'fact',
          content: 'Anisometropia prevalence from extensive studies: 0.50-1.00 D difference = 23.1%; 1.00-1.50 D = 7.4%; 1.50-2.00 D = 2.9%; 2.00 D or more = 1.6%. Most investigators believe a difference >6.00 D cannot be helped by any treatment.',
          highlight: '>6.00 D anisometropia = poor prognosis',
        },
        {
          kind: 'fact',
          content: 'Effects of anisometropia: aniseikonia (unequal image size), anisophoria (different phoria in various gaze directions), amblyopia and suppression (young patients), strabismus secondary to anisometropic amblyopia.',
          highlight: 'Anisometropia leads to: aniseikonia, anisophoria, amblyopia',
        },
        {
          kind: 'fact',
          content: 'Aniseikonia: a condition in which the ocular images are unequal in size and shape. Types: overall symmetrical (one image larger in all meridians), meridional symmetrical (larger in one meridian only), compound symmetrical (combination of both). Measured by the eikonometer.',
          highlight: 'Eikonometer measures aniseikonia',
        },
        {
          kind: 'fact',
          content: 'Antimetropia: one eye is myopic and the other is hyperopic — a mixed anisometropia. Iso-oxyopia: equality of VA in both eyes when fully corrected for ametropia. Aniso-oxyopia: inequality of VA in both eyes when fully corrected.',
          highlight: 'Antimetropia = one myope, one hyperope',
        },
        {
          kind: 'fact',
          content: 'Iseikonic (isokonic) lenses correct aniseikonia by altering magnification through changes in lens thickness and back curve WITHOUT altering the power of the lens. Types include doublet lenses and fused bifocals.',
          highlight: 'Iseikonic lenses: change magnification, not power',
        },
        {
          kind: 'trap',
          question: 'A patient in Class III anisometropia (>3.00 D) has the amblyopic eye corrected. What is the best visual acuity typically achievable?',
          wrong: '20/20 with patching',
          correct: '20/100 at most — Class III anisometropia is called refractive amblyopia, and the amblyopia is typically deep despite full optical correction.',
          why: 'Class III anisometropia produces the deepest refractive/anisometropic amblyopia. The eyes remain straight because peripheral fusion is intact, but central vision in the non-dominant eye is severely compromised.',
        },
        {
          kind: 'trap',
          question: 'Anisometropic myopia of 6.00 D in one eye and plano in the other — can glasses correct the amblyopia?',
          wrong: 'Yes, with full correction and patching',
          correct: 'No — glasses will not be tolerated due to intolerable aniseikonia, and amblyopia will NOT be corrected by refraction alone in this degree of difference.',
          why: 'When the interocular difference is very high (around 6 D with one eye plano), the size difference between corrected images becomes intolerable. Contact lenses should be tried since they minimize aniseikonia.',
        },
        {
          kind: 'recall',
          prompt: 'Visuoscope is used for:',
          answer: 'Determining the type of non-central fixation in amblyopia — it projects a shadow onto the retina via an ophthalmoscope with an opaque fixation target',
        },
        {
          kind: 'recall',
          prompt: 'Pleoptics is a method for:',
          answer: 'Treating amblyopia ex anopsia by providing concentrated and intensive stimulation to the fovea of the amblyopic eye',
        },
      ],
    },
    {
      id: 'presbyopia-amblyopia-classification',
      title: 'Presbyopia & Amblyopia Classification',
      icon: '📖',
      items: [
        {
          kind: 'mnemonic',
          term: 'Presbyopia Classification (Cline, Hofstetter, Griffin)',
          device: '"Absolute is done. Incipient is starting. Premature is early. Nocturnal is lights-out."',
          breakdown: 'Absolute presbyopia: accommodative ability commonly absent — convex lens necessary for near. Incipient: early stage, small print may still be read without addition but with effort. Premature: appears before age 40. Nocturnal: reduced apparent amplitude in dim illumination only.',
        },
        {
          kind: 'fact',
          content: "Presbyopia onset: commonly accepted age is 45, but may appear as early as 40 or as late as 48-50 years old. Clinically, presbyopia means the amplitude of accommodation is no longer sufficient to meet the patient's functional needs at near (Brookman, 1996).",
          highlight: 'Onset 45 yrs; range 40-50',
        },
        {
          kind: 'fact',
          content: 'Customary Near Working Distance (CNWD) is influenced by: patient stature, customary near tasks, vocational considerations, and patient\'s ametropia and lens effectivity. Presbyopic add determined by: ADD = WD - ½(AA). Middle Third: ADD = NRA - ½(PRA - NRA).',
          highlight: 'ADD = WD - ½(AA)',
        },
        {
          kind: 'fact',
          content: "Cause of presbyopia accepted by Borish: sclerosis of lens fibers and capsule, plus changes in index of refraction. Ciliary muscle remains functional — the lens simply cannot spring back. Schanz's theory: UV radiation of shorter wavelengths chemically affects lens substance.",
          highlight: 'Lens sclerosis = cause (not ciliary muscle)',
        },
        {
          kind: 'fact',
          content: "Aristotle (384 BC) first differentiated refractive error from presbyopia. Levene, Hofstetter, and Maurolycus theorized presbyopia results from problems with the crystalline lens. Levene (1977) reviewed Aristotle's contribution.",
          highlight: 'Aristotle: first distinguished presbyopia from RE',
        },
        {
          kind: 'fact',
          content: "Amblyopia classification: Organic amblyopia (structural cause — optic nerve hypoplasia, nutritional, toxic). Functional amblyopia subtypes: hysterical, light deprivation, isometric (isoanisometropic), ex anopsia, strabismic, anisometropic.",
          highlight: 'Functional amblyopia subtypes to know',
        },
        {
          kind: 'fact',
          content: "Strabismus affects approximately 2-3.5% of the population. Amblyopia prognosis: GOOD in nutritional, tobacco, hysterical, isometropic, anisometropic, and strabismic types. POOR in light deprivation amblyopia.",
          highlight: 'Poor prognosis: light deprivation amblyopia',
        },
        {
          kind: 'trap',
          question: 'Absolute presbyopia means accommodation is completely absent. Which patients are most affected at this stage?',
          wrong: 'All patients equally — everyone loses accommodation',
          correct: 'The hyperope is most affected — at absolute presbyopia, the emmetrope sees clearly only at optical infinity; the myope sees at their far point (closer); but the hyperope cannot see clearly at any distance without correction.',
          why: 'Emmetropes can still see at optical infinity without correction. Myopes see at their punctum remotum. Hyperopes — whose far point is already behind the eye — cannot see clearly anywhere without correction when accommodation is absent.',
        },
        {
          kind: 'trap',
          question: 'Nocturnal presbyopia is caused by:',
          wrong: 'Changes in accommodation at night due to aging',
          correct: 'Reduction of the apparent amplitude of accommodation induced by the REDUCTION OF ILLUMINATION — not strictly an age phenomenon.',
          why: 'Nocturnal presbyopia is specifically defined as the reduction in apparent AA caused by dim illumination (pupil dilation increases spherical aberration, reducing effective near vision). It can affect younger patients in low light.',
        },
        {
          kind: 'recall',
          prompt: 'Presbyopia is NOT a disease. Define it in the DVSc (Cline, Hofstetter, Griffin) sense.',
          answer: 'A reduction of accommodative ability occurring normally with age, necessitating a plus lens addition for satisfactory near vision, sometimes identified by recession of the near point beyond 20 cm.',
        },
        {
          kind: 'recall',
          prompt: 'What determines the amplitude of accommodation in Donder\'s Table?',
          answer: 'Age — Donder\'s Table provides expected AA values by age, used as an alternative to Hofstetter\'s formula for clinical determination of expected amplitude.',
        },
      ],
    },
  ],
}

export default data
