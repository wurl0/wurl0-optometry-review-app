/* SVG diagrams for Ocular Pharmacology notes — all inline, no external assets */

function DiagramShell({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-1">
      <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
        {children}
      </div>
      {caption && (
        <p className="text-center text-xs text-gray-400 mt-1.5 italic">{caption}</p>
      )}
    </div>
  )
}

// ─── 1. Ocular Drug Delivery Routes ──────────────────────────────────────────

export function OcularDrugDeliveryDiagram() {
  const routes = [
    { label: 'Topical Drops', target: 'Anterior segment', pros: 'Easy, non-invasive', cons: 'Nasolacrimal drainage (systemic SE)', fill: '#dbeafe', stroke: '#3b82f6', text: '#1e40af' },
    { label: 'Subconjunctival', target: 'Anterior + some posterior', pros: 'Bypasses corneal barrier', cons: 'Injection required', fill: '#e0e7ff', stroke: '#6366f1', text: '#3730a3' },
    { label: 'Intravitreal', target: 'Posterior segment', pros: 'Direct posterior delivery', cons: 'Risk of endophthalmitis', fill: '#ede9fe', stroke: '#8b5cf6', text: '#5b21b6' },
    { label: 'Systemic (oral/IV)', target: 'Whole eye (poor penetration)', pros: 'Convenient (oral)', cons: 'Blood-ocular barrier limits entry', fill: '#d1fae5', stroke: '#10b981', text: '#065f46' },
  ]

  const boxW = 180
  const boxH = 78
  const startX = 20
  const startY = 34
  const gap = 12

  return (
    <DiagramShell caption="Topical: most common, nasolacrimal drainage causes systemic effects | Press lacrimal sac 2 min to reduce | Blood-ocular barrier = blood-aqueous + blood-retinal">
      <svg viewBox="0 0 776 150" className="w-full">
        <rect width="776" height="150" fill="#f9fafb" />
        <text x="388" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Ocular Drug Delivery Routes</text>

        {routes.map((r, i) => {
          const x = startX + i * (boxW + gap)
          return (
            <g key={r.label}>
              <rect x={x} y={startY} width={boxW} height={boxH} rx="8" fill={r.fill} stroke={r.stroke} strokeWidth="1.2" />
              <text x={x + boxW / 2} y={startY + 14} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill={r.text}>{r.label}</text>
              <line x1={x + 10} y1={startY + 18} x2={x + boxW - 10} y2={startY + 18} stroke={r.stroke} strokeWidth="0.6" opacity="0.5" />
              <text x={x + 8} y={startY + 30} fontSize="7" fill="#374151" fontWeight="600">Target:</text>
              <text x={x + 8} y={startY + 40} fontSize="7" fill="#374151">{r.target}</text>
              <text x={x + 8} y={startY + 53} fontSize="7" fill="#16a34a" fontWeight="600">✓ {r.pros}</text>
              <text x={x + 8} y={startY + 65} fontSize="7" fill="#dc2626" fontWeight="600">✗ {r.cons}</text>
            </g>
          )
        })}

        <text x="388" y="128" textAnchor="middle" fontSize="7.5" fill="#6b7280">Corneal barriers: Epithelium (lipophilic) → Stroma (hydrophilic) → Endothelium (lipophilic) | Amphiphilic drugs penetrate best</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Anti-Glaucoma Drugs by Mechanism ─────────────────────────────────────

export function AntiGlaucomaDiagram() {
  const drugs = [
    {
      class: 'Prostaglandin Analogues',
      moa: 'Uveoscleral outflow ↑',
      examples: 'Latanoprost, Bimatoprost,\nTravoprost, Tafluprost',
      dosing: 'Once daily (PM)',
      se: 'Iris pigmentation, lash growth,\nconjunctival hyperemia',
      fill: '#fef3c7', stroke: '#d97706', text: '#78350f',
    },
    {
      class: 'Beta-Blockers',
      moa: 'Aqueous humor production ↓',
      examples: 'Timolol, Betaxolol,\nCarteolol, Levobunolol',
      dosing: 'BID (Timolol)',
      se: 'Bradycardia, bronchospasm,\nC/I: asthma, heart block',
      fill: '#dbeafe', stroke: '#3b82f6', text: '#1e40af',
    },
    {
      class: 'CAIs (Carbonic Anhydrase\nInhibitors)',
      moa: 'Aqueous humor production ↓',
      examples: 'Dorzolamide, Brinzolamide\n(topical); Acetazolamide (oral)',
      dosing: 'BID-TID',
      se: 'Bitter taste (topical),\nmetabolic acidosis (oral)',
      fill: '#d1fae5', stroke: '#10b981', text: '#065f46',
    },
    {
      class: 'Alpha-2 Agonists',
      moa: 'Aqueous production ↓\n+ uveoscleral outflow ↑',
      examples: 'Brimonidine (0.2%),\nApraclonidine',
      dosing: 'BID-TID',
      se: 'Allergic conjunctivitis,\nC/I: MAOIs, age <2',
      fill: '#ede9fe', stroke: '#8b5cf6', text: '#5b21b6',
    },
    {
      class: 'Miotics\n(Cholinergics)',
      moa: 'Trabecular outflow ↑\n(ciliary muscle contraction)',
      examples: 'Pilocarpine 1–4%\nEchothiophate iodide',
      dosing: 'QID (Pilocarpine)',
      se: 'Miosis, brow ache,\nretinal detachment risk',
      fill: '#fce7f3', stroke: '#db2777', text: '#831843',
    },
  ]

  const colW = 138
  const rowH = 20
  const startX = 10
  const startY = 34

  return (
    <DiagramShell caption="1st line: Prostaglandins (once daily, max IOP ↓) | Timolol: no effect on pupil | CAI: sulfa allergy caution | Pilocarpine: causes miosis (use in angle-closure)">
      <svg viewBox="0 0 710 210" className="w-full">
        <rect width="710" height="210" fill="#f9fafb" />
        <text x="355" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Anti-Glaucoma Drugs — Mechanism & Key Facts</text>

        {drugs.map((d, i) => {
          const x = startX + i * (colW + 4)
          const classLines = d.class.split('\n')
          const moaLines = d.moa.split('\n')
          const exLines = d.examples.split('\n')
          const seLines = d.se.split('\n')
          return (
            <g key={d.class}>
              {/* Header */}
              <rect x={x} y={startY} width={colW} height={28 + (classLines.length - 1) * 10} rx="6" fill={d.fill} stroke={d.stroke} strokeWidth="1.2" />
              {classLines.map((line, li) => (
                <text key={li} x={x + colW / 2} y={startY + 13 + li * 11} textAnchor="middle" fontSize="7.5" fontWeight="bold" fill={d.text}>{line}</text>
              ))}

              {/* MOA */}
              <rect x={x} y={startY + 30} width={colW} height={moaLines.length > 1 ? 28 : 18} fill="white" stroke={d.stroke} strokeWidth="0.5" />
              <text x={x + 4} y={startY + 40} fontSize="6.5" fill="#374151" fontWeight="600">MOA:</text>
              {moaLines.map((line, li) => (
                <text key={li} x={x + 4} y={startY + 40 + (li + 1) * 9} fontSize="6.5" fill="#374151">{line}</text>
              ))}

              {/* Examples */}
              <rect x={x} y={startY + 62} width={colW} height={exLines.length > 1 ? 28 : 18} fill="#f9fafb" stroke={d.stroke} strokeWidth="0.5" />
              <text x={x + 4} y={startY + 72} fontSize="6.5" fill="#374151" fontWeight="600">Drugs:</text>
              {exLines.map((line, li) => (
                <text key={li} x={x + 4} y={startY + 72 + (li + 1) * 9} fontSize="6.5" fill="#374151">{line}</text>
              ))}

              {/* Dosing */}
              <rect x={x} y={startY + 94} width={colW} height={18} fill="white" stroke={d.stroke} strokeWidth="0.5" />
              <text x={x + 4} y={startY + 106} fontSize="6.5" fill="#374151"><tspan fontWeight="600">Dosing:</tspan> {d.dosing}</text>

              {/* SE */}
              <rect x={x} y={startY + 112} width={colW} height={seLines.length > 1 ? 28 : 18} rx="0" fill="#fff1f2" stroke={d.stroke} strokeWidth="0.5" />
              <text x={x + 4} y={startY + 122} fontSize="6.5" fill="#b91c1c" fontWeight="600">SE / C/I:</text>
              {seLines.map((line, li) => (
                <text key={li} x={x + 4} y={startY + 122 + (li + 1) * 9} fontSize="6.5" fill="#b91c1c">{line}</text>
              ))}
            </g>
          )
        })}
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Autonomic Drugs — Pupil & Ciliary Effects ────────────────────────────

export function AutonomicEyeDiagram() {
  const rows = [
    { drug: 'Tropicamide 1%', class: 'Anticholinergic', pupil: 'Mydriasis', cyclo: '++', onset: '20–40 min', duration: '4–6 hrs', use: 'Dilation (diagnostic)', fill: '#dbeafe' },
    { drug: 'Cyclopentolate 1%', class: 'Anticholinergic', pupil: 'Mydriasis', cyclo: '++++', onset: '30–60 min', duration: '12–24 hrs', use: 'Cycloplegia (children)', fill: '#e0e7ff' },
    { drug: 'Homatropine 2%/5%', class: 'Anticholinergic', pupil: 'Mydriasis', cyclo: '+++', onset: '40–60 min', duration: '1–3 days', use: 'Cycloplegia, uveitis', fill: '#ede9fe' },
    { drug: 'Atropine 1%', class: 'Anticholinergic', pupil: 'Mydriasis', cyclo: '+++++', onset: '1–3 hrs', duration: '7–14 days', use: 'Max cycloplegia, amblyopia', fill: '#fce7f3' },
    { drug: 'Phenylephrine 2.5%/10%', class: 'Sympathomimetic (α1)', pupil: 'Mydriasis only', cyclo: 'None', onset: '15–30 min', duration: '3–5 hrs', use: 'Dilation (no cycloplegia)', fill: '#fef3c7' },
    { drug: 'Pilocarpine 1–4%', class: 'Cholinergic (muscarinic)', pupil: 'Miosis', cyclo: 'Spasm', onset: '15–30 min', duration: '4–6 hrs', use: 'Glaucoma, reverse mydriasis', fill: '#d1fae5' },
    { drug: 'Cocaine 4–10%', class: 'Indirect sympathomimetic', pupil: 'Mydriasis', cyclo: 'None', onset: '5–10 min', duration: '1–2 hrs', use: 'Horner\'s test (C/I: tonometry)', fill: '#fecaca' },
  ]

  const headers = ['Drug', 'Class', 'Pupil', 'Cyclo', 'Onset', 'Duration', 'Clinical Use']
  const colWidths = [110, 115, 65, 40, 60, 65, 130]
  const startX = 8
  const startY = 34
  const rowH = 18

  return (
    <DiagramShell caption="Cycloplegia order (weakest→strongest): Tropicamide → Cyclopentolate → Homatropine → Scopolamine → Atropine | Phenylephrine: NO cycloplegia">
      <svg viewBox="0 0 600 220" className="w-full">
        <rect width="600" height="220" fill="#f9fafb" />
        <text x="300" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Autonomic Drugs — Pupil & Cycloplegic Effects</text>

        {/* Header row */}
        {headers.map((h, hi) => {
          const x = startX + colWidths.slice(0, hi).reduce((a, b) => a + b, 0)
          return (
            <g key={h}>
              <rect x={x} y={startY} width={colWidths[hi]} height={rowH} fill="#374151" />
              <text x={x + colWidths[hi] / 2} y={startY + 12} textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">{h}</text>
            </g>
          )
        })}

        {/* Data rows */}
        {rows.map((row, ri) => {
          const cells = [row.drug, row.class, row.pupil, row.cyclo, row.onset, row.duration, row.use]
          return cells.map((cell, ci) => {
            const x = startX + colWidths.slice(0, ci).reduce((a, b) => a + b, 0)
            const y = startY + (ri + 1) * rowH
            return (
              <g key={`${ri}-${ci}`}>
                <rect x={x} y={y} width={colWidths[ci]} height={rowH} fill={ci === 0 ? row.fill : ri % 2 === 0 ? 'white' : '#f9fafb'} stroke="#e5e7eb" strokeWidth="0.5" />
                <text x={x + 4} y={y + 12} fontSize="6.5" fill="#374151" fontWeight={ci === 0 ? '600' : '400'}>{cell}</text>
              </g>
            )
          })
        })}
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'op-drug-delivery': OcularDrugDeliveryDiagram,
  'op-antiglaucoma': AntiGlaucomaDiagram,
  'op-autonomic-eye': AutonomicEyeDiagram,
}
