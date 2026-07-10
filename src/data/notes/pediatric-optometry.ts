import { NotesData } from '@/lib/notes-types'

export const pediatricOptometryNotes: NotesData = {
  subject: 'Pediatric Optometry',
  slug: 'pediatric-optometry',
  sections: [
    {
      id: 'scope-development',
      title: 'Scope and Visual Development',
      blocks: [
        {
          kind: 'text',
          content: 'Pediatric optometry is the subspecialty concerned with eye disease, visual development, and care in children. The core clinical challenge is that children cannot reliably report which image is clearer, so every test is adapted to developmental level. The two central diseases are amblyopia and strabismus, and early detection determines outcome because the visual cortex has a critical period.',
        },
        {
          kind: 'sub',
          title: 'Critical Period of Visual Plasticity',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Peak sensitivity: birth to age 3',
                'Functional window: birth to about age 7-8',
                'Partial response still possible from age 7 to 12; minimal response after about age 12',
                'Behavioral/developmental optometrist studies how vision and behavior affect each other; vision therapy rewires the visual pathway (it does not simply strengthen muscles, which is orthoptics)',
              ],
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'peds-va-milestones',
        },
        {
          kind: 'sub',
          title: 'Visual Acuity and Alignment Milestones',
          blocks: [
            {
              kind: 'table',
              headers: ['Age', 'Visual acuity', 'Milestone'],
              rows: [
                ['Birth', '6/240 (20/800)', 'No coordinated eye movements; responds to light; shadowy vision'],
                ['1 month', '6/120 (20/400)', 'Fixation central, steady, maintained; prefers faces'],
                ['3 months', 'developing', 'Binocular vision developing; foveal maturation begins'],
                ['3-4 months', 'developing', 'Eyes should be STRAIGHT; deviation after this is pathological'],
                ['6 months', '6/30 (20/200)', 'Reaches accurately for toys; convergence and depth perception present'],
                ['1 year', '6/15 (20/50)', 'Acuity roughly 20/50 to 20/70'],
                ['3 years', '6/6 (20/20)', 'Adult acuity; letter matching (Sheridan Gardiner)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Board trap: acuity is about 20/50 at 1 year and does NOT reach 20/20 until about age 3. Any persistent ocular deviation after 3-4 months of age is pathological and needs referral.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Embryology and Function Development',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Embryology highlights: orbit 2nd month; optic nerve and choroid 3rd month; cornea and vitreous 4th month; retina and iris/ciliary body 6th month; lens onset 7th month',
                'Pupillary light reaction develops at 30 weeks gestation; foveal maturation at 4 months; optic nerve myelination from 7 months to 2 years',
                'Smooth pursuit 6-8 weeks; saccades 1-3 months; optokinetic nystagmus 2-4 months; fixation 2 months',
                'Emmetropization: neonates are typically hyperopic (+2.00 to +3.00 D); the eye grows to reduce error toward emmetropia, with most hyperopia resolved by age 4',
                'Retinopathy of prematurity (ROP), historically retrolental fibroplasia (RLF): abnormal retinal vessels from prematurity plus supplemental oxygen; can scar and detach the retina',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'primitive-reflexes',
      title: 'Primitive Reflexes',
      blocks: [
        {
          kind: 'text',
          content: 'Primitive reflexes originate in the CNS, appear in normal infants, and integrate (disappear) as the CNS matures. A reflex that persists beyond its integration age signals incomplete CNS maturation (linked to ADHD, learning disability, visual problems); a reflex absent when it should be present signals a neurological problem.',
        },
        {
          kind: 'sub',
          title: 'High-Yield Reflexes and Integration Ages',
          blocks: [
            {
              kind: 'table',
              headers: ['Reflex', 'Integrates by', 'Key point'],
              rows: [
                ['Suck', '2-4 months', 'Begins at 32 weeks gestation, developed by 36 weeks; absent in very premature (<32 wk) babies'],
                ['Root', '3-4 months', 'Stroke corner of mouth; head turns to stimulus for feeding'],
                ['Step (walking)', '3-4 months', 'Stepping movements when held upright; prepares for walking'],
                ['Moro (startle)', '5-6 months', 'Sudden sound/movement; tests hearing; persistence linked to ADHD'],
                ['Grasp (palmar)', '5-6 months', 'Stronger in premature babies; absent = neurological problem'],
                ['ATNR (fencing)', '6-7 months', 'Head turn extends face-side limbs; persistence disrupts reading/tracking, mimics convergence insufficiency'],
                ['Galant', '9 months', 'Stroke beside spine; trunk rotates; persistence linked to bedwetting'],
                ['STNR', '9-11 months', 'Persistence causes near-vision problems and poor eye-hand coordination'],
                ['Landau', '1-3 years', 'Absent = motor development issue (cerebral palsy)'],
                ['Babinski (plantar)', '~2 years', 'Toe fanning is NORMAL under age 2 but pathological in adults'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Babinski board trap: dorsiflexion/toe-fanning is a normal infant response until about age 2, but in an adult it is pathological (upper motor neuron sign). Mnemonic for integration order: Fear Paralysis, Babkin, Root, Suck, Moro, ATNR, STNR, Grasp, Tonic Labyrinthine, Galant, Landau.',
            },
          ],
        },
      ],
    },
    {
      id: 'exam',
      title: 'Pediatric Eye Examination',
      blocks: [
        {
          kind: 'text',
          content: 'The pediatric examination is scheduled and staged around the child\'s state and developmental level. The examiner should avoid a white coat, use a bright child-friendly room, and time acuity and motility testing for when the child is alert.',
        },
        {
          kind: 'sub',
          title: 'Timing and Environment',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Best time to examine: when the infant is awake and attentive',
                'Do NOT feed just before the exam (infants become drowsy after feeding)',
                'Assess visual acuity and ocular motility while the infant is alert and attentive',
                'Direct ophthalmoscopy is easier when the infant is drowsy, ideally while being fed',
                'The examiner should not wear a white coat; keep decorations pleasant but not distracting',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'AOA Recommended Examination Frequency',
          blocks: [
            {
              kind: 'table',
              headers: ['Age group', 'At-risk', 'Low-risk'],
              rows: [
                ['Birth to 24 months', 'At 6 months', 'At 6 months'],
                ['2 to 5 years', 'At 3 years', 'At 3 years'],
                ['6 to 18 years', 'Annually', 'Before 1st grade, then every 2 years'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'At-risk factors: prematurity, low birth weight, prolonged supplemental oxygen; family history of retinoblastoma, congenital cataract, or metabolic/genetic disease; maternal infection in pregnancy; difficult/assisted labor; strabismus or anisometropia; known/suspected CNS dysfunction',
                'Infant red flags: excessive tearing (blocked duct), red crusty lids (infection), eyes not moving together (muscle control), cloudy eye or photophobia (raised IOP), white pupil/leukocoria (possible retinoblastoma)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'va-tests',
      title: 'Visual Acuity Tests for Children',
      blocks: [
        {
          kind: 'text',
          content: 'Weymouth and Riggs classified acuity into four types: detection (minimum visible), resolution (minimum separable, e.g. gratings), recognition (minimum identifiable, e.g. letters/pictures), and localization/Vernier (minimum lateral displacement). The right test depends on the child\'s age and cooperation.',
        },
        {
          kind: 'sub',
          title: 'Age-Specific Tests',
          blocks: [
            {
              kind: 'table',
              headers: ['Test', 'Age', 'Principle'],
              rows: [
                ['Visually Evoked Potential (VEP)', 'Any age', 'Objective brain response to a reversing checkerboard; no cooperation needed'],
                ['Optokinetic Nystagmus (OKN) drum', '0-3 months', 'Involuntary nystagmus to moving stripes; present means the child sees'],
                ['Fixation preference test', '0-3 years', 'Cover each eye; child objects if the better eye is covered'],
                ['Teller Acuity Cards / FPL', 'Newborn to 2 yrs', 'Forced-choice preferential looking toward a patterned vs blank card'],
                ['Cardiff Acuity Cards', '1-3 years', 'Child looks toward the picture side'],
                ['Allen figures', '2-3 years', 'Familiar object pictures; named or pointed at; tested at 3 m'],
                ['Sheridan Gardiner (HOTV)', '2-5 years', 'Match H, O, T, V to a keycard; tested at 6 m'],
                ['Lea symbols', '2-5 years', 'Apple/house/circle/square matching; uses the crowding phenomenon; 3 m'],
                ['Broken Wheel / Landolt C / Tumbling E', '3-6 years', 'Identify the gap/orientation; minimal verbal demand'],
                ['Snellen chart', '5 years and up', 'Standard; requires knowing the alphabet'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'refraction',
      title: 'Refraction and Prescribing',
      blocks: [
        {
          kind: 'text',
          content: 'Infant refraction is predominantly hyperopic and decreases with age (emmetropization). Cycloplegic retinoscopy is the single most important refraction method for children because it paralyses accommodation and reveals the full hyperopic error.',
        },
        {
          kind: 'sub',
          title: 'Age Norms and Methods',
          blocks: [
            {
              kind: 'table',
              headers: ['Age', 'Average Rx'],
              rows: [
                ['3 months', '+3.00 D'],
                ['6 months', '+2.50 D'],
                ['1 year', '+2.00 D'],
                ['2 years', '+1.25 D'],
                ['3 years', '+1.00 D'],
                ['4 to 6 years', '+0.50 D'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Cycloplegic retinoscopy: most important method; tropicamide or cyclopentolate relaxes the ciliary muscle to reveal latent hyperopia',
                'Nott / static (distance) retinoscopy: distance fixation with accommodation relaxed',
                'Mohindra (dark room) retinoscopy: non-cycloplegic in total darkness; ADD -1.25 D to the result to convert to manifest refraction',
                'Dynamic retinoscopy: the child actively accommodates on a near target attached to the retinoscope; evaluates the accommodative system, not the refractive error',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Prescribing Thresholds (children over 12-18 months)',
          blocks: [
            {
              kind: 'table',
              headers: ['Error', 'Threshold to prescribe'],
              rows: [
                ['Hyperopia', 'Greater than +3.50 D in any meridian (over +2.00 D from age 4)'],
                ['Astigmatism (persistent)', 'Greater than 1.50 D'],
                ['Anisometropia (persistent)', 'Greater than 1.00 D'],
                ['Myopia', 'Any amount'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Give only PARTIAL correction of hyperopia on the first prescription, but correct anisometropia FULLY in both eyes. Reassess every 4 weeks during active amblyopia therapy.',
            },
          ],
        },
      ],
    },
    {
      id: 'binocular',
      title: 'Binocular Vision Assessment',
      blocks: [
        {
          kind: 'text',
          content: 'Binocularity has a sensory component (corresponding retinal areas stimulated together) and a motor component (vergence movements that maintain single vision). Objective corneal-reflex and red-reflex tests let you assess alignment even when a child cannot cooperate.',
        },
        {
          kind: 'diagram',
          id: 'peds-hirschberg',
        },
        {
          kind: 'sub',
          title: 'Objective Alignment Tests',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Hirschberg test: penlight at 33-40 cm; the corneal reflex is normally centered; about 1 mm of displacement equals ~7 prism diopters. Reflex at the pupil edge ~15 pd, mid pupil-to-limbus ~30 pd, at the limbus ~45 pd',
                'Krimsky test: prism placed over the deviating eye until the reflexes are symmetric; measures the deviation when cover-test cooperation is unavailable',
                'Bruckner test: direct ophthalmoscope into both pupils at 1 m; the deviating or amblyopic eye shows a brighter, whiter reflex',
                'Cover-uncover test reveals a phoria (latent); the unilateral cover test reveals a tropia (manifest)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'MEM Retinoscopy (accommodative lag)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Monocular estimated method measures the lag or lead of accommodation at near',
                'WITH movement = lag of accommodation (under-accommodating); AGAINST movement = lead of accommodation',
                'Normal value: +0.50 to +0.75 D',
                'High lag suggests esophoria at near, accommodative insufficiency, or an over-minused/uncorrected hyperope; low lag or lead suggests exophoria at near or accommodative spasm (pseudomyopia)',
              ],
            },
            {
              kind: 'pearl',
              content: 'MEM board trap: WITH motion = LAG (the eye is under-accommodating), not lead. The Lang stereotest confirms stereopsis and fusion without needing glasses, useful in young children.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Vision Therapy Filters',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Polaroid filters (with vectographic targets): each eye sees a separate image; more natural viewing, stronger stimulus to fusion, more vivid depth, and no anisometropia risk; head tilt influences the result',
                'Red/green filters (anaglyphs): the red-filter eye sees the green target and the green-filter eye sees the red target; less natural, weaker fusion stimulus, and may induce anisometropia',
                'SILO (Small In, Large Out): objects appear smaller as they come closer (base-in demand) and larger as they move away (base-out demand); used to reveal and treat suppression',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'processing',
      title: 'Visual Information Processing',
      blocks: [
        {
          kind: 'text',
          content: 'The visual system has three components: visual integrity (eye health and refraction), visual efficiency (oculomotor, accommodation, vergence, sensory fusion), and visual information processing (perceptual, visual-motor, and integration skills). Deficits here drive many reading and learning difficulties.',
        },
        {
          kind: 'sub',
          title: 'Seven Visual Perceptual Skills',
          blocks: [
            {
              kind: 'table',
              headers: ['Skill', 'Meaning', 'Sign if deficient'],
              rows: [
                ['Visual discrimination', 'Noticing similarities and differences', 'Confuses b/d; difficulty matching/sorting'],
                ['Visual memory', 'Remembering what was seen (short-term)', 'Trouble copying from the board; poor sight-word recall'],
                ['Visual sequential memory', 'Remembering a series of forms in order', 'Cannot sequence letters; poor spelling'],
                ['Form constancy', 'Recognizing a form despite size/orientation/color change', 'Cannot read different fonts; confuses p/q/b/d'],
                ['Figure-ground', 'Selecting an object from a busy background', 'Loses place; distracted; skips words'],
                ['Visual closure', 'Identifying an incomplete shape', 'Leaves out parts of words; spelling errors'],
                ['Visual spatial relations', 'Judging direction of a form or its parts', 'Trouble with in/out/on/under; reversal errors'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Spatial Skills and Skeffington\'s Circles',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Bilateral integration: using both body sides separately and together (typing, cycling)',
                'Laterality: internal awareness of the two body sides; poor laterality avoids crossing the midline',
                'Directionality: projecting left/right/up/down into external space; essential for correct letter orientation in reading',
                'Skeffington\'s four circles: Antigravity ("Where am I?"), Centering ("Where is it?"), Identification ("What is it?"), Speech-Language ("What about it?")',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'amblyopia',
      title: 'Amblyopia',
      blocks: [
        {
          kind: 'text',
          content: 'Amblyopia is decreased best-corrected acuity in one or both eyes from abnormal visual experience during the critical period, without structural pathology that explains the loss. The management question is always whether the visual cortex is still plastic.',
        },
        {
          kind: 'sub',
          title: 'Types of Amblyopia',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Cause', 'Board clue'],
              rows: [
                ['Strabismic', 'Constant unilateral strabismus; brain suppresses the deviating eye', 'Most common; suppression on sensory testing'],
                ['Anisometropic', 'Refractive difference (about 1.50 D) between eyes', 'Normal alignment; found at VA screening'],
                ['Meridional', 'Uncorrected astigmatism; one meridian blurred', 'Astigmatism in the history'],
                ['Deprivation', 'Media opacity (cataract, ptosis, corneal scar) blocks the image', 'Worst prognosis; most urgent'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Depth: shallow 20/30 to 20/60; moderate 20/80 to 20/200; deep worse than 20/200',
                'Eccentric fixation: a parafoveal locus is used instead of the fovea; most often in strabismic amblyopia; managed with inverse occlusion',
              ],
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'peds-amblyopia-flow',
        },
        {
          kind: 'sub',
          title: 'Treatment Sequence',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Step 1: correct the refractive error with full spectacle wear for 12-16 weeks BEFORE adding occlusion; some anisometropic amblyopes improve with glasses alone',
                'Step 2: occlusion (patching). Direct occlusion for foveal fixators and unsteady eccentric fixators; inverse occlusion for steady eccentric fixators',
                'Patching dose: mild amblyopia about 2 hours/day; moderate-to-severe full-time; monitor VA every 4-8 weeks',
                'Step 3: atropine penalization (1% atropine to the fellow eye) when patching compliance is poor',
                'Step 4: active vision therapy to accelerate improvement',
              ],
            },
            {
              kind: 'pearl',
              content: 'Board trap: patching is NOT the first step. Cycloplegic refraction plus full spectacle wear (12-16 weeks) comes first; patching is added only if acuity has not normalised. If the underlying binocular anomaly is not resolved, acuity gains during monocular therapy will not be permanent.',
            },
          ],
        },
      ],
    },
    {
      id: 'strabismus',
      title: 'Strabismus in Children',
      blocks: [
        {
          kind: 'text',
          content: 'Childhood strabismus ranges from benign pseudostrabismus to large-angle infantile esotropia. Distinguishing true from apparent deviation, and accommodative from non-accommodative esotropia, drives very different management.',
        },
        {
          kind: 'sub',
          title: 'Common Childhood Strabismus',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Onset / features', 'Treatment'],
              rows: [
                ['Infantile (congenital) esotropia', 'Before 6 months; large angle (>30 pd); often alternating; DVD and inferior oblique overaction', 'Surgery, aiming to align before age 2 for a binocularity window'],
                ['Accommodative esotropia', '2-3 years; associated with moderate-to-high hyperopia; excess accommodation drives convergence', 'Full cycloplegic (full plus) correction first; surgery only for residual deviation'],
                ['Pseudostrabismus', 'Wide epicanthal folds or flat nasal bridge; eyes only appear crossed', 'None; Hirschberg reflexes are symmetric; reassure; resolves as the nasal bridge develops'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Two classic traps: (1) accommodative esotropia is treated first with full plus glasses, NOT surgery; (2) pseudostrabismus needs no treatment because the corneal reflexes are symmetric (no true deviation). The cover-uncover test reveals a phoria; the unilateral cover test reveals a tropia.',
            },
          ],
        },
      ],
    },
  ],
}
