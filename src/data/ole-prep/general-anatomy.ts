import { OlePrepData } from '@/lib/ole-prep-types'

export const generalAnatomyData: OlePrepData = {
  subject: 'General Anatomy',
  slug: 'general-anatomy',
  sections: [
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: '8 Paired Bones of the Skull',
          device: 'Please Put Towel In My New Zipper Luggage',
          breakdown: 'Palatine, Parietal, Temporal, Inferior nasal concha, Maxilla, Nasal, Zygomatic, Lacrimal',
        },
        {
          kind: 'mnemonic',
          term: '5 Unpaired Bones of the Skull',
          device: 'Frequent Explorers Seek Out Villages',
          breakdown: 'Frontal, Ethmoid, Sphenoid, Occipital, Vomer',
        },
        {
          kind: 'mnemonic',
          term: 'Epidermis Layers (outer to inner)',
          device: 'Come Let\'s Get Some Guys',
          breakdown: 'Corneum, Lucidum, Granulosum, Spinosum, Germinativum',
        },
        {
          kind: 'mnemonic',
          term: 'Notable Muscle Distinctions',
          device: 'Mueller\'s Smallest Smooth; Stapedius Smallest Skeletal; Sartorius Longest',
          breakdown: 'Mueller\'s = shortest smooth; Stapedius = smallest/weakest skeletal (middle ear); Tensor tympani = shortest skeletal (ear drum); Sartorius = longest skeletal; Quadriceps = strongest; Latissimus dorsi = widest',
        },
        {
          kind: 'mnemonic',
          term: 'Carpals (Proximal to Distal)',
          device: 'Some Lovers Try Positions That They Can\'t Handle',
          breakdown: 'Scaphoid, Lunate, Triquetrum, Pisiform (proximal); Trapezium, Trapezoid, Capitate, Hamate (distal)',
        },
        {
          kind: 'mnemonic',
          term: 'Brodmann Visual Areas (17-18-19)',
          device: 'Primary, Secondary, Associative (P-S-A)',
          breakdown: '#17 = Primary visual cortex (calcarine fissure); #18 = Secondary/optico-motor (para-striate); #19 = Associative/visuo-psychic (peri-striate); Injury: #17 = cortical blindness; #18 = affects eye movements; #19 = visual agnosia',
        },
        {
          kind: 'mnemonic',
          term: 'Types of Joints (Diarthrosis, 6 subtypes)',
          device: 'Good Hinge Players Can Score Balls',
          breakdown: 'Gliding (arthrodia), Hinge (ginglymus), Pivot (trochoid), Condyloid (ellipsoidal), Saddle, Ball-and-socket (enarthrosis)',
        },
        {
          kind: 'mnemonic',
          term: 'Rib Types',
          device: 'True Friends Float',
          breakdown: 'True ribs (T1–T7, direct to sternum), False ribs (T8–T10, costal arch), Floating ribs (T11–T12, no attachment)',
        },
      ],
    },
    {
      id: 'high-yield-facts',
      title: 'High-Yield Facts',
      icon: '⚡',
      items: [
        {
          kind: 'fact',
          content: 'The FEMUR is the largest, longest, strongest, and heaviest bone in the body. The STAPES (stirrup) is the SMALLEST bone in the body, located in the middle ear.',
          highlight: 'Femur = largest/longest; Stapes = smallest bone',
        },
        {
          kind: 'fact',
          content: 'The ANTERIOR fontanel is diamond-shaped (largest fontanel) and closes at 18–24 months. All other fontanels (posterior, sphenoid, mastoid) close at 2 months.',
          highlight: 'Anterior fontanel closes last (18–24 months)',
        },
        {
          kind: 'fact',
          content: 'Stratum Lucidum is present ONLY in THICK SKIN (palm and sole). It is absent in thin skin. It contains eleidin, an intermediate stage in keratin formation.',
          highlight: 'Stratum Lucidum: thick skin only (palm/sole)',
        },
        {
          kind: 'fact',
          content: 'Brodmann Area #8 = Frontal Eye Fields (conscious control of eye movements). Brodmann Area #17 = Primary Visual Cortex. Area #18 = Secondary (optico-motor). Area #19 = Associative (visuo-psychic). Injury to #19 causes VISUAL AGNOSIA.',
          highlight: '#8 = frontal eye fields; #17 = primary visual; #19 injury = visual agnosia',
        },
        {
          kind: 'fact',
          content: 'The RIGHT primary bronchus is wider, shorter, and more vertical than the left. Foreign bodies and aspirated material are MORE LIKELY to enter and lodge in the RIGHT bronchus.',
          highlight: 'Right bronchus: wider, shorter, more vertical = foreign body preferred site',
        },
        {
          kind: 'fact',
          content: 'Calcium is the trigger for muscle contraction in the Ratchet Theory. Calcium binds Troponin C → Tropomyosin moves → active site on F-actin uncovered → myosin head attaches. Smooth muscle contracts the same way but LACKS TROPONIN.',
          highlight: 'Ca2+ → Troponin C → Tropomyosin shifts → myosin binds actin',
        },
        {
          kind: 'fact',
          content: 'Lumbar puncture is performed at L3–L4 or L4–L5. L4 is at the level of the iliac crests. Spondylolisthesis (slip disk) typically affects L4–L5 or L5–S1.',
          highlight: 'Lumbar tap: L3–L4 or L4–L5; L4 = level of iliac crests',
        },
        {
          kind: 'fact',
          content: 'The mediastinum separates the pleural cavities and contains the heart, trachea, primary bronchi, esophagus, thymus, SVC, thoracic aorta, and phrenic and vagus nerves.',
          highlight: 'Mediastinum contains heart, trachea, esophagus, thymus, great vessels',
        },
        {
          kind: 'fact',
          content: 'The pancreatic alpha cells secrete GLUCAGON (raises blood glucose). Beta cells secrete INSULIN (lowers blood glucose). Remember: A before B → Alpha = glucagon raises glucose; Beta = insulin brings it down.',
          highlight: 'Alpha cells = glucagon (up); Beta cells = insulin (down)',
        },
        {
          kind: 'fact',
          content: 'Intracellular fluid (ICF) = 40% TBW; dominant electrolyte = K+ (potassium). Extracellular fluid (ECF) = 20% TBW; dominant electrolytes = Na+ and Cl-. Total body water = 66% of body weight.',
          highlight: 'ICF = K+; ECF = Na+/Cl-; total body water = 66% TBW',
        },
        {
          kind: 'fact',
          content: 'The All-or-None Law states that a nerve or muscle responds MAXIMALLY or NOT AT ALL when a threshold stimulus is applied. There is no partial response — the stimulus must reach threshold.',
          highlight: 'All-or-None Law: threshold stimulus → maximal response, or none at all',
        },
        {
          kind: 'fact',
          content: 'The Edinger-Westphal nucleus in the midbrain gives rise to the pre-ganglionic parasympathetic fibers of CN#3, used in the direct and indirect light reflex. It is located in the midbrain (superior colliculus level).',
          highlight: 'Edinger-Westphal = midbrain; parasympathetic source for CN#3 pupil reflex',
        },
      ],
    },
    {
      id: 'board-traps',
      title: 'Board Traps',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'Which is the smallest bone in the body?',
          wrong: 'Styloid process',
          correct: 'Stapes (stirrup) — one of the 3 ossicles in the middle ear',
          why: 'The stapes is consistently the smallest bone in the human body. Do not confuse with Stapedius muscle (smallest/weakest skeletal MUSCLE). The stapes is a BONE; Stapedius is a MUSCLE.',
        },
        {
          kind: 'trap',
          question: 'Mueller\'s muscle is the shortest smooth muscle. Stapedius is the smallest skeletal muscle. What is the shortest skeletal muscle?',
          wrong: 'Stapedius',
          correct: 'Tensor tympani — located at the ear drum. Stapedius is smallest AND weakest, but Tensor tympani is the SHORTEST skeletal muscle.',
          why: 'Stapedius = smallest and weakest skeletal muscle (middle ear). Tensor tympani = SHORTEST skeletal muscle (ear drum). These two are different muscles. Mueller\'s = shortest SMOOTH muscle (eyelids).',
        },
        {
          kind: 'trap',
          question: 'Is Stratum Lucidum present in skin everywhere on the body?',
          wrong: 'Yes, it is a layer of the epidermis present in all skin',
          correct: 'No — Stratum Lucidum is present ONLY in thick skin (palm of hands and sole of feet)',
          why: 'Thin skin (most of the body) lacks Stratum Lucidum. Only thick skin at the palms and soles has this layer. Thin skin has 4 layers; thick skin has 5 layers.',
        },
        {
          kind: 'trap',
          question: 'The anterior fontanel closes at the same time as other fontanels. True or False?',
          wrong: 'True — all fontanels close around 2 months',
          correct: 'False — the anterior fontanel is the last to close, at 18–24 months',
          why: 'Posterior, sphenoid, and mastoid fontanels all close at 2 months. The anterior (frontal/bregmatic) fontanel is diamond-shaped, the largest, and does not close until 18–24 months after birth.',
        },
        {
          kind: 'trap',
          question: 'Visual agnosia is caused by injury to which Brodmann area?',
          wrong: '#17 (primary visual cortex)',
          correct: '#19 (associative/visuo-psychic area)',
          why: '#17 injury = cortical blindness (cannot see). #18 injury = affects eye movements (optico-motor). #19 injury = visual agnosia (can see but cannot recognize objects by sight; can still recognize by touch). These three are the "seeing" areas and their injuries are distinct board favorites.',
        },
        {
          kind: 'trap',
          question: 'In Isometric contraction, work is done and the muscle shortens. True or False?',
          wrong: 'True',
          correct: 'False — in Isometric contraction, the muscle does NOT shorten and no work is done',
          why: 'ISO = same, METRIC = length. Muscle length stays the same. Work is NOT done. In ISOtonic contraction, the muscle DOES shorten and work IS done. Memory tip: Tonic = tone changes (shortens); Metric = measure/length stays same.',
        },
      ],
    },
    {
      id: 'active-recall',
      title: 'Active Recall',
      icon: '🔁',
      items: [
        {
          kind: 'recall',
          prompt: 'List the 5 layers of the epidermis from outer to inner.',
          answer: 'Stratum Corneum → Stratum Lucidum → Stratum Granulosum → Stratum Spinosum → Stratum Germinativum. Mnemonic: "Come Let\'s Get Some Guys"',
        },
        {
          kind: 'recall',
          prompt: 'What are the 8 paired bones of the skull?',
          answer: 'Palatine, Parietal, Temporal, Inferior nasal concha, Maxilla, Nasal, Zygomatic, Lacrimal. Mnemonic: "Please Put Towel In My New Zipper Luggage"',
        },
        {
          kind: 'recall',
          prompt: 'What are the 5 unpaired bones of the skull?',
          answer: 'Frontal, Ethmoid, Sphenoid, Occipital, Vomer. Mnemonic: "Frequent Explorers Seek Out Villages"',
        },
        {
          kind: 'recall',
          prompt: 'Name the 6 types of diarthrosis joints and give one example of each.',
          answer: 'Gliding (carpals/tarsals), Hinge/Ginglymus (elbow, knee), Pivot/Trochoid (atlas-axis rotation), Condyloid/Ellipsoidal (wrist flex/extend), Saddle (thumb CMC joint), Ball-and-socket/Enarthrosis (shoulder, hip)',
        },
        {
          kind: 'recall',
          prompt: 'What are the 3 types of ribs and their vertebral attachment levels?',
          answer: 'True ribs (T1–T7): attached directly to sternum by costal cartilage. False ribs (T8–T10): attached to preceding ribs via costal arch. Floating ribs (T11–T12): no anterior attachment at all.',
        },
        {
          kind: 'recall',
          prompt: 'What are the Brodmann areas for primary, secondary, and associative visual cortex? What happens when each is injured?',
          answer: '#17 = primary visual cortex → injury = cortical blindness. #18 = secondary (optico-motor) → injury = affects eye movements. #19 = associative (visuo-psychic) → injury = visual agnosia (cannot recognize by sight, can by touch).',
        },
        {
          kind: 'recall',
          prompt: 'What triggers muscle contraction in the Ratchet Theory? Describe the sequence.',
          answer: 'Calcium released from sarcoplasmic reticulum → binds Troponin C → Tropomyosin shifts → uncovers ADP active site on F-actin → myosin head attaches → tilts and drags actin forward → detaches → repeats. Smooth muscle uses same mechanism but has NO troponin.',
        },
        {
          kind: 'recall',
          prompt: 'What are the dominant electrolytes in ICF and ECF?',
          answer: 'ICF (intracellular): K+ (potassium) dominant. ECF (extracellular): Na+ and Cl- dominant. Total body water = 66% of body weight. ICF = 40% TBW; ECF = 20% TBW.',
        },
        {
          kind: 'recall',
          prompt: 'What distinguishes the three types of synarthrosis joints?',
          answer: 'Suture = fibrous joint between skull bones. Gomphosis = cone-shaped peg in socket (teeth in alveoli). Synchondrosis = hyaline cartilage joint, eventually replaced by bone (e.g., epiphyseal plate, rib-sternum).',
        },
        {
          kind: 'recall',
          prompt: 'What structures are contained in the mediastinum?',
          answer: 'Heart, trachea, primary bronchi (L and R), esophagus, thymus, SVC (superior vena cava), thoracic aorta, lymph nodes, phrenic nerves, vagus nerves.',
        },
      ],
    },
  ],
}
