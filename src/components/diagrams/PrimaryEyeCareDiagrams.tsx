/* SVG diagrams for Primary Eye Care — all inline, no external assets */

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

// ─── 1. Retinoscopy Reflex Motion ─────────────────────────────────────────────

export function RetinoscopyMotionDiagram() {
  const cols = [
    {
      x: 20, title: 'WITH motion', sub: 'reflex moves same way as streak',
      fill: '#dbeafe', stroke: '#3b82f6', text: '#1e40af',
      meaning: 'Hyperope / emmetrope /\nsmall myope', add: 'ADD  PLUS', addFill: '#1d4ed8',
      arrowDir: 1,
    },
    {
      x: 160, title: 'AGAINST motion', sub: 'reflex moves opposite to streak',
      fill: '#ede9fe', stroke: '#8b5cf6', text: '#5b21b6',
      meaning: 'Myopia beyond your\nworking distance', add: 'ADD  MINUS', addFill: '#7c3aed',
      arrowDir: -1,
    },
    {
      x: 300, title: 'NEUTRAL', sub: 'pupil fills, no motion',
      fill: '#d1fae5', stroke: '#10b981', text: '#065f46',
      meaning: 'Far-point at your eye\n= end point', add: 'STOP', addFill: '#059669',
      arrowDir: 0,
    },
  ]
  return (
    <DiagramShell caption="With → add plus · Against → add minus · Neutral = end point (deduct working-distance lens). A concave mirror reverses with/against.">
      <svg viewBox="0 0 440 250" className="w-full">
        <rect width="440" height="250" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Streak Retinoscopy — Reflex Motion (plane mirror)</text>

        {cols.map((c) => (
          <g key={c.title}>
            <rect x={c.x} y={30} width={120} height={200} rx="8" fill={c.fill} stroke={c.stroke} strokeWidth="1.2" />
            <text x={c.x + 60} y={48} textAnchor="middle" fontSize="9.5" fontWeight="bold" fill={c.text}>{c.title}</text>
            <text x={c.x + 60} y={60} textAnchor="middle" fontSize="6.5" fill={c.text}>{c.sub}</text>

            {/* pupil circle with reflex band */}
            <circle cx={c.x + 60} cy={100} r="26" fill="#1f2937" stroke={c.stroke} strokeWidth="1.5" />
            {c.arrowDir === 0 ? (
              <circle cx={c.x + 60} cy={100} r="24" fill="#f59e0b" opacity="0.85" />
            ) : (
              <rect x={c.x + 42} y={92} width={36} height={16} rx="3" fill="#f59e0b" opacity="0.9" />
            )}

            {/* motion arrows */}
            {c.arrowDir !== 0 && (
              <>
                <line x1={c.x + 60} y1={138} x2={c.x + 60 + c.arrowDir * 34} y2={138} stroke={c.text} strokeWidth="2" markerEnd="url(#pec-arr)" />
                <text x={c.x + 60} y={154} textAnchor="middle" fontSize="6.5" fill={c.text}>{c.arrowDir === 1 ? 'same as sweep' : 'opposite sweep'}</text>
              </>
            )}

            {/* meaning */}
            {c.meaning.split('\n').map((line, i) => (
              <text key={i} x={c.x + 60} y={172 + i * 11} textAnchor="middle" fontSize="7" fill="#374151">{line}</text>
            ))}

            {/* action pill */}
            <rect x={c.x + 22} y={200} width={76} height={20} rx="10" fill={c.addFill} />
            <text x={c.x + 60} y={214} textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">{c.add}</text>
          </g>
        ))}

        <defs>
          <marker id="pec-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151" /></marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Duochrome (Red-Green) Test ────────────────────────────────────────────

export function DuochromeDiagram() {
  return (
    <DiagramShell caption="Green focuses in front, red behind. Red clearer → add MINUS. Green clearer → add PLUS (RAM-GAP). End point = equal.">
      <svg viewBox="0 0 440 240" className="w-full">
        <rect width="440" height="240" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Duochrome (Bichrome) Test — Sphere Refinement</text>

        {/* schematic eye with retina */}
        <path d="M 60 120 Q 60 70 120 70 Q 195 70 210 120 Q 195 170 120 170 Q 60 170 60 120 Z" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
        {/* retina arc */}
        <path d="M 196 92 Q 214 120 196 148" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <text x="205" y="120" fontSize="6.5" fill="#b45309">retina</text>

        {/* incoming rays */}
        <line x1="20" y1="110" x2="80" y2="118" stroke="#6b7280" strokeWidth="1" />
        <line x1="20" y1="130" x2="80" y2="122" stroke="#6b7280" strokeWidth="1" />

        {/* green focus (in front) */}
        <circle cx="150" cy="120" r="4" fill="#16a34a" />
        <text x="150" y="108" textAnchor="middle" fontSize="7" fill="#15803d" fontWeight="bold">GREEN</text>
        <text x="150" y="140" textAnchor="middle" fontSize="6" fill="#15803d">focus in front</text>

        {/* red focus (behind) */}
        <circle cx="238" cy="120" r="4" fill="#dc2626" />
        <text x="238" y="108" textAnchor="middle" fontSize="7" fill="#b91c1c" fontWeight="bold">RED</text>
        <text x="238" y="140" textAnchor="middle" fontSize="6" fill="#b91c1c">focus behind</text>

        {/* the split panel */}
        <rect x="270" y="60" width="70" height="120" rx="6" fill="#16a34a" />
        <rect x="340" y="60" width="70" height="120" rx="6" fill="#dc2626" />
        <circle cx="305" cy="100" r="9" fill="white" /><text x="305" y="104" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803d">6</text>
        <circle cx="375" cy="100" r="9" fill="white" /><text x="375" y="104" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b91c1c">9</text>
        <text x="340" y="196" textAnchor="middle" fontSize="7" fill="#374151">Which side is clearer?</text>

        {/* action rules */}
        <rect x="20" y="192" width="200" height="38" rx="6" fill="#fef3c7" stroke="#d97706" />
        <text x="30" y="207" fontSize="8" fontWeight="bold" fill="#15803d">GREEN clearer → ADD PLUS (reduce minus)</text>
        <text x="30" y="222" fontSize="8" fontWeight="bold" fill="#b91c1c">RED clearer → ADD MINUS (reduce plus)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'pec-retinoscopy-motion': RetinoscopyMotionDiagram,
  'pec-duochrome': DuochromeDiagram,
}
