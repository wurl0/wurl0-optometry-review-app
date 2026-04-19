import { DIAGRAM_REGISTRY as PHYSIO } from './PhysioOpticsDiagrams'
import { DIAGRAM_REGISTRY as BV } from './BinocularVisionDiagrams'
import { DIAGRAM_REGISTRY as TO } from './TheoreticalOpticsDiagrams'
import { DIAGRAM_REGISTRY as PH } from './PhorometryDiagrams'
import { DIAGRAM_REGISTRY as OA } from './OcularAnatomyDiagrams'
import { DIAGRAM_REGISTRY as GA } from './GeneralAnatomyDiagrams'
import { DIAGRAM_REGISTRY as OD } from './OcularDiseaseDiagrams'

const ALL_DIAGRAMS: Record<string, React.ComponentType> = { ...PHYSIO, ...BV, ...TO, ...PH, ...OA, ...GA, ...OD }

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
