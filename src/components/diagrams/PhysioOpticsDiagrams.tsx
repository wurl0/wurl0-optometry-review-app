/* SVG diagrams for Physiologic Optics notes — all inline, no external assets */

// ─── Shared helpers ────────────────────────────────────────────────────────────

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

// ─── 1. Refractive Status ──────────────────────────────────────────────────────

export function RefractiveStatusDiagram() {
  return (
    <DiagramShell caption="Parallel light entering the eye with accommodation fully relaxed">
      <svg viewBox="0 0 540 185" className="w-full">
        <rect width="540" height="185" fill="#f9fafb" />

        {/* ── EMMETROPIA ── center x=90 */}
        <ellipse cx={90} cy={82} rx={55} ry={38} fill="#f0fdfa" stroke="#374151" strokeWidth={1.5} />
        <path d="M 35 65 Q 22 82 35 99" fill="none" stroke="#9ca3af" strokeWidth={1.5} />
        <ellipse cx={73} cy={82} rx={6} ry={16} fill="#dbeafe" stroke="#93c5fd" strokeWidth={1} />
        <line x1={145} y1={55} x2={145} y2={109} stroke="#dc2626" strokeWidth={3} strokeLinecap="round" />
        <line x1={5} y1={63} x2={145} y2={82} stroke="#14b8a6" strokeWidth={1.3} opacity={0.85} />
        <line x1={5} y1={82} x2={145} y2={82} stroke="#14b8a6" strokeWidth={1.6} />
        <line x1={5} y1={101} x2={145} y2={82} stroke="#14b8a6" strokeWidth={1.3} opacity={0.85} />
        <circle cx={145} cy={82} r={5} fill="#16a34a" />
        <text x={90} y={138} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">EMMETROPIA</text>
        <text x={90} y={153} textAnchor="middle" fontSize={9.5} fill="#16a34a" fontWeight="600">Focus ON retina ✓</text>

        {/* ── MYOPIA ── center x=295, elongated eye */}
        <ellipse cx={295} cy={82} rx={66} ry={38} fill="#fff7ed" stroke="#374151" strokeWidth={1.5} />
        <path d="M 229 65 Q 216 82 229 99" fill="none" stroke="#9ca3af" strokeWidth={1.5} />
        <ellipse cx={276} cy={82} rx={6} ry={16} fill="#dbeafe" stroke="#93c5fd" strokeWidth={1} />
        <line x1={361} y1={55} x2={361} y2={109} stroke="#dc2626" strokeWidth={3} strokeLinecap="round" />
        {/* Rays converge IN FRONT at x=332 */}
        <line x1={214} y1={63} x2={332} y2={82} stroke="#14b8a6" strokeWidth={1.3} opacity={0.85} />
        <line x1={214} y1={82} x2={332} y2={82} stroke="#14b8a6" strokeWidth={1.6} />
        <line x1={214} y1={101} x2={332} y2={82} stroke="#14b8a6" strokeWidth={1.3} opacity={0.85} />
        {/* Diverge after focal */}
        <line x1={332} y1={82} x2={361} y2={94} stroke="#14b8a6" strokeWidth={1} opacity={0.35} strokeDasharray="3,2" />
        <line x1={332} y1={82} x2={361} y2={70} stroke="#14b8a6" strokeWidth={1} opacity={0.35} strokeDasharray="3,2" />
        <circle cx={332} cy={82} r={5} fill="#ef4444" />
        <line x1={332} y1={82} x2={361} y2={82} stroke="#ef4444" strokeWidth={1} strokeDasharray="4,3" opacity={0.55} />
        <text x={295} y={138} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">MYOPIA</text>
        <text x={295} y={153} textAnchor="middle" fontSize={9.5} fill="#ef4444" fontWeight="600">Focus IN FRONT of retina</text>

        {/* ── HYPEROPIA ── center x=470, shorter eye */}
        <ellipse cx={470} cy={82} rx={46} ry={38} fill="#eff6ff" stroke="#374151" strokeWidth={1.5} />
        <path d="M 424 65 Q 411 82 424 99" fill="none" stroke="#9ca3af" strokeWidth={1.5} />
        <ellipse cx={454} cy={82} rx={6} ry={16} fill="#dbeafe" stroke="#93c5fd" strokeWidth={1} />
        <line x1={516} y1={55} x2={516} y2={109} stroke="#dc2626" strokeWidth={3} strokeLinecap="round" />
        {/* Rays aim toward focal BEHIND retina at x=533 */}
        {/* At x=516: ray from (404,63)→(533,82): y = 63 + (516-404)/(533-404)*(82-63) ≈ 63+16.5=79.5 */}
        <line x1={404} y1={63} x2={516} y2={79} stroke="#14b8a6" strokeWidth={1.3} opacity={0.85} />
        <line x1={404} y1={82} x2={516} y2={82} stroke="#14b8a6" strokeWidth={1.6} />
        <line x1={404} y1={101} x2={516} y2={85} stroke="#14b8a6" strokeWidth={1.3} opacity={0.85} />
        {/* Dashed continuation → converge at 533 */}
        <line x1={516} y1={79} x2={533} y2={82} stroke="#14b8a6" strokeWidth={1} opacity={0.35} strokeDasharray="3,2" />
        <line x1={516} y1={82} x2={533} y2={82} stroke="#14b8a6" strokeWidth={1} opacity={0.35} strokeDasharray="3,2" />
        <line x1={516} y1={85} x2={533} y2={82} stroke="#14b8a6" strokeWidth={1} opacity={0.35} strokeDasharray="3,2" />
        <circle cx={533} cy={82} r={5} fill="#ef4444" />
        <line x1={516} y1={82} x2={533} y2={82} stroke="#ef4444" strokeWidth={1} strokeDasharray="4,3" opacity={0.55} />
        <text x={470} y={138} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">HYPEROPIA</text>
        <text x={470} y={153} textAnchor="middle" fontSize={9.5} fill="#ef4444" fontWeight="600">Focus BEHIND retina</text>

        {/* Shared legend */}
        <line x1={20} y1={175} x2={34} y2={175} stroke="#14b8a6" strokeWidth={1.5} />
        <text x={37} y={178} fontSize={8.5} fill="#6b7280">light ray</text>
        <circle cx={88} cy={175} r={4} fill="#16a34a" />
        <text x={95} y={178} fontSize={8.5} fill="#6b7280">on retina</text>
        <circle cx={148} cy={175} r={4} fill="#ef4444" />
        <text x={155} y={178} fontSize={8.5} fill="#6b7280">off retina</text>
        <line x1={200} y1={172} x2={200} y2={178} stroke="#dc2626" strokeWidth={2.5} strokeLinecap="round" />
        <text x={206} y={178} fontSize={8.5} fill="#6b7280">retina</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Visual Pathway ─────────────────────────────────────────────────────────

export function VisualPathwayDiagram() {
  const eyeY = 32
  const onY = 95   // optic nerve mid
  const chiY = 148 // chiasm
  const trtY = 205 // optic tract / LGB
  const orY  = 265 // optic radiation
  const cxY  = 318 // cortex

  // x positions
  const Lx = 105, Rx = 335, Mx = 220

  return (
    <DiagramShell caption="Visual pathway — follow fibers from retina to occipital cortex">
      <svg viewBox="0 0 440 360" className="w-full">
        <rect width="440" height="360" fill="#f9fafb" />

        {/* ── Eyes ── */}
        <ellipse cx={Lx} cy={eyeY} rx={38} ry={22} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
        <ellipse cx={Rx} cy={eyeY} rx={38} ry={22} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
        <circle cx={Lx} cy={eyeY} r={8} fill="#1d4ed8" />
        <circle cx={Rx} cy={eyeY} r={8} fill="#1d4ed8" />
        <text x={Lx} y={eyeY + 5} textAnchor="middle" fontSize={8} fill="white" fontWeight="bold">L</text>
        <text x={Rx} y={eyeY + 5} textAnchor="middle" fontSize={8} fill="white" fontWeight="bold">R</text>
        <text x={Lx} y={eyeY - 28} textAnchor="middle" fontSize={9} fill="#374151" fontWeight="bold">Left Eye</text>
        <text x={Rx} y={eyeY - 28} textAnchor="middle" fontSize={9} fill="#374151" fontWeight="bold">Right Eye</text>

        {/* ── Optic Nerves ── */}
        <line x1={Lx} y1={eyeY + 22} x2={Lx} y2={chiY - 12} stroke="#6b7280" strokeWidth={2} />
        <line x1={Rx} y1={eyeY + 22} x2={Rx} y2={chiY - 12} stroke="#6b7280" strokeWidth={2} />
        <text x={Lx - 55} y={onY} fontSize={9} fill="#374151" fontWeight="600">Optic</text>
        <text x={Lx - 55} y={onY + 11} fontSize={9} fill="#374151" fontWeight="600">Nerve</text>
        <line x1={Lx - 4} y1={onY} x2={Lx - 2} y2={onY} stroke="#9ca3af" strokeWidth={1} />

        {/* ── Optic Chiasm ── */}
        <rect x={Mx - 55} y={chiY - 14} width={110} height={28} rx={6} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
        <text x={Mx} y={chiY + 1} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#92400e">Optic Chiasm</text>
        <text x={Mx} y={chiY + 13} textAnchor="middle" fontSize={8} fill="#92400e">nasal fibers cross here</text>

        {/* Crossing lines inside chiasm (stylized X) */}
        <line x1={Lx} y1={chiY - 12} x2={Rx} y2={chiY + 14} stroke="#3b82f6" strokeWidth={1.2} opacity={0.5} />
        <line x1={Rx} y1={chiY - 12} x2={Lx} y2={chiY + 14} stroke="#3b82f6" strokeWidth={1.2} opacity={0.5} />

        {/* ── Optic Tracts → LGBs ── */}
        <line x1={Lx} y1={chiY + 14} x2={Lx} y2={trtY - 12} stroke="#6b7280" strokeWidth={2} />
        <line x1={Rx} y1={chiY + 14} x2={Rx} y2={trtY - 12} stroke="#6b7280" strokeWidth={2} />

        <rect x={Lx - 32} y={trtY - 12} width={64} height={22} rx={5} fill="#e0e7ff" stroke="#6366f1" strokeWidth={1.2} />
        <rect x={Rx - 32} y={trtY - 12} width={64} height={22} rx={5} fill="#e0e7ff" stroke="#6366f1" strokeWidth={1.2} />
        <text x={Lx} y={trtY + 3} textAnchor="middle" fontSize={8.5} fontWeight="bold" fill="#3730a3">L. LGB</text>
        <text x={Rx} y={trtY + 3} textAnchor="middle" fontSize={8.5} fontWeight="bold" fill="#3730a3">R. LGB</text>
        <text x={Lx} y={trtY + 14} textAnchor="middle" fontSize={7.5} fill="#4338ca">relay station</text>
        <text x={Rx} y={trtY + 14} textAnchor="middle" fontSize={7.5} fill="#4338ca">relay station</text>

        {/* ── Optic Radiations ── */}
        <line x1={Lx} y1={trtY + 10} x2={Mx - 28} y2={orY} stroke="#6b7280" strokeWidth={2} />
        <line x1={Rx} y1={trtY + 10} x2={Mx + 28} y2={orY} stroke="#6b7280" strokeWidth={2} />
        <text x={Lx - 58} y={(trtY + orY) / 2 + 4} fontSize={9} fill="#374151" fontWeight="600">Optic</text>
        <text x={Lx - 58} y={(trtY + orY) / 2 + 15} fontSize={9} fill="#374151" fontWeight="600">Radiation</text>

        {/* ── Visual Cortex ── */}
        <rect x={Mx - 58} y={orY - 2} width={116} height={26} rx={6} fill="#d1fae5" stroke="#059669" strokeWidth={1.5} />
        <text x={Mx} y={orY + 11} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#065f46">Visual Cortex</text>
        <text x={Mx} y={orY + 22} textAnchor="middle" fontSize={7.5} fill="#065f46">Area Striata / Broadman #17</text>

        {/* ── Field defect labels (right side) ── */}
        <line x1={Rx + 38} y1={onY - 5} x2={390} y2={onY - 5} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3,2" />
        <text x={393} y={onY - 1} fontSize={8.5} fill="#ef4444" fontWeight="600">Monocular</text>
        <text x={393} y={onY + 10} fontSize={8.5} fill="#ef4444">blindness</text>

        <line x1={Mx + 55} y1={chiY} x2={390} y2={chiY} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3,2" />
        <text x={393} y={chiY - 4} fontSize={8.5} fill="#d97706" fontWeight="600">Bitemporal</text>
        <text x={393} y={chiY + 7} fontSize={8.5} fill="#d97706">hemianopsia</text>

        <line x1={Rx + 32} y1={trtY - 1} x2={390} y2={trtY - 1} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3,2" />
        <text x={393} y={trtY - 6} fontSize={8.5} fill="#7c3aed" fontWeight="600">Incongruous</text>
        <text x={393} y={trtY + 5} fontSize={8.5} fill="#7c3aed">homonymous</text>

        <line x1={Mx + 58} y1={orY + 11} x2={390} y2={orY + 11} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3,2" />
        <text x={393} y={orY + 6} fontSize={8.5} fill="#059669" fontWeight="600">Congruous</text>
        <text x={393} y={orY + 17} fontSize={8.5} fill="#059669">homonymous</text>

        {/* ── Monocular vs binocular label ── */}
        <line x1={8} y1={onY + 20} x2={8} y2={cxY} stroke="#e5e7eb" strokeWidth={1} />
        <line x1={5} y1={onY + 20} x2={11} y2={onY + 20} stroke="#e5e7eb" strokeWidth={1} />
        <line x1={5} y1={cxY} x2={11} y2={cxY} stroke="#e5e7eb" strokeWidth={1} />

        {/* Optic nerve label */}
        <text x={Rx + 38} y={onY - 15} fontSize={8} fill="#9ca3af" fontStyle="italic">Lesion level</text>

        {/* Key note */}
        <rect x={4} y={330} width={432} height={26} rx={4} fill="#f0fdf4" />
        <text x={220} y={343} textAnchor="middle" fontSize={8.5} fill="#374151">
          <tspan fontWeight="bold">Rule: </tspan>
          <tspan>Retina/optic nerve = monocular · Chiasm to Area 17 = binocular field defect</tspan>
        </text>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Astigmatism Meridian (WTR vs ATR) ─────────────────────────────────────

function ClockFace({ cx, cy, r, powerAngleDeg, label, sublabel, color }: {
  cx: number; cy: number; r: number; powerAngleDeg: number
  label: string; sublabel: string; color: string
}) {
    const rad = (powerAngleDeg - 90) * Math.PI / 180
    const px = Math.cos(rad) * r
    const py = Math.sin(rad) * r
    const perpRad = rad + Math.PI / 2
    const ax = Math.cos(perpRad) * r
    const ay = Math.sin(perpRad) * r

    return (
      <g>
        {/* Clock face */}
        <circle cx={cx} cy={cy} r={r} fill="white" stroke="#d1d5db" strokeWidth={1.5} />
        {/* Hour ticks */}
        {[0,30,60,90,120,150].map(a => {
          const ra = (a - 90) * Math.PI / 180
          const x1 = cx + Math.cos(ra) * (r - 5)
          const y1 = cy + Math.sin(ra) * (r - 5)
          const x2 = cx + Math.cos(ra) * r
          const y2 = cy + Math.sin(ra) * r
          const xOpp = cx - Math.cos(ra) * (r - 5)
          const yOpp = cy - Math.sin(ra) * (r - 5)
          const x2Opp = cx - Math.cos(ra) * r
          const y2Opp = cy - Math.sin(ra) * r
          return (
            <g key={a}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9ca3af" strokeWidth={1} />
              <line x1={xOpp} y1={yOpp} x2={x2Opp} y2={y2Opp} stroke="#9ca3af" strokeWidth={1} />
            </g>
          )
        })}
        {/* Clock numbers */}
        <text x={cx} y={cy - r - 7} textAnchor="middle" fontSize={9} fill="#6b7280">90°</text>
        <text x={cx + r + 7} y={cy + 4} textAnchor="start" fontSize={9} fill="#6b7280">0°</text>
        <text x={cx} y={cy + r + 14} textAnchor="middle" fontSize={9} fill="#6b7280">90°</text>
        <text x={cx - r - 7} y={cy + 4} textAnchor="end" fontSize={9} fill="#6b7280">180°</text>
        {/* Axis meridian (perpendicular, dashed) */}
        <line x1={cx - ax} y1={cy - ay} x2={cx + ax} y2={cy + ay} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4,3" />
        {/* Power meridian (bold, colored) */}
        <line x1={cx - px} y1={cy - py} x2={cx + px} y2={cy + py} stroke={color} strokeWidth={3} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={3} fill={color} />
        {/* Labels */}
        <text x={cx} y={cy + r + 30} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">{label}</text>
        <text x={cx} y={cy + r + 44} textAnchor="middle" fontSize={9} fill="#6b7280">{sublabel}</text>
      </g>
    )
}

export function AstigmatismMeridianDiagram() {
  return (
    <DiagramShell caption="Bold line = power meridian (steepest curvature). Dashed = axis meridian (flattest).">
      <svg viewBox="0 0 440 230" className="w-full">
        <rect width="440" height="230" fill="#f9fafb" />

        <ClockFace
          cx={110} cy={100} r={72}
          powerAngleDeg={90}
          label="With-the-Rule (WTR)"
          sublabel="Power: vertical (60–120°)"
          color="#14b8a6"
        />
        <ClockFace
          cx={330} cy={100} r={72}
          powerAngleDeg={0}
          label="Against-the-Rule (ATR)"
          sublabel="Power: horizontal (0–30°, 150–180°)"
          color="#8b5cf6"
        />

        {/* Divider */}
        <line x1={220} y1={20} x2={220} y2={210} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="4,4" />

        {/* Legend */}
        <line x1={20} y1={215} x2={38} y2={215} stroke="#374151" strokeWidth={2.5} strokeLinecap="round" />
        <text x={42} y={219} fontSize={8.5} fill="#6b7280">Power meridian</text>
        <line x1={145} y1={212} x2={163} y2={218} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4,3" />
        <text x={166} y={219} fontSize={8.5} fill="#6b7280">Axis meridian</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Eye Layers Cross-section ───────────────────────────────────────────────

export function EyeLayersDiagram() {
  const cx = 148, cy = 130 // eye center

  return (
    <DiagramShell caption="Cross-section of the eyeball showing the three concentric coats">
      <svg viewBox="0 0 440 280" className="w-full">
        <rect width="440" height="280" fill="#f9fafb" />

        {/* ── Eye wall layers (concentric ellipses) ── */}
        {/* Sclera + cornea — outermost */}
        <ellipse cx={cx} cy={cy} rx={115} ry={100} fill="#f3f4f6" stroke="#6b7280" strokeWidth={2} />
        {/* Uvea — middle */}
        <ellipse cx={cx} cy={cy} rx={99} ry={84} fill="#4b5563" stroke="none" />
        {/* Retina — inner */}
        <ellipse cx={cx} cy={cy} rx={83} ry={68} fill="#fef3c7" stroke="none" />
        {/* Vitreous humor */}
        <ellipse cx={cx} cy={cy} rx={67} ry={52} fill="#dbeafe" stroke="none" />

        {/* Cornea (front 1/6 — transparent/clear) */}
        <path d={`M ${cx - 28} ${cy - 100} A 115 100 0 0 1 ${cx + 28} ${cy - 100}`}
          fill="none" stroke="#38bdf8" strokeWidth={4} strokeLinecap="round" />
        <ellipse cx={cx} cy={cy - 85} rx={28} ry={18} fill="#e0f2fe" stroke="#38bdf8" strokeWidth={1.5} />
        <text x={cx} y={cy - 84} textAnchor="middle" fontSize={7.5} fill="#0369a1" fontWeight="bold">CORNEA</text>

        {/* Pupil / iris */}
        <ellipse cx={cx} cy={cy - 60} rx={22} ry={8} fill="#1f2937" stroke="none" />
        <ellipse cx={cx} cy={cy - 60} rx={10} ry={5} fill="#111827" />
        <text x={cx} y={cy - 55} textAnchor="middle" fontSize={7} fill="#f9fafb">iris / pupil</text>

        {/* Lens */}
        <ellipse cx={cx} cy={cy - 30} rx={16} ry={26} fill="#bfdbfe" stroke="#93c5fd" strokeWidth={1.2} />
        <text x={cx} y={cy - 29} textAnchor="middle" fontSize={7} fill="#1e40af">LENS</text>

        {/* Fovea dot */}
        <circle cx={cx + 65} cy={cy} r={4} fill="#dc2626" />
        <text x={cx + 72} y={cy + 3} fontSize={7.5} fill="#dc2626">fovea</text>

        {/* Optic disc */}
        <circle cx={cx + 65} cy={cy + 28} r={5} fill="#f59e0b" />
        <text x={cx + 73} y={cy + 31} fontSize={7} fill="#92400e">optic disc</text>

        {/* ── Labels (right side) ── */}
        {/* Sclera */}
        <line x1={cx + 99} y1={cy - 42} x2={280} y2={cy - 65} stroke="#6b7280" strokeWidth={0.8} strokeDasharray="3,2" />
        <rect x={280} y={cy - 90} width={148} height={34} rx={4} fill="#f3f4f6" stroke="#d1d5db" strokeWidth={1} />
        <text x={288} y={cy - 74} fontSize={9} fontWeight="bold" fill="#374151">SCLERA</text>
        <text x={288} y={cy - 63} fontSize={8} fill="#6b7280">Fibrous coat (outermost)</text>
        <text x={288} y={cy - 54} fontSize={8} fill="#6b7280">5/6 of eyeball</text>

        {/* Uvea / Choroid */}
        <line x1={cx + 83} y1={cy + 10} x2={280} y2={cy - 8} stroke="#4b5563" strokeWidth={0.8} strokeDasharray="3,2" />
        <rect x={280} y={cy - 32} width={148} height={34} rx={4} fill="#e5e7eb" stroke="#d1d5db" strokeWidth={1} />
        <text x={288} y={cy - 16} fontSize={9} fontWeight="bold" fill="#374151">UVEA (Choroid)</text>
        <text x={288} y={cy - 5} fontSize={8} fill="#6b7280">Vascular coat (middle)</text>
        <text x={288} y={cy + 4} fontSize={8} fill="#6b7280">Nourishes retina, dark chamber</text>

        {/* Retina */}
        <line x1={cx + 67} y1={cy + 30} x2={280} y2={cy + 32} stroke="#b45309" strokeWidth={0.8} strokeDasharray="3,2" />
        <rect x={280} y={cy + 16} width={148} height={34} rx={4} fill="#fef3c7" stroke="#d1d5db" strokeWidth={1} />
        <text x={288} y={cy + 32} fontSize={9} fontWeight="bold" fill="#374151">RETINA</text>
        <text x={288} y={cy + 43} fontSize={8} fill="#6b7280">Nervous coat (innermost)</text>
        <text x={288} y={cy + 52} fontSize={8} fill="#6b7280">Rods (scotopic) · Cones (photopic)</text>

        {/* Vitreous */}
        <line x1={cx} y1={cy + 45} x2={280} y2={cy + 74} stroke="#60a5fa" strokeWidth={0.8} strokeDasharray="3,2" />
        <rect x={280} y={cy + 60} width={148} height={22} rx={4} fill="#dbeafe" stroke="#d1d5db" strokeWidth={1} />
        <text x={288} y={cy + 74} fontSize={9} fontWeight="bold" fill="#374151">VITREOUS HUMOR</text>
        <text x={288} y={cy + 83} fontSize={8} fill="#6b7280">Index 1.336 · fills posterior chamber</text>

        {/* Axial length callout */}
        <line x1={cx - 115} y1={cy + 108} x2={cx + 115} y2={cy + 108} stroke="#9ca3af" strokeWidth={1} markerEnd="url(#arrow)" />
        <line x1={cx - 115} y1={cy + 103} x2={cx - 115} y2={cy + 113} stroke="#9ca3af" strokeWidth={1} />
        <line x1={cx + 115} y1={cy + 103} x2={cx + 115} y2={cy + 113} stroke="#9ca3af" strokeWidth={1} />
        <text x={cx} y={cy + 123} textAnchor="middle" fontSize={8.5} fill="#374151" fontWeight="600">Axial length ≈ 24 mm (A-P)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 5. Accommodation Mechanism ────────────────────────────────────────────────

function LensState({ x, lensRy, label, sublabel, color }: {
  x: number; lensRy: number; label: string; sublabel: string; color: string
}) {
  const cy = 90
  return (
    <g>
      <ellipse cx={x} cy={cy} rx={62} ry={52} fill="none" stroke="#9ca3af" strokeWidth={1} strokeDasharray="4,3" />
      {[-35, -20, 20, 35].map(dy => (
        <line key={dy} x1={x + (dy > 0 ? 14 : -14)} y1={cy + dy} x2={x + (dy > 0 ? 60 : -60)} y2={cy + dy} stroke="#9ca3af" strokeWidth={0.8} strokeDasharray="2,2" />
      ))}
      <ellipse cx={x} cy={cy} rx={14} ry={lensRy} fill="#bfdbfe" stroke={color} strokeWidth={2} />
      <text x={x} y={cy + 70} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#111827">{label}</text>
      <text x={x} y={cy + 83} textAnchor="middle" fontSize={8.5} fill="#6b7280">{sublabel}</text>
      <text x={x} y={cy - 62} textAnchor="middle" fontSize={8} fill="#6b7280">ciliary body</text>
    </g>
  )
}

export function AccommodationDiagram() {
  return (
    <DiagramShell caption="Zonular fibers relax when ciliary muscle contracts — lens rounds up for near vision">
      <svg viewBox="0 0 400 180" className="w-full">
        <rect width="400" height="180" fill="#f9fafb" />

        <LensState x={100} lensRy={18} label="RELAXED" sublabel="flat lens · far vision" color="#6b7280" />
        <LensState x={300} lensRy={30} label="ACCOMMODATED" sublabel="round lens · near vision" color="#14b8a6" />

        {/* Arrows showing process */}
        <text x={200} y={55} textAnchor="middle" fontSize={8.5} fill="#374151">ciliary muscle contracts</text>
        <text x={200} y={67} textAnchor="middle" fontSize={8.5} fill="#374151">zonules relax</text>
        <path d="M 162 80 Q 200 95 238 80" fill="none" stroke="#14b8a6" strokeWidth={1.5} markerEnd="url(#tealArrow)" />

        <text x={200} y={115} textAnchor="middle" fontSize={8.5} fill="#9ca3af">ciliary muscle relaxes</text>
        <text x={200} y={127} textAnchor="middle" fontSize={8.5} fill="#9ca3af">zonules tighten</text>
        <path d="M 238 110 Q 200 125 162 110" fill="none" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4,3" />

        <defs>
          <marker id="tealArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill="#14b8a6" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ──────────────────────────────────────────────────────────────────

const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'refractive-status':         RefractiveStatusDiagram,
  'visual-pathway':            VisualPathwayDiagram,
  'astigmatism-meridian':      AstigmatismMeridianDiagram,
  'eye-layers':                EyeLayersDiagram,
  'accommodation-mechanism':   AccommodationDiagram,
}

export function DiagramRenderer({ id, caption }: { id: string; caption?: string }) {
  const Component = DIAGRAM_REGISTRY[id]
  if (!Component) return null
  return (
    <div>
      <Component />
      {caption && <p className="text-center text-xs text-gray-400 mt-1 italic">{caption}</p>}
    </div>
  )
}
