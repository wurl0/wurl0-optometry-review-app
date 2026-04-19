import { NotesData } from '@/lib/notes-types'

export const ocularDiseaseNotes: NotesData = {
  subject: 'Ocular Disease',
  slug: 'ocular-disease',
  sections: [
    {
      id: 'orbit-globe',
      title: 'Orbit & Globe Anomalies',
      blocks: [
        {
          kind: 'text',
          content: 'Orbital and globe diseases include congenital size anomalies, displacement disorders, and inflammatory conditions. Proper terminology distinguishes between a truly enlarged globe versus one that is displaced anteriorly.',
        },
        {
          kind: 'sub',
          title: 'Globe Size Terminology',
          blocks: [
            {
              kind: 'table',
              headers: ['Term', 'Definition', 'Key Association'],
              rows: [
                ['Anophthalmos', 'Complete absence of the eyeball', 'Congenital'],
                ['Microphthalmos', 'Small malformed eye; associated with colobomas and cyst', 'Congenital'],
                ['Nanophthalmos', 'Small eye with NORMAL internal structures; thickened sclera and choroid; high hyperopia; normal lens volume', 'Congenital — distinct from microphthalmos'],
                ['Macrophthalmia', 'Enlargement of the globe in all directions', 'Congenital'],
                ['Phthisis bulbi', 'Degenerative shrinkage/disorganization of the eyeball', 'Injury or trauma'],
                ['Buphthalmos', 'Increase in size of anterior and posterior parts of globe (bull eye)', 'Congenital glaucoma'],
                ['Exophthalmos', 'Abnormal BILATERAL protrusion of eyeball', "Grave's disease (endocrine)"],
                ['Proptosis', 'Passive or mechanical protrusion (can be unilateral)', 'Orbital pathology'],
                ['Enophthalmos', 'Recession of eyeball within the orbit', 'Floor fracture, atrophy, surgical decompression'],
              ],
            },
            {
              kind: 'pearl',
              content: "Buphthalmos = the eyeball itself is physically enlarged. Exophthalmos = the eyeball is pushed forward. Buphthalmos is always bilateral; exophthalmos is associated with Grave's disease. Nanophthalmos vs Microphthalmos: both are small eyes, but Nanophthalmos has NORMAL internal structures with thickened sclera and high hyperopia. Microphthalmos is a malformed eye with colobomas.",
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Proptosis Classification (A-I-P-U-B)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Active — orbital emphysema (fracture of medial wall), hemorrhage, rupture of ethmoid, mucocele into orbit',
                'Intermittent — varicosities of orbit, highly vascular tumor, recurrent orbital hemorrhage, periodic edema, venous congestion',
                'Pulsating — carotid cavernous sinus fistula, vascular tumor, aneurysm or cerebral pulsation',
                'Unilateral — inflammatory lesions: orbital cellulitis, abscess, tenonitis, dacryoadenitis, panophthalmos',
                'Bilateral — endocrine disorders: thyrotoxic ophthalmopathy (Grave\'s disease)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Orbital Inflammatory Diseases',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Orbital cellulitis — inflammation of cellular tissue of orbit; most common etiology is ethmoiditis; can progress to retrobulbar abscess; S/S: lid swelling, chemosis, exophthalmos, impaired eye movement, reduced vision, violent orbital pain; Treatment: I&D, massive antibiotics, warm compress',
                'Pseudotumor of orbit — orbital cellulitis with clinical manifestations resembling orbital tumor; seen in middle-age or older',
                'Tenonitis — rare inflammation with serous effusion into Tenon\'s space; seen after injury or tenotomy',
                'Orbital periostitis — involves preorbital margins; may form sub-periosteal abscess perforating skin to form fistula; Etiologies: trauma, TB, syphilis',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Orbital Tumors',
          blocks: [
            {
              kind: 'text',
              content: 'Cardinal signs of orbital tumor: unilateral proptosis, visual disturbances, radiologic bone changes.',
            },
            {
              kind: 'table',
              headers: ['Type', 'Most Common', 'Key Feature'],
              rows: [
                ['Benign', 'Hemangioma (most common overall)', 'Also: Neurofibroma (neurogenic), Meningioma, Glioma of optic nerve'],
                ['Malignant', 'Rhabdomyosarcoma', 'Common in male children; affects skeletal EOM'],
                ['Malignant', 'Carcinoma of orbit', 'Arises from lacrimal gland tumor'],
                ['Malignant', 'Sarcoma of orbit', 'Highly malignant and rapidly fatal'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eyelids',
      title: 'Eyelid Disorders',
      blocks: [
        {
          kind: 'text',
          content: 'Eyelid disorders are among the most commonly tested topics in ocular disease. Conditions range from congenital anomalies to inflammatory diseases, positional abnormalities, and tumors.',
        },
        {
          kind: 'sub',
          title: 'Congenital Eyelid Anomalies',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Coloboma — triangular notching at junction of inner & middle third of upper lid margins; absence of eyelashes and glands; due to absence of ocular tissue',
                'Epicanthus — most common; bilateral crescentic vertical fold of skin at inner canthus; simulates convergent strabismus (pseudostrabismus or esotropia)',
                'Blepharoptosis — drooping of eyelid with narrowing of palpebral fissure; Types: Congenital (bilateral, CN#3 interference) or Acquired (unilateral)',
                'Distichiasis — supernumerary row of eyelashes stemming from the Meibomian gland orifices; results in two rows of eyelashes, the second row directed toward the cornea causing trichiasis',
                'Trichiasis — eyelashes grow inward toward the eye, rubbing against the cornea and conjunctiva; causes irritation and corneal damage from repeated contact; may result from entropion, trachoma, scarring, or blepharitis',
                'Ankyloblepharon — partial or complete adhesion of upper and lower lid margins; often associated with symblepharon',
                'Symblepharon — adhesion between inner surface of eyelids and eyeball (palpebral and bulbar conjunctiva)',
                'Blepharophimosis / Blepharostenosis — decrease in size of palpebral fissure; usually associated with epicanthus and ptosis',
                'Madarosis — absence of eyelashes; Poliosis — white or gray eyelashes',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ptosis (Blepharoptosis) — Neural Causes',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'CN#3 paralysis — affects LPS (levator palpebrae superioris); unilateral acquired ptosis',
                "Horner's syndrome — sympathetic nerve paralysis (Mueller's muscle and dilator pupillae); triad: unilateral ptosis + miosis + anhidrosis (loss of facial sweating)",
                'Myasthenia Gravis — muscular factor; treated with Neostigmine (Prostigmin)',
                'Myotonic dystrophy — muscular factor',
                'Mechanical factors — injury, tumor/inflammatory infiltrate weight (trachoma, vernal conjunctivitis), atrophy or enucleation',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Inflammatory Eyelid Diseases',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Gland Involved', 'Cause', 'Key Feature', 'Treatment'],
              rows: [
                ['Blepharitis', 'Lash follicles, Zeis & Moll', 'Staph / seborrheic', 'Squamous: non-ulcerative (seborrheic); Ulcerative: suppurative', 'Hygiene, antibiotics'],
                ['Meibomitis', 'Meibomian glands', 'Chronic', 'White frothy secretions; associated with blepharitis', 'Lid scrubs'],
                ['Hordeolum (Stye)', 'Zeis & Moll', 'Staphylococcus', 'Acute, painful; movable mass; occurs in crops', 'I&D (incision and drainage)'],
                ['Chalazion', 'Meibomian glands', 'Duct obstruction', 'Chronic, painless; hard mass fixed to tarsus; causes astigmatism', 'I&C (incision and curettage)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Hordeolum vs Chalazion: Hordeolum is ACUTE, PAINFUL, MOVABLE (Zeis/Moll, Staph). Chalazion is CHRONIC, PAINLESS, FIXED TO TARSUS (Meibomian, duct blockage). Chalazion causes astigmatism by pressing on the cornea.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Blepharitis: Anterior vs Posterior',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Location', 'Key Signs', 'Cause'],
              rows: [
                ['Anterior Blepharitis', 'Lash follicles at anterior lid margin', 'Crusting, collarettes, lid debris; red thickened margins; flaky debris in lashes', 'Staphylococcus aureus (most common); seborrheic'],
                ['Posterior Blepharitis (Meibomitis)', 'Meibomian gland orifices at posterior lid margin', 'Sebum-like secretion from Meibomian orifices; erythematous lid margins; no eye redness', 'Meibomian gland dysfunction; chronic'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Anterior blepharitis = crusting and debris at the lash line. Posterior blepharitis = sebaceous secretion from Meibomian glands without redness. Both may coexist. Chronic blepharitis is associated with Staph and is the most common source of chronic bacterial conjunctivitis.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Hordeolum Subtypes',
          blocks: [
            {
              kind: 'table',
              headers: ['Subtype', 'Location', 'Gland', 'Notes'],
              rows: [
                ['External Hordeolum (Stye)', 'Outer part of upper or lower eyelid', 'Gland of Zeis', 'MOST COMMON type; forms at outer lid surface'],
                ['Internal Hordeolum', 'Inner surface of eyelid', 'Meibomian gland', 'Less common; infection of Meibomian gland; may look like chalazion but is acute and tender'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Eyelid Position Abnormalities',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Direction', 'Most Common Type', 'Key Cause'],
              rows: [
                ['Entropion', 'Lid rolls IN (trichiasis)', 'Atonic/involutional (most common)', 'Involutional atrophy of lower eyelid retractors; also cicatricial, spastic, congenital'],
                ['Ectropion', 'Lid rolls OUT (exposed conjunctiva)', 'Atonic (most common, geriatrics)', 'Weakening of orbicularis oculi; also cicatricial, spastic, paralytic, mechanical'],
                ['Lagophthalmos', 'Inadequate closure', 'CN#7 weakness', 'Proptosis, eyelid retraction, enlarged globe, exophthalmic goiter'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Eyelid Tumors',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Basal cell carcinoma — most common MALIGNANT tumor of eyelids; does NOT metastasize',
                'Xanthelasma — cutaneous deposition of lipid material; inner upper and lower eyelids; seen in female geriatrics; yellowish, slightly elevated with sharply demarcated margins',
                'Milia — small, white, round, slightly elevated cyst from retained sebaceous secretions',
                'Keratoacanthoma — cup-shaped, elevated, benign tumor with umbilicated apex; in exposed hairy areas',
                'Syringomas — harmless sweat gland duct tumors; skin-colored or yellowish; 1-3 mm diameter; may be confused with xanthelasma',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lacrimal',
      title: 'Lacrimal System Diseases',
      blocks: [
        {
          kind: 'text',
          content: 'The lacrimal system encompasses the lacrimal glands (secretory) and lacrimal passages (drainage). Disease in either component produces distinct clinical presentations.',
        },
        {
          kind: 'sub',
          title: 'Lacrimal Gland Disorders',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Hyposecretion — dryness leading to KCS; causes: extirpation of lacrimal glands, scarring from trachoma, avitaminosis A',
                'Hypersecretion/Lacrimation — excessive tearing; causes: emotional reflex, irritation/dryness of cornea, facial nerve paralysis (Crocodile tears), CN#5 irritation, inflammation, wind/smoke',
                'Acute Dacryoadenitis — uncommon; associated with mumps/parotitis, infectious mononucleosis; pain, swelling, redness at upper outer orbit with mechanical ptosis',
                'Chronic Dacryoadenitis — slow, painless swelling; associated with trachoma, sarcoidosis, syphilis, lymphoma, TB, amyloidosis, leukemia, Mikulic\'s syndrome',
                'Mikulic\'s syndrome — chronic, bilateral swelling of lacrimal AND salivary glands; seen in R.E.D. (Reticuloendothelial Diseases)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lacrimal Gland Tumors',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Most Common', 'Age', 'Clinical Feature'],
              rows: [
                ['Benign', 'Pleomorphic adenoma (Benign mixed tumor)', 'Under 35 y/o; male', 'Slowly progressive painless fullness of upper orbital margins; moderate proptosis with downward/inward globe displacement'],
                ['Malignant', 'Adenoid cystic carcinoma (Cylindroma)', 'Over 35 y/o', 'Proptosis with PAIN, diplopia, decreased VA, ptosis, lacrimation — PAIN is the key differentiator'],
                ['Malignant', 'Malignant mixed cell tumor', 'Older', 'Sudden pain with rapid tumor growth; originates as benign tumor'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lacrimal Passage Disorders',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Epiphora — overflowing of tears DUE TO OBSTRUCTION (not overproduction); causes include entropion/ectropion, scarring of puncta, orbicularis paralysis, foreign bodies in canaliculi, obstruction at lacrimal sac or nasolacrimal duct',
                'Tests for patency: Digital pressure over lacrimal sac (fluid from puncta = NLD obstruction), Fluorescein/Jones Tests I & II, Roentgenographic study (lophendylate/Pathopaque), 10% Na+ saccharide instillation',
                'Acute Dacryocystitis — purulent inflammation of lacrimal sac from NLD obstruction; S/S: purulent exudate, red eyes, epiphora, lower lid redness/swelling, regurgitation of PUS on pressure over lacrimal sac',
                'Dacryocystitis in newborn — bilateral; caused by Pneumococcus; debris or failure of epithelial tube to open',
                'Dacryocystitis in children/adults — unilateral; caused by Pneumococcus, TB; from trauma or sinus infection',
                'Chronic Dacryocystitis — regurgitation of BLOOD (not pus) on pressure over lacrimal sac',
              ],
            },
            {
              kind: 'pearl',
              content: 'Acute dacryocystitis = PUS ON PRESSURE over the lacrimal sac. Chronic dacryocystitis = BLOOD ON PRESSURE. This distinction is a classic board trap.',
            },
          ],
        },
      ],
    },
    {
      id: 'conjunctiva',
      title: 'Conjunctival Diseases',
      blocks: [
        {
          kind: 'text',
          content: 'Conjunctival diseases include degenerative lesions, inflammatory conditions (conjunctivitis), pigmentation disorders, and tumors. Distinguishing conjunctival injection from ciliary injection is a foundational clinical skill.',
        },
        {
          kind: 'sub',
          title: 'Conjunctival vs Ciliary Injection',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Conjunctival Injection', 'Ciliary Injection'],
              rows: [
                ['Vessel source', 'Posterior conjunctival arteries', 'Ciliary vessels'],
                ['Associated with', 'Conjunctivitis', 'Keratitis, uveitis, glaucoma'],
                ['Discharge', 'Mucopurulent discharge', 'Lacrimation only'],
                ['Location', 'Marked at fornix; fades toward limbus', 'Marked at limbus; fades toward fornix'],
                ['Color', 'Bright, brick-red', 'Pink or lilac'],
                ['Vessel appearance', 'Coarse, tortuous, anastomosing', 'Small, straight, fine, radiating from cornea'],
                ['Moves with conjunctiva?', 'YES (by pressure on lower lid)', 'NO'],
                ['Responds to 1:1000 epinephrine?', 'YES (constricts)', 'NO'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Ciliary injection NEVER moves with the conjunctiva and NEVER responds to epinephrine. It always signals something deeper and more serious — keratitis, uveitis, or glaucoma.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Degenerative Conjunctival Lesions',
          blocks: [
            {
              kind: 'table',
              headers: ['Lesion', 'Description', 'Key Distinction'],
              rows: [
                ['Pinguecula', 'Small yellowish raised spot at bulbar conjunctiva, most commonly on nasal side; benign; from elastic tissue and hyaline tissue; usually resolves with artificial tears or topical vasoconstrictors', 'STOPS at limbus; does NOT extend onto cornea'],
                ['Pingueculitis', 'Inflammation of pinguecula; focal engorgement of conjunctival vessels and thickening of conjunctiva overlying the pinguecula', 'Distinguish from pterygium by lack of corneal invasion'],
                ['Pterygium', 'Fibrovascular growth extending from bulbar conjunctiva onto corneal surface; caused by heavy exposure to sunlight and UV; destroys Bowman\'s membrane', 'INVADES cornea; destroys Bowman\'s membrane; no visual symptoms unless growth reaches visual axis'],
                ['Symblepharon', 'Cicatricial adhesion between conjunctiva and eyeball; lower eyelid usually affected', 'Caused by chemical burns (acid or lime/alkali), molten metal, surgery, trachoma'],
                ['Subconjunctival hemorrhage', 'Blood beneath bulbar conjunctiva from brittle blood vessels; NOT accompanied by inflammation', 'Causes: injury, blood dyscrasia, post-op, conjunctivitis, hypertension'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Conjunctivitis Comparison',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Bacterial', 'Viral', 'Allergic'],
              rows: [
                ['Onset', 'Acute', 'Recent respiratory infection', 'Has allergy history'],
                ['Discharge', 'Mucopurulent', 'Slightly mucoid to watery', 'Watery/lacrimation'],
                ['Follicles', 'No', 'YES (key finding)', 'No (papillae instead)'],
                ['Itching (pruritus)', 'No', 'Mild', 'MARKED (chief complaint)'],
                ['Cell infiltrate', 'PMN (neutrophils)', 'Lymphocytes', 'Eosinophils'],
                ['Fever', 'Late to occur', 'Immediately occurs', 'No fever'],
                ['LAP (lymphadenopathy)', 'No', 'Periauricular LAP', 'No'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Specific Conjunctivitis Types',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Gonorrheal (Purulent) conjunctivitis — 3 stages: Infiltration (2 days), Purulent Discharge (2-3 weeks), Convalescence/Papillary Swelling (2-3 weeks)',
                'Ophthalmia Neonatorum — bilateral acute purulent conjunctivitis in neonate passing through infected birth canal; Treatment: Crede\'s prophylaxis (1-2% silver nitrate — causes chemical conjunctivitis after 12-24 hours), Oxytetracycline, Gentamycin',
                'Trachoma — chronic follicular conjunctivitis caused by Chlamydia trachomatis; transmitted by hands/towels; cytoplasmic inclusion bodies in epithelial scrapings',
                'Trachoma stages: I (Insidious — minute follicles at upper tarsal conjunctiva), II (Acute — intense inflammation, purulent discharge, ptosis), III (Cicatricial — scar tissue, follicles disappear), IV (Healed — scars remain)',
                'Trachoma treatment: Tetracycline (topical, drug of choice), Sulfonamide (oral), Cycloplegic (for photophobia)',
                'Trachoma sequelae: trichiasis, entropion, symblepharon, ectropion, corneal opacity (from pannus and ulcers), xerosis',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Bacterial Conjunctivitis Subtypes',
          blocks: [
            {
              kind: 'table',
              headers: ['Subtype', 'Duration', 'Most Common Organism', 'Key Feature'],
              rows: [
                ['Hyperacute (Purulent)', 'Rapid onset', 'Neisseria gonorrhoeae (most common); also N. meningitidis, Staph aureus, Strep', 'Profuse purulent discharge; can penetrate intact corneal epithelium; acquired by autoinoculation from infected genitalia'],
                ['Acute (Mucopurulent)', '<3 weeks', 'Staphylococcus aureus (most common); Streptococcus pneumoniae; Haemophilus', 'Common across all ages and races; self-limiting'],
                ['Chronic', '>4 weeks', 'Staphylococcus aureus', 'Associated with continuous bacterial inoculation from blepharitis; different etiology than acute'],
                ['Chlamydial', 'Chronic', 'Chlamydia trachomatis', 'Causes adult inclusion conjunctivitis, ophthalmia neonatorum, and trachoma; follicles at INFERIOR bulbar and palpebral conjunctiva (vs trachoma = upper tarsal)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Chlamydial inclusion conjunctivitis vs Trachoma: Both caused by Chlamydia trachomatis, but the follicle location differs. Chlamydial inclusion conjunctivitis = follicles at INFERIOR palpebral conjunctiva. Trachoma = follicles at UPPER tarsal conjunctiva. This anatomical distinction is a classic board trap.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Viral Conjunctivitis Subtypes',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Adenoviral conjunctivitis — caused by adenovirus; MOST COMMON cause for acute unilateral pink eye; symptoms: photophobia, watery-mucoid discharge, diffuse engorgement of conjunctival vessels',
                'Herpetic conjunctivitis — caused by Herpes simplex virus (HSV), varicella-zoster (VZV), or Epstein-Barr virus; 50% of patients with herpes zoster ophthalmicus manifest conjunctivitis',
                'Herpes zoster ophthalmicus (HZO) — herpes zoster virus involving the ophthalmic division of the trigeminal nerve (CN V1); leading cause of blindness from corneal disease in the US; presents with dermatomal rash on forehead/eyelid + conjunctivitis; Hutchinson\'s sign (rash on tip of nose) predicts ocular involvement',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Allergic Conjunctivitis Subtypes',
          blocks: [
            {
              kind: 'table',
              headers: ['Subtype', 'Allergen', 'Duration', 'Key Feature'],
              rows: [
                ['Seasonal Allergic Conjunctivitis (SAC)', 'Ragweed, pollens, dander, dust, mold spores', 'Seasonal; recurrent, transient, self-limiting', 'Most common allergic conjunctivitis type; IgE-mediated'],
                ['Perennial Allergic Conjunctivitis (PAC)', 'House dust mite; year-round allergens', 'Year-round; rarer than SAC', 'Similar symptoms to SAC but persistent'],
                ['Atopic Keratoconjunctivitis (AKC)', 'Chronic external ocular inflammation', 'Severe; chronic', '95% associated with atopic dermatitis (eczema); corneal involvement common — punctate erosions to epithelial filaments and defects'],
                ['Vernal Keratoconjunctivitis (VKC)', 'Airborne allergens; IgE-mediated', 'Lasts average 4 years; warm dry climates', 'Males under 20; cobblestone papillae; shield corneal ulcers'],
                ['Giant Papillary Conjunctivitis (GPC)', 'Contact lenses, ocular prosthesis, exposed sutures', 'Year-round', 'Papillae on upper tarsal conjunctiva; CL intolerance'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Other Conjunctivitis Forms',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Parinaud Oculoglandular Syndrome — unilateral granulomatous conjunctivitis + ipsilateral preauricular lymphadenopathy; caused by cat-scratch disease (Bartonella henselae), tularemia, sporotrichosis, or tuberculosis; also called "cat-scratch fever conjunctivitis"',
                'Phlyctenular conjunctivitis — hypersensitivity reaction to bacterial antigens (TB, Staph); small elevated nodule (phlycten) at limbus; associated with photophobia and lacrimation; nodule may migrate onto cornea',
                'Neonatal conjunctivitis (Ophthalmia neonatorum) — conjunctivitis in newborn; causes vary by onset timing: chemical (silver nitrate) at day 1; Neisseria gonorrhoeae at days 2-4; Chlamydia at days 5-14',
                'Contact Lens-Related conjunctivitis — includes GPC and mechanical/toxic forms from lens deposit or solution reactions',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Vernal Conjunctivitis (VKC) vs GPC',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Vernal (VKC)', 'Giant Papillary (GPC)'],
              rows: [
                ['Anchor', 'COBBLESTONE', 'CONTACT LENS'],
                ['Cause', 'Airborne allergens (IgE-mediated)', 'CL wear, prosthesis, sutures'],
                ['Who', 'Males under 20; warm dry climates', 'Any CL wearer'],
                ['Season', 'Warm weather only', 'Year-round'],
                ['Chief symptom', 'Intolerable itching', 'Itching; CL intolerance'],
                ['Papillae location', 'Upper tarsal conjunctiva', 'Upper tarsal conjunctiva'],
                ['Corneal risk', 'Shield corneal ulcers possible', 'No severe corneal damage'],
                ['GPC prevalence', '—', 'Hydrogel CL: 20%; Rigid CL: 5%'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cornea',
      title: 'Corneal Diseases',
      blocks: [
        {
          kind: 'text',
          content: 'Main symptoms of corneal disease: iridescent vision (color halos from epithelial/sub-epithelial edema), reduced VA, and pain. Corneal diseases span congenital anomalies, degenerations, pigment deposits, and inflammatory conditions.',
        },
        {
          kind: 'sub',
          title: 'Congenital Corneal Anomalies',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Diameter', 'Refraction', 'Glaucoma Risk'],
              rows: [
                ['Microcornea', '<10 mm', 'Hyperopic', 'Yes'],
                ['Megalocornea (Anterior Keratoglobus)', '>13.5 mm', 'Normal', 'No (deeper AC; enlarged lens; iris stroma atrophy)'],
                ['Keratoconus', 'Variable; central thinning', 'High myopia + irregular astigmatism', 'No — non-inflammatory'],
              ],
            },
            {
              kind: 'bullets',
              items: [
                'Keratoconus — bilateral, non-inflammatory conical protrusion of central cornea; apex displaced downward and nasally; corrected by hard contact lens or keratoplasty',
                'Keratoconus positive Munson sign — corneal cone visible when viewing from behind the patient over the eyebrow',
                'Fleischer ring — ring of iron pigmentation (hemosiderin) at base of keratoconus; EARLIEST sign of keratoconus; best seen with cobalt blue light',
                'Keratoplasty types: Penetrating (entire corneal thickness replaced); Non-penetrating/Lamellar (superficial layer only, no anterior chamber entry)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Corneal Pigment Lines (Master Table)',
          blocks: [
            {
              kind: 'table',
              headers: ['Pigment', 'Deposit Name', 'Shape', 'Associated Condition', 'Layer'],
              rows: [
                ['IRON', 'Hudson-Stahli line', 'Horizontal', 'Normal aging (>50 years)', 'Epithelium'],
                ['IRON', 'Fleischer ring', 'Circular (at cone base)', 'Keratoconus — earliest sign', 'Epithelium'],
                ['IRON', 'Ferry line', 'Horizontal', 'Filtering bleb (glaucoma surgery)', 'Epithelium'],
                ['IRON', 'Stocker line', 'Vertical arc', 'Pterygium (at its head/edge)', 'Epithelium'],
                ['COPPER', 'Kayser-Fleischer ring', 'Ring at periphery', "Wilson's disease; 95% with neurologic signs", "Descemet's membrane"],
                ['MELANIN', 'Krukenberg spindle', 'Vertical spindle', 'Pigment Dispersion Syndrome (PDS)', 'Endothelium'],
                ['SILVER', 'Argyrosis', '—', 'Silver salt deposits', 'Stroma'],
                ['GOLD', 'Chrysiasis', '—', 'Gold deposits', 'Stroma'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Mnemonic for iron lines: "Hitch a Ferry to Florida\'s Stocker" — Hudson-Stahli, Ferry line, Fleischer ring, Stocker line. ALL iron lines sit in the epithelium. Kayser-Fleischer (copper) sits at Descemet\'s membrane — deepest. Krukenberg spindle (melanin) is on the endothelium.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Corneal Opacity Severity (Light to Dense)',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Appearance', 'Visibility'],
              rows: [
                ['Nebula', 'Faint, cloud-like', 'Only visible with oblique illumination — easily overlooked'],
                ['Macula', 'Grayish translucency', 'Appreciated as grayish opacity in daylight'],
                ['Leukoma', 'Dense, white opacity', 'Most severe; clearly visible'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Pigment Dispersion Syndrome (PDS) Triad',
          blocks: [
            {
              kind: 'bullets',
              items: [
                '1. Krukenberg spindle — vertical melanin deposit on corneal endothelium (vertical due to conventional aqueous current)',
                '2. Slit-like, radial, mid-peripheral iris transillumination defects',
                '3. Pigment deposition on trabecular meshwork (Sampaolesi\'s line) — causes ocular hypertension',
                'Mechanism: iris bows posteriorly → rubs against lens zonules → pigment shed from iris epithelium → deposits on endothelium and blocks trabeculum',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Keratoconjunctivitis Sicca (KCS) / Dry Eye',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Definition: drying of cornea due to disturbance in pre-corneal tear film or diminution of tear production',
                'Main symptoms: sandy gritty sensation, foreign body sensation, irritation, itching (pruritus)',
                'Causes: (1) Lacrimal gland atrophy — Sjogren syndrome; (2) Mucin deficiency — ocular pemphigoid, erythema multiforme, Stevens-Johnson syndrome; (3) Vitamin A deficiency; (4) Chemical burns; (5) Infrequent/incomplete blinking — neuroparalytic keratitis; (6) Elevated lesion breaking tear film — trachoma, Herpes simplex',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Corneal Degenerations',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Arcus senilis (gerontoxon/corneal arcus) — opaque/grayish ring at corneal periphery separated from sclera by 1mm clear zone; due to fatty degeneration (extracellular lipid: neutral fats, triglycerides, phospholipids, sterols); common in geriatrics >60 y/o with hypercholesterolemia and smokers; appears inferior first, then superior, then full circle',
                'Arcus juvenilis — same as arcus senilis but in younger individuals; always pathological',
                'Band keratopathy — whitish/grayish band from calcium salt deposition at epithelium or Bowman\'s membrane; causes: excess Vitamin D, phenylmercuric nitrate, hypercalcemia, hyperphosphatemia, hyperparathyroidism',
                'Avitaminosis A causes blindness via: (1) corneal destruction — xerophthalmia and keratomalacia; (2) loss of rod photopigments — nyctalopia (night blindness); (3) faulty bone growth causing optic nerve compression at optic canal; (4) faulty fetal development',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sclera',
      title: 'Scleral Diseases',
      blocks: [
        {
          kind: 'sub',
          title: 'Episcleritis vs Scleritis',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'Episcleritis', 'Scleritis'],
              rows: [
                ['Depth', 'Episcleral tissue (superficial)', 'Scleral stroma (deeper)'],
                ['Laterality', 'Unilateral', 'Bilateral'],
                ['Who', 'Adult women with RA, gouty arthritis, CTD', 'Women with PTB (tuberculosis)'],
                ['Location', 'Ciliary region, temporal side', 'Deeper tissue'],
                ['Glaucoma complication', 'No', 'Secondary open angle glaucoma'],
                ['Symptoms', 'Pain, lacrimation, photophobia', 'Same + secondary glaucoma'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Staphyloma (Scleral Ectasia)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Definition: thinning and bulging of sclera due to embryonic defect, degeneration, or glaucoma',
                'Complete staphyloma — seen in congenital glaucoma',
                'Partial — Ciliary & Equatorial: disturbed relationship between scleral resistance and IOP; blush-gray or violet bulging',
                'Posterior staphyloma — associated with high myopia and myopic degeneration of retina and choroid',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'glaucoma',
      title: 'Glaucoma',
      blocks: [
        {
          kind: 'text',
          content: 'Glaucoma is a group of ocular disorders resulting in optic nerve damage, often associated with IOP above 21 mmHg. Called the "Silent Thief of Sight." It is the SECOND cause of blindness after cataract.',
        },
        {
          kind: 'diagram',
          id: 'od-glaucoma-angles',
        },
        {
          kind: 'sub',
          title: 'POAG vs PACG (Primary Open vs Closed Angle)',
          blocks: [
            {
              kind: 'table',
              headers: ['Feature', 'POAG (Open Angle)', 'PACG (Closed Angle)'],
              rows: [
                ['Nickname', '"Silent thief of sight"', '"Emergency glaucoma"'],
                ['Onset', 'Gradual, painless', 'Sudden, painful'],
                ['Angle', 'Open (trabecular blockage)', 'Closed (iris blocks meshwork)'],
                ['Vision loss', 'Peripheral first', 'Blurred; halos around lights'],
                ['Pupil', 'Normal', 'Mid-dilated, non-reactive'],
                ['Cornea', 'Normal', 'Edematous, cloudy'],
                ['Other signs', 'Optic disc cupping', 'Ciliary injection, N+V, headache'],
                ['Treatment', 'Medical (drops)', 'Surgical (laser iridotomy)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Normal IOP = 10-21 mmHg (fluctuates 2-5 mmHg daily). Low tension glaucoma = optic nerve damage and visual field loss despite normal or low IOP (idiopathic). Highest IOP is in the AM and falls at night.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'IOP Physiology',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'IOP maintained by: (1) rate of AH formation, (2) ease of outflow through trabecula (75% resistance) into canal of Schlemm, (3) pressure in episcleral vein (normal = 10 mmHg)',
                'Factors that DECREASE AH: Ouabain & Vanadate poisoning, Acetazolamide (CAI), reducing ciliary body temperature to 19°C',
                'Factors that INCREASE IOP: increased venous pressure (Valsalva maneuver), rapid IV infusion of NSS, drinking large amount of water on empty stomach',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Secondary Glaucomas',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Glaucoma Type', 'Mechanism'],
              rows: [
                ['Rubeosis iridis (DM, post-vitrectomy)', 'Closed angle WITHOUT pupillary block', 'NV on iris blocks trabecular angle'],
                ['Iris Bombe', 'Closed angle WITH pupillary block', 'Iris adherent to lens (posterior synechiae)'],
                ['Ectopia lentis (anterior)', 'Closed angle WITH pupillary block', 'Lens blocks pupil'],
                ['Weill-Marchesani (spherophakia)', 'Closed angle WITH pupillary block', 'Small round lens blocks pupil; high refractive power; myopia'],
                ['PDS (Pigment Dispersion Syndrome)', 'Open angle', 'Pigment blocks trabeculum (Sampaolesi\'s line)'],
                ['Phacolytic', 'Open angle', 'Protein leaks from hypermature cataract; macrophages block trabeculum'],
                ['Phacomorphic', 'Closed angle', 'Swollen (intumescent) lens pushes iris forward'],
                ['Corticosteroids', 'Open angle', 'Trabecular blockage'],
                ['Congenital glaucoma', 'Buphthalmos', 'Developmental anomaly of drainage angle'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anti-Glaucoma Drugs (MAPCO)',
          blocks: [
            {
              kind: 'table',
              headers: ['Drug/Class', 'Route', 'Key Fact / Side Effects'],
              rows: [
                ['Pilocarpine (Miotic)', 'Topical', 'Parasympathomimetic; causes miosis and accommodation; direct-acting'],
                ['Timolol (Beta-blocker)', 'Topical', 'Non-selective beta-blocker; C/I in asthma, COPD, heart block'],
                ['Betaxolol (Beta-blocker)', 'Topical', 'Cardio-selective; SAFER in asthma'],
                ['Acetazolamide (CAI)', 'Oral', 'Most common S/E = paresthesia (numbness/tingling at mouth and extremities); also: nephrolithiasis (kidney stones), K+ loss, MYOPIA (shallows AC from ciliary body swelling)'],
                ['Dorzolamide (CAI)', 'Topical', 'Combined with Timolol'],
                ['Glycerol (Osmotic)', 'Oral', 'C/I in DIABETES — causes transient rise in blood glucose'],
                ['Isosorbide (Osmotic)', 'Oral', 'SAFE in diabetes'],
                ['Mannitol (Osmotic)', 'IV only', 'Most commonly used; large MW stays in blood; safe in renal disease'],
                ['Urea (Osmotic)', 'IV only', 'C/I in renal disease'],
                ['Latanoprost (Prostaglandin)', 'Topical', 'Increases uveo-scleral outflow'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'pupils',
      title: 'Pupil Disorders',
      blocks: [
        {
          kind: 'sub',
          title: 'Pupil Terminology',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Dyscoria — abnormal shape of pupils',
                'Corectopia (ectopic pupil) — displacement of the pupil from normal position',
                'Polycoria — additional openings at the iris; may simulate diplopia',
                'Anisocoria — unequal size of pupils',
                'Hippus — spasmodic rhythmic dilation and constriction of pupils independent of light stimulation',
                'Iridoplegia — failure of pupil to constrict to light or accommodation (sphincter pupillae rupture)',
                'Iridodialysis — separation of iris root from ciliary body',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Neurologic Pupil Disorders',
          blocks: [
            {
              kind: 'table',
              headers: ['Condition', 'Pupil Finding', 'Cause', 'Key Fact'],
              rows: [
                ["Adie's syndrome (tonic pupil)", 'Mydriasis + cycloplegia; reacts very slowly; constricts with 0.1% Pilocarpine (normal needs 0.5-1.0%)', 'Damage to ciliary ganglion / post-ganglionic parasympathetic (CN#3)', 'Associated with abnormal tendon reflex; benign peripheral neuropathy'],
                ['Argyll-Robertson pupil (Prostitute pupil)', 'BILATERAL; fails to constrict to light but RETAINS constriction to accommodation/convergence', 'Neurosyphilis (Treponema pallidum); CNS — tabes dorsalis; pre-rectal nuclei lesion', 'Highly specific sign of neurosyphilis; "accommodates but does not react"'],
                ['Marcus Gunn / RAPD', 'Affected pupil dilates when light swings to it from normal eye (positive swinging flashlight test)', 'Optic nerve lesion before chiasm or severe retinal disease', 'Tests afferent pathway; diminished amplitude of pupillary light reaction'],
                ["Horner's syndrome", 'Miosis + partial ptosis + anhidrosis of face', 'Sympathetic nerve lesion (dilator pupillae, sweat glands, Mueller\'s muscle)', 'Triad: miosis + partial ptosis + anhidrosis'],
                ['Amaurotic pupil', 'Blind eye pupil does NOT constrict to direct light; DOES constrict consensually (normal eye stimulated)', 'Optic nerve disease', 'Associated with Marcus Gunn pupil; swinging flashlight test positive'],
              ],
            },
            {
              kind: 'pearl',
              content: "Adie's and Argyll-Robertson both 'accommodate but do not react' to light. Key difference: Adie's is unilateral with benign peripheral neuropathy; Argyll-Robertson is bilateral from neurosyphilis.",
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Iris-Related Glaucoma Conditions',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Iris Bombe — pupillary border adherent to lens (posterior synechiae) → secondary angle closure glaucoma WITH pupillary block',
                'Rubeosis Iridis — neovascularization of iris; first at pupillary margins then trabecular angle; secondary angle closure WITHOUT pupillary block; most common in DM and post-vitrectomy',
                'Iridectomy/Corectomy — surgical removal of part of iris; used in angle closure and pigmentary glaucoma',
                'Laser Iridotomy — focused light creates hole at rim of iris; used in angle closure glaucoma',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lens',
      title: 'Crystalline Lens Diseases',
      blocks: [
        {
          kind: 'text',
          content: 'Lens diseases include ectopia lentis (displacement) and cataract (opacity). The location of the opacity and the direction of lens displacement are the two most tested details.',
        },
        {
          kind: 'diagram',
          id: 'od-cataract-types',
        },
        {
          kind: 'sub',
          title: 'Lens Dislocation Syndromes (MSH)',
          blocks: [
            {
              kind: 'table',
              headers: ['Syndrome', 'Direction', 'Gene/Defect', 'Key Features'],
              rows: [
                ['Marfan syndrome', 'UP (superior)', 'Fibrillin gene (FBN-1, chr. 15)', 'Spider fingers (arachnodactyly); aortic changes; dies mid-40s; connective tissue disorder'],
                ['Homocystinuria', 'DOWN (inferior)', 'Cystathionine beta-synthase deficiency', 'Enzyme deficiency; lens goes DOWN — remember: Homocystinuria = Down'],
                ['Weill-Marchesani (spherophakia)', 'Variable; spherical', 'Small, round, highly curved lens', 'High refractive power; myopia; angle closure risk'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Marfan = UP. Homocystinuria = DOWN. This is the most heavily trapped board fact in lens displacement. The direction is always the answer.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Cataract Types',
          blocks: [
            {
              kind: 'table',
              headers: ['Type', 'Location', 'Classic Clue'],
              rows: [
                ['Nuclear sclerosis', 'Central nucleus', '"Second sight" (Senopia) — patient can suddenly read without glasses; myopia increases; NOT an improvement — sign of nuclear sclerosis'],
                ['Cortical', 'Cortex (spokes of wheel)', 'Spoke-like opacity; VA not severely affected early'],
                ['Posterior subcapsular (PSC)', 'Posterior capsule', 'Most common age-related cataract; also caused by STEROIDS — same location, two causes'],
                ['Diabetic', 'Anterior + posterior subcapsular', 'Snowflake opacity; bilateral; MATURES IN 72 HOURS'],
                ['Galactosemia', 'Cortex (oil droplet)', 'Dulcitol accumulates in lens; oil droplet appearance'],
                ['Traumatic', 'PSC or rosette-shaped', 'Contusion; capsule rupture; rosette shape is classic'],
              ],
            },
            {
              kind: 'pearl',
              content: 'PSC (Posterior Subcapsular Cataract) = most common age-related type AND the type caused by steroids. Same posterior location, different causes. Steroids also cause open angle glaucoma.',
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Lens-Induced Glaucomas (The 3 PHAs)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'PHAcomorphic — swollen (intumescent) lens pushes iris forward → CLOSED angle glaucoma',
                'PHAcolytic — hypermature lens LEAKS protein → macrophages block trabeculum → OPEN angle glaucoma; associated with lens-induced uveitis',
                'PHAcogenic — rapid lens swelling or capsule rupture → lens matter in trabeculum → OPEN angle glaucoma',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Cataract Surgery',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'ICCLE (Intracapsular) — removes entire lens including both capsules',
                'ECCLE (Extracapsular) — removes lens + anterior capsule; retains posterior capsule (standard modern approach)',
                '"After-cataract" / PCO — opacity of retained posterior capsule after ECCLE; treated with YAG laser capsulotomy',
                'Aphakia — severe hyperopia from loss of lens refractive power',
                'Post-op spectacles given 2-3 months after surgery',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'retina-uvea',
      title: 'Retina, Uvea & Vitreous',
      blocks: [
        {
          kind: 'text',
          content: 'Posterior segment diseases include uveal, retinal, and vitreous conditions. Many are associated with systemic diseases and represent major causes of irreversible vision loss.',
        },
        {
          kind: 'diagram',
          id: 'od-retinal-detachment',
        },
        {
          kind: 'sub',
          title: 'Uveitis Overview',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Anterior uveitis (iritis/iridocyclitis) — affects iris and ciliary body; S/S: pain, photophobia, lacrimation, ciliary injection, keratic precipitates (KPs), cells and flare in AC',
                'Posterior uveitis (choroiditis) — affects choroid and retina; S/S: blurred vision, floaters, scotoma; less painful than anterior',
                'Panuveitis — involves entire uveal tract',
                'Sympathetic ophthalmia — bilateral granulomatous uveitis following penetrating injury to one eye; can occur weeks to years after injury; affects the uninjured (sympathizing) eye',
                'Keratic precipitates (KPs) — inflammatory cells adhered to corneal endothelium; seen in anterior uveitis; large "mutton fat" KPs suggest granulomatous disease (sarcoidosis, TB)',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Retinal Diseases',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'ARMD (Age-Related Macular Degeneration) — loss of cells in macular area; causes CENTRAL vision loss (blurred, distorted); irreversible',
                'Diabetic retinopathy — most common cause of blindness in working-age adults; nonproliferative (NPDR): microaneurysms, hemorrhages, exudates; proliferative (PDR): neovascularization → vitreous hemorrhage → traction retinal detachment',
                'Retinal detachment — separation of neurosensory retina from RPE; rhegmatogenous (most common — break in retina), tractional, exudative; symptoms: flashes, floaters, curtain/shadow over vision',
                'Central retinal artery occlusion (CRAO) — sudden painless vision loss; cherry red spot at macula; pale retina; treat within 90 minutes for chance of recovery',
                'Central retinal vein occlusion (CRVO) — "blood and thunder" fundus appearance; multiple flame hemorrhages in all quadrants',
                'Retinitis pigmentosa — hereditary; bone-spicule pigmentation; progressive peripheral vision loss; nyctalopia (night blindness) early symptom',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Vitreous Conditions',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Vitreous syneresis — liquefaction and shrinkage of vitreous gel; collagen fibers clump and cast shadows on retina causing floaters; age-related',
                'Posterior vitreous detachment (PVD) — common; usually benign; risk of retinal tears if traction is present; presents with flashes and floaters',
                'Endophthalmitis — severe intraocular infection; infectious complication of surgery, trauma, or hematogenous spread; requires urgent treatment',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Intraocular Foreign Bodies (IOFB)',
          blocks: [
            {
              kind: 'table',
              headers: ['Material', 'Effect', 'Name', 'Key Fact'],
              rows: [
                ['Iron (ferrous)', 'Toxic to retina; deposits in epithelial structures', 'Siderosis', 'ERG b-wave progressive attenuation; heterochromia iridis; anterior capsular cataract with radial iron deposits; MRI CONTRAINDICATED — use CT'],
                ['Copper (high content)', 'Violent endophthalmitis-like picture', 'Chalcosis (severe)', 'Treat urgently'],
                ['Copper (low, alloy)', 'Kayser-Fleischer ring; sunflower cataract; golden retinal plaques', 'Chalcosis (mild)', 'Less retinotoxic; similar to Wilson\'s presentation'],
                ['Gold, glass, silver, most plastics', 'None — inert', '—', 'No toxic effect'],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'trauma-ageing',
      title: 'Ocular Trauma & Ageing Changes',
      blocks: [
        {
          kind: 'sub',
          title: 'Orbital Blow-Out Fracture',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Mechanism: blunt trauma increases orbital pressure → fracture of orbital floor (infraorbital canal is the thin weak point)',
                'Signs: (1) periocular ecchymosis and edema; (2) infraorbital nerve anesthesia (lower lid, cheek, upper lip, upper teeth); (3) diplopia — from muscle hemorrhage/edema OR entrapment of inferior rectus/oblique; (4) enophthalmos — may take days to appear as edema resolves',
                'Diagnosis: CT with coronal sections (best for floor evaluation); Hess test for diplopia',
                'Treatment: conservative — antibiotics, ice packs, nasal decongestants; tell patient NOT to blow nose (forces infected sinus contents into orbit); systemic steroids if optic nerve at risk',
                'Diplopia — hemorrhage/edema: improves over time; entrapment: persists; direct muscle injury: forced duction negative, recovers in ~2 months',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Anterior Segment Trauma',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Hyphema — blood in anterior chamber; monitor IOP carefully; risk of corneal blood staining; prevent secondary hemorrhage',
                'Vossius ring — pigment imprinted on anterior lens from iris contact during blunt trauma; results from transient miosis at moment of impact',
                'Traumatic mydriasis — iris sphincter damage; sluggish or absent light reaction',
                'Iridodialysis — iris torn from ciliary body at root; D-shaped pupil; dark biconvex area near limbus',
                'Shaken baby syndrome — children under 2; mortality >25%; bilateral retinal hemorrhages (multiple layers, extending to periphery) is the classic ophthalmic finding; mechanism: rotational acceleration/deceleration causing brainstem traction',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Ageing Changes in the Eye (ECAL-CILR)',
          blocks: [
            {
              kind: 'table',
              headers: ['Structure', 'What Changes', 'Clinical Consequence'],
              rows: [
                ['Eyelids (E)', 'Loss of skin elasticity; lids loosen', 'Entropion, ectropion, ptosis, blepharochalazia, baggy eyelids'],
                ['Conjunctiva (C)', 'Goblet cell density decreases; epithelium thins; elasticity decreases', 'Dry eye; pinguecula; pterygium'],
                ['Anterior chamber (A)', 'Lens enlarges and bows iris forward; AC depth decreases from 3.6 mm (age 15-20) to 3.0 mm (age 70)', 'Narrowing of drainage angle; increased PACG risk'],
                ['Lens (L)', 'Increases in size and rigidity; loses elasticity; axial thickness increases ~28% by age 70', 'Presbyopia; nuclear cataract (nuclear sclerosis)'],
                ['Ciliary body (C)', 'Thickens and shortens; displaces iris root anteriorly; AH production decreases 25% per decade after age 30', 'Reduced aqueous production; angle narrowing'],
                ['Iris (I)', 'Thins; dilator weakens; pigment atrophy at pupillary margin', 'Senile miosis; sluggish pupil response'],
                ['Vitreous (L — Liquefies)', 'Syneresis — liquefaction and shrinkage of vitreous gel', 'Floaters; reduced posterior lens support'],
                ['Retina (R)', '20-30% RNFL thinning (worst superiorly); vessel attenuation; photoreceptor and ganglion cell loss', 'ARMD; reduced contrast sensitivity; ARMD = central vision loss (vs glaucoma = peripheral)'],
              ],
            },
            {
              kind: 'pearl',
              content: 'Key numbers: AC depth young = 3.6 mm → age 70 = 3.0 mm. AH decreases 25% per decade after age 30. Lens axial thickness increases ~28% by age 70. RNFL thins 20-30%, worst in superior quadrant.',
            },
          ],
        },
      ],
    },
    {
      id: 'neuro-ophthalmo',
      title: 'Neuro-Ophthalmology',
      blocks: [
        {
          kind: 'text',
          content: 'Neuro-ophthalmology covers the optic nerve, visual pathways, and neurological conditions affecting vision. These topics are high-yield for board examinations.',
        },
        {
          kind: 'sub',
          title: 'Optic Nerve Conditions',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Papilledema — bilateral disc swelling from raised ICP; no early vision loss; enlarged blind spot; associated with headache, vomiting, sixth nerve palsy',
                'Papillitis / Anterior optic neuritis — disc swelling + vision loss; unilateral; painful with eye movement; associated with MS, viral illness',
                'Retrobulbar neuritis — optic neuritis with normal disc appearance ("patient sees nothing, doctor sees nothing"); later develops disc pallor; strong association with multiple sclerosis',
                'Optic atrophy — pallor of optic disc from degeneration of optic nerve fibers; causes: chronic papilledema, glaucoma, retinitis pigmentosa, syphilis, trauma, toxic (methanol, ethambutol)',
                'Marcus Gunn pupil (RAPD) — relative afferent pupillary defect; positive swinging flashlight test; indicates optic nerve disease or severe retinal disease before the chiasm',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Visual Field Defects by Location',
          blocks: [
            {
              kind: 'table',
              headers: ['Location of Lesion', 'Visual Field Defect'],
              rows: [
                ['Optic nerve (before chiasm)', 'Monocular blindness; RAPD positive'],
                ['Optic chiasm (center)', 'Bitemporal hemianopia (temporal fields lost bilaterally)'],
                ['Optic tract (post-chiasm)', 'Contralateral homonymous hemianopia'],
                ['Optic radiation (parietal)', 'Inferior homonymous quadrantanopia (pie on the floor)'],
                ['Optic radiation (temporal, Meyer\'s loop)', 'Superior homonymous quadrantanopia (pie in the sky)'],
                ['Occipital cortex (Area #17)', 'Homonymous hemianopia WITH macular sparing (blood supply from MCA spares macula)'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Cranial Nerve Palsies Affecting the Eye',
          blocks: [
            {
              kind: 'table',
              headers: ['CN', 'Muscles Affected', 'Key Clinical Finding'],
              rows: [
                ['CN#3 (Oculomotor)', 'All EOM except LR and SO; LPS; pupil sphincter', 'Ptosis + eye "down and out" + fixed dilated pupil; complete CN#3 palsy = all three'],
                ['CN#4 (Trochlear)', 'Superior oblique', 'Vertical diplopia; head tilt to opposite side to compensate (Bielschowsky test)'],
                ['CN#6 (Abducens)', 'Lateral rectus', 'Esotropia (eye turns in); horizontal diplopia worse at distance; first CN to show in raised ICP (false localizing sign)'],
                ['CN#7 (Facial)', 'Orbicularis oculi', 'Lagophthalmos (cannot close eye); ectropion; Bell\'s palsy; corneal exposure risk'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Paranasal Sinus Ocular Complications',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Frontal sinusitis — bulging at upper and inner angle of orbit with tenderness on pressure and lid edema',
                'Ethmoiditis — tumefaction of upper and inner orbit and lid edema; most common etiology of orbital cellulitis',
                'Sphenoid sinusitis — associated with ethmoiditis; ocular complications: optic neuritis/papillitis, retrobulbar neuritis, optic nerve atrophy leading to blindness',
                'Maxillary sinusitis — NO ocular manifestations',
              ],
            },
          ],
        },
      ],
    },
  ],
}
