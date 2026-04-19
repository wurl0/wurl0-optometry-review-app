import { NotesData } from '@/lib/notes-types'

export const practicalMechanicalOpticsNotes: NotesData = {
  subject: 'Practical and Mechanical Optics',
  slug: 'practical-mechanical-optics',
  sections: [
    {
      id: 'lens-materials',
      title: 'Lens Materials',
      blocks: [
        {
          kind: 'text',
          content: 'Ophthalmic lenses are made from either glass or plastic materials. Each material has distinct optical and mechanical properties — refractive index, Abbe value, specific gravity, and impact resistance — that determine its clinical suitability.',
        },
        {
          kind: 'diagram',
          id: 'pmo-lens-types',
        },
        {
          kind: 'sub',
          title: 'Glass Lens Materials',
          blocks: [
            {
              kind: 'table',
              headers: ['Glass Type', 'Composition', 'Refractive Index', 'Abbe Value', 'Specific Gravity', 'Primary Use'],
              rows: [
                ['Ophthalmic Crown', '70% silica, 14-16% Na₂O, 11-13% CaO, trace KO/borax/antimony', '1.523', '58.9', '2.54', 'Standard single-vision lenses and bifocal distance portions'],
                ['Dense Flint', '45-65% lead oxide, 25-45% silica, ~10% soda/K oxide', '1.616–1.666', '38.0', '3.53', 'Bifocal segments in fused bifocals (higher RI than crown)'],
                ['Extra Dense Flint', 'Higher lead oxide content', '1.690', '30.7', '4.02', 'High-power segments'],
                ['Barium Crown', '25-40% barium oxide, balance silica/K oxide', '1.701', '31.0', '2.99', 'Segments in specific fused bifocals; barium ↑ RI without ↑ chromatic dispersion as much as lead'],
                ['Light Barium Crown', 'Lower barium content', '1.573', '57.4', '3.21', 'General ophthalmic'],
                ['Dense Barium Crown', 'Higher barium content', '1.616', '55.1', '3.36', 'General ophthalmic'],
                ['Glass High Index (GHI)', 'Titanium oxide, barium oxide, or lead oxide', '1.600', '36', '1.45', 'Cosmetically thin high-power lenses'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Desirable qualities of ophthalmic glass: (1) homogeneity — uniform chemical and physical composition; (2) correct refractive index and chromatic dispersion values; (3) freedom from color.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Plastic Lens Materials',
          blocks: [
            {
              kind: 'table',
              headers: ['Material', 'Also Known As', 'RI', 'Abbe Value', 'Specific Gravity', 'Key Feature'],
              rows: [
                ['CR-39', 'Columbia Resin 39 (Pittsburgh Plate Glass)', '1.498', '58', '1.32', 'Standard plastic; thermosetting; half weight of crown glass; most impact-resistant plastic before polycarbonate'],
                ['Polycarbonate', 'Polycarb; PC', '1.586', '30', '1.20', 'Lightest; most impact resistant overall; absorbs 100% UV up to 380nm; preferred for children/sports'],
                ['Plastic High Index (PHI)', 'Thermosetting high-index plastics', '1.597', '37', '1.34', 'Thinner and lighter; more chromatic aberration than CR-39'],
                ['PMMA', 'Perspex; Transpex; Plexiglas', '1.49', '—', '—', 'Original plastic lens; half weight of crown glass; historical'],
                ['Trivex', 'Phoenix; Triology', '1.532', '43–45', '1.11', 'Lighter than standard plastic; more rigid than polycarbonate; best for rimless frames'],
                ['Corlon (C-Lite)', 'Glass front + plastic back', '—', '—', '—', '25% thinner and 25% lighter than all-glass lenses'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Impact resistance ranking (most to least): Polycarbonate > High-Index Plastic > CR-39 > Ordinary Glass. FDA drop-ball test: 5/8-inch steel ball dropped from 50 inches onto the lens.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Material Properties Comparison Table',
          blocks: [
            {
              kind: 'table',
              headers: ['Property', 'Glass', 'CR-39', 'Polycarbonate', 'Trivex'],
              rows: [
                ['Specific Gravity', '2.54', '1.32', '1.20', '1.11'],
                ['Refractive Index', '1.523', '1.498', '1.586', '1.532'],
                ['Abbe Value', '58.9', '58', '30', '40'],
                ['Impact Resistance', 'Lowest', 'Fair', 'Highest', 'High'],
                ['UV Protection', 'No (without coating)', 'No', '100% to 380nm', 'Good'],
                ['Weight', 'Heavy', 'Medium', 'Lightest', 'Lightest overall'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Optical Properties of Lens Materials',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Index of Refraction (n) — ratio of speed of light in vacuum to speed in the medium; higher RI = thinner lens; mid-index = 1.523–1.57; high-index = ≥1.58',
                'Abbe Value (nu value) — reciprocal of dispersive power; measures ability of material to hold the spectrum together; higher Abbe = less chromatic aberration; Abbe 60 = least aberration; Abbe 30 = most aberration; standard plastic = 58; polycarbonate = 30',
                'Specific Gravity — ratio of 1 cm³ of material to 1 cm³ of water; higher SG = heavier lens; cannot accurately predict weight of finished lenses because denser materials often have higher RI',
                'Reflectance — percentage of light reflected at lens surfaces; formula: R = 100(n-1)² / (n+1)²; higher RI = more reflectance: n=1.5 → 7.8%; n=1.6 → 10.4%; n=1.7 → 12.3%; n=1.8 → 15.7%; n=1.9 → 18.3%',
                'Absorption — light reduced by lens material; follows Lambert\'s law (exponential with thickness); significant in tinted/photochromic lenses',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Glass vs Plastic Comparison',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Plastic', 'Glass'],
              rows: [
                ['Weight', 'Light', 'Heavy'],
                ['Impact resistance', 'High', 'Low'],
                ['Scratch resistance', 'Requires coating', 'Inherently scratch-resistant'],
                ['Cost', 'Costlier', 'Cheaper'],
                ['Light transmission', '2% greater', 'Less'],
                ['Aberration', 'Higher (more at periphery)', 'Lower'],
                ['Fogging', 'Lower tendency', 'Higher tendency'],
                ['Children', 'Preferred', 'Not recommended'],
                ['Coating', 'Necessary', 'Not always required'],
                ['Chromatic dispersion', 'Higher (lower Abbe)', 'Lower (higher Abbe)'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lens-power',
      title: 'Lens Power and Calculations',
      blocks: [
        {
          kind: 'text',
          content: 'The power of an ophthalmic lens can be expressed in multiple ways. Understanding the differences between nominal, back vertex, front vertex, and equivalent power is essential for dispensing and board examinations.',
        },
        {
          kind: 'sub',
          title: 'Types of Lens Power',
          blocks: [
            {
              kind: 'table',
              headers: ['Power Type', 'Definition', 'Formula', 'Clinical Use'],
              rows: [
                ['Nominal Power (Dn)', 'Sum of front and back surface powers; ignores thickness', 'Dn = D1 + D2', 'Thin lens approximation'],
                ['Equivalent Power (Deq)', 'True power; based on distance from focal points to corresponding planes; accounts for thickness', 'Deq = D1 + D2 − (t/n)(D1 × D2)', 'Theoretical calculations; thick lenses'],
                ['Back Vertex Power (BVP)', 'Reciprocal of back focal length from rear vertex; places concave side against lens stop', 'BVP = D1 + D2 + (t/n)(D1)²', 'Measured by lensometer (standard)'],
                ['Front Vertex Power (FVP)', 'Reciprocal of front focal length; neutralizing power; places convex side against lens stop', 'FVP = D1 + D2 + (t/n)(D2)²', 'Measured by lensometer (front surface measurement)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Lensometer default = BACK VERTEX POWER (concave side against lens stop). Front vertex power = convex side against lens stop. The effective power of a high-plus lens changes significantly with vertex distance — always verify at the prescribed vertex distance.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Positional (Effective) Power',
          blocks: [
            {
              kind: 'text',
              content: 'When a lens is moved closer to or farther from the eye, its effective power changes. This is critical when adjusting frames or changing vertex distance from refraction to dispensing.',
            },
            {
              kind: 'table',
              headers: ['Lens Moved', 'Plus Lens Effect', 'Minus Lens Effect'],
              rows: [
                ['Farther from eye (replacement formula: Df)', 'Power DECREASES', 'Power INCREASES'],
                ['Toward eye (replacement formula: Dt)', 'Power INCREASES', 'Power DECREASES'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Replacement formula (lens moved farther): Df = Dv / (1 + dDv)',
                'Replacement formula (lens moved toward eye): Dt = Dv / (1 − dDv)',
                'Effective power (same lens, moved farther): Df = Dv / (1 − dDv)',
                'Effective power (same lens, moved toward eye): Dt = Dv / (1 + dDv)',
                'd = distance difference in meters; Dv = original lens power',
                'Positional power answers must be rounded to nearest 0.25D; effective power calculations do not require rounding',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lens Tilt and Induced Power (Martin\'s Formula)',
          blocks: [
            {
              kind: 'text',
              content: 'Tilting a lens — pantoscopically, retroscopically, or face form — changes both the spherical power and induces cylinder. This is tested in frame adjustments and benchwork.',
            },
            {
              kind: 'bullets',
              items: [
                'Pantoscopic tilt: lens tilted about horizontal axis; bottom of lens closer to face; typical range 8–12°; affects 180° axis',
                'Retroscopic tilt: bottom of frame angled away from face; removes frame from protruding cheeks; affects 180° axis',
                'Face form (wrap): lens curves to follow face shape; positive = frame PD < patient PD; affects 90° axis',
                'For every 1° of pantoscopic tilt → lower optical center 0.5 mm (1/2 mm)',
                'Pantoscopic/retroscopic tilt → induces sphere and cylinder changes along 180°',
                'Face form tilt → induces sphere and cylinder changes along 90°',
              ],
            },
            {
              kind: 'table',
              headers: ['Formula', 'Description'],
              rows: [
                ["S' = S [1 + (sin²θ / 3)]", 'New sphere power after tilt (general formula)'],
                ["S' = S [1 + (sin²θ / 2n)]", 'New sphere power (when refractive index is given)'],
                ["C' = S' (tan θ)²", 'Induced cylinder power after tilt'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Martin\'s formula gives the induced power — no rounding required (informational only). Tilt always increases the magnitude of the spherical power. The induced cylinder axis aligns with the tilt axis (180° for pantoscopic/retroscopic; 90° for face form).',
            },
          ],
        },
      ],
    },
    {
      id: 'prisms',
      title: 'Prisms and Prismatic Effects',
      blocks: [
        {
          kind: 'text',
          content: 'Prisms deviate light toward the base. In optics, understanding how prisms combine, how bifocals create image jump and displacement, and how to correct vertical imbalance is clinically essential.',
        },
        {
          kind: 'diagram',
          id: 'pmo-prism',
        },
        {
          kind: 'sub',
          title: 'Prismatic Decentration (Prentice\'s Rule)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Prentice\'s Rule: P (prism diopters) = h (cm) × D (lens power)',
                'Decentering a lens induces prism at the line of sight — decentration (h) in centimeters × lens power (D) = prism amount',
                'Base direction: for plus lens decentered OUT → BO prism; decentered IN → BI prism',
                'Prism prescription: P = D × h, so h = P / D (cm)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Combining Prisms (Resultant Prism)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Prisms can be combined using vector addition when they act in perpendicular meridians',
                'Resultant magnitude: R = √(horizontal² + vertical²)',
                'Resultant orientation: tan θ = vertical / horizontal; then apply quadrant correction based on base directions',
                'Risley prism: two counter-rotating prisms; zero position = bases opposite; rotary prism formula: Rotary Δ = 2 × Δ × sin θ (where θ = angle of counter-rotation)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Bifocal Prism Effects',
          blocks: [
            {
              kind: 'table',
              headers: ['Concept', 'Definition', 'Formula'],
              rows: [
                ['Image Jump', 'Rapid upward image movement as gaze passes from distance portion into bifocal segment area; depends on reading add and distance from upper segment line to optical pole', 'I = h × D (h in cm, D = reading add)'],
                ['Image Displacement', 'Total prismatic effect at reading level (distance + near induced prism combined); occurs when near PD is not considered', 'ID = DIP + NIP'],
                ['DIP (Distance Induced Prism)', 'Prism from distance portion at reading point', 'DIP = Dv × h'],
                ['NIP (Near Induced Prism)', 'Prism from bifocal segment at reading point', 'NIP = R × P (R = add; P = distance from optical pole to reading point in cm)'],
              ],
            },
            {
              kind: 'table',
              headers: ['Bifocal Type', 'Distance from Upper Dividing Line to Optical Pole', 'Image Jump Notes'],
              rows: [
                ['Kryptok (KK)', '11 mm', 'Moderate image jump'],
                ['Flat Top (D-seg)', '7 mm', 'Less image jump than KK'],
                ['Ultex', '20 mm', 'Maximum image jump'],
                ['Executive', '0 mm', 'NO image jump (optical pole at segment line)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Executive bifocals have zero image jump because the optical pole is at the dividing line (h = 0). Flat top bifocals are the most cosmetically popular and have less image jump than round (KK) segments. The distance portion power does NOT affect image jump — only the add power and h matter.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Vertical Imbalance and Slab-Off',
          blocks: [
            {
              kind: 'text',
              content: 'Vertical imbalance occurs when lenses of unequal power create different prismatic effects when looking through the reading zone — the wearer sees double vertically. The threshold is the degree of difference tolerated.',
            },
            {
              kind: 'table',
              headers: ['Imbalance Level', 'Correction Method'],
              rows: [
                ['Less than 1.5Δ', 'Drop the distance OC; or use dissimilar bifocal segments'],
                ['More than 1.5Δ', 'Prism in segments; or slab-off (bicentric grinding)'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Slab-off (regular) — bicentric grinding that creates BASE-UP prism in the reading area; ground on the lens with the most minus (or least plus) power on the 90° meridian',
                'Reverse slab-off — molded on convex side of plastic lenses; creates BASE-DOWN prism; applied to the lens with the most plus (or least minus) power on the 90° meridian',
                'Seg height formula for slab-off: v/2 − 2 (where v = vertical height of rim)',
                'Mnemonic for slab-off: MOST MINUS = slab-off (regular); MOST PLUS = reverse slab-off',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lens-types',
      title: 'Lens Types: Single Vision, Bifocal, Progressive',
      blocks: [
        {
          kind: 'text',
          content: 'Ophthalmic lenses are classified by the number of focal lengths they contain. Understanding each type\'s design, advantages, and limitations is a core PMO topic.',
        },
        {
          kind: 'sub',
          title: 'Types of Lenses by Focal Zones',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Single Vision — one focal length; used for distance, near, or occupational correction',
                'Bifocal — two focal lengths/powers; distance and near; separated by a visible segment line',
                'Multifocal — multiple focal lengths; includes trifocals and progressive addition lenses (PALs)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Bifocal Construction Types',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description'],
              rows: [
                ['Split (Two-piece)', 'Two separate pieces of same glass held edge to edge in a spectacle frame'],
                ['Cement bifocal', 'Two pieces of same glass; one cemented to the surface of the other'],
                ['Fused bifocal', 'Two different glass types; one fused to the other; segment has different RI (denser flint or barium)'],
                ['Solid (One-piece)', 'One single piece of glass; includes executive style'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Bifocal Segment Shapes',
          blocks: [
            {
              kind: 'table',
              headers: ['Shape', 'Key Features', 'Advantages', 'Disadvantages'],
              rows: [
                ['Executive (full-width)', 'Segment covers entire bottom half of lens; OC at dividing line', 'Widest near field of view; zero image jump', 'Heavy; cosmetically unappealing; deep cleft collects dirt; segment edge chips'],
                ['Straight Top (Flat Top / D-seg)', 'Segment line nearly straight across; 7mm from OC to dividing line', 'Nearly invisible; light; good field of view', 'Segment line still visible; smaller near zone than executive'],
                ['Round (Kryptok / KK)', 'Circular segment; 11mm from OC to dividing line', 'Good near field', 'More image jump; larger segment visible'],
                ['Ultex', 'Large round segment; 20mm from OC to dividing line', 'Largest near field', 'Maximum image jump; most cosmetically obvious'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Progressive Addition Lenses (PALs)',
          blocks: [
            {
              kind: 'text',
              content: 'Progressive lenses provide a seamless gradient of power from distance at the top to near at the bottom, eliminating the visible segment line of bifocals. They require adaptation.',
            },
            {
              kind: 'bullets',
              items: [
                'Zones: Distance zone (top) → Intermediate corridor (center) → Near zone (bottom)',
                'No visible segment line — cosmetically superior to bifocals',
                'Unavoidable peripheral distortion/aberration zones on either side of the intermediate corridor',
                'Hard design: wide distance and near zones; narrow intermediate corridor; rapid increase in unwanted cylinder',
                'Soft design: wider intermediate corridor; less distortion but smaller clear near and distance zones',
                'Pantoscopic tilt of 8–12° is critical for proper progressive lens fitting',
                'Fitting height (seg height): vertical distance from bottom of frame to patient\'s pupil in primary gaze',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lens Tints: Uses and Indications',
          blocks: [
            {
              kind: 'table',
              headers: ['Tint Color', 'Transmission', 'Best Use / Indication'],
              rows: [
                ['Gray', 'Even transmission across all wavelengths (neutral)', 'Most popular; best for general outdoor use; does not distort color perception'],
                ['Brown/Amber', 'Blocks blue light; enhances contrast', 'Driving; cloudy days; reduces haze; good for low-contrast conditions'],
                ['Green', 'Reduces glare; higher visible light transmission', 'General outdoor; good contrast without color distortion'],
                ['Yellow/Amber', 'Blocks blue and UV; enhances contrast', 'Low light; overcast days; shooting sports; reduces haze'],
                ['Rose/Pink', 'Cosmetic; blocks some blue', 'Cosmetic use; mild glare reduction'],
                ['Blue/Purple', 'Cosmetic', 'Cosmetic; not recommended for outdoor activities'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Photochromic Lenses',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Photochromic lenses darken when exposed to UV light (sunlight) and fade to clear in the absence of UV',
                'Darkening reaction is reversible and repeatable indefinitely',
                'Silver halide crystals (glass photochromics) or organic molecules (plastic photochromics) change structure with UV exposure',
                'Glass photochromics: activated by UV through silver halide chemistry; uniform darkening',
                'Plastic photochromics (e.g., Transitions): activated by UV; organic dye molecules open and close structure',
                'Limitations: do NOT darken well inside a car (windshield blocks UV); temperature-dependent (darken more in cold; less in heat)',
                'Indications: patients who frequently go in and out; patients with light sensitivity; patients who dislike carrying a separate pair of sunglasses',
                'Contraindications for AR coating on photochromics: patients who wear polycarbonate lenses (PC is already UV-blocking; photochromic may not activate well); patients who drive at night (fogged/dirty AR coating worsens glare)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-Reflective (AR) Coatings',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'AR coating reduces reflectance at lens surfaces by destructive interference of reflected light',
                'Single-layer AR: reduces reflectance from ~8% to ~4% (based on Fresnel formula)',
                'Double coating formula: back surface AR eliminates reflectance from back; front surface AR reduces front reflectance',
                'Reflectance formula: R = 100(n-1)² / (n+1)²',
                'Without coating: n=1.5 → 7.8% reflectance per surface (approximately 15.7% total)',
                'Indication: patients with high-RI lenses (more reflectance at higher RI), computer users, night drivers',
                'Scratch-resistant coating layers are ~5 microns thick; applied by dipping or spin-coating',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'neutralization-lensometer',
      title: 'Neutralization and Lensometer',
      blocks: [
        {
          kind: 'text',
          content: 'Neutralization is the process of finding the power of an unknown lens. The lensometer (focimeter/vertometer) is the most common instrument used for this purpose in clinical and dispensing settings.',
        },
        {
          kind: 'diagram',
          id: 'pmo-instruments',
        },
        {
          kind: 'sub',
          title: 'Methods of Neutralization',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Focal length measurement — D = 1/f (meters) = 100/f (cm) = 1000/f (mm); light from infinity to lens to image',
                '2. Lens measure (Geneva lens clock) — determines curvature of lens surfaces; calibrated for glass index 1.530; use True & Marked Power formula for other indices: T = [(n − 1) / 0.530] × D (where T = true power, D = marked power)',
                '3. Caliper method — measures thickness difference (sagitta); formula: S = A² × D / [2(n−1) × 1000]; plus lens: S = CT − ET; minus lens: S = ET − CT',
                '4. Hand neutralization (Trial case method) — finds trial lens of equal power but opposite sign that nullifies the unknown lens; MEASURES FRONT VERTEX POWER; performed in absence of lensometer; better for low-power lenses than toric lenses',
                '5. Lensometer (Focimeter / Vertometer) — most commonly used in practice; measures BACK vertex power (standard) or front vertex power',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Hand Neutralization Procedure',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'View a large distant cross target through the unknown lens held at arm\'s length',
                'Move lens vertically → observe horizontal limb motion; move lens horizontally → observe vertical limb motion',
                'Against motion = PLUS lens power in that meridian → neutralize with PLUS trial lens',
                'With motion = MINUS lens power in that meridian → neutralize with MINUS trial lens',
                'For toric lenses: ROTATIONAL motion is present → use rotational motion to find cylinder axis; neutralize one limb at a time',
                'No movement with trial lens in contact = neutralization (combined power = zero)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lensometer (Focimeter) Operation',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'System: Keplerian telescope with objective lens + eyepiece (ocular lens) + reticle (concentric circles and cross hairs focused by eyepiece)',
                'Mires: circle of dots = spherical lens; two sets of perpendicular lines = cylindrical (toric) lens',
                'Prepare: set power wheel to zero; turn eyepiece CCW then slowly CW until reticle first comes into sharp focus',
                'For BVP (standard): place concave (back) surface against lens stop; rotate power wheel to maximum brightness of target',
                'For FVP: place convex (front) surface against lens stop',
                'Always check RIGHT lens first for glasses',
                'Procedure for toric lens: rotate to first maximum sharpness of lines (1st meridian reading); turn 90° to second maximum sharpness (2nd meridian reading); cylinder = difference between the two readings',
                'Uses: (1) neutralizing — determine prescription; (2) verifying — confirm accuracy; (3) duplicating — copy exact prescription; (4) locating optical center; (5) measuring prism amount',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'benchwork-dispensing',
      title: 'Benchwork and Dispensing',
      blocks: [
        {
          kind: 'text',
          content: 'Benchwork is the physical process of preparing and inserting a lens into a frame. The boxing system provides a standardized set of measurements for frame and lens fitting.',
        },
        {
          kind: 'sub',
          title: 'Benchwork Stages',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Centering — determines and marks the optical center, cylinder axis, and base-apex line of prism; done on FRONT surface of lens using centering machines or lensometer; ALL centering marks on front surface',
                '2. Layout (Bench Layout) — marks proper decentration, cylinder axis, base-apex line in correct position',
                '3. Cutting — traces outline of frame shape onto lens; hand cutting or machine cutting',
                '4. Chipping/Crumbling — removes excess/surplus glass from the cut',
                '5. Edging — smoothly removes excess glass from lens; hand edging (flat or bevel) or automatic edging',
                '6. Glazing (Insertion) — placing lens into channeled eye wire; Mounting = placing lens in full rim frame; Drilling = boring holes for rimless/three-piece mounting',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Benchwork Equipment',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Centering machines and devices',
                'Cutting machines',
                'Edging machines (hand or automatic)',
                'Drilling machines',
                'Vertex power instruments (lensometer)',
                'Optical protractors',
                'Electrical heater (for plastic frame adjustments)',
                'Optical pliers, rat tail/screw slotting files, screw drivers',
                'Lens formers (hand or mechanical)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Boxing System and Frame Measurements',
          blocks: [
            {
              kind: 'text',
              content: 'The boxing system (adopted by Optical Manufacturers Association in 1962) draws an imaginary box around the frame/lens and uses the box sides as measurement reference points.',
            },
            {
              kind: 'table',
              headers: ['Measurement', 'Definition'],
              rows: [
                ['"A" Measurement (Eye Size)', 'Horizontal distance between furthest temporal and nasal edges of lens shape; distance between vertical sides of box'],
                ['"B" Measurement (Frame Depth)', 'Vertical distance between furthest top and bottom edges of lens shape; distance between horizontal sides of box'],
                ['Datum Line', 'Horizontal line through vertical center of frame'],
                ['Geometric Center (GC)', 'Intersection of datum line and horizontal center of lens; also called box center; also called Geometric Center Distance reference point'],
                ['DBL (Distance Between Lenses)', 'Shortest distance between nasal edges of each lens; bridge size'],
                ['DBC / GCD (Distance Between Centers)', 'Horizontal distance between geometric centers; frame PD; DBC = A + DBL'],
                ['Effective Diameter (ED)', 'Twice the distance from GC to furthest lens edge; used to select minimum blank size'],
                ['Mechanical Center', '2 mm ABOVE the geometrical center; lens is cut and edged around this point'],
                ['Seg Height', 'Vertical distance from bottom of box to top of bifocal/trifocal segment'],
                ['Seg Drop', 'Vertical distance from datum line to top of bifocal/trifocal segment'],
                ['OTL (Overall Temple Length)', 'Running distance from center of barrel screw to end of temple'],
                ['LTB (Length to Bend)', 'Distance from center of barrel to middle of temple bend'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Frame Parts',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Frame Front components: Eye Wires (rims), End Pieces, Bridge (supports 90% of frame weight), Hinges, Lenses, Nose Pads, Pad Arms, Screws, Top Bar',
                'Bridge types: Keyhole bridge — old-fashioned keyhole shape; for flat/small nose bridges; Saddle bridge — spreads weight across nose sides and top; for heavy glasses or pressure-sensitive patients; Adjustable bridge — includes adjustable nose pads; Double bridge — reinforcing bar over top of bridge',
                'Temple types: Skull temples — most popular for plastic; bent over ear, follows skull contour; Comfort-cable temples — flexible metal cable behind ear; for children and sports; Riding bow temples — rigid version of comfort-cable; Spring-hinged temples — hidden springs reduce slipping; Library/Paddle temples — straight, easy on/off, used for reading glasses',
              ],
            },
          ],
        },
      ],
    },
  ],
}
