export interface Project {
  id: string
  number: string
  year: string
  technologies: string[]
}

// Language-independent data only — titles, categories, descriptions
// and highlights live in src/i18n/translations.ts since they need to
// be translated. Technologies are proper nouns (React, Siemens NX...)
// so they stay the same in both languages.
export const projects: Project[] = [
  {
    id: 'formula-sae',
    number: '01',
    year: '2024–25',
    technologies: ['Electrical System Design', 'Siemens NX / ANSYS', 'Sensors & DAQ', 'Field Troubleshooting'],
  },
  {
    id: 'hunucma-kiln',
    number: '02',
    year: '2025',
    technologies: ['CAD & Manufacturing', 'Burner Design', 'DOE / ANOVA', 'Prototyping'],
  },
  {
    id: 'cemi-conveyor-safety',
    number: '03',
    year: '2025',
    technologies: ['Keyence Sensors', 'Safety Systems & Interlocks', 'BOM & Bidding', 'Field Installation'],
  },
]
