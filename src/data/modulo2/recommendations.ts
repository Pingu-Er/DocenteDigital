export interface RecommendationItem {
  id: string;
  tool: string;
  title: string;
  description?: string;
  href?: string;
  label?: string;
  level?: 'refuerzo' | 'practica' | 'mejora';
  section?: 'general' | 'technical' | 'both';
}

export const recommendations: RecommendationItem[] = [
  {
    id: 'word-refuerzo-1',
    tool: 'word',
    title: 'Documentos claros y ordenados en Word o Docs',
    description:
      'Recurso recomendado para reforzar estructura básica, tablas, formato consistente y organización de documentos de trabajo docente.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'both',
  },
  {
    id: 'word-refuerzo-2',
    tool: 'word',
    title: 'Formato de texto, alineación, sangrías e imágenes',
    description:
      'Útil para practicar aspectos técnicos frecuentes como negritas, subrayado, alineaciones, sangrías y ajuste de imágenes dentro del documento.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'technical',
  },
  {
    id: 'word-mejora-1',
    tool: 'word',
    title: 'Plantillas, comentarios y revisión de documentos',
    description:
      'Recurso para mejorar la colaboración, reutilizar formatos y revisar documentos de forma más eficiente.',
    href: '#',
    label: 'Ver recurso',
    level: 'mejora',
    section: 'general',
  },

  {
    id: 'excel-refuerzo-1',
    tool: 'excel',
    title: 'Excel o Sheets para asistencia, listas y seguimiento',
    description:
      'Ayuda a reforzar el uso práctico de hojas de cálculo para asistencia, listas de cotejo, promedios y seguimiento de grupos.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'general',
  },
  {
    id: 'excel-refuerzo-2',
    tool: 'excel',
    title: 'Fórmulas básicas, filtros y ordenamiento',
    description:
      'Recurso recomendado para practicar funciones frecuentes como suma, promedio, filtros, ordenamiento y estructura correcta de tablas.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'technical',
  },
  {
    id: 'excel-mejora-1',
    tool: 'excel',
    title: 'Gráficas simples y visualización de datos',
    description:
      'Útil para mejorar la presentación clara de resultados, resúmenes y tendencias a partir de tablas escolares.',
    href: '#',
    label: 'Ver recurso',
    level: 'mejora',
    section: 'both',
  },

  {
    id: 'presentaciones-refuerzo-1',
    tool: 'presentaciones',
    title: 'Presentaciones claras para clase',
    description:
      'Recurso para reforzar decisiones básicas de legibilidad, estructura visual, tiempo de exposición y apoyo visual efectivo.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'general',
  },
  {
    id: 'presentaciones-refuerzo-2',
    tool: 'presentaciones',
    title: 'Animaciones, transiciones y manejo básico de diapositivas',
    description:
      'Útil para practicar acciones técnicas como duplicar diapositivas, insertar imágenes y distinguir entre animaciones y transiciones.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'technical',
  },
  {
    id: 'presentaciones-mejora-1',
    tool: 'presentaciones',
    title: 'Diseño base, plantillas y organización visual',
    description:
      'Recurso recomendado para mejorar coherencia visual y ahorrar tiempo al construir materiales didácticos.',
    href: '#',
    label: 'Ver recurso',
    level: 'mejora',
    section: 'both',
  },

  {
    id: 'forms-refuerzo-1',
    tool: 'forms',
    title: 'Forms para recopilar respuestas de manera ordenada',
    description:
      'Recurso para reforzar el uso práctico de formularios en cuestionarios, registros y recopilación de información escolar.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'general',
  },
  {
    id: 'forms-refuerzo-2',
    tool: 'forms',
    title: 'Tipos de pregunta, campos obligatorios y respuestas',
    description:
      'Útil para practicar configuración técnica básica de formularios y organizar mejor la información recibida.',
    href: '#',
    label: 'Ver recurso',
    level: 'refuerzo',
    section: 'technical',
  },
  {
    id: 'forms-mejora-1',
    tool: 'forms',
    title: 'Buenas prácticas para formularios claros y breves',
    description:
      'Recurso recomendado para mejorar la experiencia de respuesta y pedir solo información realmente útil.',
    href: '#',
    label: 'Ver recurso',
    level: 'mejora',
    section: 'both',
  },
];

export default recommendations;