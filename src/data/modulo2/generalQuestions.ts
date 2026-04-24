export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  herramienta: string;
  competencia: string;
  peso: number;
  pregunta: string;
  opciones: QuizOption[];
  correctOptionId: string;
  retroalimentacion: string;
}

export const generalQuestions: QuizQuestion[] = [
  {
    id: 'W1',
    herramienta: 'Word / Docs',
    competencia: 'elección de herramienta y colaboración',
    peso: 2,
    pregunta:
      'Necesitas preparar una planeación con otra docente y ambas van a revisarla durante la semana, hacer cambios y dejar comentarios antes de la versión final. ¿Qué opción conviene más?',
    opciones: [
      { id: 'photo-message', text: 'Enviar una foto del documento por mensaje para que la otra persona opine' },
      { id: 'shared-editable-doc', text: 'Hacer el documento en Word o Docs y compartirlo para edición o revisión' },
      { id: 'slides-only', text: 'Escribir la planeación en una diapositiva para que ambas la vean' },
      { id: 'pdf-from-start', text: 'Convertirla desde el inicio a PDF para evitar cambios' },
    ],
    correctOptionId: 'shared-editable-doc',
    retroalimentacion:
      'Cuando el trabajo requiere edición conjunta y revisión, conviene usar un documento editable compartido, no una versión cerrada.',
  },
  {
    id: 'W2',
    herramienta: 'Word / Docs',
    competencia: 'cierre y distribución de documentos',
    peso: 1,
    pregunta:
      'Ya terminaste una circular escolar y quieres enviarla para que todas las personas la vean igual, sin que se desacomode el formato ni la modifiquen fácilmente. ¿Qué conviene hacer?',
    opciones: [
      { id: 'editable-file', text: 'Compartirla como archivo editable' },
      { id: 'screenshot', text: 'Enviarla como captura de pantalla' },
      { id: 'pdf-export', text: 'Exportarla o guardarla como PDF' },
      { id: 'message-body', text: 'Copiar el texto en el cuerpo de un mensaje largo' },
    ],
    correctOptionId: 'pdf-export',
    retroalimentacion:
      'El PDF es útil cuando el documento ya está finalizado y se quiere conservar su apariencia.',
  },
  {
    id: 'W4',
    herramienta: 'Word / Docs',
    competencia: 'elección adecuada entre documento y hoja de cálculo',
    peso: 1,
    pregunta:
      'Quieres hacer una lista de cotejo sencilla para imprimir y llenar a mano durante una sola exposición en clase. No necesitas cálculos automáticos ni seguimiento de varios grupos. ¿Qué opción conviene más?',
    opciones: [
      { id: 'doc-table', text: 'Una tabla en Word o Docs' },
      { id: 'sheet-formulas', text: 'Una hoja de cálculo con fórmulas' },
      { id: 'online-form', text: 'Un formulario en línea' },
      { id: 'slides-textboxes', text: 'Una presentación con cuadros de texto' },
    ],
    correctOptionId: 'doc-table',
    retroalimentacion:
      'Si la intención es imprimir y usarla manualmente en un momento puntual, un documento con tabla suele ser suficiente y más directo.',
  },
  {
    id: 'W6',
    herramienta: 'Word / Docs',
    competencia: 'estructura visual básica',
    peso: 1,
    pregunta:
      'Estás haciendo una rúbrica sencilla y quieres que los criterios y niveles se vean ordenados y fáciles de leer. ¿Qué conviene más?',
    opciones: [
      { id: 'inline-guiones', text: 'Escribir todo seguido y separar ideas con guiones improvisados' },
      { id: 'use-table', text: 'Usar una tabla para organizar criterios y niveles' },
      { id: 'different-colors', text: 'Escribir cada elemento en un color distinto' },
      { id: 'many-images', text: 'Insertar varias imágenes para distinguir cada criterio' },
    ],
    correctOptionId: 'use-table',
    retroalimentacion:
      'Para organizar información comparativa o por categorías, una tabla suele ser la opción más clara.',
  },
  {
    id: 'W9',
    herramienta: 'Word / Docs',
    competencia: 'reutilización eficiente',
    peso: 1,
    pregunta:
      'Cada mes haces casi el mismo formato de reporte, solo cambian algunos datos. ¿Qué práctica te ahorra más tiempo?',
    opciones: [
      { id: 'start-over', text: 'Empezar desde cero cada vez' },
      { id: 'use-template', text: 'Usar un documento base o plantilla y adaptarlo' },
      { id: 'photo-old-report', text: 'Tomarle foto al reporte anterior' },
      { id: 'presentation-format', text: 'Hacerlo en una presentación para cambiar colores' },
    ],
    correctOptionId: 'use-template',
    retroalimentacion:
      'Reutilizar una estructura base mejora eficiencia y mantiene uniformidad.',
  },
  {
    id: 'E1',
    herramienta: 'Excel / Sheets',
    competencia: 'elección de herramienta',
    peso: 2,
    pregunta:
      'Necesitas registrar asistencia de varios grupos durante varias semanas y además quieres obtener conteos o promedios sin hacer cuentas manuales. ¿Qué conviene más?',
    opciones: [
      { id: 'doc-text', text: 'Un documento de Word o Docs con texto corrido' },
      { id: 'spreadsheet', text: 'Una hoja de cálculo en Excel o Sheets' },
      { id: 'slides-group', text: 'Una presentación por cada grupo' },
      { id: 'pdf-first', text: 'Un archivo PDF desde el inicio' },
    ],
    correctOptionId: 'spreadsheet',
    retroalimentacion:
      'Cuando se requiere registrar, ordenar y calcular datos, una hoja de cálculo es la herramienta más adecuada.',
  },
  {
    id: 'E2',
    herramienta: 'Excel / Sheets',
    competencia: 'automatización básica',
    peso: 2,
    pregunta:
      'Tienes una columna con calificaciones y quieres que el promedio se actualice solo si cambias algún dato. ¿Qué conviene usar?',
    opciones: [
      { id: 'manual-average', text: 'Escribir el promedio manualmente cada vez' },
      { id: 'screenshot-calc', text: 'Hacer una captura y calcular fuera del archivo' },
      { id: 'average-formula', text: 'Usar una fórmula de promedio' },
      { id: 'move-to-doc', text: 'Pasar todo a Word para ordenar mejor' },
    ],
    correctOptionId: 'average-formula',
    retroalimentacion:
      'Una fórmula permite que el resultado cambie automáticamente cuando cambian los datos.',
  },
  {
    id: 'E5',
    herramienta: 'Excel / Sheets',
    competencia: 'filtrado de información',
    peso: 1,
    pregunta:
      'Tienes un registro completo de varios grupos y quieres ver solo a quienes no entregaron una actividad. ¿Qué conviene más?',
    opciones: [
      { id: 'delete-others', text: 'Borrar temporalmente a los demás estudiantes' },
      { id: 'sort-or-filter', text: 'Ordenar o filtrar la tabla para mostrar solo ese caso' },
      { id: 'convert-text-doc', text: 'Cambiar todo a un documento de texto' },
      { id: 'new-table', text: 'Hacer otra tabla desde cero' },
    ],
    correctOptionId: 'sort-or-filter',
    retroalimentacion:
      'Filtrar permite revisar una parte específica de la información sin destruir el registro completo.',
  },
  {
    id: 'E6',
    herramienta: 'Excel / Sheets',
    competencia: 'uso estratégico de hoja de cálculo en evaluación',
    peso: 2,
    pregunta:
      'Vas a usar una lista de cotejo para varios grupos durante todo el mes, y te interesa saber cuántos criterios cumple cada estudiante y comparar avances. ¿Qué opción conviene más?',
    opciones: [
      { id: 'doc-table-checklist', text: 'Una tabla en Word o Docs' },
      { id: 'sheet-criteria-count', text: 'Una hoja de cálculo con criterios por columnas y conteos automáticos' },
      { id: 'slide-per-student', text: 'Una presentación con una diapositiva por alumno' },
      { id: 'printed-pdf-only', text: 'Un PDF impreso sin registro digital' },
    ],
    correctOptionId: 'sheet-criteria-count',
    retroalimentacion:
      'Cuando habrá seguimiento, comparación y conteo, la hoja de cálculo ofrece mucho más valor que un documento estático.',
  },
  {
    id: 'E10',
    herramienta: 'Excel / Sheets',
    competencia: 'visualización básica',
    peso: 1,
    pregunta:
      'Quieres mostrar a coordinación un resumen simple del desempeño general de un grupo para que se entienda rápido. ¿Qué puede ayudar más además de la tabla?',
    opciones: [
      { id: 'simple-chart', text: 'Una gráfica sencilla basada en los datos' },
      { id: 'decorative-icons', text: 'Un fondo decorativo con íconos' },
      { id: 'more-paragraphs', text: 'Un documento con más párrafos' },
      { id: 'font-change', text: 'Un cambio de tipografía en las celdas' },
    ],
    correctOptionId: 'simple-chart',
    retroalimentacion:
      'Una gráfica bien elegida puede hacer más visible una tendencia general que una tabla sola.',
  },
  {
    id: 'P1',
    herramienta: 'Presentaciones',
    competencia: 'función real de una diapositiva',
    peso: 2,
    pregunta:
      'Estás preparando una clase y quieres que la presentación te ayude a explicar, no a leer diapositivas completas. ¿Qué decisión conviene más?',
    opciones: [
      { id: 'full-paragraphs', text: 'Llenar cada diapositiva con párrafos completos para no olvidar nada' },
      { id: 'key-ideas-visuals', text: 'Usar ideas clave, estructura clara y apoyo visual' },
      { id: 'tiny-text', text: 'Poner mucho texto pequeño para que quepa todo' },
      { id: 'repeat-everything', text: 'Repetir exactamente en la diapositiva todo lo que vas a decir' },
    ],
    correctOptionId: 'key-ideas-visuals',
    retroalimentacion:
      'Una buena presentación apoya la explicación; no reemplaza al docente con bloques largos de texto.',
  },
  {
    id: 'P2',
    herramienta: 'Presentaciones',
    competencia: 'legibilidad',
    peso: 1,
    pregunta:
      '¿Qué decisión mejora más la lectura de una diapositiva en el aula?',
    opciones: [
      { id: 'small-text-more-info', text: 'Usar texto pequeño para meter más información' },
      { id: 'contrast-readable', text: 'Usar buen contraste, poco texto y tamaño legible' },
      { id: 'image-behind-text', text: 'Colocar imágenes detrás del texto aunque lo tapen' },
      { id: 'many-fonts', text: 'Mezclar varias fuentes para hacerla más llamativa' },
    ],
    correctOptionId: 'contrast-readable',
    retroalimentacion:
      'La claridad visual y el contraste importan más que la decoración excesiva.',
  },
  {
    id: 'P4',
    herramienta: 'Presentaciones',
    competencia: 'estructura visual',
    peso: 1,
    pregunta:
      'Quieres explicar un proceso con cuatro pasos principales. ¿Qué recurso suele ayudar más?',
    opciones: [
      { id: 'long-paragraph', text: 'Un párrafo largo con todo seguido' },
      { id: 'ordered-sequence', text: 'Un esquema, secuencia o lista visual ordenada' },
      { id: 'decorative-image', text: 'Una imagen decorativa sin relación' },
      { id: 'busy-background', text: 'Un fondo con muchos elementos' },
    ],
    correctOptionId: 'ordered-sequence',
    retroalimentacion:
      'Los procesos se entienden mejor cuando se presentan de forma secuencial y visualmente ordenada.',
  },
  {
    id: 'P6',
    herramienta: 'Presentaciones',
    competencia: 'uso inteligente de plantillas',
    peso: 1,
    pregunta:
      'Necesitas preparar una presentación clara en poco tiempo y no quieres diseñar todo desde cero. ¿Qué conviene más?',
    opciones: [
      { id: 'adapt-template', text: 'Tomar una plantilla o diseño base y adaptarlo al contenido' },
      { id: 'from-scratch', text: 'Empezar completamente en blanco aunque te quite mucho tiempo' },
      { id: 'auto-decorate', text: 'Llenar la diapositiva de elementos decorativos automáticos' },
      { id: 'single-slide', text: 'Escribir todo en una sola diapositiva' },
    ],
    correctOptionId: 'adapt-template',
    retroalimentacion:
      'Las plantillas o diseños base bien elegidos ahorran tiempo y dan estructura.',
  },
  {
    id: 'P9',
    herramienta: 'Presentaciones',
    competencia: 'control del tiempo de exposición',
    peso: 1,
    pregunta:
      'Tienes 8 minutos para presentar y ya llevas 20 diapositivas con bastante texto. ¿Qué conviene más?',
    opciones: [
      { id: 'talk-faster', text: 'Dejar todo así y hablar más rápido' },
      { id: 'reduce-prioritize', text: 'Reducir, priorizar y hacer más clara la selección de contenidos' },
      { id: 'add-more-slides', text: 'Agregar aún más diapositivas para explicar mejor' },
      { id: 'smaller-text', text: 'Usar texto más pequeño para que quepa todo' },
    ],
    correctOptionId: 'reduce-prioritize',
    retroalimentacion:
      'Una buena presentación también considera el tiempo disponible y la capacidad real de atención.',
  },
  {
    id: 'F1',
    herramienta: 'Forms',
    competencia: 'elección de herramienta para evaluación automática',
    peso: 2,
    pregunta:
      'Quieres hacer un cuestionario breve que recopile respuestas automáticamente y, en algunos casos, pueda revisarse más rápido que a mano. ¿Qué conviene más?',
    opciones: [
      { id: 'online-form', text: 'Un formulario en línea' },
      { id: 'slides-quiz', text: 'Una presentación con diapositivas' },
      { id: 'photo-doc', text: 'Un documento de texto enviado por foto' },
      { id: 'word-table-no-send', text: 'Una tabla en Word sin envío automático' },
    ],
    correctOptionId: 'online-form',
    retroalimentacion:
      'Un formulario es especialmente útil cuando quieres recolectar respuestas de varias personas de manera organizada.',
  },
  {
    id: 'F2',
    herramienta: 'Forms',
    competencia: 'diseño funcional de formulario',
    peso: 1,
    pregunta:
      'Vas a crear un formulario para recopilar información básica de tus estudiantes. ¿Qué decisión mejora más la experiencia de quien responde?',
    opciones: [
      { id: 'ask-too-much', text: 'Pedir muchos datos aunque no sean necesarios' },
      { id: 'clear-useful-questions', text: 'Hacer preguntas claras y solo solicitar información útil' },
      { id: 'long-confusing', text: 'Poner preguntas largas y confusas' },
      { id: 'mixed-without-order', text: 'Mezclar temas sin ningún orden' },
    ],
    correctOptionId: 'clear-useful-questions',
    retroalimentacion:
      'Un formulario claro y breve suele obtener mejores respuestas y menos errores.',
  },
  {
    id: 'F3',
    herramienta: 'Forms',
    competencia: 'control de información obligatoria',
    peso: 1,
    pregunta:
      'Hay datos que sí o sí necesitas recibir, como nombre o grupo. ¿Qué conviene hacer?',
    opciones: [
      { id: 'hope-they-remember', text: 'Esperar que la persona recuerde escribirlos' },
      { id: 'mark-required', text: 'Marcar esos campos como obligatorios' },
      { id: 'put-in-title', text: 'Ponerlos solo en el título' },
      { id: 'remove-fields', text: 'Quitarlos para que el formulario sea más corto' },
    ],
    correctOptionId: 'mark-required',
    retroalimentacion:
      'Definir campos obligatorios ayuda a que no falte información esencial.',
  },
  {
    id: 'F4',
    herramienta: 'Forms',
    competencia: 'organización posterior de respuestas',
    peso: 1,
    pregunta:
      'Quieres revisar las respuestas de muchas personas sin copiar y pegar una por una. ¿Qué conviene más?',
    opciones: [
      { id: 'chat-only', text: 'Recibirlas solo por chat' },
      { id: 'auto-organized-form-sheet', text: 'Tenerlas concentradas automáticamente en el formulario y, si hace falta, en una hoja de cálculo vinculada' },
      { id: 'send-screenshots', text: 'Pedir que envíen capturas' },
      { id: 'print-before-use', text: 'Imprimir el formulario antes de usarlo' },
    ],
    correctOptionId: 'auto-organized-form-sheet',
    retroalimentacion:
      'Concentrar respuestas automáticamente facilita consulta, seguimiento y análisis posterior.',
  },
  {
    id: 'F5',
    herramienta: 'Forms',
    competencia: 'selección de tipo de pregunta',
    peso: 1,
    pregunta:
      'Si necesitas que una persona elija solo una opción entre varias respuestas posibles, ¿qué tipo de pregunta conviene más?',
    opciones: [
      { id: 'long-open-answer', text: 'Respuesta abierta larga' },
      { id: 'separate-unrelated', text: 'Varias preguntas separadas sin relación' },
      { id: 'single-choice', text: 'Opción única entre alternativas' },
      { id: 'file-upload', text: 'Subir un archivo' },
    ],
    correctOptionId: 'single-choice',
    retroalimentacion:
      'Cuando la respuesta debe ser una sola entre varias alternativas, conviene un formato cerrado y claro.',
  },
];

export default generalQuestions;