import fsae01 from '../assets/projects/formula-sae/fsae-01.jpg'
import fsae02 from '../assets/projects/formula-sae/fsae-02.jpg'
import fsae03 from '../assets/projects/formula-sae/fsae-03.jpg'
import fsae04 from '../assets/projects/formula-sae/fsae-04.jpg'
import fsae05 from '../assets/projects/formula-sae/fsae-05.jpg'
import fsae06 from '../assets/projects/formula-sae/fsae-06.jpg'
import fsae07 from '../assets/projects/formula-sae/fsae-07.jpg'
import fsae08 from '../assets/projects/formula-sae/fsae-08.jpg'
import fsae09 from '../assets/projects/formula-sae/fsae-09.jpg'

export interface Project {
  id: string
  number: string
  year: string
  technologies: string[]
  // Optional — when present, the card thumbnail and the modal show
  // real photos (with a carousel in the modal for more than one)
  // instead of the "PROJECT PREVIEW" placeholder.
  images?: string[]
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
    images: [fsae01, fsae02, fsae03, fsae04, fsae05, fsae06, fsae07, fsae08, fsae09],
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
    year: '2026',
    technologies: ['SEW-Eurodrive Motors & VFDs', 'Keyence GS-M Safety Sensors', 'Compact GuardLogix 5380', 'Cable Routing & Sizing'],
  },
]
