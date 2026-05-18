import { OlePrepData } from '@/lib/ole-prep-types'

const data: OlePrepData = {
  subject: 'Physiologic Optics',
  slug: 'physiologic-optics',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'Refractive Indices Order',
          device: '"Air Always Causes Very Noticeable Lies"',
          breakdown: 'Air (1.000) · Aqueous & Vitreous (1.336) · Cornea (1.376) · Cortex (1.386) · Nucleus (1.406) — each step increases. Aqueous = Vitreous = 1.336.',
        },
        {
          kind: 'mnemonic',
          term: "Hofstetter's Formulas — Max Subtracts Most",
          device: '"MAX pays 40, AVG pays 30, MIN pays 25"',
          breakdown: 'Max = 25 − 0.40(age) | Avg = 18.5 − 0.30(age) | Min = 15 − 0.25(age). The biggest number (Max) subtracts the most per year.',
        },
        {
          kind: 'mnemonic',
          term: 'Hyperopia Subtypes Chain',
          device: '"TOTAL = MANIFEST + LATENT; MANIFEST = ABS + FAC"',
          breakdown: 'Total → Manifest (what you can measure without cycloplegia) + Latent (hidden). Manifest → Absolute (cannot overcome) + Facultative (can overcome with accommodation).',
        },
        {
          kind: 'mnemonic',
          term: 'WTR vs ATR Astigmatism',
          device: '"WITH = Vertical is strong. AGAINST = Horizontal is strong."',
          breakdown: 'WTR: curvature of greatest power near VERTICAL (60–120°) — like most people, the vertical meridian is dominant. ATR goes against this — horizontal is strongest. Both correct with cylinders.',
        },
        {
          kind: 'mnemonic',
          term: 'Historical Figures',
          device: '"Scheiner PROVED · Kepler DEFINED · Kastner FOUND · Helmholtz NAMED · Donders CLASSIFIED · Airy CORRECTED · Green CHARTED"',
          breakdown: 'Scheiner (1619) proved accommodation. Kepler (1611) defined myopia. Kastner (1855) found hyperopia. Helmholtz (1859) named it. Donders classified both (1858/1866). Airy corrected astigmatism. Green made the clock chart.',
        },
      ],
    },
    {
      id: 'high-yield',
      title: 'High-Yield Facts',
      icon: '⭐',
      items: [
        { kind: 'fact', content: 'Cornea contributes 2/3 of total eye power (~43 D). Total eye power = 58.64 D (Gullstrand).', highlight: '58.64 D' },
        { kind: 'fact', content: 'Presbyopia onset ~45 years. Symptoms when amplitude < 5.00 D. Caused by loss of LENS ELASTICITY (not ciliary muscle weakness).', highlight: '45 yrs / 5.00 D' },
        { kind: 'fact', content: 'Aqueous = Vitreous = 1.336. Cornea = 1.376. Lens cortex = 1.386. Lens nucleus = 1.406.', highlight: 'Refractive indices' },
        { kind: 'fact', content: 'Astigmatism is the MOST COMMONLY CORRECTED refractive error today.', highlight: 'Most common corrected' },
        { kind: 'fact', content: 'Accommodation stimulus: BLUR on the fovea (not proximity, not vergence).', highlight: 'Primary stimulus = blur' },
        { kind: 'fact', content: "Sorsby's: Correlative (simple) = 0.25–6.00 D. Component (pathological) = above 6.00 D.", highlight: "Sorsby's" },
        { kind: 'fact', content: 'Anisometropia threshold: ≥1.00 D (Grosvenor) or ≥2.00 D (Borish). Know BOTH definitions.', highlight: 'Anisometropia thresholds' },
        { kind: 'fact', content: 'Presbyopia appears EARLIER in uncorrected hyperopes than myopes — hyperope already uses accommodative reserve at distance.', highlight: 'Hyperope presbyopia first' },
      ],
    },
    {
      id: 'traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'Which type of hyperopia requires cycloplegic refraction to fully reveal?',
          wrong: 'Manifest hyperopia',
          correct: 'Latent hyperopia',
          why: 'Latent is HIDDEN by ciliary tone. Manifest can be measured without cycloplegia. Total requires cycloplegia.',
        },
        {
          kind: 'trap',
          question: 'WTR astigmatism: the axis of the CORRECTING cylinder is near which direction?',
          wrong: 'Vertical (90°)',
          correct: 'Horizontal (180°) — the correcting MINUS cylinder axis is 180° for WTR',
          why: 'WTR strongest POWER meridian is vertical → correcting cylinder AXIS is horizontal. Confused by the "vertical is strong" mnemonic — power and axis are perpendicular.',
        },
        {
          kind: 'trap',
          question: 'Presbyopia is caused by weakness of which structure?',
          wrong: 'Ciliary muscle weakness',
          correct: 'Loss of lens elasticity',
          why: 'The ciliary muscle contracts fine. The lens simply cannot spring back because it has hardened. This is why reading glasses help — they substitute for a lens that no longer changes shape.',
        },
        {
          kind: 'trap',
          question: 'At age 20, what is the MINIMUM amplitude of accommodation per Hofstetter?',
          wrong: '12.50 D (the average value)',
          correct: '10.00 D — Min = 15 − 0.25(20) = 10.00 D',
          why: 'Students pick the average (18.5 − 0.30×20 = 12.5 D) or maximum (17 D). Min uses the smallest coefficient (0.25) and smallest constant (15).',
        },
      ],
    },
    {
      id: 'recall',
      title: 'Active Recall',
      icon: '🎯',
      items: [
        { kind: 'recall', prompt: 'Total hyperopia = _____ + _____', answer: 'Manifest hyperopia + Latent hyperopia' },
        { kind: 'recall', prompt: 'Manifest hyperopia = _____ + _____', answer: 'Absolute hyperopia + Facultative hyperopia' },
        { kind: 'recall', prompt: "Hofstetter's average amplitude formula:", answer: '18.5 − 0.30(age)' },
        { kind: 'recall', prompt: 'Corneal refractive index:', answer: '1.376' },
        { kind: 'recall', prompt: 'Presbyopia symptoms appear when AA falls below:', answer: '5.00 D (typically ~age 45)' },
        { kind: 'recall', prompt: 'ATR astigmatism: strongest power near which meridian?', answer: 'Horizontal (0–30° or 150–180°)' },
        { kind: 'recall', prompt: 'Who defined myopia first, and in what year?', answer: 'Johannes Kepler, 1611' },
        { kind: 'recall', prompt: 'Axial length increase of 1 mm = approximately how many diopters of myopia?', answer: '~3 D of additional myopia' },
      ],
    },
    {
      id: 'visual-field-perimetry',
      title: 'Visual Field & Perimetry',
      icon: '👁️',
      items: [
        {
          kind: 'fact',
          content: 'Normal monocular visual field extents: Superior 50°, Nasal 60°, Inferior 70°, Temporal 90°.',
          highlight: 'SNIT: 50-60-70-90',
        },
        {
          kind: 'mnemonic',
          term: 'Normal VF Extent Order (Monocular)',
          device: '"Superior Needs Inferior Temporal" — 50 / 60 / 70 / 90',
          breakdown: 'Superior = 50° (lid blocks more). Nasal = 60°. Inferior = 70°. Temporal = 90° (no nose in the way). Each increases by roughly 10-20°.',
        },
        {
          kind: 'fact',
          content: "Traquair's island of vision: the fovea is the highest peak, the blind spot is the bottomless pit, and the surrounding sea of blindness is the non-visible area.",
          highlight: "Traquair's island",
        },
        {
          kind: 'fact',
          content: 'Blind spot location: in the TEMPORAL hemifield of each eye (nasal retina = temporal field). It corresponds to the optic disc, which has no photoreceptors.',
          highlight: 'Temporal hemifield',
        },
        {
          kind: 'fact',
          content: 'VF defect location by anatomy: Retina/optic nerve = ipsilateral defect. Optic chiasm (crossed fibers) = bitemporal hemianopsia. Optic tract/radiation/cortex = contralateral homonymous defect.',
          highlight: 'VF pathway rule',
        },
        {
          kind: 'fact',
          content: 'Occipital lobe (Area 17) lesion causes MACULAR SPARING because the macula has dual blood supply and large cortical representation. A left occipital lobe lesion = right homonymous hemianopsia with macular sparing.',
          highlight: 'Macular sparing',
        },
        {
          kind: 'trap',
          question: 'Which visual field test screens the CENTRAL 10 degrees?',
          wrong: 'Tangent screen',
          correct: 'Amsler Grid',
          why: 'Amsler Grid is specifically designed for the central 10 degrees, catching macular pathology. The tangent screen tests out to 30 degrees. Confrontation tests peripheral fields.',
        },
        {
          kind: 'trap',
          question: 'A crossed optic chiasm lesion produces which VF defect?',
          wrong: 'Binasal hemianopsia',
          correct: 'Bitemporal hemianopsia',
          why: 'The crossing fibers at the chiasm carry NASAL retinal information = TEMPORAL visual field. A lesion here knocks out both temporal fields (bitemporal heteronymous hemianopsia).',
        },
        {
          kind: 'recall',
          prompt: 'Confrontation test screens which part of the visual field?',
          answer: 'Peripheral visual field',
        },
        {
          kind: 'recall',
          prompt: 'Define an isopter.',
          answer: 'A line connecting all points in the VF with the same threshold for a given test stimulus — the boundary between visible and non-visible zones.',
        },
        {
          kind: 'recall',
          prompt: 'VF defect zones: Central = within ___ degrees, Paracentral = ___ to ___ degrees, Peripheral = beyond ___ degrees.',
          answer: 'Central = within 5 degrees. Paracentral = 5 to 30 degrees. Peripheral = beyond 30 degrees.',
        },
      ],
    },
    {
      id: 'color-vision',
      title: 'Color Vision & Defects',
      icon: '🎨',
      items: [
        {
          kind: 'mnemonic',
          term: 'Cone Photopigments (S, M, L)',
          device: '"Blue Cats Eat Chlorine Like Erythrocytes"',
          breakdown: 'S (Blue) cone = Cyanolabe, peak 430 nm. M (Green) cone = Chlorolabe, peak 535 nm. L (Red) cone = Erythrolabe, peak 565 nm. Pigment names match: Cyan/Chloro/Erythro = Blue/Green/Red.',
        },
        {
          kind: 'fact',
          content: 'Trichromatic Theory (Thomas Young): color vision depends on three cone types with different spectral sensitivities. Tristimulus values from S, M, and L cones are the foundation of all color perception.',
          highlight: 'Young — trichromacy',
        },
        {
          kind: 'fact',
          content: 'Opponent Color Theory (Ewald Hering): color is processed in three antagonistic channels — red vs. green, blue vs. yellow, black vs. white. Explains why "reddish green" is impossible to perceive.',
          highlight: 'Hering — opponent channels',
        },
        {
          kind: 'fact',
          content: 'Deuteranomaly is the MOST COMMON color vision deficiency (~5% of males). Involves decreased sensitivity of M (green) cones. X-linked — males far more affected than females.',
          highlight: 'Most common = Deuteranomaly',
        },
        {
          kind: 'fact',
          content: 'Dichromacy: Protanopia = missing L (red) cones. Deuteranopia = missing M (green) cones. Tritanopia = missing S (blue) cones. Tritanopia is the rarest form (1 in 10,000 people).',
          highlight: 'Protan/Deutan/Tritan',
        },
        {
          kind: 'fact',
          content: 'Ishihara test procedure: requires 20/200 VA or better. Test distance = 75 cm. Viewing time = 3 to 5 seconds per plate. Grading: 4 or fewer errors out of 17 = normal; 5 or more errors = failure. Screens red-green defects ONLY.',
          highlight: 'Ishihara: 75 cm, 3-5 sec, 5+ = fail',
        },
        {
          kind: 'fact',
          content: 'Anomaloscope: most accurate instrument for severity and type classification. Rayleigh match (red + green vs. yellow) tests protan/deutan defects. Protans add more red; deutans add more green to their match.',
          highlight: 'Anomaloscope = most accurate',
        },
        {
          kind: 'trap',
          question: 'Which color vision test classifies ALL THREE deficiency types (protan, deutan, AND tritan)?',
          wrong: 'Ishihara',
          correct: 'Hardy-Rand-Rittler (HRR)',
          why: 'Ishihara detects red-green defects only. HRR (1954, 24 plates) classifies all three axes. The Farnsworth D15 and anomaloscope can also differentiate defect types, but HRR is the pseudoisochromatic option that covers all three.',
        },
        {
          kind: 'trap',
          question: 'A patient with protanomaly needs more _____ to match the yellow field in an anomaloscope.',
          wrong: 'Green',
          correct: 'Red',
          why: 'Protans have weakened L (red) cone response, so they must add more red to achieve a match. Deutans need more green.',
        },
        {
          kind: 'recall',
          prompt: 'No S-cones are found in the _____.',
          answer: 'Fovea (the fovea contains no blue/S-cones).',
        },
        {
          kind: 'recall',
          prompt: 'Additive color primaries vs. subtractive color primaries?',
          answer: 'Additive: Red, Green, Blue (all three = White; none = Black). Subtractive: Cyan, Magenta, Yellow (all three = Black; none = White).',
        },
      ],
    },
    {
      id: 'photoreceptors-adaptation',
      title: 'Photoreceptors & Adaptation',
      icon: '🌙',
      items: [
        {
          kind: 'fact',
          content: 'Rods: approximately 120 million total. Maximum density at ~20 degrees peripheral to the fovea. Absent from fovea and optic disc. Photopigment = rhodopsin. Function: scotopic vision, peripheral vision, motion detection.',
          highlight: 'Rods: 120M, peak at 20°',
        },
        {
          kind: 'fact',
          content: 'Cones: approximately 6-7 million total. Maximum density in the fovea (150,000/mm²). Absent from optic disc. Photopigment = photopsins. Function: photopic vision, color, fine detail.',
          highlight: 'Cones: 6-7M, fovea peak',
        },
        {
          kind: 'fact',
          content: 'Light adaptation is FASTER than dark adaptation. Cone photopigment regenerates quickly. Dark adaptation (rod-mediated) is slower because rhodopsin regeneration is a lengthy photochemical process — full rod adaptation takes 30-45 minutes.',
          highlight: 'Light adapt = faster',
        },
        {
          kind: 'fact',
          content: 'Purkinje shift: as illumination decreases (photopic to scotopic), peak spectral sensitivity shifts from ~555 nm (cones) to ~507 nm (rods). Blue-green objects appear relatively brighter at dusk — rods are more sensitive to shorter wavelengths.',
          highlight: 'Purkinje shift — rods favor blue-green',
        },
        {
          kind: 'fact',
          content: 'Vitamin A is essential for photopigment synthesis. It converts to 11-cis retinal, which binds with opsin to form rhodopsin. Deficiency causes night blindness and can lead to permanent blindness.',
          highlight: 'Vit A → 11-cis retinal → rhodopsin',
        },
        {
          kind: 'trap',
          question: 'Which photoreceptor adapts faster — rods or cones?',
          wrong: 'Rods (they are more sensitive so assumed to be faster)',
          correct: 'Cones adapt faster; rods adapt slower',
          why: 'Cones are less sensitive but their photopigment regenerates quickly. Rods are more sensitive but rhodopsin regeneration is slow. Full rod dark adaptation requires 30-45 minutes.',
        },
        {
          kind: 'trap',
          question: 'Where is rod DENSITY at its maximum in the human retina?',
          wrong: 'The fovea (the most sensitive area)',
          correct: 'About 20 degrees peripheral to the fovea',
          why: 'The fovea is a rod-free zone. Maximum rod density occurs at ~20 degrees eccentricity. This explains averted vision — faint stars are seen better by looking slightly off-center.',
        },
        {
          kind: 'recall',
          prompt: 'Rhodopsin peak absorption wavelength and which cone type peaks at 430 nm?',
          answer: 'Rhodopsin peaks at approximately 507 nm (blue-green). The S-cone (blue cone, Cyanolabe) peaks at 430 nm.',
        },
        {
          kind: 'recall',
          prompt: 'Macular Photostress Test: recovery time thresholds for normal vs. maculopathy.',
          answer: '0-30 seconds = normal. 30-60 seconds = marginal. Greater than 60 seconds = definite maculopathy.',
        },
      ],
    },
    {
      id: 'visual-acuity-entoptic',
      title: 'Visual Acuity & Entoptic Phenomena',
      icon: '🔍',
      items: [
        {
          kind: 'fact',
          content: 'Central (foveal) vision: highest VA and color sensitivity, operates best under high illumination. It is ten times more acute than peripheral vision.',
          highlight: '10x better than periphery',
        },
        {
          kind: 'fact',
          content: 'Brightness Acuity Test (BAT): measures functional VA under three glare levels — HIGH (400 ft-L, direct overhead sunlight), MEDIUM (100 ft-L, cloudy day), LOW (12 ft-L, indoor fluorescent). Indicated when cataract or corneal opacity is suspected.',
          highlight: 'BAT: glare plus VA',
        },
        {
          kind: 'fact',
          content: 'Phosphene: perception of light without any light entering the eye. Caused by mechanical pressure on the eye (pressure phosphene), rapid eye movement (flick phosphene), or electrical stimulation of the brain.',
          highlight: 'Phosphene = light without light',
        },
        {
          kind: 'fact',
          content: 'Afterimage types: Positive afterimage = same color as original; occurs when the retina continues transmitting impulses after stimulus removal. Negative afterimage = opposite (complementary) color; caused by cone overstimulation and fatigue.',
          highlight: 'Positive = same; Negative = opposite color',
        },
        {
          kind: 'fact',
          content: "Blue field phenomenon (Scheerer's phenomenon): small bright dots moving rapidly along squiggly paths in the visual field. Caused by white blood cells moving through the perifoveal capillaries anterior to the photoreceptors.",
          highlight: "Scheerer's = WBCs in capillaries",
        },
        {
          kind: 'fact',
          content: 'Pulfrich phenomenon: a pendulum swinging in a flat lateral arc is perceived as swinging in an elliptical (3D) path. Caused by interocular latency disparity, classically from demyelination following unilateral optic neuritis or multiple sclerosis.',
          highlight: 'Pulfrich = optic neuritis / MS sign',
        },
        {
          kind: 'trap',
          question: 'Depth of FOCUS vs. depth of FIELD — which refers to the range inside the eye (image side)?',
          wrong: 'Depth of field',
          correct: 'Depth of focus — how far the retinal image can be from the retina while still appearing clear',
          why: 'Depth of focus is image-side (inside the eye). Depth of field is object-side (in the world). In optics terminology: focus = image side, field = object side.',
        },
        {
          kind: 'trap',
          question: 'A patient with acute elevated IOP sees colored rings around lights. What is the source?',
          wrong: 'Physiologic halo from lens fiber diffraction',
          correct: 'Pathologic halo from corneal epithelial edema secondary to elevated IOP',
          why: 'Physiologic halos come from the normal radial arrangement of lens fibers. Pathologic halos in elevated IOP arise from corneal edema disturbing light transmission.',
        },
        {
          kind: 'recall',
          prompt: 'Purkinje Figures are entoptic images of which structure?',
          answer: 'The retinal blood vessels — visualized when the fundus is illuminated by parallel light rays.',
        },
        {
          kind: 'recall',
          prompt: 'Contrast sensitivity is the reciprocal of what? Which chart measures it?',
          answer: 'Contrast sensitivity = reciprocal of contrast threshold. Measured with the Pelli-Robson Contrast Sensitivity Chart.',
        },
      ],
    },
  ],
}

export default data
