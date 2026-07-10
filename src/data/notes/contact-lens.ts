import { NotesData } from '@/lib/notes-types'

export const contactLensNotes: NotesData = {
  subject: 'Contact Lens',
  slug: 'contact-lens',
  sections: [
    {
      id: 'foundations',
      title: 'Foundations, History and Classification',
      blocks: [
        {
          kind: 'text',
          content: 'A contact lens is a thin medical device placed directly on the ocular surface to correct vision, alter appearance (cosmetic), or treat disease (therapeutic). Because it sits on a metabolically active, avascular cornea that depends on atmospheric oxygen, oxygen performance and fit dominate contact-lens practice.',
        },
        {
          kind: 'sub',
          title: 'Historical Milestones',
          blocks: [
            {
              kind: 'table',
              headers: ['Who / Year', 'Contribution'],
              rows: [
                ['Leonardo da Vinci (1508)', 'First described the concept of a lens in contact with the eye'],
                ['A. E. Fick (1888)', 'First contact lens intended to correct vision (glass scleral)'],
                ['Kevin Tuohy (1947)', 'First plastic corneal lens, made from PMMA'],
                ['Otto Wichterle', 'Developed HEMA, the first soft contact lens material'],
                ['1971', 'First soft lens received FDA approval'],
                ['1979 / 1987 / 1995', 'First RGP lens / first disposable / first daily disposable'],
                ['1999-2002', 'Silicone hydrogel introduced and marketed (high oxygen, dry-eye tolerant)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Classification',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'By material: hard (non-gas-permeable PMMA vs gas-permeable RGP) and soft (conventional vs disposable)',
                'By mode of use: daily wear (disposable or planned replacement) vs extended wear (continuous or flexible)',
                'By design: monocurve (obsolete), bicurve (most common), tricurve (ortho-K, irregular cornea), aspheric (steeper center, flatter periphery to follow the cornea)',
                'By size: corneal (<12 mm, cornea bears the weight), semi-corneal / sclero-corneal (12-16 mm, shared), scleral (>~18 mm, sclera bears the weight, no corneal touch; mini-scleral <18 mm)',
                'By purpose: optical (spherical, toric, presbyopic), therapeutic (bandage, ortho-K), cosmetic (tinted, prosthetic)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lens Types by Correction',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Spherical: myopia, hyperopia, aphakia, and up to about -0.75 D of astigmatism; range about -20 to +20 D',
                'Toric: significant astigmatism (see the toric section)',
                'Presbyopic: monovision (one eye distance, one near); alternating vs simultaneous bifocals; multifocal center-near, center-distance, or modified monovision',
                'Tinted: visibility (handling) tints vs opaque colour-change lenses vs prosthetic',
                'Bandage (therapeutic): protects the cornea and promotes epithelial healing; can act as a drug reservoir (longer contact time than drops)',
                'Ortho-K: gas-permeable lenses worn overnight that temporarily reshape the cornea to reduce myopia; a leading myopia-control method',
                'Hybrid: rigid gas-permeable centre with a soft/silicone-hydrogel skirt, useful in keratoconus intolerant of RGP',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'terminology',
      title: 'Lens Anatomy and Terminology',
      blocks: [
        {
          kind: 'diagram',
          id: 'cl-anatomy',
        },
        {
          kind: 'sub',
          title: 'Key Parameters',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Meaning', 'Typical values'],
              rows: [
                ['Base Curve (BC) / BOZR', 'Radius of curvature of the back optic zone; must conform to the cornea', 'SCL median ~8.4-8.6 mm'],
                ['Optic Zone (OZ)', 'Posterior central usable optical portion; must exceed pupil diameter', 'SCL 7-12 mm, RGP 7-9 mm'],
                ['Total Diameter (TD)', 'Maximum external dimension of the lens', 'SCL 13-16 mm, RGP 8-20 mm'],
                ['Peripheral Curve (PPCR)', 'Flatter than the central curve; gives edge lift, stability, and tear exchange', 'Wider PCW = more comfort'],
                ['Sagittal depth (sag)', 'Depth from the plane of the lens edges to the back-surface center; the MAIN determinant of fit', 'Set by base curve + diameter'],
                ['Central / Edge thickness', 'Affects oxygen transmissibility and handling', 'SCL CT 0.035-0.2 mm'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Sag is the master variable of fit: a deeper sag fits tighter, a shallower sag fits looser. Sag increases with a STEEPER base curve (lower BOZR number) and with a LARGER diameter. Steeper front surface = heavier lens and more decentration.',
            },
          ],
        },
      ],
    },
    {
      id: 'materials',
      title: 'Materials and Oxygen Performance',
      blocks: [
        {
          kind: 'text',
          content: 'The cornea is avascular and metabolically active (anterior epithelium regenerates; endothelium pumps water out of the stroma). A lens is a barrier to atmospheric oxygen, so oxygen metrics decide clinical safety. Chronic hypoxia causes central corneal clouding, striae, microcysts, edema, and neovascularization.',
        },
        {
          kind: 'sub',
          title: 'Oxygen Metrics',
          blocks: [
            {
              kind: 'table',
              headers: ['Metric', 'Meaning'],
              rows: [
                ['Dk (permeability)', 'Property of the material: D = diffusion coefficient, k = solubility. Low <30, medium 30-60, high >60'],
                ['Dk/t (transmissibility)', 'How much oxygen passes through a lens of thickness t. Thinner lens = higher Dk/t. Daily wear >~25, overnight wear >~87'],
                ['EOP (equivalent oxygen performance)', 'Oxygen flux compared with atmospheric levels; minimum ~25 for daily wear'],
                ['Corneal swelling', 'The most valid real-life indicator: percent increase in corneal thickness'],
              ],
            },
            {
              kind: 'pearl',
              content: 'The thicker the lens, the LOWER the oxygen transmissibility (especially in hydrogels). High-water lenses have high permeability but dehydrate on the eye (pervaporation) and pull water FROM the cornea, so they are poor for dry eye. Silicone hydrogel gives high oxygen and tolerates mild-to-moderate dry eye because silicone limits evaporation.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Material Properties',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Tensile properties: tensile strength (force to break), modulus of elasticity (flexibility; LOW modulus = more flexible, follows the cornea), coefficient of elongation (stretch before breaking), tear strength',
                'Refractive index: as water content rises, index falls. Higher index = thinner lens (better oxygen and comfort) but poorer optical quality; lower index = thicker with better optics. Balance is the goal',
                'Wettability (RGP): tested by the wetting angle; a higher wetting angle means a LESS wettable surface. Hydrophilic (soft) materials have a zero wetting angle; silicone RGPs are hydrophobic and often plasma-treated',
                'Ideal material: meets the corneal oxygen requirement, physiologically inert, wets well in vivo, resists deposits, dimensionally stable, durable, optically clear, easy to care for',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Rigid and Soft Materials',
          blocks: [
            {
              kind: 'table',
              headers: ['Material', 'Notes'],
              rows: [
                ['PMMA', 'Original hard lens; excellent optics but almost zero oxygen permeability; now only trial lenses; causes "spectacle blur"'],
                ['Cellulose acetate butyrate (CAB)', 'Early gas-permeable; low Dk (4-8); warps; obsolete'],
                ['Silicone acrylate', 'Siloxane + PMMA; RGP Dk 12-60; negative charge; protein-prone; scratches'],
                ['Fluoro-silicone acrylate (FSA)', 'Fluorine added; Dk 40-100; more wettable than silicone acrylate; the common modern RGP'],
                ['PHEMA (hydrogel)', 'Original soft material, ~38% water; variants add PVP, MA, MMA, GMA, PVA'],
                ['Silicone hydrogel', 'High oxygen; predominant soft material; early versions had high modulus (stiff) and GPC risk'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Spectacle blur: after removing PMMA/rigid lenses, glasses of the same power look blurry for ~15-20 minutes, so do not refract a rigid-lens wearer immediately (wait 30+ minutes; stop rigid lenses ~3 weeks before LASIK).',
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'cl-fda-groups',
        },
        {
          kind: 'sub',
          title: 'Nomenclature and FDA Groups',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Naming: hydrophilic (soft, water >=10%) materials get "-filcon" names; hydrophobic (rigid, water <10%) get "-focon" names',
                'FDA soft groups: Group 1 = low water / non-ionic; Group 2 = high water / non-ionic; Group 3 = low water / ionic; Group 4 = high water / ionic',
                'Ionic materials are charged, more sensitive to pH/osmolality and care systems, and take up MORE protein; high water also takes up more protein than low water',
                'Manufacture: spin-casting (polymer spun in a mold), lathe cutting (polymer rod cut), cast molding (polymer pressed between two molds)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'optics',
      title: 'Contact Lens Optics and Formulas',
      blocks: [
        {
          kind: 'text',
          content: 'Because a contact lens is thick relative to its short radii, its power depends on surface powers, index, and thickness. Correcting spectacle powers for the zero vertex distance of a contact lens is a core calculation.',
        },
        {
          kind: 'sub',
          title: 'Power Formulas',
          blocks: [
            {
              kind: 'table',
              headers: ['Quantity', 'Formula'],
              rows: [
                ['Surface power', 'D = (n - 1) / r  (r in meters)'],
                ['Nominal power', 'Dn = D1 + D2'],
                ['Equivalent power', 'Deq = D1 + D2 - (t/n)(D1 x D2)'],
                ['Back vertex (effective) power', 'Dv = Dn + (t/n)(D1)²'],
                ['Front vertex (neutralizing) power', 'Dfv = Dn + (t/n)(D2)²'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Correcting for Vertex Distance and Spherical Equivalent',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Vertex correction: D(CL) = D(spec) / [1 - d x D(spec)], where d is the vertex distance in meters',
                'Moving correction toward the eye: a MINUS lens needs LESS minus at the cornea; a PLUS lens needs MORE plus (compensation matters above about 4 D)',
                'A spherical lens may be prescribed when: refraction is essentially spherical, cylinder is less than 1.00 D, and the sphere-to-cylinder ratio is at least 4:1',
                'Spherical equivalent = sphere + 1/2 cylinder',
              ],
            },
            {
              kind: 'pearl',
              content: 'Worked idea: a -4.75 D spectacle lens at 13 mm becomes about -4.47 D at the cornea (weaker minus); a +6.25 D lens becomes about +6.80 D (stronger plus). Always convert high spectacle powers before ordering.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Magnification, Accommodation, Convergence',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Contact lens magnification CLM = 1 - d x D(spec). Example at d = 14 mm: +10 D gives 0.86 (minified), -10 D gives 1.14 (magnified)',
                'So with contact lenses hyperopes see a SMALLER image and myopes a LARGER image than with glasses; the CL image is more natural and near retinal-image size',
                'Refractive ametropia is best corrected with contact lenses; axial ametropia is often better with spectacles (Knapp\'s idea). If K readings mirror the ametropia, the cause is refractive',
                'Accommodation/convergence: a myope switched to contact lenses must accommodate and converge MORE (may precipitate presbyopia); a hyperope must accommodate/converge LESS (may postpone a near add)',
                'Optical advantages of contact lenses: no oblique astigmatism, no distortion, no chromatic aberration, no field-of-view limit, no frame diplopia. Disadvantages: decentration ghosting, toric rotation over-refraction, movement disturbances',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'preliminary-tears',
      title: 'Preliminary Examination and Tear Assessment',
      blocks: [
        {
          kind: 'text',
          content: 'Before fitting, assess ocular health, measure ocular dimensions, evaluate the tears, and take a spectacle refraction. A baseline slit-lamp record lets you track lens-induced changes over time.',
        },
        {
          kind: 'sub',
          title: 'Measurements',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Corneal curvature: central and peripheral keratometry, corneal topography, corneal-vs-internal astigmatism, sphere-to-cylinder ratio (spherical vs toric decision)',
                'Cornea and pupil: HVID and VVID guide lens diameter; pupil size in bright and dim light sets the optic-zone diameter (OZ must exceed the pupil, even dilated)',
                'Lids: palpebral aperture, lid tension, and blink rate (average about 24/min, range 10-34). A tight upper lid can pop an RGP out; a loose lid lets it ride low',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Tear Assessment',
          blocks: [
            {
              kind: 'table',
              headers: ['Test', 'What it assesses'],
              rows: [
                ['Tear meniscus / prism height', 'Tear VOLUME; the contact-lens gold standard (normal is a fraction of a mm)'],
                ['Schirmer test', 'Tear volume; test 1 without anesthesia, test 2 with anesthesia; strip placed 5 mm from the lateral canthus'],
                ['Tear break-up time (TBUT)', 'Tear QUALITY / stability; uses fluorescein (invasive)'],
                ['Osmolality', 'Salt concentration; high osmolality indicates dry eye (average ~302 mOsm/kg)'],
                ['Jones test', 'Patency of the lacrimal drainage system'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Tear film pH is slightly alkaline (~7.4). Place the Schirmer strip toward the lateral (temporal) canthus so it does not touch the sensitive cornea and trigger reflex tearing, which would falsely raise the reading.',
            },
          ],
        },
      ],
    },
    {
      id: 'fitting',
      title: 'Fitting and Fluorescein Assessment',
      blocks: [
        {
          kind: 'text',
          content: 'Fit is governed mainly by the relationship between the sagittal heights of the lens and the eye. You alter fit by changing base curve or diameter (the cornea, refraction, and lids are the fixed constants).',
        },
        {
          kind: 'sub',
          title: 'Soft Lens Fitting Guidelines',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Total diameter = HVID + 2.0 mm (low water) or + 2.5 mm (high water); add ~0.5 mm for high-water lenses to allow on-eye shrinkage',
                'BOZR: add about 0.7 mm or more to the flattest K for thicker/low-water lenses; 0.3-0.6 mm for thin/high-water lenses; typical BOZR range 7.9-9.3 mm',
                'Rule of thumb: a 0.5 mm change in TD is offset by a 0.3 mm change in BOZR (same direction)',
                'Good fit: full corneal coverage, good centration, and about 0.3-0.5 mm of movement on blink',
                'Tight/steep fit: little or no movement, good centration but bound; Loose/flat fit: excessive movement, poor centration, discomfort',
                'To tighten a loose lens: steeper base curve OR larger diameter. To loosen a tight lens: flatter base curve OR smaller diameter',
              ],
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'cl-fluorescein',
        },
        {
          kind: 'sub',
          title: 'RGP Fitting and the Tear Lens',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Trial powers: about -3.00 D (low minus) and -6.00 D (high minus); +2.00 and +5.00 D for plus; plus designs ride low (heavier center)',
                'Initial BOZR is about +/- 0.10 mm of the flattest corneal radius; a 0.1 mm change in BOZR is worth about 0.50 D of tear-lens power',
                'Fluorescein (dark = lens bearing/touch, bright green = tear pooling): flat fit shows central bearing with edge pooling; steep fit shows central pooling; aligned fit shows an even thin film',
                'Tear lens rule: a FLAT/loose lens produces a MINUS tear lens; a STEEP/tight lens produces a PLUS tear lens; an ALIGNED lens gives a PLANO tear lens',
                'Tear lens = CL prescription - (trial-lens BVP + over-refraction), so CL prescription = trial BVP + over-refraction + tear lens',
              ],
            },
            {
              kind: 'pearl',
              content: 'Let the lens settle 20-30 minutes before assessing, and do the over-refraction before the fluorescein assessment: the over-refraction predicts whether the fit is flat, steep, or aligned and lets you jump to the right base curve rather than trialing many curves. High-riding = tight lid; low-riding = loose lid.',
            },
          ],
        },
      ],
    },
    {
      id: 'toric-presbyopia',
      title: 'Toric Lenses and Presbyopia',
      blocks: [
        {
          kind: 'text',
          content: 'Toric lenses carry different powers in two perpendicular meridians and must be rotationally stabilized so the cylinder axis stays put. Presbyopic contact-lens options trade off distance and near clarity in different ways.',
        },
        {
          kind: 'sub',
          title: 'Toric Designs and Stabilization',
          blocks: [
            {
              kind: 'table',
              headers: ['Toric type', 'Astigmatism source'],
              rows: [
                ['Front-surface toric (spherical back)', 'Residual (lenticular) astigmatism'],
                ['Back-surface toric (spherical front)', 'Corneal astigmatism'],
                ['Bitoric', 'Both corneal and residual'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Stabilization methods: prism ballast (1-1.5 prism base-down; reduces oxygen, can cause lid discomfort), truncation, peri-ballast, double slab-off (thin zones superiorly and inferiorly, symmetrical, thinner), reverse prism',
                'Reference marks show orientation only; they do NOT mark the axis. Average lens rotation is about 5-10 degrees nasal, with the upper lid the dominant stabilizer',
                'Fit assessment: good fit returns quickly to axis if mislocated; a loose fit rotates unstably; the LARS rule (Left Add, Right Subtract) adjusts for measured rotation',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Presbyopic Correction',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Monovision: dominant eye for distance, non-dominant for near; simple but reduces stereopsis',
                'Bifocal: alternating (distance top, near bottom, translating) vs simultaneous (both powers presented together)',
                'Multifocal designs: center-near, center-distance, and modified monovision (balanced design)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'care-complications',
      title: 'Lens Care and Complications',
      blocks: [
        {
          kind: 'text',
          content: 'Care solutions must clean, disinfect, and remain physiologically compatible with the tear film. Non-compliance and hypoxia drive most contact-lens complications.',
        },
        {
          kind: 'sub',
          title: 'Solution Characteristics',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'pH: tear film averages 7.4; contact-lens solutions range 6.5-8.0. A large pH mismatch can burn the surface (an alkaline burn is the ocular emergency)',
                'Buffer systems resist pH change and use an acid plus its base: borate (boric acid / sodium borate), citrate, phosphate',
                'Osmolality: average tear osmolality ~302 mOsm/kg. Tonicity: isotonic = 0.9% NaCl. A hypotonic solution makes a soft lens gain water and expand; a hypertonic solution makes it lose water and shrink',
                'Viscosity-enhancing agents thicken solutions to increase contact time (daily cleaners, rewetting drops, RGP wetting solutions)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Disinfection and Preservatives',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Disinfection uses chemical agents (alcohol, hydrogen peroxide); sterilization uses physical means (heat, UV, autoclave, boiling)',
                'Bacteriostatic preservatives: thimerosal (contains toxic mercury), benzalkonium chloride (BAK; weak against Pseudomonas), chlorhexidine, sorbic acid + EDTA, Dymed, Polyquad',
                'Hydrogen peroxide systems disinfect well but MUST be neutralized before wear (un-neutralized peroxide is toxic); once neutralized it becomes saline',
                'Surfactant cleaners lift loosely bound deposits; enzymatic cleaners break protein bonds (mostly for conventional lenses)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Common Complications',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Hypoxia: central corneal clouding, striae, microcysts, epithelial/stromal thinning, and neovascularization; long-term, corneal distortion and endothelial change',
                'Corneal neovascularization: vessels grow to supply an oxygen-starved cornea (e.g., overwear or stacked lenses); manage with a higher-Dk lens and reduced wear',
                'Giant papillary conjunctivitis (GPC): papillae on the upper tarsus from lens deposits and mechanical irritation',
                'Microbial keratitis: the most serious complication (Pseudomonas, Acanthamoeba); linked to overnight wear, poor hygiene, and water exposure',
              ],
            },
            {
              kind: 'pearl',
              content: 'The most common thread across complications is oxygen and hygiene. Silicone hydrogel and daily disposables reduce hypoxic and infective risk; never top a coloured lens over a clear lens (stacked lenses starve the central cornea of oxygen).',
            },
          ],
        },
      ],
    },
  ],
}
