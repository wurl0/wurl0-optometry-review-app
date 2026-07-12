import { OlePrepData } from '@/lib/ole-prep-types'

export const contactLensData: OlePrepData = {
  subject: 'Contact Lens',
  slug: 'contact-lens',
  sections: [
    {
      id: 'cl-optics-formulas',
      title: 'Contact Lens Optics & Formulas',
      icon: '🧮',
      items: [
        {
          kind: 'formula' as const,
          title: 'Surface Power',
          formula: 'D = (n − 1) / r',
          variables: [
            { symbol: 'n', definition: 'refractive index of the lens material' },
            { symbol: 'r', definition: 'radius of curvature (in METERS)' },
          ],
          notes: 'Nominal power Dn = D1 + D2. Equivalent power Deq = D1 + D2 − (t/n)(D1 × D2).',
        },
        {
          kind: 'formula' as const,
          title: 'Vertex Distance Correction (Spec → CL)',
          formula: 'D(CL) = D(spec) / [1 − d × D(spec)]',
          variables: [
            { symbol: 'd', definition: 'vertex distance in meters' },
            { symbol: 'D(spec)', definition: 'spectacle refraction' },
          ],
          notes: 'A MINUS lens needs LESS minus at the cornea; a PLUS lens needs MORE plus. Matters above about 4 D. Example: −6.00 D at 12 mm → −5.60 D; +8.00 D at 12 mm → +8.85 D.',
        },
        {
          kind: 'formula' as const,
          title: 'Spherical Equivalent & 4:1 Rule',
          formula: 'SE = sphere + ½ cylinder',
          notes: 'Prescribe a spherical lens when cylinder < 1.00 D AND sphere-to-cylinder ratio ≥ 4:1. Beyond that, use a toric lens.',
        },
        {
          kind: 'formula' as const,
          title: 'Contact Lens Magnification (CLM)',
          formula: 'CLM = 1 − d × D(spec)',
          notes: 'At d = 14 mm: +10 D → 0.86 (minified), −10 D → 1.14 (magnified). So myopes see a LARGER image and hyperopes a SMALLER image with contact lenses than with glasses.',
        },
      ],
    },
    {
      id: 'cl-fitting-tearlens',
      title: 'Fitting & the Tear Lens',
      icon: '💧',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'TEAR LENS RULE (RGP)',
          content: 'FLAT / loose fit → central bearing, edge pooling → MINUS tear lens. STEEP / tight fit → central pooling → PLUS tear lens. ALIGNED → even thin film → PLANO tear lens.',
        },
        {
          kind: 'formula' as const,
          title: 'Tear Lens Relationship',
          formula: 'CL Rx = Trial BVP + Over-refraction + Tear lens',
          notes: 'Tear lens = CL Rx − (Trial BVP + Over-refraction). A 0.1 mm change in BOZR ≈ 0.50 D of tear-lens power. Do over-refraction BEFORE fluorescein to predict flat/steep/aligned.',
        },
        {
          kind: 'fact' as const,
          highlight: 'SAG GOVERNS FIT',
          content: 'Sag = f(base curve, diameter). Steeper base curve OR larger diameter → deeper sag → TIGHTER fit. Flatter base curve OR smaller diameter → shallower sag → LOOSER fit.',
        },
        {
          kind: 'table' as const,
          title: 'Fitting Guidelines',
          headers: ['Parameter', 'Rule of thumb'],
          rows: [
            ['Soft total diameter', 'HVID + 2.0 mm (low water) / + 2.5 mm (high water)'],
            ['Soft BOZR', 'Flattest K + 0.7 mm (thick/low water); + 0.3-0.6 mm (thin/high water)'],
            ['RGP initial BOZR', '± 0.10 mm of the flattest K'],
            ['RGP trial powers', '−3.00 / −6.00 D minus; +2.00 / +5.00 D plus'],
            ['Good soft movement', '~0.3-0.5 mm on blink, full coverage, centered'],
          ],
        },
        {
          kind: 'recall' as const,
          prompt: 'To LOOSEN a tight soft lens, what two changes can you order?',
          answer: 'Flatter base curve (higher BOZR number) OR smaller diameter — both reduce the sag. To tighten: steeper base curve or larger diameter. Rule: 0.5 mm TD change ≈ 0.3 mm BOZR change (same direction).',
        },
      ],
    },
    {
      id: 'cl-materials-oxygen',
      title: 'Materials & Oxygen',
      icon: '🫁',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'OXYGEN METRICS',
          content: 'Dk = material permeability (low <30, medium 30-60, high >60). Dk/t = transmissibility (thinner lens = higher). Daily wear Dk/t ≥ ~25; overnight ≥ ~87. Corneal swelling = most valid clinical indicator.',
        },
        {
          kind: 'table' as const,
          title: 'FDA Soft Lens Groups',
          headers: ['Group', 'Water', 'Charge'],
          rows: [
            ['Group 1', 'Low', 'Non-ionic'],
            ['Group 2', 'High', 'Non-ionic'],
            ['Group 3', 'Low', 'Ionic'],
            ['Group 4', 'High', 'Ionic (most protein deposits)'],
          ],
          notes: 'Ionic > non-ionic and high water > low water for protein uptake. Soft (water ≥10%) = "-filcon"; rigid (<10%) = "-focon".',
        },
        {
          kind: 'trap' as const,
          question: 'A high-water-content hydrogel lens is the best choice for a dry-eye patient because it holds more water. True or False?',
          wrong: 'True — more water content means a more hydrated, comfortable lens',
          correct: 'False — high-water lenses dehydrate on the eye (pervaporation) and draw water FROM the cornea, worsening dry eye. Silicone hydrogel or a lower-water lens is preferred.',
          why: 'Water evaporates from a high-water lens, which then absorbs tears (and corneal water) to maintain its water content. Silicone hydrogel resists evaporation and adds high oxygen.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Why must a hydrogen peroxide lens-disinfection system be neutralised before wear?',
          answer: 'Un-neutralised hydrogen peroxide is toxic to the ocular surface (burns). Once neutralised it becomes saline. Thimerosal contains mercury; BAK is weak against Pseudomonas.',
        },
      ],
    },
    {
      id: 'cl-mnemonics',
      title: 'Mnemonics & Memory Hooks',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic' as const,
          term: 'RGP tear-lens compensation',
          device: 'SAM-FAP — Steeper Add Minus, Flatter Add Plus',
          breakdown: 'A STEEP lens pools tears centrally = a PLUS tear lens, so you add MINUS to the CL power. A FLAT lens = a MINUS tear lens, so you add PLUS. The tear lens and your compensation always have opposite signs.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'Toric axis correction for lens rotation',
          device: 'LARS — Left Add, Right Subtract',
          breakdown: 'If the lens marking rotates to the patient\'s LEFT (clockwise from your view), ADD that many degrees to the ordered axis; if it rotates RIGHT, SUBTRACT. Example: axis 180, lens sits 10° left → order 190. Only the marking moves; the axis chases it back.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'Material naming (filcon vs focon)',
          device: '-filcon = soft (fluid-loving) · -focon = rigid',
          breakdown: 'Hydrophilic SOFT materials (water ≥10%) get "-filcon" names; hydrophobic RIGID materials (<10%) get "-focon". "Fil" fills with fluid.',
        },
        {
          kind: 'mnemonic' as const,
          term: 'Lens size vs corneal bearing',
          device: 'Bigger lens = less cornea touched',
          breakdown: 'Corneal (<12 mm) rests on the cornea; sclero-corneal (12-16 mm) shares the load; SCLERAL (>~18 mm) vaults over the cornea entirely onto the insensitive sclera. That is why sclerals are the comfort / keratoconus / severe-dry-eye choice — no corneal bearing.',
        },
      ],
    },
    {
      id: 'cl-toric-presbyopia',
      title: 'Toric, Presbyopia & Optical Effects',
      icon: '🎯',
      items: [
        {
          kind: 'fact' as const,
          highlight: 'TORIC STABILISATION',
          content: 'Prism ballast (1-1.5Δ base-down; reduces oxygen, can cause lid discomfort), truncation, peri-ballast, and double slab-off (thin zones top and bottom). Average rotation ~5-10° nasal, upper lid the main stabiliser. Reference marks show ORIENTATION only — they are NOT the axis.',
        },
        {
          kind: 'trap' as const,
          question: 'A −8.00 D myope switches from glasses to contact lenses. Does the retinal image get larger or smaller?',
          wrong: 'Smaller — a strong minus lens makes things look small',
          correct: 'LARGER. Minus spectacles minify; moving the correction to the eye\'s plane enlarges the image toward its natural retinal size.',
          why: 'Spectacle magnification depends on vertex distance. Minus specs minify, so contacts look bigger to a myope; plus specs magnify, so a hyperope sees a smaller, more natural image with contacts. "Myope magnifies, hyperope shrinks."',
        },
        {
          kind: 'recall' as const,
          prompt: 'Switching a myope from glasses to contact lenses changes the near demand how?',
          answer: 'The myope must accommodate and converge MORE on contacts (may precipitate presbyopia). A hyperope must accommodate/converge LESS (may postpone a near add). Contacts sit at the eye\'s own plane, removing the near-help minus specs used to give.',
        },
        {
          kind: 'recall' as const,
          prompt: 'Presbyopic contact-lens options?',
          answer: 'Monovision (dominant eye distance, non-dominant near — simple but reduces stereopsis); alternating (translating) bifocal; simultaneous bifocal; multifocal (center-near, center-distance, or modified monovision).',
        },
        {
          kind: 'trap' as const,
          question: 'Axial vs refractive ametropia — which is better corrected with contact lenses (Knapp\'s rule)?',
          wrong: 'Axial ametropia — contacts sit closer to the eye',
          correct: 'REFRACTIVE ametropia is best with contacts; AXIAL ametropia is often better with spectacles (Knapp\'s rule).',
          why: 'Knapp\'s rule minimises retinal image-size differences. If K readings mirror the ametropia, the cause is refractive (better with contacts).',
        },
      ],
    },
    {
      id: 'cl-complications-history',
      title: 'Complications, Care & History',
      icon: '⚠️',
      items: [
        {
          kind: 'trap' as const,
          question: 'What is the most sight-threatening contact-lens complication?',
          wrong: 'Giant papillary conjunctivitis (GPC)',
          correct: 'Microbial keratitis (Pseudomonas, Acanthamoeba) — it can ulcerate and perforate the cornea.',
          why: 'GPC is uncomfortable but not sight-threatening. Microbial keratitis is linked to overnight wear, poor hygiene, and water exposure; Acanthamoeba is classically from tap/well-water exposure.',
        },
        {
          kind: 'fact' as const,
          highlight: 'HYPOXIA LADDER',
          content: 'Chronic lens hypoxia: central corneal clouding → striae → microcysts → epithelial/stromal thinning → neovascularisation. Manage with a higher-Dk (silicone hydrogel) lens and reduced wear. Never stack a coloured lens over a clear one — it starves the central cornea of oxygen.',
        },
        {
          kind: 'recall' as const,
          prompt: 'What is "spectacle blur" and why does it matter clinically?',
          answer: 'After removing PMMA/rigid lenses, glasses of the same power look blurry for ~15-20 minutes (corneal warpage). So do NOT refract or take K-readings on a rigid-lens wearer immediately — wait 30+ minutes, and stop rigid lenses ~3 weeks before refractive surgery.',
        },
        {
          kind: 'table' as const,
          title: 'History milestones (high-yield)',
          headers: ['Who / Year', 'Contribution'],
          rows: [
            ['Leonardo da Vinci (1508)', 'First described the concept of a contact lens'],
            ['A. E. Fick (1888)', 'First contact lens to correct vision (glass scleral)'],
            ['Kevin Tuohy (1947)', 'First plastic corneal lens (PMMA)'],
            ['Otto Wichterle', 'Developed HEMA — the first soft lens material'],
            ['1971 / 1999-2002', 'First FDA-approved soft lens / silicone hydrogel introduced'],
          ],
        },
      ],
    },
  ],
}
