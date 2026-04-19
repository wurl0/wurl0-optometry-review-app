import { NotesQuizData } from '@/lib/notes-quiz-types'

export const generalAnatomyQuiz: NotesQuizData = {
  subject: 'General Anatomy',
  slug: 'general-anatomy',
  questions: [
    {
      kind: 'mcq',
      stem: 'Which layer of the epidermis is found ONLY in thick skin (palm and sole) and is absent in thin skin?',
      options: ['Stratum Corneum', 'Stratum Lucidum', 'Stratum Granulosum', 'Stratum Spinosum'],
      correct: 1,
      answer: 'Stratum Lucidum contains eleidin (an intermediate stage of keratin formation). It is a thin, glassy layer found exclusively in thick skin. Thin skin covering most of the body has only 4 epidermal layers, lacking Stratum Lucidum.',
    },
    {
      kind: 'mcq',
      stem: 'The smallest bone in the human body is the:',
      options: ['Styloid process', 'Stapes (stirrup)', 'Malleus (hammer)', 'Patella'],
      correct: 1,
      answer: 'The stapes (stirrup) is the smallest bone in the body, located in the middle ear. It is one of the 3 ossicles: malleus (hammer), incus (anvil), stapes (stirrup). The stapes is also involved in sound transmission to the oval window.',
    },
    {
      kind: 'mcq',
      stem: 'A patient sustains an injury to Brodmann Area #19. Which visual deficit is expected?',
      options: ['Cortical blindness', 'Impaired eye movements', 'Visual agnosia', 'Loss of color vision'],
      correct: 2,
      answer: 'Brodmann Area #19 is the associative (visuo-psychic) visual cortex. Injury causes visual agnosia — inability to recognize objects by sight while retaining the ability to recognize them by touch. Area #17 injury = cortical blindness. Area #18 injury = impaired eye movements (optico-motor center).',
    },
    {
      kind: 'mcq',
      stem: 'The anterior (frontal) fontanel is the largest fontanel. When does it normally close?',
      options: ['2 months', '6 months', '12 months', '18–24 months'],
      correct: 3,
      answer: 'The anterior (frontal/bregmatic) fontanel is diamond-shaped and the largest. It closes at 18–24 months. All other fontanels (posterior, sphenoid, mastoid) close at approximately 2 months. The anterior fontanel is clinically important: bulging suggests increased intracranial pressure; sunken suggests dehydration.',
    },
    {
      kind: 'mcq',
      stem: 'Which muscle is classified as the smallest and weakest skeletal muscle?',
      options: ["Mueller's muscle", 'Tensor tympani', 'Stapedius', 'Styloglossus'],
      correct: 2,
      answer: "Stapedius is the smallest and weakest skeletal muscle, located in the middle ear. Mueller's muscle is the shortest SMOOTH muscle (located at the eyelids). Tensor tympani is the SHORTEST skeletal muscle (located at the ear drum). Styloglossus is described as the smallest and shortest, but Stapedius is specifically the smallest/weakest.",
    },
    {
      kind: 'mcq',
      stem: 'Which type of muscle contraction involves NO shortening and NO work done?',
      options: ['Isotonic contraction', 'Isometric contraction', 'Tonic contraction', 'Tetanic contraction'],
      correct: 1,
      answer: 'Isometric contraction: the muscle is compelled to contract against a load it cannot lift. Muscle length stays the same (iso = same; metric = measure/length). No shortening occurs and no work is done. Energy is still consumed. In isotonic contraction, the muscle shortens and work IS done.',
    },
    {
      kind: 'mcq',
      stem: 'Calcium released during muscle contraction primarily binds to which protein to trigger the ratchet mechanism?',
      options: ['Tropomyosin', 'F-actin', 'Troponin C', 'Heavy meromyosin'],
      correct: 2,
      answer: 'Calcium binds Troponin C (which has affinity for calcium). This causes a conformational change in tropomyosin, moving it deeper into the F-actin groove to uncover the ADP active site. Troponin I has affinity for actin; Troponin T has affinity for tropomyosin. Smooth muscle lacks troponin entirely.',
    },
    {
      kind: 'mcq',
      stem: 'Which Brodmann area is responsible for the frontal eye fields — the conscious control of eye movements?',
      options: ['Area #4', 'Area #6', 'Area #8', 'Area #17'],
      correct: 2,
      answer: 'Brodmann Area #8 = Frontal Eye Fields, located in the frontal lobe. This area controls conscious voluntary eye movements. Area #4 = primary motor cortex. Area #6 = pre-motor area (planning complex movements). Area #17 = primary visual cortex.',
    },
    {
      kind: 'mcq',
      stem: 'The lumbar puncture (spinal tap) is performed between which vertebral levels?',
      options: ['L1–L2', 'L2–L3', 'L3–L4 or L4–L5', 'L5–S1'],
      correct: 2,
      answer: 'Lumbar puncture is done at L3–L4 or L4–L5. L4 is easily located because it is at the level of the iliac crests. This region is safely below the termination of the spinal cord (conus medullaris at L1–L2 in adults), reducing the risk of cord injury.',
    },
    {
      kind: 'tf',
      stem: 'The right primary bronchus is narrower and more horizontal than the left bronchus, making it less likely for aspirated foreign bodies to lodge there.',
      correct: false,
      answer: 'FALSE. The right primary bronchus is WIDER, SHORTER, and more VERTICAL than the left. This anatomic feature makes foreign bodies and aspirated material far more likely to lodge in the RIGHT bronchus. The left bronchus is narrower and more horizontal.',
    },
    {
      kind: 'tf',
      stem: 'In the Ratchet Theory, smooth muscle contraction follows the same mechanism as skeletal muscle, except smooth muscle lacks troponin.',
      correct: true,
      answer: 'TRUE. Smooth muscle contraction follows the same basic ratchet mechanism (calcium, actin-myosin interaction) but lacks the troponin-tropomyosin complex. Instead, smooth muscle uses calmodulin as the calcium sensor to trigger myosin light chain kinase activation.',
    },
    {
      kind: 'tf',
      stem: 'The medial plane and the sagittal plane divide the body into equal left and right halves.',
      correct: false,
      answer: 'FALSE. Only the MEDIAN (mid-sagittal) plane divides the body into equal left and right halves. The SAGITTAL plane is parallel to the median plane but divides the body UNEQUALLY into left and right portions.',
    },
    {
      kind: 'identification',
      stem: 'This is the unit structure of bone, consisting of Haversian canals, concentric Haversian lamellae, and lacunae containing osteocytes. Name it.',
      answer: 'Haversian System (or Osteon) — the structural and functional unit of compact bone.',
    },
    {
      kind: 'identification',
      stem: 'This part of the brain contains the Edinger-Westphal nucleus, which gives rise to pre-ganglionic parasympathetic fibers of CN#3, used in the direct and indirect light reflex.',
      answer: 'Midbrain (part of the brainstem). The Edinger-Westphal nucleus is located in the midbrain, at the level of the superior colliculus.',
    },
    {
      kind: 'identification',
      stem: 'This mnemonic — "Please Put Towel In My New Zipper Luggage" — helps recall which anatomical structures?',
      answer: 'The 8 PAIRED bones of the skull: Palatine, Parietal, Temporal, Inferior nasal concha, Maxilla, Nasal, Zygomatic, Lacrimal.',
    },
    {
      kind: 'identification',
      stem: 'Name the three types of ribs and their vertebral levels.',
      answer: 'True ribs (T1–T7): directly attached to sternum by costal cartilage. False ribs (T8–T10): attached to preceding ribs via costal arch. Floating ribs (T11–T12): no anterior attachment.',
    },
  ],
}
