import { DIAGRAM_REGISTRY as PHYSIO } from './PhysioOpticsDiagrams'
import { DIAGRAM_REGISTRY as BV } from './BinocularVisionDiagrams'
import { DIAGRAM_REGISTRY as TO } from './TheoreticalOpticsDiagrams'
import { DIAGRAM_REGISTRY as PH } from './PhorometryDiagrams'

const ALL_DIAGRAMS: Record<string, React.ComponentType> = { ...PHYSIO, ...BV, ...TO, ...PH }

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
