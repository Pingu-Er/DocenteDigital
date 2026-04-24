export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion<TOption extends QuizOption = QuizOption> {
  id: string;
  herramienta: string;
  competencia: string;
  peso: number;
  pregunta: string;
  opciones: TOption[];
  correctOptionId: string;
  retroalimentacion: string;
}

export function shuffleArray<T>(items: T[], randomFn: () => number = Math.random): T[] {
  const clone = [...items];

  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(randomFn() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }

  return clone;
}

export function shuffleQuestionOptions<TOption extends QuizOption>(
  question: QuizQuestion<TOption>,
  randomFn: () => number = Math.random,
): QuizQuestion<TOption> {
  return {
    ...question,
    opciones: shuffleArray(question.opciones, randomFn),
  };
}

export function shuffleQuestions<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
  randomFn: () => number = Math.random,
): TQuestion[] {
  return shuffleArray(questions, randomFn);
}

export function shuffleQuestionsWithOptions<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
  randomFn: () => number = Math.random,
): TQuestion[] {
  return shuffleArray(
    questions.map((question) => ({
      ...question,
      opciones: shuffleArray(question.opciones, randomFn),
    })) as TQuestion[],
    randomFn,
  );
}

export function groupQuestionsByTool<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
): Record<string, TQuestion[]> {
  return questions.reduce<Record<string, TQuestion[]>>((acc, question) => {
    const key = question.herramienta;
    if (!acc[key]) acc[key] = [];
    acc[key].push(question);
    return acc;
  }, {});
}

export function shuffleQuestionsWithinToolGroups<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
  randomFn: () => number = Math.random,
): TQuestion[] {
  const grouped = groupQuestionsByTool(questions);

  return Object.values(grouped).flatMap((group) => shuffleArray(group, randomFn));
}

export function shuffleQuestionsWithinToolGroupsWithOptions<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
  randomFn: () => number = Math.random,
): TQuestion[] {
  const grouped = groupQuestionsByTool(questions);

  return Object.values(grouped).flatMap((group) =>
    shuffleArray(
      group.map((question) => ({
        ...question,
        opciones: shuffleArray(question.opciones, randomFn),
      })) as TQuestion[],
      randomFn,
    ),
  );
}

export function buildOptionOrderMap<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
): Record<string, string[]> {
  return questions.reduce<Record<string, string[]>>((acc, question) => {
    acc[question.id] = question.opciones.map((option) => option.id);
    return acc;
  }, {});
}

export function applyOptionOrderMap<TQuestion extends QuizQuestion>(
  questions: TQuestion[],
  optionOrderMap: Record<string, string[]>,
): TQuestion[] {
  return questions.map((question) => {
    const desiredOrder = optionOrderMap[question.id];
    if (!desiredOrder || desiredOrder.length === 0) return question;

    const optionMap = new Map(
      question.opciones.map((option) => [option.id, option]),
    );

    const orderedOptions = desiredOrder
      .map((optionId) => optionMap.get(optionId))
      .filter(Boolean) as TQuestion['opciones'];

    const missingOptions = question.opciones.filter(
      (option) => !desiredOrder.includes(option.id),
    );

    return {
      ...question,
      opciones: [...orderedOptions, ...missingOptions],
    };
  });
}

export default {
  shuffleArray,
  shuffleQuestionOptions,
  shuffleQuestions,
  shuffleQuestionsWithOptions,
  groupQuestionsByTool,
  shuffleQuestionsWithinToolGroups,
  shuffleQuestionsWithinToolGroupsWithOptions,
  buildOptionOrderMap,
  applyOptionOrderMap,
};