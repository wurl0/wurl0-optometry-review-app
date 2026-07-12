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

// ─── 3. Hirschberg — Corneal Reflex → Deviation ───────────────────────────────

export function HirschbergDiagram() {
  const eyes = [
    { cx: 95, rx: -4, label: 'Ortho / straight', sub: 'reflex central', stroke: '#059669' },
    { cx: 220, rx: 15, label: 'Esotropia (in)', sub: 'reflex TEMPORAL', stroke: '#dc2626' },
    { cx: 345, rx: -15, label: 'Exotropia (out)', sub: 'reflex NASAL', stroke: '#4f46e5' },
  ]
  return (
    <DiagramShell caption="Reflex sits OPPOSITE the turn: temporal reflex → esotropia, nasal reflex → exotropia. 1 mm ≈ 7° ≈ 22Δ.">
      <svg viewBox="0 0 440 235" className="w-full">
        <rect width="440" height="235" fill="#f9fafb" />
        <text x="220" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Hirschberg — Corneal Reflex Position → Deviation</text>
        {eyes.map(e => (
          <g key={e.label}>
            <circle cx={e.cx} cy={64} r="30" fill="#eff6ff" stroke="#0ea5e9" strokeWidth="1.5" />
            <circle cx={e.cx} cy={64} r="17" fill="#93c5fd" opacity="0.55" />
            <circle cx={e.cx} cy={64} r="9" fill="#1f2937" />
            <circle cx={e.cx + e.rx} cy={62} r="3.6" fill="#fde047" stroke="#f59e0b" strokeWidth="0.8" />
            <text x={e.cx - 34} y={68} fontSize="7" fill="#9ca3af">N</text>
            <text x={e.cx + 30} y={68} fontSize="7" fill="#9ca3af">T</text>
            <text x={e.cx} y={112} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill={e.stroke}>{e.label}</text>
            <text x={e.cx} y={123} textAnchor="middle" fontSize="7" fill="#6b7280">{e.sub}</text>
          </g>
        ))}
        <text x="220" y="152" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#111827">Reflex position → deviation estimate</text>
        {[
          { x: 30, pos: 'Pupil margin', v: '15° ≈ 30Δ' },
          { x: 165, pos: 'Mid pupil–limbus', v: '30° ≈ 60Δ' },
          { x: 300, pos: 'At limbus', v: '45° ≈ 90Δ' },
        ].map(s => (
          <g key={s.pos}>
            <rect x={s.x} y={162} width={110} height={40} rx="6" fill="#fef3c7" stroke="#d97706" />
            <text x={s.x + 55} y={179} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#92400e">{s.pos}</text>
            <text x={s.x + 55} y={193} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b45309">{s.v}</text>
          </g>
        ))}
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Cover Test Logic Tree ─────────────────────────────────────────────────

export function CoverTestDiagram() {
  return (
    <DiagramShell caption="Unilateral cover reveals a TROPIA (manifest); cover-uncover reveals a PHORIA (latent). Recovery OUT = eso, IN = exo.">
      <svg viewBox="0 0 440 270" className="w-full">
        <rect width="440" height="270" fill="#f9fafb" />
        <text x="220" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Cover Test — Phoria vs Tropia</text>

        {/* Step 1 */}
        <rect x="90" y="28" width="260" height="34" rx="8" fill="#e0f2fe" stroke="#0ea5e9" />
        <text x="220" y="42" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#0369a1">UNILATERAL COVER</text>
        <text x="220" y="54" textAnchor="middle" fontSize="7.5" fill="#0c4a6e">Cover one eye · watch the OTHER (uncovered) eye</text>
        <line x1="220" y1="62" x2="220" y2="78" stroke="#9ca3af" strokeWidth="1.2" markerEnd="url(#pec-ar2)" />
        <text x="248" y="74" fontSize="7.5" fill="#6b7280">does it move?</text>

        {/* branch: yes = tropia */}
        <line x1="220" y1="82" x2="110" y2="98" stroke="#9ca3af" strokeWidth="1.2" markerEnd="url(#pec-ar2)" />
        <text x="150" y="90" fontSize="7.5" fontWeight="bold" fill="#dc2626">YES →</text>
        <rect x="30" y="100" width="150" height="40" rx="8" fill="#fee2e2" stroke="#ef4444" />
        <text x="105" y="116" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b91c1c">TROPIA</text>
        <text x="105" y="130" textAnchor="middle" fontSize="7" fill="#7f1d1d">manifest · never normal</text>

        {/* branch: no = go to cover-uncover */}
        <line x1="220" y1="82" x2="330" y2="98" stroke="#9ca3af" strokeWidth="1.2" markerEnd="url(#pec-ar2)" />
        <text x="270" y="90" fontSize="7.5" fontWeight="bold" fill="#059669">NO →</text>
        <rect x="255" y="100" width="170" height="40" rx="8" fill="#eff6ff" stroke="#3b82f6" />
        <text x="340" y="115" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">COVER–UNCOVER</text>
        <text x="340" y="127" textAnchor="middle" fontSize="7" fill="#1e3a8a">watch the covered eye as you uncover</text>
        <line x1="340" y1="140" x2="340" y2="156" stroke="#9ca3af" strokeWidth="1.2" markerEnd="url(#pec-ar2)" />

        {/* phoria / ortho */}
        <rect x="255" y="158" width="170" height="40" rx="8" fill="#f5f3ff" stroke="#8b5cf6" />
        <text x="340" y="173" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#6d28d9">moves back → PHORIA</text>
        <text x="340" y="186" textAnchor="middle" fontSize="7" fill="#5b21b6">latent · no move = orthophoria</text>

        {/* direction rule */}
        <rect x="30" y="215" width="380" height="40" rx="8" fill="#ecfdf5" stroke="#10b981" />
        <text x="220" y="231" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#065f46">Recovery direction names the deviation</text>
        <text x="220" y="245" textAnchor="middle" fontSize="8" fill="#047857">moves OUT on exposure = ESO · moves IN = EXO · down = hyper · up = hypo</text>

        <defs>
          <marker id="pec-ar2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#9ca3af" /></marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 5. Van Herick Grading ────────────────────────────────────────────────────

export function VanHerickDiagram() {
  const grades = [
    { g: '4', ratio: '≥ 1:1', shadow: 26, verdict: 'Dilate OK', vFill: '#d1fae5', vText: '#065f46', bar: '#10b981' },
    { g: '3', ratio: '1:2', shadow: 16, verdict: 'Dilate OK', vFill: '#d1fae5', vText: '#065f46', bar: '#10b981' },
    { g: '2', ratio: '1:4', shadow: 8, verdict: 'Caution', vFill: '#fef3c7', vText: '#92400e', bar: '#f59e0b' },
    { g: '1', ratio: '< 1:4', shadow: 4, verdict: 'Do NOT', vFill: '#fee2e2', vText: '#b91c1c', bar: '#ef4444' },
    { g: '0', ratio: 'closed', shadow: 0, verdict: 'Emergency', vFill: '#fee2e2', vText: '#b91c1c', bar: '#dc2626' },
  ]
  const colW = 84
  return (
    <DiagramShell caption="Shadow = aqueous gap on the iris vs the corneal beam. Higher grade = deeper angle = SAFER to dilate. Grade 0 = closed (acute-angle-closure emergency).">
      <svg viewBox="0 0 440 210" className="w-full">
        <rect width="440" height="210" fill="#f9fafb" />
        <text x="220" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Van Herick — Anterior Chamber Angle Grades</text>
        {grades.map((gr, i) => {
          const x = 10 + i * colW
          const beamX = x + 20
          return (
            <g key={gr.g}>
              {/* cornea beam (fixed) */}
              <rect x={beamX} y={40} width={7} height={70} rx="2" fill="#38bdf8" />
              <text x={beamX + 3} y={124} textAnchor="middle" fontSize="6.5" fill="#0369a1">beam</text>
              {/* aqueous shadow (variable = ratio) */}
              {gr.shadow > 0 ? (
                <rect x={beamX + 9} y={40} width={gr.shadow} height={70} rx="2" fill="#111827" opacity="0.16" />
              ) : (
                <text x={beamX + 16} y={78} fontSize="7" fill="#b91c1c">no gap</text>
              )}
              {/* iris line */}
              <rect x={beamX + 9 + Math.max(gr.shadow, 0)} y={40} width={4} height={70} fill="#a16207" opacity="0.5" />
              {/* grade circle */}
              <circle cx={x + 42} cy={135} r="11" fill={gr.bar} />
              <text x={x + 42} y={139} textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">{gr.g}</text>
              <text x={x + 42} y={158} textAnchor="middle" fontSize="7.5" fill="#374151">{gr.ratio}</text>
              {/* verdict chip */}
              <rect x={x + 12} y={168} width={62} height={28} rx="6" fill={gr.vFill} />
              <text x={x + 43} y={185} textAnchor="middle" fontSize="7.5" fontWeight="bold" fill={gr.vText}>{gr.verdict}</text>
            </g>
          )
        })}
      </svg>
    </DiagramShell>
  )
}

// ─── 6. Visual Field Defect Patterns ──────────────────────────────────────────

export function FieldDefectsDiagram() {
  // helper renders a field circle; `dark` is an array of overlay elements
  return (
    <DiagramShell caption="Match the field to the disease: central = macula/AMD · arcuate = glaucoma · tunnel = RP · bitemporal = chiasm · homonymous = optic tract.">
      <svg viewBox="0 0 460 250" className="w-full">
        <rect width="460" height="250" fill="#f9fafb" />
        <text x="230" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Common Visual Field Defects</text>

        {/* Central scotoma */}
        <g>
          <circle cx="70" cy="70" r="34" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
          <circle cx="70" cy="70" r="11" fill="#374151" />
          <text x="70" y="120" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#111827">Central scotoma</text>
          <text x="70" y="131" textAnchor="middle" fontSize="7" fill="#6b7280">macular disease / AMD</text>
        </g>
        {/* Arcuate */}
        <g>
          <circle cx="185" cy="70" r="34" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
          <path d="M 185 39 A 31 31 0 0 1 214 78 A 15 15 0 0 0 185 55 Z" fill="#374151" opacity="0.75" />
          <text x="185" y="120" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#111827">Arcuate scotoma</text>
          <text x="185" y="131" textAnchor="middle" fontSize="7" fill="#6b7280">glaucoma</text>
        </g>
        {/* Tunnel */}
        <g>
          <circle cx="300" cy="70" r="34" fill="#374151" opacity="0.8" />
          <circle cx="300" cy="70" r="10" fill="white" />
          <text x="300" y="120" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#111827">Tunnel vision</text>
          <text x="300" y="131" textAnchor="middle" fontSize="7" fill="#6b7280">retinitis pigmentosa</text>
        </g>

        {/* Bitemporal hemianopia (pair) */}
        <g>
          <text x="115" y="165" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#111827">Bitemporal hemianopia — chiasm</text>
          <circle cx="70" cy="200" r="26" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
          {/* OD: temporal = left (nasal toward center-right) → shade LEFT half */}
          <path d="M 70 174 A 26 26 0 0 0 70 226 Z" fill="#374151" opacity="0.7" />
          <text x="70" y="240" textAnchor="middle" fontSize="6.5" fill="#6b7280">OD</text>
          <circle cx="160" cy="200" r="26" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
          {/* OS: temporal = right → shade RIGHT half */}
          <path d="M 160 174 A 26 26 0 0 1 160 226 Z" fill="#374151" opacity="0.7" />
          <text x="160" y="240" textAnchor="middle" fontSize="6.5" fill="#6b7280">OS</text>
        </g>

        {/* Homonymous hemianopia (pair) */}
        <g>
          <text x="345" y="165" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#111827">Homonymous hemianopia — tract</text>
          <circle cx="300" cy="200" r="26" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
          <path d="M 300 174 A 26 26 0 0 1 300 226 Z" fill="#374151" opacity="0.7" />
          <text x="300" y="240" textAnchor="middle" fontSize="6.5" fill="#6b7280">OD</text>
          <circle cx="390" cy="200" r="26" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
          <path d="M 390 174 A 26 26 0 0 1 390 226 Z" fill="#374151" opacity="0.7" />
          <text x="390" y="240" textAnchor="middle" fontSize="6.5" fill="#6b7280">OS</text>
        </g>
      </svg>
    </DiagramShell>
  )
}

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'pec-retinoscopy-motion': RetinoscopyMotionDiagram,
  'pec-duochrome': DuochromeDiagram,
  'pec-hirschberg': HirschbergDiagram,
  'pec-cover-test': CoverTestDiagram,
  'pec-van-herick': VanHerickDiagram,
  'pec-field-defects': FieldDefectsDiagram,
}
