import { NotesData } from '@/lib/notes-types'

const notes: NotesData = {
  subject: 'Primary Eye Care',
  slug: 'primary-eye-care',
  sections: [
    {
      id: 'case-history',
      title: 'Case History',
      blocks: [
        {
          kind: 'text',
          content:
            'Case history is the patient\'s own account of their visual and ocular problems. It allows the examiner to form an organised discussion, build rapport, and direct the examination to the probable cause of the complaint. The primary care examination sequence covers four general areas: Case History → Refractive Status → Binocular & Accommodative Status → Ocular Health.',
        },
        {
          kind: 'sub',
          title: '4 Basic Components (Weed, 1968–1969)',
          blocks: [
            {
              kind: 'table',
              headers: ['Component', 'Description'],
              rows: [
                ['Defined Data Base', 'Patient profile, chief complaint, history'],
                ['Complete Problem List', 'All active and past ocular/systemic problems'],
                ['Initial Treatment Plan', 'Management based on the problem list'],
                ['Progress Notes', 'Documentation of follow-up findings'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Essential Elements of Case History',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Patient\'s profile (name, address, age, contact, education, gender, occupation)',
                'Chief complaint',
                'Visual and ocular history (present and past)',
                'General health history',
                'Medication usage and allergies',
                'Family ocular and medical histories',
                'Occupational and recreational visual requirements',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Methods of History Taking',
          blocks: [
            {
              kind: 'table',
              headers: ['Method', 'Description'],
              rows: [
                ['Interview', 'Face-to-face, logical flow, no script'],
                ['Questionnaire', 'Patient fills form before examination'],
                ['Combination (Most Common)', 'Questionnaire confirmed by interview'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'How to Ask Questions (5 Rules)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Presentation in logical sequence — general to specific',
                'Avoid repetition and redundancy',
                'Clear and concise questions — use layman\'s terms',
                'Avoid jargon and technical terms',
                'Use standard form (structured approach)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Sources of Ocular Complaints',
          blocks: [
            {
              kind: 'table',
              headers: ['Source', 'Cause'],
              rows: [
                ['Accommodative', 'Uncorrected refractive error (hyperopia, astigmatism, presbyopia)'],
                ['Motor', 'Muscular deficiency (phorias, cyclophorias, vertical imbalances, poor fusional reserves)'],
                ['Integrative', 'Combination of refractive error + muscular deficiency; involves accommodation and convergence'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Common Complaints and Their Causes',
          blocks: [
            {
              kind: 'table',
              headers: ['Complaint', 'Likely Cause'],
              rows: [
                ['Blurring of vision', 'Uncorrected refractive error, cataract, diabetic retinopathy, eyestrain'],
                ['Headache', 'Uncorrected refractive error, stress, migraine'],
                ['Diplopia (double vision)', 'Weak EOM, high astigmatism, uncorrected refractive error'],
                ['Photophobia', 'Albinotic eyes, retinal degeneration'],
                ['Itching', 'Allergy, dry eye'],
                ['Floaters', 'Usually physiologic; may indicate hemorrhage or retinal detachment'],
                ['Halos around lights', 'Glaucoma (light diffraction)'],
                ['Coloured vision', 'Nuclear cataract'],
                ['Objects seem to swim', 'Nystagmus or vertical imbalance'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Headache Location and Likely Condition',
          blocks: [
            {
              kind: 'table',
              headers: ['Location', 'Likely Condition'],
              rows: [
                ['Frontal', 'Hyperopia, sinusitis, convergence excess'],
                ['Occipital', 'Presbyopia, high blood pressure, convergence insufficiency, vertical imbalance'],
                ['Temporal', 'Astigmatism'],
                ['Parietal', 'Tension headache, psychological'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Board trap: High blood sugar → inflamed lens → focus in FRONT of retina → MORE MYOPIC, LESS HYPEROPIC. Low blood sugar → MORE HYPEROPIC, LESS MYOPIC. Hypertension: capillaries constrict, increases IOP, changes refractive error.',
            },
          ],
        },
      ],
    },
    {
      id: 'visual-acuity',
      title: 'Visual Acuity',
      blocks: [
        {
          kind: 'text',
          content:
            'Visual acuity (VA) is the clarity or sharpness of vision — the resolving power of the eye. Created by Dr. Herman Snellen (1834–1908). The basis of the Snellen chart is a square of 5\' of arc in each dimension, with each letter element subtending 1\' of arc.',
        },
        {
          kind: 'sub',
          title: 'Forms of Visual Acuity (Weymouth and Riggs)',
          blocks: [
            {
              kind: 'table',
              headers: ['Form', 'Definition'],
              rows: [
                ['Minimum Visible (Detection)', 'Lowest form. Recognise a figure against its background. Requires 80% contrast.'],
                ['Minimum Separable (Resolution)', 'Recognise two or more lines simultaneously. Normally 5 minutes of arc.'],
                ['Minimum Cogniscible/Legible (Recognition)', 'Identify letters; threshold for letter identification. Ex: Snellen chart'],
                ['Minimum Separable Angle', 'Smallest angle subtended at the nodal point. HIGHEST form — defines visual acuity.'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'VA Terminologies',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition'],
              rows: [
                ['Unaided VA', 'Vision without corrective lenses'],
                ['Habitual VA', 'Acuity with current correction'],
                ['Optimal VA', 'VA after full refraction and correction of refractive error'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Factors Affecting Visual Acuity (13 Factors)',
          blocks: [
            {
              kind: 'pearl',
              content:
                'Mnemonic I-S-N-R-L-D-L-T-P-A-R-C-A: 1. Intensity of illumination (20 fc) · 2. Spectral nature of light (550–580nm, yellow-green) · 3. Nature/intensity of surrounding field · 4. Region of retina stimulated · 5. Lateral illumination and glare · 6. Distance of test target · 7. Lid pressure · 8. Tear film and blinking · 9. Pupil size (optimal: 2–4mm) · 10. Presence of ametropia · 11. Retinal mosaic · 12. Clarity of optical media · 13. Ability to interpret blurred image',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Snellen Charts',
          blocks: [
            {
              kind: 'table',
              headers: ['Chart', 'Key Detail'],
              rows: [
                ['ETDRS (Rick Ferris, 1982)', 'Gold standard. Same number of letters per row, equal log scale separation, balanced difficult letters'],
                ['Landolt Ring/C (Dr. Edward Landolt)', 'Official standard, International Ophthalmological Congress 1909. Patient identifies break position.'],
                ['E Test (Dr. Snellen)', 'Patient identifies position of legs of E'],
                ['Bailey-Lovie (Bailey & Lovie, 1976)', '14 rows of 5 letters; used for low vision patients'],
                ['Sheridan-Gardiner', 'For children'],
                ['Allen Preschool Vision Test', 'For young children'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Snellen Fraction Quick Reference',
          blocks: [
            {
              kind: 'table',
              headers: ['Snellen (ft/m)', 'Probable Correction (±)'],
              rows: [
                ['20/200 (6/60)', '2.25–2.50'],
                ['20/100 (6/30)', '1.75–2.00'],
                ['20/80 (6/24)', '1.50–1.75'],
                ['20/60 (6/18)', '1.25–1.50'],
                ['20/40 (6/12)', '0.75–1.00'],
                ['20/30 (6/9)', '0.50–0.75'],
                ['20/20 (6/6)', '0.00–0.25'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Interpreting Habitual VA',
          blocks: [
            {
              kind: 'table',
              headers: ['Finding', 'Indication'],
              rows: [
                ['VA = 20/20', 'Emmetropia OR facultative hyperopia'],
                ['VA < 20/20', 'Ametropia present'],
                ['Patient miscalls letters', 'Astigmatism'],
                ['Binocular VA < monocular VA', 'Muscular imbalance or binocular difficulty'],
                ['Variable/unstable VA', 'Spasm of ciliary muscles (accommodation)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pinhole Visual Acuity',
          blocks: [
            {
              kind: 'table',
              headers: ['Pinhole Disc Size', 'Use'],
              rows: [
                ['0.75mm', 'Testing acuity better than 20/200'],
                ['1.0mm', 'Testing acuity poorer than 20/200'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'If pinhole IMPROVES vision → not fully corrected (refractive cause). If pinhole does NOT improve or worsens vision → fully corrected OR non-refractive cause. Always done MONOCULARLY.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Subnormal Vision Techniques (in order)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Move chart closer → record "20/200 at ___ ft/m"',
                'Counting Fingers (CF) → at ~1 foot; record "OD CF at 3ft"',
                'Hand Motion (HM) → record "OD HM at 4 feet"',
                'Light Projection (LP) → penlight in 4 quadrants at 20 inches',
                'Light Perception (LP) → can patient detect light? Done monocularly',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'preliminary-exam',
      title: 'Preliminary Examination',
      blocks: [
        {
          kind: 'text',
          content:
            'Preliminary tests assess the patient\'s visual abilities, ocular health, and related systemic status before formal refraction. Done BEFORE subjective testing to establish baseline.',
        },
        {
          kind: 'sub',
          title: '1. Interpupillary Distance (IPD / PD)',
          blocks: [
            {
              kind: 'text',
              content:
                'Distance between the centres of the entrance pupils. Also called Interocular Distance (IOD) or Pupillary Distance (PD). Recorded in millimetres with distance PD written first. Example: 64/61.',
            },
            {
              kind: 'table',
              headers: ['Group', 'Typical Range'],
              rows: [
                ['Adults (mean)', '64mm (range: 48–73mm)'],
                ['Women', '55–65mm'],
                ['Men', '59–70mm'],
                ['Children', '41–55mm (may be as low as 45mm)'],
              ],
            },
            {
              kind: 'sub',
              title: 'Methods of Taking PD',
              blocks: [
                {
                  kind: 'table',
                  headers: ['Method', 'Key Steps'],
                  rows: [
                    ['Anatomical (Distance PD)', 'Patient fixates examiner\'s OPEN LEFT EYE → zero on nasal pupillary border OD → switch to examiner\'s OPEN RIGHT EYE → measure to temporal border OS'],
                    ['Catoptric (Near PD Conversion)', 'NPD <60mm: add 2mm | 60–64mm: add 3mm | ≥65mm: add 4mm to get far PD'],
                  ],
                },
                {
                  kind: 'pearl',
                  content:
                    'Monocular PD is indicated for: unilateral strabismus (cover good eye first), facial asymmetry, high refractive error (H tolerance: 2mm, V tolerance: 1.2mm), and multifocal dispensing.',
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: '2. Near Point of Convergence (NPC)',
          blocks: [
            {
              kind: 'text',
              content:
                'The point where visual lines intersect at maximum convergence. Measures the maximum convergence ability of the patient. Primary instrument: RAF Rule (Royal Air Force), target placed at 45 degrees.',
            },
            {
              kind: 'table',
              headers: ['NPC Value', 'Interpretation'],
              rows: [
                ['6–10 cm', 'Normal/Expected NPC'],
                ['< 5 cm (closer than 5cm)', 'Convergence excess'],
                ['> 10 cm (greater than 10cm)', 'Convergence insufficiency'],
              ],
            },
            {
              kind: 'table',
              headers: ['Target Type', 'Break / Recovery (Scheiman & Wick, 2008)'],
              rows: [
                ['Accommodative target', 'Break: 5 cm (±2.5) / Recovery: 7 cm (±4.0)'],
                ['Penlight or red lens', 'Break: 7 cm (±4.0) / Recovery: 10 cm (±5.0)'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Board traps: Break point = patient reports DIPLOPIA. Recovery point = patient reports SINGLE vision again. No doubling during NPC = "wandering attention" or SUPPRESSION (not normal NPC). Management for convergence insufficiency = convergence exercises (vision therapy) + prism/lenses.',
            },
            {
              kind: 'sub',
              title: 'Amplitude of Convergence Formula',
              blocks: [
                {
                  kind: 'text',
                  content:
                    'Amp. of Conv. = (NPD × 10) / (NPC + 3)\nExample: NPD=60, NPC=7 → (60 × 10)/(7+3) = 600/10 = 60 prism diopters',
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: '3. Pupil Size Evaluation',
          blocks: [
            {
              kind: 'table',
              headers: ['Lighting Condition', 'Mean Size / Range'],
              rows: [
                ['Room light', '4.0mm (range: 2.5–5.0mm)'],
                ['Near total darkness', '6.5mm (range: 5.0–8.5mm)'],
                ['Direct light', '3.0mm (range: 2.0–4.5mm)'],
              ],
            },
            {
              kind: 'table',
              headers: ['Pupil Finding', 'Significance'],
              rows: [
                ['2mm (miosis)', 'Hyperopia, astigmatism, presbyopia'],
                ['3–4mm', 'Normal size'],
                ['5mm (mydriasis)', 'Myopia'],
                ['0.5mm difference light/dark', 'Possible neurologic disease'],
                ['Anisocoria (≤1mm)', 'Physiologic — same difference in dim and bright light'],
                ['Anisocoria (>1mm)', 'Pathologic — significant under both bright AND dim illumination'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Senile miosis = reduction in pupil size that occurs in old age. Physiologic anisocoria: difference REMAINS THE SAME in dim and bright light (≤1mm). Pathological anisocoria: SIGNIFICANT difference under BOTH bright AND dim illumination.',
            },
          ],
        },
        {
          kind: 'sub',
          title: '4. Fixation Test / Corneal Reflex Test (Hirschberg)',
          blocks: [
            {
              kind: 'text',
              content:
                'Used to determine the presence of strabismus. Light held at 40cm. Reflex normally located 0.5mm NASAL to centre of pupil.',
            },
            {
              kind: 'table',
              headers: ['Reflex Location', 'Interpretation'],
              rows: [
                ['Slightly nasal', 'Normal / no deviation'],
                ['Extremely nasal', 'Exo-deviation (eye is out)'],
                ['Temporal side', 'Eso-deviation (eye is in)'],
                ['Downward', 'Hypertropia'],
                ['Upward', 'Hypotropia'],
              ],
            },
            {
              kind: 'table',
              headers: ['Reflex Position', 'Prism Dioptre Estimate'],
              rows: [
                ['Slightly nasal (5°)', '10 prism dioptres'],
                ['Pupillary margin (15°)', '30 prism dioptres'],
                ['Between pupil and limbus (30°)', '60 prism dioptres'],
                ['Limbal area (45°)', '90 prism dioptres'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Angle kappa: Positive angle kappa = nasally displaced corneal reflex (physiologic up to 5 degrees / 10Δ). Negative angle kappa = TEMPORAL displacement. Hyperopic eyes: reflex slightly more nasal. Highly myopic: reflex near centre or temporal.',
            },
          ],
        },
        {
          kind: 'sub',
          title: '5. Ocular Motility (Version Test)',
          blocks: [
            {
              kind: 'text',
              content:
                'Tests conjugate eye movements using the 6 extraocular muscles.',
            },
            {
              kind: 'table',
              headers: ['Movement Type', 'Definition'],
              rows: [
                ['Version', 'Binocular, conjugate movements in the SAME direction'],
                ['Duction', 'MONOCULAR eye movements (adduction, abduction, elevation, depression)'],
                ['Vergence', 'Binocular movements in OPPOSITE directions (convergence, divergence)'],
                ['Pursuit', 'Smooth movements while following an object'],
                ['Saccades', 'Rapid, voluntary fixational movements'],
              ],
            },
            {
              kind: 'table',
              headers: ['Law', 'Description'],
              rows: [
                ['Sherrington\'s Law of Reciprocal Innervation', 'Contraction of each ocular muscle is accompanied by simultaneous and proportional RELAXATION of each antagonist'],
                ['Hering\'s Law (Equal Innervation)', 'Innervation sent to the muscle of one eye is EQUAL to that sent to the other eye'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Mnemonic EOM Normal Recording — FESA or SAFE: Full, Extensive, Smooth, Accurate | Smooth, Accurate, Full, Extensive. Both are accepted for documenting normal ocular motility.',
            },
          ],
        },
        {
          kind: 'sub',
          title: '6. Cover-Uncover Test',
          blocks: [
            {
              kind: 'table',
              headers: ['Test Type', 'Purpose'],
              rows: [
                ['Unilateral Cover Test', 'Detect TROPIA (heterotropia/strabismus) — constant deviation'],
                ['Cover-Uncover Test', 'Detect PHORIA (heterophoria) — latent deviation'],
                ['Alternate Cover Test', 'Determine direction and FULL MAGNITUDE of phoria or tropia (does not differentiate)'],
              ],
            },
            {
              kind: 'table',
              headers: ['Movement on Exposure (Cover-Uncover)', 'Type of Phoria'],
              rows: [
                ['Eye moves OUT on exposure', 'Esophoria'],
                ['Eye moves IN on exposure', 'Exophoria'],
                ['Eye moves DOWN on exposure', 'Hyperphoria'],
                ['Eye moves UP on exposure', 'Hypophoria'],
                ['No movement on exposure', 'Orthophoria'],
              ],
            },
            {
              kind: 'table',
              headers: ['Expected Phoria Range', 'Distance'],
              rows: [
                ['1 esophoria to 3 exophoria', 'Distance (20 ft)'],
                ['Orthophoria to 6 exophoria', 'Near (16 in)'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'A TROPIA IS NEVER NORMAL. Phoria: movement seen in ALTERNATE cover test but NOT in unilateral cover test. Tropia: movements seen in BOTH unilateral and alternate cover test. BO prism: moves image NASALLY, measures ESO. BI prism: moves image TEMPORALLY, measures EXO.',
            },
          ],
        },
        {
          kind: 'sub',
          title: '7. Near Point of Accommodation (NPA) — Hofstetter\'s Formulas',
          blocks: [
            {
              kind: 'table',
              headers: ['Formula', 'Calculation'],
              rows: [
                ['Minimum Expected AA', '15 − 0.25 × Age'],
                ['Average Expected AA', '18.5 − 0.30 × Age'],
                ['Maximum Expected AA', '25 − 0.40 × Age'],
              ],
            },
            {
              kind: 'table',
              headers: ['Age', 'Amplitude (D) — Donders Table'],
              rows: [
                ['10', '14.00'],
                ['20', '10.00'],
                ['30', '7.00'],
                ['40', '4.50'],
                ['45', '3.50'],
                ['50', '2.50'],
                ['60', '1.00'],
                ['75', '0.00'],
              ],
            },
            {
              kind: 'text',
              content: 'Push-Up AA Formula: Amplitude = 100 / distance in cm. Example: Clear at 50cm → 100/50 = 2.00D',
            },
          ],
        },
        {
          kind: 'sub',
          title: '9. Pupillary Reflex Test',
          blocks: [
            {
              kind: 'pearl',
              content:
                'Light Reflex Pathway (10 Steps) — Retina–ON–OC–OT–PN–EW–Pre–CG–Post–Sph: Retina → Optic Nerve → Optic Chiasm → Optic Tract → Pretectal Nucleus → Edinger-Westphal Nucleus → Preganglionic Fiber → Ciliary Ganglion → Postganglionic Fiber → Sphincter Pupillae. Pathway stops BEFORE lateral geniculate nucleus.',
            },
            {
              kind: 'table',
              headers: ['Test', 'What it Measures'],
              rows: [
                ['Direct Light Reflex (DLR)', 'Constriction of pupil in STIMULATED eye'],
                ['Indirect (Consensual) Light Reflex (ILR)', 'Constriction of pupil in OPPOSITE eye'],
                ['Pupillary Near Response (PNR)', 'Change in pupil size when looking at near object'],
              ],
            },
            {
              kind: 'table',
              headers: ['Grade', 'Meaning'],
              rows: [
                ['0', 'No change'],
                ['1', 'Small change'],
                ['2', 'Medium change'],
                ['3', 'Large change'],
              ],
            },
            {
              kind: 'text',
              content: 'Quality: (+) fast, (−) slow. Sample recording: DLR = 3+/3+ | ILR = 2+/2+ | PNR = 2+/2+ | PERRL or PERLA',
            },
            {
              kind: 'pearl',
              content:
                'Swinging Flashlight Test (Marcus Gunn Pupil): detects unilateral retina and optic nerve anomalies ANTERIOR to the lateral geniculate nucleus. Marcus Gunn Pupil (RAPD) = paradoxical DILATION of the impaired eye when light swung to it. Causes: optic neuritis, optic neuropathy, glaucoma, retinal detachment.',
            },
          ],
        },
        {
          kind: 'sub',
          title: '10. Colour Vision Test',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Monochromacy', 'Total colour blindness. Two or all cone pigments absent. Views in black and white.'],
                ['Dichromacy', 'One cone pigment absent. Moderate defect.'],
                ['Anomalous Trichromacy', 'All three cone types present but one malfunctions.'],
              ],
            },
            {
              kind: 'table',
              headers: ['Specific Defect', 'Cones Absent', 'Appearance'],
              rows: [
                ['Protanopia', 'Red cones absent', 'Red appears dark; red-green confusion'],
                ['Deuteranopia (Most Common)', 'Green cones absent', 'Green looks more red; red-green confusion'],
                ['Tritanopia (Very Rare)', 'Blue cones absent', 'Cannot distinguish blue/yellow'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Mnemonic Photopigments — Red-Green-Blue: Erythrolabe = absorbs RED | Chlorolabe = absorbs GREEN | Cyanolabe = absorbs BLUE',
            },
            {
              kind: 'table',
              headers: ['Ishihara Plates', 'Type'],
              rows: [
                ['Plate 1', 'Demonstration (everyone should see)'],
                ['Plates 2–7', 'Transformation plates (normals see correct; deficient see another)'],
                ['Plates 8–13', 'Vanishing plates (normals see; deficient cannot)'],
                ['Plates 14–15', 'Hidden design (normals CANNOT see; deficient MAY see)'],
                ['Plates 16–17', 'Diagnostic (severity)'],
                ['Plates 18–24', 'Tracing plates (illiterate or children)'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Ishihara: <4 incorrect = normal; ≥5 incorrect = defective red-green. Ishihara screens PROTAN and DEUTAN ONLY — cannot detect tritan (blue) defects. HRR (Hardy Rand Rittler) can detect protan, deutan AND tritan. Farnsworth D-15: pass = mild; fail = severe. Test distance: 75cm; plates perpendicular to visual axis; 3–5 seconds viewing time; done MONOCULARLY.',
            },
            {
              kind: 'table',
              headers: ['Acquired Lesion', 'Colour Defect Type'],
              rows: [
                ['Choroid lesion', 'Yellow-blue anomaly'],
                ['Retina lesion', 'Yellow-blue OR red-green anomaly'],
                ['Optic nerve lesion', 'Red-green anomaly'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: '11. Visual Field Test',
          blocks: [
            {
              kind: 'table',
              headers: ['Test', 'Purpose'],
              rows: [
                ['Confrontation Test (Finger Counting)', 'Gross defects screening; examiner 60–80cm away'],
                ['Amsler Grid Test', 'Macular region integrity; detects metamorphopsia; held at 33cm'],
                ['Static Automated Perimetry (e.g. Humphrey)', 'Detailed static field analysis'],
                ['Kinetic Perimetry (e.g. Goldmann)', 'Mapping field by moving stimulus'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Amsler Grid: Macropsia = objects appear LARGER. Micropsia = objects appear SMALLER. Metamorphopsia = objects appear DISTORTED. Amblyopia: unilateral or bilateral decrease of VA caused by pattern vision deprivation or abnormal binocular interaction; >2 lines difference between eyes; <6/9 VA; reversible by therapeutic measures.',
            },
          ],
        },
      ],
    },
    {
      id: 'objective-refraction',
      title: 'Objective Refraction',
      blocks: [
        {
          kind: 'text',
          content:
            'Objective refraction determines the refractive state without depending on patient responses. Two main methods: Retinoscopy and Keratometry.',
        },
        {
          kind: 'sub',
          title: 'Retinoscopy',
          blocks: [
            {
              kind: 'text',
              content:
                'Objective method of determining the refractive state. Also called: keratoscopy, shadow test, skiascopy, skiametry, pupilloscopy. Uses two systems: Illumination System (light to fundus) and Observation System (reflected light back to examiner).',
            },
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Static Retinoscopy', 'Patient fixates at 6M; accommodation relaxed. Done MONOCULARLY.'],
                ['Dynamic Retinoscopy', 'Patient fixates near object; accommodation active. Done BINOCULARLY.'],
              ],
            },
            {
              kind: 'table',
              headers: ['Movement', 'Interpretation', 'Lens to Neutralise'],
              rows: [
                ['With motion', 'Hyperopia, emmetropia, or small myopia', 'PLUS lens'],
                ['Against motion', 'Myopia greater than working distance', 'MINUS lens'],
                ['Neutral motion', 'Myopia equal to working distance', 'No lens needed (or working distance deducted)'],
              ],
            },
            {
              kind: 'table',
              headers: ['Mirror Type', 'H/E or Small Myope', 'Myope'],
              rows: [
                ['Plane Mirror', 'With motion', 'Against motion'],
                ['Concave Mirror', 'Against motion', 'With motion'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'SLOW reflex = large uncorrected myopia or hyperopia. FASTER reflex = approaching neutrality. At NEUTRALITY = infinitely fast, whole pupil illuminated simultaneously. Streak orientation: ALWAYS at right angles to the meridian being scoped. Scoping vertical meridian: streak oriented HORIZONTALLY, instrument moved VERTICALLY. Working distance lens (standard 50cm) = −2.00D deducted from gross finding.',
            },
            {
              kind: 'sub',
              title: 'Astigmatism Signs in Streak Retinoscopy',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Break phenomenon: reflex not continuous with streak on patient\'s face',
                    'Thickness phenomenon: reflex thickness varies as streak rotates 360°',
                    'Skew phenomenon: reflex moves in different direction than streak (not aligned with principal meridian)',
                    'No skew phenomenon in spherical error',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Static vs Dynamic Retinoscopy Comparison',
              blocks: [
                {
                  kind: 'table',
                  headers: ['Factor', 'Static', 'Dynamic'],
                  rows: [
                    ['Fixation', 'Far (6M)', 'Near (20")'],
                    ['Accommodation', 'Relaxed', 'Active'],
                    ['Working Distance', 'Allowance given (−2.00D)', 'NO allowance given'],
                    ['Technique', 'Monocular', 'Binocular'],
                    ['Neutral reflex', 'Single point of reversal', 'Range of neutral (area of relaxation)'],
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Keratometry',
          blocks: [
            {
              kind: 'text',
              content:
                'Measures curvature of the anterior surface of the cornea. Uses the principle of a convex mirror and doubling principle. Provides: radius of curvature, direction of eye\'s principal meridian, axis and degree of corneal astigmatism.',
            },
            {
              kind: 'table',
              headers: ['Astigmatism Type', 'Definition'],
              rows: [
                ['With-the-Rule (W/R)', 'Weakest corneal meridian at or near 180°; minus axis near 180°'],
                ['Against-the-Rule (A/R)', 'Weakest corneal meridian at or near 90°; minus axis near 90°'],
                ['Oblique (O/R)', 'Principal meridians between 30–60° or 120–150°'],
              ],
            },
            {
              kind: 'text',
              content:
                'Javal\'s Rule: At = p(Ac) + k\nwhere: At = total refractive astigmatism | Ac = corneal astigmatism | p = 1.25 | k = −0.50 Cyl × 90 (physiologic ATR)\nSimplified: At = 1.25(Ac) + (−0.50 Cyl × 90)',
            },
          ],
        },
      ],
    },
    {
      id: 'subjective-refraction',
      title: 'Subjective Refraction',
      blocks: [
        {
          kind: 'text',
          content:
            'Subjective refraction is the technique of comparing lenses using changes in vision to arrive at the dioptric lens combination that results in maximum visual acuity. It depends on patient responses.',
        },
        {
          kind: 'sub',
          title: '4 Basic Steps (F-D-S-B)',
          blocks: [
            {
              kind: 'pearl',
              content:
                'Mnemonic F-D-S-B: 1. Find the best sphere (Fogging/Defogging) → 2. Determine the cylindrical component (axis and power) → 3. Sphere Refinement (Duochrome method) → 4. Binocular Balancing/Equalization',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Methods of Relaxing Accommodation',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Fogging technique: most non-cycloplegic control of accommodation (add plus to blur)',
                'Cycloplegia: paralysis of ciliary muscle; dilated pupil',
                'Cyclodamia: non-cycloplegic, uses fogging',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Duochrome Method (Sphere Refinement)',
          blocks: [
            {
              kind: 'text',
              content:
                'Based on chromatic aberration: shorter wavelengths focus sooner than longer ones. Green = shorter wavelength = focuses IN FRONT of retina. Red = longer wavelength = focuses BEHIND retina.',
            },
            {
              kind: 'table',
              headers: ['Finding', 'Patient Type', 'Action'],
              rows: [
                ['Green clearer', 'Hyperope (under-correction)', 'Increase PLUS lens'],
                ['Green clearer', 'Myope (over-correction)', 'Decrease MINUS lens'],
                ['Red clearer', 'Hyperope (over-correction)', 'Decrease PLUS lens'],
                ['Red clearer', 'Myope (under-correction)', 'Increase MINUS lens'],
                ['Equal clarity', 'Emmetropia', 'No change needed'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'GOAL: equalise red and green clarity (emmetropia endpoint). If NO equality reached: leave GREEN CLEARER (indicates more plus = less minus = safer). If cylinder correction too WEAK: original blackest line remains blackest. If cylinder correction too STRONG: original blurred line becomes blackest.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Binocular Balancing / Equalization Techniques',
          blocks: [
            {
              kind: 'table',
              headers: ['Technique', 'Key Feature'],
              rows: [
                ['Turville Infinity Balance (TIB)', 'Uses L and F letters; also detects heterophoria type'],
                ['Prism Dissociation', '3 prism BD OD + 3 prism BU OS; add +0.25D to clearer eye'],
                ['Alternate Occlusion', 'Simplest but least reliable; covers one eye at a time'],
                ['Bichrome Method', 'Red and green filters to equalise'],
              ],
            },
            {
              kind: 'sub',
              title: 'TIB Phoria Interpretation',
              blocks: [
                {
                  kind: 'table',
                  headers: ['TIB Appearance', 'Diagnosis'],
                  rows: [
                    ['L | F (vertical line between)', 'Orthophoria'],
                    ['L  F (separated horizontally)', 'Esophoria (uncrossed diplopia)'],
                    ['F  L (reversed order)', 'Exophoria (crossed diplopia)'],
                    ['L above F', 'Right hypophoria / Left hyperphoria'],
                    ['F above L', 'Left hypophoria / Right hyperphoria'],
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Trial Case Accessories',
          blocks: [
            {
              kind: 'table',
              headers: ['Accessory', 'Use'],
              rows: [
                ['Pinhole Disc', 'Distinguish poor vision cause; check final correction; estimate refractive error'],
                ['Stenopaic Slit', '0.5–0.75mm wide; determines cylindrical state; limits light to one meridian'],
                ['Scheiner\'s Disc', 'Two small pinholes within average pupil; doubled light if off retina'],
                ['Cobalt Disc', 'Views only red and blue wavelengths at 1.4m; colour of blur circle indicates refractive state'],
                ['Red Lens', 'Interrupts fusion; used for malingering check with duochrome/red-green chart'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'slit-lamp-ophthalmoscopy',
      title: 'Slit-Lamp & Ophthalmoscopy',
      blocks: [
        {
          kind: 'text',
          content:
            'The slit-lamp biomicroscope is a clinical procedure used to examine the lids, anterior segment, and posterior segment of the eye.',
        },
        {
          kind: 'sub',
          title: 'Slit-Lamp Filters',
          blocks: [
            {
              kind: 'table',
              headers: ['Filter', 'Use'],
              rows: [
                ['Cobalt Blue', 'With fluorescein stain; contact lens work; MOST commonly used'],
                ['Red-Free', 'Enhances red objects (blood vessels, limbal arcades, new vessels)'],
                ['Neutral Density', 'General examination'],
                ['Diffusing Filter', 'Wide area overview at low magnification'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Illumination Techniques',
          blocks: [
            {
              kind: 'table',
              headers: ['Technique', 'Setup and What It Shows'],
              rows: [
                ['Diffuse Illumination', '30–45°, wide slit, diffusing filter, low mag. Overview of anterior eye.'],
                ['Direct Illumination (Optic Section)', '30–45°, narrow focused slit. Corneal thickness, depth of foreign body.'],
                ['Direct Illumination (Parallelepiped)', '30–45°, wider (3mm) slit. Corneal stroma, epithelial breakdown, lens.'],
                ['Indirect Illumination', '30–45°, beam offset. Corneal microcysts, vacuoles, epithelial.'],
                ['Retro Illumination', 'Varying angle, offset beam. Light reflected off iris/fundus. Corneal neovascularisation, edema.'],
                ['Specular Reflection', '60°, parallelepiped. Endothelial cells (polymegathism, guttata), tear layer lipid.'],
                ['Filtered Illumination (Cobalt Blue)', 'With Wratten #12 filter. Corneal staining, RGP lens fitting.'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Van Herick Technique (Anterior Chamber Angle)',
          blocks: [
            {
              kind: 'text',
              content: 'Angle: 60 degrees. Estimates depth of anterior chamber by comparing shadow width on iris to corneal optic section width.',
            },
            {
              kind: 'table',
              headers: ['Grade', 'Shadow:Optic Section Ratio', 'Interpretation'],
              rows: [
                ['Grade 4', '≥1:1 (shadow ≥ 1/2 beam)', 'Open anterior chamber angle'],
                ['Grade 3', '1:2 (shadow 1/4 to 1/2 beam)', 'Open anterior chamber angle'],
                ['Grade 2', '1:4 (shadow = 1/4 beam)', 'NARROW anterior chamber angle'],
                ['Grade 1', '<1:4 (shadow < 1/4 beam)', 'Susceptible to angle-closure glaucoma'],
                ['Grade 0', 'No shadow; cornea "sits" on iris', 'Angle is CLOSED; angle closure glaucoma attack'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Grade 0 = CLOSED angle = ACUTE GLAUCOMA ATTACK — emergency. Grade 1 = risky narrow angle = at risk for closure. Specular reflection: angle of incidence = angle of reflection (60° setup).',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ophthalmoscopy Comparison',
          blocks: [
            {
              kind: 'table',
              headers: ['Factor', 'Direct', 'Indirect'],
              rows: [
                ['Image type', 'Erect (virtual)', 'Inverted (real)'],
                ['Magnification', '15x (larger)', '2–3x binocular (smaller)'],
                ['Field of view', '~8° / 2 disc diameters', '~40° / 8 disc diameters (binocular)'],
                ['Stereopsis', 'Absent', 'Present'],
                ['Illumination', 'Poorer', 'Better'],
                ['Ease of technique', 'Easy', 'Difficult'],
                ['Need for mydriatic', 'Little', 'Very preferable'],
                ['Condensing lenses used', 'N/A', '+14.00D and +20.00D most common'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Higher condensing lens power = LOWER magnification + LARGER field of view. Normal A:V ratio = 2:3 (Artery:Vein). Fovea appears DARKER than surrounding retina. Optic disc: 1.5–1.7mm diameter; round to oval; red-yellow color. Arteries: light red, straight, white reflex stripes. Veins: dark red, tortuous, pulsating.',
            },
          ],
        },
      ],
    },
    {
      id: 'external-eye-exam',
      title: 'External Eye Examination',
      blocks: [
        {
          kind: 'text',
          content:
            'The 7 Rules for Recognising Healthy Eyes — a board high-yield list.',
        },
        {
          kind: 'pearl',
          content:
            '7 Rules for Healthy Eyes (Board High-Yield): 1. Cornea should be clear · 2. Pupil should be black · 3. Sclera should be white · 4. Eyelids should open and close properly · 5. Eyelashes should point away from the eye · 6. Children\'s eyes should appear straight · 7. Vision should be normal',
        },
        {
          kind: 'sub',
          title: 'Corneal Opacities',
          blocks: [
            {
              kind: 'table',
              headers: ['Opacity Type', 'Description'],
              rows: [
                ['Nebula', 'Slight corneal opacity or scar; seldom obstructs vision; seen only by oblique illumination'],
                ['Macula', 'Moderately dense, circumscribed whitish opacity'],
                ['Leukoma', 'Opaque white spot on the cornea (most severe)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Eyelid Anomalies',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Description', 'Cause / Treatment'],
              rows: [
                ['Ptosis', 'Drooping of upper eyelid; may be congenital (bilateral) or acquired (unilateral)', 'Neural, muscular, or mechanical factors'],
                ['Hordeolum/Stye', 'Circumscribed, acute inflammation of edge of lids', 'Staphylococcus infection of glands of Zeiss and Moll → hot compress'],
                ['Chalazion', 'Benign, painless bump; inflammation of meibomian glands', 'Anti-bacterial ointment, warm compress'],
                ['Blepharitis', 'Inflammation of eyelids; red, irritated, itchy; dandruff-like scales on lashes', 'Staphylococcal or seborrheic → wash lid margins'],
                ['Ectropion', 'Eyelid turns OUTWARD; lower lid most common', 'Artificial tears; surgery for full correction'],
                ['Entropion', 'Eyelid turns INWARD; lashes rub cornea', 'Artificial tears; surgery for full correction'],
                ['Trichiasis', 'Misdirection/inversion of eyelashes inward, rubbing cornea', 'Electrolysis or cryotherapy'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Scleral and Conjunctival Anomalies',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Description'],
              rows: [
                ['Pterygium (Surfer\'s eye)', 'Triangular growth on conjunctiva/membrane covering the sclera'],
                ['Pinguecula', 'Yellowish, slightly raised thickening on conjunctiva (fat, calcium, protein); can lead to pterygium'],
                ['Scleritis', 'Serious inflammatory disease of the outer white covering'],
                ['Ictericia', 'Yellowish discoloration of the sclera — jaundice'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Conjunctivitis Types',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Key Signs', 'Treatment'],
              rows: [
                ['Allergic', 'Itching, tearing, swollen eyelids', 'Remove irritant; cool compresses; artificial tears; antihistamines'],
                ['Viral', 'Water discharge, irritation, red eye; often bilateral spread', 'Cool compress and artificial tears (no cure); self-limiting'],
                ['Bacterial', 'Stingy/yellow discharge, lids stick together after sleep; usually one eye initially', 'Warm compress; antibiotic eye drops or ointments'],
                ['Giant Papillary (GPC)', 'Caused by chronic foreign body (e.g. contact lens) in eye', 'Remove lens; mast cell stabilizers'],
                ['Ophthalmia neonatorum', 'Severe bacterial conjunctivitis in newborns (chlamydia or gonorrhea from birth canal)', 'Emergency — antibiotic prophylaxis at delivery'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'infection-control',
      title: 'Infection Control & Clinical Protocols',
      blocks: [
        {
          kind: 'text',
          content:
            'Clinical protocol to prevent infection and contamination in optometric and optical practice (IPAO guidelines). This is a commonly tested area for ethics and practical examination components.',
        },
        {
          kind: 'sub',
          title: 'Hand Washing (6 Steps)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Wet your hands',
                '2. Apply soap/solution and scrub for at least 15 seconds',
                '3. Scrub back of hands, wrists, between fingers and under fingernails',
                '4. Rinse your hands',
                '5. Turn off water lever using your elbow',
                '6. Dry with paper towel',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Disinfection Agents',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1 part house bleach to 100 parts distilled water solution',
                'Hydrogen peroxide (3%) — used but more costly; rinse thoroughly with sterile saline and air dry after',
                'Do NOT soak instruments more than 10 minutes — may cause damage',
                'Tonometer tips and gonioscopes: wash with soap and water THEN soak 10 minutes',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Key Clinical Protocol Rules',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Instruments with skin contact (phoropter, slit-lamp, autorefractor): wipe with alcohol swabs after each patient',
                'Contact lens bottles: discard if opened more than 1 month; never touch tip to eye or skin',
                'Gloves: required whenever body fluid exposure risk exists; wash before and after use',
                'Temperature defines fever at ≥38°C (WHO/DOH)',
                'Only ONE patient and ONE doctor allowed inside examination room at a time (COVID-19 IPAO guidelines)',
              ],
            },
            {
              kind: 'pearl',
              content:
                'Board trap: The palpebral fissure height (PFH) is 8–11mm — key measurement for assessing ptosis. Normal A:V ratio on fundus = 2:3. Normal IOP range = 12–22 mmHg.',
            },
          ],
        },
      ],
    },
    {
      id: 'high-yield-numbers',
      title: 'High-Yield Numbers',
      blocks: [
        {
          kind: 'text',
          content: 'Board exam critical values — memorise all of these.',
        },
        {
          kind: 'table',
          headers: ['Item', 'Value'],
          rows: [
            ['Standard VA test distance', '20 feet / 6 metres'],
            ['Standard near VA test distance', '16 inches / 40 cm'],
            ['Standard illumination', '20 foot-candles (fc)'],
            ['Optimal pupil size for acuity', '2–4 mm'],
            ['Normal IOP range', '12–22 mmHg'],
            ['Normal NPC range', '6–10 cm'],
            ['Expected distance phoria range', '1 esophoria to 3 exophoria'],
            ['Expected near phoria range', 'Ortho to 6 exophoria'],
            ['Corneal reflex position (normal)', '0.5mm NASAL to centre of pupil'],
            ['Angle kappa (physiologic)', 'Up to 5 degrees (10 prism dioptres)'],
            ['Vein to artery ratio (fundus)', '3:2'],
            ['Optic disc diameter', '1.5–1.7 mm'],
            ['Ishihara test distance', '75 cm'],
            ['Ishihara viewing time', '3–5 seconds per plate'],
            ['Ishihara: normal colour vision', '< 4 incorrect plates'],
            ['Ishihara: defective red-green', '≥ 5 incorrect plates'],
            ['Near stimulus to accommodation at 16 in', '2.50 D'],
            ['Near stimulus to convergence at 16 in (PD=64mm)', '15 prism dioptres'],
            ['Direct ophthalmoscopy magnification', '15x'],
            ['Amsler grid working distance', '33 cm'],
            ['Van Herick angle for slit-lamp', '60 degrees'],
            ['Confrontation test examiner distance', '60–80 cm'],
            ['Push-up AA formula', '100 / distance in cm'],
            ['Mean adult PD', '64 mm'],
            ['Palpebral fissure height (normal)', '8–11 mm'],
          ],
        },
      ],
    },
  ],
}

export default notes
