import { OlePrepData } from '@/lib/ole-prep-types'

export const ethicsAndJurisprudenceData: OlePrepData = {
  subject: 'Ethics and Jurisprudence',
  slug: 'ethics-and-jurisprudence',
  sections: [
    {
      id: 'key-numbers',
      title: 'Key Numbers to Memorize',
      icon: '🔢',
      items: [
        {
          kind: 'table',
          title: 'The number cheat sheet',
          headers: ['Value', 'What it refers to'],
          rows: [
            ['5 members', 'Board of Optometry composition'],
            ['10 nominees', 'List the accredited org submits for Board appointment'],
            ['5 years, non-renewable', 'Board member term of office'],
            ['3 members', 'Quorum of the Board'],
            ['3 votes', 'Needed to decide an administrative case'],
            ['15 days', 'Board decision becomes final (unless appealed)'],
            ['60 days', 'Max presidential suspension of a Board member under investigation'],
            ['35 years old / 10 years practice', 'Board member minimum age / active practice'],
            ['7 years, no reappointment', 'PRC Commissioner term'],
            ['40 years old', 'PRC Chairperson/Commissioner minimum age'],
            ['21 years old', 'Exam applicant minimum age'],
            ['20 days', 'Deadline to file the exam application (before day 1)'],
            ['75% GWA, no subject <50%', 'Passing the licensure exam'],
            ['70% / 30%', 'Written vs clinical skills weighting'],
            ['3 years / birth month', 'PIC renewal cycle'],
            ['5 years', 'Minimum patient-record retention; also unpaid-fee window for delinquency'],
            ['15 CPD units (10 for senior/PWD)', 'Current CPD requirement per renewal'],
          ],
          notes: 'Most jurisprudence items are a number attached to a rule. Drill these until automatic.',
        },
      ],
    },
    {
      id: 'laws-timeline',
      title: 'Laws and Timeline',
      icon: '📜',
      items: [
        {
          kind: 'table',
          title: 'The republic acts you must know',
          headers: ['Law', 'Name / significance'],
          rows: [
            ['Public Act No. 2245 (1913)', 'Created the Board of Optical Examiners'],
            ['Optometry Law of 1917 (amended 1919)', 'FIRST regulatory law of optometry'],
            ['RA 1998 (1957)', 'Regulated optometry, amending the 1917 law'],
            ['RA 8050 (1995)', 'CURRENT: Revised Optometry Law of 1995'],
            ['Board Res. No. 01, s. 2008', 'IRR of RA 8050'],
            ['RA 8981 (2000)', 'PRC Modernization Act'],
            ['RA 10912 (2016)', 'CPD Act'],
            ['RA 9711 (2009)', 'FDA Act'],
            ['PD 223 (amended by PD 657)', 'Originally created the PRC'],
          ],
          notes: 'Sequence: 1913 → 1917 → 1957 → 1995 → 2008 IRR. RA 8050 is the anchor; everything else orbits it.',
        },
        {
          kind: 'fact',
          content:
            'RA 8050 upgraded the course to SIX years (first implemented SY 1998-1999). The first 6-year graduates (2004) were the first authorized by law to use DPAs.',
          highlight: 'Six-year course; 2004 grads = first DPA users',
        },
      ],
    },
    {
      id: 'traps',
      title: 'Common Traps (Read Twice)',
      icon: '⚠️',
      items: [
        {
          kind: 'trap',
          question: 'How many CPD units are required to renew an optometrist’s license?',
          wrong: '60 units (the old IRR figure)',
          correct: '15 units (10 for senior citizens and PWDs)',
          why: 'The original 60-unit figure (later 45) was amended DOWN to 15 units. Older reviewers still print 60 — that answer is outdated.',
        },
        {
          kind: 'trap',
          question: 'Who received Certificate of Registration No. 1 in Philippine optometry?',
          wrong: 'Dr. Federico Sarabia, Sr. (common knowledge)',
          correct: 'Dr. Manuel Sabater (PRC records, March 11, 1918)',
          why: 'The Sarabia answer is widely repeated but is NOT valid per PRC records. Go with Sabater when the question cites PRC records.',
        },
        {
          kind: 'trap',
          question: 'Which document expires and must be renewed — the Certificate of Registration or the PIC?',
          wrong: 'The Certificate of Registration expires',
          correct: 'The PIC (Professional Identification Card) expires; the Certificate of Registration is PERMANENT',
          why: 'The Certificate of Registration is lifetime proof of qualification. Only the PIC is renewable (every 3 years).',
        },
        {
          kind: 'trap',
          question: 'Is Timolol a Diagnostic Pharmaceutical Agent for optometrists?',
          wrong: 'Yes, it is on the DPA list',
          correct: 'No — Timolol is therapeutic (anti-glaucoma). DPAs are diagnostic only.',
          why: 'The DPA list contains only mydriatics, a cycloplegic, anesthetics, and a dye. Any therapeutic drug (antibiotic, anti-glaucoma, steroid) is NOT a DPA.',
        },
        {
          kind: 'trap',
          question: 'A GWA of 78% but Ocular Pharmacology scored 45%. Passed, conditioned, or failed?',
          wrong: 'Passed (because GWA >= 75%)',
          correct: 'CONDITIONED — retake only Ocular Pharmacology',
          why: 'A subject below 50% conditions the examinee even when the GWA is 75% or higher. Failed requires GWA below 75% on both theoretical and practical.',
        },
        {
          kind: 'trap',
          question: 'Which age goes with the Board of Optometry vs the PRC Commission?',
          wrong: 'Both require age 40',
          correct: 'Board of Optometry member: 35 years old. PRC Chairperson/Commissioner: 40 years old.',
          why: 'Do not mix them. Board = 35 (with 10 years practice). PRC = 40.',
        },
      ],
    },
    {
      id: 'mnemonics',
      title: 'Mnemonics',
      icon: '🧠',
      items: [
        {
          kind: 'mnemonic',
          term: 'The 4 Ds of Malpractice',
          device: 'Duty, Dereliction, Direct causation, Damages',
          breakdown:
            'Duty (a relationship existed) → Dereliction (breach of the standard of care) → Direct causation (breach caused the harm) → Damages (actual injury). All four must be present.',
        },
        {
          kind: 'mnemonic',
          term: 'DPA classes: "2-1-2-1"',
          device: '2 mydriatics, 1 cycloplegic, 2 anesthetics, 1 dye',
          breakdown:
            'Mydriatics: Phenylephrine 2.5%, Tropicamide 0.5%. Cycloplegic: Cyclopentolate 1.0%. Anesthetics: Proparacaine 0.5%, Benoxinate/Oxybuprocaine 0.4%. Dye: Fluorescein. Total = 6 agents.',
        },
        {
          kind: 'mnemonic',
          term: 'Subpoena duces tecum',
          device: '"Duces tecum" = Documents you take with you',
          breakdown:
            'Duces tecum = bring DOCUMENTS. Ad testificandum = to TESTIFY (speak). Summons only invites you to appear/respond; a subpoena compels court attendance.',
        },
        {
          kind: 'mnemonic',
          term: 'Positivist vs Naturalist',
          device: 'POSITIVist = law is POSITED (written), no morality; NATURAList = NATURAL/moral law counts',
          breakdown:
            'Positivism: only expressly enacted rules are law. Naturalism: morality, religion, reason, and conscience are also sources of law.',
        },
      ],
    },
    {
      id: 'dpa-grid',
      title: 'DPA Quick Grid',
      icon: '💊',
      items: [
        {
          kind: 'table',
          title: 'The six authorized DPAs',
          headers: ['Agent', 'Concentration', 'Class'],
          rows: [
            ['Phenylephrine', '2.5%', 'Mydriatic'],
            ['Tropicamide', '0.5%', 'Mydriatic / weak cycloplegic'],
            ['Cyclopentolate HCl', '1.0%', 'Cycloplegic'],
            ['Proparacaine', '0.5%', 'Anesthetic'],
            ['Benoxinate (Oxybuprocaine) HCl', '0.4%', 'Anesthetic'],
            ['Fluorescein strips', '—', 'Diagnostic dye'],
          ],
          notes: 'Approved by the Board upon DOH Secretary approval and BFAD (now FDA) recommendation. Benoxinate = Oxybuprocaine (same drug, two names).',
        },
      ],
    },
    {
      id: 'rapid-recall',
      title: 'Rapid Recall',
      icon: '⚡',
      items: [
        {
          kind: 'recall',
          prompt: 'What does the acronym AIPO stand for, and who is it for optometry?',
          answer: 'Accredited and Integrated Professional Organization — the IPAO (Integrated Philippine Association of Optometrists), which promulgates the Code of Ethics.',
        },
        {
          kind: 'recall',
          prompt: 'IPAO was formerly known as what, and who is its "Father"?',
          answer: 'Formerly the Samahan ng mga Optometrist sa Pilipinas (SOP), established 1976. Father of the SOP: Dr. Vigan delos Reyes.',
        },
        {
          kind: 'recall',
          prompt: 'When is Philippine Optometry Week?',
          answer: 'June 1-7 (Proclamation No. 985, signed by Pres. Fidel V. Ramos on March 26, 1997).',
        },
        {
          kind: 'recall',
          prompt: 'Which three items must appear on an optometrist’s prescription?',
          answer: 'Certificate of registration number, PTR (professional tax receipt) number, and PIC expiry date.',
        },
        {
          kind: 'recall',
          prompt: 'Who may perform limited acts of optometry, and to what extent?',
          answer: 'Physicians with postgraduate eye training; physicians examining the eye during a physical exam; and public health workers doing ONLY visual acuity tests and visual screening.',
        },
        {
          kind: 'recall',
          prompt: 'Which body promulgates the Code of Professional Ethics, and who adopts it?',
          answer: 'The accredited national organization (IPAO) prescribes it; the Board of Optometry adopts and promulgates it upon PRC approval.',
        },
        {
          kind: 'recall',
          prompt: 'Appeal path for a Board decision on a Code-of-Ethics (administrative) case?',
          answer: 'Board → PRC (through the Commissioner) → ultimately the Office of the President. (Court cases: RTC → Court of Appeals → Supreme Court.)',
        },
        {
          kind: 'recall',
          prompt: 'What must an optometrist admitted BEFORE RA 8050 do before using DPAs?',
          answer: 'Take a CHED-prescribed pharmacology course and pass a special certification examination administered by the Board.',
        },
        {
          kind: 'recall',
          prompt: 'Name the three basic types of practice ownership.',
          answer: 'Sole proprietorship (one owner, unlimited liability), partnership (two or more owners share profit/loss), and corporation (separate juridical entity, limited liability).',
        },
        {
          kind: 'recall',
          prompt: 'What public-health condition does the DOH Prevention of Blindness Program prioritize?',
          answer: 'Uncorrected refractive error (URE), with optometrists in the frontline of refractive services.',
        },
      ],
    },
  ],
}

export default ethicsAndJurisprudenceData
