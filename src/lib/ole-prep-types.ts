export type OlePrepItem =
  | { kind: 'mnemonic'; term: string; device: string; breakdown: string }
  | { kind: 'fact'; content: string; highlight?: string }
  | { kind: 'trap'; question: string; wrong: string; correct: string; why: string }
  | { kind: 'recall'; prompt: string; answer: string }
  | {
      kind: 'formula'
      title: string
      formula: string
      variables?: Array<{ symbol: string; definition: string }>
      notes?: string
      diagram?: string
    }
  | {
      kind: 'table'
      title: string
      headers: string[]
      rows: string[][]
      notes?: string
    }

export interface OlePrepSection {
  id: string
  title: string
  icon: string
  items: OlePrepItem[]
}

export interface OlePrepData {
  subject: string
  slug: string
  sections: OlePrepSection[]
}
