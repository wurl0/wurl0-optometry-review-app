/* SVG diagrams for General Pharmacology notes — all inline, no external assets */

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

// ─── 1. Pharmacokinetics — ADME Flow ─────────────────────────────────────────

export function Pharmacokinetics() {
  const stages = [
    { label: 'Administration', sub: 'Oral / IV / Topical / etc.', fill: '#dbeafe', stroke: '#3b82f6', text: '#1e40af' },
    { label: 'Absorption', sub: 'Into bloodstream\n(first-pass: oral only)', fill: '#e0e7ff', stroke: '#6366f1', text: '#3730a3' },
    { label: 'Distribution', sub: 'Blood → tissues\nProtein binding, BBB', fill: '#ede9fe', stroke: '#8b5cf6', text: '#5b21b6' },
    { label: 'Metabolism\n(Biotransformation)', sub: 'Liver (CYP450)\nActive → inactive (mostly)', fill: '#fef3c7', stroke: '#d97706', text: '#92400e' },
    { label: 'Excretion', sub: 'Kidneys (urine)\nBile, lungs, sweat', fill: '#d1fae5', stroke: '#10b981', text: '#065f46' },
  ]

  const boxW = 130
  const boxH = 52
  const startX = 30
  const startY = 38
  const gapX = 22

  return (
    <DiagramShell caption="ADME: Absorption → Distribution → Metabolism → Excretion | First-pass effect = oral route only | IV = 100% bioavailability">
      <svg viewBox="0 0 740 150" className="w-full">
        <rect width="740" height="150" fill="#f9fafb" />
        <text x="370" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Pharmacokinetics — ADME Pathway</text>

        {stages.map((s, i) => {
          const x = startX + i * (boxW + gapX)
          const lines = s.label.split('\n')
          const subLines = s.sub.split('\n')
          return (
            <g key={s.label}>
              <rect x={x} y={startY} width={boxW} height={boxH} rx="8" fill={s.fill} stroke={s.stroke} strokeWidth="1.5" />
              {lines.map((line, li) => (
                <text key={li} x={x + boxW / 2} y={startY + 16 + li * 12} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill={s.text}>{line}</text>
              ))}
              {subLines.map((line, li) => (
                <text key={li} x={x + boxW / 2} y={startY + 32 + lines.length * 10 + li * 10} textAnchor="middle" fontSize="7" fill={s.text} opacity="0.85">{line}</text>
              ))}
              {i < stages.length - 1 && (
                <path d={`M ${x + boxW + 2} ${startY + boxH / 2} L ${x + boxW + gapX - 4} ${startY + boxH / 2}`} fill="none" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arr)" />
              )}
            </g>
          )
        })}

        {/* Key callouts */}
        <text x="30" y="108" fontSize="7.5" fill="#6b7280">• Zero-order kinetics: 100% absorbed (IV, IA, IC)</text>
        <text x="30" y="119" fontSize="7.5" fill="#6b7280">• First-order kinetics: constant fraction absorbed (all other routes)</text>
        <text x="30" y="130" fontSize="7.5" fill="#6b7280">• Half-life (t½) = 0.693 / Ke | Bioavailability = fraction reaching systemic circulation</text>

        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#9ca3af" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Dose-Response Curve ───────────────────────────────────────────────────

export function DoseResponseCurve() {
  // Sigmoid curve approximated with bezier
  // X-axis: log dose (0→200), Y-axis: effect % (0→100)
  const ox = 60; const oy = 180; const w = 300; const h = 130

  return (
    <DiagramShell caption="ED50: dose for 50% max effect | TD50: dose for 50% toxic effect | TI = TD50/ED50 (higher = safer) | Potency = leftward shift | Efficacy = max height">
      <svg viewBox="0 0 440 240" className="w-full">
        <rect width="440" height="240" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Dose-Response Curve</text>

        {/* Axes */}
        <line x1={ox} y1={oy - h} x2={ox} y2={oy + 10} stroke="#374151" strokeWidth="1.5" />
        <line x1={ox - 10} y1={oy} x2={ox + w + 10} y2={oy} stroke="#374151" strokeWidth="1.5" />
        <text x={ox - 8} y={oy - h} textAnchor="end" fontSize="8" fill="#374151">100%</text>
        <text x={ox - 8} y={oy - h / 2} textAnchor="end" fontSize="8" fill="#374151">50%</text>
        <text x={ox - 8} y={oy} textAnchor="end" fontSize="8" fill="#374151">0%</text>
        <text x={ox + w / 2} y={oy + 24} textAnchor="middle" fontSize="8.5" fill="#374151">Log Dose →</text>
        <text x={ox - 30} y={oy - h / 2} textAnchor="middle" fontSize="8.5" fill="#374151" transform={`rotate(-90 ${ox - 30} ${oy - h / 2})`}>Effect (%)</text>

        {/* Drug A — higher potency (leftward), same efficacy */}
        <path d={`M ${ox + 10} ${oy - 2} C ${ox + 50} ${oy - 2} ${ox + 60} ${oy - h} ${ox + 130} ${oy - h + 4}`}
          fill="none" stroke="#3b82f6" strokeWidth="2.5" />
        <text x={ox + 140} y={oy - h + 6} fontSize="8" fill="#1d4ed8" fontWeight="bold">Drug A</text>
        <text x={ox + 140} y={oy - h + 16} fontSize="7" fill="#1d4ed8">(more potent)</text>

        {/* Drug B — lower potency (rightward), same efficacy */}
        <path d={`M ${ox + 60} ${oy - 2} C ${ox + 100} ${oy - 2} ${ox + 120} ${oy - h} ${ox + 200} ${oy - h + 4}`}
          fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5,3" />
        <text x={ox + 210} y={oy - h + 6} fontSize="8" fill="#065f46" fontWeight="bold">Drug B</text>
        <text x={ox + 210} y={oy - h + 16} fontSize="7" fill="#065f46">(less potent)</text>

        {/* Drug C — lower efficacy */}
        <path d={`M ${ox + 10} ${oy - 2} C ${ox + 60} ${oy - 2} ${ox + 70} ${oy - h * 0.6} ${ox + 150} ${oy - h * 0.62}`}
          fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3,3" />
        <text x={ox + 160} y={oy - h * 0.62 + 2} fontSize="8" fill="#92400e" fontWeight="bold">Drug C</text>
        <text x={ox + 160} y={oy - h * 0.62 + 12} fontSize="7" fill="#92400e">(lower efficacy)</text>

        {/* ED50 markers for Drug A */}
        <line x1={ox} y1={oy - h / 2} x2={ox + 80} y2={oy - h / 2} stroke="#6b7280" strokeWidth="0.8" strokeDasharray="3,2" />
        <line x1={ox + 80} y1={oy - h / 2} x2={ox + 80} y2={oy} stroke="#6b7280" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x={ox + 80} y={oy + 12} textAnchor="middle" fontSize="7.5" fill="#374151" fontWeight="bold">ED50(A)</text>

        {/* Legend box */}
        <rect x="345" y="40" width="88" height="70" rx="5" fill="white" stroke="#e5e7eb" />
        <text x="350" y="54" fontSize="7.5" fontWeight="bold" fill="#374151">Key Terms</text>
        <text x="350" y="66" fontSize="7" fill="#6b7280">Potency: dose for effect</text>
        <text x="350" y="77" fontSize="7" fill="#6b7280">Efficacy: max effect</text>
        <text x="350" y="88" fontSize="7" fill="#6b7280">TI = TD50 / ED50</text>
        <text x="350" y="99" fontSize="7" fill="#6b7280">Agonist: activates</text>
        <text x="350" y="110" fontSize="7" fill="#6b7280">Antagonist: blocks</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. ANS Drug Classification ───────────────────────────────────────────────

export function ANSDrugsDiagram() {
  const cols = [
    {
      title: 'Sympathomimetics\n(Adrenergic Agonists)',
      color: '#fca5a5', stroke: '#dc2626', text: '#7f1d1d',
      items: ['α1: Phenylephrine (mydriasis)', 'α2: Clonidine, Brimonidine', 'β1: Dobutamine (heart)', 'β2: Salbutamol (bronchi)', 'α+β: Epinephrine, NE', 'Cocaine (↑NE release)'],
    },
    {
      title: 'Sympatholytics\n(Adrenergic Blockers)',
      color: '#fde68a', stroke: '#d97706', text: '#78350f',
      items: ['α-blocker: Prazosin, Phentolamine', 'β-blocker: Timolol (IOP ↓)', 'β1-selective: Atenolol', 'Guanethidine (↓NE store)', 'Reserpine (depletes NE)', '6-OHDA (destroys term.)'],
    },
    {
      title: 'Parasympathomimetics\n(Cholinergic Agonists)',
      color: '#bbf7d0', stroke: '#16a34a', text: '#14532d',
      items: ['Direct: Pilocarpine (miosis)', 'Direct: Carbachol', 'Direct: Methacholine', 'Indirect (AChE-I): Physostigmine', 'Indirect: Neostigmine', 'Irreversible: Echothiophate'],
    },
    {
      title: 'Parasympatholytics\n(Anticholinergic)',
      color: '#bfdbfe', stroke: '#3b82f6', text: '#1e40af',
      items: ['Atropine (mydriasis + cycloplegia)', 'Scopolamine / Hyoscine', 'Homatropine (shorter dur.)', 'Cyclopentolate (cycloplegia)', 'Tropicamide (shortest dur.)', 'Ipratropium (broncho)'],
    },
  ]

  const colW = 150
  const colH = 160
  const startX = 14
  const startY = 36
  const gap = 8

  return (
    <DiagramShell caption="Sympathomimetics: fight-or-flight | Parasympathomimetics: rest-and-digest | Direct = binds receptor | Indirect = inhibits AChE">
      <svg viewBox="0 0 636 240" className="w-full">
        <rect width="636" height="240" fill="#f9fafb" />
        <text x="318" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Autonomic Nervous System Drugs</text>

        {cols.map((col, ci) => {
          const x = startX + ci * (colW + gap)
          const titleLines = col.title.split('\n')
          return (
            <g key={col.title}>
              <rect x={x} y={startY} width={colW} height={colH} rx="8" fill={col.color} stroke={col.stroke} strokeWidth="1.2" opacity="0.3" />
              <rect x={x} y={startY} width={colW} height={32} rx="8" fill={col.color} stroke={col.stroke} strokeWidth="1.2" />
              <rect x={x} y={startY + 26} width={colW} height={6} fill={col.color} />
              {titleLines.map((line, li) => (
                <text key={li} x={x + colW / 2} y={startY + 12 + li * 12} textAnchor="middle" fontSize="7.5" fontWeight="bold" fill={col.text}>{line}</text>
              ))}
              {col.items.map((item, ii) => (
                <text key={ii} x={x + 8} y={startY + 44 + ii * 19} fontSize="7" fill="#374151">• {item}</text>
              ))}
            </g>
          )
        })}

        {/* Bottom note */}
        <text x="318" y="215" textAnchor="middle" fontSize="7.5" fill="#6b7280">Sympathetic: NE/Epi → α and β receptors | Parasympathetic: ACh → muscarinic (M) and nicotinic (N) receptors</text>
        <text x="318" y="226" textAnchor="middle" fontSize="7.5" fill="#6b7280">AChE Inhibitors ↑ACh (indirect cholinomimetics) | Irreversible AChE-I: SLUD toxidrome (Salivation, Lacrimation, Urination, Defecation)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'gp-pharmacokinetics': Pharmacokinetics,
  'gp-dose-response': DoseResponseCurve,
  'gp-ans-drugs': ANSDrugsDiagram,
}
