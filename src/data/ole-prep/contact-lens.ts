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
  ],
}
