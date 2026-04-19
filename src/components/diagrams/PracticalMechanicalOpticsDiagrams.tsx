/* SVG diagrams for Practical & Mechanical Optics — all inline, no external assets */

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

// ─── 1. Lens Types ────────────────────────────────────────────────────────────

export function LensTypesDiagram() {
  return (
    <DiagramShell caption="Plus lens: thicker center, converges light | Minus lens: thicker edge, diverges light | Plano: flat on one side">
      <svg viewBox="0 0 440 260" className="w-full">
        <rect width="440" height="260" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Lens Types & Light Behavior</text>

        {/* ── PLUS LENSES (left column) ── */}
        <text x="110" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">PLUS (Convex) Lenses</text>
        <text x="110" y="47" textAnchor="middle" fontSize="7.5" fill="#3b82f6">Thicker center · Converges light</text>

        {/* Biconvex */}
        <path d="M 60 70 Q 80 90 80 110 Q 80 130 60 150" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 160 70 Q 140 90 140 110 Q 140 130 160 150" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 60 70 L 160 70 M 60 150 L 160 150" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3,3" />
        <ellipse cx="110" cy="110" rx="50" ry="40" fill="#dbeafe" opacity="0.4" />
        <text x="110" y="113" textAnchor="middle" fontSize="8" fill="#1e40af" fontWeight="600">Biconvex</text>
        <text x="110" y="167" textAnchor="middle" fontSize="7" fill="#6b7280">Both surfaces convex</text>

        {/* Planoconvex */}
        <line x1="60" y1="185" x2="60" y2="235" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 60 185 Q 100 200 130 210 Q 100 220 60 235" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 60 185 L 130 185 M 60 235 L 130 235" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3,3" />
        <text x="95" y="212" textAnchor="middle" fontSize="8" fill="#1e40af" fontWeight="600">Planoconvex</text>
        <text x="95" y="248" textAnchor="middle" fontSize="7" fill="#6b7280">Flat + convex surface</text>

        {/* Converging rays for plus */}
        <line x1="20" y1="100" x2="60" y2="110" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <line x1="20" y1="120" x2="60" y2="110" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <line x1="160" y1="110" x2="200" y2="110" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <circle cx="200" cy="110" r="3" fill="#ef4444" />
        <text x="208" y="114" fontSize="7" fill="#dc2626" fontWeight="bold">F</text>

        {/* Divider */}
        <line x1="220" y1="28" x2="220" y2="255" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4,3" />

        {/* ── MINUS LENSES (right column) ── */}
        <text x="330" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#7c3aed">MINUS (Concave) Lenses</text>
        <text x="330" y="47" textAnchor="middle" fontSize="7.5" fill="#8b5cf6">Thicker edge · Diverges light</text>

        {/* Biconcave */}
        <path d="M 280 70 Q 300 90 300 110 Q 300 130 280 150" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M 380 70 Q 360 90 360 110 Q 360 130 380 150" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M 280 70 L 380 70 M 280 150 L 380 150" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="3,3" />
        {/* concave fill — hourglass shape */}
        <path d="M 280 70 L 380 70 Q 360 90 360 110 Q 360 130 380 150 L 280 150 Q 300 130 300 110 Q 300 90 280 70 Z" fill="#ede9fe" opacity="0.4" />
        <text x="330" y="113" textAnchor="middle" fontSize="8" fill="#5b21b6" fontWeight="600">Biconcave</text>
        <text x="330" y="167" textAnchor="middle" fontSize="7" fill="#6b7280">Both surfaces concave</text>

        {/* Planoconcave */}
        <line x1="370" y1="185" x2="370" y2="235" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M 370 185 Q 330 200 300 210 Q 330 220 370 235" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <text x="335" y="212" textAnchor="middle" fontSize="8" fill="#5b21b6" fontWeight="600">Planoconcave</text>
        <text x="335" y="248" textAnchor="middle" fontSize="7" fill="#6b7280">Flat + concave surface</text>

        {/* Diverging rays for minus */}
        <line x1="240" y1="110" x2="280" y2="110" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <line x1="380" y1="110" x2="420" y2="100" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <line x1="380" y1="110" x2="420" y2="120" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <line x1="280" y1="110" x2="240" y2="100" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3,2" />
        <line x1="280" y1="110" x2="240" y2="120" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3,2" />
        <circle cx="233" cy="110" r="3" fill="#ef4444" />
        <text x="222" y="114" fontSize="7" fill="#dc2626" fontWeight="bold">VF</text>

        <defs>
          <marker id="arr-y" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Prism — Deviation & Prentice's Rule ───────────────────────────────────

export function PrismDiagram() {
  return (
    <DiagramShell caption="Light bends toward BASE | Image displaces toward APEX | Prentice's Rule: Δ = F × d(cm) | Prism diopter: 1Δ = 1cm displacement at 1m">
      <svg viewBox="0 0 440 260" className="w-full">
        <rect width="440" height="260" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Prism — Light Deviation &amp; Prentice&apos;s Rule</text>

        {/* ── Prism shape (left side) ── */}
        {/* Triangle: apex top, base bottom */}
        <polygon points="130,40 60,190 200,190" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
        <text x="130" y="35" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369a1">APEX</text>
        <text x="130" y="208" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369a1">BASE</text>

        {/* Incoming ray */}
        <line x1="30" y1="100" x2="87" y2="118" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr-o)" />
        {/* Ray through prism */}
        <line x1="87" y1="118" x2="172" y2="140" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
        {/* Outgoing ray (deviated toward base) */}
        <line x1="172" y1="140" x2="260" y2="170" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr-o)" />
        {/* Original path (dashed) */}
        <line x1="87" y1="118" x2="260" y2="118" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3" />

        {/* Deviation angle arc */}
        <path d="M 220 118 Q 240 118 245 135" fill="none" stroke="#dc2626" strokeWidth="1.5" />
        <text x="252" y="130" fontSize="8" fill="#dc2626" fontWeight="bold">δ</text>
        <text x="252" y="140" fontSize="7" fill="#dc2626">(deviation)</text>

        {/* Image vs Object labels */}
        <text x="30" y="97" fontSize="7.5" fill="#374151" fontWeight="600">Object →</text>
        <circle cx="260" cy="170" r="4" fill="#ef4444" />
        <text x="265" y="174" fontSize="7.5" fill="#dc2626" fontWeight="600">Image</text>
        <text x="265" y="184" fontSize="7" fill="#dc2626">(displaced toward apex)</text>

        {/* Base/Apex effect summary */}
        <rect x="30" y="215" width="175" height="40" rx="6" fill="#fef3c7" stroke="#d97706" />
        <text x="38" y="228" fontSize="7.5" fontWeight="bold" fill="#92400e">Light bends → BASE</text>
        <text x="38" y="239" fontSize="7.5" fill="#92400e">Image shifts → APEX</text>
        <text x="38" y="250" fontSize="7.5" fill="#92400e">Eye turns → BASE (to fixate)</text>

        {/* ── Prentice's Rule (right side) ── */}
        <rect x="278" y="38" width="148" height="175" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="352" y="56" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#111827">Prentice&apos;s Rule</text>

        {/* Formula */}
        <rect x="290" y="62" width="124" height="32" rx="6" fill="#ede9fe" stroke="#8b5cf6" />
        <text x="352" y="74" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">Δ = F × d</text>
        <text x="352" y="87" textAnchor="middle" fontSize="7.5" fill="#7c3aed">(d in centimeters)</text>

        {[
          { label: 'Δ', def: 'Prism power (prism diopters)' },
          { label: 'F', def: 'Lens power (diopters)' },
          { label: 'd', def: 'Decentration from optical center (cm)' },
        ].map((item, i) => (
          <g key={item.label}>
            <text x="290" y={106 + i * 20} fontSize="8" fill="#374151">
              <tspan fontWeight="bold">{item.label}</tspan> = {item.def}
            </text>
          </g>
        ))}

        <line x1="290" y1="166" x2="414" y2="166" stroke="#e5e7eb" strokeWidth="0.8" />
        <text x="290" y="178" fontSize="7.5" fill="#374151" fontWeight="600">1 Prism Diopter =</text>
        <text x="290" y="189" fontSize="7.5" fill="#374151">1 cm displacement at 1 m</text>
        <text x="290" y="200" fontSize="7.5" fill="#374151">≈ 0.57° of arc deviation</text>

        {/* Prism notation */}
        <rect x="278" y="218" width="148" height="28" rx="6" fill="#d1fae5" stroke="#10b981" />
        <text x="352" y="230" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#065f46">Base Notation</text>
        <text x="352" y="241" textAnchor="middle" fontSize="7" fill="#065f46">BO/BI/BU/BD · TABO 360° system</text>

        <defs>
          <marker id="arr-o" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Optical Instruments Summary ──────────────────────────────────────────

export function OpticalInstrumentsDiagram() {
  const instruments = [
    {
      name: 'Lensmeter\n(Lensometer)',
      icon: '🔬',
      use: 'Measures lens Rx\n(sphere, cylinder, axis, add, prism)',
      key: 'Focimeter · Vertometer\nMinn. → sphere first\nJapanese → cyl first',
      fill: '#dbeafe', stroke: '#3b82f6', text: '#1e40af',
    },
    {
      name: 'Keratometer\n(Ophthalmometer)',
      icon: '👁️',
      use: 'Measures corneal curvature\n(K-readings in D or mm)',
      key: 'Javal-Schiötz: 2 mires\nBausch & Lomb: 1 mire\nNormal K: 41–45D',
      fill: '#d1fae5', stroke: '#10b981', text: '#065f46',
    },
    {
      name: 'Retinoscope',
      icon: '💡',
      use: 'Objective refraction\n(streak or spot)',
      key: 'WITH motion → add plus\nAGAINST motion → add minus\nNeutralization = true Rx',
      fill: '#fef3c7', stroke: '#d97706', text: '#92400e',
    },
    {
      name: 'Tonometer',
      icon: '💧',
      use: 'Measures intraocular\npressure (IOP)',
      key: 'Goldmann: gold standard\nNon-contact (puff test)\nNormal IOP: 10–21 mmHg',
      fill: '#ede9fe', stroke: '#8b5cf6', text: '#5b21b6',
    },
    {
      name: 'Ophthalmoscope\n(Direct / Indirect)',
      icon: '🔦',
      use: 'Views posterior segment\n(retina, disc, vessels)',
      key: 'Direct: upright, ×15, small FOV\nIndirect: inverted, ×2–5, wide FOV\nSlit lamp BIO: gold standard',
      fill: '#fce7f3', stroke: '#db2777', text: '#831843',
    },
    {
      name: 'Slit Lamp\n(Biomicroscope)',
      icon: '🏮',
      use: 'Anterior + posterior\nsegment examination',
      key: 'Illumination types: diffuse,\ndirect focal, retro, specular\nWith +90D for posterior',
      fill: '#ffedd5', stroke: '#ea580c', text: '#7c2d12',
    },
  ]

  const colW = 200
  const rowH = 88
  const startX = 10
  const startY = 32
  const cols = 3

  return (
    <DiagramShell caption="Lensmeter: neutralizes lenses | Keratometer: measures corneal power | Retinoscope: objective Rx | Goldmann: IOP gold standard">
      <svg viewBox="0 0 620 230" className="w-full">
        <rect width="620" height="230" fill="#f9fafb" />
        <text x="310" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Optical Instruments — Key Facts</text>

        {instruments.map((inst, i) => {
          const col = i % cols
          const row = Math.floor(i / cols)
          const x = startX + col * (colW + 6)
          const y = startY + row * (rowH + 6)
          const nameLines = inst.name.split('\n')
          const useLines = inst.use.split('\n')
          const keyLines = inst.key.split('\n')

          return (
            <g key={inst.name}>
              <rect x={x} y={y} width={colW} height={rowH} rx="8" fill={inst.fill} stroke={inst.stroke} strokeWidth="1.2" />
              {/* Header */}
              <text x={x + 8} y={y + 14} fontSize="8.5" fontWeight="bold" fill={inst.text}>{inst.icon} {nameLines[0]}</text>
              {nameLines[1] && <text x={x + 8} y={y + 24} fontSize="8.5" fontWeight="bold" fill={inst.text}>{'   ' + nameLines[1]}</text>}
              <line x1={x + 6} y1={y + 28} x2={x + colW - 6} y2={y + 28} stroke={inst.stroke} strokeWidth="0.6" opacity="0.5" />
              {/* Use */}
              {useLines.map((line, li) => (
                <text key={li} x={x + 8} y={y + 38 + li * 10} fontSize="7" fill="#374151">{line}</text>
              ))}
              {/* Key facts */}
              <line x1={x + 6} y1={y + 54} x2={x + colW - 6} y2={y + 54} stroke={inst.stroke} strokeWidth="0.4" opacity="0.4" />
              {keyLines.map((line, li) => (
                <text key={li} x={x + 8} y={y + 63 + li * 9} fontSize="6.5" fill={inst.text} fontStyle="italic">{line}</text>
              ))}
            </g>
          )
        })}
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'pmo-lens-types': LensTypesDiagram,
  'pmo-prism': PrismDiagram,
  'pmo-instruments': OpticalInstrumentsDiagram,
}
