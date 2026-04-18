import { NotesData } from '@/lib/notes-types'

const notes: NotesData = {
  subject: 'Phorometry (21 Steps)',
  slug: 'phorometry',
  sections: [
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      blocks: [
        {
          kind: 'text',
          content:
            'The OEP Phorometric Test determines the power of accommodation and convergence and their relationship with each other. It uses probe bodies (lenses and prisms) to stress each system individually and measure how much capacity remains.',
        },
        { kind: 'diagram', id: 'ph-probe-bodies' },
        {
          kind: 'sub',
          title: 'Two Visual Patterns',
          blocks: [
            {
              kind: 'table',
              headers: ['Pattern', 'What It Measures', 'Probe Body'],
              rows: [
                ['Accommodative pattern', 'Ability of the eye to see clearly (focus)', 'Lenses (+/−)'],
                ['Convergence pattern', 'Ability to maintain single vision (fusion)', 'Prisms (BI/BO)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Buffer Areas',
          blocks: [
            {
              kind: 'table',
              headers: ['Pattern', 'Buffer', 'Why It Matters'],
              rows: [
                ['Convergence', 'Exophoria', 'Eyes not fully converged at rest = unused convergence capacity available as reserve'],
                ['Accommodation', 'Hyperopia', 'Uncorrected hyperope uses accommodative reserve just to see clearly at distance — less reserve for near work'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Large exophoria + low PFR (#16B) = symptom-producing binocular vision problem. The patient looks fine in a snapshot but fatigues after 30–60 minutes of near work. Uncorrected hyperopes hit presbyopic symptoms earlier for the same reason.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Standard Test Distances & Stimuli',
          blocks: [
            {
              kind: 'table',
              headers: ['Distance', 'Metric', 'Accommodation Stimulus', 'Convergence Stimulus (at 64mm PD)'],
              rows: [
                ['Far', '20 ft / 6M', '~0 D (infinity)', '~0 prism diopters'],
                ['Near', '16" / 40cm', '2.50 D', '~15 prism diopters'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'near-reflex',
      title: 'The Near Reflex (Near Triad)',
      blocks: [
        {
          kind: 'text',
          content:
            'When viewing a near object, three simultaneous responses are triggered through the same neural pathway: accommodation, convergence, and miosis. All three are driven via CN III through the Edinger-Westphal nucleus.',
        },
        { kind: 'diagram', id: 'ph-near-reflex-triad' },
        {
          kind: 'sub',
          title: 'Neuroanatomical Pathway',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Blur detected at fovea → signal to visual cortex (peristriate area 19)',
                'Area 19 → Edinger-Westphal nucleus (CN III) → three simultaneous targets:',
                '  1. Ciliary muscle (accommodation) — lens thickens',
                '  2. Medial rectus (convergence) — eyes turn inward',
                '  3. Sphincter pupillae (miosis) — pupil constricts for depth of focus',
              ],
            },
            {
              kind: 'pearl',
              content:
                'In Base-Out (BO) prism tests, blur appears BEFORE break because convergence drives accommodation through this shared pathway. The accommodation system hits its limit first, causing blur, while vergence can still maintain fusion momentarily.',
            },
          ],
        },
      ],
    },
    {
      id: 'probe-bodies-detail',
      title: 'The 4 Probe Bodies — Mechanisms',
      blocks: [
        {
          kind: 'text',
          content:
            'Understanding WHY each probe body does what it does is the key to mastering phorometry. The pattern is consistent: inhibit = object moves away = appears bigger; stimulate = object moves closer = appears smaller.',
        },
        {
          kind: 'sub',
          title: 'Convex Lens (+) — Inhibits Accommodation',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Converges light BEFORE it enters the eye',
                'Does some of the focusing work for the crystalline lens',
                'Ciliary muscle contracts LESS — zonule fibres remain somewhat taut — lens stays flat',
                'Virtual image of near object moves FARTHER away → convergence demand drops slightly',
                'Target appears BIGGER (as if it moved away)',
                'Clinical use: NRA test (#21) — adds plus lenses until blur; endpoint = NRA blur',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Concave Lens (−) — Stimulates Accommodation',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Diverges light BEFORE it enters the eye',
                'Eye interprets as if object is CLOSER than actual distance',
                'Ciliary muscle contracts MORE — lens becomes more spherical — greater power',
                'Target appears SMALLER (as if it moved closer)',
                'Clinical use: PRA test (#20) — adds minus until blur; endpoint = PRA blur (accommodation maxed out)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Base-In (BI) Prism — Inhibits Convergence',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Base toward nose → bends light OUTWARD toward temple in each eye',
                'Image lands nasally on each retina → eyes must turn OUTWARD (diverge) to fuse',
                'Medial rectus RELAXES — convergence demand decreases',
                'Because convergence and accommodation linked, accommodation may also relax slightly',
                'Target appears BIGGER and farther',
                'Clinical use: NRC (#17A) blur, NFR (#17B) break — measures how much convergence can be relaxed',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Base-Out (BO) Prism — Stimulates Convergence',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Base toward temple → bends light INWARD toward nose in each eye',
                'Image lands temporally on each retina → eyes must turn INWARD to fuse',
                'Medial rectus contracts MORE — extra convergence demand',
                'Convergence drives accommodation → ciliary muscle also contracts additionally',
                'Target appears SMALLER and closer',
                'IMPORTANT: Accommodation hits limit FIRST → blur appears before break (in PRC #16A)',
                'Clinical use: PRC (#16A) blur, PFR (#16B) break — measures positive fusional reserve',
              ],
            },
            {
              kind: 'pearl',
              content:
                'BO blur before break is the key clinical fact for BO tests. PRC (#16A) = stop at blur (accommodation exhausted). PFR (#16B) = continue to break + recovery (vergence exhausted). These are two separate measurements.',
            },
          ],
        },
      ],
    },
    {
      id: 'endpoints',
      title: 'Blur, Break & Recovery Endpoints',
      blocks: [
        { kind: 'diagram', id: 'ph-blur-break-endpoints' },
        {
          kind: 'sub',
          title: 'Phoria Measurement Method',
          blocks: [
            {
              kind: 'table',
              headers: ['Aspect', 'Detail'],
              rows: [
                ['Method used', 'Von Graefe (most common)'],
                ['Dissociating prism direction', 'OD: 12–15△ Base-In; OS: 6△ Base-Up'],
                ['Measuring prism direction', 'OD: Base-Up or Base-Down to align vertically separated images'],
                ['Lateral phoria measured by', 'Vertical dissociating prism'],
                ['Vertical phoria measured by', 'Horizontal dissociating prism'],
                ['Endpoint', 'Vertical alignment of the two dissociated targets'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'Memory trick: to measure LATERAL phoria, use VERTICAL dissociating prism (they are perpendicular to each other). To measure VERTICAL phoria, use HORIZONTAL dissociating prism.',
            },
          ],
        },
      ],
    },
    {
      id: 'far-tests',
      title: 'Far Distance Tests (#3–#12)',
      blocks: [
        {
          kind: 'text',
          content:
            'All far tests are performed at 20 ft (6M), use far PD, and typically use the habitual correction (#3) or the subjective refraction result from test #7 (#8–#12).',
        },
        {
          kind: 'table',
          headers: ['#', 'Test Name', 'Lenses Used', 'Prisms', 'Endpoint', 'Board Trap'],
          rows: [
            ['#3', 'Habitual Lateral Phoria at Far', 'HABITUAL Rx', '12–15△ BI (OD) + 6△ BU (OS)', 'Vertical alignment', '#3 = habitual; #8 = induced — most confused pair'],
            ['#8', 'Induced Lateral Phoria at Far', 'Test #7 (H/E result)', '12–15△ BI (OD) + 6△ BU (OS)', 'Vertical alignment', 'INDUCED = refraction applied before testing'],
            ['#9', 'Advergence / True Adduction (BI)', 'Test #7', 'BI prisms added OU', 'Break / Recovery', 'BI = adduction direction; tests abduction reserve'],
            ['#10', 'Convergence at Far (BO)', 'Test #7', 'BO prisms added OU', 'Blur / Break / Recovery', 'BO at far tests convergence reserve at distance'],
            ['#11', 'Abduction / Abvergence (BI)', 'Test #7', 'BI prisms added OU', 'Break / Recovery', 'Negative fusional vergence (NFV) at far'],
            ['#12', 'Vertical Phoria & Duction at Far', 'Test #7', 'BU and BD prisms', 'Break / Recovery', 'Vertical imbalance and reserve at far'],
          ],
        },
        {
          kind: 'pearl',
          content:
            'Board trap most missed: #3 uses HABITUAL correction. #8 uses TEST #7 results. This is the same distinction as #13A (habitual) vs #13B (induced) at near.',
        },
      ],
    },
    {
      id: 'near-tests',
      title: 'Near Distance Tests (#13A–#18)',
      blocks: [
        {
          kind: 'text',
          content:
            'Near tests are performed at 16" (40cm) using near PD. The A/B rule applies: A tests stop at blur or alignment; B tests continue to break and recovery.',
        },
        {
          kind: 'table',
          headers: ['#', 'Test Name', 'Key Detail', 'Endpoint'],
          rows: [
            ['#13A', 'Habitual Lateral Phoria at Near', 'Habitual correction — near equivalent of #3', 'Vertical alignment'],
            ['#13B', 'Induced Lateral Phoria at Near', 'Gross #14A lenses — near equivalent of #8', 'Vertical alignment'],
            ['#14A', 'Dissociated Cross-Cylinder Test', '3△ BD (OD) + 3△ BU (OS) — prisms PRESENT; cross-cyl at 90°; dim illumination', 'Equality (highest plus accepted)'],
            ['#14B', 'Binocular Cross-Cylinder Test', 'No prisms; both eyes fused — Gross #14A lenses', 'Equality (highest plus accepted)'],
            ['#15A', 'Induced Phoria through Unfused CC', 'Gross #14A lenses; same prism setup as #3/#8', 'Vertical alignment'],
            ['#15B', 'Induced Phoria through Fused CC', 'Gross #14B lenses', 'Vertical alignment'],
            ['#16A', 'Positive Relative Convergence (PRC)', 'BO prisms added; STOP AT BLUR ONLY', 'Blur out'],
            ['#16B', 'Positive Fusional Reserve (PFR)', 'BO prisms continued past blur', 'Break / Recovery'],
            ['#17A', 'Negative Relative Convergence (NRC)', 'BI prisms added; stop at blur only', 'Blur out'],
            ['#17B', 'Negative Fusional Reserve (NFR)', 'BI prisms continued past blur', 'Break / Recovery'],
            ['#18', 'Vertical Phoria & Duction at Near', 'BU/BD prisms; near equivalent of #12', 'Break / Recovery'],
          ],
        },
        {
          kind: 'sub',
          title: '#14A vs #14B — Critical Distinction',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', '#14A (Dissociated)', '#14B (Binocular)'],
              rows: [
                ['Prisms', '3△ BD (OD) + 3△ BU (OS) — PRESENT', 'No prisms — ABSENT'],
                ['Visual condition', 'Dissociated (eyes see separate images)', 'Fused (both eyes see together)'],
                ['Lenses preceding', 'Test #7', 'Gross #14A'],
                ['Measures', 'Lag of accommodation (dissociated)', 'Lag of accommodation (fused)'],
                ['Clinical note', 'Dim illumination used', 'Dim illumination used'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'accommodation-tests',
      title: 'Accommodation Tests (#19–#21)',
      blocks: [
        {
          kind: 'text',
          content:
            'Tests #19–#21 directly measure the accommodative system. All use lenses only. Know the lens direction for each test — this is the most common board trap in this group.',
        },
        {
          kind: 'table',
          headers: ['#', 'Test', 'Lens Direction', 'Non-presbyope', 'Presbyope', 'Endpoint'],
          rows: [
            ['#19', 'Amplitude of Accommodation (AA)', 'MINUS (non-presbyope) / PLUS (presbyope)', 'Add minus until print difficult', 'Add plus until 1st readable', 'Non-Px: difficult to read | Px: 1st readable'],
            ['#20', 'Positive Relative Accommodation (PRA)', 'MINUS lenses added', 'Same starting lenses', 'Net #14B lenses', 'Blur out (accomm. stimulated to max)'],
            ['#21', 'Negative Relative Accommodation (NRA)', 'PLUS lenses added', 'Same starting lenses', 'Net #14B lenses', 'Blur out (accomm. inhibited to max)'],
          ],
        },
        {
          kind: 'sub',
          title: 'Memory: PRA vs NRA',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'PRA (#20) = POSITIVE = MINUS lenses = STIMULATES accommodation (pushes it)',
                'NRA (#21) = NEGATIVE = PLUS lenses = INHIBITS accommodation (relaxes it)',
                'Both have the same endpoint (blur out) — only the lens direction differs',
                'PRA: "Positive is aggressive — pushes with minus"',
                'NRA: "Negative is relaxing — eases with plus"',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: '#19 AA — The Directional Trap',
          blocks: [
            {
              kind: 'table',
              headers: ['Patient Type', 'Lens Added', 'Why'],
              rows: [
                ['Non-presbyope', 'MINUS lenses', 'Has accommodation — stress it until it can\'t keep up; endpoint = print difficult'],
                ['Presbyope', 'PLUS lenses', 'Little or no accommodation — gradually reduce demand until they CAN first see clearly; endpoint = 1st readable'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'The directions are OPPOSITE between patient types in #19. Non-presbyope = minus (to blur). Presbyope = plus (to clarity). Mix these up and you will get this question wrong every time.',
            },
          ],
        },
      ],
    },
    {
      id: 'mnemonics',
      title: 'Master Mnemonics & Memory Hooks',
      blocks: [
        { kind: 'diagram', id: 'ph-21steps-map' },
        {
          kind: 'sub',
          title: 'The A/B Rule',
          blocks: [
            {
              kind: 'table',
              headers: ['Rule', 'Applies To'],
              rows: [
                ['A = stops at BLUR or ALIGNMENT (less invasive)', '#14A, #15A, #15B, #16A (PRC), #17A (NRC)'],
                ['B = continues to BREAK + RECOVERY (pushes further)', '#14B, #16B (PFR), #17B (NFR)'],
                ['Exception: #3/#13A = A but stops at alignment', 'Phoria tests, not vergence tests'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'BO vs BI at Near',
          blocks: [
            {
              kind: 'table',
              headers: ['Prism', 'Tests', 'Effect', 'Name'],
              rows: [
                ['Base-Out (BO)', '#16A and #16B', 'Stimulates convergence → POSITIVE', 'PRC and PFR'],
                ['Base-In (BI)', '#17A and #17B', 'Inhibits convergence → NEGATIVE', 'NRC and NFR'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'BO pushes eyes together (convergence) = Positive. BI pulls eyes apart (divergence) = Negative. So PRC/PFR = BO, NRC/NFR = BI.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Habitual vs Induced',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '#3 and #13A = HABITUAL (no refraction change applied)',
                '#8 and #13B = INDUCED (subjective refraction applied; tests how correction affects phoria)',
                'Memory: Habitual = 3 and 13A (the "A" pair) | Induced = 8 and 13B (the "B" pair with refraction)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Quick Reference: All 4 Probe Body Effects',
          blocks: [
            {
              kind: 'table',
              headers: ['Probe Body', 'Action', 'Object Perceived As', 'Size Change'],
              rows: [
                ['Convex (+)', 'Inhibits accommodation', 'Farther away', 'Bigger ↑'],
                ['Concave (−)', 'Stimulates accommodation', 'Closer', 'Smaller ↓'],
                ['Base-In (BI)', 'Inhibits convergence', 'Farther away', 'Bigger ↑'],
                ['Base-Out (BO)', 'Stimulates convergence', 'Closer', 'Smaller ↓'],
              ],
            },
            {
              kind: 'pearl',
              content:
                'THE ONE RULE: INHIBIT = object moves AWAY = appears BIGGER. STIMULATE = object moves CLOSER = appears SMALLER. This works for both lenses and prisms.',
            },
          ],
        },
      ],
    },
  ],
}

export default notes
