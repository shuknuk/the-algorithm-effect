export enum Section {
  ESSAY = 'ESSAY',
  REFLECTION = 'REFLECTION',
  CITATIONS = 'CITATIONS',
}

export interface NavItem {
  id: Section;
  label: string;
}