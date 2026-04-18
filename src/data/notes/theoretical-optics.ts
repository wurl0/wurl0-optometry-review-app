import { NotesData } from '@/lib/notes-types'

const notes: NotesData = {
  subject: 'Theoretical Optics',
  slug: 'theoretical-optics',
  sections: [
    {
      id: 'refractive-status',
      title: 'Refractive Status & the Schematic Eye',
      blocks: [
        {
          kind: 'text',
          content:
            'Refractive status describes the relationship between the posterior principal focus of the eye and the retina with accommodation fully relaxed. The schematic eye (Gullstrand) gives us precise values for the normal optical system.',
        },
        {
          kind: 'sub',
          title: 'Refractive Indices (Must Memorize)',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Refractive Index'],
              rows: [
                ['Aqueous humor', '1.336'],
                ['Vitreous humor', '1.336'],
                ['Cornea', '1.376'],
                ['Lens cortex', '1.386'],
                ['Lens nucleus', '1.406'],
                ['Air', '1.000'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Aqueous = Vitreous = 1.336. Cornea (1.376) < Cortex (1.386) < Nucleus (1.406). The gradient in the lens helps reduce spherical aberration.',
            },
          ],
        },
        {
          kind: 'sub',
          title: "Gullstrand's Schematic Eye — Key Values",
          blocks: [
            {
              kind: 'table',
              headers: ['Parameter', 'Value'],
              rows: [
                ['Total refractive power (unaccommodated)', '58.64 D'],
                ['Corneal power (net, average)', '~43 D'],
                ['Front corneal surface radius', '7.7 mm'],
                ['Back corneal surface radius', '6.8 mm'],
                ['Corneal thickness', '0.5 mm'],
                ['Lens power (unaccommodated)', '19.11 D'],
                ['Front lens surface radius', '10.0 mm'],
                ['Back lens surface radius', '6.0 mm'],
                ['Cornea → front lens (distance)', '3.6 mm'],
                ['Cornea → back lens (distance)', '7.2 mm'],
                ['Primary focal length (from cornea)', '15.70 mm'],
                ['Secondary focal length (axial length)', '24.38 mm'],
                ['Primary nodal point (from corneal apex)', '7.08 mm'],
                ['Secondary nodal point (from corneal apex)', '7.33 mm'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'The cornea contributes 2/3 of total eye power (36–50 D, avg 43 D). The lens contributes 1/3 (~19 D unaccommodated). Remember: 58.64 D total = cornea + lens + interaction.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Emmetropia vs Ametropia',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Emmetropia', 'Posterior principal focus falls exactly ON the retina with accommodation relaxed'],
                ['Ametropia', 'Any deviation from emmetropia (error of refraction)'],
                ['Myopia', 'Focus falls IN FRONT of retina'],
                ['Hyperopia', 'Focus falls BEHIND retina'],
                ['Astigmatism', 'Two different focal lines — no single focal point'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'myopia',
      title: 'Myopia',
      blocks: [
        {
          kind: 'text',
          content:
            'In myopia, parallel rays of light converge to a focus in front of the retina with accommodation relaxed. The eye is either too long (axial myopia) or too powerful (refractive myopia). Corrected with minus (concave) lenses.',
        },
        {
          kind: 'sub',
          title: 'Classification by Degree',
          blocks: [
            {
              kind: 'table',
              headers: ['Grade', 'Range'],
              rows: [
                ['Low myopia', '0.25 D to 3.00 D'],
                ['Medium myopia', '3.00 D to 6.00 D'],
                ['High myopia', '6.00 D and above'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Classification by Type',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Axial myopia', 'Axial length of eye is too long; refractive power normal'],
                ['Refractive myopia', 'Axial length normal; refracting surfaces too strong'],
                ['Curvature myopia', 'Increased curvature of one or more refracting surfaces'],
                ['Index myopia', 'Increased refractive index of lens (e.g., nuclear sclerosis)'],
                ['Positional myopia', 'Lens displaced anteriorly'],
                ['Accommodative excess', 'Excessive accommodative tone (pseudomyopia)'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Johannes Kepler (1611) gave the first actual definition of myopia. Donders (1866) classified it. Axial myopia is the most common form — each 1 mm increase in axial length adds ~3 D of myopia.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Donders Classification (by cause)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Simple (school) myopia: most common; develops in childhood/teens; stabilizes by mid-20s',
                'Degenerative (pathologic) myopia: progressive; >6 D; associated with fundus changes (lacquer cracks, Fuchs spot, staphyloma)',
                'Nocturnal myopia: occurs in reduced illumination (pupil dilates, spherical aberration increases)',
                'Pseudomyopia: accommodative spasm causing apparent myopia; resolves with cycloplegia',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hyperopia',
      title: 'Hyperopia',
      blocks: [
        {
          kind: 'text',
          content:
            'In hyperopia, parallel rays focus behind the retina with accommodation relaxed. The eye is too short or its refracting power is insufficient. Corrected with plus (convex) lenses.',
        },
        { kind: 'diagram', id: 'to-hyperopia-subtypes' },
        {
          kind: 'sub',
          title: 'Classification by Degree',
          blocks: [
            {
              kind: 'table',
              headers: ['Grade', 'Range'],
              rows: [
                ['Low hyperopia', '0.25 D to 3.00 D'],
                ['Medium hyperopia', '3.00 D to 5.00 D'],
                ['High hyperopia', '5.00 D and above'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Subtypes of Hyperopia (Must Know)',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Absolute hyperopia', 'Cannot be overcome by any amount of accommodation; results in subnormal vision'],
                ['Facultative hyperopia', 'Can be overcome by accommodation; vision may be normal'],
                ['Latent hyperopia', 'Hidden; masked by ciliary tone; revealed only by cycloplegic refraction'],
                ['Manifest hyperopia', 'Sum of absolute + facultative; measurable without cycloplegia'],
                ['Total hyperopia', 'Sum of manifest + latent; requires cycloplegic refraction to reveal'],
                ['Tonic latent hyperopia', 'Relatively fixed/permanent spasm of accommodation'],
                ['Clonic latent hyperopia', 'Temporary, intermittent spasm'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Formula chain: Total = Manifest + Latent | Manifest = Absolute + Facultative. Kastner (1855) first identified hyperopia; Helmholtz (1859) coined the term; Donders (1858) classified it.',
            },
          ],
        },
        {
          kind: 'sub',
          title: "Sorsby's Classification",
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Range', 'Nature'],
              rows: [
                ['Correlative (simple)', '0.25 D to 6.00 D', 'Benign, stationary, within normal variation'],
                ['Component (pathological)', 'Above 6.00 D', 'Progressive, degenerative, due to abnormal component'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Symptoms & Signs',
          blocks: [
            {
              kind: 'table',
              headers: ['Symptoms', 'Signs'],
              rows: [
                ['Asthenopia (eye strain)', 'Constricted pupil (from sustained near effort)'],
                ['Photophobia', 'Convergent strabismus (esotropia)'],
                ['Tearing / lacrimation', 'Reduced near VA in high hyperopes'],
                ['Blurred near vision (late)', 'Red, inflamed eyes after near work'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'astigmatism',
      title: 'Astigmatism',
      blocks: [
        {
          kind: 'text',
          content:
            'Astigmatism occurs when the refracting surfaces of the eye have different curvatures in different meridians. Instead of a single focal point, there are two focal lines (Sturm\'s interval). Astigmatism is the most commonly corrected refractive error.',
        },
        { kind: 'diagram', id: 'to-astigmatism-meridians' },
        {
          kind: 'sub',
          title: 'Classification by Meridian (Axis Orientation)',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Axis of Greatest Power', 'Memory Hook'],
              rows: [
                ['With-the-Rule (WTR / Direct)', '60° – 120° (near vertical)', 'Vertical meridian is strongest — "with" the rule of vertical dominance'],
                ['Against-the-Rule (ATR / Inverse / Perverse)', '0° – 30° or 150° – 180° (near horizontal)', 'Horizontal meridian is strongest — against the expected'],
                ['Oblique', '30° – 60° or 120° – 150°', 'Neither horizontal nor vertical'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'WTR is most common in children and young adults. ATR becomes more common with age. Oblique astigmatism tends to cause more distortion and is harder to adapt to.',
            },
          ],
        },
        { kind: 'diagram', id: 'to-astigmatism-focal-types' },
        {
          kind: 'sub',
          title: 'Classification by Focal Line Position',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'F1 Position', 'F2 Position', 'Correction'],
              rows: [
                ['Simple myopic', 'In front of retina', 'On retina', 'Minus cylinder only'],
                ['Compound myopic', 'In front of retina', 'In front of retina', 'Minus sph + minus cyl'],
                ['Simple hyperopic', 'On retina', 'Behind retina', 'Plus cylinder only'],
                ['Compound hyperopic', 'Behind retina', 'Behind retina', 'Plus sph + plus cyl'],
                ['Mixed', 'In front of retina', 'Behind retina', 'Opposite sign lenses'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Regular vs Irregular Astigmatism',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description', 'Correction'],
              rows: [
                ['Regular', 'Two principal meridians perpendicular to each other; consistent curvature across each meridian', 'Spectacle lenses or toric contact lenses'],
                ['Irregular', 'Meridians not perpendicular; curvature varies across same meridian (e.g., keratoconus, post-surgical)', 'Rigid gas permeable (RGP) contact lenses'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'George Biddle Airy was the first to correct astigmatism using a spherocylindrical lens (for his own astigmatism). John Green produced the first distance test chart for astigmatism (the clock dial chart).',
            },
          ],
        },
      ],
    },
    {
      id: 'accommodation',
      title: 'Accommodation',
      blocks: [
        {
          kind: 'text',
          content:
            'Accommodation is the process by which the crystalline lens varies its focal length in response to changes in vergence demand. Primary stimulus is blur. It is part of the near triad: accommodation + convergence + miosis.',
        },
        { kind: 'diagram', id: 'to-accommodation-mechanism' },
        {
          kind: 'sub',
          title: 'Helmholtz Theory (Mechanism)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'At REST: Ciliary muscle relaxed (large ring) → zonule fibres are TAUT → lens pulled flat and thin → low power',
                'On ACCOMMODATION: Ciliary muscle CONTRACTS (smaller ring) → zonule fibres go SLACK → lens springs into more spherical shape → increased power',
                'Primary stimulus: BLUR on the fovea',
                'Near triad activated simultaneously: accommodation + convergence + miosis (all via CN III, Edinger-Westphal nucleus)',
              ],
            },
            {
              kind: 'pearl',
              content:
                'Christopher Scheiner (1619) proved accommodation exists using the Scheiner disc (two pinholes). Helmholtz later described the mechanism via the ciliary muscle–zonule–lens relationship.',
            },
          ],
        },
        { kind: 'diagram', id: 'to-hofstetter-formulas' },
        {
          kind: 'sub',
          title: "Hofstetter's Amplitude of Accommodation Formulas",
          blocks: [
            {
              kind: 'table',
              headers: ['Formula', 'Equation', 'At Age 20', 'At Age 40', 'At Age 50'],
              rows: [
                ['Minimum AA', '15 − 0.25(age)', '10.00 D', '5.00 D', '2.50 D'],
                ['Average AA', '18.5 − 0.30(age)', '12.50 D', '6.50 D', '3.50 D'],
                ['Maximum AA', '25 − 0.40(age)', '17.00 D', '9.00 D', '5.00 D'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Presbyopia',
          blocks: [
            {
              kind: 'text',
              content:
                'Presbyopia is the diminution of amplitude of accommodation with advancing age, caused by loss of lens elasticity (lens hardens with age and cannot spring back).',
            },
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Incipient presbyopia', 'Early stage; small print readable with effort; near point receding'],
                ['Absolute presbyopia', 'Accommodation at minimum or practically absent'],
                ['Premature presbyopia', 'Manifests before age 40'],
                ['Nocturnal presbyopia', 'Reduced accommodation in dim illumination'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Presbyopia typically manifests clinically at 45 years (range: 40–50). Symptoms appear when amplitude falls below 5.00 D. Uncorrected hyperopes develop symptoms EARLIER than myopes — the hyperope is already using accommodative reserve just to see clearly at distance.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Accommodation',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Stimulus', 'Notes'],
              rows: [
                ['Reflex accommodation', 'Blur on retina', 'The dominant type in clinical practice'],
                ['Vergence accommodation', 'Convergence demand', 'Linked via CA/C ratio; increases with convergence'],
                ['Proximal accommodation', 'Awareness of object closeness', 'Psychological/awareness-based'],
                ['Tonic accommodation', 'Resting state in dark/no stimulus', 'Dark focus: ~1 D in most individuals'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anisometropia',
      title: 'Anisometropia & Related Terms',
      blocks: [
        {
          kind: 'text',
          content:
            'Anisometropia refers to a significant difference in refractive error between the two eyes. The clinical threshold varies by source, but both definitions are testable.',
        },
        {
          kind: 'table',
          headers: ['Term', 'Definition'],
          rows: [
            ['Anisometropia', '≥1.00 D difference between eyes (Grosvenor) or ≥2.00 D (Borish)'],
            ['Isometropia', 'Both eyes have equal refractive power'],
            ['Antimetropia', 'One eye myopic, other eye hyperopic'],
            ['Isoanisometropia', 'Both eyes same type of ametropia but different amounts (both myopic or both hyperopic)'],
            ['Iso-oxyopia', 'Equal best corrected visual acuity (BCVA) between eyes'],
            ['Aniso-oxyopia', 'Unequal BCVA even when both eyes fully corrected'],
            ['Amblyopia ex anopsia', 'Amblyopia from disuse/suppression; often from anisometropia'],
          ],
        },
        {
          kind: 'sub',
          title: 'Clinical Significance',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Anisometropia >1.00 D can cause aniseikonia — unequal image sizes on each retina',
                'Aniseikonia can disrupt binocular vision (fusional difficulty, asthenopia)',
                'High anisometropia in childhood (especially hyperopic) is a major cause of amblyopia',
                'Induced prism from spectacle correction: a concern in high anisometropia; solved with contact lenses',
                'Antimetropia: one eye may suppress depending on which is used for distance vs near',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'historical-figures',
      title: 'Historical Figures & Discoveries',
      blocks: [
        {
          kind: 'text',
          content:
            'Board exams frequently test the names behind landmark discoveries in optics and refractive error. Know who did what first.',
        },
        {
          kind: 'table',
          headers: ['Person', 'Year', 'Contribution'],
          rows: [
            ['Christopher Scheiner', '1619', 'Proved accommodation exists using Scheiner\'s disc (two-pinhole method)'],
            ['Johannes Kepler', '1611', 'Gave the first actual definition of myopia'],
            ['George Biddle Airy', '~1825', 'First person to correct astigmatism using a spherocylindrical lens (used on himself)'],
            ['John Green', '~1860s', 'Produced the first distance test chart for astigmatism (clock dial / fan chart)'],
            ['Donders', '1858/1866', 'Classified hyperopia (1858) and myopia (1866)'],
            ['Kastner', '1855', 'First identified and described hyperopia'],
            ['Hermann von Helmholtz', '1859', 'Coined the term "hyperopia"; also described the accommodation mechanism'],
          ],
        },
        {
          kind: 'pearl',
          content:
            'Mnemonic for history: "Scheiner Proved, Kepler Defined, Airy Corrected, Green Charted, Donders Classified." Kastner found it; Helmholtz named it.',
        },
      ],
    },
  ],
}

export default notes
