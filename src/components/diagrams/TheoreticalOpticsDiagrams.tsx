/* SVG diagrams for Theoretical Optics notes — all inline, no external assets */

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

// ─── 1. Astigmatism Meridians ─────────────────────────────────────────────────

export function AstigmatismMeridiansDiagram() {
  return (
    <DiagramShell caption="WTR: strongest power near vertical (60–120°) | ATR: strongest near horizontal (0–30°, 150–180°) | Oblique: 30–60° or 120–150°">
      <svg viewBox="0 0 520 200" className="w-full">
        <rect width="520" height="200" fill="#f9fafb" />

        {/* ── WTR ── cx=90 */}
        <circle cx={90} cy={100} r={60} fill="none" stroke="#d1d5db" strokeWidth={1} strokeDasharray="3,3" />
        {/* Strongest meridian = vertical (90°) */}
        <line x1={90} y1={30} x2={90} y2={170} stroke="#7c3aed" strokeWidth={4} strokeLinecap="round" />
        {/* Weaker meridian = horizontal (180°) */}
        <line x1={30} y1={100} x2={150} y2={100} stroke="#7c3aed" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="5,3" />
        <text x={90} y={188} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">With-the-Rule</text>
        <text x={90} y={199} textAnchor="middle" fontSize={9} fill="#7c3aed">(WTR / Direct)</text>
        <text x={93} y={65} fontSize={8} fill="#7c3aed">90°</text>
        <text x={93} y={140} fontSize={8} fill="#7c3aed">strongest</text>
        <rect x={5} y={8} width={170} height={14} rx={3} fill="#ede9fe" />
        <text x={90} y={19} textAnchor="middle" fontSize={9} fill="#6d28d9">Power at 60°–120°</text>

        {/* ── ATR ── cx=270 */}
        <circle cx={270} cy={100} r={60} fill="none" stroke="#d1d5db" strokeWidth={1} strokeDasharray="3,3" />
        {/* Strongest meridian = horizontal (0°/180°) */}
        <line x1={210} y1={100} x2={330} y2={100} stroke="#dc2626" strokeWidth={4} strokeLinecap="round" />
        {/* Weaker meridian = vertical */}
        <line x1={270} y1={40} x2={270} y2={160} stroke="#dc2626" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="5,3" />
        <text x={270} y={188} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">Against-the-Rule</text>
        <text x={270} y={199} textAnchor="middle" fontSize={9} fill="#dc2626">(ATR / Inverse)</text>
        <text x={335} y={104} fontSize={8} fill="#dc2626">180°</text>
        <text x={213} y={115} fontSize={8} fill="#dc2626">strongest</text>
        <rect x={185} y={8} width={170} height={14} rx={3} fill="#fee2e2" />
        <text x={270} y={19} textAnchor="middle" fontSize={9} fill="#b91c1c">Power at 0–30°, 150–180°</text>

        {/* ── Oblique ── cx=450 */}
        <circle cx={450} cy={100} r={60} fill="none" stroke="#d1d5db" strokeWidth={1} strokeDasharray="3,3" />
        {/* Strongest meridian ≈ 45° */}
        <line x1={407} y1={57} x2={493} y2={143} stroke="#0891b2" strokeWidth={4} strokeLinecap="round" />
        {/* Weaker meridian ≈ 135° */}
        <line x1={407} y1={143} x2={493} y2={57} stroke="#0891b2" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="5,3" />
        <text x={450} y={188} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#111827">Oblique</text>
        <text x={450} y={199} textAnchor="middle" fontSize={9} fill="#0891b2">(30–60° or 120–150°)</text>
        <rect x={365} y={8} width={170} height={14} rx={3} fill="#cffafe" />
        <text x={450} y={19} textAnchor="middle" fontSize={9} fill="#0e7490">Power at oblique axis</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Astigmatism Focal Types ───────────────────────────────────────────────

export function AstigmatismFocalTypesDiagram() {
  const retX = 420

  return (
    <DiagramShell caption="Position of the two focal lines (F1, F2) relative to the retina determines the type of astigmatism">
      <svg viewBox="0 0 560 280" className="w-full">
        <rect width="560" height="280" fill="#f9fafb" />

        {/* Column headers */}
        <text x={60} y={16} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#374151">Type</text>
        <text x={260} y={16} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#374151">Focal Line Positions</text>
        <text x={450} y={16} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#374151">Correction</text>
        <line x1={0} y1={20} x2={560} y2={20} stroke="#e5e7eb" strokeWidth={1} />

        {/* Row helper */}
        {[
          { y: 45, label: 'Simple\nMyopic', labelColor: '#1d4ed8', f1c: '#ef4444', f2c: '#dc2626', f1x: 280, f2x: 330, retPos: retX, note: '-cyl only' },
          { y: 95, label: 'Compound\nMyopic', labelColor: '#1d4ed8', f1c: '#ef4444', f2c: '#dc2626', f1x: 260, f2x: 320, retPos: retX, note: '-sph -cyl' },
          { y: 145, label: 'Simple\nHyperopic', labelColor: '#16a34a', f1c: '#16a34a', f2c: '#15803d', f1x: retX, f2x: 480, retPos: retX, note: '+cyl only' },
          { y: 195, label: 'Compound\nHyperopic', labelColor: '#16a34a', f1c: '#16a34a', f2c: '#15803d', f1x: 460, f2x: 510, retPos: retX, note: '+sph +cyl' },
          { y: 245, label: 'Mixed', labelColor: '#9333ea', f1c: '#ef4444', f2c: '#16a34a', f1x: 320, f2x: 490, retPos: retX, note: '±sph ±cyl' },
        ].map(({ y, label, labelColor, f1c, f2c, f1x, f2x, note }) => (
          <g key={y}>
            <line x1={0} y1={y + 25} x2={560} y2={y + 25} stroke="#f3f4f6" strokeWidth={1} />
            {/* Label */}
            {label.split('\n').map((l, i) => (
              <text key={i} x={60} y={y + 8 + i * 12} textAnchor="middle" fontSize={9.5} fontWeight="bold" fill={labelColor}>{l}</text>
            ))}
            {/* Retina line */}
            <line x1={retX} y1={y - 8} x2={retX} y2={y + 22} stroke="#dc2626" strokeWidth={3} strokeLinecap="round" />
            <text x={retX + 3} y={y - 10} fontSize={7} fill="#dc2626">R</text>
            {/* Axis line */}
            <line x1={130} y1={y + 8} x2={540} y2={y + 8} stroke="#d1d5db" strokeWidth={1} strokeDasharray="3,2" />
            {/* F1 */}
            <circle cx={f1x} cy={y + 8} r={5} fill={f1c} />
            <text x={f1x} y={y - 1} textAnchor="middle" fontSize={7} fill={f1c} fontWeight="bold">F1</text>
            {/* F2 */}
            <circle cx={f2x} cy={y + 8} r={5} fill={f2c} />
            <text x={f2x} y={y - 1} textAnchor="middle" fontSize={7} fill={f2c} fontWeight="bold">F2</text>
            {/* Correction */}
            <rect x={415} y={y - 2} width={70} height={18} rx={4} fill="#f3f4f6" stroke="#d1d5db" strokeWidth={1} />
            <text x={450} y={y + 11} textAnchor="middle" fontSize={9} fill="#374151" fontWeight="600">{note}</text>
          </g>
        ))}

        {/* Legend */}
        <circle cx={140} cy={272} r={5} fill="#ef4444" />
        <text x={150} y={276} fontSize={8} fill="#374151">= in front of retina</text>
        <circle cx={270} cy={272} r={5} fill="#16a34a" />
        <text x={280} y={276} fontSize={8} fill="#374151">= behind retina</text>
        <line x1={365} y1={272} x2={375} y2={272} stroke="#dc2626" strokeWidth={3} />
        <text x={380} y={276} fontSize={8} fill="#374151">= retina</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Hyperopia Subtypes Tree ───────────────────────────────────────────────

export function HyperopiaSubtypesDiagram() {
  return (
    <DiagramShell caption="Total hyperopia = Manifest + Latent | Manifest = Absolute + Facultative">
      <svg viewBox="0 0 560 230" className="w-full">
        <rect width="560" height="230" fill="#f9fafb" />

        {/* Root */}
        <rect x={205} y={10} width={150} height={30} rx={6} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
        <text x={280} y={30} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#1d4ed8">Total Hyperopia</text>

        {/* Level 1 branches */}
        <line x1={280} y1={40} x2={280} y2={55} stroke="#6b7280" strokeWidth={1.5} />
        <line x1={280} y1={55} x2={140} y2={55} stroke="#6b7280" strokeWidth={1.5} />
        <line x1={280} y1={55} x2={420} y2={55} stroke="#6b7280" strokeWidth={1.5} />
        <line x1={140} y1={55} x2={140} y2={68} stroke="#6b7280" strokeWidth={1.5} />
        <line x1={420} y1={55} x2={420} y2={68} stroke="#6b7280" strokeWidth={1.5} />

        {/* Manifest */}
        <rect x={60} y={68} width={160} height={30} rx={6} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
        <text x={140} y={88} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#92400e">Manifest</text>

        {/* Latent */}
        <rect x={340} y={68} width={160} height={30} rx={6} fill="#f3e8ff" stroke="#9333ea" strokeWidth={1.5} />
        <text x={420} y={85} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#7e22ce">Latent</text>
        <text x={420} y={96} textAnchor="middle" fontSize={8} fill="#9333ea">(needs cycloplegic Rx)</text>

        {/* Latent sub-types */}
        <line x1={420} y1={98} x2={420} y2={115} stroke="#9333ea" strokeWidth={1.5} />
        <line x1={420} y1={115} x2={355} y2={115} stroke="#9333ea" strokeWidth={1.5} />
        <line x1={420} y1={115} x2={485} y2={115} stroke="#9333ea" strokeWidth={1.5} />
        <line x1={355} y1={115} x2={355} y2={128} stroke="#9333ea" strokeWidth={1.5} />
        <line x1={485} y1={115} x2={485} y2={128} stroke="#9333ea" strokeWidth={1.5} />
        <rect x={300} y={128} width={110} height={36} rx={5} fill="#faf5ff" stroke="#d8b4fe" strokeWidth={1} />
        <text x={355} y={144} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#7e22ce">Tonic</text>
        <text x={355} y={156} textAnchor="middle" fontSize={8} fill="#9333ea">Fixed spasm</text>
        <rect x={430} y={128} width={110} height={36} rx={5} fill="#faf5ff" stroke="#d8b4fe" strokeWidth={1} />
        <text x={485} y={144} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#7e22ce">Clonic</text>
        <text x={485} y={156} textAnchor="middle" fontSize={8} fill="#9333ea">Temporary spasm</text>

        {/* Manifest sub-types */}
        <line x1={140} y1={98} x2={140} y2={115} stroke="#ca8a04" strokeWidth={1.5} />
        <line x1={140} y1={115} x2={75} y2={115} stroke="#ca8a04" strokeWidth={1.5} />
        <line x1={140} y1={115} x2={205} y2={115} stroke="#ca8a04" strokeWidth={1.5} />
        <line x1={75} y1={115} x2={75} y2={128} stroke="#ca8a04" strokeWidth={1.5} />
        <line x1={205} y1={115} x2={205} y2={128} stroke="#ca8a04" strokeWidth={1.5} />

        <rect x={20} y={128} width={110} height={36} rx={5} fill="#fffbeb" stroke="#fde68a" strokeWidth={1} />
        <text x={75} y={144} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#92400e">Absolute</text>
        <text x={75} y={156} textAnchor="middle" fontSize={8} fill="#b45309">Cannot overcome</text>

        <rect x={150} y={128} width={110} height={36} rx={5} fill="#fffbeb" stroke="#fde68a" strokeWidth={1} />
        <text x={205} y={144} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#92400e">Facultative</text>
        <text x={205} y={156} textAnchor="middle" fontSize={8} fill="#b45309">Overcomes w/ accomm.</text>

        {/* Sorsby note */}
        <rect x={10} y={178} width={250} height={40} rx={6} fill="#f0fdf4" stroke="#86efac" strokeWidth={1} />
        <text x={135} y={193} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#15803d">Sorsby&apos;s Classification</text>
        <text x={135} y={206} textAnchor="middle" fontSize={8.5} fill="#166534">Correlative: 0.25–6.00 D (simple, stationary)</text>
        <text x={135} y={217} textAnchor="middle" fontSize={8.5} fill="#166534">Component: &gt;6.00 D (pathological, progressive)</text>

        {/* Pearl */}
        <rect x={270} y={178} width={280} height={40} rx={6} fill="#fff7ed" stroke="#fdba74" strokeWidth={1} />
        <text x={410} y={193} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#9a3412">Clinical Pearl</text>
        <text x={410} y={206} textAnchor="middle" fontSize={8} fill="#7c2d12">Total = Manifest + Latent</text>
        <text x={410} y={217} textAnchor="middle" fontSize={8} fill="#7c2d12">Manifest = Absolute + Facultative</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 4. Accommodation Mechanism ───────────────────────────────────────────────

export function AccommodationMechanismDiagram() {
  return (
    <DiagramShell caption="Helmholtz theory: ciliary muscle contraction → zonule slack → lens becomes more spherical → increased power">
      <svg viewBox="0 0 540 210" className="w-full">
        <rect width="540" height="210" fill="#f9fafb" />

        {/* ── AT REST (left) ── */}
        <text x={130} y={18} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#374151">At Rest (Distance)</text>

        {/* Ciliary body ring */}
        <ellipse cx={130} cy={105} rx={80} ry={65} fill="none" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4,3" />
        {/* Ciliary muscle (relaxed = large ring) */}
        <ellipse cx={130} cy={105} rx={70} ry={55} fill="#fef3c7" stroke="#d97706" strokeWidth={2} />
        <text x={130} y={30} textAnchor="middle" fontSize={8} fill="#92400e">Ciliary muscle RELAXED</text>
        <text x={130} y={41} textAnchor="middle" fontSize={8} fill="#92400e">(large ring)</text>

        {/* Zonule fibres — taut (long lines) */}
        {[-30, -15, 0, 15, 30].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 130 + 70 * Math.sin(rad)
          const y1 = 105 - 55 * Math.cos(rad)
          const x2 = 130 + 28 * Math.sin(rad)
          const y2 = 105 - 22 * Math.cos(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b7280" strokeWidth={1.5} />
        })}

        {/* Lens — flat */}
        <ellipse cx={130} cy={105} rx={26} ry={16} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
        <text x={130} y={109} textAnchor="middle" fontSize={8} fill="#1d4ed8" fontWeight="bold">FLAT LENS</text>

        {/* Zonule label */}
        <text x={98} y={68} fontSize={7} fill="#374151">zonule</text>
        <text x={96} y={77} fontSize={7} fill="#374151">fibres taut</text>

        {/* Arrow */}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
          </marker>
        </defs>
        <line x1={230} y1={105} x2={310} y2={105} stroke="#6b7280" strokeWidth={2} markerEnd="url(#arr)" />
        <text x={270} y={98} textAnchor="middle" fontSize={9} fill="#374151">Near</text>
        <text x={270} y={110} textAnchor="middle" fontSize={9} fill="#374151">stimulus</text>

        {/* ── ACCOMMODATED (right) ── */}
        <text x={420} y={18} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#374151">Accommodated (Near)</text>

        {/* Ciliary muscle contracted = smaller ring */}
        <ellipse cx={420} cy={105} rx={80} ry={65} fill="none" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4,3" />
        <ellipse cx={420} cy={105} rx={55} ry={42} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={420} y={30} textAnchor="middle" fontSize={8} fill="#92400e">Ciliary muscle CONTRACTED</text>
        <text x={420} y={41} textAnchor="middle" fontSize={8} fill="#92400e">(smaller ring)</text>

        {/* Zonule fibres — slack (short/wavy) */}
        {[-30, -15, 0, 15, 30].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 420 + 55 * Math.sin(rad)
          const y1 = 105 - 42 * Math.cos(rad)
          const x2 = 420 + 30 * Math.sin(rad)
          const y2 = 105 - 24 * Math.cos(rad)
          const mx = (x1 + x2) / 2 + 3 * Math.cos(rad)
          const my = (y1 + y2) / 2 + 3 * Math.sin(rad)
          return <path key={i} d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} fill="none" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="3,2" />
        })}

        {/* Lens — rounded */}
        <ellipse cx={420} cy={105} rx={26} ry={24} fill="#bfdbfe" stroke="#2563eb" strokeWidth={2.5} />
        <text x={420} y={102} textAnchor="middle" fontSize={7.5} fill="#1d4ed8" fontWeight="bold">ROUNDED</text>
        <text x={420} y={112} textAnchor="middle" fontSize={7.5} fill="#1d4ed8" fontWeight="bold">LENS ↑ power</text>

        <text x={392} y={68} fontSize={7} fill="#374151">zonule</text>
        <text x={390} y={77} fontSize={7} fill="#374151">fibres slack</text>

        {/* Bottom labels */}
        <rect x={10} y={183} width={520} height={22} rx={4} fill="#f0fdf4" stroke="#86efac" strokeWidth={1} />
        <text x={270} y={195} textAnchor="middle" fontSize={9} fill="#166534" fontWeight="600">
          Presbyopia: lens loses elasticity with age → cannot spring back → amplitude decreases
        </text>
        <text x={270} y={205} textAnchor="middle" fontSize={8.5} fill="#166534">
          Clinical onset ~45 years | Symptoms when amplitude &lt; 5.00 D
        </text>
      </svg>
    </DiagramShell>
  )
}

// ─── 5. Hofstetter's Formulas ──────────────────────────────────────────────────

export function HofstetterFormulasDiagram() {
  const ages = [10, 20, 30, 40, 45, 50, 55, 60]
  const minAA = (age: number) => Math.max(0, 15 - 0.25 * age)
  const avgAA = (age: number) => Math.max(0, 18.5 - 0.30 * age)
  const maxAA = (age: number) => Math.max(0, 25 - 0.40 * age)

  const chartX = 60
  const chartY = 25
  const chartW = 420
  const chartH = 130
  const maxD = 18
  const toX = (age: number) => chartX + ((age - 10) / 50) * chartW
  const toY = (d: number) => chartY + chartH - (d / maxD) * chartH

  const linePoints = (fn: (a: number) => number) =>
    ages.map(a => `${toX(a)},${toY(fn(a))}`).join(' ')

  return (
    <DiagramShell caption="Hofstetter's formulas — amplitude decreases ~0.25–0.40 D per year of age">
      <svg viewBox="0 0 560 205" className="w-full">
        <rect width="560" height="205" fill="#f9fafb" />

        {/* Grid */}
        {[0, 3, 6, 9, 12, 15, 18].map(d => (
          <g key={d}>
            <line x1={chartX} y1={toY(d)} x2={chartX + chartW} y2={toY(d)} stroke="#e5e7eb" strokeWidth={1} />
            <text x={chartX - 5} y={toY(d) + 4} textAnchor="end" fontSize={8} fill="#6b7280">{d}D</text>
          </g>
        ))}
        {ages.map(age => (
          <g key={age}>
            <line x1={toX(age)} y1={chartY} x2={toX(age)} y2={chartY + chartH} stroke="#f3f4f6" strokeWidth={1} />
            <text x={toX(age)} y={chartY + chartH + 12} textAnchor="middle" fontSize={8} fill="#6b7280">{age}</text>
          </g>
        ))}

        {/* Axes */}
        <line x1={chartX} y1={chartY} x2={chartX} y2={chartY + chartH} stroke="#374151" strokeWidth={1.5} />
        <line x1={chartX} y1={chartY + chartH} x2={chartX + chartW} y2={chartY + chartH} stroke="#374151" strokeWidth={1.5} />

        {/* Lines */}
        <polyline points={linePoints(maxAA)} fill="none" stroke="#16a34a" strokeWidth={2} />
        <polyline points={linePoints(avgAA)} fill="none" stroke="#2563eb" strokeWidth={2} />
        <polyline points={linePoints(minAA)} fill="none" stroke="#dc2626" strokeWidth={2} />

        {/* Labels on lines */}
        <text x={toX(15)} y={toY(maxAA(15)) - 5} fontSize={8.5} fill="#16a34a" fontWeight="bold">Max = 25 − 0.40(age)</text>
        <text x={toX(16)} y={toY(avgAA(16)) - 5} fontSize={8.5} fill="#2563eb" fontWeight="bold">Avg = 18.5 − 0.30(age)</text>
        <text x={toX(17)} y={toY(minAA(17)) + 14} fontSize={8.5} fill="#dc2626" fontWeight="bold">Min = 15 − 0.25(age)</text>

        {/* Presbyopia zone */}
        <rect x={toX(40)} y={chartY} width={toX(60) - toX(40)} height={chartH} fill="#fef9c3" opacity={0.4} />
        <text x={toX(50)} y={chartY + 10} textAnchor="middle" fontSize={8} fill="#92400e">Presbyopia Zone</text>

        {/* 5D threshold */}
        <line x1={chartX} y1={toY(5)} x2={chartX + chartW} y2={toY(5)} stroke="#f97316" strokeWidth={1} strokeDasharray="5,3" />
        <text x={chartX + chartW + 3} y={toY(5) + 4} fontSize={7.5} fill="#f97316">5D</text>

        {/* Axis labels */}
        <text x={chartX + chartW / 2} y={chartY + chartH + 24} textAnchor="middle" fontSize={9} fill="#374151">Age (years)</text>
        <text x={12} y={chartY + chartH / 2} textAnchor="middle" fontSize={9} fill="#374151" transform={`rotate(-90, 12, ${chartY + chartH / 2})`}>AA (Diopters)</text>

        {/* Formula box */}
        <rect x={480} y={28} width={72} height={52} rx={5} fill="#dbeafe" stroke="#93c5fd" strokeWidth={1} />
        <text x={516} y={40} textAnchor="middle" fontSize={7.5} fontWeight="bold" fill="#1d4ed8">Age 20 eg.</text>
        <text x={516} y={52} textAnchor="middle" fontSize={7} fill="#1e40af">Max: 17D</text>
        <text x={516} y={63} textAnchor="middle" fontSize={7} fill="#1e40af">Avg: 12.5D</text>
        <text x={516} y={74} textAnchor="middle" fontSize={7} fill="#1e40af">Min: 10D</text>

        {/* Bottom note */}
        <text x={280} y={192} textAnchor="middle" fontSize={8.5} fill="#6b7280">Symptoms of presbyopia appear when amplitude falls below 5.00 D (orange dashed line)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'to-astigmatism-meridians': AstigmatismMeridiansDiagram,
  'to-astigmatism-focal-types': AstigmatismFocalTypesDiagram,
  'to-hyperopia-subtypes': HyperopiaSubtypesDiagram,
  'to-accommodation-mechanism': AccommodationMechanismDiagram,
  'to-hofstetter-formulas': HofstetterFormulasDiagram,
}
