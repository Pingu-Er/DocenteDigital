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

export const technicalQuestions: QuizQuestion[] = [
  {
    id: 'WT1',
    herramienta: 'Word / Docs',
    competencia: 'formato básico de énfasis',
    peso: 1,
    pregunta:
      'En Word o Docs, si quieres resaltar una palabra importante sin cambiar su posición ni agregar elementos extra al documento, ¿qué formato es el más directo?',
    opciones: [
      { id: 'bold', text: 'Negritas' },
      { id: 'insert-table', text: 'Insertar una tabla' },
      { id: 'page-break', text: 'Agregar salto de página' },
      { id: 'change-margin', text: 'Cambiar el margen' },
    ],
    correctOptionId: 'bold',
    retroalimentacion:
      'Las negritas permiten destacar palabras o frases sin alterar la estructura del documento.',
  },
  {
    id: 'WT2',
    herramienta: 'Word / Docs',
    competencia: 'subrayado y formato de fuente',
    peso: 1,
    pregunta:
      'En Word o Docs, si quieres marcar una palabra o frase con una línea debajo del texto, ¿qué opción de formato corresponde?',
    opciones: [
      { id: 'underline', text: 'Subrayado' },
      { id: 'indent', text: 'Sangría' },
      { id: 'line-spacing', text: 'Interlineado' },
      { id: 'justify', text: 'Alineación justificada' },
    ],
    correctOptionId: 'underline',
    retroalimentacion:
      'El subrayado es un formato de fuente que coloca una línea debajo del texto seleccionado.',
  },
  {
    id: 'WT3',
    herramienta: 'Word / Docs',
    competencia: 'alineación de texto',
    peso: 2,
    pregunta:
      'En Word o Docs, si estás redactando un documento formal y quieres que el texto quede alineado de manera uniforme en ambos márgenes, ¿qué alineación corresponde mejor?',
    opciones: [
      { id: 'center', text: 'Centrada' },
      { id: 'justify', text: 'Justificada' },
      { id: 'right', text: 'A la derecha' },
      { id: 'dispersed', text: 'Dispersa' },
    ],
    correctOptionId: 'justify',
    retroalimentacion:
      'La alineación justificada distribuye el texto para que quede parejo en ambos márgenes, algo común en documentos formales.',
  },
  {
    id: 'WT4',
    herramienta: 'Word / Docs',
    competencia: 'sangría de párrafo',
    peso: 2,
    pregunta:
      'En Word o Docs, si quieres que la primera línea de un párrafo comience un poco más adentro que las demás, ¿qué ajuste conviene usar?',
    opciones: [
      { id: 'first-line-indent', text: 'Sangría de primera línea' },
      { id: 'double-underline', text: 'Subrayado doble' },
      { id: 'header', text: 'Encabezado de página' },
      { id: 'comment', text: 'Comentario lateral' },
    ],
    correctOptionId: 'first-line-indent',
    retroalimentacion:
      'La sangría de primera línea se usa para desplazar solo el inicio del párrafo y dar estructura visual al texto.',
  },
  {
    id: 'WT5',
    herramienta: 'Word / Docs',
    competencia: 'inserción de tablas',
    peso: 2,
    pregunta:
      'En Word o Docs, necesitas organizar criterios y niveles en filas y columnas dentro de una rúbrica. ¿Qué acción técnica corresponde mejor?',
    opciones: [
      { id: 'insert-table', text: 'Insertar una tabla' },
      { id: 'use-spaces', text: 'Escribir todo con espacios' },
      { id: 'page-background', text: 'Cambiar el color de fondo de la página' },
      { id: 'transition', text: 'Aplicar una transición' },
    ],
    correctOptionId: 'insert-table',
    retroalimentacion:
      'Las tablas son la forma correcta de organizar información por filas y columnas en un documento.',
  },
  {
    id: 'WT6',
    herramienta: 'Word / Docs',
    competencia: 'inserción de imagen',
    peso: 1,
    pregunta:
      'En Word o Docs, si quieres agregar una imagen dentro de un documento, ¿qué acción técnica corresponde?',
    opciones: [
      { id: 'insert-image', text: 'Insertar imagen' },
      { id: 'merge-cells', text: 'Combinar celdas' },
      { id: 'apply-filter', text: 'Aplicar filtro' },
      { id: 'activate-formula', text: 'Activar fórmula' },
    ],
    correctOptionId: 'insert-image',
    retroalimentacion:
      'Para añadir una imagen a un documento, la acción técnica directa es insertarla en el archivo.',
  },
  {
    id: 'WT7',
    herramienta: 'Word / Docs',
    competencia: 'ajuste de texto alrededor de una imagen',
    peso: 2,
    pregunta:
      'En Word o Docs, insertaste una imagen en un documento, pero quieres moverla con más libertad y evitar que quede rígidamente atrapada dentro del texto. ¿Qué ajuste técnico te ayuda más?',
    opciones: [
      { id: 'text-wrap', text: 'Cambiar el ajuste de texto de la imagen' },
      { id: 'increase-font-size', text: 'Aumentar el tamaño de la fuente' },
      { id: 'justify-all', text: 'Justificar todo el documento' },
      { id: 'change-line-spacing', text: 'Cambiar el interlineado' },
    ],
    correctOptionId: 'text-wrap',
    retroalimentacion:
      'El ajuste de texto permite modificar la relación entre la imagen y los párrafos, facilitando moverla y acomodarla mejor.',
  },
  {
    id: 'WT8',
    herramienta: 'Word / Docs',
    competencia: 'comentarios y revisión',
    peso: 1,
    pregunta:
      'En Word o Docs, si quieres dejar una observación sobre un fragmento sin modificar directamente el contenido principal, ¿qué herramienta conviene usar?',
    opciones: [
      { id: 'comment', text: 'Comentario' },
      { id: 'table', text: 'Tabla' },
      { id: 'footer', text: 'Pie de página' },
      { id: 'bullet', text: 'Viñeta' },
    ],
    correctOptionId: 'comment',
    retroalimentacion:
      'Los comentarios permiten señalar partes específicas del documento y hacer observaciones sin alterar el texto final.',
  },
  {
    id: 'WT9',
    herramienta: 'Word / Docs',
    competencia: 'conservación del formato al compartir',
    peso: 1,
    pregunta:
      'En Word o Docs, ya terminaste un documento y quieres enviarlo para que conserve su apariencia al abrirse en otros equipos. ¿Qué acción técnica conviene más?',
    opciones: [
      { id: 'export-pdf', text: 'Exportarlo o guardarlo como PDF' },
      { id: 'move-to-slide', text: 'Pasarlo a una diapositiva' },
      { id: 'send-screenshot', text: 'Enviarlo como captura de pantalla' },
      { id: 'uppercase-titles', text: 'Cambiar todos los títulos a mayúsculas' },
    ],
    correctOptionId: 'export-pdf',
    retroalimentacion:
      'El PDF es una forma práctica de compartir un documento final sin que se altere fácilmente su formato.',
  },
  {
    id: 'WT10',
    herramienta: 'Word / Docs',
    competencia: 'organización con listas',
    peso: 1,
    pregunta:
      'En Word o Docs, si quieres presentar varios puntos o pasos de forma ordenada y fácil de leer dentro de un documento, ¿qué herramienta técnica conviene usar?',
    opciones: [
      { id: 'bullets-numbering', text: 'Viñetas o numeración' },
      { id: 'comments', text: 'Comentarios' },
      { id: 'narrow-margins', text: 'Márgenes estrechos' },
      { id: 'repeated-page-breaks', text: 'Saltos de página repetidos' },
    ],
    correctOptionId: 'bullets-numbering',
    retroalimentacion:
      'Las listas con viñetas o numeración ayudan a estructurar ideas y secuencias de manera clara.',
  },

  {
    id: 'ET1',
    herramienta: 'Excel / Sheets',
    competencia: 'reconocimiento de fórmula',
    peso: 2,
    pregunta:
      'En Excel o Sheets, si una celda contiene =PROMEDIO(B2:B6), ¿qué hará esa fórmula?',
    opciones: [
      { id: 'count-cells', text: 'Contará cuántas celdas hay entre B2 y B6' },
      { id: 'calculate-average', text: 'Calculará el promedio de los valores entre B2 y B6' },
      { id: 'sort-data', text: 'Ordenará automáticamente los datos' },
      { id: 'change-cell-color', text: 'Cambiará el color de las celdas' },
    ],
    correctOptionId: 'calculate-average',
    retroalimentacion:
      'La función PROMEDIO calcula la media de los valores incluidos en el rango.',
  },
  {
    id: 'ET2',
    herramienta: 'Excel / Sheets',
    competencia: 'lectura del resultado en celda',
    peso: 2,
    pregunta:
      'En Excel o Sheets, si escribes correctamente una fórmula en una celda y presionas Enter, ¿qué se muestra normalmente en la celda?',
    opciones: [
      { id: 'formula-result', text: 'El resultado de la fórmula' },
      { id: 'file-name', text: 'El nombre del archivo' },
      { id: 'automatic-image', text: 'Una imagen automática' },
      { id: 'author-comment', text: 'El comentario del autor' },
    ],
    correctOptionId: 'formula-result',
    retroalimentacion:
      'Al confirmar una fórmula, la celda suele mostrar el resultado calculado.',
  },
  {
    id: 'ET3',
    herramienta: 'Excel / Sheets',
    competencia: 'inicio correcto de fórmulas',
    peso: 1,
    pregunta:
      'En Excel o Sheets, ¿qué característica distingue a una fórmula frente a un texto normal?',
    opciones: [
      { id: 'starts-equals', text: 'Comienza con el signo igual =' },
      { id: 'always-blue', text: 'Siempre va en color azul' },
      { id: 'uppercase-only', text: 'Debe escribirse en mayúsculas' },
      { id: 'first-row-only', text: 'Solo puede ponerse en la primera fila' },
    ],
    correctOptionId: 'starts-equals',
    retroalimentacion:
      'Las fórmulas se introducen comenzando con el signo igual.',
  },
  {
    id: 'ET4',
    herramienta: 'Excel / Sheets',
    competencia: 'suma básica',
    peso: 1,
    pregunta:
      'En Excel o Sheets, si quieres obtener el total de varias calificaciones numéricas en una columna, ¿qué función es la más común?',
    opciones: [
      { id: 'sum', text: 'SUMA' },
      { id: 'image', text: 'IMAGEN' },
      { id: 'hyperlink', text: 'HIPERVINCULO' },
      { id: 'design', text: 'DISEÑO' },
    ],
    correctOptionId: 'sum',
    retroalimentacion:
      'La función SUMA permite agregar varios valores numéricos.',
  },
  {
    id: 'ET5',
    herramienta: 'Excel / Sheets',
    competencia: 'ordenamiento técnico',
    peso: 1,
    pregunta:
      'En Excel o Sheets, quieres acomodar una lista de estudiantes de mayor a menor calificación sin moverlos manualmente. ¿Qué herramienta técnica usarías?',
    opciones: [
      { id: 'sort-data', text: 'Ordenar datos' },
      { id: 'change-borders', text: 'Cambiar bordes de celda' },
      { id: 'insert-comment', text: 'Insertar comentario' },
      { id: 'merge-all-cells', text: 'Combinar todas las celdas' },
    ],
    correctOptionId: 'sort-data',
    retroalimentacion:
      'Ordenar datos permite reorganizar una tabla según un criterio, como la calificación.',
  },
  {
    id: 'ET6',
    herramienta: 'Excel / Sheets',
    competencia: 'filtrado técnico',
    peso: 2,
    pregunta:
      'En Excel o Sheets, tienes una tabla con muchos estudiantes y quieres ver solo quienes pertenecen a un grupo específico o tienen estado “pendiente”. ¿Qué herramienta técnica te ayuda más?',
    opciones: [
      { id: 'filter', text: 'Filtro' },
      { id: 'wordart', text: 'WordArt' },
      { id: 'transition', text: 'Transición' },
      { id: 'header-footer', text: 'Encabezado y pie de página' },
    ],
    correctOptionId: 'filter',
    retroalimentacion:
      'El filtro permite mostrar solo los datos que cumplen ciertas condiciones sin borrar el resto.',
  },
  {
    id: 'ET7',
    herramienta: 'Excel / Sheets',
    competencia: 'estructura correcta de datos',
    peso: 1,
    pregunta:
      'Para que una hoja de cálculo en Excel o Sheets funcione mejor con fórmulas, filtros y gráficas, ¿qué organización técnica conviene más?',
    opciones: [
      { id: 'one-type-per-column', text: 'Un tipo de dato por columna con encabezados claros' },
      { id: 'mixed-in-one-cell', text: 'Varias ideas mezcladas dentro de una misma celda' },
      { id: 'many-merged-cells', text: 'Muchas celdas combinadas por estética' },
      { id: 'blank-rows-between', text: 'Dejar filas vacías entre cada dato importante' },
    ],
    correctOptionId: 'one-type-per-column',
    retroalimentacion:
      'Una estructura clara por columnas facilita analizar y reutilizar la información.',
  },
  {
    id: 'ET8',
    herramienta: 'Excel / Sheets',
    competencia: 'lista de opciones predeterminadas',
    peso: 1,
    pregunta:
      'En Excel o Sheets, si quieres que en una celda solo se elija entre opciones como “entregado”, “pendiente” o “exento”, ¿qué recurso técnico conviene usar?',
    opciones: [
      { id: 'dropdown-validation', text: 'Una lista desplegable o validación de datos' },
      { id: 'image-options', text: 'Una imagen con las opciones' },
      { id: 'animation', text: 'Una animación' },
      { id: 'page-break', text: 'Un salto de página' },
    ],
    correctOptionId: 'dropdown-validation',
    retroalimentacion:
      'Las listas desplegables ayudan a registrar datos de forma consistente y reducen errores al escribir.',
  },
  {
    id: 'ET9',
    herramienta: 'Excel / Sheets',
    competencia: 'visualización básica de datos',
    peso: 1,
    pregunta:
      'En Excel o Sheets, si quieres presentar un resumen claro del desempeño de un grupo a partir de una tabla, ¿qué recurso técnico puede ayudarte más?',
    opciones: [
      { id: 'chart', text: 'Una gráfica basada en los datos' },
      { id: 'uppercase-table', text: 'Cambiar toda la tabla a mayúsculas' },
      { id: 'decorative-cover', text: 'Insertar una portada decorativa' },
      { id: 'merge-everything', text: 'Combinar todas las celdas' },
    ],
    correctOptionId: 'chart',
    retroalimentacion:
      'Una gráfica permite visualizar tendencias o comparaciones de forma más clara que una tabla sola.',
  },

  {
    id: 'PT1',
    herramienta: 'Presentaciones',
    competencia: 'duplicación de diapositivas',
    peso: 1,
    pregunta:
      'En PowerPoint o una herramienta similar de presentaciones, si ya tienes una diapositiva con buen diseño y quieres reutilizarla cambiando solo el contenido, ¿qué acción técnica conviene más?',
    opciones: [
      { id: 'duplicate-slide', text: 'Duplicar o copiar y pegar la diapositiva' },
      { id: 'start-over', text: 'Borrar toda la presentación y empezar de nuevo' },
      { id: 'convert-to-pdf', text: 'Convertir la diapositiva en PDF antes de editarla' },
      { id: 'insert-empty-table', text: 'Insertar una tabla vacía' },
    ],
    correctOptionId: 'duplicate-slide',
    retroalimentacion:
      'Duplicar o copiar una diapositiva ahorra tiempo y mantiene coherencia visual.',
  },
  {
    id: 'PT2',
    herramienta: 'Presentaciones',
    competencia: 'distinción entre transición y animación',
    peso: 2,
    pregunta:
      'En PowerPoint, ¿qué describe mejor una animación?',
    opciones: [
      { id: 'between-slides-effect', text: 'El efecto que ocurre cuando cambia una diapositiva a otra' },
      { id: 'object-movement', text: 'El movimiento o aparición de un elemento dentro de una diapositiva' },
      { id: 'file-header-format', text: 'El formato del encabezado del archivo' },
      { id: 'theme-color', text: 'El color general del tema' },
    ],
    correctOptionId: 'object-movement',
    retroalimentacion:
      'La animación afecta objetos dentro de una diapositiva; la transición ocurre entre una diapositiva y otra.',
  },
  {
    id: 'PT3',
    herramienta: 'Presentaciones',
    competencia: 'ubicación básica de animaciones en PowerPoint',
    peso: 1,
    pregunta:
      'En PowerPoint, si quieres agregar movimiento o entrada a un texto o imagen, ¿en qué sección o pestaña buscarías normalmente?',
    opciones: [
      { id: 'animations-tab', text: 'Animaciones' },
      { id: 'review-tab', text: 'Revisar' },
      { id: 'mailings-tab', text: 'Correspondencia' },
      { id: 'references-tab', text: 'Referencias' },
    ],
    correctOptionId: 'animations-tab',
    retroalimentacion:
      'En PowerPoint, las animaciones se gestionan desde la pestaña Animaciones.',
  },
  {
    id: 'PT4',
    herramienta: 'Presentaciones',
    competencia: 'inserción de imágenes',
    peso: 1,
    pregunta:
      'En PowerPoint o Canva, si quieres agregar una imagen a una diapositiva o diseño de forma directa, ¿qué acción técnica corresponde?',
    opciones: [
      { id: 'insert-image', text: 'Insertar imagen' },
      { id: 'apply-data-filter', text: 'Aplicar filtro de datos' },
      { id: 'mandatory-comments', text: 'Activar comentarios obligatorios' },
      { id: 'convert-to-sheet', text: 'Convertir la diapositiva en hoja de cálculo' },
    ],
    correctOptionId: 'insert-image',
    retroalimentacion:
      'Insertar imagen es la acción técnica directa para agregar recursos visuales a una diapositiva.',
  },
  {
    id: 'PT5',
    herramienta: 'Presentaciones',
    competencia: 'organización del orden de diapositivas',
    peso: 1,
    pregunta:
      'En PowerPoint, si notas que una diapositiva quedó en el lugar equivocado dentro de la presentación, ¿qué conviene hacer?',
    opciones: [
      { id: 'reorder-slide', text: 'Reordenarla o moverla dentro de la secuencia' },
      { id: 'change-all-font-size', text: 'Cambiar el tamaño de letra de toda la presentación' },
      { id: 'export-pdf-now', text: 'Exportar de inmediato a PDF' },
      { id: 'insert-formula', text: 'Insertar una fórmula' },
    ],
    correctOptionId: 'reorder-slide',
    retroalimentacion:
      'Reordenar diapositivas ayuda a mantener una secuencia lógica sin rehacer el contenido.',
  },
  {
    id: 'PT6',
    herramienta: 'Presentaciones',
    competencia: 'distinción entre transición y animación',
    peso: 1,
    pregunta:
      'En una presentación, si quieres que toda una diapositiva entre con un efecto al pasar a la siguiente, ¿qué herramienta estás usando?',
    opciones: [
      { id: 'transition', text: 'Transición' },
      { id: 'comment', text: 'Comentario' },
      { id: 'header', text: 'Encabezado' },
      { id: 'filter', text: 'Filtro' },
    ],
    correctOptionId: 'transition',
    retroalimentacion:
      'La transición afecta el paso de una diapositiva a otra, no a los elementos internos.',
  },
  {
    id: 'PT7',
    herramienta: 'Presentaciones',
    competencia: 'uso de plantillas o diseños base',
    peso: 1,
    pregunta:
      'En PowerPoint o Canva, si quieres mantener una apariencia coherente en varias diapositivas sin diseñar cada una desde cero, ¿qué conviene usar?',
    opciones: [
      { id: 'template-base-design', text: 'Una plantilla o diseño base' },
      { id: 'side-comment', text: 'Un comentario lateral' },
      { id: 'calculation-formula', text: 'Una fórmula de cálculo' },
      { id: 'attendance-table', text: 'Una tabla de asistencia' },
    ],
    correctOptionId: 'template-base-design',
    retroalimentacion:
      'Usar una plantilla o diseño base ayuda a conservar uniformidad visual y ahorrar tiempo.',
  },

  {
    id: 'FT1',
    herramienta: 'Forms',
    competencia: 'selección de tipo de pregunta',
    peso: 1,
    pregunta:
      'En Forms o Google Forms, si necesitas que una persona escriba una respuesta breve con su nombre o grupo, ¿qué tipo de campo conviene más?',
    opciones: [
      { id: 'short-answer', text: 'Respuesta corta' },
      { id: 'file-upload', text: 'Carga de archivo' },
      { id: 'linear-scale', text: 'Escala lineal' },
      { id: 'empty-sections', text: 'Varias secciones vacías' },
    ],
    correctOptionId: 'short-answer',
    retroalimentacion:
      'La respuesta corta sirve para datos breves como nombre, grupo o correo.',
  },
  {
    id: 'FT2',
    herramienta: 'Forms',
    competencia: 'opción única entre alternativas',
    peso: 1,
    pregunta:
      'En Forms o Google Forms, si quieres que el usuario elija solo una respuesta entre varias opciones, ¿qué formato técnico conviene usar?',
    opciones: [
      { id: 'single-choice', text: 'Opción múltiple de respuesta única' },
      { id: 'long-paragraph', text: 'Párrafo largo' },
      { id: 'decorative-image', text: 'Imagen decorativa' },
      { id: 'section-header', text: 'Encabezado de sección' },
    ],
    correctOptionId: 'single-choice',
    retroalimentacion:
      'Cuando solo debe elegirse una opción, conviene usar una pregunta cerrada de respuesta única.',
  },
  {
    id: 'FT3',
    herramienta: 'Forms',
    competencia: 'control de campos obligatorios',
    peso: 2,
    pregunta:
      'En Forms o Google Forms, si un dato es indispensable para enviar correctamente el formulario, ¿qué ajuste técnico conviene activar?',
    opciones: [
      { id: 'required-question', text: 'Marcar la pregunta como obligatoria' },
      { id: 'change-color', text: 'Cambiar el color del formulario' },
      { id: 'insert-transition', text: 'Insertar una transición' },
      { id: 'duplicate-section', text: 'Duplicar toda la sección' },
    ],
    correctOptionId: 'required-question',
    retroalimentacion:
      'Marcar un campo como obligatorio evita que el formulario se envíe incompleto.',
  },
  {
    id: 'FT4',
    herramienta: 'Forms',
    competencia: 'revisión y organización de respuestas',
    peso: 1,
    pregunta:
      'Después de recibir respuestas en Forms o Google Forms, ¿qué opción técnica facilita revisarlas de manera organizada?',
    opciones: [
      { id: 'summary-and-sheet', text: 'Ver el resumen de respuestas y, si hace falta, vincularlo a una hoja de cálculo' },
      { id: 'copy-one-by-one', text: 'Copiar una por una las respuestas a un documento' },
      { id: 'screenshots', text: 'Tomar captura de cada respuesta' },
      { id: 'convert-to-slide', text: 'Convertir todo en una diapositiva' },
    ],
    correctOptionId: 'summary-and-sheet',
    retroalimentacion:
      'Revisar respuestas desde el formulario o en una hoja vinculada facilita la consulta y el análisis posterior.',
  },
];

export default technicalQuestions;