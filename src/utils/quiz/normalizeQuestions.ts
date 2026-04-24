export interface RawQuizOption {
  id?: string;
  text: string;
}

export interface RawQuizQuestion {
  id: string;
  herramienta: string;
  competencia: string;
  peso?: number;
  pregunta: string;
  opciones: RawQuizOption[];
  correctOptionId?: string;
  correcta?: 'A' | 'B' | 'C' | 'D';
  retroalimentacion: string;
}

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

const LETTER_INDEX: Record<'A' | 'B' | 'C' | 'D', number> = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
};

function slugifyOptionId(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'option';
}

function buildFallbackOptionId(questionId: string, index: number, text: string): string {
  return `${questionId.toLowerCase()}-${index + 1}-${slugifyOptionId(text)}`;
}

export function resolveCorrectOptionId(question: RawQuizQuestion, options: QuizOption[]): string {
  if (question.correctOptionId) {
    const exists = options.some((option) => option.id === question.correctOptionId);
    if (!exists) {
      throw new Error(
        `La pregunta "${question.id}" tiene correctOptionId="${question.correctOptionId}" pero no existe en sus opciones.`,
      );
    }
    return question.correctOptionId;
  }

  if (question.correcta) {
    const optionIndex = LETTER_INDEX[question.correcta];
    const option = options[optionIndex];

    if (!option) {
      throw new Error(
        `La pregunta "${question.id}" usa correcta="${question.correcta}" pero no existe una opción en esa posición.`,
      );
    }

    return option.id;
  }

  throw new Error(
    `La pregunta "${question.id}" necesita "correctOptionId" o "correcta".`,
  );
}

export function normalizeQuestion(question: RawQuizQuestion): QuizQuestion {
  const normalizedOptions: QuizOption[] = question.opciones.map((option, index) => ({
    id: option.id?.trim() || buildFallbackOptionId(question.id, index, option.text),
    text: option.text,
  }));

  const optionIds = normalizedOptions.map((option) => option.id);
  const uniqueOptionIds = new Set(optionIds);

  if (uniqueOptionIds.size !== optionIds.length) {
    throw new Error(`La pregunta "${question.id}" tiene opciones con ids repetidos.`);
  }

  const correctOptionId = resolveCorrectOptionId(question, normalizedOptions);

  return {
    id: question.id,
    herramienta: question.herramienta,
    competencia: question.competencia,
    peso: question.peso ?? 1,
    pregunta: question.pregunta,
    opciones: normalizedOptions,
    correctOptionId,
    retroalimentacion: question.retroalimentacion,
  };
}

export function normalizeQuestions(questions: RawQuizQuestion[]): QuizQuestion[] {
  return questions.map(normalizeQuestion);
}

export default normalizeQuestions;