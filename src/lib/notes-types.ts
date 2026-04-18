export type Block =
  | { kind: 'text'; content: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'pearl'; content: string }
  | { kind: 'sub'; title: string; blocks: Block[] }

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
