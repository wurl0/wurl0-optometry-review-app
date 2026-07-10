import { NotesData } from '@/lib/notes-types'

export const lowVisionNotes: NotesData = {
  subject: 'Low Vision',
  slug: 'low-vision',
  sections: [
    {
      id: 'definitions',
      title: 'Definitions and Classification',
      blocks: [
        {
          kind: 'text',
          content: 'Vision impairment covers the continuum from partial sight to blindness. Low vision is impairment of visual function that cannot be fully corrected by conventional spectacles, contact lenses, or medical treatment, and that restricts everyday life. The definitions below are the ones tested most often.',
        },
        {
          kind: 'diagram',
          id: 'lv-classification',
        },
        {
          kind: 'sub',
          title: 'Key Definitions',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['WHO Blindness', 'VA of 20/200 or less in the better eye after best correction, or visual field < 10° from fixation; also, no usable vision except light perception'],
                ['WHO Low Vision', 'VA worse than 20/70 in the better eye after best correction, with visual field < 20° from fixation'],
                ['Legal Blindness', 'VA of 20/200 or less in the better seeing eye with best correction (including contact lenses), OR a visual field of 20° or less in the widest meridian of the better eye'],
                ['Functional Low Vision', 'Impairment of visual function not fully remediable by conventional spectacles, contact lenses, or medical intervention, causing restriction in everyday life'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Do not confuse the field cut-offs: WHO blindness uses field < 10°, WHO low vision uses field < 20°, and legal blindness uses a field of 20° or less in the widest meridian. VA 20/200 is the shared acuity threshold for both WHO blindness and legal blindness.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'ICD-11 Classification of Visual Impairment (2018)',
          blocks: [
            {
              kind: 'table',
              headers: ['Category', 'Best-corrected distance VA'],
              rows: [
                ['Mild', '20/40 (6/12) to 20/60 (6/18)'],
                ['Moderate', 'Worse than 20/60 (6/18) to 20/200 (6/60)'],
                ['Severe', 'Worse than 20/200 (6/60) to 20/400 (3/60)'],
                ['Blindness', 'Worse than 20/400 (3/60)'],
                ['Near vision impairment', 'Near VA worse than N6 or M.08 at 40 cm'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Impairment, Disability, Handicap',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Visual disorder: anatomical change in the visual organs (e.g., early glaucoma) that may go unnoticed',
                'Functional loss: the disorder reduces visual acuity, visual field, colour vision, or contrast sensitivity',
                'Visual disability: vision-related change in skills and abilities, measured by what the person can or cannot do',
                'Visual handicap: the psychosocial and economic consequences of visual loss (barriers in the physical and social environment)',
                'Habilitation is for congenital loss (building skills never had); rehabilitation is for acquired loss (restoring lost skills)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Epidemiology and Causes',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '285 million people are visually impaired worldwide: 39 million blind and 246 million with low vision',
                'About 90% of the visually impaired live in developing countries, and roughly 80% of blindness is avoidable',
                'Uncorrected refractive error is the leading cause of visual impairment; cataract remains the leading cause of blindness in low- and middle-income countries',
              ],
            },
            {
              kind: 'table',
              headers: ['Cause of blindness, adults over 50', '%', 'Cause in children', '%'],
              rows: [
                ['Cataract', '62.6', 'Refractive error', '33.3'],
                ['Refractive error', '19.7', 'Congenital eye anomalies', '25.0'],
                ['Glaucoma', '5.8', 'Retinal degeneration', '16.7'],
                ['Posterior segment disorder', '4.7', 'Vitamin A deficiency', '8.3'],
                ['Corneal opacity', '0.9', 'Others', '16.6'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'colour-vision',
      title: 'Colour Vision and Anomalies',
      blocks: [
        {
          kind: 'text',
          content: 'Colour vision is the ability to discriminate light on the basis of its wavelength composition. Deficiencies are graded by how many cone types are affected and how severely.',
        },
        {
          kind: 'sub',
          title: 'Anomalous Trichromacy (one cone altered in sensitivity)',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Affected cone', 'Notes'],
              rows: [
                ['Protanomaly', 'Red-weak (L cone)', 'Red appears weaker; orange, yellow, yellow-green look paler'],
                ['Deuteranomaly', 'Green-weak (M cone)', 'MOST COMMON colour vision deficiency; X-linked; ~5% of white males'],
                ['Tritanomaly', 'Blue-weak (S cone)', 'Very rare (< 0.01%); difficulty telling yellow from blue'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Dichromacy (one cone type missing/non-functional)',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Missing cone', 'Notes'],
              rows: [
                ['Protanopia', 'Red (L)', 'Most common dichromacy; red/green appear grey when mixed'],
                ['Deuteranopia', 'Green (M)', 'Very similar picture to protanopia'],
                ['Tritanopia', 'Blue (S)', 'Rarest dichromacy (~10 per million); confuses yellow and blue'],
              ],
            },
            {
              kind: 'pearl',
              content: 'The prefixes Protan, Deutan, and Tritan cover both the anomalous (weak) and the dichromatic (absent) forms. Red-green defects (protan/deutan) are X-linked and far more common than blue-yellow (tritan) defects.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Achromatopsia (total colour blindness)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Rod monochromacy (complete): all cones non-functional or absent; ~0.003%; not sex-linked; reduced VA, hemeralopia (day blindness / light sensitivity), nystagmus, and central scotoma',
                'Cone monochromacy (incomplete): only one functioning cone type (B-, M-, or L-cone monochromacy); less severe, VA remains near-normal',
                'Both perceive the world only in shades of grey',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Colour Vision Tests',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Pseudoisochromatic plates: Ishihara, Hardy-Rand-Rittler (HRR)',
                'Colour arrangement: Farnsworth D-15 (dichotomous), Lanthony',
                'Lantern tests: Farnsworth Lantern (FALANT), Holmes-Wright Lantern',
                'Anomaloscope: the reference standard, matches a red-green mixture to a yellow',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'fields-contrast',
      title: 'Visual Field and Contrast Sensitivity',
      blocks: [
        {
          kind: 'text',
          content: 'Each retinal location maps to a corresponding part of the visual field, so the site of disease predicts the field defect. Contrast sensitivity often explains real-world difficulty even when high-contrast acuity looks good.',
        },
        {
          kind: 'diagram',
          id: 'lv-visual-fields',
        },
        {
          kind: 'sub',
          title: 'Retina-to-Field Mapping and Defects',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Fovea = point of fixation; optic disc = blind spot',
                'Nasal retina = temporal field; temporal retina = nasal field',
                'Scotoma: an area of depressed vision surrounded by normal field; classified positive vs negative and absolute vs relative',
              ],
            },
            {
              kind: 'table',
              headers: ['Condition', 'Characteristic field defect'],
              rows: [
                ['Macular hole / macular disease', 'Central scotoma'],
                ['Retinitis pigmentosa', 'Peripheral field constriction (tunnel vision)'],
                ['Glaucoma', 'Arcuate scotoma'],
                ['Diabetic / hypertensive retinopathy', 'Scattered scotomas'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Field tests: Amsler grid, tangent screen, perimeter, confrontation',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Contrast Sensitivity',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Contrast: luminance difference between regions not separated by a definite border. Contrast sensitivity: the ability to distinguish an object from its background. Contrast threshold: the smallest contrast needed to see a target',
                'Acuity charts test only high contrast at various sizes; the real world is mostly shades of grey, so contrast sensitivity predicts function (mobility, reading, face recognition) better than acuity alone',
                'Spatial frequency: different grating sizes; measured with repetitive black-and-white bars',
              ],
            },
            {
              kind: 'table',
              headers: ['Test', 'Key feature'],
              rows: [
                ['Pelli-Robson', 'Fixed 20/60 letter size, contrast falls across letter triples (0.15 log steps); score 2.0 = normal, < 1.5 = impairment, < 1.0 = disability'],
                ['Bailey-Lovie', 'LogMAR chart at 6 m, tests VA at 100% and 10% contrast (predicts night-driving acuity)'],
                ['VCTS (Vistech)', 'Sine-wave gratings, 5 spatial frequencies (1.5–18 c/deg); often called the gold standard'],
                ['FACT (Ginsburg)', 'Sine-wave gratings, 5 frequencies × 9 contrasts, tested at 10 feet'],
                ['Hiding Heidi', 'Preferential looking for infants; low-contrast face cards (black, 25, 10, 5, 2.5, 1.25%)'],
                ['Cambridge low-contrast gratings', 'Rapid screening at 6 m; 12 plate pairs'],
              ],
            },
            {
              kind: 'pearl',
              content: 'A patient can have 20/20 high-contrast acuity yet be functionally handicapped from poor contrast sensitivity: trouble night driving, reading, and seeing spots on dishes or clothes. Refractive error and early cataract first drop contrast sensitivity at high spatial frequencies (fine detail).',
            },
          ],
        },
      ],
    },
    {
      id: 'acuity-refraction',
      title: 'Visual Acuity and Refraction in Low Vision',
      blocks: [
        {
          kind: 'text',
          content: 'Accurate acuity in low vision guides how much magnification is needed. Because standard technique often fails with poor fixation, eccentric viewing, or media opacity, low vision refraction uses modified methods.',
        },
        {
          kind: 'sub',
          title: 'Measuring and Recording Acuity',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Distance VA is traditionally taken at 6 m (20 ft); moving the chart from 6 m to 3 m gains a factor of two of measurement range',
                'A 1-m viewing distance simplifies metric calculations. Louise Sloan introduced the M-unit for letter size to avoid confusion with D (diopters)',
                'For low vision, record distance and near VA in M-notation. For unknown print, letter size (mm) / 1.45 mm gives the M value',
                'Conditions with poor VA: high refractive error (EOR); central retinal disease (AMD, Stargardt); media opacity (cataract, corneal opacity)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Low Vision Refraction Techniques',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Uncorrected refractive error is a major, correctable cause of reduced VA even when disease is present; use a trial frame with wide-aperture trial lenses',
                'Traditional phoropter refraction is not recommended for most low vision clients (poor fixation, eccentric posture, media opacity)',
                'Radical retinoscopy: work at a shorter-than-usual distance, then subtract the working-distance dioptric value from the gross finding',
                'Off-axis retinoscopy: reflex is taken off the patient\'s line of sight for a brighter reflex, useful with central cataract',
                'Bracketing: use a trial frame with large power changes rather than the fine steps of the phoropter',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'reading-adds',
      title: 'Predicting the Reading Add',
      blocks: [
        {
          kind: 'text',
          content: 'Low vision patients use shorter working distances for near work, and most need a reading addition. Three methods estimate a starting add, each based on distance and/or near VA.',
        },
        {
          kind: 'sub',
          title: 'Reserve Acuity (why goal acuity is smaller than threshold)',
          blocks: [
            {
              kind: 'table',
              headers: ['Reading task', 'Rate', 'Needed reserve'],
              rows: [
                ['Spot reading (single word)', '~80 wpm', '1 line smaller than threshold'],
                ['Fluent reading (accurate)', '~160 wpm', '3 lines smaller'],
                ['Maximum reading (fast, accurate)', '~320 wpm', '5 lines smaller'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Methods to Predict the Add',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Kestenbaum\'s rule: the add (in diopters) is the reciprocal of the distance Snellen VA. VA 20/200 gives 200/20 = +10.00 D',
                'Reciprocal of vision: (denominator of distance VA / desired near VA) × +2.50. For 20/200 wanting 20/50: 200/50 × 2.50 = +10.00 D (the +2.50 is the reference add for a 40 cm working distance)',
                'Starting near VA: testing distance (m) / letters read (M) = x / desired acuity (M); solve for the new working distance, then convert to diopters with D = 1/f. This method needs no distance VA and is the most accurate',
              ],
            },
            {
              kind: 'pearl',
              content: 'Worked example (starting near VA): 4M read at 40 cm, goal 1M. 0.4/4 = x/1, so x = 0.1 m. D = 1/0.1 = +10.00 D add. A shorter working distance always means a stronger add, and the add creates its own fixed focal working distance.',
            },
          ],
        },
      ],
    },
    {
      id: 'magnification',
      title: 'Magnification',
      blocks: [
        {
          kind: 'text',
          content: 'Magnification increases the apparent size of the retinal image. The clinical goals are to make the target BIGGER, BOLDER, and BRIGHTER. Required magnification = achieved VA / goal VA.',
        },
        {
          kind: 'diagram',
          id: 'lv-magnification-types',
        },
        {
          kind: 'sub',
          title: 'Required Magnification',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Magnification needed = achieved (best-corrected) VA / goal VA, using matching notation',
                'BCVA 40M needing 10M print: 40/10 = 4×',
                'BCVA 20/200 needing 20/40: 200/40 = 5×',
                'Goal acuity is set 1 line smaller (spot), 3 lines (fluent), or 5 lines (maximum) than threshold',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Relative Size and Relative Distance (no device)',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Formula', 'Meaning'],
              rows: [
                ['Relative Size (RSM)', 'RSM = S2 / S1', 'Object physically enlarged (large print, large playing cards). S1 original size, S2 new size'],
                ['Relative Distance (RDM)', 'RDM = r / d', 'Object brought closer (approach magnification). r reference distance, d new distance'],
              ],
            },
            {
              kind: 'pearl',
              content: 'RSM example: enlarging 2M print to 10M gives 10/2 = 5×. RDM example: moving a page from 40 cm to 10 cm gives 40/10 = 4×. Relative distance magnification is practical for young children (high accommodation) and myopes using unaided vision; most others need a high plus add.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Angular Magnification and X-Notation',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Angular (optical) magnification: object unchanged in size and position, but a lens system is interposed (spectacle/hand/stand magnifier, telescope). Used when the object is too far or too large to move or resize',
                'X-notation: the number of times the retinal image is enlarged. 1× = no change, 2× = twice the size',
                'Spectacle magnifiers use a 40 cm reference: 1× = +2.50 D. Hand and stand magnifiers use a 25 cm reference: 1× = +4.00 D',
                'The higher the magnification, the shorter the focal length',
              ],
            },
            {
              kind: 'table',
              headers: ['At 40 cm reference', 'Mag', 'At 25 cm reference', 'Mag'],
              rows: [
                ['+2.50 D (40 cm)', '1×', '+4.00 D (25 cm)', '1×'],
                ['+5.00 D (20 cm)', '2×', '+8.00 D (12.5 cm)', '2×'],
                ['+10.00 D (10 cm)', '4×', '+16.00 D (6.25 cm)', '4×'],
                ['+20.00 D (5 cm)', '8×', '+20.00 D (5 cm)', '5×'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Projection Magnification',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'An object is enlarged by projecting it onto a screen (films, slides). The familiar clinical aid is the closed-circuit television (CCTV)',
                'PM = size of screen image / size of the object',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'telescopes',
      title: 'Telescopes and Angular Systems',
      blocks: [
        {
          kind: 'text',
          content: 'Telescopes improve distance vision. The two key specifications are magnification power and field of view, and they trade off: as magnification rises, field of view falls. Telescopes always form virtual images.',
        },
        {
          kind: 'diagram',
          id: 'lv-telescopes',
        },
        {
          kind: 'sub',
          title: 'Galilean vs Keplerian',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Galilean (terrestrial)', 'Keplerian (astronomical)'],
              rows: [
                ['Objective lens', 'Convex (+)', 'Convex (+)'],
                ['Eyepiece lens', 'Concave (−)', 'Convex (+)'],
                ['Image', 'Erect virtual (no prism needed)', 'Inverted; internal prism re-inverts'],
                ['Typical range', 'Up to ~4×', 'Up to ~20×'],
                ['Field / light', 'Brighter but smaller field', 'Wider field but less light transmission'],
                ['Build', 'Small, light, cheap, easy to make', 'Heavier, costlier, complex, harder to use'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Telescope Formulas',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Magnification M = Fe / Fo (dioptric power of eyepiece / objective)',
                'Length of telescope = sum of the focal lengths (in cm) of objective and eyepiece; focal length f = 100 / D (cm)',
                'Unknown-power telescope: M = diameter of objective lens / diameter of exit pupil',
                'Telescope notation such as 4 × 12, 12.5°: 4 = magnification, 12 = objective diameter (mm), 12.5° = field of view',
              ],
            },
            {
              kind: 'pearl',
              content: 'Worked example: objective +10.00 D (f = 10 cm), eyepiece 30.00 D. M = 30/10 = 3×. Galilean uses a −30.00 D eyepiece (f = −3.33 cm), so length = 10 + (−3.33) = 6.67 cm. Keplerian uses +30.00 D (f = +3.33 cm), so length = 10 + 3.33 = 13.33 cm. Same magnification, but the Keplerian is physically longer.',
            },
          ],
        },
      ],
    },
    {
      id: 'devices',
      title: 'Low Vision Devices and Non-Optical Aids',
      blocks: [
        {
          kind: 'text',
          content: 'Low vision aids are optical or non-optical devices that enhance remaining vision. They are grouped by task: near, distance, field expansion, and non-optical. Devices can be combined (e.g., 3× spectacle × 8× hand magnifier = 24×).',
        },
        {
          kind: 'sub',
          title: 'Near Devices',
          blocks: [
            {
              kind: 'table',
              headers: ['Device', 'Advantage', 'Disadvantage'],
              rows: [
                ['Spectacle magnifier (microscopic)', 'Hands-free, wide field, portable, good for prolonged reading; base-in prism for binocular low powers', 'Fixed, very close working distance; binocularity impossible at high power'],
                ['Hand magnifier', 'Cheap, variable working distance, good for spot reading; often self-illuminated', 'Needs steady hands; one hand occupied; slows reading'],
                ['Stand magnifier', 'Fixed lens-to-object distance, good for tremor/Parkinson/cerebral palsy, pairs with a reading stand', 'Narrow field, bulky, can block the reading light'],
                ['Telemicroscope', 'Hands-free with greater working distance than spectacle magnifiers', 'Narrow field of view'],
                ['CCTV (electronic)', 'High magnification, contrast reversal/enhancement, zoom, binocular, good posture', 'Expensive, bulky; best for long sustained reading'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Distance Devices and Field Expanders',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Distance aids: hand-held telescopes (short-term spotting), spectacle-mounted telescopes (extended/hands-free viewing), full-diameter and bioptic mounts, electronic systems',
                'Field expanders (for constricted fields, hemianopsia, scotoma): prisms, mirrors, reverse telescopes, minus lenses',
                'Electronic head-mounted systems: variable autofocus magnification and contrast; useful for distance and near but not recommended for mobility',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Non-Optical Aids and Lighting',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Non-optical: enlargement (large font), improved lighting, glare reduction (typoscope, visors, filters), contrast enhancement, computer software, mobility aids (white cane), environmental modification, accessory devices',
                'Lighting: fluorescent (cheap, good general/scattered light); incandescent bulb (common, directional, dimmable, but hot); halogen (bright, directional, long life); natural light (free but uncontrollable glare/shadows). Gooseneck lamps give task lighting',
                'Contrast enhancement: black felt-tip on white paper, contrasting stair edges and doorframes, acetate overlays, highlighter pens, yellow/orange tinted lenses; black-on-white gives the highest contrast',
                'Sight substitution: Braille and tactile devices, talking books/newspapers/magazines',
              ],
            },
            {
              kind: 'pearl',
              content: 'Match the device to the task and the patient: hand-held telescope for brief spotting, spectacle-mounted for sustained/hands-free viewing; stand magnifier (not hand) for tremor; a reading stand and proper posture reduce fatigue with high-add spectacles and magnifiers.',
            },
          ],
        },
      ],
    },
  ],
}
