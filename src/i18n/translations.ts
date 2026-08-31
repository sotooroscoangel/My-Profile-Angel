export type Language = 'en' | 'es'

export interface ProjectText {
  category: string
  title: string
  description: string
  highlights: string[]
}

export interface ExperienceEntry {
  date: string
  role: string
  company: string
  description: string
  highlights: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface EducationEntry {
  school: string
  period: string
  degree: string
  detail: string
}

export interface AchievementEntry {
  value: string
  label: string
  description: string
}

export interface Translation {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    education: string
    work: string
    experience: string
    skills: string
    contact: string
    resume: string
  }
  hero: {
    eyebrow: string
    intro: string
    roles: string[]
    primaryButton: string
    secondaryButton: string
    scroll: string
  }
  about: {
    eyebrow: string
    title: string[]
    paragraphs: string[]
    focusLabel: string
    focusValue: string
    interestsLabel: string
    interestsValue: string
    locationLabel: string
    locationValue: string
  }
  education: {
    eyebrow: string
    title: string[]
    items: EducationEntry[]
  }
  achievements: {
    eyebrow: string
    title: string[]
    items: AchievementEntry[]
  }
  projects: {
    eyebrow: string
    title: string
    previewLabel: string
    highlightsLabel: string
    items: Record<string, ProjectText>
  }
  experience: {
    eyebrow: string
    title: string
    items: ExperienceEntry[]
  }
  skills: {
    eyebrow: string
    title: string[]
    groups: SkillGroup[]
    brandsLabel: string
  }
  beyond: {
    eyebrow: string
    title: string[]
    description: string
  }
  contact: {
    eyebrow: string
    title: string[]
    description: string
    linkedinLabel: string
  }
  footer: {
    links: {
      about: string
      work: string
      experience: string
      skills: string
      contact: string
    }
    backToTop: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    meta: {
      title: 'Ángel Gabriel Soto Orosco — Mechatronics Engineer',
      description:
        'Portfolio of Ángel Gabriel Soto Orosco, a Mechatronics Engineer specializing in industrial automation and field engineering.',
    },
    nav: {
      about: 'About',
      education: 'Education',
      work: 'Work',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      eyebrow: "HELLO, I'M",
      intro: 'I am a',
      roles: [
        'Mechatronics Engineer',
        'Volleyball Player',
        'Guitarist',
        'Novelist',
        'Web Developer',
      ],
      primaryButton: 'View my work',
      secondaryButton: 'Contact me',
      scroll: 'SCROLL',
    },
    about: {
      eyebrow: '02 / ABOUT',
      title: ['A little bit', 'about me.'],
      paragraphs: [
        "I'm a Mechatronics Engineer from Tecnológico de Monterrey, Campus Toluca (2021–2025, Líderes del Mañana Scholarship, Automotive Engineering concentration). My background sits at the intersection of mechanical design, electrical power, instrumentation, control systems, and industrial automation — I like turning engineering problems into systems that actually work in the field.",
        'That combination has taken me from leading the electrical subsystem of a Formula SAE race car to installing and commissioning industrial automation, power, and safety systems on real production lines. I move comfortably from CAD and circuit design to conduit, panels, and troubleshooting on-site.',
      ],
      focusLabel: 'FOCUS',
      focusValue: 'Industrial Automation & Field Engineering',
      interestsLabel: 'INTERESTS',
      interestsValue: 'Predictive Maintenance & Asset Reliability',
      locationLabel: 'LOCATION',
      locationValue: 'Mexico',
    },
    education: {
      eyebrow: '03 / EDUCATION',
      title: ['Education'],
      items: [
        {
          school: 'Tecnológico de Monterrey, Campus Toluca',
          period: '2021 – 2025',
          degree: 'Mechatronics Engineering',
          detail: 'Líderes del Mañana Scholarship — Automotive Engineering concentration',
        },
        {
          school: 'CETis No. 94',
          period: '2018 – 2021',
          degree: 'Technical Baccalaureate',
          detail: 'Computer Equipment Support & Maintenance Technician',
        },
      ],
    },
    achievements: {
      eyebrow: '04 / ACHIEVEMENTS',
      title: ['Achievements'],
      items: [
        { value: '3rd', label: 'Formula SAE UANL', description: 'Monterrey, NL — 2025' },
        { value: '1st ×3', label: 'ExpoIngenierías — ITESM Toluca', description: '2023, 2024 & 2025' },
        { value: '1st', label: 'Presea "Miguel de Cervantes"', description: 'State oratory competition — 2018' },
        { value: '✓', label: 'CEMI Engineering Recognition', description: 'For quality of field work' },
      ],
    },
    projects: {
      eyebrow: '05 / WORK',
      title: 'Selected Projects',
      previewLabel: 'PROJECT PREVIEW',
      highlightsLabel: 'HIGHLIGHTS',
      items: {
        'formula-sae': {
          category: 'Automotive Engineering',
          title: 'Formula SAE — Electrical Subsystem',
          description:
            'Led the electrical subsystem of a Formula SAE race car during my Automotive Engineering concentration at Tecnológico de Monterrey — the full electrical system, wiring and safety design, instrument panel, and sensor integration, plus diagnosing the carbureted engine and upgrading the cooling system.',
          highlights: [
            "Designed the car's full electrical system, safety system (e-stops, kill switches), and instrument panel, including its programming.",
            'Implemented sensors for temperature, oil pressure, RPM, speed, clutch, and brake light, and ran electrical load calculations.',
            "Diagnosed and fixed carburetion issues on the car's 1993 Honda CBR600 engine.",
            '3rd place at Formula SAE UANL (Monterrey, 2025); 1st place at ExpoIngenierías (2023–2025).',
          ],
        },
        'hunucma-kiln': {
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
        },
        'cemi-conveyor-safety': {
          category: 'Industrial Automation',
          title: 'Conveyor Safety System — Unilever',
          description:
            'At CEMI Automation, I worked on the safety upgrade for a conveyor network on a Knorr palletizing line at Unilever, from engineering and bidding through field implementation.',
          highlights: [
            'Surveyed the site, measured cable routes, and put together the BOM and bidding package.',
            'Installed Keyence sensors for interlocks, safety guards, and accumulation detection.',
            'Worked directly on the palletizing line for a major Unilever brand (Knorr).',
          ],
        },
      },
    },
    experience: {
      eyebrow: '06 / EXPERIENCE',
      title: 'Experience',
      items: [
        {
          date: 'FEB 2025 — PRESENT',
          role: 'Automation Engineer',
          company: 'CEMI Automation',
          description:
            'Industrial automation and electrical field engineering for machinery and power systems in the food industry — installation, integration, and commissioning across live production plants (Unilever, Cremería Americana, Flora Food). Started as an intern in February 2025, promoted to engineer in February 2026.',
          highlights: [
            'Installed and wired power, control, and safety panels — conduit, VFDs, PLCs, and industrial sensors (127V/220V/440V).',
            'Led the field implementation of a conveyor-belt safety system (Keyence interlocks, guards, accumulation sensors) on a Knorr line at Unilever.',
            'Handled projects end-to-end — site surveys, BOMs, and CAPEX quotations/bidding — through installation and start-up.',
            "Field troubleshooting across Allen-Bradley, Siemens, Mitsubishi, and Omron platforms; recognized by CEMI's Engineering department.",
          ],
        },
        {
          date: 'AUG 2024 — DEC 2024',
          role: 'Automotive Electronics Engineer',
          company: 'ITESM · General Motors — Formula SAE',
          description:
            'Led the electrical subsystem of a Formula SAE race car — an 18-week program spanning design, manufacturing, integration, and validation (Siemens NX, ANSYS).',
          highlights: [
            "Designed the car's full electrical system — wiring diagrams, distribution, fuse box, and harness routing.",
            'Built the safety system (e-stops, kill switches, start-up interlocks) and programmed the instrument panel.',
            'Implemented sensors (temperature, oil pressure, RPM, speed, clutch, brake light) and ran electrical load calculations.',
            "Diagnosed and fixed carburetion issues on the car's 1993 Honda CBR600 engine — 3rd place at Formula SAE UANL 2025; 1st place at ExpoIngenierías (2023–2025).",
          ],
        },
      ],
    },
    skills: {
      eyebrow: '07 / SKILLS',
      title: ['Skills &', 'Technologies'],
      groups: [
        {
          title: 'Automation & Field',
          items: [
            'PLCs — Allen-Bradley, Siemens, Mitsubishi, Omron',
            'VFDs & Industrial Instrumentation',
            'Power, Control & Safety Panels',
            'Keyence Sensors',
          ],
        },
        {
          title: 'Design & Simulation',
          items: ['Siemens NX / NX Electrical', 'ANSYS', 'SolidWorks', 'CAD / CAE'],
        },
        {
          title: 'Programming & Data',
          items: [
            'Python',
            'C++',
            'Web Development — React, TypeScript',
            'Microsoft Office — Word, Excel, PowerPoint',
            'Minitab & R (basic)',
          ],
        },
        {
          title: 'Engineering & Delivery',
          items: [
            'BOM, Quotations & CAPEX',
            'FMEA / DOE / ANOVA',
            'Industrial Networks (Modbus, PROFINET/PROFIBUS, AS-i, SCADA) — working knowledge',
            'SCRUM / JIRA',
          ],
        },
      ],
      brandsLabel: 'Equipment & Brands',
    },
    beyond: {
      eyebrow: '08 / BEYOND ENGINEERING',
      title: ['Beyond the', 'workshop.'],
      description:
        "When I'm not in the field or at the CAD screen, I'm usually on a volleyball court, playing guitar, writing fiction, or building things like this website.",
    },
    contact: {
      eyebrow: '09 / CONTACT',
      title: ["Let's work", 'together.'],
      description: 'Interested in working together or learning more about my work? Get in touch.',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      links: {
        about: 'About',
        work: 'Work',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
      },
      backToTop: 'Back to top',
    },
  },

  es: {
    meta: {
      title: 'Ángel Gabriel Soto Orosco — Ingeniero Mecatrónico',
      description:
        'Portafolio de Ángel Gabriel Soto Orosco, Ingeniero Mecatrónico especializado en automatización industrial e ingeniería de campo.',
    },
    nav: {
      about: 'Sobre mí',
      education: 'Educación',
      work: 'Trabajo',
      experience: 'Experiencia',
      skills: 'Habilidades',
      contact: 'Contacto',
      resume: 'CV',
    },
    hero: {
      eyebrow: 'HOLA, SOY',
      intro: 'Soy',
      roles: [
        'Ingeniero Mecatrónico',
        'Jugador de Voleibol',
        'Guitarrista',
        'Novelista',
        'Desarrollador Web',
      ],
      primaryButton: 'Ver mi trabajo',
      secondaryButton: 'Contáctame',
      scroll: 'DESLIZA',
    },
    about: {
      eyebrow: '02 / SOBRE MÍ',
      title: ['Un poco', 'sobre mí.'],
      paragraphs: [
        'Soy Ingeniero Mecatrónico egresado del Tecnológico de Monterrey, Campus Toluca (2021–2025, Beca Líderes del Mañana, especialidad en Ingeniería Automotriz). Mi formación combina diseño mecánico, fuerza eléctrica, instrumentación, sistemas de control y automatización industrial — me gusta convertir problemas de ingeniería en sistemas que realmente funcionan en campo.',
        'Esa combinación me ha llevado desde liderar el subsistema eléctrico de un auto de Fórmula SAE hasta instalar y poner en marcha sistemas de automatización, fuerza y seguridad industrial en líneas de producción reales. Me muevo con la misma soltura entre el CAD y el diseño de circuitos que entre tubería conduit, tableros y diagnóstico en campo.',
      ],
      focusLabel: 'ENFOQUE',
      focusValue: 'Automatización Industrial e Ingeniería de Campo',
      interestsLabel: 'INTERESES',
      interestsValue: 'Mantenimiento Predictivo y Confiabilidad de Activos',
      locationLabel: 'UBICACIÓN',
      locationValue: 'México',
    },
    education: {
      eyebrow: '03 / EDUCACIÓN',
      title: ['Educación'],
      items: [
        {
          school: 'Tecnológico de Monterrey, Campus Toluca',
          period: '2021 – 2025',
          degree: 'Ingeniería en Mecatrónica',
          detail: 'Beca Líderes del Mañana — Especialidad en Ingeniería Automotriz',
        },
        {
          school: 'CETis No. 94',
          period: '2018 – 2021',
          degree: 'Bachillerato Tecnológico',
          detail: 'Técnico en Soporte y Mantenimiento de Equipo de Cómputo',
        },
      ],
    },
    achievements: {
      eyebrow: '04 / LOGROS',
      title: ['Logros'],
      items: [
        { value: '3er', label: 'Fórmula SAE UANL', description: 'Monterrey, NL — 2025' },
        { value: '1er ×3', label: 'ExpoIngenierías — ITESM Toluca', description: '2023, 2024 y 2025' },
        { value: '1er', label: 'Presea "Miguel de Cervantes"', description: 'Concurso estatal de oratoria — 2018' },
        { value: '✓', label: 'Reconocimiento de CEMI', description: 'Del departamento de Ingeniería, por calidad de trabajo' },
      ],
    },
    projects: {
      eyebrow: '05 / TRABAJO',
      title: 'Proyectos Seleccionados',
      previewLabel: 'VISTA PREVIA',
      highlightsLabel: 'DESTACADOS',
      items: {
        'formula-sae': {
          category: 'Ingeniería Automotriz',
          title: 'Fórmula SAE — Subsistema Eléctrico',
          description:
            'Lideré el subsistema eléctrico de un auto de Fórmula SAE durante mi especialidad en Ingeniería Automotriz en el Tecnológico de Monterrey — el sistema eléctrico completo, diseño de seguridad y cableado, tablero de instrumentos e integración de sensores, además de diagnosticar el motor carburado y mejorar el sistema de enfriamiento.',
          highlights: [
            'Diseñé el sistema eléctrico completo del auto, el sistema de seguridad (paros de emergencia, kill switches) y el tablero de instrumentos, incluyendo su programación.',
            'Implementé sensores de temperatura, presión de aceite, RPM, velocidad, clutch y luz de freno, y realicé los cálculos de carga eléctrica.',
            'Diagnostiqué y resolví problemas de carburación en el motor Honda CBR600 de 1993 del auto.',
            '3er lugar en Fórmula SAE UANL (Monterrey, 2025); 1er lugar en ExpoIngenierías (2023–2025).',
          ],
        },
        'hunucma-kiln': {
          category: 'Manufactura y Diseño',
          title: 'Horno Rotatorio de Hunucmá',
          description:
            'Como Líder de Manufactura, construí un prototipo funcional de un incinerador tipo horno rotatorio de cuatro cámaras, propuesto para atender el problema de residuos sólidos en Hunucmá, Yucatán — cámaras de combustión, postcombustión, enfriamiento y filtrado de gases.',
          highlights: [
            'Lideré la manufactura e integración del prototipo completo: cámaras de combustión, postcombustión, enfriamiento y filtrado de gases.',
            'Investigué el comportamiento de la combustión y diseñé, fabriqué y probé el quemador.',
            'Realicé un DOE de 18 experimentos estudiando diámetro, longitud, flujo y apertura del quemador sobre el comportamiento de la llama.',
            'Presenté el proyecto ante el Gobierno Municipal de Hunucmá y un ingeniero externo de CEMEX Yucatán.',
          ],
        },
        'cemi-conveyor-safety': {
          category: 'Automatización Industrial',
          title: 'Sistema de Seguridad de Bandas — Unilever',
          description:
            'En CEMI Automation, trabajé en la actualización de seguridad de una red de bandas transportadoras en una línea de paletizado de Knorr en Unilever, desde ingeniería y licitación hasta implementación en campo.',
          highlights: [
            'Levantamiento del sitio, medición de trayectorias de cable, y elaboración del BOM y paquete de licitación.',
            'Instalé sensores Keyence para interlocks, guardas de seguridad y detección de acumulación.',
            'Trabajé directamente en la línea de paletizado de una marca importante de Unilever (Knorr).',
          ],
        },
      },
    },
    experience: {
      eyebrow: '06 / EXPERIENCIA',
      title: 'Experiencia',
      items: [
        {
          date: 'FEB 2025 — PRESENTE',
          role: 'Ingeniero de Automatización',
          company: 'CEMI Automation',
          description:
            'Automatización industrial e ingeniería eléctrica de campo para maquinaria y sistemas de fuerza en la industria alimenticia — instalación, integración y puesta en marcha en plantas de producción reales (Unilever, Cremería Americana, Flora Food). Empecé como becario en febrero de 2025 y fui contratado como ingeniero en febrero de 2026.',
          highlights: [
            'Instalé y cableé tableros de fuerza, control y seguridad — conduit, VFDs, PLCs y sensores industriales (127V/220V/440V).',
            'Lideré la implementación en campo de un sistema de seguridad de bandas transportadoras (interlocks Keyence, guardas, sensores de acumulación) en una línea Knorr de Unilever.',
            'Manejé proyectos de principio a fin — levantamientos, BOMs y cotizaciones/licitaciones CAPEX — hasta instalación y arranque.',
            'Diagnóstico en campo en plataformas Allen-Bradley, Siemens, Mitsubishi y Omron; reconocido por el departamento de Ingeniería de CEMI.',
          ],
        },
        {
          date: 'AGO 2024 — DIC 2024',
          role: 'Ingeniero en Electrónica Automotriz',
          company: 'ITESM · General Motors — Fórmula SAE',
          description:
            'Lideré el subsistema eléctrico de un auto de Fórmula SAE — un programa de 18 semanas que abarcó diseño, manufactura, integración y validación (Siemens NX, ANSYS).',
          highlights: [
            'Diseñé el sistema eléctrico completo del auto — diagramas de cableado, distribución, caja de fusibles y ruteo de arneses.',
            'Construí el sistema de seguridad (paros de emergencia, kill switches, interlocks de arranque) y programé el tablero de instrumentos.',
            'Implementé sensores (temperatura, presión de aceite, RPM, velocidad, clutch, luz de freno) y realicé cálculos de carga eléctrica.',
            'Diagnostiqué y resolví problemas de carburación en el motor Honda CBR600 de 1993 del auto — 3er lugar en Fórmula SAE UANL 2025; 1er lugar en ExpoIngenierías (2023–2025).',
          ],
        },
      ],
    },
    skills: {
      eyebrow: '07 / HABILIDADES',
      title: ['Habilidades y', 'Tecnologías'],
      groups: [
        {
          title: 'Automatización y Campo',
          items: [
            'PLCs — Allen-Bradley, Siemens, Mitsubishi, Omron',
            'VFDs e Instrumentación Industrial',
            'Tableros de Fuerza, Control y Seguridad',
            'Sensores Keyence',
          ],
        },
        {
          title: 'Diseño y Simulación',
          items: ['Siemens NX / NX Electrical', 'ANSYS', 'SolidWorks', 'CAD / CAE'],
        },
        {
          title: 'Programación y Datos',
          items: [
            'Python',
            'C++',
            'Desarrollo Web — React, TypeScript',
            'Microsoft Office — Word, Excel, PowerPoint',
            'Minitab y R (básico)',
          ],
        },
        {
          title: 'Ingeniería y Entrega',
          items: [
            'BOM, Cotizaciones y CAPEX',
            'FMEA / DOE / ANOVA',
            'Redes Industriales (Modbus, PROFINET/PROFIBUS, AS-i, SCADA) — conocimiento práctico',
            'SCRUM / JIRA',
          ],
        },
      ],
      brandsLabel: 'Equipos y Marcas',
    },
    beyond: {
      eyebrow: '08 / MÁS ALLÁ DE LA INGENIERÍA',
      title: ['Más allá', 'del taller.'],
      description:
        'Cuando no estoy en campo o frente al CAD, normalmente ando en una cancha de voleibol, tocando guitarra, escribiendo ficción, o construyendo cosas como este sitio web.',
    },
    contact: {
      eyebrow: '09 / CONTACTO',
      title: ['Trabajemos', 'juntos.'],
      description: '¿Interesado en trabajar juntos o conocer más sobre mi trabajo? Escríbeme.',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      links: {
        about: 'Sobre mí',
        work: 'Trabajo',
        experience: 'Experiencia',
        skills: 'Habilidades',
        contact: 'Contacto',
      },
      backToTop: 'Volver arriba',
    },
  },
}
