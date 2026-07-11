import { DIAGRAM_REGISTRY as PHYSIO } from './PhysioOpticsDiagrams'
import { DIAGRAM_REGISTRY as BV } from './BinocularVisionDiagrams'
import { DIAGRAM_REGISTRY as TO } from './TheoreticalOpticsDiagrams'
import { DIAGRAM_REGISTRY as PH } from './PhorometryDiagrams'
import { DIAGRAM_REGISTRY as OA } from './OcularAnatomyDiagrams'
import { DIAGRAM_REGISTRY as GA } from './GeneralAnatomyDiagrams'
import { DIAGRAM_REGISTRY as OD } from './OcularDiseaseDiagrams'
import { DIAGRAM_REGISTRY as GP } from './GeneralPharmacologyDiagrams'
import { DIAGRAM_REGISTRY as OP } from './OcularPharmacologyDiagrams'
import { DIAGRAM_REGISTRY as PMO } from './PracticalMechanicalOpticsDiagrams'
import { DIAGRAM_REGISTRY as LV } from './LowVisionDiagrams'
import { DIAGRAM_REGISTRY as PEDS } from './PediatricOptometryDiagrams'
import { DIAGRAM_REGISTRY as CL } from './ContactLensDiagrams'
import { DIAGRAM_REGISTRY as PEC } from './PrimaryEyeCareDiagrams'

const ALL_DIAGRAMS: Record<string, React.ComponentType> = { ...PHYSIO, ...BV, ...TO, ...PH, ...OA, ...GA, ...OD, ...GP, ...OP, ...PMO, ...LV, ...PEDS, ...CL, ...PEC }

export function DiagramRenderer({ id, caption }: { id: string; caption?: string }) {
  const Component = ALL_DIAGRAMS[id]
  if (!Component) return null
  return (
    <div>
      <Component />
      {caption && <p className="text-center text-xs text-gray-400 mt-1 italic">{caption}</p>}
    </div>
  )
}
