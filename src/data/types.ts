export interface Link {
  label: string
  href: string
}

export interface Role {
  title: string
  org: string
}

export interface Job extends Role {
  period: string
  /** Shown under the title, e.g. a promotion note. */
  note?: string
  highlights: string[]
  tags: string[]
}

export interface EarlierRole extends Role {
  period: string
  summary: string
}

export type ProjectArt = 'route' | 'records' | 'finance' | 'chat'

export interface Project {
  name: string
  meta: string
  description: string
  tags: string[]
  href?: string
  /** Screenshot of the product; falls back to an illustration when absent. */
  image?: string
  imageAlt?: string
  art?: ProjectArt
  artLabel?: string
}

export interface StackGroup {
  title: string
  items: string
}

export interface Fact {
  value: string
  label: string
}

export interface Qualification {
  title: string
  institution: string
  detail?: string
  period: string
}
