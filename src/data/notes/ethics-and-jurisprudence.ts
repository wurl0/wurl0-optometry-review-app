import { NotesData } from '@/lib/notes-types'

export const ethicsAndJurisprudenceNotes: NotesData = {
  subject: 'Ethics and Jurisprudence',
  slug: 'ethics-and-jurisprudence',
  sections: [
    {
      id: 'foundations',
      title: 'Foundations: Jurisprudence and Ethics',
      blocks: [
        {
          kind: 'text',
          content:
            'Jurisprudence comes from the Latin juris prudentia, meaning the study, knowledge, or science of law. Ethics is the branch of knowledge dealing with moral principles that govern behavior. In practice, jurisprudence is the LAW (what you must do), while ethics is the MORAL standard (what you should do). Board questions test both the letter of RA 8050 and the spirit of the Code of Ethics.',
        },
        {
          kind: 'sub',
          title: 'Schools of Jurisprudence',
          blocks: [
            {
              kind: 'table',
              headers: ['School', 'Core idea'],
              rows: [
                ['Formalism (conceptualism)', 'Treats law like math or science: apply the rule logically.'],
                ['Legal realism', 'Judges resolve hard cases by balancing interests and drawing a practical line.'],
                ['Positivism', 'Law and morality are SEPARATE; law is only what is expressly enacted.'],
                ['Naturalism (natural law)', 'Morality, religion, human reason, and conscience are ALSO sources of law.'],
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Memory hook: POSITIVism = law is POSITED (written down), no morality. NATURAList = NATURAL/moral law counts too.',
        },
        {
          kind: 'text',
          content:
            'Police power is the power vested in the legislature to enact wholesome and reasonable laws (as long as they do not violate the Constitution). It is the constitutional basis for regulating professions, including optometry.',
        },
      ],
    },
    {
      id: 'history',
      title: 'History and Transition of Optometry Law',
      blocks: [
        {
          kind: 'table',
          headers: ['Law / Year', 'Significance'],
          rows: [
            ['Public Act No. 2245 (Feb 11, 1913)', 'Created the Board of Optical Examiners (first under the Dept. of Interior).'],
            ['Optometry Law of 1917 (amended 1919)', 'FIRST regulatory law of optometry in the Philippines.'],
            ['RA 1998 (1957)', 'Regulated optometry practice, amending the 1917 law.'],
            ['RA 8050 (June 7, 1995)', 'CURRENT law: Revised Optometry Law of 1995. Six-year course; integration; DPAs.'],
            ['Board Res. No. 01, s. 2008', 'The Implementing Rules and Regulations (IRR) of RA 8050.'],
          ],
        },
        {
          kind: 'bullets',
          items: [
            'RA 8050 upgraded the course from 4 years to a SIX-year Doctor of Optometry program (first implemented SY 1998-1999).',
            'The first six-year-curriculum graduates (2004) were the first authorized by law to use DPAs.',
            'PRC records: Certificate of Registration No. 1 was issued to Dr. Manuel Sabater on March 11, 1918.',
            'Common knowledge names Dr. Federico Sarabia, Sr. as holder of No. 001, but this is NOT valid per PRC records.',
            'The Junta Examinadora (Board of Examiners) gave the "examination de gracia" one year prior to March 11, 1917.',
          ],
        },
        {
          kind: 'pearl',
          content:
            'Order to memorize: 1913 Board of Optical Examiners -> 1917 first law -> 1957 RA 1998 -> 1995 RA 8050 -> 2008 IRR.',
        },
      ],
    },
    {
      id: 'ra8050-definitions',
      title: 'RA 8050: Definitions and Scope',
      blocks: [
        {
          kind: 'text',
          content:
            'RA 8050 declares that the State recognizes optometry as an essential profession and promotes optometric services as a REGULAR COMPONENT of the primary health care system.',
        },
        {
          kind: 'table',
          headers: ['Term', 'Definition'],
          rows: [
            ['Optometry', 'The science and art of examining the eye, analyzing ocular function, prescribing/dispensing lenses and devices, vision training, prosthetics, and using authorized DPAs.'],
            ['Optometrist', 'A natural person certified by the Board and registered with the PRC as qualified to practice.'],
            ['Optometrist in good standing', 'Holds a valid certificate of registration AND a valid PIC (professional license).'],
            ['Certificate of Registration', 'PERMANENT (non-expiring) proof of qualification, signed by the PRC Chairperson and all Board members, bearing its seal.'],
            ['Professional ID Card (PIC)', 'RENEWABLE card issued by the PRC; evidence of good standing until expiration.'],
            ['Dispensing', 'Filling, translating, or fitting spectacles, contact lenses, visual aids, prosthetics, and low-vision aids.'],
            ['Canvassing', 'Doing eye exams while carrying merchandise for concurrent sale, going place to place selling to customers (prohibited).'],
          ],
        },
        {
          kind: 'sub',
          title: 'Scope of Practice (RA 8050)',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Examination of the eye using subjective and objective procedures, including DPAs and instruments.',
                'Prescription and dispensing of lenses, prisms, contact lenses, frames, and accessories.',
                'Ocular exercises, vision training, orthoptics, and installation of prosthetic devices.',
                'Counseling patients on vision and eye care/hygiene.',
                'Establishing offices/clinics and collecting professional fees.',
                'NOT included: surgery or therapeutic treatment of eye disease.',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Trap: The Certificate of Registration is PERMANENT; the PIC is what EXPIRES and is renewed every 3 years. Do not swap them.',
        },
      ],
    },
    {
      id: 'board',
      title: 'The Board of Optometry',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'Composed of FIVE (5) members appointed by the President of the Philippines.',
            'Appointed on PRC recommendation from a list of TEN (10) nominees submitted by the accredited national organization (IPAO).',
            'Term: FIVE (5) years, NON-renewable.',
            'Quorum: at least THREE (3) members.',
            'Administrative decision: needs THREE (3) votes; becomes final after FIFTEEN (15) days unless appealed.',
            'A member under investigation may be suspended by the President for not more than SIXTY (60) days.',
          ],
        },
        {
          kind: 'sub',
          title: 'Qualifications of a Board Member',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'A natural-born citizen of the Philippines.',
                'A duly registered optometrist in good standing.',
                'At least THIRTY-FIVE (35) years old at appointment.',
                'Of good moral character.',
                'In active practice for at least TEN (10) years before appointment.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          content:
            'Disqualified from appointment: a faculty member of (or one with pecuniary interest in) an optometry school, or an officer of an optometric association, unless he relinquishes that role before taking his oath. The PRC exercises general supervision over the Board.',
        },
        {
          kind: 'pearl',
          content:
            'Numbers to lock in: 5 members, 10 nominees, 5-yr non-renewable term, quorum 3, 3 votes to decide, 35 yo, 10 yrs practice.',
        },
      ],
    },
    {
      id: 'prc',
      title: 'The Professional Regulation Commission (RA 8981)',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'The PRC was originally created by Presidential Decree No. 223 (as amended by P.D. 657).',
            'RA 8981 (Dec 5, 2000) = PRC Modernization Act of 2000.',
            'A THREE-man Commission: one Chairperson and two Commissioners, appointed by the President.',
            'Term: SEVEN (7) years, WITHOUT reappointment.',
            'Chairperson/Commissioner must be at least FORTY (40) years old.',
            'The PRC administers licensure exams, admits successful examinees, and supervises all regulatory boards.',
          ],
        },
        {
          kind: 'pearl',
          content:
            'Contrast the two "term" numbers: Board of Optometry = 5 years; PRC Commission = 7 years. Both non-renewable.',
        },
        {
          kind: 'sub',
          title: 'Penalties (RA 8981) for Exam Manipulation',
          blocks: [
            {
              kind: 'text',
              content:
                'Manipulating results, leaking questions, or tampering with grades: imprisonment of 6 years and 1 day to 12 years, or a fine of P50,000 to P100,000, or both. If the offender is a PRC officer or Board member: removal from office and perpetual absolute disqualification from public office.',
            },
          ],
        },
      ],
    },
    {
      id: 'licensure',
      title: 'The Licensure Examination',
      blocks: [
        {
          kind: 'text',
          content:
            'The exam is given at least once a year (now computer-based). RA 8050 itself (Sec. 18) does NOT fix subject weights; the Board prescribes the scope, and the weights come from the current PRC Program of Examination. Under the IRR (Sec. 26), the General Weighted Average Rating (GWA) = 70% written (theoretical) + 30% practical (clinical skills / performance).',
        },
        {
          kind: 'table',
          headers: ['Written (Theoretical) subject — current PRC program', 'Weight'],
          rows: [
            ['Ocular Pharmacology', '10%'],
            ['Ocular (Visual) Biology', '10%'],
            ['Clinical Optometry & Sub-Specialty Areas', '15%'],
            ['Physiological Optics, Binocular Vision & Perception', '15%'],
            ['Primary Care & Refraction', '15%'],
            ['Ocular Diseases & Ocular Emergencies', '10%'],
            ['Ethics, Jurisprudence, Practice Management & Public Health', '10%'],
            ['Theoretical, Practical Optics & Ophthalmic Dispensing', '15%'],
          ],
        },
        {
          kind: 'table',
          headers: ['Practical (performance) component', 'Weight'],
          rows: [
            ['Objective Examination', '20%'],
            ['Subjective Examination', '20%'],
            ['Ophthalmic Lens Laboratory', '20%'],
            ['Clinical Optometry', '20%'],
            ['Contact Lens Practice', '20%'],
          ],
        },
        {
          kind: 'pearl',
          content:
            'The written subjects total 100% among themselves, then count as 70% of the GWA; the 5 practical components (20% each) count as the other 30%. Ethics/Jurisprudence stays at 10% of the written exam.',
        },
        {
          kind: 'sub',
          title: 'Rating outcomes',
          blocks: [
            {
              kind: 'table',
              headers: ['Result', 'Condition'],
              rows: [
                ['PASSED', 'GWA >= 75% with NO subject rating below 50%.'],
                ['CONDITIONED', 'GWA >= 75% but one or more subjects below 50% (retake only those subjects).'],
                ['FAILED', 'GWA below 75% on BOTH theoretical and practical examinations.'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Applicant qualifications and filing',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'A Filipino citizen; at least 21 years old; of good moral character; a Doctor of Optometry from an accredited institution.',
                'File the application at least TWENTY (20) days before the first day of the exam.',
                'Third-time failure: must submit proof of a refresher course before retaking.',
                'Board reports ratings to the PRC within 60 days; PRC publishes names (without ratings) within 60 days.',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Passing formula: 75% GWA, no subject <50%. Jurisprudence & Ethics is a 10% written subject (do not underestimate it).',
        },
      ],
    },
    {
      id: 'registration',
      title: 'Registration, the PIC, and Delinquency',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'A successful examinee takes the OATH, pays fees, and is enrolled in the Roster of Optometrists.',
            'The PIC is renewed every THREE (3) years on the optometrist’s BIRTH MONTH.',
            'Prescriptions must show the certificate of registration number, PTR (professional tax receipt) number, and PIC expiry date.',
            'Patient records must be kept a MINIMUM of FIVE (5) years after the last consultation.',
            'Failure to pay annual registration fees for FIVE (5) or more consecutive years = delinquent; dropped from the Roll.',
          ],
        },
        {
          kind: 'sub',
          title: 'Grounds for disqualification from registration',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Failure to pass the licensure exam.',
                'Conviction by final judgment of a crime involving moral turpitude.',
                'Found guilty of immoral or dishonorable conduct.',
                'Declared to be of unsound mind.',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'Two "five" numbers: keep records 5 years; unpaid fees for 5 years = delinquent. Two "three" numbers: renew PIC every 3 years; 3 votes decide an admin case.',
        },
      ],
    },
    {
      id: 'dpa',
      title: 'Diagnostic Pharmaceutical Agents (DPA)',
      blocks: [
        {
          kind: 'text',
          content:
            'DPAs are specific topical drugs that aid the optometrist in examining the eye. They are specified by the Board of Optometry upon approval of the DOH Secretary and recommendation of the BFAD (now FDA). The authorized list is DIAGNOSTIC only (no therapeutic drugs).',
        },
        {
          kind: 'table',
          headers: ['DPA (concentration)', 'Class'],
          rows: [
            ['Phenylephrine 2.5%', 'Mydriatic (sympathomimetic)'],
            ['Tropicamide 0.5%', 'Mydriatic / weak cycloplegic'],
            ['Cyclopentolate HCl 1.0%', 'Cycloplegic'],
            ['Proparacaine 0.5%', 'Topical anesthetic'],
            ['Benoxinate (Oxybuprocaine) HCl 0.4%', 'Topical anesthetic'],
            ['Fluorescein strips', 'Diagnostic dye'],
          ],
        },
        {
          kind: 'bullets',
          items: [
            'RA 8050 (1995) originally listed only FIVE agents: Phenylephrine 2.5%, Tropicamide 0.5%, Proparacaine 0.5%, Oxybuprocaine 0.4%, and Fluorescein. The 2008 IRR added Cyclopentolate HCl 1.0% (and restated Oxybuprocaine as Benoxinate) for the current SIX.',
            'Benoxinate and Oxybuprocaine are the SAME drug (the IRR says Benoxinate; the RA 8050 statutory text says Oxybuprocaine).',
            'Optometrists admitted BEFORE RA 8050 must take a CHED pharmacology course and pass a special certification exam before using DPAs. Six-year-course graduates are authorized to use DPAs without a separate certification.',
            'Special-cert requirements include: certificate of registration, current PIC, proof of the pharmacology course, and preceptorial hours under a Diplomate in Ophthalmology and a DPA-licensed optometrist.',
            'Using DPAs while non-certified/untrained is an unlawful act, whether or not injury results.',
          ],
        },
        {
          kind: 'pearl',
          content:
            'Count the classes: 2 mydriatics, 1 cycloplegic, 2 anesthetics, 1 dye = 6 agents. Therapeutics (antibiotics, anti-glaucoma) are NOT DPAs.',
        },
      ],
    },
    {
      id: 'professional-practice',
      title: 'Professional Practice and Advertising',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'Advertising must be true, honest, fair, dignified, and objective.',
            'Unethical: self-laudatory claims, referencing/undercutting fees, offering free exams/discounts/prizes to attract patronage, and undignified or vulgar ads.',
            'Practice only in premises used EXCLUSIVELY for optometry, conducive to independent clinical judgment.',
            'Notify the Board of the clinic location within THIRTY (30) days of securing the premises (and report any change).',
            'Display the Certificate of Registration and PIC conspicuously in the clinic.',
            'An optometrist MAY share a clinic with allied health professionals and may serve as a consultant or staff/administrator.',
          ],
        },
        {
          kind: 'sub',
          title: 'Minimum instruments / equipment',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Visual acuity charts.',
                'Trial lens set and accessories / phoropter (refractor).',
                'Ophthalmoscope and retinoscope.',
                'Ophthalmic chair.',
                'Slit-lamp biomicroscope (or equivalent).',
                'Dispensing tools.',
              ],
            },
          ],
        },
        {
          kind: 'pearl',
          content:
            'The standard of professional conduct is HIGHER than, and never on the same level as, marketplace/commercial standards.',
        },
      ],
    },
    {
      id: 'unlawful',
      title: 'Unlawful Practice and Disciplinary Action',
      blocks: [
        {
          kind: 'sub',
          title: 'Examples of prohibited/unlawful acts',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Practicing without a valid certificate of registration and PIC, or pretending to be a registered optometrist.',
                'Using DPAs while non-certified/untrained, or using agents beyond those authorized.',
                'Aiding or abetting a non-optometrist (or juridical person) in unlawful practice; hiring a non-optometrist to perform optometric acts.',
                'Ownership/establishment of an optical clinic by foreigners, optical suppliers, or ophthalmic technicians.',
                'Associating with an optometrist whose certificate is suspended/revoked during that period.',
                'Prescribing/endorsing doubtful products not approved by the FDA (BFAD) and DTI.',
                'Non-display, or display of a false/forged, certificate of registration or PIC.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Grounds for disciplinary action',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Unprofessional/unethical conduct, malpractice, or violations of RA 8050 and Board rules.',
                'Conviction of a crime involving moral turpitude; immoral or dishonorable conduct.',
                'Unauthorized practice; serious ignorance, gross negligence, or incompetence.',
                'Chronic inebriety or habitual use of drugs; declared mentally unsound by a court.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          content:
            'Administrative cases: the Board is assisted by the PRC Legal/Investigation Office. Three (3) Board votes render a decision, which becomes final after fifteen (15) days unless appealed to the Commission (a motion for reconsideration is filed within 15 days). Appeals of Code-of-Ethics decisions rise to the PRC (through the Commissioner) and ultimately the Office of the President.',
        },
        {
          kind: 'pearl',
          content:
            'Criminal penalty under RA 8050 (Sec. 33): imprisonment of 1 to 8 years, or a fine of P10,000 to P40,000, or both, at the court’s discretion. Do not confuse this with the RA 8981 exam-tampering penalty (6 years and 1 day to 12 years). RA 8050 is a SPECIAL law and is enforceable against ANYONE, not just optometrists (e.g., unauthorized practice by non-licensees).',
        },
      ],
    },
    {
      id: 'cpd',
      title: 'Continuing Professional Development (RA 10912)',
      blocks: [
        {
          kind: 'text',
          content:
            'RA 10912 (the CPD Act of 2016) made CPD mandatory for renewal of the PRC license. CPD is the inculcation of advanced knowledge, skills, and ethical values for post-licensure specialization or lifelong learning.',
        },
        {
          kind: 'bullets',
          items: [
            'CURRENT requirement: FIFTEEN (15) CPD units to renew the PIC (reduced from the original 60, then 45 units).',
            'Senior Citizens and PWDs: only TEN (10) units.',
            'NOT covered: optometrists working overseas, and newly registered optometrists for their first renewal cycle (3 years).',
            'The CPD Council is a THREE-person body: a Chairperson (a PRB member) plus two members (one from the AIPO/APO, one from the organization of deans).',
            'Recognized CPD types: formal, non-formal, informal, self-directed, online, and professional work experience.',
          ],
        },
        {
          kind: 'pearl',
          content:
            'UPDATE: the effective requirement is now 15 units (10 for seniors/PWD). The old IRR figure of 60 (or 45) units is outdated. Do not answer 60 on the current exam.',
        },
      ],
    },
    {
      id: 'ipao',
      title: 'Integration and the IPAO',
      blocks: [
        {
          kind: 'bullets',
          items: [
            'The Integrated Philippine Association of Optometrists, Inc. (IPAO) is the PRC-accredited, integrated national organization (AIPO).',
            'IPAO was formerly the Samahan ng mga Optometrist sa Pilipinas (SOP), established 1976; it adopted the IPAO name in 1998.',
            'Dr. Vigan delos Reyes is recognized as the Father of the SOP.',
            'The AIPO promulgates the Code of Ethics, defines members’ responsibilities, ensures ethical adherence, and improves professional standards.',
            'Integration does NOT prohibit other optometric associations from being formed by optometrists themselves.',
            'Philippine Optometry Week: June 1-7 (Proclamation No. 985, signed by Pres. Fidel V. Ramos on March 26, 1997).',
          ],
        },
        {
          kind: 'pearl',
          content:
            'AIPO = Accredited and Integrated Professional Organization = IPAO for optometry. It is the source of the Code of Ethics.',
        },
      ],
    },
    {
      id: 'practice-mgmt',
      title: 'Practice Management, Malpractice and Public Health',
      blocks: [
        {
          kind: 'sub',
          title: 'The 4 Ds of malpractice / negligence',
          blocks: [
            {
              kind: 'table',
              headers: ['Element', 'Meaning'],
              rows: [
                ['Duty', 'A professional (optometrist-patient) relationship existed, creating a duty of care.'],
                ['Dereliction', 'Breach: failure to meet the accepted standard of care.'],
                ['Direct causation', 'The breach directly caused the harm.'],
                ['Damages', 'Actual injury or loss resulted.'],
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Types of practice ownership',
          blocks: [
            {
              kind: 'bullets',
              items: [
                'Sole proprietorship: one owner, full control, unlimited personal liability (simplest, most common).',
                'Partnership: two or more owners share capital, profits, losses, and liabilities.',
                'Corporation: a separate juridical entity with limited liability for shareholders.',
              ],
            },
          ],
        },
        {
          kind: 'sub',
          title: 'Legal instruments and courts',
          blocks: [
            {
              kind: 'table',
              headers: ['Instrument', 'Purpose'],
              rows: [
                ['Summons', 'Order/invitation to appear or respond to a case.'],
                ['Subpoena', 'Court writ compelling a person to attend court.'],
                ['Subpoena duces tecum', 'Attend court AND bring documents.'],
                ['Subpoena ad testificandum', 'Attend court to give oral testimony.'],
              ],
            },
            {
              kind: 'text',
              content:
                'Court hierarchy (rising): first-level courts (Metropolitan/Municipal Trial Courts) -> Regional Trial Courts -> Court of Appeals -> Supreme Court (final).',
            },
          ],
        },
        {
          kind: 'bullets',
          items: [
            'Persons allowed limited practice: physicians with postgraduate eye training; physicians examining the eye during a physical exam; and public health workers (blindness-prevention program) who may do ONLY visual acuity testing and visual screening.',
            'RA 9711 (FDA Act of 2009): the FDA licenses medical device establishments (including contact-lens and ophthalmic-lens sellers) via a License to Operate.',
            'The DOH Prevention of Blindness Program prioritizes uncorrected refractive error (URE) as a public health issue, with optometrists in the frontline.',
          ],
        },
        {
          kind: 'pearl',
          content:
            'Duces tecum = DOCUMENTS (bring with you). Ad testificandum = TESTIFY (to speak). Summons invites; subpoena compels.',
        },
      ],
    },
  ],
}

export default ethicsAndJurisprudenceNotes
