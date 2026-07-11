export type Block =
  | { kind: 'text'; content: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'pearl'; content: string }
  // Semantic callout. 'why' = the reasoning/story behind a fact, 'trap' = a common
  // board confusion, 'mnemonic' = a memory hook. `title` overrides the default label.
  | { kind: 'callout'; variant: 'why' | 'trap' | 'mnemonic'; content: string; title?: string }
  | { kind: 'sub'; title: string; blocks: Block[] }
  | { kind: 'diagram'; id: string; caption?: string }

export interface Section {
  id: string
  title: string
  blocks: Block[]
}

export interface NotesData {
  subject: string
  slug: string
  sections: Section[]
}
