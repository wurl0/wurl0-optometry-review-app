/* SVG diagrams for Contact Lens — all inline, no external assets */

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

// ─── 1. Contact Lens Anatomy / Terminology ────────────────────────────────────

export function CLAnatomyDiagram() {
  return (
    <DiagramShell caption="Key rigid-lens parameters. The base curve (BOZR) is the back optic zone radius; the peripheral curve is flatter than the central curve for stability. Sagittal depth (sag), set by base curve and diameter, is the main determinant of fit.">
      <svg viewBox="0 0 470 240" className="w-full">
        <rect width="470" height="240" fill="#f9fafb" />
        <text x="235" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Contact Lens Parameters (cross-section)</text>
        {/* lens meniscus cross section */}
        <path d="M 90 120 Q 235 78 380 120 Q 235 96 90 120 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.6" />
        {/* peripheral flatter curve hint (edges lifted) */}
        <path d="M 90 120 Q 70 118 60 128" fill="none" stroke="#2563eb" strokeWidth="1.6" />
        <path d="M 380 120 Q 400 118 410 128" fill="none" stroke="#2563eb" strokeWidth="1.6" />
        {/* total diameter arrow */}
        <line x1="60" y1="150" x2="410" y2="150" stroke="#6b7280" strokeWidth="1" markerStart="url(#clA)" markerEnd="url(#clA)" />
        <text x="235" y="164" textAnchor="middle" fontSize="9" fill="#374151">Total Diameter (TD): SCL 13-16, RGP 8-20 mm</text>
        {/* optic zone arrow */}
        <line x1="150" y1="104" x2="320" y2="104" stroke="#16a34a" strokeWidth="1" markerStart="url(#clAg)" markerEnd="url(#clAg)" />
        <text x="235" y="98" textAnchor="middle" fontSize="8.5" fill="#15803d">Optic Zone (must exceed pupil)</text>
        {/* sagittal depth */}
        <line x1="235" y1="87" x2="235" y2="120" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#clAr)" />
        <text x="242" y="108" fontSize="8.5" fill="#b91c1c">sag (depth)</text>
        {/* base curve radius label */}
        <text x="235" y="132" textAnchor="middle" fontSize="8.5" fill="#1d4ed8">back surface = Base Curve / BOZR</text>
        {/* peripheral curve labels */}
        <text x="60" y="200" fontSize="8.5" fill="#374151">Peripheral curve (flatter than</text>
        <text x="60" y="212" fontSize="8.5" fill="#374151">central curve) &rarr; edge lift, stability, tear exchange</text>
        <line x1="70" y1="128" x2="90" y2="185" stroke="#9ca3af" strokeWidth="0.6" />
        <defs>
          <marker id="clA" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,3.5 L7,0 L7,7 Z" fill="#6b7280" /></marker>
          <marker id="clAg" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,3.5 L7,0 L7,7 Z" fill="#16a34a" /></marker>
          <marker id="clAr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626" /></marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. RGP Fluorescein Fitting Patterns ──────────────────────────────────────

export function FluoresceinDiagram() {
  const pats = [
    { title: 'FLAT / loose', sub: 'central bearing, edge pooling', tear: 'MINUS tear lens', cx: 80,
      draw: (cx: number) => (<>
        <circle cx={cx} cy={110} r={40} fill="#052e16" />
        <circle cx={cx} cy={110} r={40} fill="none" stroke="#22c55e" strokeWidth="8" />
        <circle cx={cx} cy={110} r={18} fill="#052e16" />
      </>) },
    { title: 'ALIGNED / optimal', sub: 'even thin fluorescein', tear: 'PLANO tear lens', cx: 235,
      draw: (cx: number) => (<>
        <circle cx={cx} cy={110} r={40} fill="#166534" opacity="0.9" />
        <circle cx={cx} cy={110} r={40} fill="none" stroke="#22c55e" strokeWidth="2" />
      </>) },
    { title: 'STEEP / tight', sub: 'central pooling, edge bearing', tear: 'PLUS tear lens', cx: 390,
      draw: (cx: number) => (<>
        <circle cx={cx} cy={110} r={40} fill="#052e16" />
        <circle cx={cx} cy={110} r={26} fill="#22c55e" />
        <circle cx={cx} cy={110} r={26} fill="#4ade80" />
      </>) },
  ]
  return (
    <DiagramShell caption="Sodium-fluorescein RGP fit patterns. Green = tears pooling (clearance); dark = lens bearing/touch. Flat fit shows central touch with edge pooling (minus tear lens); steep fit shows central pooling (plus tear lens); an aligned fit shows an even thin film (plano tear lens).">
      <svg viewBox="0 0 470 190" className="w-full">
        <rect width="470" height="190" fill="#0f172a" />
        <text x="235" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">RGP Fluorescein Fitting Patterns</text>
        {pats.map((p, i) => (
          <g key={i}>
            {p.draw(p.cx)}
            <text x={p.cx} y={165} textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#f1f5f9">{p.title}</text>
            <text x={p.cx} y={177} textAnchor="middle" fontSize="7.5" fill="#94a3b8">{p.sub}</text>
            <text x={p.cx} y={64} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#fbbf24">{p.tear}</text>
          </g>
        ))}
      </svg>
    </DiagramShell>
  )
}

// ─── 3. FDA Soft Lens Groups ──────────────────────────────────────────────────

export function FDAGroupsDiagram() {
  const cells = [
    { g: 'Group 1', desc: 'Low water · Non-ionic', x: 130, y: 56, color: '#dbeafe' },
    { g: 'Group 2', desc: 'High water · Non-ionic', x: 300, y: 56, color: '#dcfce7' },
    { g: 'Group 3', desc: 'Low water · Ionic', x: 130, y: 132, color: '#fef9c3' },
    { g: 'Group 4', desc: 'High water · Ionic', x: 300, y: 132, color: '#fee2e2' },
  ]
  return (
    <DiagramShell caption="FDA classification of soft (hydrogel) lens materials by water content and surface charge. Ionic and high-water materials attract more protein deposits; Group 4 (high water, ionic) is the most deposit-prone.">
      <svg viewBox="0 0 470 210" className="w-full">
        <rect width="470" height="210" fill="#f9fafb" />
        <text x="235" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">FDA Soft Lens Material Groups</text>
        <text x="130" y="42" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b7280">NON-IONIC</text>
        <text x="300" y="42" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b7280">IONIC</text>
        <text x="46" y="98" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#6b7280" transform="rotate(-90 46 98)">LOW WATER</text>
        <text x="46" y="172" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#6b7280" transform="rotate(-90 46 172)">HIGH WATER</text>
        {cells.map((c, i) => (
          <g key={i}>
            <rect x={c.x - 68} y={c.y} width="136" height="60" rx="8" fill={c.color} stroke="#cbd5e1" strokeWidth="1.2" />
            <text x={c.x} y={c.y + 27} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">{c.g}</text>
            <text x={c.x} y={c.y + 44} textAnchor="middle" fontSize="8.5" fill="#475569">{c.desc}</text>
          </g>
        ))}
        <text x="235" y="204" textAnchor="middle" fontSize="8" fill="#6b7280">Protein deposits: ionic &gt; non-ionic; high water &gt; low water</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'cl-anatomy': CLAnatomyDiagram,
  'cl-fluorescein': FluoresceinDiagram,
  'cl-fda-groups': FDAGroupsDiagram,
}
