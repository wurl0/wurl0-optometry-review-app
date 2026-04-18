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
  ],
}

export default data
