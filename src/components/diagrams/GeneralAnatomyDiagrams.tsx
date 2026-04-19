/* SVG diagrams for General Anatomy notes — all inline, no external assets */

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

// ─── 1. Body Planes ────────────────────────────────────────────────────────────

export function BodyPlanesDiagram() {
  return (
    <DiagramShell caption="4 Body Planes | Median = equal halves | Sagittal = unequal L/R | Coronal = front/back | Transverse = top/bottom">
      <svg viewBox="0 0 440 300" className="w-full">
        <rect width="440" height="300" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Planes of the Body</text>

        {/* Figure silhouette (simplified rectangle body) */}
        {/* Head */}
        <ellipse cx="220" cy="55" rx="22" ry="25" fill="#fde68a" stroke="#d97706" strokeWidth="1.2" />
        {/* Body */}
        <rect x="185" y="80" width="70" height="100" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.2" />
        {/* Arms */}
        <rect x="155" y="82" width="28" height="60" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        <rect x="257" y="82" width="28" height="60" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        {/* Legs */}
        <rect x="188" y="182" width="28" height="75" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        <rect x="224" y="182" width="28" height="75" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />

        {/* Median / Mid-sagittal plane — vertical through center */}
        <line x1="220" y1="25" x2="220" y2="265" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" />
        <text x="222" y="276" fontSize="8" fill="#dc2626" fontWeight="600">Median</text>

        {/* Sagittal plane — vertical offset */}
        <line x1="250" y1="30" x2="250" y2="262" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4,4" />
        <text x="252" y="276" fontSize="8" fill="#ea580c">Sagittal</text>

        {/* Coronal / Frontal plane — shown as horizontal line at mid-body depth */}
        <line x1="148" y1="130" x2="298" y2="130" stroke="#16a34a" strokeWidth="2" strokeDasharray="6,3" />
        <text x="302" y="134" fontSize="8" fill="#16a34a" fontWeight="600">Coronal</text>

        {/* Transverse / Horizontal plane */}
        <line x1="148" y1="165" x2="298" y2="165" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6,3" />
        <text x="302" y="169" fontSize="8" fill="#7c3aed" fontWeight="600">Transverse</text>

        {/* Legend */}
        <rect x="8" y="8" width="130" height="80" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="14" y="22" fontSize="8.5" fontWeight="bold" fill="#374151">Planes</text>
        {[
          { color: '#dc2626', label: 'Median — equal L/R halves' },
          { color: '#ea580c', label: 'Sagittal — unequal L/R' },
          { color: '#16a34a', label: 'Coronal — anterior/posterior' },
          { color: '#7c3aed', label: 'Transverse — superior/inferior' },
        ].map((item, i) => (
          <g key={item.label}>
            <rect x="14" y={30 + i * 14} width="10" height="6" rx="1" fill={item.color} />
            <text x="28" y={37 + i * 14} fontSize="7.5" fill="#374151">{item.label}</text>
          </g>
        ))}
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Epidermis Layers ───────────────────────────────────────────────────────

const EPIDERMIS_LAYERS = [
  { name: 'Stratum Corneum',      h: 28, fill: '#fef3c7', stroke: '#d97706', textColor: '#92400e', note: '>25 dead flat cells; desmosomes; scales off' },
  { name: 'Stratum Lucidum',      h: 16, fill: '#fde68a', stroke: '#d97706', textColor: '#92400e', note: 'Eleidin (pre-keratin); THICK SKIN ONLY' },
  { name: 'Stratum Granulosum',   h: 20, fill: '#bbf7d0', stroke: '#16a34a', textColor: '#065f46', note: 'Keratohyalin granules; nucleus degenerating' },
  { name: 'Stratum Spinosum',     h: 24, fill: '#bfdbfe', stroke: '#3b82f6', textColor: '#1e40af', note: 'Polyhedral; prickle cells; mitotically active' },
  { name: 'Stratum Germinativum', h: 22, fill: '#e9d5ff', stroke: '#7c3aed', textColor: '#5b21b6', note: 'Columnar; melanin; most mitotic activity' },
]

export function EpidermisLayersDiagram() {
  const leftX = 55
  const width = 170
  const startY = 38

  const rendered = EPIDERMIS_LAYERS.reduce<Array<typeof EPIDERMIS_LAYERS[0] & { y: number }>>((acc, layer) => {
    const y = acc.length === 0 ? startY : acc[acc.length - 1].y + acc[acc.length - 1].h
    return [...acc, { ...layer, y }]
  }, [])

  return (
    <DiagramShell caption="Epidermis Layers (outer → inner) | Mnemonic: Come Let's Get Some Guys | Lucidum absent in thin skin">
      <svg viewBox="0 0 440 190" className="w-full">
        <rect width="440" height="190" fill="#f9fafb" />
        <text x="220" y="16" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Epidermis Layers — Outer (Surface) to Inner (Dermis)</text>
        <text x={leftX + width / 2} y="28" textAnchor="middle" fontSize="8" fill="#9ca3af">SURFACE / OUTER</text>

        {rendered.map((layer) => (
          <g key={layer.name}>
            <rect x={leftX} y={layer.y} width={width} height={layer.h} fill={layer.fill} stroke={layer.stroke} strokeWidth="0.8" />
            <text x={leftX + width / 2} y={layer.y + layer.h / 2 + 3.5} textAnchor="middle" fontSize="7.5" fontWeight="600" fill={layer.textColor}>
              {layer.name}
            </text>
            <text x={leftX + width + 8} y={layer.y + layer.h / 2 + 3.5} fontSize="7" fill="#6b7280" dominantBaseline="middle">
              {layer.note}
            </text>
          </g>
        ))}

        {/* Dermis label */}
        <rect x={leftX} y={rendered[rendered.length - 1].y + rendered[rendered.length - 1].h} width={width} height={14} rx="0" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.8" />
        <text x={leftX + width / 2} y={rendered[rendered.length - 1].y + rendered[rendered.length - 1].h + 9} textAnchor="middle" fontSize="7.5" fill="#6b7280" fontWeight="600">DERMIS (connective tissue)</text>

        <text x={leftX + width / 2} y={rendered[rendered.length - 1].y + rendered[rendered.length - 1].h + 30} textAnchor="middle" fontSize="8" fill="#9ca3af">INNER / DERMIS SIDE</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Muscle Types Comparison ───────────────────────────────────────────────

export function MuscleTypesDiagram() {
  const types = [
    {
      name: 'Skeletal',
      color: '#bfdbfe',
      stroke: '#3b82f6',
      text: '#1e40af',
      icon: '💪',
      features: ['Voluntary', 'Striated', 'Multi-nucleated', 'Nucleus: periphery', '40% body weight', 'Locomotion'],
    },
    {
      name: 'Cardiac',
      color: '#fecaca',
      stroke: '#ef4444',
      text: '#991b1b',
      icon: '❤️',
      features: ['Involuntary', 'Striated', 'Single nucleus', 'Nucleus: central', '5–10% body weight', 'Intercalated discs'],
    },
    {
      name: 'Smooth',
      color: '#d1fae5',
      stroke: '#10b981',
      text: '#065f46',
      icon: '〰️',
      features: ['Involuntary', 'Non-striated', 'Single nucleus', 'Nucleus: central', '5–10% body weight', 'Peristalsis'],
    },
  ]

  const colW = 120
  const startX = 30
  const startY = 38
  const rowH = 18

  return (
    <DiagramShell caption="Muscle Types | Skeletal = voluntary, striated, multi-nuclei | Cardiac has intercalated discs | Smooth = non-striated">
      <svg viewBox="0 0 440 200" className="w-full">
        <rect width="440" height="200" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Three Types of Muscle Tissue</text>

        {types.map((t, ti) => {
          const x = startX + ti * (colW + 12)
          return (
            <g key={t.name}>
              <rect x={x} y={startY} width={colW} height={30} rx="6" fill={t.color} stroke={t.stroke} strokeWidth="1.2" />
              <text x={x + colW / 2} y={startY + 12} textAnchor="middle" fontSize="9" fontWeight="bold" fill={t.text}>{t.icon} {t.name}</text>
              <text x={x + colW / 2} y={startY + 24} textAnchor="middle" fontSize="7.5" fill={t.text} opacity="0.8">Muscle</text>

              {t.features.map((feat, fi) => (
                <g key={feat}>
                  <rect x={x} y={startY + 34 + fi * rowH} width={colW} height={rowH - 1} fill={fi % 2 === 0 ? 'white' : '#f9fafb'} stroke={t.stroke} strokeWidth="0.4" />
                  <text x={x + 6} y={startY + 34 + fi * rowH + 11} fontSize="7.5" fill="#374151">{feat}</text>
                </g>
              ))}
            </g>
          )
        })}

        {/* Feature labels on the right */}
        {['Action', 'Striations', 'Nuclei count', 'Nucleus position', '% body weight', 'Key function'].map((label, i) => (
          <text key={label} x="424" y={startY + 34 + i * rowH + 11} textAnchor="end" fontSize="7" fill="#9ca3af">{label}</text>
        ))}
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Sarcomere Structure ────────────────────────────────────────────────────

export function SarcomereDiagram() {
  const midY = 120
  const startX = 30
  const endX = 410
  const totalW = endX - startX

  // Z-lines
  const zLeft = startX + 20
  const zRight = endX - 20

  // A-band (dark, center ~60% of sarcomere)
  const aStart = startX + totalW * 0.22
  const aEnd = endX - totalW * 0.22
  const aW = aEnd - aStart

  // H-zone (light, center 25% of sarcomere)
  const hStart = 220 - totalW * 0.1
  const hEnd = 220 + totalW * 0.1

  // I-bands (light, flanking the A-band)
  const iLeftStart = zLeft
  const iLeftEnd = aStart
  const iRightStart = aEnd
  const iRightEnd = zRight

  const fiberH = 48

  return (
    <DiagramShell caption="Sarcomere = unit between 2 Z-lines | I-band = light (actin only) | A-band = dark (myosin + actin overlap) | H-zone = myosin only">
      <svg viewBox="0 0 440 240" className="w-full">
        <rect width="440" height="240" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Sarcomere Structure</text>

        {/* ── Background fiber */}
        <rect x={zLeft} y={midY - fiberH / 2} width={zRight - zLeft} height={fiberH} fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />

        {/* ── I-band (left) — light, actin only */}
        <rect x={iLeftStart} y={midY - fiberH / 2} width={iLeftEnd - iLeftStart} height={fiberH} fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.6" />
        <text x={(iLeftStart + iLeftEnd) / 2} y={midY + 4} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">I-band</text>
        <text x={(iLeftStart + iLeftEnd) / 2} y={midY + 14} textAnchor="middle" fontSize="7" fill="#3b82f6">(light)</text>

        {/* ── A-band — dark, myosin + actin overlap */}
        <rect x={aStart} y={midY - fiberH / 2} width={aW} height={fiberH} fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="0.8" />
        <text x={(aStart + aEnd) / 2} y={midY - 4} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#5b21b6">A-band</text>
        <text x={(aStart + aEnd) / 2} y={midY + 8} textAnchor="middle" fontSize="7" fill="#7c3aed">(dark; myosin + actin)</text>

        {/* ── H-zone — lighter center of A-band */}
        <rect x={hStart} y={midY - fiberH / 2 + 6} width={hEnd - hStart} height={fiberH - 12} fill="#fde68a" stroke="#d97706" strokeWidth="0.8" />
        <text x={(hStart + hEnd) / 2} y={midY + 4} textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#92400e">H-zone</text>
        <text x={(hStart + hEnd) / 2} y={midY + 14} textAnchor="middle" fontSize="6.5" fill="#b45309">(myosin only)</text>

        {/* ── I-band (right) */}
        <rect x={iRightStart} y={midY - fiberH / 2} width={iRightEnd - iRightStart} height={fiberH} fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.6" />
        <text x={(iRightStart + iRightEnd) / 2} y={midY + 4} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">I-band</text>
        <text x={(iRightStart + iRightEnd) / 2} y={midY + 14} textAnchor="middle" fontSize="7" fill="#3b82f6">(light)</text>

        {/* ── Z-lines */}
        <line x1={zLeft} y1={midY - fiberH / 2 - 6} x2={zLeft} y2={midY + fiberH / 2 + 6} stroke="#dc2626" strokeWidth="3" />
        <text x={zLeft} y={midY - fiberH / 2 - 10} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">Z-line</text>

        <line x1={zRight} y1={midY - fiberH / 2 - 6} x2={zRight} y2={midY + fiberH / 2 + 6} stroke="#dc2626" strokeWidth="3" />
        <text x={zRight} y={midY - fiberH / 2 - 10} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">Z-line</text>

        {/* ── Sarcomere brace */}
        <line x1={zLeft} y1={midY + fiberH / 2 + 14} x2={zRight} y2={midY + fiberH / 2 + 14} stroke="#374151" strokeWidth="1" />
        <line x1={zLeft} y1={midY + fiberH / 2 + 10} x2={zLeft} y2={midY + fiberH / 2 + 18} stroke="#374151" strokeWidth="1" />
        <line x1={zRight} y1={midY + fiberH / 2 + 10} x2={zRight} y2={midY + fiberH / 2 + 18} stroke="#374151" strokeWidth="1" />
        <text x="220" y={midY + fiberH / 2 + 28} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#374151">← ONE SARCOMERE →</text>

        {/* ── Actin / Myosin labels */}
        <text x="220" y={midY - fiberH / 2 - 24} textAnchor="middle" fontSize="8" fill="#6b7280">Actin (thin filaments) → I-band + outer A-band</text>
        <text x="220" y={midY - fiberH / 2 - 13} textAnchor="middle" fontSize="8" fill="#6b7280">Myosin (thick filaments) → A-band (entire)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'ga-body-planes': BodyPlanesDiagram,
  'ga-epidermis-layers': EpidermisLayersDiagram,
  'ga-muscle-types': MuscleTypesDiagram,
  'ga-sarcomere': SarcomereDiagram,
}
