/* SVG diagrams for Ocular Anatomy notes — all inline, no external assets */

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

// ─── 1. Cross-Section of the Eyeball ─────────────────────────────────────────

export function EyeCrossSectionDiagram() {
  // Eye centered at cx=180, cy=155, outer radius=110
  const cx = 180
  const cy = 155
  const r = 110

  return (
    <DiagramShell caption="Cross-Section of the Eyeball | Outer: Sclera/Cornea | Middle: Uvea | Inner: Retina">
      <svg viewBox="0 0 440 310" className="w-full">
        <rect width="440" height="310" fill="#f9fafb" />

        {/* ── Sclera (outermost white coat, ~5/6 posterior) */}
        <circle cx={cx} cy={cy} r={r} fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />

        {/* ── Choroid / Uvea (middle layer, inset 8px from sclera) */}
        <circle cx={cx} cy={cy} r={r - 8} fill="#92400e" opacity="0.55" stroke="none" />

        {/* ── Retina (inner layer, inset 14px from sclera) */}
        <circle cx={cx} cy={cy} r={r - 14} fill="#fde68a" opacity="0.45" stroke="none" />

        {/* ── Vitreous (central fill) */}
        <circle cx={cx} cy={cy} r={r - 30} fill="#e0f2fe" opacity="0.7" stroke="none" />

        {/* ── Cornea (anterior 1/6 — transparent dome, different fill)
             Clip so it only shows in front of eye center */}
        {/* Cornea dome: arc from ~top-left to top-right of the anterior pole */}
        {/* Cornea is ~1/6 of globe, radius slightly larger to form dome */}
        <path
          d={`M ${cx - 48} ${cy - 95} A 54 54 0 0 1 ${cx + 48} ${cy - 95}`}
          fill="#bfdbfe"
          opacity="0.7"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        {/* Cover sclera at corneal junction so cornea looks distinct */}
        <path
          d={`M ${cx - 48} ${cy - 95} A 110 110 0 0 1 ${cx + 48} ${cy - 95}`}
          fill="#bfdbfe"
          opacity="0.5"
          stroke="none"
        />

        {/* ── Limbus (corneoscleral junction) — two small dots */}
        <circle cx={cx - 48} cy={cy - 95} r="3.5" fill="#6b7280" />
        <circle cx={cx + 48} cy={cy - 95} r="3.5" fill="#6b7280" />

        {/* ── Iris (colored annulus in front plane, ~r40 to r20) */}
        <circle cx={cx} cy={cy - 68} r="32" fill="#7c3aed" opacity="0.75" />
        {/* Pupil (dark center of iris) */}
        <circle cx={cx} cy={cy - 68} r="14" fill="#111827" />

        {/* ── Lens (biconvex — two arcs forming a lens shape) */}
        <ellipse cx={cx} cy={cy - 25} rx="18" ry="28" fill="#fef9c3" stroke="#d97706" strokeWidth="1.5" />

        {/* ── Optic Nerve exit (posterior pole, slight nasal offset) */}
        <rect x={cx + 18} y={cy + 88} width="22" height="32" rx="2" fill="#6b7280" />
        <rect x={cx + 20} y={cy + 120} width="18" height="20" rx="1" fill="#4b5563" />

        {/* ── Fovea indicator */}
        <circle cx={cx - 22} cy={cy + 95} r="4" fill="#f43f5e" />

        {/* ────────────────── LABELS ────────────────── */}
        {/* Right-side labels with leader lines */}

        {/* Cornea */}
        <line x1={cx + 30} y1={cy - 108} x2="270" y2={cy - 108} stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="273" y={cy - 105} fontSize="9" fontWeight="600" fill="#1d4ed8">Cornea</text>

        {/* Limbus */}
        <line x1={cx + 48} y1={cy - 95} x2="270" y2={cy - 85} stroke="#6b7280" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="273" y={cy - 82} fontSize="9" fontWeight="600" fill="#374151">Limbus</text>

        {/* Iris */}
        <line x1={cx + 32} y1={cy - 68} x2="270" y2={cy - 62} stroke="#7c3aed" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="273" y={cy - 59} fontSize="9" fontWeight="600" fill="#7c3aed">Iris</text>

        {/* Pupil */}
        <line x1={cx + 14} y1={cy - 68} x2="270" y2={cy - 40} stroke="#374151" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="273" y={cy - 37} fontSize="9" fontWeight="600" fill="#374151">Pupil</text>

        {/* Lens */}
        <line x1={cx + 18} y1={cy - 25} x2="270" y2={cy - 18} stroke="#d97706" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="273" y={cy - 15} fontSize="9" fontWeight="600" fill="#92400e">Lens</text>

        {/* Sclera — right mid */}
        <line x1={cx + r - 4} y1={cy + 10} x2="300" y2={cy + 10} stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="303" y={cy + 13} fontSize="9" fontWeight="600" fill="#4b5563">Sclera</text>

        {/* Choroid/Uvea */}
        <line x1={cx + r - 12} y1={cy + 28} x2="300" y2={cy + 35} stroke="#92400e" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="303" y={cy + 38} fontSize="9" fontWeight="600" fill="#92400e">Uvea/Choroid</text>

        {/* Retina */}
        <line x1={cx + r - 20} y1={cy + 50} x2="300" y2={cy + 58} stroke="#ca8a04" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="303" y={cy + 61} fontSize="9" fontWeight="600" fill="#ca8a04">Retina</text>

        {/* Vitreous — center label */}
        <text x={cx} y={cy + 30} textAnchor="middle" fontSize="9" fontWeight="600" fill="#0369a1">Vitreous</text>
        <text x={cx} y={cy + 42} textAnchor="middle" fontSize="8" fill="#0369a1">Humor</text>

        {/* Optic Nerve */}
        <line x1={cx + 29} y1={cy + 104} x2="300" y2={cy + 85} stroke="#6b7280" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x="303" y={cy + 88} fontSize="9" fontWeight="600" fill="#374151">Optic Nerve</text>

        {/* Fovea label */}
        <line x1={cx - 18} y1={cy + 95} x2={cx - 60} y2={cy + 115} stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="3,2" />
        <text x={cx - 100} y={cy + 118} fontSize="8" fill="#f43f5e">Fovea</text>

        {/* Title */}
        <text x="220" y="16" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Eyeball — Cross Section</text>

        {/* Left-side structural labels */}
        <text x="12" y="24" fontSize="8" fill="#6b7280">Anterior →</text>
        <text x="12" y="36" fontSize="8" fill="#6b7280">pole</text>
        <text x="12" y={cy + 115} fontSize="8" fill="#6b7280">Posterior</text>
        <text x="12" y={cy + 126} fontSize="8" fill="#6b7280">pole</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Corneal Layers ────────────────────────────────────────────────────────

const CORNEAL_LAYERS = [
  {
    name: "Epithelium",
    h: 26,
    fill: "#bfdbfe",
    stroke: "#3b82f6",
    textColor: "#1d4ed8",
    note: "5–6 cell layers; regenerates",
  },
  {
    name: "Bowman's Membrane",
    h: 10,
    fill: "#fef08a",
    stroke: "#ca8a04",
    textColor: "#92400e",
    note: "Cannot regenerate (acellular)",
  },
  {
    name: "Stroma",
    h: 88,
    fill: "#e0f2fe",
    stroke: "#0284c7",
    textColor: "#075985",
    note: "~90% of corneal thickness",
  },
  {
    name: "Dua's Layer",
    h: 8,
    fill: "#fce7f3",
    stroke: "#db2777",
    textColor: "#9d174d",
    note: "Discovered 2013; pre-Descemet",
  },
  {
    name: "Descemet's Membrane",
    h: 10,
    fill: "#ede9fe",
    stroke: "#7c3aed",
    textColor: "#5b21b6",
    note: "Basement membrane of endothelium",
  },
  {
    name: "Endothelium",
    h: 18,
    fill: "#d1fae5",
    stroke: "#059669",
    textColor: "#065f46",
    note: "Single hexagonal cell layer; Na-K ATPase",
  },
]

export function CornealLayersDiagram() {
  const leftX = 60
  const width = 180
  const startY = 38

  let curY = startY
  const rendered = CORNEAL_LAYERS.map((layer) => {
    const y = curY
    curY += layer.h
    return { ...layer, y }
  })
  const totalH = curY

  return (
    <DiagramShell caption="Corneal Layers (Anterior → Posterior) | Bowman's cannot regenerate | Endothelium: Na-K ATPase deturgescence">
      <svg viewBox="0 0 440 300" className="w-full">
        <rect width="440" height="300" fill="#f9fafb" />

        <text x="220" y="16" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Corneal Layers — Anterior to Posterior</text>
        <text x={leftX + width / 2} y="28" textAnchor="middle" fontSize="8" fill="#6b7280">ANTERIOR (outer)</text>

        {rendered.map((layer) => (
          <g key={layer.name}>
            <rect
              x={leftX}
              y={layer.y}
              width={width}
              height={layer.h}
              fill={layer.fill}
              stroke={layer.stroke}
              strokeWidth="1"
            />
            {/* Layer name inside rect if tall enough */}
            {layer.h >= 16 && (
              <text
                x={leftX + width / 2}
                y={layer.y + layer.h / 2 + 4}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="600"
                fill={layer.textColor}
              >
                {layer.name}
              </text>
            )}
            {/* For thin layers, name goes outside */}
            {layer.h < 16 && (
              <text
                x={leftX - 4}
                y={layer.y + layer.h / 2 + 3}
                textAnchor="end"
                fontSize="7.5"
                fontWeight="600"
                fill={layer.textColor}
              >
                {layer.name}
              </text>
            )}
            {/* Note on the right */}
            <line
              x1={leftX + width}
              y1={layer.y + layer.h / 2}
              x2={leftX + width + 10}
              y2={layer.y + layer.h / 2}
              stroke={layer.stroke}
              strokeWidth="0.8"
            />
            <text
              x={leftX + width + 13}
              y={layer.y + layer.h / 2 + 3}
              fontSize="7.5"
              fill={layer.textColor}
            >
              {layer.note}
            </text>
          </g>
        ))}

        <text x={leftX + width / 2} y={startY + totalH + 12} textAnchor="middle" fontSize="8" fill="#6b7280">POSTERIOR (inner)</text>

        {/* Anterior/Posterior arrows on left */}
        <line x1={leftX - 20} y1={startY} x2={leftX - 20} y2={startY + totalH} stroke="#9ca3af" strokeWidth="1" markerEnd="url(#arrowDown)" />
        <text x={leftX - 26} y={startY + totalH / 2} textAnchor="middle" fontSize="7" fill="#9ca3af" transform={`rotate(-90, ${leftX - 26}, ${startY + totalH / 2})`}>Anterior → Posterior</text>

        {/* Stroma thickness callout */}
        <line x1={leftX + width + 5} y1={rendered[2].y} x2={leftX + width + 5} y2={rendered[2].y + rendered[2].h} stroke="#0284c7" strokeWidth="1" />
        <line x1={leftX + width + 2} y1={rendered[2].y} x2={leftX + width + 8} y2={rendered[2].y} stroke="#0284c7" strokeWidth="1" />
        <line x1={leftX + width + 2} y1={rendered[2].y + rendered[2].h} x2={leftX + width + 8} y2={rendered[2].y + rendered[2].h} stroke="#0284c7" strokeWidth="1" />
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Retinal Layers ────────────────────────────────────────────────────────

const RETINAL_LAYERS = [
  { name: "RPE",                          h: 16, fill: "#92400e", stroke: "#78350f", textColor: "#fff",    note: "Retinal Pigment Epithelium" },
  { name: "Photoreceptors (Rods & Cones)",h: 22, fill: "#fed7aa", stroke: "#ea580c", textColor: "#7c2d12", note: "Outer & inner segments" },
  { name: "External Limiting Membrane",   h:  8, fill: "#d1d5db", stroke: "#9ca3af", textColor: "#374151", note: "Membrane (not true)" },
  { name: "Outer Nuclear Layer",          h: 16, fill: "#ede9fe", stroke: "#8b5cf6", textColor: "#5b21b6", note: "Photoreceptor nuclei" },
  { name: "Fibers of Henle",              h:  8, fill: "#f3f4f6", stroke: "#d1d5db", textColor: "#374151", note: "Axons of photoreceptors" },
  { name: "Outer Plexiform Layer",        h: 12, fill: "#99f6e4", stroke: "#0d9488", textColor: "#0f766e", note: "Synapse PR → bipolar" },
  { name: "Inner Nuclear Layer",          h: 18, fill: "#c4b5fd", stroke: "#7c3aed", textColor: "#4c1d95", note: "Modulator cells (bipolar, amacrine, horizontal)" },
  { name: "Inner Plexiform Layer",        h: 12, fill: "#5eead4", stroke: "#0d9488", textColor: "#0f766e", note: "Synapse bipolar → ganglion" },
  { name: "Ganglion Cell Layer",          h: 16, fill: "#bfdbfe", stroke: "#3b82f6", textColor: "#1e40af", note: "Retinal ganglion cells (RGC)" },
  { name: "Nerve Fiber Layer",            h: 16, fill: "#bbf7d0", stroke: "#16a34a", textColor: "#14532d", note: "Axons of RGC → optic nerve" },
  { name: "Internal Limiting Membrane",  h:  8, fill: "#d1d5db", stroke: "#9ca3af", textColor: "#374151", note: "Innermost; borders vitreous" },
]

export function RetinalLayersDiagram() {
  const leftX = 58
  const width = 152
  const startY = 42

  let curY = startY
  const rendered = RETINAL_LAYERS.map((layer) => {
    const y = curY
    curY += layer.h
    return { ...layer, y }
  })
  const totalH = curY - startY

  return (
    <DiagramShell caption="11 Retinal Layers | Detachment = between RPE and Photoreceptors | Foveola: cones only, no rods">
      <svg viewBox="0 0 440 320" className="w-full">
        <rect width="440" height="320" fill="#f9fafb" />

        <text x="220" y="16" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Retinal Layers — Outer to Inner</text>

        {/* Choroid label at top */}
        <rect x={leftX} y={26} width={width} height={12} rx="2" fill="#a16207" opacity="0.25" />
        <text x={leftX + width / 2} y={35} textAnchor="middle" fontSize="7.5" fill="#92400e" fontWeight="600">CHOROID SIDE (outer)</text>

        {rendered.map((layer, i) => (
          <g key={layer.name}>
            <rect
              x={leftX}
              y={layer.y}
              width={width}
              height={layer.h}
              fill={layer.fill}
              stroke={layer.stroke}
              strokeWidth="0.8"
            />
            {layer.h >= 14 ? (
              <text
                x={leftX + width / 2}
                y={layer.y + layer.h / 2 + 3.5}
                textAnchor="middle"
                fontSize="7.5"
                fontWeight="600"
                fill={layer.textColor}
              >
                {layer.name}
              </text>
            ) : (
              <text
                x={leftX - 3}
                y={layer.y + layer.h / 2 + 3}
                textAnchor="end"
                fontSize="7"
                fontWeight="600"
                fill={layer.stroke}
              >
                {layer.name}
              </text>
            )}
            {/* Note lines on right */}
            <line
              x1={leftX + width}
              y1={layer.y + layer.h / 2}
              x2={leftX + width + 8}
              y2={layer.y + layer.h / 2}
              stroke={layer.stroke}
              strokeWidth="0.7"
            />
            <text
              x={leftX + width + 11}
              y={layer.y + layer.h / 2 + 3.5}
              fontSize="7"
              fill="#374151"
            >
              {layer.note}
            </text>

            {/* Detachment arrow between layer 0 (RPE) and layer 1 (Photoreceptors) */}
            {i === 0 && (
              <>
                <line x1={leftX - 8} y1={layer.y + layer.h} x2={leftX - 8} y2={layer.y + layer.h + 22} stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,2" />
                <text x={leftX - 10} y={layer.y + layer.h + 9} textAnchor="end" fontSize="7" fill="#f43f5e" fontWeight="600">← detach</text>
                <text x={leftX - 10} y={layer.y + layer.h + 18} textAnchor="end" fontSize="7" fill="#f43f5e">plane</text>
              </>
            )}
          </g>
        ))}

        {/* Vitreous label at bottom */}
        <rect x={leftX} y={startY + totalH} width={width} height={12} rx="2" fill="#0284c7" opacity="0.15" />
        <text x={leftX + width / 2} y={startY + totalH + 9} textAnchor="middle" fontSize="7.5" fill="#0369a1" fontWeight="600">VITREOUS SIDE (inner)</text>

        {/* Layer count indicator */}
        <text x="12" y={startY + totalH / 2} textAnchor="middle" fontSize="8" fill="#9ca3af" transform={`rotate(-90,12,${startY + totalH / 2})`}>11 layers</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Visual Pathway ────────────────────────────────────────────────────────

const PATHWAY_NODES = [
  {
    id: "retina",
    label: "Retina",
    lesion: "Unilateral visual loss",
    lesionColor: "#dc2626",
    fill: "#dbeafe",
    stroke: "#3b82f6",
    textColor: "#1e40af",
  },
  {
    id: "optic-nerve",
    label: "Optic Nerve",
    lesion: "Blindness of affected eye",
    lesionColor: "#dc2626",
    fill: "#dbeafe",
    stroke: "#3b82f6",
    textColor: "#1e40af",
  },
  {
    id: "chiasma-nasal",
    label: "Optic Chiasma (nasal/crossing fibers)",
    lesion: "Bitemporal hemianopsia",
    lesionColor: "#ea580c",
    fill: "#fef3c7",
    stroke: "#f59e0b",
    textColor: "#92400e",
  },
  {
    id: "chiasma-temporal",
    label: "Optic Chiasma (temporal/uncrossed)",
    lesion: "Binasal hemianopsia",
    lesionColor: "#d97706",
    fill: "#fef3c7",
    stroke: "#f59e0b",
    textColor: "#92400e",
  },
  {
    id: "optic-tract",
    label: "Optic Tract",
    lesion: "Incongruous homonymous hemianopsia",
    lesionColor: "#7c3aed",
    fill: "#ede9fe",
    stroke: "#8b5cf6",
    textColor: "#5b21b6",
  },
  {
    id: "lgb",
    label: "Lateral Geniculate Body (LGB)",
    lesion: "Congruous homonymous hemianopsia",
    lesionColor: "#0d9488",
    fill: "#ccfbf1",
    stroke: "#0d9488",
    textColor: "#0f766e",
  },
  {
    id: "optic-radiation",
    label: "Optic Radiation",
    lesion: "Congruous homonymous hemianopsia",
    lesionColor: "#0d9488",
    fill: "#ccfbf1",
    stroke: "#0d9488",
    textColor: "#0f766e",
  },
  {
    id: "area-striata",
    label: "Area Striata (Brodmann 17)",
    lesion: "Homonymous scotoma (macular sparing)",
    lesionColor: "#059669",
    fill: "#d1fae5",
    stroke: "#16a34a",
    textColor: "#065f46",
  },
]

export function VisualPathwayDiagram() {
  const boxW = 182
  const boxH = 22
  const gapY = 10
  const leftX = 18
  const startY = 28

  return (
    <DiagramShell caption="Visual Pathway | Anterior to LGB = Incongruous | Posterior to LGB = Congruous hemianopsia">
      <svg viewBox="0 0 440 320" className="w-full">
        <rect width="440" height="320" fill="#f9fafb" />

        <text x="220" y="16" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Visual Pathway</text>

        {PATHWAY_NODES.map((node, i) => {
          const y = startY + i * (boxH + gapY)
          const midY = y + boxH / 2
          return (
            <g key={node.id}>
              {/* Connector arrow from previous box */}
              {i > 0 && (
                <line
                  x1={leftX + boxW / 2}
                  y1={startY + (i - 1) * (boxH + gapY) + boxH}
                  x2={leftX + boxW / 2}
                  y2={y}
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  markerEnd="url(#pathArrow)"
                />
              )}

              {/* Node box */}
              <rect
                x={leftX}
                y={y}
                width={boxW}
                height={boxH}
                rx="4"
                fill={node.fill}
                stroke={node.stroke}
                strokeWidth="1"
              />
              <text
                x={leftX + boxW / 2}
                y={midY + 4}
                textAnchor="middle"
                fontSize="8"
                fontWeight="600"
                fill={node.textColor}
              >
                {node.label}
              </text>

              {/* Lesion label on right */}
              <line
                x1={leftX + boxW}
                y1={midY}
                x2={leftX + boxW + 10}
                y2={midY}
                stroke={node.lesionColor}
                strokeWidth="0.8"
              />
              <text
                x={leftX + boxW + 13}
                y={midY + 3.5}
                fontSize="7.5"
                fill={node.lesionColor}
                fontWeight="500"
              >
                {node.lesion}
              </text>
            </g>
          )
        })}

        {/* LGB divider annotation */}
        {(() => {
          const lgbIndex = 5
          const dividerY = startY + lgbIndex * (boxH + gapY) - gapY / 2
          return (
            <>
              <line x1={leftX - 4} y1={dividerY} x2={leftX + boxW + 4} y2={dividerY} stroke="#6b7280" strokeWidth="1" strokeDasharray="4,3" />
              <text x={leftX - 5} y={dividerY - 3} textAnchor="end" fontSize="7" fill="#6b7280">Anterior</text>
              <text x={leftX - 5} y={dividerY + 9} textAnchor="end" fontSize="7" fill="#6b7280">Posterior</text>
            </>
          )
        })()}

        {/* Arrow marker */}
        <defs>
          <marker id="pathArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="#9ca3af" />
          </marker>
        </defs>

        {/* Legend */}
        <rect x={leftX} y={290} width={10} height={8} fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        <text x={leftX + 13} y={298} fontSize="7.5" fill="#374151">Pre-chiasmal</text>
        <rect x={leftX + 82} y={290} width={10} height={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x={leftX + 95} y={298} fontSize="7.5" fill="#374151">Chiasmal</text>
        <rect x={leftX + 150} y={290} width={10} height={8} fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
        <text x={leftX + 163} y={298} fontSize="7.5" fill="#374151">Tract (incong.)</text>
        <rect x={leftX + 242} y={290} width={10} height={8} fill="#ccfbf1" stroke="#0d9488" strokeWidth="1" />
        <text x={leftX + 255} y={298} fontSize="7.5" fill="#374151">Post-LGB (cong.)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 5. EOM Cardinal Positions ───────────────────────────────────────────────

export function EomCardinalDiagram() {
  // 6 cardinal positions around a center
  const cx = 170
  const cy = 158
  const orbitRadius = 110    // distance from center to position box center
  const boxW = 80
  const boxH = 36

  // Positions: angle in degrees (0=right, 90=down in SVG), label, muscles
  const positions = [
    { angle: 0,    label: "Right",      primary: "LR (R)", yoke: "MR (L)",  fill: "#dbeafe", stroke: "#3b82f6", tc: "#1e40af" },
    { angle: 180,  label: "Left",       primary: "MR (R)", yoke: "LR (L)",  fill: "#dbeafe", stroke: "#3b82f6", tc: "#1e40af" },
    { angle: -45,  label: "Up-Right",   primary: "SR (R)", yoke: "IO (L)",  fill: "#d1fae5", stroke: "#16a34a", tc: "#065f46" },
    { angle: -135, label: "Up-Left",    primary: "IO (R)", yoke: "SR (L)",  fill: "#d1fae5", stroke: "#16a34a", tc: "#065f46" },
    { angle: 45,   label: "Down-Right", primary: "IR (R)", yoke: "SO (L)",  fill: "#fef3c7", stroke: "#f59e0b", tc: "#92400e" },
    { angle: 135,  label: "Down-Left",  primary: "SO (R)", yoke: "IR (L)",  fill: "#fef3c7", stroke: "#f59e0b", tc: "#92400e" },
  ]

  return (
    <DiagramShell caption="Cardinal Positions of Gaze | Yoke muscles (Hering's Law) receive equal innervation | MR = strongest rectus | SO = longest EOM">
      <svg viewBox="0 0 440 316" className="w-full">
        <rect width="440" height="316" fill="#f9fafb" />

        <text x="220" y="16" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#111827">Cardinal Positions of Gaze — Yoke Muscles</text>

        {/* Spoke lines from center to positions */}
        {positions.map((pos) => {
          const rad = (pos.angle * Math.PI) / 180
          const bx = cx + orbitRadius * Math.cos(rad)
          const by = cy + orbitRadius * Math.sin(rad)
          return (
            <line
              key={pos.label + "-spoke"}
              x1={cx}
              y1={cy}
              x2={bx}
              y2={by}
              stroke="#e5e7eb"
              strokeWidth="1.2"
            />
          )
        })}

        {/* Position boxes */}
        {positions.map((pos) => {
          const rad = (pos.angle * Math.PI) / 180
          const bx = cx + orbitRadius * Math.cos(rad) - boxW / 2
          const by = cy + orbitRadius * Math.sin(rad) - boxH / 2
          return (
            <g key={pos.label}>
              <rect x={bx} y={by} width={boxW} height={boxH} rx="5" fill={pos.fill} stroke={pos.stroke} strokeWidth="1" />
              <text x={bx + boxW / 2} y={by + 11} textAnchor="middle" fontSize="7.5" fontWeight="700" fill={pos.tc}>
                {pos.label}
              </text>
              <text x={bx + boxW / 2} y={by + 22} textAnchor="middle" fontSize="8" fontWeight="600" fill={pos.tc}>
                {pos.primary}
              </text>
              <text x={bx + boxW / 2} y={by + 33} textAnchor="middle" fontSize="7.5" fill={pos.tc}>
                {pos.yoke}
              </text>
            </g>
          )
        })}

        {/* Center circle — Primary Position */}
        <circle cx={cx} cy={cy} r="30" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
        <text x={cx} y={cy - 5} textAnchor="middle" fontSize="8" fontWeight="700" fill="#065f46">Primary</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fontSize="8" fontWeight="700" fill="#065f46">Position</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fontSize="7" fill="#374151">Forward gaze</text>

        {/* Direction labels (Nasal/Temporal guidance) */}
        <text x={cx - orbitRadius - 42} y={cy + 4} textAnchor="middle" fontSize="7.5" fill="#9ca3af">← Left</text>
        <text x={cx + orbitRadius + 42} y={cy + 4} textAnchor="middle" fontSize="7.5" fill="#9ca3af">Right →</text>

        {/* Legend */}
        <rect x="248" y="272" width="8" height="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        <text x="260" y="280" fontSize="7.5" fill="#374151">Horizontal</text>
        <rect x="248" y="285" width="8" height="8" fill="#d1fae5" stroke="#16a34a" strokeWidth="1" />
        <text x="260" y="293" fontSize="7.5" fill="#374151">Elevation</text>
        <rect x="248" y="298" width="8" height="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="260" y="306" fontSize="7.5" fill="#374151">Depression</text>

        {/* Hering's law note */}
        <text x="12" y="278" fontSize="7.5" fill="#6b7280">Hering&apos;s Law: equal</text>
        <text x="12" y="289" fontSize="7.5" fill="#6b7280">innervation to yoke</text>
        <text x="12" y="300" fontSize="7.5" fill="#6b7280">muscles (yoke pair</text>
        <text x="12" y="311" fontSize="7.5" fill="#6b7280">shown per position)</text>

        {/* CN note */}
        <text x="220" y="272" textAnchor="middle" fontSize="7.5" fill="#6b7280">SO = CN IV | LR = CN VI | All others = CN III</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ──────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'oa-eye-cross-section': EyeCrossSectionDiagram,
  'oa-corneal-layers':    CornealLayersDiagram,
  'oa-retinal-layers':    RetinalLayersDiagram,
  'oa-visual-pathway':    VisualPathwayDiagram,
  'oa-eom-cardinal':      EomCardinalDiagram,
}
