/* SVG diagrams for Phorometry (21 Steps) notes — all inline, no external assets */

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

// ─── 1. Four Probe Bodies ─────────────────────────────────────────────────────

export function ProBodiesDiagram() {
  return (
    <DiagramShell caption="Lenses affect accommodation | Prisms affect convergence | INHIBIT → object moves away → appears BIGGER | STIMULATE → object moves closer → appears SMALLER">
      <svg viewBox="0 0 560 230" className="w-full">
        <rect width="560" height="230" fill="#f9fafb" />

        {/* Title */}
        <text x={280} y={16} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#374151">4 Probe Bodies</text>

        {/* Grid lines */}
        <line x1={280} y1={22} x2={280} y2={210} stroke="#d1d5db" strokeWidth={1} />
        <line x1={10} y1={116} x2={550} y2={116} stroke="#d1d5db" strokeWidth={1} />

        {/* Quadrant labels */}
        <text x={145} y={33} textAnchor="middle" fontSize={9} fill="#6b7280" fontWeight="600">LENSES (Accommodation)</text>
        <text x={415} y={33} textAnchor="middle" fontSize={9} fill="#6b7280" fontWeight="600">PRISMS (Convergence)</text>

        {/* ── TOP LEFT: Convex (+) ── */}
        <rect x={20} y={38} width={245} height={72} rx={8} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
        <text x={50} y={56} fontSize={24} fill="#16a34a">+</text>
        <text x={80} y={55} fontSize={11} fontWeight="bold" fill="#166534">Convex Lens (+)</text>
        <text x={80} y={69} fontSize={9} fill="#15803d">INHIBITS accommodation</text>
        <text x={80} y={81} fontSize={9} fill="#374151">Ciliary muscle relaxes</text>
        <text x={80} y={93} fontSize={9} fill="#374151">Lens stays flat (less power)</text>
        <rect x={20} y={100} width={245} height={8} rx={4} fill="#bbf7d0" />
        <text x={143} y={107} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#14532d">Object seems FARTHER → target appears BIGGER ↑</text>

        {/* ── BOTTOM LEFT: Concave (-) ── */}
        <rect x={20} y={122} width={245} height={72} rx={8} fill="#fff7ed" stroke="#fdba74" strokeWidth={1.5} />
        <text x={50} y={140} fontSize={22} fill="#ea580c">−</text>
        <text x={80} y={141} fontSize={11} fontWeight="bold" fill="#9a3412">Concave Lens (−)</text>
        <text x={80} y={155} fontSize={9} fill="#c2410c">STIMULATES accommodation</text>
        <text x={80} y={167} fontSize={9} fill="#374151">Ciliary muscle contracts more</text>
        <text x={80} y={179} fontSize={9} fill="#374151">Lens becomes more spherical</text>
        <rect x={20} y={184} width={245} height={8} rx={4} fill="#fed7aa" />
        <text x={143} y={191} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#7c2d12">Object seems CLOSER → target appears SMALLER ↓</text>

        {/* ── TOP RIGHT: Base-In ── */}
        <rect x={295} y={38} width={245} height={72} rx={8} fill="#eff6ff" stroke="#93c5fd" strokeWidth={1.5} />
        <text x={305} y={58} fontSize={9} fontWeight="bold" fill="#1d4ed8">◀ Base-In (BI) Prism</text>
        <text x={305} y={72} fontSize={9} fill="#1e40af">INHIBITS convergence</text>
        <text x={305} y={84} fontSize={9} fill="#374151">Light bends outward → eyes diverge</text>
        <text x={305} y={96} fontSize={9} fill="#374151">Medial rectus relaxes</text>
        {/* Prism shape */}
        <polygon points="510,42 540,42 540,105 510,75" fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
        <text x={525} y={78} textAnchor="middle" fontSize={7} fill="#1d4ed8">BI</text>
        <rect x={295} y={100} width={245} height={8} rx={4} fill="#bfdbfe" />
        <text x={418} y={107} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#1e3a8a">Object seems FARTHER → target appears BIGGER ↑</text>

        {/* ── BOTTOM RIGHT: Base-Out ── */}
        <rect x={295} y={122} width={245} height={72} rx={8} fill="#fdf4ff" stroke="#e9d5ff" strokeWidth={1.5} />
        <text x={305} y={142} fontSize={9} fontWeight="bold" fill="#7e22ce">▶ Base-Out (BO) Prism</text>
        <text x={305} y={156} fontSize={9} fill="#9333ea">STIMULATES convergence</text>
        <text x={305} y={168} fontSize={9} fill="#374151">Light bends inward → eyes converge</text>
        <text x={305} y={180} fontSize={9} fill="#374151">Medial rectus contracts more</text>
        {/* Prism shape */}
        <polygon points="510,126 540,126 510,189 540,189" fill="#f3e8ff" stroke="#a855f7" strokeWidth={1.5} />
        <text x={525} y={162} textAnchor="middle" fontSize={7} fill="#7e22ce">BO</text>
        <rect x={295} y={184} width={245} height={8} rx={4} fill="#e9d5ff" />
        <text x={418} y={191} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#4a044e">Object seems CLOSER → target appears SMALLER ↓</text>

        {/* Bottom rule */}
        <rect x={10} y={202} width={540} height={24} rx={5} fill="#1e293b" />
        <text x={280} y={218} textAnchor="middle" fontSize={9} fill="#e2e8f0" fontWeight="bold">
          THE RULE: INHIBIT = object away = BIGGER | STIMULATE = object closer = SMALLER
        </text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Near Reflex Triad ─────────────────────────────────────────────────────

export function NearReflexTriadDiagram() {
  return (
    <DiagramShell caption="Near-point reaction/synkinesis: three simultaneous responses triggered by the same neural pathway (CN III via Edinger-Westphal nucleus)">
      <svg viewBox="0 0 520 200" className="w-full">
        <rect width="520" height="200" fill="#f9fafb" />

        <defs>
          <marker id="arrt" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#374151" />
          </marker>
        </defs>

        {/* Stimulus box */}
        <rect x={185} y={12} width={150} height={36} rx={8} fill="#1e293b" />
        <text x={260} y={28} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#f8fafc">Near Object</text>
        <text x={260} y={42} textAnchor="middle" fontSize={9} fill="#94a3b8">(blur stimulus)</text>

        {/* Pathway node */}
        <rect x={210} y={68} width={100} height={30} rx={6} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
        <text x={260} y={81} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#92400e">CN III pathway</text>
        <text x={260} y={93} textAnchor="middle" fontSize={7.5} fill="#a16207">Edinger-Westphal</text>

        {/* Connector: stimulus to pathway */}
        <line x1={260} y1={48} x2={260} y2={68} stroke="#374151" strokeWidth={1.5} markerEnd="url(#arrt)" />

        {/* Branches */}
        <line x1={260} y1={98} x2={260} y2={112} stroke="#374151" strokeWidth={1.5} />
        <line x1={260} y1={112} x2={80} y2={112} stroke="#374151" strokeWidth={1.5} />
        <line x1={260} y1={112} x2={440} y2={112} stroke="#374151" strokeWidth={1.5} />
        <line x1={80} y1={112} x2={80} y2={125} stroke="#374151" strokeWidth={1.5} markerEnd="url(#arrt)" />
        <line x1={260} y1={112} x2={260} y2={125} stroke="#374151" strokeWidth={1.5} markerEnd="url(#arrt)" />
        <line x1={440} y1={112} x2={440} y2={125} stroke="#374151" strokeWidth={1.5} markerEnd="url(#arrt)" />

        {/* Response boxes */}
        {/* Accommodation */}
        <rect x={15} y={125} width={130} height={50} rx={8} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
        <text x={80} y={140} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#1d4ed8">Accommodation</text>
        <text x={80} y={153} textAnchor="middle" fontSize={8} fill="#1e40af">Ciliary m. contracts</text>
        <text x={80} y={164} textAnchor="middle" fontSize={8} fill="#1e40af">Lens power ↑</text>

        {/* Convergence */}
        <rect x={195} y={125} width={130} height={50} rx={8} fill="#dcfce7" stroke="#22c55e" strokeWidth={1.5} />
        <text x={260} y={140} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#15803d">Convergence</text>
        <text x={260} y={153} textAnchor="middle" fontSize={8} fill="#166534">Medial rectus contracts</text>
        <text x={260} y={164} textAnchor="middle" fontSize={8} fill="#166534">Eyes turn inward</text>

        {/* Miosis */}
        <rect x={375} y={125} width={130} height={50} rx={8} fill="#fae8ff" stroke="#d946ef" strokeWidth={1.5} />
        <text x={440} y={140} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#a21caf">Miosis</text>
        <text x={440} y={153} textAnchor="middle" fontSize={8} fill="#86198f">Sphincter pupillae</text>
        <text x={440} y={164} textAnchor="middle" fontSize={8} fill="#86198f">Pupil constricts ↓ DoF</text>

        {/* Bottom note */}
        <text x={260} y={190} textAnchor="middle" fontSize={8.5} fill="#374151">All three happen simultaneously — same neural command</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Blur vs Break Endpoints ───────────────────────────────────────────────

export function BlurBreakEndpointsDiagram() {
  return (
    <DiagramShell caption="Blur = accommodation limit reached | Break = fusional vergence exhausted | Recovery always less than Break">
      <svg viewBox="0 0 560 210" className="w-full">
        <rect width="560" height="210" fill="#f9fafb" />

        {/* Headers */}
        <rect x={10} y={8} width={245} height={26} rx={5} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
        <text x={132} y={25} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#92400e">BLUR Endpoint</text>

        <rect x={305} y={8} width={245} height={26} rx={5} fill="#fee2e2" stroke="#ef4444" strokeWidth={1.5} />
        <text x={428} y={25} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#991b1b">BREAK Endpoint</text>

        {/* Blur description */}
        <text x={132} y={52} textAnchor="middle" fontSize={9} fill="#374151">Accommodation pushed to its limit</text>
        <text x={132} y={64} textAnchor="middle" fontSize={9} fill="#374151">Ciliary muscle cannot contract further</text>
        <text x={132} y={76} textAnchor="middle" fontSize={9} fill="#374151">Lens cannot increase power enough</text>
        <text x={132} y={88} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#b45309">Fusion may STILL be intact</text>
        <text x={132} y={100} textAnchor="middle" fontSize={9} fill="#374151">Patient says: &quot;It went fuzzy&quot;</text>

        {/* Break description */}
        <text x={428} y={52} textAnchor="middle" fontSize={9} fill="#374151">Fusional vergence exhausted</text>
        <text x={428} y={64} textAnchor="middle" fontSize={9} fill="#374151">Cannot maintain binocular alignment</text>
        <text x={428} y={76} textAnchor="middle" fontSize={9} fill="#374151">Retinal images separate</text>
        <text x={428} y={88} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#b91c1c">Patient sees DOUBLE (diplopia)</text>
        <text x={428} y={100} textAnchor="middle" fontSize={9} fill="#374151">Patient says: &quot;I see two&quot;</text>

        {/* Tests table */}
        <text x={280} y={118} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#374151">Which Tests Use Which Endpoint</text>
        <line x1={10} y1={122} x2={550} y2={122} stroke="#e5e7eb" strokeWidth={1} />

        {/* Column headers */}
        <text x={140} y={135} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#92400e">Blur Tests</text>
        <text x={280} y={135} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#991b1b">Break/Recovery Tests</text>
        <text x={430} y={135} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#1d4ed8">Alignment Tests</text>
        <line x1={10} y1={138} x2={550} y2={138} stroke="#e5e7eb" strokeWidth={1} />

        {['#16A PRC', '#17A NRC', '#20 PRA', '#21 NRA'].map((t, i) => (
          <text key={t} x={140} y={152 + i * 13} textAnchor="middle" fontSize={8.5} fill="#374151">{t}</text>
        ))}

        {['#9 Advergence', '#10 Convergence', '#11 Abvergence', '#12 Vert. Far', '#16B PFR', '#17B NFR', '#18 Vert. Near'].map((t, i) => (
          <text key={t} x={280} y={152 + i * 11} textAnchor="middle" fontSize={8} fill="#374151">{t}</text>
        ))}

        {['#3 Hab. Phoria Far', '#8 Ind. Phoria Far', '#13A Hab. Near', '#13B Ind. Near', '#15A/15B'].map((t, i) => (
          <text key={t} x={430} y={152 + i * 13} textAnchor="middle" fontSize={8.5} fill="#374151">{t}</text>
        ))}

        {/* Board trap */}
        <rect x={10} y={194} width={540} height={14} rx={4} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1} />
        <text x={280} y={204} textAnchor="middle" fontSize={8.5} fontWeight="bold" fill="#92400e">
          BOARD TRAP: #16A (PRC) stops at BLUR only — do NOT continue to break. #16B (PFR) = break + recovery.
        </text>
      </svg>
    </DiagramShell>
  )
}

// ─── 4. 21 Steps Overview Map ─────────────────────────────────────────────────

export function TwentyOneStepsMapDiagram() {
  return (
    <DiagramShell caption="All 21 steps grouped by distance and function — memorize the groups, then the details follow">
      <svg viewBox="0 0 560 310" className="w-full">
        <rect width="560" height="310" fill="#f9fafb" />

        {/* Title */}
        <text x={280} y={14} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#374151">OEP 21 Steps — Visual Map</text>

        {/* ── FAR GROUP ── */}
        <rect x={10} y={22} width={265} height={130} rx={8} fill="#eff6ff" stroke="#93c5fd" strokeWidth={1.5} />
        <text x={142} y={37} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#1d4ed8">FAR DISTANCE (20 ft / 6M)</text>

        {[
          { num: '#3', label: 'Habitual Lateral Phoria', note: 'Habitual Rx' },
          { num: '#8', label: 'Induced Lateral Phoria', note: 'Test #7 Rx' },
          { num: '#9', label: 'Advergence (BI)', note: 'Break/Recovery' },
          { num: '#10', label: 'Convergence (BO)', note: 'Blur/Break/Recovery' },
          { num: '#11', label: 'Abvergence (BI)', note: 'Break/Recovery' },
          { num: '#12', label: 'Vertical Phoria & Duction', note: 'BU/BD' },
        ].map(({ num, label, note }, i) => (
          <g key={num}>
            <rect x={18} y={42 + i * 18} width={24} height={14} rx={3} fill="#dbeafe" />
            <text x={30} y={53 + i * 18} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#1d4ed8">{num}</text>
            <text x={50} y={53 + i * 18} fontSize={8.5} fill="#1e293b">{label}</text>
            <text x={255} y={53 + i * 18} textAnchor="end" fontSize={7.5} fill="#64748b">{note}</text>
          </g>
        ))}

        {/* ── NEAR PHORIA/VERGENCE ── */}
        <rect x={285} y={22} width={270} height={175} rx={8} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
        <text x={420} y={37} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#166534">NEAR DISTANCE (16&quot; / 40cm)</text>

        {[
          { num: '#13A', label: 'Habitual Phoria Near', note: 'Habitual Rx' },
          { num: '#13B', label: 'Induced Phoria Near', note: 'Gross #14A' },
          { num: '#14A', label: 'Dissociated CC Test', note: '3BD/3BU prisms' },
          { num: '#14B', label: 'Binocular CC Test', note: 'No prisms' },
          { num: '#15A', label: 'Phoria thru Unfused CC', note: 'Gross #14A' },
          { num: '#15B', label: 'Phoria thru Fused CC', note: 'Gross #14B' },
          { num: '#16A', label: 'PRC (BO)', note: 'Blur only' },
          { num: '#16B', label: 'PFR (BO)', note: 'Break/Recovery' },
          { num: '#17A', label: 'NRC (BI)', note: 'Blur only' },
          { num: '#17B', label: 'NFR (BI)', note: 'Break/Recovery' },
          { num: '#18', label: 'Vertical Phoria & Duction', note: 'BU/BD' },
        ].map(({ num, label, note }, i) => (
          <g key={num}>
            <rect x={293} y={42 + i * 14} width={32} height={12} rx={3} fill="#dcfce7" />
            <text x={309} y={52 + i * 14} textAnchor="middle" fontSize={7.5} fontWeight="bold" fill="#15803d">{num}</text>
            <text x={333} y={52 + i * 14} fontSize={8} fill="#1e293b">{label}</text>
            <text x={548} y={52 + i * 14} textAnchor="end" fontSize={7} fill="#64748b">{note}</text>
          </g>
        ))}

        {/* ── ACCOMMODATION ── */}
        <rect x={10} y={160} width={265} height={80} rx={8} fill="#fdf4ff" stroke="#e9d5ff" strokeWidth={1.5} />
        <text x={142} y={175} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#7e22ce">ACCOMMODATION TESTS</text>
        {[
          { num: '#19', label: 'Amplitude of Accommodation', note: '±lens to blur' },
          { num: '#20', label: 'PRA — Positive Relative AA', note: 'MINUS lenses' },
          { num: '#21', label: 'NRA — Negative Relative AA', note: 'PLUS lenses' },
        ].map(({ num, label, note }, i) => (
          <g key={num}>
            <rect x={18} y={181 + i * 18} width={24} height={14} rx={3} fill="#f3e8ff" />
            <text x={30} y={192 + i * 18} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#7e22ce">{num}</text>
            <text x={50} y={192 + i * 18} fontSize={8.5} fill="#1e293b">{label}</text>
            <text x={268} y={192 + i * 18} textAnchor="end" fontSize={7.5} fill="#64748b">{note}</text>
          </g>
        ))}

        {/* ── MEMORY HOOKS ── */}
        <rect x={10} y={250} width={540} height={56} rx={8} fill="#1e293b" />
        <text x={280} y={265} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#f8fafc">KEY MEMORY HOOKS</text>
        <text x={280} y={279} textAnchor="middle" fontSize={8.5} fill="#94a3b8">#3 &amp; #13A = HABITUAL | #8 &amp; #13B = INDUCED (after refraction)</text>
        <text x={280} y={291} textAnchor="middle" fontSize={8.5} fill="#94a3b8">A = BLUR only | B = BREAK + recovery | BO = Positive (16A/16B) | BI = Negative (17A/17B)</text>
        <text x={280} y={303} textAnchor="middle" fontSize={8.5} fill="#94a3b8">#14A = Dissociated (prisms present) | #14B = Binocular (no prisms) | #20 = minus (PRA) | #21 = plus (NRA)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'ph-probe-bodies': ProBodiesDiagram,
  'ph-near-reflex-triad': NearReflexTriadDiagram,
  'ph-blur-break-endpoints': BlurBreakEndpointsDiagram,
  'ph-21steps-map': TwentyOneStepsMapDiagram,
}
