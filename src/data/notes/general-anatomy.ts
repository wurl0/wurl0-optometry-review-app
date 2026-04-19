import { NotesData } from '@/lib/notes-types'

export const generalAnatomyNotes: NotesData = {
  subject: 'General Anatomy',
  slug: 'general-anatomy',
  sections: [
    {
      id: 'cell-tissue',
      title: 'Cell Biology & Tissue Types',
      blocks: [
        {
          kind: 'text',
          content: 'General Anatomy is the study of the parts that make up the human body. Gross anatomy uses the naked eye; histology uses a microscope. The cell is the unit structure of all living things (cytology = study of cells).',
        },
        {
          kind: 'sub',
          title: 'Main Parts of the Cell',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Cell membrane — outermost, bi-lipid (phospholipid) layer; barrier for unwanted substances; endocytosis (food in) and exocytosis (waste out)',
                'Cytoplasm — main bulk; organelles: Mitochondria (powerhouse/ATP), Golgi complex (carbohydrate metabolism), Rough ER (protein synthesis via ribosomes), Smooth ER, Lysosomes (digestive enzymes: lysozyme and hydrolase)',
                'Nucleus — contains genetic makeup; controls cell division (mitosis = somatic cells; meiosis = sex cells)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Four Fundamental Tissue Types',
          blocks: [
            {
              kind: 'table',
              headers: ['Tissue', 'Function'],
              rows: [
                ['Epithelial', 'Covers body surfaces or lines hollow organs/cavities'],
                ['Connective', 'Connects and supports other tissues'],
                ['Muscular', 'Movement and contraction'],
                ['Nervous', 'Conduction of impulses; controls body functions'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Blood vascular tissue is sometimes listed as a 5th type but is technically an organ. Histology = study of tissues.',
            },
          ],
        },
      ],
    },
    {
      id: 'anatomic-orientation',
      title: 'Anatomic Position, Planes & Body Cavities',
      blocks: [
        {
          kind: 'sub',
          title: 'Anatomic Position',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Body is erect, facing forward',
                'Upper extremities dangling on the side, palm facing anteriorly',
                'Thumb pointing laterally',
                'Lower extremities close together',
              ],
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'ga-body-planes',
        },
        {
          kind: 'sub',
          title: 'Planes of the Body (4)',
          blocks: [
            {
              kind: 'table',
              headers: ['Plane', 'Divides Into'],
              rows: [
                ['Median / Mid-sagittal', 'Accurately into (L) and (R) halves'],
                ['Sagittal', 'Unequally into (L) and (R) portions'],
                ['Coronal / Frontal', 'Anterior (ventral) and posterior (dorsal)'],
                ['Transverse / Horizontal', 'Superior (upper) and inferior (lower)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Key Directional Terms',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Medial — nearer the median plane; Lateral — farther from the median plane',
                'Superior/cephalic — toward head; Inferior/caudal — toward feet',
                'Proximal — near point of origin; Distal — far from point of origin',
                'Superficial — near surface; Deep — remote from surface',
                'Invagination — inward bulging; Evagination — outward bulging',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Body Cavities',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Ventral cavity (anterior): Thoracic (pleural × 2 + mediastinum containing heart, trachea, bronchi, esophagus, thymus) and Abdomino-pelvic (abdominal = liver, gallbladder, stomach, colon, small intestines, pancreas, spleen, kidneys, ureters; pelvic = urinary bladder, uterus, oviducts, ovaries, rectum, sigmoid colon, prostate, seminal vesicles)',
                'Dorsal cavity (posterior): Cranial cavity (brain) and Spinal cavity (spinal cord)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Abdominal Regions & Quadrants',
          blocks: [
            {
              kind: 'text',
              content: '9 Regions formed by 2 vertical (midclavicular) lines + 2 horizontal (transpyloric/subcostal and transtubercular) lines.',
            },
            {
              kind: 'table',
              headers: ['Quadrant', 'Unique Organs (not in others)'],
              rows: [
                ['RUQ', 'Liver, gallbladder, biliary tree'],
                ['LUQ', 'Spleen'],
                ['RLQ', 'Vermiform appendix'],
                ['LLQ', 'None unique'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'integumentary',
      title: 'Integumentary System',
      blocks: [
        {
          kind: 'text',
          content: 'Comprises skin (largest organ in body) and skin appendages: nails, hairs, sebaceous and sweat glands. Dermatology = study of skin. Layers: Epidermis (epithelium) and Dermis (connective tissue).',
        },
        {
          kind: 'diagram',
          id: 'ga-epidermis-layers',
        },
        {
          kind: 'sub',
          title: 'Layers of the Epidermis (outer to inner)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Stratum Corneum (Horny) — >25 layers of dead flat cells connected by desmosomes',
                '   a. Stratum Disjunctivum (Scaly) — cells flattened, no nucleus; scale off',
                '   b. Stratum Lucidum (Eleidin) — cells glassy with eleidin (precursor to keratin); ONLY in thick skin (palm/sole), absent in thin skin',
                '2. Stratum Granulosum (Granular) — cells flattened; cytoplasm has keratohyalin granules; nucleus degenerating',
                '3. Stratum Spinosum (Prickle Cell) — polyhedral cells with intercellular bridges (cytodesmata); mitotically active',
                '4. Stratum Germinativum (Cylindrical/Basal) — columnar cells perpendicular to basement membrane; contains melanin; mitotically active',
              ],
            },
            {
              kind: 'pearl',
              content: 'Mnemonic (outer to inner): Corneum → Lucidum → Granulosum → Spinosum → Germinativum. "Come Let\'s Get Some Guys" or "CLGSG".',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Skin Types & Functions',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Thick skin — palm + sole; no hair follicles; has Stratum Lucidum',
                'Thin skin — most of body; has hair follicles; no Stratum Lucidum',
                'Functions: Protection (water loss, microorganisms, UV via melanin), Sensory (pain, heat, cold, pressure), Vitamin D synthesis, Temperature regulation',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'skeletal',
      title: 'Skeletal System',
      blocks: [
        {
          kind: 'text',
          content: 'Comprises 206 bones (adult), 270–305 (neonate/infant), cartilages, ligaments, and joints. Functions: framework, levers, protection, muscle attachment, hematopoiesis.',
        },
        {
          kind: 'sub',
          title: 'Bone Structure & Composition',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Organic (1/3) — proteins; provides resilience and toughness',
                'Inorganic (2/3) — phosphate of calcium; provides hardness, rigidity, opacity',
                'Haversian System/Osteons — unit structure: Haversian canals + Haversian lamellae (concentric rings) + Lacunae (containing osteocytes)',
                'Osteoblasts = bone builders; Osteoclasts = bone destroyers',
                'Yellow bone marrow = fat; Red bone marrow = stem cells (myelocytes, erythroblasts, osteocytes)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Bone Classification by Shape',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Description', 'Examples'],
              rows: [
                ['Long', 'Tubular; upper/lower extremities', 'Humerus, femur, tibia'],
                ['Short', 'Cubical', 'Carpals, tarsals'],
                ['Flat', '2 compact layers + spongy within', 'Skull, sternum, ribs, scapula'],
                ['Irregular', 'Mixed shape', 'Vertebrae, sacrum'],
                ['Sesamoid', 'Develops in tendon', 'Patella'],
                ['Pneumatic', 'Contains air sinuses (radiolucent on x-ray)', 'Maxilla, frontal, ethmoid, sphenoid'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Axial Skeleton (80 bones)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Vertebral column — 33 in child, 26 in adult (71 cm long); 7 cervical (C1=atlas, C2=axis/dens, C7=vertebra prominens), 12 thoracic, 5 lumbar (largest), 1 sacral (5 fused), 1 coccygeal (4–5 fused)',
                'Sternum — manubrium (1st rib + clavicle), gladiolus/body (2nd–7th ribs), xyphoid process (never ossifies). Sternal angle of Louis = tracheal bifurcation site',
                'Ribs — 12 pairs: True (T1–T7, direct to sternum), False (T8–T10, costal arch), Floating (T11–T12, no attachment)',
                'Hyoid bone — only bone at anterior neck; U-shaped; above larynx, below mandible',
                'Skull — 28 bones (adult); 8 PAIRED bones: Palatine, Parietal, Temporal, Inferior nasal concha, Maxilla, Nasal, Zygomatic, Lacrimal (mnemonic: "Please Put Towel In My New Zipper Luggage"); 5 UNPAIRED: Frontal, Ethmoid, Sphenoid, Occipital, Vomer ("Frequent Explorers Seek Out Villages")',
                'Ossicles (ear): 3 pairs — Malleus (hammer), Incus (anvil), Stapes (stirrup = smallest bone in body)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Appendicular Skeleton (126 bones)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Upper (64): shoulder girdle (scapula + clavicle), humerus, radius/ulna, 8 carpals, 5 metacarpals, 14 phalanges',
                'Lower (62): pelvic girdle (ilium=largest, ischium=strongest, pubis=anteriormost fused at symphysis pubis), femur (longest/strongest/heaviest), patella, tibia/fibula, 7 tarsals (calcaneus=largest), 5 metatarsals, 14 phalanges',
                'Femur = largest, longest, strongest, heaviest bone',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Fontanels (Soft Spots)',
          blocks: [
            {
              kind: 'table',
              headers: ['Fontanel', 'Shape', 'Location', 'Closes'],
              rows: [
                ['Anterior/Frontal/Bregmatic', 'Diamond (largest)', 'Parietals + frontal (sagittal/coronal sutures)', '18–24 months'],
                ['Posterior/Occipital', 'Triangular', 'Parietals + occipital (sagittal/lambdoidal sutures)', '2 months'],
                ['Antero-lateral/Sphenoid', '—', 'Frontal + parietal + temporal + sphenoid', '2 months'],
                ['Postero-lateral/Mastoid', '—', 'Parietal + temporal + occipital', '2 months'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Joints Classification',
          blocks: [
            {
              kind: 'table',
              headers: ['Class', 'Movement', 'Subtypes', 'Examples'],
              rows: [
                ['Synarthrosis', 'Immovable', 'Suture (skull), Gomphosis (teeth in sockets), Synchondrosis (epiphyseal plate)', 'Skull sutures, teeth'],
                ['Amphiarthrosis', 'Slightly movable', 'Syndesmosis (ligament joint), Symphysis (fibrocartilage disc)', 'Distal tibia-fibula, intervertebral discs, pubic symphysis'],
                ['Diarthrosis', 'Freely movable', 'Gliding, Hinge (ginglymus), Pivot (trochoid), Condyloid (ellipsoidal), Saddle, Ball-and-socket (enarthrosis)', 'Carpals, elbow, atlas-axis, wrist, thumb, shoulder/hip'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Lumbar puncture done at L3–L4 or L4–L5 (L4 is at the level of iliac crests). Spondylolisthesis (slip disk) usually affects L4–L5 or L5–S1.',
            },
          ],
        },
      ],
    },
    {
      id: 'muscular',
      title: 'Muscular System',
      blocks: [
        {
          kind: 'text',
          content: 'Myology = study of muscles. 605 skeletal muscles (850 including all types). Muscles are responsible for movement via contractility and conductivity. Muscle composition: 75% water, 20% protein, 15% carbohydrates/lipids/salts/creatine.',
        },
        {
          kind: 'diagram',
          id: 'ga-sarcomere',
        },
        {
          kind: 'sub',
          title: 'Sarcomere & Contractile Proteins',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Sarcomere — unit between 2 successive Z-lines; the contractile unit',
                'Actin filaments (thin) — F-actin (double helix with ADP active site) + Tropomyosin (covers active site at rest) + Troponin (T=affinity to tropomyosin; C=affinity to calcium; I=affinity to actin)',
                'Myosin filaments (thick) — light meromyosin + heavy meromyosin',
                'I-bands (isotropic) = light; A-bands (anisotropic) = dark; H-bands = light zone at center of A-band; Z-lines = midline of I-band',
                'Sarcoplasm = cytoplasm; Sarcolemma = cell membrane; Sarcoplasmic reticulum = ER (releases calcium during contraction)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ratchet Theory of Muscle Contraction',
          blocks: [
            {
              kind: 'text',
              content: 'Calcium (released from sarcoplasmic reticulum during spike potential) binds Troponin C → conformational change in Tropomyosin → Tropomyosin slides deeper into F-actin grooves → active site (ADP) on F-actin exposed → myosin head attaches to active site → tilts and drags actin forward → detaches → repeats. Smooth muscles contract the same way but lack troponin.',
            },
          ],
        },
        {
          kind: 'diagram',
          id: 'ga-muscle-types',
        },
        {
          kind: 'sub',
          title: 'Types of Muscle (Comparison)',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Skeletal', 'Cardiac', 'Smooth'],
              rows: [
                ['Action', 'Voluntary', 'Involuntary', 'Involuntary'],
                ['Striations', 'Striated', 'Striated', 'Non-striated'],
                ['Nucleus count', 'Many', 'Single', 'Single'],
                ['Nucleus location', 'Periphery', 'Central', 'Central'],
                ['% of body', '40%', '5–10%', '5–10%'],
                ['Intercalated disc', 'Absent', 'Present', 'Absent'],
                ['Function', 'Locomotion', 'Pumps blood', 'Peristalsis'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Notable Muscles',
          blocks: [
            {
              kind: 'table',
              headers: ['Muscle', 'Distinction'],
              rows: [
                ["Mueller's muscle", 'Shortest SMOOTH muscle — located at eyelids'],
                ['Stapedius', 'Smallest and weakest SKELETAL muscle — located in middle ears'],
                ['Tensor tympani', 'Shortest SKELETAL muscle — located at ear drum'],
                ['Styloglossus', 'Smallest and shortest skeletal muscle in the body'],
                ['Sartorius', 'Longest skeletal muscle'],
                ['Latissimus dorsi', 'Widest skeletal muscle'],
                ['Quadriceps femoris', 'Strongest skeletal muscle'],
                ['Tendon of Achilles', 'Largest tendon — connects gastrocnemius to calcaneus'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Muscle Contraction',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Isotonic — muscle shortens and thickens; work done; tension constant',
                'Isometric — muscle does NOT shorten (compelled to contract against load it cannot lift); no work done',
                'Tonic — partial contraction; continual activation of small motor units in rotation',
                'Tetanic — series of fused contractions; Incomplete tetanus: <20 stimuli/sec; Complete tetanus: >20 stimuli/sec',
                'Twitch — single quick contraction from single stimulus',
                'Summation (Treppe/Staircase phenomenon) — individual twitches added together',
                'All-or-None Law — nerve/muscle responds maximally or not at all when stimulus reaches threshold',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nervous',
      title: 'Nervous System',
      blocks: [
        {
          kind: 'text',
          content: 'Neurology = study of NS. Neurons/neurocytes = unit structure. Functions: controls body functions, center for behavior and intellectual activities. Divisions: CNS (brain + spinal cord) and PNS (12 cranial nerves + 31 spinal nerves).',
        },
        {
          kind: 'sub',
          title: 'Brain: Parts and Functions',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Cerebrum — largest; divided into 2 hemispheres by longitudinal fissure; 4 lobes: Frontal (thinking, planning, motor execution), Parietal (somatosensory, visual-spatial), Temporal (language, auditory, long-term memory, emotion), Occipital (visual perception)',
                'Fissures: Longitudinal (divides hemispheres), Central/Rolando (frontal from parietal), Lateral/Sylvian (temporal from frontal/parietal), Parieto-occipital (occipital from parietal)',
                'Basal Ganglia — caudate nucleus, putamen, globus pallidus, lentiform nucleus, substantia nigra (secretes dopamine); controls motor activity',
                'Limbic System — amygdala, thalamic nucleus, hippocampus, mammillary bodies, cingulate gyrus, septum pellucidum; controls emotion, behavior, motivation, aggression, sexual activity',
                'Hypothalamus — controls sleep/wake cycles, eating, drinking, hormone release via pituitary',
                'Cerebellum — "small brain"; 2 hemispheres, 3 lobes; coordinates voluntary motor activity ipsilaterally; maintains balance and posture',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Brodmann\'s Cortical Areas',
          blocks: [
            {
              kind: 'table',
              headers: ['Area', 'Function'],
              rows: [
                ['#3,1,2', 'Primary somatosensory cortex (post-central gyri)'],
                ['#4', 'Primary motor cortex (pre-central gyri)'],
                ['#6', 'Pre-motor area (extra-pyramidal tract) — planning complex movements'],
                ['#7', 'Somatosensory association cortex — visuo-motor coordination'],
                ['#8', 'Frontal eye fields — conscious control of eye movements'],
                ['#17', 'PRIMARY visual cortex — lips of calcarine fissure, medial occipital lobe; injury = cortical blindness'],
                ['#18', 'Secondary (optico-motor) visual cortex — injury affects eye movements'],
                ['#19', 'Associative visual cortex — visuo-psychic area; injury = visual agnosia'],
                ['#22', 'Wernicke\'s area — spoken language comprehension, semantic processing'],
                ['#41', 'Primary hearing center (superior temporal lobe)'],
                ['#44, 45', 'Broca\'s area — speech production (dominant hemisphere)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Visual agnosia = inability to recognize objects by sight while retaining ability to recognize by touch. Caused by injury to Brodmann area #19.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Brain Stem',
          blocks: [
            {
              kind: 'table',
              headers: ['Part', 'CN Nuclei', 'Key Functions'],
              rows: [
                ['Midbrain', 'CN#3, CN#4', 'Ocular reflexes, eye movements, Edinger-Westphal nucleus (parasympathetic CN#3); superior colliculus = optic reflexes; inferior colliculus = auditory reflexes'],
                ['Pons Varolii', 'CN#5–CN#8', 'Pneumotaxic center (apneustic + expiration centers); bridge between midbrain and medulla'],
                ['Medulla Oblongata', 'CN#9–CN#12', 'Vital centers: heart rate, blood pressure, respiratory, coughing, vomiting, swallowing; fiber tract crossing to contralateral side'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Spinal Nerves',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '31 total pairs: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal',
                'PNS subdivisions: Somatic NS (voluntary; to skeletal muscles/glands) and Autonomic NS (involuntary; to cardiac/smooth muscles)',
                'ANS has pre-ganglionic and post-ganglionic neurons that synapse at autonomic ganglia',
                'Sympathetic (thoraco-lumbar / adrenergic) — cell bodies at thoracic and lumbar spinal cord',
                'Parasympathetic (cranio-sacral / cholinergic) — cell bodies at cranial and sacral NS',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of Memory',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Explicit/Declarative — conscious recollection of factual information (e.g., who came to dinner last night)',
                'Episodic — recollection of past personal experiences at specific time/place (e.g., debut party)',
                'Semantic — recall of numbers, words for language (e.g., CN#2 = optic nerve)',
                'Implicit/Procedural — past experiences remembered without conscious recollection (e.g., green = grass)',
                'Autobiographical — recalling personal history (e.g., childhood)',
                'Located at: hippocampus, amygdala, pre-frontal cortex, cerebellum',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Grey vs White Matter',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Grey matter — neuronal cell bodies, dendrites, unmyelinated axons, glial cells; grey-brown color from capillary blood and Nissl/Tigroid bodies (rough ER = protein synthesis)',
                'White matter — myelinated axon tracts; whiteness from myelin sheath',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'circulatory',
      title: 'Circulatory & Lymphatic System',
      blocks: [
        {
          kind: 'text',
          content: 'Cardiology = study of the heart. The cardiovascular system transports oxygen, nutrients, hormones, and waste products. Comprises the heart, blood vessels (arteries, veins, capillaries), and blood.',
        },
        {
          kind: 'sub',
          title: 'Heart',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Located in mediastinum; cone-shaped muscular organ; weight ~300 g in adult',
                '4 chambers: 2 atria (receiving) and 2 ventricles (pumping)',
                'Right side = pulmonary circuit (deoxygenated blood to lungs)',
                'Left side = systemic circuit (oxygenated blood to body)',
                'Pericardium — fibroserous sac covering the heart; pericardial cavity filled with serous fluid',
                'Valves: Tricuspid (R atrioventricular), Bicuspid/Mitral (L atrioventricular), Pulmonary semilunar, Aortic semilunar',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood Vessels',
          blocks: [
            {
              kind: 'table',
              headers: ['Vessel', 'Direction', 'Key Feature'],
              rows: [
                ['Arteries', 'Away from heart', 'Thick muscular walls; carry oxygenated blood (except pulmonary artery)'],
                ['Veins', 'Toward heart', 'Thinner walls; have valves; carry deoxygenated blood (except pulmonary vein)'],
                ['Capillaries', 'Between arteries and veins', 'Single-cell thick endothelium; site of gas and nutrient exchange'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blood Composition',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Plasma (55%) — liquid portion: water, proteins (albumin, globulin, fibrinogen), electrolytes, hormones, nutrients',
                'Formed elements (45%): RBC/Erythrocytes (carry O2 via hemoglobin; no nucleus in mature form; ~120-day lifespan), WBC/Leukocytes (immune defense; 5 types: neutrophils, eosinophils, basophils, lymphocytes, monocytes), Platelets/Thrombocytes (clotting)',
                'Blood types: ABO system (A, B, AB, O); Rh factor (+/-)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Body Fluids',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '66% (2/3) of total body weight is water',
                'ICF (intracellular) = 40% TBW; dominant electrolyte = K+',
                'ECF (extracellular) = 20% TBW; dominant electrolytes = Na+ and Cl-; includes interstitial fluid, blood plasma, lymph, transcellular fluids (aqueous humor, CSF, endolymph)',
                'Fluid movement: Simple diffusion (gases, lipid-soluble), Facilitated diffusion (carbohydrates/proteins via carrier), Filtration (pressure gradient), Active transport (low → high concentration, needs ATP), Osmosis (water from low to high solute concentration)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'respiratory',
      title: 'Respiratory System',
      blocks: [
        {
          kind: 'text',
          content: 'Pulmonology = study of respiratory system. Functions: exchange of O2 and CO2, phonation (voice), olfaction, acid-base balance. Comprises upper (nose, pharynx, larynx) and lower (trachea, bronchi, lungs) respiratory tracts.',
        },
        {
          kind: 'sub',
          title: 'Upper Respiratory Tract',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Nose — entry point; filters, warms, and humidifies air; olfaction via CN#1 (olfactory)',
                'Pharynx — nasopharynx (above soft palate), oropharynx (soft palate to epiglottis), laryngopharynx (epiglottis to esophagus)',
                'Larynx (voice box) — contains vocal cords; epiglottis prevents food from entering airway; thyroid cartilage (Adam\'s apple)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lower Respiratory Tract',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Trachea — 11–13 cm long; bifurcates at carina (Sternal angle of Louis, T4–T5) into L and R bronchi',
                'R primary bronchus — wider, shorter, more vertical; foreign bodies more likely to lodge here',
                'Bronchi → Bronchioles → Alveolar ducts → Alveoli (site of gas exchange; ~300 million alveoli)',
                'Lungs: R lung (3 lobes: upper, middle, lower), L lung (2 lobes: upper, lower); covered by visceral pleura',
                'Surfactant — produced by type II pneumocytes; reduces surface tension; deficiency = respiratory distress syndrome (RDS) in premature infants',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Breathing Mechanics',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Inspiration — diaphragm contracts (descends), intercostals contract, chest expands, pressure decreases, air enters',
                'Expiration — diaphragm relaxes, chest recoils, pressure increases, air exits',
                'Pneumotaxic center (pons) — regulates respiratory rhythm',
                'Respiratory center (medulla oblongata) — controls basic rhythm of breathing (inhale/exhale)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'digestive',
      title: 'Digestive System',
      blocks: [
        {
          kind: 'text',
          content: 'Gastroenterology = study of GI tract. Functions: ingestion, mechanical and chemical digestion, absorption of nutrients, elimination of waste. Comprises the GI tract (mouth to anus, ~9 m) and accessory organs (liver, gallbladder, pancreas, salivary glands).',
        },
        {
          kind: 'sub',
          title: 'GI Tract Components',
          blocks: [
            {
              kind: 'table',
              headers: ['Organ', 'Key Functions'],
              rows: [
                ['Mouth', 'Mechanical digestion (teeth, tongue); salivary amylase begins carbohydrate digestion'],
                ['Esophagus', 'Peristalsis transports food to stomach; cardiac sphincter prevents reflux'],
                ['Stomach', 'Churns food; HCl (kills bacteria, denatures proteins); pepsin begins protein digestion; produces intrinsic factor (for B12 absorption)'],
                ['Small intestine (6–7 m)', 'Duodenum (major digestion site; bile + pancreatic juice enter), Jejunum, Ileum; major absorption site; villi + microvilli increase surface area'],
                ['Large intestine (1.5 m)', 'Cecum, ascending colon, transverse colon, descending colon, sigmoid colon, rectum, anus; water and electrolyte reabsorption; houses gut flora'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Accessory Digestive Organs',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Liver — largest gland/organ; produces bile (emulsifies fats), detoxification, glycogen storage, protein synthesis, coagulation factors',
                'Gallbladder — stores and concentrates bile; bile duct empties at duodenum',
                'Pancreas — exocrine: produces pancreatic juice (amylase, lipase, proteases) into duodenum; endocrine: islets of Langerhans (alpha = glucagon; beta = insulin)',
                'Salivary glands — parotid (largest; CN#9), submandibular, sublingual; produce saliva with amylase',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'urinary-endocrine',
      title: 'Urinary & Endocrine Systems',
      blocks: [
        {
          kind: 'sub',
          title: 'Urinary System',
          blocks: [
            {
              kind: 'text',
              content: 'Nephrology = study of kidneys. Urology = study of urinary system. Functions: filtration of blood, removal of metabolic wastes, regulation of fluid/electrolyte balance, acid-base regulation, erythropoietin production.',
            },
            {
              kind: 'bullets',
              items: [
                'Kidneys (2) — bean-shaped; located retroperitoneally at T12–L3; right kidney slightly lower (due to liver); nephron = functional unit (~1 million per kidney)',
                'Nephron components: Glomerulus (Bowman\'s capsule) → Proximal convoluted tubule → Loop of Henle → Distal convoluted tubule → Collecting duct → Ureter',
                'Ureters — carry urine from kidney to bladder',
                'Urinary bladder — stores urine (capacity ~500 mL); trigone = internal landmark',
                'Urethra — male (~20 cm; also carries semen); female (~4 cm)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Endocrine System',
          blocks: [
            {
              kind: 'text',
              content: 'Endocrinology = study of hormones. Endocrine glands secrete hormones directly into bloodstream (ductless); exocrine glands secrete via ducts.',
            },
            {
              kind: 'table',
              headers: ['Gland', 'Key Hormones', 'Functions'],
              rows: [
                ['Pituitary (master gland)', 'GH, TSH, ACTH, FSH, LH, ADH, Oxytocin', 'Controls other endocrine glands; growth; water reabsorption'],
                ['Thyroid', 'T3, T4, Calcitonin', 'Metabolism (T3/T4); calcium lowering (calcitonin)'],
                ['Parathyroid (4)', 'PTH (parathyroid hormone)', 'Raises blood calcium; stimulates osteoclasts'],
                ['Adrenal cortex', 'Cortisol (glucocorticoid), Aldosterone (mineralocorticoid)', 'Stress response; Na+ retention; glucose regulation'],
                ['Adrenal medulla', 'Epinephrine, Norepinephrine', 'Fight-or-flight response'],
                ['Pancreas (beta cells)', 'Insulin', 'Lowers blood glucose; promotes glycogen storage'],
                ['Pancreas (alpha cells)', 'Glucagon', 'Raises blood glucose; promotes glycogenolysis'],
                ['Pineal gland', 'Melatonin', 'Sleep-wake cycle regulation'],
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
          headers: ['Item', 'Key Fact'],
          rows: [
            ['Adult bones', '206 (270–305 in neonate/infant)'],
            ['Axial skeleton', '80 bones'],
            ['Appendicular skeleton', '126 bones'],
            ['Skull bones (adult)', '28 total (8 paired + 5 unpaired + mandible + 6 ossicles)'],
            ['Anterior fontanel closes', '18–24 months'],
            ['Posterior fontanel closes', '2 months'],
            ['Vertebral column', '33 (child), 26 (adult); 71 cm long'],
            ['Epidermis layers', '5 (Corneum → Lucidum → Granulosum → Spinosum → Germinativum)'],
            ['Muscles (skeletal only)', '605 (850 all types)'],
            ['Skeletal muscle % body', '40%'],
            ['Cardiac/smooth muscle % body', '5–10% each'],
            ['Sartorius', 'Longest skeletal muscle'],
            ['Stapedius', 'Smallest and weakest skeletal muscle'],
            ['Tensor tympani', 'Shortest skeletal muscle'],
            ['Stapes (stirrup)', 'Smallest bone in body'],
            ['Femur', 'Largest, longest, strongest, heaviest bone'],
            ['Anterior fontanel shape', 'Diamond (largest fontanel)'],
            ['Cranial nerves', '12 pairs (arising from brain)'],
            ['Spinal nerves', '31 pairs'],
            ['Brain weight', '1,345 g (male); 1,245 g (female)'],
            ['Brodmann #17', 'Primary visual cortex (calcarine fissure)'],
            ['Brodmann #8', 'Frontal eye fields (conscious eye movement)'],
            ['Brodmann #44/45', "Broca's area (speech production)"],
            ['Brodmann #22', "Wernicke's area (language comprehension)"],
            ['Body water content', '66% (2/3) of total body weight'],
            ['ICF dominant electrolyte', 'K+ (potassium)'],
            ['ECF dominant electrolytes', 'Na+ and Cl-'],
            ['Right lung lobes', '3 (upper, middle, lower)'],
            ['Left lung lobes', '2 (upper, lower)'],
            ['Tracheal bifurcation site', 'Carina at T4–T5 (Sternal angle of Louis)'],
          ],
        },
      ],
    },
  ],
}
