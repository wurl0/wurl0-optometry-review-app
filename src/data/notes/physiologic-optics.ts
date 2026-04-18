import { NotesData } from '@/lib/notes-types'

const data: NotesData = {
  subject: 'Physiologic Optics',
  slug: 'physiologic-optics',
  sections: [
    {
      id: 'intro',
      title: 'Introduction',
      blocks: [
        {
          kind: 'table',
          headers: ['Term', 'Definition'],
          rows: [
            ['Physiology', 'Science that deals with the normal functions of living organisms and their parts'],
            ['Optics', 'Study of sight and the behavior of light; concerned with vision and the generation, propagation, and behavior of electromagnetic light'],
            ['Physiological Optics', 'Visual science that deals with the study of the structures of the eye and their functions as affected by the behavior of light (refraction, absorption, reflection, dispersion)'],
          ],
        },
        {
          kind: 'sub',
          title: 'Stimulus-Response Phenomenon',
          blocks: [
            { kind: 'text', content: 'Differentiates animate from inanimate. Animate bodies have the power to adjust to environmental changes. The response is adaptive — made possible by 3 distinct organ types:' },
            {
              kind: 'table',
              headers: ['Organ', 'Also Called', 'Function'],
              rows: [
                ['Receptor', 'Sensory receptor', 'Receives environmental stimuli; produces nerve impulse'],
                ['Effector', 'Responding organ', 'Becomes active in response to stimulation (muscles → contraction; glands → secretion)'],
                ['Physiological Connector', 'Neuron', 'Strands of protoplasm connecting receptor to effector; carries nerve impulse'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eyeball',
      title: 'The Eyeball',
      blocks: [
        {
          kind: 'table',
          headers: ['Property', 'Value'],
          rows: [
            ['Shape', 'Slightly elongated sphere'],
            ['Axial length (A-P)', '24 mm'],
            ['Other diameters', '22 mm'],
            ['Weight', '10 grams'],
            ['Volume', '6.5 mL (aqueous + vitreous)'],
            ['Suspension', 'Ligament of Lockwood'],
          ],
        },
        {
          kind: 'pearl',
          content: 'The eyeball has 3 tunics: Fibrous (outermost) → Uveal/Vascular (middle) → Nervous/Functional (innermost). Remember: F-U-N.',
        },
        {
          kind: 'sub',
          title: 'Fibrous / Sclero-Corneal Coat (Outermost)',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Coverage', 'Key Functions'],
              rows: [
                ['Sclera', '5/6 of eyeball', 'Contains & protects the eyeball; maintains globular shape; attachment for muscles; opaque (excludes extraneous light)'],
                ['Cornea', '1/6 of eyeball', 'Main refractive apparatus; transparent; refract light; gives constant shape; extreme sensitivity protects eye'],
                ['Limbus', 'Junction zone', 'Transition between sclera and cornea (sclero-corneal junction)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Uveal / Vascular Coat (Middle)',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Description', 'Key Functions'],
              rows: [
                ['Choroid', 'Thin, dark membrane (melanocytes); covers 5/6 of interior', 'Nourishes RPE & photoreceptors; provides dark chamber; prevents light dispersion'],
                ['Ciliary Body', 'Prolongation/thickening of choroid; blood-rich', 'Produces aqueous humor; helps in accommodation; attachment for zonular fibers'],
                ['Iris', 'Thin circular membrane; pupil at center', 'Reduces chromatic & spherical aberrations; regulates light entering eye; increases depth of focus'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Nervous / Functional Coat (Innermost)',
          blocks: [
            { kind: 'text', content: 'RETINA — thin, transparent membrane where images are cast and nerve impulses are generated.' },
            {
              kind: 'table',
              headers: ['Cell Type', 'Function'],
              rows: [
                ['Rods', 'Dim illumination / scotopic vision'],
                ['Cones', 'Day illumination / photopic vision; color perception'],
                ['Nerve fibers', 'Transmission of visual and pupillary impulses'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schematic-eye',
      title: "Schematic Eye (Gullstrand's Values)",
      blocks: [
        {
          kind: 'text',
          content: "A schematic eye is a mathematical model representing the basic optical features of the real eye using average values. Gullstrand (1924) made a 6-surface model; Emsley (1952) simplified to a single surface.",
        },
        {
          kind: 'pearl',
          content: "High-yield table — memorize Gullstrand's values. These numbers appear frequently in board exams.",
        },
        {
          kind: 'sub',
          title: 'Index of Refraction',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Index'],
              rows: [
                ['Cornea', '1.376'],
                ['Aqueous Humor', '1.336'],
                ['Crystalline Lens (cortex)', '1.386'],
                ['Crystalline Lens (nucleus)', '1.406'],
                ['Vitreous Humor', '1.336'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Radius of Curvature',
          blocks: [
            {
              kind: 'table',
              headers: ['Surface', 'Radius'],
              rows: [
                ['Cornea (front)', '7.7 mm'],
                ['Cornea (back)', '6.8 mm'],
                ['Lens (front)', '10.0 mm'],
                ['Lens (back)', '6.0 mm'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Refractive Power',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Power'],
              rows: [
                ['Cornea', '43.05 D'],
                ['Lens (unaccommodated)', '19.11 D'],
                ['Complete Eye (unaccommodated)', '58.64 D'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Axial Distances (from corneal apex)',
          blocks: [
            {
              kind: 'table',
              headers: ['Measurement', 'Distance'],
              rows: [
                ['Corneal thickness', '0.5 mm'],
                ['Corneal apex → front lens surface', '3.6 mm'],
                ['Corneal apex → back lens surface', '7.2 mm'],
                ['Primary focal length', '15.70 mm'],
                ['Secondary focal length', '24.38 mm'],
                ['Primary nodal point', '7.08 mm'],
                ['Secondary nodal point', '7.33 mm'],
              ],
            },
          ],
        },
        {
          kind: 'text',
          content: 'Nodal points are the optical center of the lens — two points on the axis where an incident ray directed toward the primary nodal point exits through the secondary nodal point with unchanged direction.',
        },
      ],
    },
    {
      id: 'optical-media',
      title: 'Optical Media & Accommodation',
      blocks: [
        {
          kind: 'table',
          headers: ['Structure', 'Contribution to Refraction', 'Key Detail'],
          rows: [
            ['Tear Film', 'First refracting surface', 'Where cornea owes its clear optical surface; index = 1.336'],
            ['Cornea', '2/3 of total eye refraction', 'Power: 36–50 D (avg 43 D); index = 1.376'],
            ['Crystalline Lens', '1/3 of total eye refraction', 'Located 3.6 mm behind corneal apex; main structure for accommodation'],
          ],
        },
        {
          kind: 'sub',
          title: 'Contact Lens Effect on Tear Layer',
          blocks: [
            {
              kind: 'table',
              headers: ['CL vs Tear Layer', 'Effect on Tear Layer', 'Effect on Corneal Power', 'Focus', 'Correction Change'],
              rows: [
                ['Steeper CL (shorter RC)', 'Steepens tear radius', 'Increases corneal power', 'In front of retina', 'Increase minus'],
                ['Flatter CL (longer RC)', 'Flattens tear radius', 'Decreases corneal power', 'Behind retina', 'Increase plus'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Accommodation',
          blocks: [
            { kind: 'text', content: 'Process by which the crystalline lens varies its focal length in response to changes in vergence of incident light. Primary stimulus: BLUR. Other stimulus: near target.' },
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Lag of Accommodation', 'Accommodation is insufficient → focus falls behind the retina'],
                ['Lead of Accommodation', 'Accommodation exceeds requirement → focus falls in front of the retina'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'refractive-status',
      title: 'Refractive Status',
      blocks: [
        {
          kind: 'text',
          content: 'Describes the relationship between the posterior principal focus, the eye\'s refractive mechanism, and the retina — with accommodation RELAXED.',
        },
        {
          kind: 'bullets',
          items: [
            'Factors influencing refractive status: length of eyeball, power of cornea, power of lens, depth of anterior chamber',
            'Emmetropia: posterior principal focus is ON the retina with accommodation relaxed',
            'Ametropia: variation from emmetropia (error of refraction) — focus is in front of or behind the retina',
          ],
        },
        {
          kind: 'pearl',
          content: 'Refractive status & accommodation table — this comparison is board-tested:',
        },
        {
          kind: 'table',
          headers: ['Status', 'Far / Relaxed', 'Far / Active', 'Near / Relaxed', 'Near / Active'],
          rows: [
            ['Emmetropia', 'Exactly on retina', '—', 'Behind', 'Exactly on retina'],
            ['Myopia', 'In front', 'More in front', 'Exactly on retina', 'In front'],
            ['Hyperopia', 'Behind', 'Exactly on retina', 'More behind', 'Behind'],
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
          content: 'Refractive condition in which, with accommodation relaxed, parallel rays of light converge to focus IN FRONT of the retina.',
        },
        {
          kind: 'sub',
          title: 'Causes',
          blocks: [
            {
              kind: 'table',
              headers: ['Category', 'Cause'],
              rows: [
                ['Axial', 'Long axial length'],
                ['Refractive', 'Too strong refractive system for axial length; short/steep corneal curvature'],
                ['Index (too HIGH)', 'Aqueous, cornea, lens nucleus/core'],
                ['Index (too LOW)', 'Lens cortex, vitreous'],
                ['Other', 'Increased anterior chamber depth; cataract; diabetes mellitus; hereditary; prolonged near work'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Classification',
          blocks: [
            {
              kind: 'table',
              headers: ['By Amount', 'Range'],
              rows: [
                ['Low', '0.25 – 3.00 D'],
                ['Medium', '3.00 – 6.00 D'],
                ['High', '6.00 D and above'],
              ],
            },
            {
              kind: 'table',
              headers: ['By Origin', 'Description'],
              rows: [
                ['Correlative / Simple', 'Simple, benign, stationary; mildly progressive during growth years'],
                ['Component / Degenerative', 'Pathological, progressive, malignant; due to abnormal development of refractive components'],
              ],
            },
            {
              kind: 'table',
              headers: ['By Onset & Course', 'Description'],
              rows: [
                ['Stationary', 'No change once reached'],
                ['Temporarily Progressive', 'Progresses but eventually stops'],
                ['Permanently Progressive', 'Associated with ≥6.00 D'],
              ],
            },
            {
              kind: 'table',
              headers: ['By Age of Onset', 'Description'],
              rows: [
                ['Congenital', 'Present at birth'],
                ['Youth-onset', 'Before age 20'],
                ['Early Adult-onset', '20–40 years old'],
                ['Late Adult-onset', '40+ years old'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Signs & Symptoms',
          blocks: [
            {
              kind: 'table',
              headers: ['Symptoms', 'Signs'],
              rows: [
                ['Blurred vision at far distance', 'Dilated pupil'],
                ['Asthenopia', 'Squinting'],
                ['', 'Staring expression'],
                ['', 'Exophthalmos (high myopia)'],
                ['', 'Myopic crescent'],
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
          content: 'Refractive condition in which, with accommodation relaxed, parallel rays of light converge to focus BEHIND the retina.',
        },
        {
          kind: 'sub',
          title: 'Causes',
          blocks: [
            {
              kind: 'table',
              headers: ['Category', 'Cause'],
              rows: [
                ['Axial', 'Short axial length'],
                ['Refractive', 'Too weak refractive system; long/flat corneal curvature'],
                ['Index (too HIGH)', 'Lens cortex, vitreous'],
                ['Index (too LOW)', 'Aqueous, cornea, lens nucleus/core'],
                ['Other', 'Shallow anterior chamber; old age; microphthalmos; aphakia; lens displacement; cornea plana'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Classification by Accommodation',
          blocks: [
            {
              kind: 'pearl',
              content: 'The accommodation-based classification is high-yield. Know Total = Manifest + Latent, and that Latent requires cycloplegic refraction.',
            },
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Total Hyperopia', 'Entire amount that actually exists = Manifest + Latent'],
                ['Manifest Hyperopia', 'Revealed by ordinary routine examination'],
                ['Facultative Hyperopia', 'Overcome by accommodation; VA is 20/20'],
                ['Absolute Hyperopia', 'Cannot be overcome by accommodation'],
                ['Latent Hyperopia', 'Hidden; requires cycloplegic refraction; revealed at presbyopic age'],
                ['Tonic Latent', 'Relatively fixed/permanent spasm'],
                ['Clonic Latent', 'Temporary state of spasm'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Signs & Symptoms',
          blocks: [
            {
              kind: 'table',
              headers: ['Symptoms', 'Signs'],
              rows: [
                ['Blurred vision at near', 'Constricted pupil'],
                ['Frontal and temporal headaches', 'Convergent strabismus'],
                ['Asthenopia', 'Vertical brow / wrinkles'],
                ['', 'Enophthalmos'],
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
          content: 'Refractive condition in which a point focus of light CANNOT be formed on the retina — instead there are MULTIPLE FOCI. Exists because of variation in powers in different meridians. Most common refractive error corrected today.',
        },
        {
          kind: 'table',
          headers: ['Meridian', 'Characteristic'],
          rows: [
            ['Axis meridian', 'Meridian with LEAST power'],
            ['Power meridian', 'Meridian with GREATEST power'],
          ],
        },
        {
          kind: 'bullets',
          items: [
            'Causes: different corneal curvature, different lenticular curvature, eccentric fovea position relative to visual axis, irregularity of the retinal surface',
          ],
        },
        {
          kind: 'sub',
          title: 'Regular Corneal Astigmatism — WTR / ATR / Oblique',
          blocks: [
            {
              kind: 'pearl',
              content: 'WTR vs ATR — the axis of correction is perpendicular to the power meridian. WTR has power near vertical; ATR has power near horizontal.',
            },
            {
              kind: 'table',
              headers: ['Type', 'Power Meridian', 'Axis of Correction'],
              rows: [
                ['With-the-Rule (WTR)', 'Near vertical (60–120°)', 'Near horizontal (0–30°, 150–180°)'],
                ['Against-the-Rule (ATR)', 'Near horizontal (0–30°, 150–180°)', 'Near vertical (60–120°)'],
                ['Oblique', 'Between 30–60° or 120–150°', 'Oblique axis'],
              ],
            },
            {
              kind: 'table',
              headers: ['Bilateral Classification', 'Type', 'Description'],
              rows: [
                ['Symmetric', 'Homologous', 'Both WTR'],
                ['Symmetric', 'Heterologous', 'Both ATR'],
                ['Asymmetric', 'Homonymous', 'Both WTR or both ATR (total ≠ 180°)'],
                ['Asymmetric', 'Heteronymous', 'One WTR, one ATR'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Resultant Astigmatism Types',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Focus Position', 'Image', 'Correction'],
              rows: [
                ['Compound Hyperopic', 'Both meridians behind retina', 'Oval', '+sph with +cyl'],
                ['Simple Hyperopic', 'One on retina, one behind', 'Straight line', '+cyl only'],
                ['Compound Myopic', 'Both meridians in front of retina', 'Oval', '−sph with −cyl'],
                ['Simple Myopic', 'One on retina, one in front', 'Straight line', '−cyl only'],
                ['Mixed', 'One in front, one behind', 'Circle (equal) or oval (unequal)', 'Opposite sign sphere + higher cyl'],
              ],
            },
            {
              kind: 'pearl',
              content: 'WTR astigmatism: vertical power meridian → image is horizontal line → compound myopic (oval vertical). ATR: horizontal power → image is vertical line.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Signs & Symptoms',
          blocks: [
            {
              kind: 'table',
              headers: ['Symptoms', 'Signs'],
              rows: [
                ['Blurred vision (high astigmatism)', 'Tilting of the head'],
                ['Transient blurring (constant accommodation)', 'Squinting'],
                ['Frontal and temporal headaches', 'Wrinkling / furrowing of brows'],
                ['Tearing and smarting', 'Holding reading material too close'],
                ['Tiring of eyes (low grade)', ''],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'process-of-seeing',
      title: 'Process of Seeing',
      blocks: [
        {
          kind: 'table',
          headers: ['Process', 'Description'],
          rows: [
            ['Physical', 'Incident ray strikes the eye; transmission through transparent media (Light → transparent media)'],
            ['Photo-chemical', 'Transformation of radiant energy at the neuro-epithelium of the retina into energy capable of stimulating receptor cells (Light → retina → photoreceptors)'],
            ['Neuro-muscular', 'Generation of nerve impulse in the retina and its transmission by a chain of neurons to the CNS'],
            ['Psychological', 'The actual "seeing" — visual reaction and interpretation of the stimulus by the brain'],
          ],
        },
      ],
    },
    {
      id: 'visual-pathway',
      title: 'Visual Pathway',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'Retina',
            'Optic Nerve',
            'Optic Chiasma — nasal fibers cross; temporal fibers stay ipsilateral',
            'Optic Tract — nasal fibers of one eye + temporal fibers of opposite eye',
            'Lateral Geniculate Body (LGB) — subcortical relay station',
            'Optic Radiations',
            'Area Striata / Broadman Area #17 — visual cortex; medial aspect of occipital lobe',
          ],
        },
        {
          kind: 'pearl',
          content: 'Rule: Lesion on retina or optic nerve = MONOCULAR defect. Lesion from chiasma to Area 17 = BINOCULAR defect.',
        },
        {
          kind: 'sub',
          title: 'Lesion → Visual Field Defect',
          blocks: [
            {
              kind: 'table',
              headers: ['Lesion Site', 'Visual Field Defect', 'Key Note'],
              rows: [
                ['Optic Nerve (R)', 'Total blindness of the right eye', 'Monocular'],
                ['Optic Nerve (L)', 'Total blindness of the left eye', 'Monocular'],
                ['Optic Chiasma (crossed)', 'Bitemporal heteronymous hemianopsia', 'Most classic chiasmal lesion'],
                ['Optic Chiasma (uncrossed)', 'Binasal heteronymous hemianopsia', ''],
                ['One side of chiasma', 'Nasal hemianopsia (same side)', ''],
                ['Optic Tract (R)', 'Left incongruous homonymous hemianopsia', 'Incongruous = farther from brain'],
                ['Optic Tract (L)', 'Right incongruous homonymous hemianopsia', ''],
                ['Lateral Geniculate Body (R)', 'Left congruous homonymous hemianopsia', ''],
                ['Lateral Geniculate Body (L)', 'Right congruous homonymous hemianopsia', ''],
                ['Optic Radiation (R)', 'Left congruous homonymous hemianopsia', 'Congruous = closer to brain'],
                ['Optic Radiation (L)', 'Right congruous homonymous hemianopsia', ''],
                ['Area Striata (#17)', 'Homonymous scotoma', ''],
              ],
            },
            {
              kind: 'pearl',
              content: 'Congruous = closer to brain (LGB, OR, Area 17). Incongruous = farther from brain (optic tract).',
            },
          ],
        },
      ],
    },
    {
      id: 'scotoma',
      title: 'Scotoma',
      blocks: [
        {
          kind: 'text',
          content: 'A small area of blindness surrounded by normal visual field.',
        },
        {
          kind: 'table',
          headers: ['Classification', 'Type', 'Description'],
          rows: [
            ['By Perception', 'Absolute', 'Perception of light entirely lost; nothing seen within that area'],
            ['By Perception', 'Relative', 'Perception only diminished; low-luminance objects unseen'],
            ['By Awareness', 'Negative', 'Patient unaware; appears as black spot; detected only by exam (e.g., blindspot)'],
            ['By Awareness', 'Positive', 'Dark spot the patient IS aware of'],
            ['By Location', 'Central', 'Involves the point of fixation'],
            ['By Location', 'Peripheral', 'Involves peripheral areas'],
            ['Special', 'Scintillating', 'Common in migraine'],
            ['Special', 'Arcuate', 'Arch-like extension of blindspot; early sign of glaucoma'],
            ['Special', 'Nasal-step', 'Nasal field step defect'],
            ['Special', 'Centro-cecal', 'Connects fixation point to blindspot'],
          ],
        },
        {
          kind: 'pearl',
          content: 'The blindspot is an example of an absolute AND negative scotoma.',
        },
      ],
    },
    {
      id: 'pupil',
      title: 'Pupil & Pupillary Reflexes',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'Miosis = pupil smaller in size',
            'Mydriasis = pupil larger in size',
            'Entrance pupil (apparent pupil): virtual, enlarged image of real pupil due to corneal/lens refraction — located ~0.5 mm from cornea',
            'Exit pupil: magnified image viewed from behind the eye',
            'Pupils appear black due to conjugate foci',
          ],
        },
        {
          kind: 'sub',
          title: 'Pupillary Reflexes',
          blocks: [
            {
              kind: 'table',
              headers: ['Reflex', 'Stimulus', 'Response'],
              rows: [
                ['Direct Light Reflex', 'Light to one retina', 'Miosis of the same eye'],
                ['Consensual (Indirect) Light Reflex', 'Light to one retina', 'Miosis of the opposite eye'],
                ['Accommodation-Near Reflex', 'Near target', 'Convergence + miosis + ciliary contraction + zonule relaxation + increased lens convexity'],
                ['Trigeminal Reflex', 'Stimulation of CN V (cornea, conjunctiva, facial skin)', 'Miosis'],
                ['Psychic Reflex', 'Sympathetic stimulation', 'Mydriasis'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pupillary Pathway (Light Reflex)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Retina → Optic Nerve (afferent) → Optic Chiasma → Optic Tract',
                '→ Pre-tectal Nucleus',
                '→ Edinger-Westphal Nucleus (ipsilateral AND contralateral)',
                '→ Pre-ganglionic fiber → Ciliary Ganglion',
                '→ Post-ganglionic fiber → Sphincter Pupillae & Ciliary Muscles',
              ],
            },
            {
              kind: 'pearl',
              content: 'CN II = afferent limb (senses light). CN III = efferent limb (drives sphincter pupillae to constrict).',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lesions on the Pupillary Pathway',
          blocks: [
            {
              kind: 'table',
              headers: ['Lesion Site', 'Direct Light Reflex (affected eye)', 'Consensual Reflex (affected eye)', 'If light on non-affected eye'],
              rows: [
                ['Retina / Optic Nerve', 'Absent', 'Absent', 'Both direct & consensual present'],
                ['Optic Chiasma & Optic Tract', 'Sluggish', 'Sluggish', 'Sluggish'],
                ['Lateral Geniculate Body', 'No effect on pupil', 'No effect on pupil', 'No effect on pupil'],
              ],
            },
            {
              kind: 'table',
              headers: ['Defect', 'Location of Lesion'],
              rows: [
                ['RAPD (Relative Afferent Pupillary Defect)', 'Retina to pre-tectal nucleus'],
                ['REPD (Relative Efferent Pupillary Defect)', 'Pre-ganglionic to post-ganglionic fiber'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pupillary Abnormalities',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Description'],
              rows: [
                ['Anisocoria', 'Unequal pupil sizes'],
                ['Dyscoria', 'Abnormal pupil shape'],
                ['Polycoria', 'Multiple pupils'],
                ['Corectopia (Ectopic pupils)', 'Displaced pupil'],
                ['Iridoplegia', 'Paralysis of the iris sphincter'],
                ['Iridodialysis', 'Detachment of iris from ciliary body'],
                ['Hippus', 'Rhythmic pupil oscillation'],
                ['Amaurotic pupils', 'Pupils of a blind eye'],
                ["Adie's Syndrome", 'Tonic pupil — dilated, near-light dissociation'],
                ['Argyll-Robertson Pupil', 'Miotic, irregular; accommodates but does not react to light (syphilis)'],
                ["Horner's Syndrome", 'Miosis, ptosis, anhidrosis (sympathetic chain lesion)'],
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default data
