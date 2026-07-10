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
          content: 'Ophthalmic lenses are made from either glass or plastic materials. Each material has distinct optical and mechanical properties (refractive index, Abbe value, specific gravity, and impact resistance) that determine its clinical suitability.',
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
              content: 'Desirable qualities of ophthalmic glass: (1) homogeneity: uniform chemical and physical composition; (2) correct refractive index and chromatic dispersion values; (3) freedom from color.',
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
                ['PMMA', 'Perspex; Transpex; Plexiglas', '1.49', 'N/A', 'N/A', 'Original plastic lens; half weight of crown glass; historical'],
                ['Trivex', 'Phoenix; Triology', '1.532', '43–45', '1.11', 'Lighter than standard plastic; more rigid than polycarbonate; best for rimless frames'],
                ['Corlon (C-Lite)', 'Glass front + plastic back', 'N/A', 'N/A', 'N/A', '25% thinner and 25% lighter than all-glass lenses'],
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
                'Index of Refraction (n): ratio of speed of light in vacuum to speed in the medium; higher RI = thinner lens; mid-index = 1.523 to 1.57; high-index = 1.58 and above',
                'Abbe Value (nu value): reciprocal of dispersive power; measures ability of material to hold the spectrum together; higher Abbe = less chromatic aberration; Abbe 60 = least aberration, Abbe 30 = most aberration; standard plastic = 58, polycarbonate = 30',
                'Specific Gravity: ratio of 1 cm³ of material to 1 cm³ of water (g/cm³); higher SG = heavier lens; cannot accurately predict finished-lens weight because denser materials often have higher RI (crown glass 2.51 to 2.54, CR-39 1.31 to 1.32)',
                'Reflectance: percentage of light reflected at each lens surface; formula: R = 100(n-1)² / (n+1)²; higher RI = more reflectance: n=1.5 gives 7.8%, n=1.6 gives 10.4%, n=1.7 gives 12.3%, n=1.8 gives 15.7%, n=1.9 gives 18.3%',
                'Absorption: light reduced by lens material; follows Lambert\'s law (exponential with thickness); significant in tinted/photochromic lenses',
                'Scratch Resistance: measured on Moh\'s hardness scale (oldest, most-quoted test, rated 1 to 10); most ophthalmic lens materials rate between 4 and 5',
                'Chemical Resistance: indicates life expectancy and solvent resistance (polycarbonate resists solvents poorly, notably acetone); tested by the Thermodyne test (developed by Chance-Pilkington), which simulates prolonged atmospheric exposure using heat and humidity',
                'Transparency: a function of RI; higher RI gives lower transmittance (more light lost to surface reflection); good transparency reduces ghost images and the glassy look while raising transmittance',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Optical Calculations: Reflectance, Transmission, Opacity, Optical Density',
          blocks: [
            {
              kind: 'text',
              content: 'Beyond describing a material, these four quantities let you compute how much light actually reaches the eye through a lens, its tints, and its coatings. They are worked as decimals and multiplied surface by surface.',
            },
            {
              kind: 'table',
              headers: ['Quantity', 'Definition', 'Formula'],
              rows: [
                ['Reflectance (R)', 'Percent of light reflected at one surface', 'R = 100(n-1)² / (n+1)²'],
                ['Transmission (T)', 'Percent of light passing through one surface', 'T = 100 − R (as %); or T = 1 − R as a decimal'],
                ['Combined Transmission', 'Light through two or more media/surfaces in sequence', 'T_total = T₁ × T₂ × …'],
                ['Opacity', 'Reciprocal of transmission; how much a medium blocks light', 'Opacity = 1 / T'],
                ['Optical Density (OD)', 'Log measure of light-blocking (higher OD = darker)', 'OD = log₁₀(1 / T), with T as a decimal'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Reference single-surface transmission values: CR-39 = 96.13% per surface; ophthalmic crown glass = 95.70% per surface; a single AR-coated surface ≈ 99%',
                'Worked example (uncoated CR-39, two surfaces): T_total = 0.9613 × 0.9613 = 0.9241, so T = 92.40%',
                'Combined systems multiply every element in the light path: surfaces, tints, mirror coatings, and AR coatings each contribute a transmission factor',
                'Optical density example: a system with T = 0.64 gives OD = log₁₀(1 / 0.64) = 0.194',
              ],
            },
            {
              kind: 'pearl',
              content: 'AR coatings raise transmission (≈99% per treated surface), while mirror and dark tints lower it. Because factors multiply, adding one more absorbing element always drops T_total. Optical density is additive in logs, so darker filters simply add OD.',
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
      id: 'aberrations',
      title: 'Lens Aberrations and Image Defects',
      blocks: [
        {
          kind: 'text',
          content: 'A lens aberration is the inability of a lens to bring all incident rays to a single desired point. Aberrations fall into two families: monochromatic (Seidel) aberrations, which occur even with one wavelength when light is not confined to paraxial rays, and chromatic aberration, which comes from different wavelengths refracting unequally.',
        },
        {
          kind: 'sub',
          title: 'Monochromatic (Seidel) Aberrations',
          blocks: [
            {
              kind: 'table',
              headers: ['Aberration', 'Cause', 'Correction'],
              rows: [
                ['Spherical Aberration', 'Peripheral rays focus sooner than paraxial (central) rays, so a point images as a blur; image appears blurred', 'Limit the aperture to paraxial rays; plano-convex lens; aplanatic surfaces; aspheric lens design'],
                ['Coma', 'Off-axis (oblique) rays refracted by the lens periphery; considered off-axis spherical aberration; images a point as a comet shape', 'Eliminate peripheral rays; adjust lens shape'],
                ['Oblique (Marginal / Radial) Astigmatism', 'A narrow beam enters obliquely to the lens axis; refracted rays form two focal lines (the interval of Sturm); triggered by looking through an off-axis point or by tilting the lens', 'Meniscus (corrected-curve) lens rather than biconvex/biconcave; keep incident light near the principal axis; aspheric lens'],
                ['Curvature of Field', 'Lens forms the image on a curved surface (Petzval surface) concave toward the lens, not on a flat plane', 'Corrected-curve lens; not a major spectacle problem because the curved retina compensates (matters most for camera makers)'],
                ['Distortion', 'Magnification varies with distance from the optical axis; affects image shape and lateral position but not clarity; mostly in high-power lenses', 'Aspheric design; a distortion-free lens is called orthoscopic'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Circle of confusion (blur circle / disk of indistinctness): the spot formed when a cone of rays fails to focus to a point',
                'Circle of least confusion: the smallest blur circle, found exactly midway between the two focal lines of the interval of Sturm',
                'Distortion types: pincushion distortion is seen in high-power PLUS lenses; barrel distortion is seen in high-power MINUS lenses',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Chromatic Aberration and the Abbe Value',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Chromatic aberration (chromatism): the various wavelengths refract unequally; short violet waves refract most, long red waves least, intermediate hues in proportion',
                'The higher the lens power, the greater the chromatic aberration',
                'Abbe value quantifies a material\'s resistance to chromatism: high Abbe gives low aberration, low Abbe gives high aberration',
                'Longitudinal (axial) chromatic aberration: different hues focus at different distances along the optical axis',
                'Lateral chromatic aberration: all colors focus in the same plane but off the optical axis',
                'Correction: change to a higher-Abbe lens material, or use an achromatic doublet (two simple lenses paired so each partly offsets the other\'s chromatic aberration)',
              ],
            },
            {
              kind: 'pearl',
              content: 'Marginal (oblique) astigmatism and curvature of field are both corrected by corrected-curve (best-form meniscus) lenses, which is why modern lenses are curved rather than flat. Aspheric designs additionally flatten the lens while controlling spherical aberration, oblique astigmatism, and distortion.',
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
              content: 'Lensometer default = BACK VERTEX POWER (concave side against lens stop). Front vertex power = convex side against lens stop. The effective power of a high-plus lens changes significantly with vertex distance, so always verify at the prescribed vertex distance.',
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
                'Compensation matters for lenses above about plus or minus 4 to 5 D; below this the change is clinically negligible',
                'Lenses sit 12 to 14 mm from the corneal vertex (to coincide with the eye\'s anterior nodal point); contact lens vertex distance = 0',
                'Vertexometer (distometer): the instrument that measures vertex distance from the back of the spectacle to the cornea through a closed lid',
                'Positional power answers must be rounded to nearest 0.25D; effective power calculations do not require rounding',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Cylinder Power in an Oblique Meridian',
          blocks: [
            {
              kind: 'text',
              content: 'A cylinder has no power along its axis and full power 90° away. In between, the power follows a sin² relationship, which is tested directly and also underlies obliquely crossed cylinders.',
            },
            {
              kind: 'bullets',
              items: [
                'No cylinder power in the meridian of the axis (0°)',
                'One-fourth of cylinder power in the meridian 30° from the axis',
                'One-half of cylinder power in the meridian 45° from the axis',
                'Three-fourths of cylinder power in the meridian 60° from the axis',
                'Full cylinder power in the meridian 90° from the axis',
              ],
            },
            {
              kind: 'table',
              headers: ['Formula', 'Use'],
              rows: [
                ['D1 = Fc × sin²α', 'Power of a simple cylinder in an oblique meridian'],
                ['D1 = Fs + Fc × sin²α', 'Power of a sphero-cylinder in an oblique meridian'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Fc = cylinder power, Fs = sphere power, α = angle between the oblique meridian and the cylinder axis. Example: −3.00 × 180 in the 40th meridian gives α = 140°, so D1 = −3.00 × sin²140° = −3.00 × 0.41 = −1.24 D.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lens Tilt and Induced Power (Martin\'s Formula)',
          blocks: [
            {
              kind: 'text',
              content: 'Tilting a lens (pantoscopically, retroscopically, or face form) changes both the spherical power and induces cylinder. This is tested in frame adjustments and benchwork.',
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
              content: 'Martin\'s formula gives the induced power: no rounding required (informational only). Tilt always increases the magnitude of the spherical power. The induced cylinder axis aligns with the tilt axis (180° for pantoscopic/retroscopic; 90° for face form).',
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
                'Decentering a lens induces prism at the line of sight: decentration (h) in centimeters × lens power (D) = prism amount',
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
              content: 'Executive bifocals have zero image jump because the optical pole is at the dividing line (h = 0). Flat top bifocals are the most cosmetically popular and have less image jump than round (KK) segments. The distance portion power does NOT affect image jump; only the add power and h matter.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Vertical Imbalance and Slab-Off',
          blocks: [
            {
              kind: 'text',
              content: 'Vertical imbalance occurs when lenses of unequal power create different prismatic effects when looking through the reading zone, so the wearer sees double vertically. The threshold is the degree of difference tolerated.',
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
                'Slab-off (regular): bicentric grinding that creates BASE-UP prism in the reading area; ground on the lens with the most minus (or least plus) power on the 90° meridian',
                'Reverse slab-off: molded on convex side of plastic lenses; creates BASE-DOWN prism; applied to the lens with the most plus (or least minus) power on the 90° meridian',
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
                'Single Vision: one focal length; used for distance, near, or occupational correction',
                'Bifocal: two focal lengths/powers (distance and near) separated by a visible segment line',
                'Trifocal: three powers (distance, intermediate, near)',
                'Multifocal: multiple focal lengths; includes trifocals and progressive addition lenses (PALs)',
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Spherical and toroidal single-vision lenses: the most common type; simple meniscus or toric lenses with a spherical front and a spherical or toroidal back; available in most materials',
                'Aspheric single-vision lenses: use conical curves (notably ellipsoids) to make the lens flatter, thinner, and lighter; usually high-index plastic; reduce spherical aberration, oblique astigmatism, and distortion',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Milestones and Inventors (High-Yield)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Bifocal lens: Benjamin Franklin, 1784 (Franklin split bifocal)',
                'Trifocal lens: John Isaac Hawkins, 1826',
                'Solid upcurve bifocal (first one-piece): Isaac Schnaitman, 1837',
                'Perfection bifocal: August Morck, 1888',
                'Cemented bifocal: John Borsch Sr., 1899',
                'Fused bifocal (Kryptok): John Borsch Jr., 1908',
                'Ultex bifocal: O\'Conner, 1910',
                'D / Flat-top bifocal: Henry Courmettes, 1915',
                'Executive bifocal: American Optical, 1954',
                'Blended (invisible / seamless / Younger) bifocal: Irvin Rips, 1955',
                'First progressive multifocal (Varilux): Essilor of France, 1958 to 1959',
              ],
            },
            {
              kind: 'pearl',
              content: 'Earlier history: the first eyeglasses (Italy/Venetians, ~1285 to 1289) corrected only hyperopia and presbyopia; biconcave lenses for myopia appeared in the 14th century; Sir George Airy designed the first astigmatic lens in 1825.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Bifocal Construction Types',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description', 'Notes'],
              rows: [
                ['Split / Two-piece (Franklin)', 'Two separate pieces of the same glass held edge to edge in the frame', 'Larger field, no image jump (OCs at dividing line); dividing line reflects and collects dust'],
                ['Cement bifocal', 'Two pieces of the same glass, one cemented to the surface of the other (Canada Balsam adhesive)', 'Any power range; wafer can loosen with temperature change'],
                ['Fused bifocal', 'Two different glass types; a higher-RI segment (flint or barium) fused into a countersink on the major lens', 'Kryptok was the first fused bifocal; flint segment adds chromatic aberration'],
                ['Solid / One-piece', 'A single piece of glass; includes solid upcurve and executive styles', 'Structurally stronger; better appearance; limited surface power'],
              ],
            },
            {
              kind: 'pearl',
              content: 'The "ledge" is the tell: a solid one-piece bifocal shows a ledge at the segment, while cement/glued and fused bifocals show no ledge (fused shows a segment of different, denser glass). The Perfection bifocal is a modified Franklin with the reading portion rounded and reduced in size.',
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
                ['Executive (full-width)', 'Segment covers entire bottom half of lens; monocentric, OC at dividing line', 'Widest near field of view; zero image jump', 'Heavy; cosmetically unappealing; deep cleft collects dirt; segment edge chips'],
                ['Straight Top (Flat Top / D-seg)', 'Segment line nearly straight across; 7mm from OC to dividing line; widths 22 to 45 mm; plastic (CR-39) or fused glass', 'Nearly invisible; light; more useful reading width; less image jump', 'Segment line still visible; less attractive than round; smaller near zone than executive'],
                ['Curved-Top (C-style)', 'Variation of flat-top with a slight curve on the segment top; widths 28, 35, 45 mm', 'Reading width like flat-top', 'Segment line visible'],
                ['Round (Kryptok / KK)', 'Circular segment; 11mm from OC to dividing line; widths 22, 24, 28 mm', 'Least visible segment; relatively light', 'Noticeable image jump; segment often too narrow for reading'],
                ['Ultex', 'Large round one-piece crown glass; 20mm from OC to dividing line; 38 mm disk cut to 19 mm seg height', 'Largest near field for reading', 'Maximum image jump; most cosmetically obvious'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Trifocal Lenses',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Three powers for distance, intermediate, and near; the intermediate segment sits directly above the near segment',
                'Most popular styles: flat-top trifocal, executive trifocal, and E-D line trifocal',
                'Sizing notation such as 7×28: the first number is the segment depth, the second is the diameter/width of the near segment (also 8×35, 10×35, 14×35)',
                'Minimum segment height for any lined trifocal is 18 to 19 mm',
                'Intermediate power = distance power + (½ × ADD)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Occupational Bifocals and Multifocals',
          blocks: [
            {
              kind: 'text',
              content: 'Special-purpose lenses suited to a particular job or hobby, not intended for everyday wear. They serve people who need intermediate or near vision while looking upward or in unusual positions.',
            },
            {
              kind: 'table',
              headers: ['Type', 'Design', 'Typical User'],
              rows: [
                ['Double-D Trifocal (Librarian)', 'Two flat-top segments, top and bottom, for near/intermediate above and below', 'Librarians, pilots (objects overhead)'],
                ['Executive Occupational Multifocal', 'Distance power located in the middle band', 'Workers needing distance between two near zones'],
                ['Quadrifocal', 'Like a double-D trifocal but with a trifocal segment added at the bottom', 'Complex multi-distance tasks'],
                ['Rede-Rite (Minus-Add Upcurve / Dental)', 'Distance segment on top, near zone forms the main body of the lens', 'Dentists, workers viewing near objects above'],
                ['Golfer\'s Bifocal', 'Small round near segment low in the outer corner of one lens (right lens for a right-handed golfer)', 'Golfers (keeps most of the lens clear for distance)'],
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
                'Also called progressive spectacle lenses, progressive addition lenses (PAL), graduated prescription lenses, or varifocal/multifocal lenses',
                'Zones: distance zone (top) to intermediate corridor (center) to near zone (bottom)',
                'No visible segment line, so cosmetically superior to bifocals; also no image jump, thinner and lighter, full range of working distances',
                'Disadvantages: unwanted peripheral astigmatism (aberration), some adaptation problems, more critical fitting, and higher cost',
                'Hard design: wide distance and near zones, narrow/shorter intermediate corridor, rapid increase in unwanted astigmatism, more peripheral aberration',
                'Soft design: narrower distance and near zones, wider/longer intermediate corridor, gradual increase in unwanted astigmatism, reduced peripheral aberration',
                'Balanced design: a compromise that spreads the unwanted astigmatism between the hard and soft extremes',
                'Pantoscopic tilt of 8 to 12° is critical for proper progressive lens fitting',
                'Fitting height (seg height): vertical distance from bottom of frame to patient\'s pupil in primary gaze',
              ],
            },
            {
              kind: 'table',
              headers: ['Marking Type', 'Markings'],
              rows: [
                ['Permanent (micro-engraved)', 'Horizontal locators / micro-etchings placed about 34 mm apart; lens logo; add power'],
                ['Temporary (ink-stamped)', 'Distance reference circle (read distance power); fitting cross (align in front of pupil); prism reference point (check prism); near reference circle (read the add)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'To relocate erased markings: find the micro-engraved locators, mark the horizontal locators, select the correct manufacturer layout chart, position the lens on the chart, then trace the reference points.',
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
                ['Gray', 'Even transmission across all wavelengths (neutral); reduces intensity without removing wavelengths', 'Most popular protection tint; true color perception; general outdoor use, glare off water'],
                ['Green', 'Excellent UV and infrared heat absorption; higher visible transmission', 'General outdoor; true color perception; strong contrast; dims glare while brightening shadows'],
                ['Brown', 'Absorbs total UV below 400 nm; contrast-enhancing', 'General-purpose sun protection; reduces glare'],
                ['Yellow', 'Absorbs blue, violet, and UV', 'Fog, haze, and low light; contrast enhancement'],
                ['Amber', 'Improves contrast and depth perception', 'Night driving (brightens the road, reduces oncoming-headlight glare)'],
                ['Red', 'Strongly blocks blue-green wavelengths for very sharp contrast', 'Skiing, cycling, racing; aids hue discrimination in color deficiency'],
                ['Blue', 'Improves color perception; reduces glare', 'Light-sensitive individuals; largely cosmetic outdoors'],
                ['Pink / Rose', 'Absorbs in the UV and blue-light regions; attenuates light pleasantly', 'Color of choice when a neurological condition is present; mild glare reduction'],
              ],
            },
            {
              kind: 'table',
              headers: ['Metal Oxide (glass tinting)', 'Resulting Color'],
              rows: [
                ['Ferrous oxide', 'Green'],
                ['Manganese oxide', 'Violet'],
                ['Cobalt oxide', 'Blue'],
                ['Cerium oxide', 'Pinkish'],
                ['Nickel oxide', 'Brown'],
                ['Uranium oxide', 'Yellow'],
                ['Gold oxide', 'Red'],
                ['Vanadium oxide', 'Pale green'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Tint behavior depends on material: glass tint is permanent (a color change means new lenses); CR-39 plastic is dyed, so re-darkening an old tinted lens can reveal scratches or ruin it; polycarbonate tint can be modified after the initial application. Glass is tinted by vacuum-depositing a thin metal-oxide layer, which needs large, expensive machinery, while plastic dyeing is simple, cheap, and fast.',
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
                'AR coatings matter most on high-index and flat-form lenses such as aspherics, where surface reflection is greatest',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Other Coatings and Filters',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Scratch-resistant (hard) coating: clear protective layer against surface scratches; recommended for plastic lenses',
                'Anti-fog coating: prevents water condensation by using a surfactant film or a hydrophilic surface',
                'UV coating: protects against short- and long-term UV damage (cataract, macular degeneration); used by skiers, mountaineers, astronomers, and pseudophakic patients',
                'Mirror coating: highly reflective front-surface layer applied by vacuum deposition of powdered oxides/metals; blocks 10 to 60% of light; used for bright, reflective settings (water, snow) and for cosmetic shielding of the eyes',
                'Blue-light coating: reduces exposure to blue light from screens and indoor lighting; beneficial blue light regulates circadian rhythm, boosts alertness, and elevates mood, while excess blue light drives digital eyestrain',
              ],
            },
            {
              kind: 'text',
              content: 'Polarized (Polaroid) lenses restrict transmitted light to one plane. Under normal conditions light vibrates in all directions; reflecting off a smooth surface aligns it horizontally and produces glare.',
            },
            {
              kind: 'bullets',
              items: [
                'Polarized lenses block horizontally aligned light (glare) while allowing vertically aligned light through; they also filter UV',
                'Advantages: filter glare and reduce reflection, enhance contrast and depth perception, reduce eye strain, improve acuity and safety, give a realistic view of the environment, and make ideal summer sunwear',
                'Photochromic (light-adaptive) lenses darken with UV and clear indoors; glass photochromics use silver chloride/halide; they do not darken well inside a car because the windshield blocks UV',
              ],
            },
            {
              kind: 'table',
              headers: ['Radiation', 'Ocular effects'],
              rows: [
                ['Infrared', 'Thermal effect: corneal desiccation and opacification; iris depigmentation/atrophy; lens capsule exfoliation and cataract; retinal necrotic burn'],
                ['UV-A', 'Acute: photochemical retinopathy, eyelid tanning. Chronic: cataract, macular degeneration, malignant melanoma'],
                ['UV-B', 'Acute: photokeratoconjunctivitis, eyelid erythema. Chronic: cataract, pterygium/pinguecula, band keratopathy, corneal degeneration'],
                ['UV-C', 'Acute effects are damaging; essentially no chronic effects'],
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
                '1. Focal length measurement: D = 1/f (meters) = 100/f (cm) = 1000/f (mm); light from infinity to lens to image',
                '2. Lens measure (Geneva lens clock): determines curvature of lens surfaces; calibrated for glass index 1.530; use True & Marked Power formula for other indices: T = [(n − 1) / 0.530] × D (where T = true power, D = marked power)',
                '3. Caliper method: measures thickness difference (sagitta); formula: S = A² × D / [2(n−1) × 1000]; plus lens: S = CT − ET; minus lens: S = ET − CT',
                '4. Hand neutralization (Trial case method): finds trial lens of equal power but opposite sign that nullifies the unknown lens; MEASURES FRONT VERTEX POWER; performed in absence of lensometer; better for low-power lenses than toric lenses',
                '5. Lensometer (Focimeter / Vertometer): most commonly used in practice; measures BACK vertex power (standard) or front vertex power',
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
                'Uses: (1) neutralizing: determine prescription; (2) verifying: confirm accuracy; (3) duplicating: copy exact prescription; (4) locating optical center; (5) measuring prism amount',
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
                '1. Centering: determines and marks the optical center, cylinder axis, and base-apex line of prism; done on FRONT surface of lens using centering machines or lensometer; ALL centering marks on front surface',
                '2. Layout (Bench Layout): marks proper decentration, cylinder axis, base-apex line in correct position',
                '3. Cutting: traces outline of frame shape onto lens; hand cutting or machine cutting',
                '4. Chipping/Crumbling: removes excess/surplus glass from the cut',
                '5. Edging: smoothly removes excess glass from lens; hand edging (flat or bevel) or automatic edging',
                '6. Glazing (Insertion): placing lens into channeled eye wire; Mounting = placing lens in full rim frame; Drilling = boring holes for rimless/three-piece mounting',
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
                ['FTB (Front to Bend)', 'Distance from the plane of the frame front to the temple bend; used when the frame front sits well ahead of the temple start'],
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
                'Bridge types: Keyhole bridge: old-fashioned keyhole shape; for flat/small nose bridges; Saddle bridge: spreads weight across nose sides and top; for heavy glasses or pressure-sensitive patients; Adjustable bridge: includes adjustable nose pads; Double bridge: reinforcing bar over top of bridge',
                'Temple types: Skull temples: most popular for plastic; bent over ear, follows skull contour; Comfort-cable temples: flexible metal cable behind ear; for children and sports; Riding bow temples: rigid version of comfort-cable; Spring-hinged temples: hidden springs reduce slipping; Library/Paddle temples: straight, easy on/off, used for reading glasses',
              ],
            },
          ],
        },
      ],
    },
  ],
}
