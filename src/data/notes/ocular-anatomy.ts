import { NotesData } from '@/lib/notes-types'

export const ocularAnatomyNotes: NotesData = {
  subject: 'Ocular Anatomy',
  slug: 'ocular-anatomy',
  sections: [
    {
      id: 'primordia',
      title: 'Primordia of the Eye',
      blocks: [
        {
          kind: 'text',
          content: 'Ocular structures arise from three embryonic germ layers: ectoderm, mesoderm, and mixed origin.',
        },
        {
          kind: 'sub',
          title: 'I. Ectoderm',
          blocks: [
            {
              kind: 'sub',
              title: 'A. Neural Ectoderm',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Retina',
                    'Optic Nerve',
                    'Dilator Pupillae',
                    'Sphincter Pupillae',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'B. Surface Ectoderm',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Crystalline Lens',
                    'Lacrimal Apparatus',
                    'Meibomian/Tarsal Glands',
                    'Sebaceous Glands of Zeis',
                    'Sweat Glands of Moll',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'C. Neural Crest',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Trabecular Meshwork',
                    'Bony Orbit',
                    'Optic Nerve Meninges',
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'II. Mesoderm',
          blocks: [
            {
              kind: 'bullets',
              items: [
                "Tenon's Capsule / Bulbar Fascia",
                'Extraocular Muscles',
                'Ciliary Muscle',
                'Vitreous',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'III. Mixed (Zonular Fibers)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Zonular (Zinn) Fibers / Suspensory Ligament of the Lens',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content: 'Memory tip: Neural ectoderm = retina + optic nerve + pupil muscles. Surface ectoderm = lens + glands. Neural crest = trabecular meshwork + orbit bones. Mesoderm = muscles + Tenon\'s capsule.',
        },
      ],
    },
    {
      id: 'bony-orbit',
      title: 'Bony Orbit',
      blocks: [
        {
          kind: 'text',
          content: 'The bony orbit is a cavity of the skull into which the eye rests, located on either side of the nose at midsagittal between the cranium and bones of the face. It is roughly a quadrilateral pyramid (base = orbital margins, apex = optic foramen). Measures 40 mm in height, width, and depth with a volume of 29–30 mL.',
        },
        {
          kind: 'sub',
          title: 'Bones of the Orbit',
          blocks: [
            {
              kind: 'sub',
              title: 'Paired Bones (4)',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Maxillary bone — supports the upper teeth',
                    'Palatine bone — forms the hard palate',
                    'Zygomatic bone — quadrilateral bone on temporal side',
                    'Lacrimal bone — quadrilateral bone on nasal side',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Unpaired Bones (3)',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Frontal bone',
                    'Ethmoid bone — cubical bone along nasal side',
                    'Sphenoid bone — wing-shaped bone',
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Walls of the Orbit',
          blocks: [
            {
              kind: 'table',
              headers: ['Wall', 'Shape', 'Bones', 'Key Structure'],
              rows: [
                ['Roof', 'Triangular', 'Frontal bone + lesser wing of sphenoid', 'Fossa for lacrimal gland; Trochlea (pulley for SO); Fronto-sphenoidal suture'],
                ['Medial Wall', 'Quadrilateral (thinnest)', 'Sphenoid + Maxilla + OS planum of ethmoid (lamina papyracea) + Lacrimal bone', 'Fossa for lacrimal sac'],
                ['Floor', 'Triangular', 'Maxilla + Palate + Zygomatic', 'Maxillary antrum/sinus; Enophthalmos if fractured'],
                ['Lateral/Outer Wall', 'Triangular (thickest & strongest)', 'Greater wing of sphenoid + Zygomatic bone', 'Lateral orbital tubercle (11mm from fronto-zygomatic suture); attachment for check ligament LR, Ligament of Lockwood, lateral palpebral ligament, aponeurosis of LPS'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Openings/Apertures of the Orbit',
          blocks: [
            {
              kind: 'table',
              headers: ['Opening', 'Location', 'Structures Passing Through'],
              rows: [
                ['Optic foramen & canal', 'Lesser wing of sphenoid; measures 4–10 mm', 'CN #2 (optic nerve), Ophthalmic artery, Sympathetic nerve'],
                ['Superior Orbital Fissure (SOF)', 'Medial to eye, lateral to optic foramen; divides sphenoid into greater and lesser wing', 'CN #3, CN #4, CN #5 (ophthalmic division — frontal, lacrimal, nasociliary), CN #6, Superior ophthalmic vein'],
                ['Inferior Orbital Fissure (IOF)', 'Below the SOF', 'CN #5 maxillary division (infraorbital nerve → lower eyelid, cheek, upper lips, upper teeth), Infraorbital artery, Inferior ophthalmic vein, Sympathetic nerve'],
                ['Anterior & Posterior Ethmoidal Foramen', 'Fronto-ethmoidal suture', 'Ethmoidal nerves'],
                ['Nasolacrimal Canal', 'Extends from lacrimal fossa to inferior meatus of nose', 'Nasolacrimal duct'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'orbital-fascia',
      title: 'Orbital Fascia & Surgical Procedures',
      blocks: [
        {
          kind: 'sub',
          title: 'Orbital Fascia',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Periorbita — periosteum of orbit derived from dura mater of optic nerve meninges, loosely adherent to orbit',
                "Orbital Septum/Palpebral Fascia — extension of periosteum from orbital margins to orbicularis oculi pars palpebralis; fuses with LPS aponeurosis at upper eyelids; separates eyelids from orbital contents and prevents orbital fat herniation",
                "Tenon's Capsule/Bulbar Fascia — extends from entrance of optic nerve to limbus; thickens at lower portion with IO and IR fascia to form Ligament of Lockwood (suspensory ligament of the eyeball)",
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Common Surgical Procedures',
          blocks: [
            {
              kind: 'table',
              headers: ['Procedure', 'What is Removed', 'Key Indications'],
              rows: [
                ['Exenteration', 'Entire orbital contents including eyelids, adnexa, and part of bony orbit', 'Large orbital tumors; orbital extension of intraocular tumors'],
                ['Evisceration', 'Contents of eye including cornea, with sclera and EOM intact', 'Endophthalmitis unresponsive to antibiotics; cosmesis in blind eye'],
                ['Enucleation', 'Entire eyeball only, preserving other orbital structures', 'Endophthalmitis unresponsive to ABx; cosmesis; painful blind eye; malignant intraocular tumors; ocular trauma (to avoid sympathetic ophthalmia); phthisis; congenital anophthalmia'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Endophthalmitis = purulent inflammation of intraocular fluids (vitreous & aqueous) usually due to infection.',
            },
          ],
        },
      ],
    },
    {
      id: 'eyelids',
      title: 'Eyelids (Palpebrae)',
      blocks: [
        {
          kind: 'text',
          content: 'Two thin movable curtains located in front of the eyeball. Measure 2 mm thick and 30 mm long. Divided by horizontal furrows into orbital portion and tarsal (palpebral) portion.',
        },
        {
          kind: 'sub',
          title: 'Upper vs Lower Eyelid Measurements',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Upper Eyelid', 'Lower Eyelid'],
              rows: [
                ['Height', '11 mm', '5 mm'],
                ['Width', '25–30 mm', '25–30 mm'],
                ['# Tarsal Glands', '30–40', '20–30'],
                ['# Eyelashes', '150', '75'],
                ['Direction of Cilia', 'Outward, upward', 'Outward, downward'],
                ['Horizontal Furrow', 'More distinct; formed by LPS tendon insertion', 'Less distinct; formed by orbicularis oculi'],
                ['LPS', '(+)', '(–)'],
                ['Lid Margins', '2 mm below upper limbus', 'At level or 1 mm below lower limbus'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Palpebral Fissure',
          blocks: [
            {
              kind: 'text',
              content: 'Elliptical opening between upper and lower lids. Measures 8–11 mm or 12–15 mm in height and 27–30 mm in width. Divided into: Lateral Palpebral Fissure (60-degree angle) and Medial Palpebral Fissure (rounded).',
            },
            {
              kind: 'bullets',
              items: [
                "Dalrymple's Sign — widening of palpebral fissure caused by excessive tonus of Muller's Muscle or LPS",
                "Myokymia — fibrillary twitching of eyelids",
                "Bell's Phenomenon — associated movement of SR and orbicularis oculi causing sharp upward movement of eye upon closure of eyelids",
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lines of Defense of Eyelids',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1st Line of Defense — supercilia and cilia (average life span 3–5 months); conditions: Poliosis (white cilia), Madarosis (absence of cilia), Trichiasis (misdirection of cilia), Distichiasis (supernumerary rows)',
                '2nd Line of Defense — oily layer/secretion of glands',
                '3rd Line of Defense — motor system: LPS, Orbicularis Oculi, Muller\'s Muscle (shortest muscle)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Parts of the Medial Canthus',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Lacrimal Lake/Lacus Lacrimalis — triangular space',
                'Lacrimal Caruncle/Carunculous Lacrimalis — small pink body in lacrimal lake (formed from conjunctiva)',
                'Semilunar Fold/Plica Semilunaris — vertical fold (half-moon) of conjunctiva; rudiment/nictitating membrane (3rd eyelid of lower animals)',
                'Lacrimal Papilla — small elevation',
                'Lacrimal Puncta/Puncta Lacrimalis — small opening (0.3 mm) at apex of lacrimal papilla; opening of lacrimal canaliculi',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Histologic Layers of Eyelids',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Skin and subcutaneous tissue — thinnest skin in the body; loose areolar connective tissue devoid of fats',
                '2. Muscular Layer:',
                '   a. Orbicularis Oculi — sphincter of the eyelids; thin oval sheet of striated muscle; Pars Orbitalis (peripheral, forcible closure), Pars Palpebralis (central, involuntary blink), Pars Lacrimalis (attached to lacrimal sac — aids pumping mechanism of tears)',
                '   b. Levator Palpebrae Superioris (LPS) — involuntary striated; origin: lesser wing of sphenoid at Annulus of Zinn; insertion: proximal margins of tarsus + skin; elevates eyelids; innervated by CN#3',
                "   c. Muller's Muscle — involuntary smooth muscle; Superior: origin under surface of LPS → tarsal plate of upper eyelid; Inferior: origin from IR fascia → tarsal plate of lower eyelid; innervated by sympathetic nerve; increases tonicity of LPS",
                '3. Tarsus — dense fibrous connective tissue; skeleton of eyelids; contains Meibomian glands; Upper tarsus: 11 mm vertical diameter; Lower tarsus: 5 mm vertical diameter; Thickness: 1 mm; Length: 25–30 mm',
                '4. Conjunctiva — inner lining (described separately)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Eyelid Innervations',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'CN #3 — for LPS',
                "CN #7 — for Orbicularis Oculi",
                "Sympathetic nerve — for Muller's Muscle",
                'CN #5 — ophthalmic and maxillary divisions (sensation)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Eyelid Closure',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Wink — voluntary; pars palpebralis and pars orbitalis',
                'Blink — involuntary; pars palpebralis only; Reflex types: tactile, optic, auditory, orbicularis; Spontaneous rate: 15x/min',
                'Squeezing/Voluntary Blepharospasm — pars orbitalis, pars palpebralis, and muscles of eyebrow',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'conjunctiva',
      title: 'Conjunctiva',
      blocks: [
        {
          kind: 'text',
          content: 'Thin, transparent mucous membrane which lines the eyelids and anterior sclera.',
        },
        {
          kind: 'sub',
          title: 'Divisions',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Palpebral/Tarsal Conjunctiva — lines the eyelids; Tarsal Portion (adherent to tarsus) and Orbital Portion',
                'Bulbar Conjunctiva — covers anterior sclera; loosely adherent to sclera by episcleral connective tissue except at limbus where it is firmly adherent',
                'Fornix Conjunctiva — begins and ends at plica semilunaris & caruncle; very loose retro-tarsal folds ensuring freedom of movement of the eyeball; Superior Fornix: 10mm from limbus; Inferior Fornix: 8mm from limbus; Lateral Fornix: 14mm from limbus; NO medial fornix',
              ],
            },
            {
              kind: 'pearl',
              content: 'Chemosis = swelling of conjunctiva; greatly affects the fornix, less bulbar, and NEVER palpebral conjunctiva (firmly adherent to tarsus).',
            },
            {
              kind: 'text',
              content: 'Cul-de-sac — space 2mm deep between bulbar and palpebral conjunctiva; capacity of 20–30 µL of tears.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood & Nerve Supply',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Blood Supply: Posterior Conjunctival Artery (palpebral) + Anterior Ciliary Artery (bulbar)',
                'Lymphatic Supply: (+)',
                'Innervation: CN #5 — ophthalmic division (upper conjunctiva via frontal & lacrimal nerves); maxillary division (lower conjunctiva via infraorbital); Ciliary and Sympathetic nerves (bulbar)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Histologic Layers',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Stratified Squamous Non-Keratinized Epithelium — contains goblet cells which secrete mucin (wetting agent of precorneal tear film); goblet cells numerous at fornix, less in bulbar, ABSENT at lid margins and limbus',
                '2. Lamina Propria/Substantia Propria/Stroma — contains blood vessels, nerves, Glands of Krause & Wolfring, Mast Cells, Macrophages, Lymphocytes, Plasma Cells, PMN, Lymphoid follicles',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sclera',
      title: 'Sclera',
      blocks: [
        {
          kind: 'text',
          content: '"White of the eyeball" — dense, fibrous, collagenous structure extending from entrance of optic nerve up to the limbus; occupies 5/6 of the eyeball. Covered by Tenon\'s capsule and bulbar conjunctiva (exposed portion). Normal fluid content: 65–70%; increases to 80% or decreases to 40% → loses opacity.',
        },
        {
          kind: 'sub',
          title: 'Scleral Openings',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Anterior Scleral Foramina — at limbus; perforated by Anterior Ciliary Artery (ACA)',
                'Posterior Scleral Foramina — at entrance of optic nerve; pierced by CN#2, CRA, long & short PCA, and posterior ciliary nerves',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Sclera Measurements',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Thickness: Thickest at entrance of CN#2 (1 mm); Thinnest at intersection of recti muscles in front of equator (0.3 mm)',
                'Radius of Curvature: 12 mm',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Histologic Layers',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Episclera — outermost, vascular from ACA',
                '2. Scleral Proper or Stroma — dense irregularly arranged or interlacing layers of collagenous fibers (reason for its opacity)',
                '3. Lamina Fusca or Dark Layer — innermost; contains melanocytes',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood & Nerve Supply',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Blood: ACA + Long & Short Posterior Ciliary Artery',
                'Innervation: Long & Short Posterior Ciliary Nerves',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cornea',
      title: 'Cornea',
      blocks: [
        {
          kind: 'text',
          content: 'Main refractive (dioptric) apparatus of the eye; transparent; occupies the remaining 1/6 of the eyeball. First and most powerful lens of the optical system of the eye.',
        },
        {
          kind: 'sub',
          title: 'Measurements',
          blocks: [
            {
              kind: 'table',
              headers: ['Parameter', 'Value'],
              rows: [
                ['Radius of Curvature', '7–8.5 mm (avg 7.8 mm)'],
                ['Vertical Diameter', '10–11 mm'],
                ['Horizontal Diameter', '11–12 mm'],
                ['Central Thickness', '0.52–0.56 mm (measured by Pachymeter)'],
                ['Peripheral Thickness', '0.7–1 mm'],
                ['Index of Refraction', '1.376'],
                ['Total Refractive Power', '43 diopters'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood & Nerve Supply',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Blood: Avascular except at limbus (supplied by conjunctival artery from ACA); nourished by aqueous humor, limbal capillary, and precorneal tear film',
                'Innervation: Nasociliary nerve (branch of CN#5) — innervates whole layer of cornea EXCEPT Descemet\'s membrane and endothelium',
              ],
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'oa-corneal-layers',
        },
        {
          kind: 'sub',
          title: 'Histologic Layers of the Cornea (5+1)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Corneal Epithelium — stratified squamous non-keratinized; 5–6 layers joined by tight junctions (desmosomes); attached to Bowman\'s by hemidesmosomes; 10% of total weight; CAN regenerate. Cell types: Epithelial/Surface cells (squamous with microvilli), Polyhedral/Wing cells (middle), Columnar/Cuboidal/Basal cells (inner; rest on 60–65 nm basement membrane)',
                '2. Bowman\'s Membrane — 12 µm thick; acellular homogenous transparent hyalinized membrane; anterior condensation of corneal stroma; CANNOT regenerate; resistant to infection but less resistant to trauma and foreign bodies',
                '3. Corneal Stroma or Substantia Propria — 90% of total thickness (thickest); avascular but richly contains unmyelinated sensory (nasociliary) nerves; consists of collagen fibrils in lamellae enmeshed in MPS/glycosaminoglycans; Water: 75–80%; Solids: 20–25% (keratocytes, collagen fibrils, MPS)',
                '4. Dua\'s Layer — newly discovered; hypothetically 6–15 µm thick; located between corneal stroma and Descemet\'s membrane; strong and impervious to air; withstands up to 2 bars (200 kPa) of pressure',
                "5. Descemet's Membrane — true, very elastic and resistant membrane; prevents corneal perforation; may bulge as descemetocele; made of collagen-like materials rich with glycine and hydroxyproline; product of endothelial secretions (basement membrane); 10 µm thick; CAN regenerate",
                '6. Corneal Endothelium — single layer of mesothelial hexagonal (cuboidal) cells bathing Descemet\'s; responsible for deturgescence via Na-K+ pump (Na-K ATPase); Ouabain inhibits ATPase; damage causes permanent marked swelling and loss of transparency (Fuch\'s endothelial dystrophy)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Reasons Why Cornea is Transparent',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Avascular',
                '2. No pigment and few nuclei at corneal stroma',
                '3. Regular arrangement of fibers running parallel to corneal surface',
                '4. Non-keratinized corneal epithelium',
                '5. Collagen fibers at equal distance from each other',
                '6. Collagen fibers are small relative to wavelength of light — incident light not scattered',
                '7. Anterior surface of tears forms a regular refracting surface (tear film)',
                '8. Tight junctions of epithelial cells are impermeable to water',
                '9. Dynamic balance of ions and water in corneal stroma maintained by corneal endothelium',
                '10. Normal IOP',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Limbus (Sclero-Corneal Junction)',
          blocks: [
            {
              kind: 'text',
              content: 'Transition zone between sclera and cornea measuring 1–2 mm wide, containing the trabecular meshwork and Schlemm\'s canal.',
            },
          ],
        },
      ],
    },
    {
      id: 'uvea',
      title: 'Uvea (Vascular Coat)',
      blocks: [
        {
          kind: 'text',
          content: 'Middle coat of the eyeball — most dangerous coat. Contains three layers: Iris (outermost), Ciliary Body (most dangerous, highly vascular), and Choroid (posteriormost).',
        },
        {
          kind: 'diagram',
          id: 'oa-eye-cross-section',
        },
        {
          kind: 'sub',
          title: 'Choroid',
          blocks: [
            {
              kind: 'text',
              content: 'Thin, dark (due to melanocyte-fibroblast pigment) membrane extending from ora serrata to entrance of optic nerve where it is firmly adherent. Separated from sclera by perichoroidal space of Schwalbe containing 2 long PCA and 2 long ciliary nerves.',
            },
            {
              kind: 'table',
              headers: ['Layer', 'Contents'],
              rows: [
                ['1. Lamina Fusca/Suprachoroidea', 'Collagenous & elastic fibers; smooth muscle fibers, melanocytes, endothelial cells, long & short PCA and PCN'],
                ['2a. Haller\'s Layer', 'Large anastomosing veins'],
                ['2b. Sattler\'s Layer', 'Medium-sized anastomosing veins'],
                ['2c. Choriocapillaris (Membrane of Ruysch)', 'Wide bore capillaries — supplies RPE & photoreceptors; 65–85% of blood flow to retina'],
                ['3. Lamina Vitrea/Bruch\'s Membrane/Lamina Basalis Choroidea', 'Thin, structureless (7 µm or 1.5 µ); where RPE is firmly adherent; area of retinal detachment is between RPE and photoreceptor layer'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Choroid measurements: Posterior Pole — 0.25 mm (thickest); Anterior Pole — 0.10 mm (thinnest)',
                'Functions: Dark chamber; prevents dispersion of light; nourishes RPE and photoreceptors',
                'Blood Supply: ACA + Long & Short Posterior Ciliary Artery',
                'Innervation: Short ciliary nerve',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ciliary Body',
          blocks: [
            {
              kind: 'text',
              content: 'Most dangerous area of the eye; measures 6 mm. Attached to free border of choroid up to base of iris, extending from ora serrata to limbus or scleral spur.',
            },
            {
              kind: 'sub',
              title: 'Parts of the Ciliary Body',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Uveal Portion (adjacent to sclera): Lamina Suprachoroidea, Ciliary Muscles, Blood Vessel Layer (except choriocapillaris), Lamina Vitrea',
                    'Epithelial Portion (adjacent to posterior aqueous chamber):',
                    '  • Pars Plana or Orbiculus Ciliaris — 4 mm wide from ora serrata to pars plicata; LEAST vascular (site of surgical entry)',
                    '  • Pars Plicata or Corona Ciliaris — ciliary process, 2 mm wide; MOST vascular structure; 60–70 folds (ciliary processes) that nourish the cornea and lens (AH)',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Ciliary Muscles',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Muscles of accommodation; innervated by CN#3 (parasympathetic); most prominent in uveal portion',
                    'When contracts: draws ciliary process and choroid forward, relaxes zonule of Zinn, lens becomes more biconvex',
                    'Three types of smooth muscle fibers:',
                    '  1. Longitudinal (Brücke\'s) — outermost; originate from scleral spur; parallel to overlying sclera',
                    '  2. Radial — middle; from anterior portion of Brücke\'s running obliquely',
                    '  3. Circular (Müller\'s) — innermost; parallel to lens equator; site of attachment of zonular fibers',
                  ],
                },
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Blood Supply: ACA + Long & Short Posterior Ciliary Artery',
                'Innervation: Short ciliary nerve (parasympathetic portion — Edinger-Westphal nucleus of CN#3) → innervates ciliary muscles',
                'Histologic layers: Lamina Suprachoroidea, Ciliary Muscles, Lamina Vitrea, Ciliary Process, Ciliary Epithelium (non-pigment and pigment epithelium)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Iris',
          blocks: [
            {
              kind: 'text',
              content: 'Thin circular membrane hanging behind cornea and in front of lens; perforated at its center by an aperture (pupil) with peripheral attachment (iris root) at the ciliary body. Measures 12 mm in diameter. Color depends on amount of melanin. Iris surface divided into 2 regions by the collarette (circular ridge marking site of lesser iris circle).',
            },
            {
              kind: 'sub',
              title: 'Regions of the Iris',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Pupillary zone — centrally located from pupil to collarette; relatively flat; terminates the posterior pigment epithelium',
                    'Ciliary zone — from collarette to iris root; forms irregular atrophy (iris crypts): inner (smooth), middle (furrowed/gossamer-like), marginal (cribriform joining ciliary body)',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Smooth Muscles of Iris',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    '1. Sphincter/Constrictor Pupillae (Circular Muscles) — annular band in vascular iris stroma (pupillary zone); contraction causes constriction <2 mm (miosis); innervated by PARASYMPATHETIC portion of CN#3',
                    '2. Dilator Pupillae (Radial Muscles) — runs radially in iris stroma (ciliary zone); contraction causes dilation >5 mm (mydriasis); innervated by SYMPATHETIC nerve',
                    'Normal pupil size: 3–4 mm',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Histologic Layers of the Iris',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    '1. Anterior endothelium — outermost; made of flat hexagonal cells',
                    '2. Anterior limiting membrane — condensation of anterior iris stroma',
                    '3. Iris stroma — loose connective tissue with pigment and non-pigment cells in glycosaminoglycans/MPS; contains sphincter pupillae, iris blood vessels (GIC), nerves, dilator pupillae, pigment & non-pigment cells',
                    '4. Posterior epithelium — 2 layers of cells densely packed with melanin; anterior pigment epithelium (spindle pigment cells at ciliary zone); posterior pigment epithelium (polyhedral cells at both ciliary and pupillary zone)',
                  ],
                },
              ],
            },
            {
              kind: 'sub',
              title: 'Blood Supply & Innervation of Iris',
              blocks: [
                {
                  kind: 'bullets',
                  items: [
                    'Blood Supply: Greater iris circle/circulus iridis major — formed by union of 2 long PCA and 7 ACA',
                    'Innervation: Long ciliary nerve (CN#5), Sympathetic nerve (dilator pupillae), Parasympathetic (short ciliary nerve) of CN#3 (sphincter pupillae)',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'pupillary-reflexes',
      title: 'Pupillary Reflexes & Disorders',
      blocks: [
        {
          kind: 'sub',
          title: 'Types of Pupillary Reflexes',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Direct Light Reflex',
                '2. Indirect/Consensual Light Reflex',
                '3. Accommodation-Near Reflex — NOT a true reflex; associated reactions (synkinesis) of 3: Accommodation + Convergence + Miosis',
                '4. Trigeminal Reflex — stimulation of CN#5 (cornea, conjunctiva, face) causes miosis',
                '5. Psychic Reflex — fear causes mydriasis via sympathetic stimulation',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Small vs Large Pupil Causes',
          blocks: [
            {
              kind: 'table',
              headers: ['Small Pupil', 'Large Pupil'],
              rows: [
                ['Hyperope', 'Myope'],
                ['Geriatrics', 'Youth'],
                ['Asleep', 'Emotional or psychic reflex'],
                ['Looking at near object', 'Looking at far object'],
                ['Miotic agents', 'Mydriatic agents'],
                ['Sudden increase illumination', 'Sudden decrease illumination (dark room)'],
                ['Chloroform/ether anesthesia', 'Cocaine'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pupillary Disorders',
          blocks: [
            {
              kind: 'bullets',
              items: [
                "Anisocoria — unequal size of pupils (A. Tonic/Adie's, B. Horner's, C. Argyll-Robertson, D. Marcus-Gunn/RAPD)",
              ],
            },
            {
              kind: 'table',
              headers: ['Disorder', 'Key Features'],
              rows: [
                ["Adie's Pupil (Tonic)", 'Tonic pupil + abnormal tendon reflex; reacts VERY SLOWLY to light or accommodation; lesion at pre-ganglionic, ciliary ganglion, or post-ganglionic (CN#3) via short ciliary nerve; Hallmark: Mydriasis (non-responsive to light), Diaphoresis, Loss of deep tendon reflex; constricts with 0.125% Pilocarpine (normal pupil: 0.5–1.0%)'],
                ["Argyll Robertson (Prostitute Pupils)", '"Accommodates but does not react to light"; bilateral; failure to constrict with light but retains convergence/accommodation; caused by Treponema pallidum (tabes dorsalis/neurosyphilis); interruption in path of optic nerve to oculomotor nucleus; highly specific sign of neurosyphilis'],
                ['RAPD (Marcus-Gunn)', 'Lesion of optic nerve (before chiasm) or severe retinal disease; diagnosed by swinging-flashlight test; when light swings to affected eye: both pupils dilate (escape) because of diminished afferent response; Grade 1–4 depending on pupillary size'],
                ["Horner's Syndrome", 'Lesion at superior cervical sympathetic ganglion; Signs: Muller\'s Muscle → partial blepharoptosis (1–2 mm droop), Dilator Pupillae → miosis, Sweat Glands → facial anhidrosis; Cocaine test (5–10%): affected pupil will NOT dilate; 1% Hydroxyamphetamine distinguishes central/pre-ganglionic (dilates) from post-ganglionic (does not dilate)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Optic Nerve Lesion Effects on Pupillary Reflex',
          blocks: [
            {
              kind: 'table',
              headers: ['Reflex', 'Left Optic Nerve Lesion', 'Left Oculomotor Nerve Lesion'],
              rows: [
                ['Ipsilateral Direct', 'LOST', 'LOST'],
                ['Ipsilateral Consensual', 'INTACT', 'LOST'],
                ['Contralateral Direct', 'INTACT', 'INTACT'],
                ['Contralateral Consensual', 'LOST', 'INTACT'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'retina',
      title: 'Retina',
      blocks: [
        {
          kind: 'text',
          content: 'Thin transparent membrane extending anteriorly at ora serrata and posteriorly at optic disc. Expansion of optic nerve between the vitreous and choroid. Developed from optic cup/vesicle. Measures 0.1–0.5 mm thick.',
        },
        {
          kind: 'sub',
          title: 'Regions of the Retina',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Central Retina or Macula Lutea (Yellow Spot) — extends from fovea centralis nasally, almost to optic disc; 4.5 mm in diameter; photoreceptors mainly cones',
                'Peripheral Retina — remaining portion; photoreceptors mainly rods',
                'Ora Serrata — located 6 mm from limbus; scalloped anterior termination of sensory retina',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Neurons of the Retina',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1st neurons (Visual cells/Photoreceptors) — rods and cones',
                '2nd neurons (Modulator cells) — bipolar cells, amacrine cells, horizontal cells; Mueller\'s cells (glial/supporting)',
                '3rd neurons — Ganglion cells',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Rods vs Cones',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Rods', 'Cones'],
              rows: [
                ['Cytoplasmic Portion', 'Longer & narrower', 'Shorter & wider'],
                ['Visual Purple', 'Rhodopsin (507 nm)', 'Iodopsin (varies)'],
                ['Nucleus Location', 'Fiber/Axon', 'Neck'],
                ['Nucleolus', '(–)', '(+)'],
                ['Terminal End', 'Neuropodium', 'Cone foot'],
                ['Location', 'Peripheral Retina', 'Central Retina (Macula Lutea)'],
                ['Numbers', '130 million', '6 million'],
                ['Function', 'Dim illumination (Scotopic Vision)', 'Day illumination (Photopic Vision)'],
                ['Wavelength', '507 nm', 'Red 750 nm, Green 535 nm, Blue 440 nm'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Site of retinal detachment: between RPE and photoreceptor layer. Permanent loss of vision occurs within 24–72 hours if not repaired.',
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'oa-retinal-layers',
        },
        {
          kind: 'sub',
          title: 'Histologic Layers of the Retina (11 layers — outside in)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. RPE — single layer of brown columnar cells; outermost; firmly adherent to Bruch\'s membrane; aids in absorbing light (melanin)',
                '2. Photoreceptor (rods & cones) layer',
                '3. External Limiting Membrane — fenestrated membrane through which fibers of rods & cones pass; external amalgamated end of Mueller\'s fibers',
                '4. Outer Nuclear Layer — nucleated portions of rods & cones',
                '5. Fibers of Henle — thin layer; portion of rod & cone fibers without nucleus',
                '6. Outer Molecular/Plexiform Layer — synapse between terminal ends of rods & cones and dendrites of inner nuclear layer',
                '7. Inner Nuclear Layer — modulator cells (bipolar, horizontal, amacrine, Mueller\'s cells)',
                '8. Inner Molecular/Plexiform Layer — synapse between modulator cells & ganglion cells',
                '9. Ganglion/Transmitter Cell Layer — 5–7 layers at fovea centralis; single layer at peripheral retina',
                '10. Nerve Fiber Layer (Stratum Opticum) — non-medullated/non-myelinated axons of ganglion cells → pass lamina cribrosa → become optic nerve (CN#2); also contains CRA and choroidal veins',
                '11. Internal Limiting Membrane — internal amalgamated end of Mueller\'s fibers',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Important Retinal Structures',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Description'],
              rows: [
                ['Macula Lutea', '4.5 mm diameter; 3mm temporal and 0.8mm above fovea from optic disc; yellow due to xanthophyll (lutein + zeaxanthin); contains Foveal pit, Foveal slope, Parafovea, Perifovea'],
                ['Fovea Centralis', 'Pit/depression at center of macula; 1.5 mm (450–600 µ) in diameter; thinnest portion of retina; keenest vision; blood vessel-free reddish spot; rim (parafovea) is thickest portion of retina'],
                ['Foveola', '0.4 mm (200 µ) in diameter; capillary-free area; cones at maximum density without rods; hexagonal mosaic arrangement'],
                ['Optic Disc (Papilla/Nerve Head)', '1.5 mm in diameter; pale pink; 3mm nasally and 0.8mm above foveola; entrance of optic nerve; photoreceptors absent → PHYSIOLOGIC BLIND SPOT'],
                ['Physiologic Cup/Excavation', 'Funnel-shaped depression at center of optic disc; normal C/D ratio: 0.3'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood Supply of Retina',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Choriocapillary — supplies RPE and photoreceptors; 65–85% blood flow; ischemia >1 hr = irreparable damage',
                'Central Retinal Artery (CRA) — supplies inner sensory retina; 4 branches; 20–30% blood flow',
                'Innervation: NO sensory innervation (painless blindness)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'visual-pathways',
      title: 'Visual Pathways',
      blocks: [
        {
          kind: 'sub',
          title: 'Components of the Visual Pathway',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'Key Features', 'Lesion Effect'],
              rows: [
                ['1. Optic Nerve (CN#2)', '50 mm long; 1.1–1.3 million nerve fibers; enters orbit via optic foramen; has 4 parts: Intraocular (0.7–1.0 mm, shortest), Intraorbital (30 mm, longest, S-shaped curve), Intracanalicular (4–10 mm avg 6 mm), Intracranial (10 mm)', 'Total blindness of affected eye'],
                ['2. Optic Chiasma', 'Enveloped by pia mater only; Non-decussating (temporal/lateral) fibers; Decussating (nasal/medial) fibers', 'Crossing fibers: bitemporal hemianopsia; Uncrossed fibers: binasal hemianopsia'],
                ['3. Optic Tract', 'Posterior continuation of chiasma to LGB', 'Incongruous homonymous hemianopsia; Wernicke\'s hemianopic pupil'],
                ['4. Lateral Geniculate Body (LGB)', 'End station for visual fibers; subcortical visual center; relay station between retina and cortex; temporal fibers → layers 2,3,5; nasal fibers → layers 1,4,6', 'Congruous homonymous hemianopsia'],
                ['5. Optic Radiation/Geniculo-Calcarine Tract', 'Carries visual impulse to area striata', 'Congruous homonymous hemianopsia'],
                ['6. Area Striata (Brodmann Area 17)', 'Primary visual cortex; medial aspect of occipital lobe; White line (striae of Gennari)', 'Homonymous scotoma'],
              ],
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'oa-visual-pathway',
        },
        {
          kind: 'pearl',
          content: 'Rule: Congruent hemianopsia = lesion at/posterior to LGB. Incongruent = lesion anterior to LGB (optic tract). Bitemporal = chiasma crossing fibers. Binasal = chiasma uncrossed fibers.',
        },
        {
          kind: 'sub',
          title: 'Fiber Tracts of Optic Nerve',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Papillomacular bundle — 1/3 of total retinal fibers from macular region to optic disc',
                'Nasal bundle',
                'Supratemporal bundle',
                'Intratemporal bundle',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ophthalmoscopy Comparison',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Direct', 'Indirect'],
              rows: [
                ['Image', 'Virtual & erect', 'Real & inverted'],
                ['Field of View', '10 degrees', '37 degrees (20D lens)'],
                ['Magnification', '15x', '5x (12D)'],
                ['Viewable Fundus Area', 'Between equator & ora serrata NOT visible', 'Between equator & ora serrata visible including optic disc'],
                ['Max Resolving Power', '70 µm', '20 µm'],
                ['Working Distance', '1–2 cm', "Arm's length"],
                ['Stereopsis', 'None', 'Excellent'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'extraocular-muscles',
      title: 'Extraocular Muscles (EOM)',
      blocks: [
        {
          kind: 'text',
          content: 'Move the eye in vertical and horizontal directions and to rotate the eye. There are 6 EOMs: 4 Recti muscles (all originate from Annulus of Zinn, inserted in front of equator of sclera) and 2 Obliques (both inserted behind equator of sclera). Herring\'s Law: yoke muscles receive equal and simultaneous innervation. Sherrington\'s Law: increased innervation to agonist = decreased innervation to antagonist.',
        },
        {
          kind: 'diagram',
          id: 'oa-eom-cardinal',
        },
        {
          kind: 'sub',
          title: 'EOM Actions, Measurements & Innervation',
          blocks: [
            {
              kind: 'table',
              headers: ['EOM', 'From Insertion to Limbus', 'Primary', 'Secondary', 'Tertiary', 'Innervation'],
              rows: [
                ['Medial Rectus (strongest rectus)', '5.5 mm', 'Adduction', 'None', 'None', 'CN #3'],
                ['Lateral Rectus', '6.9 mm', 'Abduction', 'None', 'None', 'CN #6'],
                ['Superior Rectus (longest EOM excluding tendon)', '7.7 mm', 'Elevation', 'Intorsion', 'Adduction', 'CN #3'],
                ['Inferior Rectus', '6.5 mm', 'Depression', 'Extorsion', 'Adduction', 'CN #3'],
                ['Superior Oblique (longest EOM including tendon)', '7–18 mm', 'Intorsion', 'Depression', 'Abduction', 'CN #4'],
                ['Inferior Oblique (shortest EOM)', '5–14 mm', 'Extorsion', 'Elevation', 'Abduction', 'CN #3'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Agonist/Antagonist/Synergist Summary',
          blocks: [
            {
              kind: 'table',
              headers: ['Movement', 'Agonist', 'Synergists', 'Antagonists'],
              rows: [
                ['Adduction', 'MR', 'SR, IR', 'LR, SO, IO'],
                ['Abduction', 'LR', 'SO, IO', 'MR, SR, IR'],
                ['Elevation', 'SR', 'IO', 'IR, SO'],
                ['Depression', 'IR', 'SO', 'SR, IO'],
                ['Intorsion', 'SO', 'SR', 'IO, IR'],
                ['Extorsion', 'IO', 'IR', 'SO, SR'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood Supply & Special Notes',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Blood: Muscular arteries (branch of ophthalmic artery) — each rectus supplied by 2 muscular arteries EXCEPT LR (only 1 muscular artery + lacrimal artery)',
                'IO is the only EOM that does NOT form part of the muscle cone',
                'Annulus of Zinn — funnel-shaped tendinous ring; structures passing: CN#2, CN#3, CN#6, Ophthalmic artery',
                'CN#4 (trochlear) — thinnest and most slender; 2,150–3,400 fibers; innervates contralateral SO; only CN that completely decussates; enters via lateral part of SOF; longest intracranial course (75 mm)',
                'CN#6 (abducens) — shortest intracranial course; 3,600 nerve fibers; innervates ipsilateral LR; enters via medial part of SOF',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Versional Movements (Both Eyes)',
          blocks: [
            {
              kind: 'table',
              headers: ['Version', 'Right Eye', 'Left Eye'],
              rows: [
                ['Dextroversion', 'LR', 'MR'],
                ['Levoversion', 'MR', 'LR'],
                ['Supraversion', 'SR', 'SR'],
                ['Infraversion', 'IR', 'IR'],
                ['Dextroelevation', 'SR', 'IO'],
                ['Dextrodepression', 'IR', 'SO'],
                ['Levoelevation', 'IO', 'SR'],
                ['Levodepression', 'SO', 'IR'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cranial-nerves',
      title: 'Cranial Nerves (Ocular-Relevant)',
      blocks: [
        {
          kind: 'sub',
          title: 'Summary of 12 Cranial Nerves',
          blocks: [
            {
              kind: 'pearl',
              content: 'Mnemonic for CN names: "On Old Olympus\'s Towering Tops, A Fine-Vested German Viewed Some Hope." Mnemonic for type (M/S/B): "Some Say Money Matters But My Brother Says Big Brains Matter Most."',
            },
            {
              kind: 'table',
              headers: ['CN', 'Name', 'Type', 'Exits Skull Via', 'Key Function/EOM'],
              rows: [
                ['CN#1', 'Olfactory', 'Sensory', 'Ethmoid foramen', 'Smell'],
                ['CN#2', 'Optic', 'Sensory', 'Optic foramen', 'Vision; largest nerve to enter the eye'],
                ['CN#3', 'Oculomotor', 'Motor', 'Medial SOF', 'All EOM except LR & SO; LPS; sphincter pupillae; ciliary muscles; 24,000 fibers'],
                ['CN#4', 'Trochlear', 'Motor', 'Lateral SOF', 'Contralateral SO; thinnest CN; completely decussated'],
                ['CN#5', 'Trigeminal', 'Both', 'V1: SOF, V2: Foramen Rotundum, V3: Foramen Ovale', 'Largest sensory CN; facial sensation; motor to mastication; "Standing Room Only"'],
                ['CN#6', 'Abducens', 'Motor', 'Medial SOF', 'Ipsilateral LR; shortest intracranial course; 3,600 fibers'],
                ['CN#7', 'Facial', 'Both', 'Stylomastoid foramen', 'Facial expression muscles including orbicularis oculi; parasympathetic to lacrimal gland via pterygopalatine ganglion'],
                ['CN#8', 'Vestibulocochlear', 'Sensory', 'Internal acoustic meatus', 'Hearing + balance'],
                ['CN#9', 'Glossopharyngeal', 'Both', 'Jugular foramen', 'Gag reflex; taste post. 1/3 tongue'],
                ['CN#10', 'Vagus', 'Both', 'Jugular foramen', 'Longest CN; parasympathetic viscera'],
                ['CN#11', 'Spinal Accessory', 'Motor', 'Jugular foramen', 'Trapezius + SCM'],
                ['CN#12', 'Hypoglossal', 'Motor', 'Hypoglossal canal', 'Tongue movements (except palatoglossus = CN#10)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'CN#5 Trigeminal — Branches (Ocular)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'V1 Ophthalmic (pure sensory, through SOF): Nasociliary nerve (long ciliary nerves → cornea + dilator pupillae; Infratrochlear nerve → lacrimal sac, conjunctiva, eyelids); Lacrimal nerve (lateral SOF; innervates lacrimal glands + skin of lids); Frontal nerve (lateral SOF; largest branch; innervates eyelids)',
                'V2 Maxillary (through Foramen Rotundum): Infraorbital nerve → lower eyelid, cheek, upper lips, upper teeth',
                'V3 Mandibular (through Foramen Ovale): Motor to muscles of mastication + sensation jaw/face',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'CN#3 Paralysis Effects',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Unable to move eyeball upward, downward, or inward',
                'Divergent strabismus',
                'Complete blepharoptosis',
                'Cycloplegia — paralysis of accommodation',
                'Dilated pupils',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'CN#7 Facial — Ocular Relevance',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Innervates orbicularis oculi (eyelid closure)',
                'Parasympathetic to lacrimal glands via pterygopalatine ganglion',
                'Injury: Loss of sensation to face, Lagophthalmos, Bell\'s palsy, Dry mouth',
                'Clinical tests: Wrinkling forehead (frontalis), Smile (risorius), Purse lips (orbicularis oris), Close eyelid (orbicularis oculi), Corneal reflex (both CN#5 afferent + CN#7 efferent)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Autonomic Nervous System — Ocular',
          blocks: [
            {
              kind: 'table',
              headers: ['ANS', 'Origin', 'Ocular Structures Innervated'],
              rows: [
                ['Sympathetic (adrenergic)', 'T1–T3 spinal nerves → superior cervical ganglion → carotid plexus → ophthalmic division CN#5 → long ciliary nerve', 'Dilator pupillae; Ciliary muscles (inhibitory); Mueller\'s muscle; Lacrimal glands; Choroidal & conjunctival blood vessels'],
                ['Parasympathetic (cholinergic)', 'Midbrain & pons varolii (CN#2–7) → Edinger-Westphal nucleus → CN#3 → ciliary ganglion → short ciliary nerve', 'Sphincter pupillae; Ciliary muscles (excitatory); Lacrimal glands; Choroidal & conjunctival blood vessels'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ophthalmic-artery',
      title: 'Ophthalmic Artery',
      blocks: [
        {
          kind: 'text',
          content: 'First intracranial branch of internal carotid artery; lies infero-lateral to optic nerve within optic canal then crosses over or under optic nerve at orbit and runs medially.',
        },
        {
          kind: 'sub',
          title: 'Branches of the Ophthalmic Artery',
          blocks: [
            {
              kind: 'table',
              headers: ['Branch', 'Supplies'],
              rows: [
                ['Central Retinal Artery (CRA)', 'First intraorbital branch; enters optic nerve 10–12 mm behind globe; supplies inner sensory retina excluding RPE & photoreceptors; 4 branches; 20–30% of blood flow to retina'],
                ['Short PCA (6–8 vessels)', 'Pierce sclera in ring around optic nerve; enter choroid → 10–20 branches → supply choroid'],
                ['Long PCA (2 vessels)', 'Pass forward between choroid and sclera; with 7 ACA form Greater Iris Circle (circulus iridis major)'],
                ['Anterior Ciliary Artery (ACA)', 'Major blood supply to anterior uvea (iris & ciliary body); travels with recti muscles; pierces sclera → forms intramuscular circle'],
                ['Lacrimal Artery', 'Supplies lacrimal glands and partially LR muscles'],
                ['Muscular Arteries', 'Supply EOM; Lateral branch: LR, SR, SO, LPS; Medial branch: IR, MR, IO'],
                ['Supraorbital Artery', 'LPS, frontal bone & sinuses, upper eyelid, forehead & scalp'],
                ['Supratrochlear Artery', 'Forehead & scalp'],
                ['Ethmoidal Artery (Anterior)', 'Anterior & middle ethmoidal sinuses, frontal sinuses, meninges, nasal cavity & skin of nose'],
                ['Ethmoidal Artery (Posterior)', 'Posterior ethmoidal sinuses, dura of cranial fossa'],
                ['Palpebral Artery (Medial)', 'Eyelids and conjunctiva'],
                ['Nasal Artery', 'Root of nose and lacrimal sac; anastomoses with facial artery'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'high-yield-numbers',
      title: 'High-Yield Numbers & Quick Reference',
      blocks: [
        {
          kind: 'table',
          headers: ['Structure', 'Key Number/Fact'],
          rows: [
            ['Orbit volume', '29–30 mL; 40 mm in height, width, depth'],
            ['Eyeball weight', '10 grams; volume 6.5 mL'],
            ['A-P Diameter (avg)', '24 mm (range 22–27 mm)'],
            ['Vertical Diameter', '23.5 mm'],
            ['Transverse/Horizontal Diameter', '24.5 mm'],
            ['Equator of sclera', '16 mm posterior to limbus'],
            ['Circumference', '69–85 mm'],
            ['Fovea diameter', '1.5 mm (450–600 µ)'],
            ['Foveola diameter', '0.4 mm (200 µ)'],
            ['Optic disc diameter', '1.5 mm'],
            ['Macula lutea diameter', '4.5 mm'],
            ['Normal C/D ratio', '0.3'],
            ['Cornea: radius of curvature (avg)', '7.8 mm'],
            ['Cornea: total refractive power', '43 D'],
            ['Cornea: central thickness', '0.52–0.56 mm'],
            ['Cornea: index of refraction', '1.376'],
            ['Sclera: thickest (CN#2 entrance)', '1 mm'],
            ['Sclera: thinnest (recti insertion area)', '0.3 mm'],
            ['Pupil: normal size', '3–4 mm'],
            ['Miosis threshold', '<2 mm (sphincter pupillae)'],
            ['Mydriasis threshold', '>5 mm (dilator pupillae)'],
            ['Choroid: thickest (posterior pole)', '0.25 mm'],
            ['Choroid: thinnest (anterior pole)', '0.10 mm'],
            ['Palpebral fissure height', '8–11 mm or 12–15 mm'],
            ['Palpebral fissure width', '27–30 mm'],
            ['Lacrimal puncta size', '0.3 mm'],
            ['Cul-de-sac capacity', '20–30 µL'],
            ['Superior fornix depth from limbus', '10 mm'],
            ['Inferior fornix depth from limbus', '8 mm'],
            ['Rod count', '130 million'],
            ['Cone count', '6 million'],
            ["Descemet's membrane thickness", '10 µm'],
            ['Bowman\'s membrane thickness', '12 µm'],
            ['CN#3: number of nerve fibers', '24,000'],
            ['CN#4: number of nerve fibers', '2,150–3,400'],
            ['CN#6: number of nerve fibers', '3,600'],
            ['CN#2 (optic nerve) length', '50 mm or 5 cm'],
            ['Ophthalmic artery: first branch to eye', 'Central Retinal Artery (CRA)'],
          ],
        },
      ],
    },
  ],
}
