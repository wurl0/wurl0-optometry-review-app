/* SVG diagrams for Low Vision — all inline, no external assets */

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

// ─── 1. Visual Impairment Classification ──────────────────────────────────────

export function ClassificationDiagram() {
  const rows = [
    { label: 'Normal / near-normal', va: '20/12 – 20/25', color: '#16a34a', w: 200 },
    { label: 'Mild impairment', va: '20/40 – 20/60', color: '#65a30d', w: 172 },
    { label: 'Moderate impairment', va: 'worse than 20/60 – 20/200', color: '#ca8a04', w: 144 },
    { label: 'Severe impairment', va: 'worse than 20/200 – 20/400', color: '#ea580c', w: 108 },
    { label: 'Blindness', va: 'worse than 20/400 (3/60)', color: '#dc2626', w: 72 },
  ]
  return (
    <DiagramShell caption="ICD-11 distance vision impairment by best-corrected VA. WHO blindness = 20/200 or worse in the better eye, or field < 10°. WHO low vision = worse than 20/70 with field < 20°.">
      <svg viewBox="0 0 440 250" className="w-full">
        <rect width="440" height="250" fill="#f9fafb" />
        <text x="220" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Visual Impairment Ladder (ICD-11)</text>
        {rows.map((r, i) => {
          const y = 38 + i * 40
          return (
            <g key={i}>
              <rect x="20" y={y} width={r.w} height="28" rx="4" fill={r.color} opacity="0.85" />
              <text x="28" y={y + 18} fontSize="9.5" fontWeight="bold" fill="#ffffff">{r.label}</text>
              <text x={r.w + 30} y={y + 18} fontSize="9" fill="#374151">{r.va}</text>
            </g>
          )
        })}
        <line x1="20" y1="238" x2="20" y2="34" stroke="#9ca3af" strokeWidth="1" />
        <text x="16" y="245" fontSize="7.5" fill="#6b7280">better vision</text>
        <text x="16" y="34" fontSize="7.5" fill="#6b7280" textAnchor="start">↑</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Types of Magnification ────────────────────────────────────────────────

export function MagnificationTypesDiagram() {
  return (
    <DiagramShell caption="Four ways to enlarge the retinal image. Relative size and relative distance need no optical device; angular uses an interposed lens system; projection throws an enlarged image on a screen.">
      <svg viewBox="0 0 460 260" className="w-full">
        <rect width="460" height="260" fill="#f9fafb" />
        <text x="230" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Types of Magnification</text>

        {/* Relative size */}
        <text x="115" y="40" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0f766e">Relative Size</text>
        <text x="115" y="52" textAnchor="middle" fontSize="7.5" fill="#6b7280">object made bigger (large print)</text>
        <text x="70" y="95" fontSize="14" fill="#334155">A</text>
        <text x="140" y="100" fontSize="34" fill="#0f766e" fontWeight="bold">A</text>
        <path d="M 90 88 L 125 88" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#lvArrow)" />

        {/* Relative distance */}
        <text x="345" y="40" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0f766e">Relative Distance</text>
        <text x="345" y="52" textAnchor="middle" fontSize="7.5" fill="#6b7280">object brought closer (RDM = r/d)</text>
        <circle cx="300" cy="95" r="9" fill="none" stroke="#334155" strokeWidth="1.5" />
        <text x="300" y="99" textAnchor="middle" fontSize="8" fill="#334155">eye</text>
        <text x="410" y="99" fontSize="12" fill="#334155">obj</text>
        <text x="360" y="99" fontSize="20" fill="#0f766e" fontWeight="bold">obj</text>
        <path d="M 395 92 L 388 92 M 355 92 L 348 92" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#lvArrow)" />

        {/* Angular */}
        <text x="115" y="150" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1d4ed8">Angular</text>
        <text x="115" y="162" textAnchor="middle" fontSize="7.5" fill="#6b7280">lens system interposed (telescope)</text>
        <circle cx="55" cy="205" r="9" fill="none" stroke="#334155" strokeWidth="1.5" />
        <path d="M 78 190 Q 88 205 78 220" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
        <path d="M 110 188 Q 100 205 110 222" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
        <line x1="120" y1="205" x2="175" y2="205" stroke="#94a3b8" strokeWidth="1" />
        <text x="150" y="200" textAnchor="middle" fontSize="8" fill="#1d4ed8">obj</text>

        {/* Projection */}
        <text x="345" y="150" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#7c3aed">Projection</text>
        <text x="345" y="162" textAnchor="middle" fontSize="7.5" fill="#6b7280">image thrown on a screen (CCTV)</text>
        <rect x="265" y="178" width="18" height="14" rx="2" fill="#334155" />
        <path d="M 285 185 L 420 178 L 420 232 L 285 225 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="355" y="210" textAnchor="middle" fontSize="16" fill="#7c3aed" fontWeight="bold">A</text>

        <defs>
          <marker id="lvArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Galilean vs Keplerian Telescope ───────────────────────────────────────

export function TelescopeDiagram() {
  return (
    <DiagramShell caption="Galilean: + objective and − (concave) eyepiece → erect virtual image, compact, brighter but small field. Keplerian: + objective and + (convex) eyepiece → inverted image needing a re-inverting prism, higher magnification and wider field. M = Fe / Fo.">
      <svg viewBox="0 0 460 290" className="w-full">
        <rect width="460" height="290" fill="#f9fafb" />
        <text x="230" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Telescopes for Distance Low Vision</text>

        {/* Galilean (top) */}
        <text x="20" y="42" fontSize="10" fontWeight="bold" fill="#1d4ed8">Galilean (Terrestrial)</text>
        <text x="20" y="54" fontSize="7.5" fill="#6b7280">+ objective · − eyepiece · erect image · up to ~4×</text>
        <line x1="30" y1="95" x2="430" y2="95" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="4,4" />
        {/* objective convex */}
        <path d="M 120 70 Q 132 95 120 120" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
        <path d="M 120 70 Q 108 95 120 120" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
        <text x="114" y="134" fontSize="7.5" fill="#1d4ed8">objective (+)</text>
        {/* eyepiece concave */}
        <path d="M 300 72 Q 310 95 300 118 L 316 118 Q 306 95 316 72 Z" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
        <text x="290" y="134" fontSize="7.5" fill="#1d4ed8">eyepiece (−)</text>
        {/* rays */}
        <line x1="40" y1="80" x2="120" y2="80" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="40" y1="110" x2="120" y2="110" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="120" y1="80" x2="308" y2="92" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="120" y1="110" x2="308" y2="98" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="316" y1="90" x2="410" y2="86" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="316" y1="100" x2="410" y2="104" stroke="#f59e0b" strokeWidth="1.2" />
        <circle cx="425" cy="95" r="8" fill="none" stroke="#334155" strokeWidth="1.3" />
        <text x="419" y="115" fontSize="7" fill="#334155">eye</text>
        <text x="360" y="70" fontSize="8" fill="#16a34a" fontWeight="bold">↑ erect</text>

        {/* Keplerian (bottom) */}
        <text x="20" y="188" fontSize="10" fontWeight="bold" fill="#b91c1c">Keplerian (Astronomical)</text>
        <text x="20" y="200" fontSize="7.5" fill="#6b7280">+ objective · + eyepiece · inverted (needs prism) · up to ~20×</text>
        <line x1="30" y1="245" x2="430" y2="245" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="4,4" />
        <path d="M 120 220 Q 132 245 120 270" fill="none" stroke="#b91c1c" strokeWidth="2.5" />
        <path d="M 120 220 Q 108 245 120 270" fill="none" stroke="#b91c1c" strokeWidth="2.5" />
        <text x="114" y="283" fontSize="7.5" fill="#b91c1c">objective (+)</text>
        <path d="M 300 222 Q 312 245 300 268" fill="none" stroke="#b91c1c" strokeWidth="2.5" />
        <path d="M 300 222 Q 288 245 300 268" fill="none" stroke="#b91c1c" strokeWidth="2.5" />
        <text x="286" y="283" fontSize="7.5" fill="#b91c1c">eyepiece (+)</text>
        {/* rays crossing at internal focus → inverted */}
        <line x1="40" y1="232" x2="120" y2="232" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="40" y1="258" x2="120" y2="258" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="120" y1="232" x2="210" y2="245" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="120" y1="258" x2="210" y2="245" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="210" y1="245" x2="300" y2="232" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="210" y1="245" x2="300" y2="258" stroke="#f59e0b" strokeWidth="1.2" />
        <circle cx="210" cy="245" r="2.5" fill="#b91c1c" />
        <text x="196" y="238" fontSize="6.5" fill="#b91c1c">internal focus</text>
        <line x1="300" y1="232" x2="410" y2="230" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="300" y1="258" x2="410" y2="260" stroke="#f59e0b" strokeWidth="1.2" />
        <circle cx="425" cy="245" r="8" fill="none" stroke="#334155" strokeWidth="1.3" />
        <text x="352" y="222" fontSize="8" fill="#dc2626" fontWeight="bold">↓ inverted</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Visual Field Defects ──────────────────────────────────────────────────

export function VisualFieldDefectsDiagram() {
  const fields: { title: string; cond: string; cx: number; draw: React.ReactNode }[] = [
    {
      title: 'Central scotoma', cond: 'Macular disease / AMD', cx: 75,
      draw: <circle cx="75" cy="150" r="16" fill="#111827" />,
    },
    {
      title: 'Constriction', cond: 'Retinitis pigmentosa', cx: 190,
      draw: <path d="M 190 150 m -48 0 a 48 48 0 1 0 96 0 a 48 48 0 1 0 -96 0 M 190 150 m -20 0 a 20 20 0 1 1 40 0 a 20 20 0 1 1 -40 0" fill="#111827" fillRule="evenodd" />,
    },
    {
      title: 'Arcuate scotoma', cond: 'Glaucoma', cx: 305,
      draw: <path d="M 305 118 A 40 40 0 0 1 337 170 A 22 26 0 0 0 305 130 Z" fill="#111827" />,
    },
    {
      title: 'Scattered scotomas', cond: 'DR / HTN retinopathy', cx: 415,
      draw: <g fill="#111827">
        <circle cx="400" cy="135" r="5" /><circle cx="425" cy="150" r="6" /><circle cx="405" cy="168" r="4" /><circle cx="428" cy="128" r="3.5" /><circle cx="415" cy="158" r="3" />
      </g>,
    },
  ]
  return (
    <DiagramShell caption="Where the disease strikes the retina determines the field defect. Fovea loss → central scotoma; peripheral rod loss → ring/constricted field; nerve-fibre-layer loss → arcuate; multiple lesions → scattered scotomas.">
      <svg viewBox="0 0 460 210" className="w-full">
        <rect width="460" height="210" fill="#f9fafb" />
        <text x="230" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Visual Field Defects by Cause</text>
        {fields.map((f, i) => (
          <g key={i}>
            <circle cx={f.cx} cy="150" r="48" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1={f.cx - 48} y1="150" x2={f.cx + 48} y2="150" stroke="#e5e7eb" strokeWidth="0.75" />
            <line x1={f.cx} y1="102" x2={f.cx} y2="198" stroke="#e5e7eb" strokeWidth="0.75" />
            {f.draw}
            <text x={f.cx} y="52" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#111827">{f.title}</text>
            <text x={f.cx} y="64" textAnchor="middle" fontSize="7.5" fill="#6b7280">{f.cond}</text>
          </g>
        ))}
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'lv-classification': ClassificationDiagram,
  'lv-magnification-types': MagnificationTypesDiagram,
  'lv-telescopes': TelescopeDiagram,
  'lv-visual-fields': VisualFieldDefectsDiagram,
}
