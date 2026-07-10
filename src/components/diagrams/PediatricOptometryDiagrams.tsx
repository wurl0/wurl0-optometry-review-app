/* SVG diagrams for Pediatric Optometry — all inline, no external assets */

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

// ─── 1. Visual Acuity Milestones ──────────────────────────────────────────────

export function VAMilestonesDiagram() {
  const rows = [
    { age: 'Birth', va: '20/800', frac: '6/240', w: 24 },
    { age: '1 month', va: '20/400', frac: '6/120', w: 48 },
    { age: '6 months', va: '20/200', frac: '6/30', w: 96 },
    { age: '1 year', va: '20/50', frac: '6/15', w: 180 },
    { age: '3 years', va: '20/20', frac: '6/6', w: 300 },
  ]
  return (
    <DiagramShell caption="Visual acuity matures from about 20/800 at birth to adult 20/20 by age 3. Eyes must also be straight by 3-4 months; any persistent deviation after that is pathological.">
      <svg viewBox="0 0 460 220" className="w-full">
        <rect width="460" height="220" fill="#f9fafb" />
        <text x="230" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Visual Acuity Development</text>
        {rows.map((r, i) => {
          const y = 38 + i * 34
          return (
            <g key={i}>
              <text x="86" y={y + 15} textAnchor="end" fontSize="9.5" fontWeight="bold" fill="#111827">{r.age}</text>
              <rect x="96" y={y} width={r.w} height="22" rx="4" fill="#6366f1" opacity={0.45 + i * 0.12} />
              <text x={96 + r.w + 8} y={y + 15} fontSize="9" fill="#374151">{r.va} ({r.frac})</text>
            </g>
          )
        })}
        <text x="96" y="212" fontSize="8" fill="#6b7280">Bar length = relative acuity (longer = better vision)</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Hirschberg Corneal Reflex Estimates ───────────────────────────────────

export function HirschbergDiagram() {
  // each eye: reflex displaced from center by some amount → prism estimate
  const eyes = [
    { label: 'Centered', sub: 'orthophoric', dx: 0, pd: '0' },
    { label: '1 mm nasal', sub: 'from center', dx: 6, pd: '~7 pd' },
    { label: 'Pupil edge', sub: '~2 mm', dx: 11, pd: '~15 pd' },
    { label: 'Mid pupil-limbus', sub: '~4 mm', dx: 18, pd: '~30 pd' },
    { label: 'At limbus', sub: '~6 mm', dx: 24, pd: '~45 pd' },
  ]
  return (
    <DiagramShell caption="Hirschberg test: the corneal light reflex is normally centered. Each ~1 mm of reflex displacement from center corresponds to about 7 prism diopters of ocular deviation.">
      <svg viewBox="0 0 470 170" className="w-full">
        <rect width="470" height="170" fill="#f9fafb" />
        <text x="235" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Hirschberg Reflex &rarr; Deviation</text>
        {eyes.map((e, i) => {
          const cx = 55 + i * 92
          const cy = 78
          return (
            <g key={i}>
              {/* eye */}
              <ellipse cx={cx} cy={cy} rx="34" ry="22" fill="#fff" stroke="#94a3b8" strokeWidth="1.3" />
              {/* iris */}
              <circle cx={cx} cy={cy} r="15" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1" />
              {/* pupil */}
              <circle cx={cx} cy={cy} r="7" fill="#1e293b" />
              {/* reflex (white dot) displaced nasally = toward center of face; draw temporal shift for visual clarity */}
              <circle cx={cx - e.dx} cy={cy - 3} r="3" fill="#fbbf24" stroke="#b45309" strokeWidth="0.6" />
              <text x={cx} y={cy + 40} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#111827">{e.label}</text>
              <text x={cx} y={cy + 51} textAnchor="middle" fontSize="7.5" fill="#6b7280">{e.sub}</text>
              <text x={cx} y={cy - 30} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b91c1c">{e.pd}</text>
            </g>
          )
        })}
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Amblyopia Treatment Flow ──────────────────────────────────────────────

export function AmblyopiaFlowDiagram() {
  return (
    <DiagramShell caption="Amblyopia management always starts with cycloplegic refraction and full-time spectacle wear (12-16 weeks) BEFORE any patching. Patching is added only if acuity has not normalised.">
      <svg viewBox="0 0 460 300" className="w-full">
        <rect width="460" height="300" fill="#f9fafb" />
        <text x="230" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Amblyopia Treatment Sequence</text>
        {/* boxes */}
        <g fontSize="9" fill="#111827">
          <rect x="140" y="32" width="180" height="30" rx="6" fill="#e0e7ff" stroke="#6366f1" />
          <text x="230" y="51" textAnchor="middle" fontWeight="bold">1. Cycloplegic refraction</text>

          <rect x="120" y="82" width="220" height="34" rx="6" fill="#e0e7ff" stroke="#6366f1" />
          <text x="230" y="96" textAnchor="middle" fontWeight="bold">2. Full spectacle correction</text>
          <text x="230" y="108" textAnchor="middle" fontSize="7.5" fill="#475569">wear 12-16 weeks, reassess every 4 wks</text>

          <rect x="30" y="150" width="180" height="34" rx="6" fill="#dcfce7" stroke="#16a34a" />
          <text x="120" y="164" textAnchor="middle" fontWeight="bold" fontSize="8.5">VA normalised?</text>
          <text x="120" y="176" textAnchor="middle" fontSize="7.5" fill="#166534">glasses only (resolved)</text>

          <rect x="250" y="150" width="180" height="34" rx="6" fill="#fef3c7" stroke="#d97706" />
          <text x="340" y="164" textAnchor="middle" fontWeight="bold" fontSize="8.5">VA still reduced?</text>
          <text x="340" y="176" textAnchor="middle" fontSize="7.5" fill="#92400e">3. Add patching (fellow eye)</text>

          <rect x="250" y="202" width="180" height="34" rx="6" fill="#fef3c7" stroke="#d97706" />
          <text x="340" y="216" textAnchor="middle" fontSize="8" fontWeight="bold">Foveal &rarr; direct occlusion</text>
          <text x="340" y="228" textAnchor="middle" fontSize="8" fontWeight="bold">Ecc. steady &rarr; inverse</text>

          <rect x="250" y="254" width="180" height="32" rx="6" fill="#ede9fe" stroke="#7c3aed" />
          <text x="340" y="268" textAnchor="middle" fontSize="8" fontWeight="bold">4. Atropine penalisation</text>
          <text x="340" y="279" textAnchor="middle" fontSize="7.5" fill="#5b21b6">or office vision therapy</text>
        </g>
        {/* arrows */}
        <g stroke="#94a3b8" strokeWidth="1.4" fill="none" markerEnd="url(#pedArrow)">
          <path d="M 230 62 L 230 82" />
          <path d="M 200 116 L 120 150" />
          <path d="M 260 116 L 340 150" />
          <path d="M 340 184 L 340 202" />
          <path d="M 340 236 L 340 254" />
        </g>
        <defs>
          <marker id="pedArrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'peds-va-milestones': VAMilestonesDiagram,
  'peds-hirschberg': HirschbergDiagram,
  'peds-amblyopia-flow': AmblyopiaFlowDiagram,
}
