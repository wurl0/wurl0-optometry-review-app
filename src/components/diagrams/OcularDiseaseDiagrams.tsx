/* SVG diagrams for Ocular Disease notes — all inline, no external assets */

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

// ─── 1. Glaucoma: Open vs Closed Angle ────────────────────────────────────────

export function GlaucomaDiagram() {
  return (
    <DiagramShell caption="Open Angle: drainage canal patent but slow | Closed Angle: iris occludes trabecular meshwork | IOP normal = 10–21 mmHg">
      <svg viewBox="0 0 440 260" className="w-full">
        <rect width="440" height="260" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Glaucoma — Anterior Chamber Angle</text>

        {/* ── LEFT: Open Angle ── */}
        <text x="110" y="38" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#16a34a">Open Angle (POAG)</text>

        {/* Cornea arc */}
        <path d="M 40 80 Q 110 50 180 80" fill="none" stroke="#93c5fd" strokeWidth="5" />
        <text x="110" y="63" textAnchor="middle" fontSize="7.5" fill="#1d4ed8">Cornea</text>

        {/* Anterior chamber */}
        <path d="M 40 80 L 40 160 Q 110 190 180 160 L 180 80" fill="#e0f2fe" opacity="0.6" />
        <text x="110" y="135" textAnchor="middle" fontSize="8" fill="#0369a1">Anterior</text>
        <text x="110" y="145" textAnchor="middle" fontSize="8" fill="#0369a1">Chamber</text>

        {/* Iris — flat, not bowing */}
        <path d="M 55 158 Q 110 162 165 158" fill="none" stroke="#7c3aed" strokeWidth="3" />
        <text x="110" y="175" textAnchor="middle" fontSize="7.5" fill="#7c3aed">Iris (flat)</text>

        {/* Trabecular meshwork — open */}
        <rect x="36" y="90" width="10" height="60" rx="2" fill="#22c55e" opacity="0.8" />
        <text x="20" y="122" textAnchor="middle" fontSize="6.5" fill="#15803d" transform="rotate(-90 20 122)">TM open ✓</text>
        <rect x="174" y="90" width="10" height="60" rx="2" fill="#22c55e" opacity="0.8" />

        {/* Aqueous flow arrows — open */}
        <path d="M 90 148 Q 60 130 48 110" fill="none" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
        <path d="M 130 148 Q 160 130 172 110" fill="none" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
        <text x="110" y="210" textAnchor="middle" fontSize="7.5" fill="#15803d">Aqueous drains slowly</text>
        <text x="110" y="221" textAnchor="middle" fontSize="7.5" fill="#15803d">(canal patent, but resistance ↑)</text>
        <text x="110" y="234" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">IOP: 21–30+ mmHg</text>

        {/* Divider */}
        <line x1="220" y1="30" x2="220" y2="250" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4,3" />

        {/* ── RIGHT: Closed Angle ── */}
        <text x="330" y="38" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#dc2626">Closed Angle (PACG)</text>

        {/* Cornea arc */}
        <path d="M 260 80 Q 330 50 400 80" fill="none" stroke="#93c5fd" strokeWidth="5" />
        <text x="330" y="63" textAnchor="middle" fontSize="7.5" fill="#1d4ed8">Cornea</text>

        {/* Anterior chamber — shallower */}
        <path d="M 260 80 L 260 145 Q 330 175 400 145 L 400 80" fill="#fef3c7" opacity="0.7" />
        <text x="330" y="120" textAnchor="middle" fontSize="7.5" fill="#92400e">Shallow</text>
        <text x="330" y="130" textAnchor="middle" fontSize="7.5" fill="#92400e">Chamber</text>

        {/* Iris — bowing forward (bombé) */}
        <path d="M 272 143 Q 330 120 388 143" fill="none" stroke="#7c3aed" strokeWidth="3" />
        <text x="330" y="158" textAnchor="middle" fontSize="7.5" fill="#7c3aed">Iris bowing (bombé)</text>

        {/* Trabecular meshwork — blocked */}
        <rect x="256" y="90" width="10" height="55" rx="2" fill="#ef4444" opacity="0.8" />
        <text x="245" y="120" textAnchor="middle" fontSize="6.5" fill="#b91c1c" transform="rotate(-90 245 120)">TM blocked ✗</text>
        <rect x="394" y="90" width="10" height="55" rx="2" fill="#ef4444" opacity="0.8" />

        {/* X marks */}
        <text x="261" y="118" fontSize="10" fill="#dc2626" fontWeight="bold">✗</text>
        <text x="395" y="118" fontSize="10" fill="#dc2626" fontWeight="bold">✗</text>

        <text x="330" y="210" textAnchor="middle" fontSize="7.5" fill="#b91c1c">Iris occludes trabecular meshwork</text>
        <text x="330" y="221" textAnchor="middle" fontSize="7.5" fill="#b91c1c">Aqueous cannot drain</text>
        <text x="330" y="234" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">IOP: 40–70+ mmHg (acute)</text>

        {/* Arrow marker */}
        <defs>
          <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#22c55e" />
          </marker>
        </defs>
      </svg>
    </DiagramShell>
  )
}

// ─── 2. Cataract — Lens Cross-Section ────────────────────────────────────────

export function CataractDiagram() {
  const cx = 220
  const cy = 130
  const rx = 130
  const ry = 90

  return (
    <DiagramShell caption="Nuclear: central yellow-brown | Cortical: spoke-like opacities | PSC: posterior pole, worst in bright light | ACSC: anterior pole">
      <svg viewBox="0 0 440 260" className="w-full">
        <rect width="440" height="260" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Lens Cross-Section — Cataract Types</text>

        {/* Lens outline */}
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />

        {/* Anterior capsule line */}
        <ellipse cx={cx} cy={cy} rx={rx - 6} ry={ry - 6} fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,3" />

        {/* Cortex region label */}
        <text x={cx - rx + 18} y={cy - 10} fontSize="7" fill="#92400e" opacity="0.8">Cortex</text>
        <text x={cx + rx - 36} y={cy - 10} fontSize="7" fill="#92400e" opacity="0.8">Cortex</text>

        {/* Nuclear region */}
        <ellipse cx={cx} cy={cy} rx={55} ry={38} fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#78350f">Nucleus</text>

        {/* ── 1. Nuclear cataract — yellow-brown nucleus */}
        <ellipse cx={cx} cy={cy} rx={42} ry={28} fill="#fbbf24" opacity="0.5" />
        <text x={cx} y={cy - 38} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#92400e">① Nuclear</text>
        <text x={cx} y={cy - 28} textAnchor="middle" fontSize="7" fill="#92400e">Yellow-brown; myopic shift; worse distance VA</text>
        <line x1={cx} y1={cy - 25} x2={cx} y2={cy - 8} stroke="#b45309" strokeWidth="1" strokeDasharray="2,2" />

        {/* ── 2. Cortical — spoke opacities */}
        {[0, 60, 120, 180, 240, 300].map(angle => {
          const rad = (angle * Math.PI) / 180
          const x1 = cx + 58 * Math.cos(rad)
          const y1 = cy + 40 * Math.sin(rad)
          const x2 = cx + 88 * Math.cos(rad)
          const y2 = cy + 62 * Math.sin(rad)
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#60a5fa" strokeWidth="3" opacity="0.7" />
        })}
        <text x={cx - rx - 8} y={cy + 55} textAnchor="end" fontSize="8" fontWeight="bold" fill="#1d4ed8">② Cortical</text>
        <text x={cx - rx - 8} y={cy + 65} textAnchor="end" fontSize="7" fill="#1d4ed8">Spoke-like; water clefts</text>
        <line x1={cx - rx - 6} y1={cy + 50} x2={cx - 90} y2={cy + 38} stroke="#3b82f6" strokeWidth="1" strokeDasharray="2,2" />

        {/* ── 3. PSC — posterior pole */}
        <ellipse cx={cx} cy={cy + ry - 14} rx={28} ry={8} fill="#f87171" opacity="0.75" />
        <text x={cx + rx + 10} y={cy + 65} fontSize="8" fontWeight="bold" fill="#b91c1c">③ PSC</text>
        <text x={cx + rx + 10} y={cy + 75} fontSize="7" fill="#b91c1c">Posterior pole; worst near/bright</text>
        <line x1={cx + rx + 8} y1={cy + 62} x2={cx + 32} y2={cy + ry - 14} stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />

        {/* ── 4. ACSC — anterior pole */}
        <ellipse cx={cx} cy={cy - ry + 14} rx={22} ry={7} fill="#86efac" opacity="0.8" />
        <text x={cx + rx + 10} y={cy - 38} fontSize="8" fontWeight="bold" fill="#166534">④ ACSC</text>
        <text x={cx + rx + 10} y={cy - 28} fontSize="7" fill="#166534">Anterior subcapsular</text>
        <line x1={cx + rx + 8} y1={cy - 42} x2={cx + 24} y2={cy - ry + 14} stroke="#16a34a" strokeWidth="1" strokeDasharray="2,2" />

        {/* Anterior / Posterior labels */}
        <text x={cx} y={cy - ry - 8} textAnchor="middle" fontSize="7.5" fill="#9ca3af">ANTERIOR</text>
        <text x={cx} y={cy + ry + 14} textAnchor="middle" fontSize="7.5" fill="#9ca3af">POSTERIOR</text>
      </svg>
    </DiagramShell>
  )
}

// ─── 3. Retinal Detachment ────────────────────────────────────────────────────

export function RetinalDetachmentDiagram() {
  return (
    <DiagramShell caption="Rhegmatogenous: break/tear → fluid under retina | Exudative: fluid from leaking vessels (no break) | Tractional: fibrous bands pull retina">
      <svg viewBox="0 0 440 270" className="w-full">
        <rect width="440" height="270" fill="#f9fafb" />
        <text x="220" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#111827">Retinal Detachment — Types & Mechanism</text>

        {/* ── Posterior eye cross-section (simplified half-circle) */}
        {/* Sclera */}
        <path d="M 60 140 Q 220 260 380 140" fill="none" stroke="#9ca3af" strokeWidth="8" />
        {/* Choroid */}
        <path d="M 64 140 Q 220 254 376 140" fill="none" stroke="#f59e0b" strokeWidth="5" />

        {/* Normal retina — attached */}
        <path d="M 68 140 Q 220 248 372 140" fill="none" stroke="#4ade80" strokeWidth="3" />

        {/* DETACHED area — retina lifted off (right side) */}
        <path d="M 280 170 Q 330 210 372 140" fill="none" stroke="#ef4444" strokeWidth="3" />
        {/* Space between detached retina and RPE */}
        <path d="M 280 170 Q 295 200 320 210 Q 348 218 372 140" fill="#fecaca" opacity="0.5" />
        <path d="M 280 170 Q 300 215 335 222 Q 358 226 372 140" fill="none" stroke="#f59e0b" strokeWidth="2" />

        {/* Tear/break marker */}
        <circle cx="280" cy="170" r="5" fill="#dc2626" />
        <text x="270" y="162" fontSize="7.5" textAnchor="end" fill="#dc2626" fontWeight="bold">Tear/Break</text>

        {/* Fluid accumulation arrow */}
        <text x="330" y="205" textAnchor="middle" fontSize="7" fill="#b91c1c">Subretinal</text>
        <text x="330" y="214" textAnchor="middle" fontSize="7" fill="#b91c1c">fluid</text>

        {/* RPE layer label */}
        <text x="155" y="243" fontSize="7" fill="#92400e" fontWeight="600">RPE (attached to choroid)</text>

        {/* Vitreous */}
        <path d="M 68 140 Q 220 50 372 140" fill="#e0f2fe" opacity="0.4" />
        <text x="220" y="105" textAnchor="middle" fontSize="8" fill="#0369a1">Vitreous</text>

        {/* Detachment plane label */}
        <text x="220" y="38" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#374151">Detachment plane: between RPE and Photoreceptor layer</text>

        {/* Legend */}
        <rect x="8" y="48" width="175" height="78" rx="6" fill="white" stroke="#e5e7eb" />
        <text x="14" y="63" fontSize="8.5" fontWeight="bold" fill="#374151">Types</text>
        {[
          { color: '#ef4444', label: 'Rhegmatogenous — tear/break; most common' },
          { color: '#f59e0b', label: 'Exudative — leaking vessels; no break' },
          { color: '#8b5cf6', label: 'Tractional — fibrous bands (DM, sickle cell)' },
        ].map((item, i) => (
          <g key={item.label}>
            <rect x="14" y={70 + i * 18} width="10" height="8" rx="2" fill={item.color} />
            <text x="28" y={79 + i * 18} fontSize="7" fill="#374151">{item.label}</text>
          </g>
        ))}

        {/* Symptoms */}
        <rect x="8" y="132" width="175" height="58" rx="6" fill="white" stroke="#e5e7eb" />
        <text x="14" y="147" fontSize="8.5" fontWeight="bold" fill="#374151">Symptoms</text>
        {[
          'Floaters (vitreous bleed)',
          'Photopsia (flashing lights)',
          'Curtain / shadow in vision',
        ].map((s, i) => (
          <text key={s} x="14" y={159 + i * 11} fontSize="7" fill="#6b7280">• {s}</text>
        ))}
      </svg>
    </DiagramShell>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  'od-glaucoma-angles': GlaucomaDiagram,
  'od-cataract-types': CataractDiagram,
  'od-retinal-detachment': RetinalDetachmentDiagram,
}
