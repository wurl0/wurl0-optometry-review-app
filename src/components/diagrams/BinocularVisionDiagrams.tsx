/* SVG diagrams for Binocular Vision notes — all inline, no external assets */

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

// ─── 1. Binocular vs Monocular Visual Fields ───────────────────────────────────
// cx=220, cy=205, r=185
// 60° boundaries: x≈60,380  y≈113
// 90° boundaries: x=35,405  y=205

export function VisualFieldsDiagram() {
  return (
    <DiagramShell caption="Total field: 180° | Common binocular (teal): 120° | Temporal crescents (purple): 30° each side">
      <svg viewBox="0 0 440 232" className="w-full">
        <rect width="440" height="232" fill="#f9fafb" />

        {/* Temporal crescents — monocular only */}
        <path d="M 220 205 L 35 205 A 185 185 0 0 1 60 113 Z" fill="#c7d2fe" opacity="0.75" />
        <path d="M 220 205 L 380 113 A 185 185 0 0 1 405 205 Z" fill="#c7d2fe" opacity="0.75" />

        {/* Common binocular field */}
        <path d="M 220 205 L 60 113 A 185 185 0 0 1 380 113 Z" fill="#99f6e4" opacity="0.6" />

        {/* 90° boundary lines */}
        <line x1="220" y1="205" x2="35" y2="205" stroke="#818cf8" strokeWidth="1" strokeDasharray="4,3" opacity="0.8" />
        <line x1="220" y1="205" x2="405" y2="205" stroke="#818cf8" strokeWidth="1" strokeDasharray="4,3" opacity="0.8" />

        {/* 60° boundary lines */}
        <line x1="220" y1="205" x2="60" y2="113" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="220" y1="205" x2="380" y2="113" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* Outer arc */}
        <path d="M 35 205 A 185 185 0 0 1 405 205" fill="none" stroke="#6b7280" strokeWidth="2" />

        {/* Forward gaze axis */}
        <line x1="220" y1="205" x2="220" y2="25" stroke="#374151" strokeWidth="1" strokeDasharray="3,3" opacity="0.25" />

        {/* Eyes */}
        <ellipse cx="208" cy="205" rx="10" ry="7" fill="#1e40af" />
        <ellipse cx="232" cy="205" rx="10" ry="7" fill="#1e40af" />
        <text x="208" y="208" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="bold">L</text>
        <text x="232" y="208" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="bold">R</text>

        {/* Binocular zone label */}
        <text x="220" y="175" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f766e">Common Binocular Field</text>
        <text x="220" y="190" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f766e">120°</text>

        {/* Crescent labels */}
        <text x="42" y="168" textAnchor="middle" fontSize="9" fill="#4338ca" fontWeight="600">30°</text>
        <text x="42" y="180" textAnchor="middle" fontSize="8" fill="#4338ca">Temporal</text>
        <text x="42" y="190" textAnchor="middle" fontSize="8" fill="#4338ca">Crescent</text>

        <text x="398" y="168" textAnchor="middle" fontSize="9" fill="#4338ca" fontWeight="600">30°</text>
        <text x="398" y="180" textAnchor="middle" fontSize="8" fill="#4338ca">Temporal</text>
        <text x="398" y="190" textAnchor="middle" fontSize="8" fill="#4338ca">Crescent</text>

        {/* Forward label */}
        <text x="224" y="52" fontSize="8" fill="#6b7280">Forward gaze ↑</text>

        {/* Title */}
        <text x="220" y="14" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Total Binocular Visual Field: 180°</text>

        {/* Legend */}
        <rect x="112" y="218" width="10" height="8" fill="#99f6e4" stroke="#0d9488" strokeWidth="1" />
        <text x="126" y="226" fontSize="8" fill="#374151">Binocular (120°)</text>
        <rect x="228" y="218" width="10" height="8" fill="#c7d2fe" stroke="#818cf8" strokeWidth="1" />
        <text x="242" y="226" fontSize="8" fill="#374151">Monocular only (30° × 2)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Nine Positions of Gaze ─────────────────────────────────────────────────

const GAZE_POSITIONS = [
  { label: 'Levosupra',   muscles: 'L SR + R IO',  dx: -12, dy: -11, col: 0, row: 0 },
  { label: 'Supra',       muscles: 'Both SR',       dx:   0, dy: -15, col: 1, row: 0 },
  { label: 'Dextrosupra', muscles: 'R SR + L IO',   dx:  12, dy: -11, col: 2, row: 0 },
  { label: 'Levo',        muscles: 'L LR + R MR',   dx: -17, dy:   0, col: 0, row: 1 },
  { label: 'Primary',     muscles: '—',              dx:   0, dy:   0, col: 1, row: 1 },
  { label: 'Dextro',      muscles: 'R LR + L MR',   dx:  17, dy:   0, col: 2, row: 1 },
  { label: 'Levoinfra',   muscles: 'L IR + R SO',   dx: -12, dy:  11, col: 0, row: 2 },
  { label: 'Infra',       muscles: 'Both IR',        dx:   0, dy:  15, col: 1, row: 2 },
  { label: 'Dextroinfra', muscles: 'R IR + L SO',   dx:  12, dy:  11, col: 2, row: 2 },
]

const GAZE_COL_X = [74, 220, 366]
const GAZE_ROW_Y = [52, 147, 242]

export function NinePositionsDiagram() {
  return (
    <DiagramShell caption="Each position isolates specific yoke muscle pairs. Mnemonic: SO4, LR6, all others CN III.">
      <svg viewBox="0 0 440 300" className="w-full">
        <rect width="440" height="300" fill="#f9fafb" />

        {/* Grid lines */}
        <line x1="148" y1="8"  x2="148" y2="292" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="294" y1="8"  x2="294" y2="292" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="8"   y1="100" x2="432" y2="100" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="8"   y1="196" x2="432" y2="196" stroke="#e5e7eb" strokeWidth="1" />

        {/* Direction labels */}
        <text x="74"  y="296" textAnchor="middle" fontSize="8" fill="#9ca3af">← Patient&apos;s Left</text>
        <text x="366" y="296" textAnchor="middle" fontSize="8" fill="#9ca3af">Patient&apos;s Right →</text>

        {GAZE_POSITIONS.map((pos) => {
          const cx = GAZE_COL_X[pos.col]
          const cy = GAZE_ROW_Y[pos.row]
          const ey = cy - 12
          const isPrimary = pos.label === 'Primary'
          return (
            <g key={pos.label}>
              <ellipse cx={cx} cy={ey} rx={29} ry={20} fill={isPrimary ? '#f0fdf4' : 'white'} stroke="#d1d5db" strokeWidth="1.5" />
              <circle cx={cx + pos.dx} cy={ey + pos.dy} r={9} fill={isPrimary ? '#bbf7d0' : '#bfdbfe'} stroke={isPrimary ? '#16a34a' : '#93c5fd'} strokeWidth="1" />
              <circle cx={cx + pos.dx} cy={ey + pos.dy} r={4.5} fill={isPrimary ? '#15803d' : '#1e3a5f'} />
              <text x={cx} cy={cy} y={cy + 12} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#374151">{pos.label}</text>
              <text x={cx} y={cy + 23} textAnchor="middle" fontSize="8" fill="#6b7280">{pos.muscles}</text>
            </g>
          )
        })}
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Horopter & Panum's Fusional Area ──────────────────────────────────────

export function HoropterDiagram() {
  return (
    <DiagramShell caption="Top-down view. Objects on the horopter → single vision. Inside Panum's → fusion. Outside → physiological diplopia.">
      <svg viewBox="0 0 440 310" className="w-full">
        <rect width="440" height="310" fill="#f9fafb" />

        {/* Panum's zone — shaded band around horopter */}
        <path d="M 105 265 C 105 145 335 145 335 265 L 313 258 C 313 162 127 162 127 258 Z" fill="#bbf7d0" opacity="0.55" />

        {/* Horopter curve (Vieth-Müller circle approximation) */}
        <path d="M 120 261 C 120 155 320 155 320 261" fill="none" stroke="#16a34a" strokeWidth="2.5" />

        {/* Visual lines from eyes to fixation */}
        <line x1="120" y1="261" x2="220" y2="65" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.7" />
        <line x1="320" y1="261" x2="220" y2="65" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.7" />

        {/* Eyes */}
        <circle cx="120" cy="261" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="120" cy="261" r="8"  fill="#1e40af" />
        <text x="120" y="265" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">L</text>
        <circle cx="320" cy="261" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="320" cy="261" r="8"  fill="#1e40af" />
        <text x="320" y="265" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">R</text>
        <text x="120" y="288" textAnchor="middle" fontSize="8.5" fill="#374151">Left Eye</text>
        <text x="320" y="288" textAnchor="middle" fontSize="8.5" fill="#374151">Right Eye</text>

        {/* Fixation point */}
        <circle cx="220" cy="65" r="7" fill="#dc2626" />
        <text x="220" y="56" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">Fixation Point</text>

        {/* Object ON horopter */}
        <circle cx="168" cy="180" r="5" fill="#16a34a" />
        <text x="175" y="172" fontSize="8" fill="#065f46">On horopter</text>
        <text x="175" y="182" fontSize="8" fill="#065f46">→ single vision</text>

        {/* Object INSIDE Panum's */}
        <circle cx="148" cy="222" r="5" fill="#059669" opacity="0.9" />
        <text x="155" y="215" fontSize="8" fill="#059669">Inside Panum&apos;s</text>
        <text x="155" y="225" fontSize="8" fill="#059669">→ fusion</text>

        {/* Objects OUTSIDE Panum's — diplopia */}
        <circle cx="70"  cy="230" r="5" fill="#ef4444" />
        <text x="6"   y="224" fontSize="8" fill="#dc2626">Outside →</text>
        <text x="6"   y="234" fontSize="8" fill="#dc2626">diplopia</text>

        <circle cx="364" cy="230" r="5" fill="#ef4444" />
        <text x="372" y="224" fontSize="8" fill="#dc2626">← Outside</text>
        <text x="372" y="234" fontSize="8" fill="#dc2626">diplopia</text>

        {/* Horopter label */}
        <text x="220" y="143" textAnchor="middle" fontSize="9"  fontWeight="bold" fill="#16a34a">HOROPTER</text>
        <text x="220" y="154" textAnchor="middle" fontSize="8"  fill="#16a34a">(Vieth-Müller circle)</text>

        {/* Panum's label */}
        <text x="220" y="195" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#059669">Panum&apos;s Fusional Area</text>
        <text x="220" y="207" textAnchor="middle" fontSize="8"  fill="#059669">6–10′ fovea · 30–40′ at 12° periphery</text>

        {/* Baseline */}
        <line x1="100" y1="298" x2="340" y2="298" stroke="#9ca3af" strokeWidth="1" />
        <text x="220" y="308" textAnchor="middle" fontSize="8" fill="#9ca3af">Baseline (interocular distance)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Worth's 3 Grades of Binocular Vision ──────────────────────────────────

export function WorthGradesDiagram() {
  return (
    <DiagramShell caption="Grades progress from simultaneous macular perception → 2D flat fusion → 3D stereopsis (highest).">
      <svg viewBox="0 0 440 215" className="w-full">
        <rect width="440" height="215" fill="#f9fafb" />

        {/* Panel dividers */}
        <line x1="148" y1="5" x2="148" y2="210" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="296" y1="5" x2="296" y2="210" stroke="#e5e7eb" strokeWidth="1" />

        {/* ── GRADE 1: SMP ── */}
        <rect x="4" y="5" width="140" height="30" rx="4" fill="#dbeafe" />
        <text x="74" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">Grade 1 — SMP</text>
        <text x="74" y="29" textAnchor="middle" fontSize="7.5" fill="#3b82f6">Simultaneous Macular Perception</text>

        {/* RE / LE eye indicators */}
        <rect x="8"  y="44" width="54" height="16" rx="3" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
        <text x="35" y="55" textAnchor="middle" fontSize="8" fill="#92400e">RE: Bird</text>
        <rect x="80" y="44" width="60" height="16" rx="3" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" />
        <text x="110" y="55" textAnchor="middle" fontSize="8" fill="#4338ca">LE: Cage</text>

        <text x="74" y="78" textAnchor="middle" fontSize="13" fill="#374151">+</text>

        {/* Bird (RE) */}
        <ellipse cx="48"  cy="104" rx="14" ry="9" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <path d="M 41 98 Q 48 91 55 98" fill="none" stroke="#ca8a04" strokeWidth="1.5" />
        <circle cx="56" cy="103" r="2.5" fill="#92400e" />

        {/* Cage (LE) */}
        <rect x="62" y="93" width="30" height="24" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <line x1="77" y1="93"  x2="77" y2="117" stroke="#6366f1" strokeWidth="1" />
        <line x1="62" y1="105" x2="92" y2="105" stroke="#6366f1" strokeWidth="1" />

        <text x="74" y="130" textAnchor="middle" fontSize="13" fill="#374151">↓</text>

        {/* Combined — bird in cage */}
        <rect x="28" y="138" width="30" height="26" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        <line x1="43" y1="138" x2="43" y2="164" stroke="#6366f1" strokeWidth="1" />
        <line x1="28" y1="151" x2="58" y2="151" stroke="#6366f1" strokeWidth="1" />
        <ellipse cx="55" cy="153" rx="13" ry="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" opacity="0.9" />
        <path d="M 48 148 Q 55 141 62 148" fill="none" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="74" y="178" textAnchor="middle" fontSize="8"   fill="#374151">Bird in cage</text>
        <text x="74" y="189" textAnchor="middle" fontSize="7.5" fill="#6b7280">(two diff. images)</text>

        {/* ── GRADE 2: FLAT FUSION ── */}
        <rect x="152" y="5" width="140" height="30" rx="4" fill="#d1fae5" />
        <text x="222" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">Grade 2 — Flat Fusion</text>
        <text x="222" y="29" textAnchor="middle" fontSize="7.5" fill="#059669">2D single percept</text>

        <rect x="155" y="44" width="52" height="16" rx="3" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
        <text x="181" y="55" textAnchor="middle" fontSize="8" fill="#92400e">RE: circle</text>
        <rect x="212" y="44" width="52" height="16" rx="3" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" />
        <text x="238" y="55" textAnchor="middle" fontSize="8" fill="#4338ca">LE: circle</text>

        {/* Two overlapping circles */}
        <circle cx="196" cy="97" r="25" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="196" y="101" textAnchor="middle" fontSize="8" fill="#92400e">RE</text>
        <circle cx="248" cy="97" r="25" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
        <text x="248" y="101" textAnchor="middle" fontSize="8" fill="#4338ca">LE</text>

        <text x="222" y="135" textAnchor="middle" fontSize="13" fill="#374151">↓</text>

        {/* Fused single image */}
        <ellipse cx="222" cy="168" rx="42" ry="26" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
        <text x="222" y="165" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#065f46">FUSED</text>
        <text x="222" y="176" textAnchor="middle" fontSize="7.5" fill="#065f46">one 2D image</text>
        <text x="222" y="199" textAnchor="middle" fontSize="7.5" fill="#6b7280">(flat — no depth)</text>

        {/* ── GRADE 3: STEREOPSIS ── */}
        <rect x="300" y="5" width="136" height="30" rx="4" fill="#ede9fe" />
        <text x="368" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">Grade 3 — Stereopsis</text>
        <text x="368" y="29" textAnchor="middle" fontSize="7.5" fill="#7c3aed">Highest form of BV</text>

        <rect x="302" y="44" width="52" height="16" rx="3" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
        <text x="328" y="55" textAnchor="middle" fontSize="8" fill="#92400e">RE: offset ▶</text>
        <rect x="358" y="44" width="52" height="16" rx="3" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" />
        <text x="384" y="55" textAnchor="middle" fontSize="8" fill="#4338ca">LE: offset ◀</text>

        {/* Two slightly horizontally offset rectangles → disparity */}
        <rect x="314" y="72" width="44" height="32" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <rect x="326" y="78" width="44" height="32" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" opacity="0.8" />
        <text x="336" y="100" fontSize="8" fill="#6b7280">Retinal</text>
        <text x="336" y="110" fontSize="8" fill="#6b7280">disparity</text>

        <text x="368" y="132" textAnchor="middle" fontSize="13" fill="#374151">↓</text>

        {/* 3D perspective box */}
        <rect x="330" y="140" width="46" height="36" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
        <path d="M 330 140 L 318 130 L 364 130 L 376 140" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <path d="M 376 140 L 376 176 L 364 166 L 364 130" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="353" y="162" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">3D</text>
        <text x="368" y="196" textAnchor="middle" fontSize="7.5" fill="#6b7280">depth perception</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 5. Crossed vs Uncrossed Diplopia ─────────────────────────────────────────

export function DipliopiaTypesDiagram() {
  return (
    <DiagramShell caption="Physiological diplopia: objects outside Panum's area appear double. Closer = crossed. Farther = uncrossed.">
      <svg viewBox="0 0 440 222" className="w-full">
        <rect width="440" height="222" fill="#f9fafb" />

        {/* Panel divider */}
        <line x1="220" y1="8" x2="220" y2="214" stroke="#e5e7eb" strokeWidth="1" />

        {/* ── LEFT PANEL: CROSSED DIPLOPIA ── */}
        <rect x="4" y="5" width="212" height="24" rx="4" fill="#fee2e2" />
        <text x="110" y="15" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#991b1b">Crossed (Proximal) Diplopia</text>
        <text x="110" y="25" textAnchor="middle" fontSize="7.5" fill="#dc2626">Object NEARER than fixation</text>

        {/* L Eye */}
        <ellipse cx="62"  cy="185" rx="25" ry="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <circle  cx="72"  cy="185" r={7} fill="#1e40af" />
        <text x="72" y="188" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">L</text>
        <text x="62" y="205" textAnchor="middle" fontSize="7.5" fill="#374151">L Eye</text>

        {/* R Eye */}
        <ellipse cx="158" cy="185" rx="25" ry="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <circle  cx="148" cy="185" r={7} fill="#1e40af" />
        <text x="148" y="188" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">R</text>
        <text x="158" y="205" textAnchor="middle" fontSize="7.5" fill="#374151">R Eye</text>

        {/* Fixation cross */}
        <text x="110" y="158" textAnchor="middle" fontSize="13" fill="#374151">+</text>
        <text x="110" y="170" textAnchor="middle" fontSize="7.5" fill="#6b7280">fixation</text>

        {/* Near object */}
        <circle cx="110" cy="128" r="6" fill="#f97316" />
        <text x="110" y="118" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#ea580c">Near object</text>

        {/* Lines from near object to eyes */}
        <line x1="110" y1="134" x2="72"  y2="169" stroke="#f97316" strokeWidth="1.2" />
        <line x1="110" y1="134" x2="148" y2="169" stroke="#f97316" strokeWidth="1.2" />

        {/* Perceived (ghost) images — CROSSED */}
        <circle cx="68"  cy="108" r="5" fill="#f97316" opacity="0.35" />
        <text x="30" y="105" fontSize="7.5" fill="#ea580c">R image</text>
        <circle cx="150" cy="108" r="5" fill="#f97316" opacity="0.35" />
        <text x="157" y="105" fontSize="7.5" fill="#ea580c">L image</text>

        {/* Crossing arrow */}
        <path d="M 72 108 L 148 108" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,2" />
        <text x="110" y="86" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#dc2626">← Images CROSS →</text>
        <text x="110" y="97" textAnchor="middle" fontSize="7.5" fill="#dc2626">(R image left · L image right)</text>

        {/* ── RIGHT PANEL: UNCROSSED DIPLOPIA ── */}
        <rect x="224" y="5" width="212" height="24" rx="4" fill="#fef9c3" />
        <text x="330" y="15" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#92400e">Uncrossed (Distal) Diplopia</text>
        <text x="330" y="25" textAnchor="middle" fontSize="7.5" fill="#d97706">Object FARTHER than fixation</text>

        {/* L Eye */}
        <ellipse cx="282" cy="185" rx="25" ry="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <circle  cx="292" cy="185" r={7} fill="#1e40af" />
        <text x="292" y="188" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">L</text>
        <text x="282" y="205" textAnchor="middle" fontSize="7.5" fill="#374151">L Eye</text>

        {/* R Eye */}
        <ellipse cx="378" cy="185" rx="25" ry="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <circle  cx="368" cy="185" r={7} fill="#1e40af" />
        <text x="368" y="188" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">R</text>
        <text x="378" y="205" textAnchor="middle" fontSize="7.5" fill="#374151">R Eye</text>

        {/* Fixation cross */}
        <text x="330" y="158" textAnchor="middle" fontSize="13" fill="#374151">+</text>
        <text x="330" y="170" textAnchor="middle" fontSize="7.5" fill="#6b7280">fixation</text>

        {/* Far object */}
        <circle cx="330" cy="68" r="6" fill="#7c3aed" />
        <text x="330" y="58" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#7c3aed">Far object</text>

        {/* Lines from far object to eyes */}
        <line x1="330" y1="74" x2="292" y2="169" stroke="#7c3aed" strokeWidth="1.2" />
        <line x1="330" y1="74" x2="368" y2="169" stroke="#7c3aed" strokeWidth="1.2" />

        {/* Perceived images — UNCROSSED */}
        <circle cx="285" cy="108" r="5" fill="#7c3aed" opacity="0.35" />
        <text x="228" y="105" fontSize="7.5" fill="#7c3aed">L image</text>
        <circle cx="372" cy="108" r="5" fill="#7c3aed" opacity="0.35" />
        <text x="379" y="105" fontSize="7.5" fill="#7c3aed">R image</text>

        {/* Same-side arrow */}
        <path d="M 285 108 L 372 108" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="3,2" />
        <text x="330" y="86" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#d97706">Images SAME side</text>
        <text x="330" y="97" textAnchor="middle" fontSize="7.5" fill="#d97706">(L image left · R image right)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ──────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'bv-visual-fields':    VisualFieldsDiagram,
  'nine-positions-gaze': NinePositionsDiagram,
  'horopter-panum':      HoropterDiagram,
  'worth-grades':        WorthGradesDiagram,
  'diplopia-types':      DipliopiaTypesDiagram,
}
