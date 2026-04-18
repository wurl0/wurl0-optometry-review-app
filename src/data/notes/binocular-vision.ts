import { NotesData } from '@/lib/notes-types'

const notes: NotesData = {
  subject: 'Binocular Vision',
  slug: 'binocular-vision',
  sections: [
    {
      id: 'basic-concepts',
      title: 'Basic Concepts & Prerequisites',
      blocks: [
        {
          kind: 'text',
          content:
            'Binocular vision (BV) is the coordinated, integrated, and simultaneous function of both eyes to produce a single mental image. The word comes from Latin: bin = two, oculus = eye. BV implies FUSION — the blending of the two ocular images into one single percept.',
        },
        {
          kind: 'sub',
          title: 'Essentials for Binocular Vision',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Healthy functioning maculae with clear visual axes (leading to clear vision)',
                'Efficiently working muscular mechanism — motor fusion via extraocular muscles',
                'Efficiently working neural mechanism — sensory fusion via brain neuroplasticity',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Prerequisites for Single Binocular Vision',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Frontally placed eyes with overlapping retinal fields and straight eyes without deviation',
                'Partial decussation of optic nerve fibers (part of image seen by RE also seen by LE, and vice versa)',
                'Foveal region must be stimulated',
                'Corresponding or identical points: R fovea = L fovea; R nasal = L temporal; R temporal = L nasal',
                'Equal (or nearly equal) size of retinal images',
                'Efficient function of extraocular muscles and nerves',
              ],
            },
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Iseikonia', 'Equal size of retinal images (normal)'],
                ['Aniseikonia', 'Unequal size of retinal images'],
                ['Iso-oxyopia', 'Equal best corrected visual acuity'],
                ['Aniso-oxyopia', 'Unequal best corrected visual acuity'],
                ['Anisometropia', 'Significant/high difference of refractive error between eyes'],
                ['Antimetropia', 'Different refractive status between eyes (e.g., one myopic, one hyperopic)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Advantages of Binocular Vision',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Single vision — the first and foremost advantage',
                'Optical defects in one eye are made less obvious by the normal image of the other eye',
                'Enlarged field of vision',
                'Better power to discriminate details and contours compared to monocular viewing',
                'Loss of one eye will not seriously handicap the individual',
                'Stereopsis / depth perception',
                'Compensation of blind spot and other retinal differences',
              ],
            },
            {
              kind: 'table',
              headers: ['Visual Field', 'Extent'],
              rows: [
                ['Binocular visual field (total)', '180 degrees'],
                ['Common binocular visual field', '120 degrees'],
                ['Monocular visual field', '150 degrees'],
                ['Temporal crescent (monocular only)', '30 degrees'],
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Single vision is the FIRST and foremost advantage of binocular vision. Stereopsis is the HIGHEST form — it is Grade 3 fusion.',
        },
      ],
    },
    {
      id: 'development',
      title: 'Development of Binocular Vision',
      blocks: [
        {
          kind: 'text',
          content:
            'Binocular vision develops progressively from birth. Knowing the milestones is important for clinical evaluation of infants and toddlers and is commonly tested on boards.',
        },
        {
          kind: 'table',
          headers: ['Age', 'Developmental Milestone'],
          rows: [
            ['At birth', 'Eyes are not associated; act as two different organs; VA not greater than 5/200; normally hyperopic'],
            ['Newborn', 'First sign of fixation development: eyes follow light'],
            ['2 months', 'Eyes follow large objects'],
            ['3 months', "Foveas are fully formed; eyes hold objects"],
            ['3–4 months', 'Eyes expected to be straight'],
            ['6 months', 'Fixates at an object for 1–2 minutes'],
            ['1 year', 'VA: 20/70'],
            ['1–1.5 years', 'Fusional mechanism becomes fully developed'],
            ['3 years', 'VA: 20/20; accommodation develops with sharpening of visual acuity'],
            ['7–12 years', 'Age of emmetropization'],
          ],
        },
        {
          kind: 'pearl',
          content:
            'At birth: VA ≤ 5/200. At 1 year: 20/70. At 3 years: 20/20. Fusional mechanism is fully developed at 1–1.5 years. Critical period for amblyopia treatment corresponds to early neuroplasticity window.',
        },
      ],
    },
    {
      id: 'eye-movements',
      title: 'Eye Movements & Positions of Gaze',
      blocks: [
        {
          kind: 'sub',
          title: 'Types of Eye Movements',
          blocks: [
            {
              kind: 'table',
              headers: ['Movement Type', 'Description', 'Examples'],
              rows: [
                [
                  'Duction',
                  'Movement of ONE eye only',
                  'Adduction (in), Abduction (out), Supraduction (up), Infraduction (down), Incycloduction (VCM inward), Excycloduction (VCM outward)',
                ],
                [
                  'Version',
                  'Synchronous and symmetric movement of BOTH eyes in the SAME direction',
                  'Dextroversion, Levoversion, Supraversion (Anaversion/Sursumversion), Infraversion (Cataversion/Deorsumversion)',
                ],
                [
                  'Vergence',
                  'Synchronous and symmetric movement of BOTH eyes in OPPOSITE directions',
                  'Convergence (in), Divergence (out), Positive Vertical Divergence (RE up/LE down), Negative Vertical Divergence (RE down/LE up), Incyclovergence, Excyclovergence',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: '9 Positions of Gaze',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Primary position: eyes straight ahead — the ORTHO position',
                'Secondary positions (4): Dextro, Levo, Supra, Infra — involve lateral OR vertical movements',
                'Tertiary positions (4): Dextrosupra, Dextroinfra, Levosupra, Levoinfra — combinations of lateral and vertical',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Extraocular Muscles',
          blocks: [
            {
              kind: 'table',
              headers: ['Muscle', 'Cranial Nerve', 'Origin', 'Key Facts'],
              rows: [
                ['Medial Rectus', 'CN III', 'Annulus of Zinn', 'Strongest, heaviest, broadest; closest insertion to limbus; ONLY horizontal action'],
                ['Lateral Rectus', 'CN VI', 'Annulus of Zinn', 'Only horizontal action; no secondary or tertiary actions'],
                ['Superior Rectus', 'CN III', 'Annulus of Zinn', 'Farthest insertion from limbus; longest if tendon excluded; travels at 23° nasal angle'],
                ['Inferior Rectus', 'CN III', 'Annulus of Zinn', 'Travels at 23° nasal angle'],
                ['Superior Oblique', 'CN IV', 'Annulus of Zinn', 'LONGEST muscle due to trochlea/tendon (acts as pulley); total length 60mm; primary action: torsion'],
                ['Inferior Oblique', 'CN III', 'Inferior nasal orbital rim', 'Only EOM NOT originating from annulus of Zinn; primary action: torsion'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'All EOMs originate from the annulus of Zinn EXCEPT the inferior oblique. All EOMs are innervated by CN III EXCEPT the superior oblique (CN IV) and lateral rectus (CN VI). Mnemonic: SO4, LR6, all others 3.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Laws Governing Eye Movements',
          blocks: [
            {
              kind: 'table',
              headers: ['Law', 'Scope', 'Definition', 'Example'],
              rows: [
                [
                  "Hering's Law of Equal Innervation",
                  'Binocular',
                  'When a nervous impulse is sent to a muscle, an equal impulse goes to the contralateral synergist (yoke muscle) to maintain parallelism of the visual axes',
                  'Dextroversion: R Lateral Rectus and L Medial Rectus receive equal innervation',
                ],
                [
                  "Sherrington's Law of Reciprocal Innervation",
                  'Monocular',
                  'When a muscle contracts, its direct antagonist relaxes to an equal extent, allowing movement to take place',
                  'Supraduction: SR contracts, IR relaxes',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Muscle Terminology',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Agonist', '"Primary muscle" or "main muscle" — moves the eye in a given direction'],
                ['Antagonist', '"Opposing muscle" — opposes the action of the agonist'],
                ['Synergist', '"Helping muscle" — acts in concert with the agonist to produce a given movement'],
                ['Yoke muscle', 'Agonist muscle of both eyes; corresponding muscles of both eyes that produce movement into a specific gaze'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Axes of Fick (Eye Axes)',
          blocks: [
            {
              kind: 'table',
              headers: ['Axis', 'Also Called', 'Length', 'Produces', 'Description'],
              rows: [
                ['Optic axis (Y-axis)', 'Antero-posterior / Sagittal axis', '24 mm', 'Torsional movement', 'Horizontal line from corneal vertex to posterior pole'],
                ['Transverse axis (X-axis)', '—', '22 mm', 'Vertical movement', 'Passes through center of rotation at right angle to optic axis'],
                ['Vertical axis (Z-axis)', 'Supero-inferior axis', '22 mm', 'Horizontal movement', 'Superior-inferior line through center of rotation'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Center of rotation is located 13.5 mm behind the cornea. All oblique axes pass through it.',
            },
          ],
        },
      ],
    },
    {
      id: 'fixation',
      title: 'Fixation & Visual Axes',
      blocks: [
        {
          kind: 'text',
          content:
            'Fixation is the act of directing the eye toward an object of regard, causing the image to be centered on the fovea in a normal eye.',
        },
        {
          kind: 'sub',
          title: 'Elements Concerned in Fixation',
          blocks: [
            {
              kind: 'table',
              headers: ['Element', 'Definition'],
              rows: [
                ['Entrance Pupil', 'Image of the real pupil found at the cornea'],
                ['Object of Regard', 'Point toward which the observer directs their gaze'],
                ['Center of Rotation', 'Point 13.5 mm behind the cornea; where eye movements take place; all oblique axes pass through it'],
                ['Line of Sight', 'Line drawn from object of regard to the center of rotation'],
                ['Visual Axis', 'Line drawn from object of regard to the fovea passing through the nodal point'],
                ['Pupillary Axis', 'Line from center of entrance pupil perpendicular to the cornea through its center of curvature'],
                ['Optic Axis', 'Imaginary straight line through midpoint of cornea (anterior pole) to midpoint of retina (posterior pole)'],
                ['Baseline', 'Line connecting centers of rotation of both eyes'],
                ['Angle Lambda', 'Angle formed by intersection of pupillary axis and line of sight'],
                ['Angle Alpha', 'Angle formed by visual and optic axes at the nodal point'],
                ['Angle Gamma', 'Angle formed by intersection of optic axis and line of sight at the center of rotation'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Fixation',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Voluntary', 'Conscious and purposeful; freely looking at a specific object; stimulates central retina/fovea'],
                ['Reflex/Involuntary', 'Involuntary fixation in response to peripheral retinal stimulation'],
                ['Saccadic/Jump Fixation', 'Rapid change from one fixation point to another; FASTEST type of fixation'],
                ['Pursuit', 'Continued fixation of a moving object; dynamic movement to keep image on fovea'],
                ['Scanning', 'Series of rapid fixations to survey a large visual area; quick view'],
                ['Steady', 'Continuous fixed fixation of a non-moving object for a given period'],
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Saccadic (jump) fixation is the fastest type. The Cyclopean Eye (Binnoculus) is an imaginary eye located between the two physical eyes representing both retinas.',
        },
      ],
    },
    {
      id: 'retinal-correspondence-horopter',
      title: 'Retinal Correspondence, Horopter & Panum\'s Area',
      blocks: [
        {
          kind: 'text',
          content:
            'Retinal elements that share a common subjective visual direction are called corresponding retinal points. The doctrine of corresponding points states: if images fall on identical points in both retinas, the object is seen as one; if they fall on disparate points, the object is seen as two.',
        },
        {
          kind: 'table',
          headers: ['Corresponding Points', 'Relationship'],
          rows: [
            ['Right fovea', '= Left fovea'],
            ['Right temporal retina', '= Left nasal retina'],
            ['Right nasal retina', '= Left temporal retina'],
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Retinal Correspondence',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Definition'],
              rows: [
                [
                  'Normal Retinal Correspondence (NRC)',
                  'Both foveas have a common visual direction; nasal retina of one eye corresponds to temporal retina of the other eye',
                ],
                [
                  'Anomalous Retinal Correspondence (ARC)',
                  'Fovea of one eye has a common visual direction with an extrafoveal area in the other eye; seen with strabismus; requires a non-changing deviation of sufficient duration for retinocortical elements to reorient',
                ],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Harmonious ARC: Angle of anomaly = Objective angle (full sensory adaptation)',
                'Unharmonious ARC: Angle of anomaly < Objective angle (partial adaptation)',
                'Angle of Anomaly = Objective Angle − Subjective Angle',
                'If Subjective Angle = Objective Angle → NRC',
                'If Subjective Angle < Objective Angle → ARC',
                'Quality of BV in ARC is inversely proportional to the angle of deviation',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Horopter',
          blocks: [
            {
              kind: 'text',
              content:
                'The horopter is a theoretical circle passing through the fixation point and nodal points of both eyes. Any point on this circle stimulates corresponding retinal elements and is seen singly. The term was introduced in 1613 by Aguilonius.',
            },
          ],
        },
        {
          kind: 'sub',
          title: "Panum's Fusional Area",
          blocks: [
            {
              kind: 'text',
              content:
                "Panum's fusional area is a narrow band around the horopter within which objects stimulating disparate retinal elements are still seen singly. It is narrowest at the fixation point and broadens in the periphery.",
            },
            {
              kind: 'table',
              headers: ['Location', "Panum's Area Width"],
              rows: [
                ['Near fovea (fixation point)', '6–10 arc minutes (narrowest)'],
                ['12 degrees from fovea', '30–40 arc minutes'],
                ['Rate of increase', '1–2 arc min per degree of visual field eccentricity'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Increasing Panum\'s area peripherally matches the increasing coarseness of peripheral vision',
                'Prevents bothersome peripheral diplopia when fixating flat targets at close range',
                'Makes cyclofusion possible despite cyclovergence errors of up to 2 degrees',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            "Panum's area is 6–10 arc minutes near the fovea, expanding to 30–40 arc minutes at 12 degrees eccentricity. Objects inside Panum's area → single vision. Objects outside → physiological diplopia.",
        },
      ],
    },
    {
      id: 'fusion-stereopsis',
      title: 'Fusion, Grades of BV & Stereopsis',
      blocks: [
        {
          kind: 'text',
          content:
            'Fusion is the process by which a single cortical image is perceived from two separate ocular images. It involves uniting, cohering, or blending the two images.',
        },
        {
          kind: 'sub',
          title: 'Theories of Fusion',
          blocks: [
            {
              kind: 'table',
              headers: ['Theory', 'Proponent', 'Core Idea'],
              rows: [
                ["Worth's Theory", 'Worth', 'Fusion operates on a psychological and cerebral level'],
                ["Verhoeff's Theory", 'Verhoeff', '"Theory of Replacement" / "Theory of Retinal Rivalry" — alternate shifting mosaic patterns from each eye combine in varying patterns to form the unified percept'],
                ["Wall's Theory", 'Wall', 'Single image is a projection of two identical images to the same perceptual position; two ocular images appear as one due to their common location'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Degrees/Grades of Fusion (Worth\'s Classification)',
          blocks: [
            {
              kind: 'table',
              headers: ['Grade', 'Name', 'Description', 'Test Target', 'Tool'],
              rows: [
                [
                  'Grade 1',
                  'Superimposition / Simultaneous Macular Perception (SMP)',
                  '1st degree; most elementary; simultaneous perception of two different ocular images; requires stimulation of retinal areas with common visual direction; absence of suppression',
                  '2 different objects simultaneously perceived (e.g., bird + cage)',
                  'Stereoscope',
                ],
                [
                  'Grade 2',
                  'Flat Fusion',
                  '2nd degree; true fusion without stereopsis; 2D percept occupying a single plane; both images fused and maintained despite difficulties',
                  '2 almost similar objects with slight differences',
                  'Stereoscope',
                ],
                [
                  'Grade 3',
                  'Stereopsis / Depth Perception',
                  '3rd degree; highest form of fusion; 3D binocular visual perception based on retinal disparity; ability to judge distances',
                  'Stereo fly/butterfly; done with full correction (near Rx)',
                  'Stereo tests',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Requirements for Fusion',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Equal or nearly equal visual acuity between the two eyes',
                'Monocular fixation of each eye',
                'Normal sensorial relationship (normal retinal correspondence)',
                'Normal ocular motility',
                'Similar but not mathematically identical images formed in each eye',
                'Representation of crossed and uncrossed optic nerve fibers in the occipital cortex',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Fusion',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Definition'],
              rows: [
                ['Sensory Fusion', 'Ability to appreciate two similar images (one from each eye) and interpret them as one; unequal images are a severe obstacle to sensory fusion'],
                ['Motor Fusion', 'Ability to align the eyes so that sensory fusion can be maintained; stimulus is retinal disparity outside Panum\'s area; exclusive function of the extrafoveal retinal periphery'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Depth Perception: Monocular Cues',
          blocks: [
            {
              kind: 'table',
              headers: ['Monocular Cue', 'Rule'],
              rows: [
                ['Size of retinal image', 'Bigger retinal image = nearer; smaller retinal image = farther'],
                ['Clearness and detail', 'Clearer image = nearer; blurred/less clear = farther'],
                ['Intervening objects (overlap)', 'Object not obscured = nearer; mostly obscured = farther'],
                ['Aerial perspective', 'More distinct detail and color = nearer; less distinct = farther'],
                ['Mathematical perspective', 'More diverging/less converging = nearer; more converging = farther'],
                ['Distribution of light and shadows', 'Nearby trees appear yellowish green; distant trees appear bluish'],
                ['Motion parallax', 'Against parallax = nearer; with parallax = farther'],
                ['Velocity', 'Fast moving image = nearer; slow moving = farther'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Depth Perception: Binocular Cues',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Convergence and Accommodation: viewing near objects requires more muscular effort for both',
                'Binocular Parallax: greater parallactic angle = nearer object; lesser parallactic angle = farther object',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Stereopsis is the ONLY exclusively binocular cue for depth perception. It requires retinal disparity (slightly different images in each eye). Stereoacuity is measured in arc seconds — the better the BV, the smaller the threshold.',
        },
      ],
    },
    {
      id: 'diplopia-suppression',
      title: 'Diplopia, Suppression & Sensory Adaptations',
      blocks: [
        {
          kind: 'sub',
          title: 'Diplopia',
          blocks: [
            {
              kind: 'text',
              content:
                'Diplopia (double vision) is the simultaneous stimulation of non-corresponding or disparate retinal elements by an object point, causing it to be localized in two different subjective visual directions. Double vision is the hallmark of retinal disparity.',
            },
            {
              kind: 'table',
              headers: ['Type', 'Description', 'Associated Condition'],
              rows: [
                [
                  'Physiological Diplopia',
                  'Normal BV diplopia for non-fixated objects whose images stimulate disparate points outside Panum\'s area',
                  'Normal binocular vision',
                ],
                [
                  'Uncrossed / Distal Diplopia',
                  'Physiological diplopia for objects BEYOND the point of binocular fixation; image on same side as eye',
                  'Commonly seen with esophoric conditions',
                ],
                [
                  'Crossed / Proximal Diplopia',
                  'Physiological diplopia for objects NEARER than the point of binocular fixation; image on opposite side from eye',
                  'Commonly seen with exophoric conditions',
                ],
                [
                  'Pathological Diplopia',
                  'Diplopia due to eye disease, BV anomaly, variation in refractive index of media, subluxation of lens, or systemic disease',
                  'Strabismus, cataract, proptosis, multiple sclerosis, myasthenia gravis',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Retinal Rivalry / Binocular Rivalry',
          blocks: [
            {
              kind: 'text',
              content:
                'When dissimilar contours are presented to corresponding retinal areas, fusion becomes impossible and retinal rivalry occurs. The brain alternately suppresses one eye\'s image to eliminate confusion. Constant foveal suppression of one eye leads to complete sensory dominance of the other eye — a major obstacle to binocular vision. Return of retinal rivalry is a requisite for re-establishment of binocular vision.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Suppression',
          blocks: [
            {
              kind: 'text',
              content:
                'Suppression is a neurophysiologically active inhibitory mechanism. When corresponding retinal areas are stimulated by dissimilar stimuli (causing confusion) or non-corresponding areas by similar stimuli (causing diplopia), one image is temporarily inhibited to prevent confusion or diplopia.',
            },
            {
              kind: 'table',
              headers: ['Type', 'Characteristic'],
              rows: [
                ['Facultative suppression', 'Only under binocular conditions; no persisting effect under monocular conditions; visual acuity not reduced monocularly; no uniocular scotomas'],
                ['Obligatory suppression', 'Effect carries on even under monocular conditions; results in diminution of visual acuity; AMBLYOPIA is the result'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Suppression is FOVEAL to tackle confusion',
                'Suppression is EXTRAFOVEAL to avoid diplopia',
                'Foveal scotoma size: approximately 2–3 degrees',
                'Tests for suppression: Worth 4 dot, Synoptophore, Bagolini striated glasses, Red filter test, Amsler grid, 4Δ prism base-out test',
              ],
            },
            {
              kind: 'pearl',
              content:
                '4Δ prism base-out test: A base-out prism displaces the image onto the parafoveal temporal retina. If the fovea is functioning normally, a refixation movement occurs (biphasic: version then fusional duction). If there is a central scotoma (suppression), the fusional movement (2nd phase) does NOT occur — the eye remains slightly turned out.',
            },
          ],
        },
      ],
    },
    {
      id: 'vergence-components',
      title: 'Vergence Components & Positions of Eyes',
      blocks: [
        {
          kind: 'text',
          content:
            'Vergence refers to the coordinated movement of both eyes in opposite directions. The eyes can be in various positions depending on the stimulus state.',
        },
        {
          kind: 'sub',
          title: 'Positions of the Eyes',
          blocks: [
            {
              kind: 'table',
              headers: ['Position', 'Stimulus State'],
              rows: [
                ['Anatomical position of rest', 'No stimulus at all'],
                ['Physiological position of rest', 'Tonus and postural influence only; no visual stimulus'],
                ['Passive position (Phoria position)', 'Fixation reflex present; no fusion'],
                ['Active position', 'Fusional reflex present; both eyes working together'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Components of Vergence',
          blocks: [
            {
              kind: 'table',
              headers: ['Component', 'Stimulus', 'Clinical Significance'],
              rows: [
                [
                  'Tonic Vergence',
                  'Extraocular muscle tonus',
                  'Basic cause of distance heterophoria; passive state of vergence without fusion stimulus; moves eye from anatomical rest to more convergent position. Deficient tonic convergence → exophoria; excessive → esophoria',
                ],
                [
                  'Proximal Vergence',
                  'Awareness of nearness of the target',
                  'Resulting from "awareness of nearness" of the object; unpredictable and nonlinear quantity',
                ],
                [
                  'Accommodative Vergence',
                  'Change in accommodation',
                  'Vergence component that occurs as a direct result of accommodation; part of the near triad (accommodation + convergence + pupillary miosis)',
                ],
                [
                  'Fusional Vergence',
                  'Retinal disparity',
                  'Maintains fusion of retinal images; amount required in addition to tonic, accommodative and proximal vergence to maintain fusion; stimulus is retinal disparity',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Psycho-Optical Reflexes',
          blocks: [
            {
              kind: 'table',
              headers: ['Reflex', 'Definition'],
              rows: [
                ['Fixation and following reflex', 'Movement of eye to maintain object of fixation on the fovea'],
                ['Fusion reflex', 'Movement of eyes to ensure object of fixation falls on BOTH foveae (motor fusion)'],
                ['Version reflex', 'Movement of eyes in same direction when target moves across retina in frontal plane'],
                ['Vergence reflex', 'Movement of eyes in opposite directions when target moves closer or farther away'],
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'The near triad: Accommodation + Convergence + Pupillary miosis. All three occur simultaneously when looking at a near target.',
        },
      ],
    },
    {
      id: 'bv-testing',
      title: 'Tests for Binocular Vision & Retinal Correspondence',
      blocks: [
        {
          kind: 'sub',
          title: 'Simple Clinical Tests for BV',
          blocks: [
            {
              kind: 'table',
              headers: ['Test', 'Method', 'Positive (BV Present)'],
              rows: [
                ['Bar Reading Test', 'Reading matter at 40 cm; pen placed 2–3 inches over page hiding letters from each eye alternately', 'Reads text continuously without hesitation'],
                ['Prism Test', '6 prisms BU or BD placed before one eye to induce doubling', 'Patient notices diplopia'],
                ['Hole in the Hand', 'Rolled paper before one eye directed at distant object; other hand palm facing patient', 'Patient notices apparent hole in the hand'],
                ['Stereoscopic Test', 'Stereoscope with septum; stereogram plates presented', 'Patient sees both images on the plate (superimposed = orthophoria; crossed = exophoria; uncrossed = esophoria)'],
                ['Maddox Rod Test', 'Maddox rod before one eye; spot of light at midline', 'Patient reports both streak and spot (superimposed = orthophoria; crossed = exophoria; uncrossed = esophoria)'],
                ['Pressing the Eyeball', 'Pressure on temporal side of one eyeball', 'Patient reports doubling of objects'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Maddox Rod: Horizontal MR = vertical streak = LATERAL phoria. Vertical MR = horizontal streak = VERTICAL phoria. Single object seen = suppression/blindness of one eye.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Tests for Retinal Correspondence',
          blocks: [
            {
              kind: 'text',
              content:
                'Tests for retinal correspondence fall into two categories: (1) assessing the relationship between the fovea of the fixing eye and the retinal area stimulated in the squinting eye; and (2) assessing the visual directions of the two foveas.',
            },
            {
              kind: 'table',
              headers: ['Test', 'Principle', 'Interpretation'],
              rows: [
                [
                  "Bagolini's Striated Glasses",
                  'Plano lenses with fine striations (micro Maddox cylinders) at 45° OS and 135° OD; fixate small light; no effect on VA or accommodation',
                  'Lines cross at right angles = fusion present; NRC if no cover test shift; ARC if shift occurs; single line = suppression',
                ],
                [
                  'Red Filter Test',
                  'Red filter before fixating eye; patient views small light source',
                  'Two lights (red + white) with expected diplopia = NRC; single pinkish light = Harmonious ARC; two lights with smaller separation than expected = Unharmonious ARC; single light = suppression',
                ],
                [
                  'Worth 4 Dot Test',
                  'Red/green goggles (convention: red OD, green OS); 4 dots in diamond formation; can test distance and near',
                  '4 dots = NRC/no deviation or Harmonious ARC with squint; 5 dots = diplopia (uncrossed with eso, crossed with exo); 3 green = RE suppression; 2 red = LE suppression',
                ],
                [
                  'Synoptophore / Amblyoscope',
                  'Angle of Anomaly = Objective Angle − Subjective Angle',
                  'Subj = Obj → NRC; Subj < Obj → ARC; Anomaly = Obj → Harmonious ARC; Anomaly < Obj → Unharmonious ARC',
                ],
                [
                  'Hering-Bielschowsky After-Image Test',
                  'Highly dissociating test; camera flash creates horizontal after-image in one eye and vertical in the other; center black mark protects fovea; 20 sec each eye in darkened room',
                  'Symmetrical cross = NRC (irrespective of deviation); asymmetric crossing = ARC; single line with gap = suppression of fellow eye',
                ],
                [
                  'Foveo-Foveal Test of Cuppers',
                  'Determines if the two foveas have common or different visual directions; quantitative angle of anomaly when eccentric fixation present',
                  'Location of asterisk on Maddox scale indicates angle of anomaly',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Investigations for BV — What You Are Testing',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Normal or abnormal retinal correspondence',
                'Suppression',
                'Simultaneous perception (SMP)',
                'Fusion with some amplitude',
                'Stereopsis',
              ],
            },
            {
              kind: 'text',
              content:
                'Before any test: always assess (1) visual acuity, (2) fixation in the squinting eye, (3) direction and size of deviation.',
            },
          ],
        },
      ],
    },
    {
      id: 'accommodative-vergence',
      title: 'Accommodative-Convergence Relationships',
      blocks: [
        {
          kind: 'text',
          content:
            'Accommodation and convergence are neurologically linked through the near reflex. The AC/A ratio (Accommodative Convergence to Accommodation ratio) quantifies how much convergence is driven by each diopter of accommodation.',
        },
        {
          kind: 'sub',
          title: 'Accommodative Dysfunctions',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Key Characteristic'],
              rows: [
                [
                  'Accommodative Insufficiency',
                  'Amplitude of accommodation (AA) is LOWER than expected for age; not due to lens sclerosis; poor sustaining ability; insufficient amplitude to afford clear near imagery',
                ],
                [
                  'Ill-Sustained Accommodation (Accommodative Fatigue)',
                  'AA is NORMAL but fatigue occurs with repeated accommodative stimulation; accommodation is sufficient but tires easily',
                ],
                [
                  'Accommodative Infacility (Accommodative Inertia)',
                  'Accommodative system is slow in making changes; considerable lag between stimulus and response; difficulty changing focus quickly from distance to near or vice versa',
                ],
                [
                  'Accommodative Paralysis',
                  'Rare; accommodative system fails to respond to any stimulus; total inability to accommodate due to ciliary paralysis',
                ],
                [
                  'Spasm of Accommodation',
                  'Ciliary muscle contracted and cannot relax; accommodation continuously exerted; may be part of the "spasm of near reflex triad" (over-accommodation + over-convergence + miosis)',
                ],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Vergence Dysfunctions',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Subtype', 'Pattern'],
              rows: [
                ['Exophoria', 'Convergence Weakness', 'Exo at near > Exo at distance; decompensated exophoria for near only'],
                ['Exophoria', 'Divergence Excess', 'Exo at distance > Exo at near (≥15Δ greater at distance); intermittent divergent squint for distance'],
                ['Exophoria', 'Basic (Mixed) Exophoria', 'Exo at distance = Exo at near; does not differ significantly with fixation distance'],
                ['Esophoria', 'Divergence Insufficiency/Weakness', 'Eso at distance > Eso at near; decompensated esophoria for distance; compensated at near'],
                ['Esophoria', 'Convergence Excess', 'Eso at near > Eso at distance; unusually high convergence impulse for near; often linked to high AC/A ratio'],
                ['Esophoria', 'Basic (Mixed) Esophoria', 'Eso at distance = Eso at near; high tonic esophoria present at both distances'],
                ['Fusional Vergence Dysfunction', '—', 'Normal phorias and AC/A ratios but REDUCED fusional vergence amplitudes; small zone of clear single binocular vision (CSBV)'],
                ['Vertical Phorias', '—', 'May be comitant/idiopathic or non-comitant due to muscle paresis or mechanical cause'],
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Convergence Excess esophoria is most commonly associated with a HIGH AC/A ratio — the classic indication for bifocals/PALs in pediatric esophoria. Fusional vergence dysfunction has NORMAL phorias but reduced vergence amplitudes.',
        },
      ],
    },
    {
      id: 'compensatory-actions',
      title: 'Compensatory Head & Body Postures',
      blocks: [
        {
          kind: 'text',
          content:
            'Patients with ocular muscle palsies or deviations adopt compensatory head postures to minimize diplopia or to use the eye position where binocular vision is maintained.',
        },
        {
          kind: 'sub',
          title: 'Head Tilting (Oblique Muscle Problems)',
          blocks: [
            {
              kind: 'table',
              headers: ['Muscle Affected', 'Compensatory Head Tilt'],
              rows: [
                ['Right Inferior Oblique (RIO) damaged', 'Head tilts to the RIGHT (same side)'],
                ['Left Inferior Oblique (LIO) damaged', 'Head tilts to the LEFT (same side)'],
                ['Right Superior Oblique (RSO) damaged', 'Head tilts to the LEFT (opposite side)'],
                ['Left Superior Oblique (LSO) damaged', 'Head tilts to the RIGHT (opposite side)'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'IO damage: head tilts to the SAME side. SO damage: head tilts to the OPPOSITE side. Superior oblique palsy is the most common cause of acquired vertical diplopia — head tilt toward opposite shoulder is classic.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Face Turning (Lateral Deviations)',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Direction of Face Turn', 'Action of Good Eye'],
              rows: [
                ['Right Esotropia', 'To the RIGHT', 'Adduction (looks left)'],
                ['Left Esotropia', 'To the LEFT', 'Adduction (looks right)'],
                ['Right Exotropia', 'To the LEFT', 'Abduction (looks left)'],
                ['Left Exotropia', 'To the RIGHT', 'Abduction (looks right)'],
              ],
            },
            {
              kind: 'text',
              content:
                'Note: Movement/action of the good eye is opposite to the movement of the face turn.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Chin Elevation/Depression (Vertical Deviations)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Hypertropia → Chin Depression (patient looks down to avoid hypertropia)',
                'Hypotropia → Chin Elevation (patient looks up to avoid hypotropia)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'binocular-single-vision',
      title: 'Binocular Single Vision & Sensory Aspects',
      blocks: [
        {
          kind: 'text',
          content:
            'Binocular Single Vision (BSV) is the state of simultaneous vision achieved by the coordinated use of both eyes, so that separate and slightly dissimilar images from each eye are appreciated as a single image through fusion.',
        },
        {
          kind: 'sub',
          title: 'Classification of BSV',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Criteria'],
              rows: [
                ['Normal BSV', 'Bifoveal fixation; no manifest deviation; images directed from fovea of both eyes'],
                ['Anomalous BSV', 'Images directed from fovea of one eye and an extrafoveal area of the other; always accompanies a small manifest strabismus'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Requirements for Normal BSV',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Clear visual axis leading to reasonably clear vision in both eyes',
                'Ability of retinocortical elements to function in association — SENSORY FUSION',
                'Precise coordination of both eyes in all directions of gaze — MOTOR FUSION',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Sensory Aspects: Visual Direction',
          blocks: [
            {
              kind: 'text',
              content:
                'Each retinal element when stimulated localizes the stimulus in a specific visual direction. This is determined by the Local Signs of Lotze — an intrinsic property inherent in each retinal element. The fovea carries the Principal Visual Direction; all other retinal elements have Secondary Visual Directions relative to the fovea. The fovea is also the retinomotor zero point — once the image of fixation is on the fovea, there is no incentive for further ocular movement.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Motor System',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Task: coordinate both eye movements so eyes move as one organ',
                'Brings object of fixation onto corresponding areas of both retinas',
                'Main innervational inputs: (1) Postural reflexes — doll\'s eye reflex, labyrinthine/vestibular-ocular, proprioceptive; (2) Voluntary innervation; (3) Psycho-optical reflexes',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'The fovea serves two roles: (1) carrier of the PRINCIPAL VISUAL DIRECTION; (2) the RETINOMOTOR ZERO POINT. Motor fusion is an exclusive function of the EXTRAFOVEAL retinal periphery. Fusion — whether sensory or motor — always takes place in the VISUAL CORTEX.',
        },
      ],
    },
  ],
}

export default notes
