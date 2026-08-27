export interface Project {
  id: string
  number: string
  year: string
  category: string
  title: string
  description: string
  highlights: string[]
  technologies: string[]
}

// Only real, documented projects go here — nothing invented to fill
// space. More will be added as details become available.
export const projects: Project[] = [
  {
    id: 'formula-sae',
    number: '01',
    year: '2024–25',
    category: 'Automotive Engineering',
    title: 'Formula SAE — Electrical Subsystem',
    description:
      'Led the electrical subsystem of a Formula SAE race car during my Automotive Engineering concentration at Tecnológico de Monterrey — the full electrical system, wiring and safety design, instrument panel, and sensor integration, plus diagnosing the carbureted engine and upgrading the cooling system.',
    highlights: [
      'Designed the car\u2019s full electrical system, safety system (e-stops, kill switches), and instrument panel, including its programming.',
      'Implemented sensors for temperature, oil pressure, RPM, speed, clutch, and brake light, and ran electrical load calculations.',
      'Diagnosed and fixed carburetion issues on the car\u2019s 1993 Honda CBR600 engine.',
      '3rd place at Formula SAE UANL (Monterrey, 2025); 1st place at ExpoIngenierías (2023–2025).',
    ],
    technologies: [
      'Electrical System Design',
      'Siemens NX / ANSYS',
      'Sensors & DAQ',
      'Field Troubleshooting',
    ],
  },
  {
    id: 'hunucma-kiln',
    number: '02',
    year: '2025',
    category: 'Manufacturing & Design',
    title: 'Hunucmá Rotary Kiln',
    description:
      'As Manufacturing Lead, I built a functional prototype of a four-chamber rotary-kiln incinerator proposed to help address solid waste in Hunucmá, Yucatán — combustion, post-combustion, cooling, and gas-filtering chambers.',
    highlights: [
      'Led manufacturing and integration of the full prototype: combustion, post-combustion, cooling, and gas-filtering chambers.',
      'Researched combustion behavior and designed, manufactured, and tested the burner.',
      'Ran an 18-run Design of Experiments (DOE) studying burner diameter, length, flow, and aperture on flame performance.',
      'Presented the project to the Hunucmá municipal government and an external CEMEX Yucatán engineer.',
    ],
    technologies: ['CAD & Manufacturing', 'Burner Design', 'DOE / ANOVA', 'Prototyping'],
  },
  {
    id: 'cemi-conveyor-safety',
    number: '03',
    year: '2025',
    category: 'Industrial Automation',
    title: 'Conveyor Safety System — Unilever',
    description:
      'At CEMI Automation, I worked on the safety upgrade for a conveyor network on a Knorr palletizing line at Unilever, from engineering and bidding through field implementation.',
    highlights: [
      'Surveyed the site, measured cable routes, and put together the BOM and bidding package.',
      'Installed Keyence sensors for interlocks, safety guards, and accumulation detection.',
      'Worked directly on the palletizing line for a major Unilever brand (Knorr).',
    ],
    technologies: ['Keyence Sensors', 'Safety Systems & Interlocks', 'BOM & Bidding', 'Field Installation'],
  },
]
