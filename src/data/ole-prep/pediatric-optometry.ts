import { OlePrepData } from '@/lib/ole-prep-types'

export const pediatricOptometryData: OlePrepData = {
  subject: 'Pediatric Optometry',
  slug: 'pediatric-optometry',
  sections: [
    {
      id: 'peds-milestones',
      title: 'Visual Milestones & Key Numbers',
      icon: '👶',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'VISUAL ACUITY BY AGE',
          content: 'Birth = 6/240 (20/800) | 1 mo = 20/400 | 6 mo = 20/200 | 1 yr = 20/50 | 3 yr = 20/20. Adult acuity is reached at age 3, NOT 1 year.',
        },
        {
          kind: 'fact' as const,
          highlight: 'ALIGNMENT DEADLINE',
          content: 'Eyes must be straight by 3-4 months. Any persistent deviation after this age is pathological and needs referral.',
        },
        {
          kind: 'fact' as const,
          highlight: 'CRITICAL PERIOD',
          content: 'Peak plasticity birth to age 3 | functional window to age 7-8 | partial response to ~age 12 | minimal after 12.',
        },
        {
          kind: 'table' as const,
          title: 'Average Refractive Error by Age (emmetropization)',
          headers: ['Age', 'Average Rx'],
          rows: [
            ['3 months', '+3.00 D'],
            ['6 months', '+2.50 D'],
            ['1 year', '+2.00 D'],
            ['2 years', '+1.25 D'],
            ['3 years', '+1.00 D'],
            ['4-6 years', '+0.50 D'],
          ],
          notes: 'Infants are hyperopic; most hyperopia resolves by age 4 as the eye grows toward emmetropia.',
        },
      ],
    },
    {
      id: 'peds-reflexes',
      title: 'Primitive Reflexes (Integration Ages)',
      icon: '🤲',
      items: [
        {
          kind: 'table' as const,
          title: 'High-Yield Reflex Integration',
          headers: ['Reflex', 'Integrates by', 'Key point'],
          rows: [
            ['Suck', '2-4 mo', 'Begins 32 wk gestation; absent in very premature (<32 wk)'],
            ['Moro (startle)', '5-6 mo', 'Tests hearing; persistence linked to ADHD'],
            ['Grasp (palmar)', '5-6 mo', 'Stronger in premature; absent = neurological problem'],
            ['ATNR (fencing)', '6-7 mo', 'Persistence disrupts tracking; mimics convergence insufficiency'],
            ['STNR', '9-11 mo', 'Persistence = near vision & eye-hand coordination problems'],
            ['Babinski (plantar)', '~2 yr', 'Toe fanning NORMAL under 2; pathological in adults'],
          ],
        },
        {
          kind: 'mnemonic' as const,
          term: 'Reflex integration order',
          device: 'Fear-Babkin-Root-Suck-Moro-ATNR-STNR-Grasp-TLR-Galant-Landau',
          breakdown: 'Emerge in utero, integrate over the first months to years as the CNS matures. Persistence signals incomplete maturation; absence when expected signals a neurological problem.',
        },
        {
          kind: 'trap' as const,
          question: 'A Babinski response (toe fanning) in a 15-month-old is pathological. True or False?',
          wrong: 'True — an upgoing toe is always an upper motor neuron sign',
          correct: 'False — Babinski is NORMAL up to about age 2. It is pathological only in adults.',
          why: 'The corticospinal tract is not fully myelinated in infancy, so an extensor plantar response is a normal finding until ~2 years.',
        },
      ],
    },
    {
      id: 'peds-tests-hirschberg',
      title: 'Acuity Tests & Hirschberg',
      icon: '🎯',
      items: [
        {
          kind: 'table' as const,
          title: 'Age-Specific Acuity Tests',
          headers: ['Test', 'Age', 'Principle'],
          rows: [
            ['VEP', 'Any age', 'Objective cortical response; no cooperation needed'],
            ['OKN drum', '0-3 mo', 'Nystagmus to moving stripes = child sees'],
            ['Teller cards / FPL', 'Newborn-2 yr', 'Preferential looking toward a grating card'],
            ['Allen figures', '2-3 yr', 'Familiar pictures; tested at 3 m'],
            ['Sheridan Gardiner / Lea', '2-5 yr', 'Matching task with keycard'],
            ['Tumbling E / Landolt C', '3-6 yr', 'Indicate orientation/gap direction'],
            ['Snellen', '5 yr+', 'Requires letter knowledge'],
          ],
        },
        {
          kind: 'formula' as const,
          title: 'Hirschberg Reflex → Deviation',
          formula: '1 mm displacement ≈ 7 prism diopters',
          notes: 'Reflex at pupil edge (~2 mm) ≈ 15 pd | mid pupil-to-limbus (~4 mm) ≈ 30 pd | at limbus (~6 mm) ≈ 45 pd. Krimsky neutralises the reflex with prism when cover testing is not possible.',
        },
        {
          kind: 'recall' as const,
          prompt: 'On MEM retinoscopy, what does a WITH motion mean and what is the normal value?',
          answer: 'WITH motion = lag of accommodation (under-accommodating). AGAINST = lead. Normal lag = +0.50 to +0.75 D. High lag suggests esophoria/accommodative insufficiency.',
        },
      ],
    },
    {
      id: 'peds-amblyopia-strabismus',
      title: 'Amblyopia & Strabismus',
      icon: '👁️',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'AMBLYOPIA TREATMENT ORDER',
          content: 'Cycloplegic refraction → full spectacle wear 12-16 weeks (reassess q4 wks) → THEN patching if VA not normalised → atropine penalization / vision therapy. Patching is NOT the first step.',
        },
        {
          kind: 'table' as const,
          title: 'Amblyopia Types',
          headers: ['Type', 'Cause', 'Prognosis clue'],
          rows: [
            ['Strabismic', 'Constant unilateral strabismus + suppression', 'Most common'],
            ['Anisometropic', 'Refractive difference (~1.50 D)', 'Found at school screening'],
            ['Meridional', 'Uncorrected astigmatism', 'One meridian blurred'],
            ['Deprivation', 'Media opacity (cataract, ptosis)', 'WORST prognosis; most urgent'],
          ],
        },
        {
          kind: 'trap' as const,
          question: 'Accommodative esotropia is treated first with strabismus surgery. True or False?',
          wrong: 'True — a manifest esotropia needs surgical alignment',
          correct: 'False — full cycloplegic (full plus) spectacle correction is the first and often definitive treatment; surgery is only for a residual non-accommodative deviation.',
          why: 'The hyperope over-accommodates, driving accommodative convergence. Full plus relieves the drive to converge. Pseudostrabismus (symmetric Hirschberg reflexes) needs no treatment at all.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Direct vs inverse occlusion — which fixation type gets which?',
          answer: 'Direct occlusion (patch the FELLOW/good eye): foveal fixators and unsteady eccentric fixators. Inverse occlusion (patch the AMBLYOPIC eye): steady eccentric fixators, to develop foveal fixation.',
        },
      ],
    },
    {
      id: 'peds-refraction',
      title: 'Refraction & Prescribing',
      icon: '🔬',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'CYCLOPLEGIC IS KING',
          content: 'Cycloplegic retinoscopy is the single most important pediatric refraction. Children have huge accommodation and can "focus through" a dry retinoscopy, hiding their full hyperopia; cycloplegia paralyses the ciliary muscle and unmasks the latent error the treatment plan depends on.',
        },
        {
          kind: 'trap' as const,
          question: 'Mohindra (dark-room) retinoscopy is non-cycloplegic. What must you do to the gross finding?',
          wrong: 'Nothing — read it directly',
          correct: 'Subtract 1.25 D from the gross to convert to the manifest refraction.',
          why: 'Mohindra is done in total darkness at 50 cm; the fixed 1.25 D accounts for the dark-focus (tonic) accommodation. Forgetting it leaves the child over-plussed. (Standard static retinoscopy: subtract your working-distance value instead, e.g. −2.00 D at 50 cm.)',
        },
        {
          kind: 'table' as const,
          title: 'When to prescribe (children over 12-18 months)',
          headers: ['Refractive error', 'Threshold to prescribe'],
          rows: [
            ['Hyperopia', '> +3.50 D any meridian (> +2.00 D from age 4)'],
            ['Astigmatism (persistent)', '> 1.50 D'],
            ['Anisometropia (persistent)', '> 1.00 D'],
            ['Myopia', 'Any amount'],
          ],
          notes: 'Give PARTIAL correction of hyperopia at first, but correct anisometropia FULLY in both eyes. Reassess every 4 weeks during active amblyopia therapy.',
        },
      ],
    },
    {
      id: 'peds-mnemonics-redflags',
      title: 'Mnemonics & Red Flags',
      icon: '🚩',
      items: [
        {
          kind: 'mnemonic' as const,
          term: 'Development milestones',
          device: '"Straight by 3-4 mo, 20/50 at 1 yr, 20/20 by 3 yr"',
          breakdown: 'Before 3-4 months a wandering eye can be normal; after that it is strabismus until proven otherwise. Acuity reaches adult 20/20 at age 3, not at 1 year.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'Why pediatric care is a race against time',
          device: 'Window: peak 0-3, treatable to 7-8, closing by 12',
          breakdown: 'The visual cortex wires itself from the images it receives. A blurred or suppressed eye during the window → amblyopia. The same problem caught at 3 is reversible; at 10 it often is not.',
        },
        {
          kind: 'trap' as const,
          question: 'A white pupil (leukocoria) in an infant is usually a harmless variant. True or False?',
          wrong: 'True — it is usually just a reflection off the retina',
          correct: 'False — leukocoria is retinoblastoma until proven otherwise and needs urgent referral (also cataract, ROP, Coats disease).',
          why: 'Retinoblastoma is the most common intraocular malignancy of childhood and is life-threatening. A white reflex is never dismissed.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Name the infant ocular red flags that warrant urgent referral.',
          answer: 'Leukocoria (retinoblastoma); any constant deviation after 4 months; nystagmus; photophobia with a cloudy/enlarged cornea (congenital glaucoma / buphthalmos); persistent excessive tearing (blocked nasolacrimal duct).',
        },
      ],
    },
  ],
}
