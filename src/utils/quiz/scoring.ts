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

export interface QuizAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  awardedPoints: number;
  weight: number;
  tool: string;
  section: 'general' | 'technical';
}

export interface SectionScoreResult {
  score: number;
  max: number;
  percent: number;
}

export interface ToolScoreResult {
  key: string;
  label: string;
  score: number;
  max: number;
  percent: number;
}

export interface OverallScoreResult {
  general: SectionScoreResult;
  technical: SectionScoreResult;
  total: SectionScoreResult;
  byTool: ToolScoreResult[];
}

function getPercent(score: number, max: number): number {
  if (max <= 0) return 0;
  return Math.round((score / max) * 100);
}

export function normalizeToolKey(rawTool: string): string {
  const value = String(rawTool || '').toLowerCase();

  if (value.includes('word') || value.includes('docs')) return 'word';
  if (value.includes('excel') || value.includes('sheet')) return 'excel';
  if (value.includes('present')) return 'presentaciones';
  if (value.includes('form')) return 'forms';

  return 'otro';
}

export function getToolLabel(toolKey: string): string {
  const labels: Record<string, string> = {
    word: 'Word / Docs',
    excel: 'Excel / Sheets',
    presentaciones: 'Presentaciones',
    forms: 'Forms',
    otro: 'Otra herramienta',
  };

  return labels[toolKey] || 'Herramienta';
}

export function getQuestionsMaxScore(questions: QuizQuestion[]): number {
  return questions.reduce((sum, question) => sum + (question.peso ?? 1), 0);
}

export function scoreSection(
  questions: QuizQuestion[],
  answersMap: Record<string, Partial<QuizAnswer> | undefined>,
): SectionScoreResult {
  const max = getQuestionsMaxScore(questions);

  const score = questions.reduce((sum, question) => {
    const answer = answersMap[question.id];
    return sum + Number(answer?.awardedPoints || 0);
  }, 0);

  return {
    score,
    max,
    percent: getPercent(score, max),
  };
}

export function buildAnswerRecord(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, string | undefined>,
  section: 'general' | 'technical',
): Record<string, QuizAnswer> {
  const record: Record<string, QuizAnswer> = {};

  questions.forEach((question) => {
    const selectedOptionId = selectedAnswers[question.id];
    if (!selectedOptionId) return;

    const isCorrect = selectedOptionId === question.correctOptionId;
    const awardedPoints = isCorrect ? question.peso : 0;

    record[question.id] = {
      questionId: question.id,
      selectedOptionId,
      isCorrect,
      awardedPoints,
      weight: question.peso,
      tool: question.herramienta,
      section,
    };
  });

  return record;
}

export function mergeAnswerMaps(
  ...maps: Array<Record<string, QuizAnswer | Partial<QuizAnswer> | undefined>>
): Record<string, QuizAnswer | Partial<QuizAnswer> | undefined> {
  return Object.assign({}, ...maps);
}

export function scoreByTool(
  questions: QuizQuestion[],
  answersMap: Record<string, Partial<QuizAnswer> | undefined>,
): ToolScoreResult[] {
  const toolAccumulator: Record<
    string,
    { label: string; score: number; max: number }
  > = {};

  questions.forEach((question) => {
    const toolKey = normalizeToolKey(question.herramienta);

    if (!toolAccumulator[toolKey]) {
      toolAccumulator[toolKey] = {
        label: getToolLabel(toolKey),
        score: 0,
        max: 0,
      };
    }

    toolAccumulator[toolKey].max += question.peso;

    const answer = answersMap[question.id];
    toolAccumulator[toolKey].score += Number(answer?.awardedPoints || 0);
  });

  return Object.entries(toolAccumulator)
    .map(([key, value]) => ({
      key,
      label: value.label,
      score: value.score,
      max: value.max,
      percent: getPercent(value.score, value.max),
    }))
    .sort((a, b) => a.label.localeCompare(b.label, 'es'));
}

export function calculateOverallScores(params: {
  generalQuestions: QuizQuestion[];
  technicalQuestions: QuizQuestion[];
  generalAnswers: Record<string, Partial<QuizAnswer> | undefined>;
  technicalAnswers: Record<string, Partial<QuizAnswer> | undefined>;
}): OverallScoreResult {
  const {
    generalQuestions,
    technicalQuestions,
    generalAnswers,
    technicalAnswers,
  } = params;

  const general = scoreSection(generalQuestions, generalAnswers);
  const technical = scoreSection(technicalQuestions, technicalAnswers);

  const totalScore = general.score + technical.score;
  const totalMax = general.max + technical.max;

  const total: SectionScoreResult = {
    score: totalScore,
    max: totalMax,
    percent: getPercent(totalScore, totalMax),
  };

  const byTool = scoreByTool(
    [...generalQuestions, ...technicalQuestions],
    mergeAnswerMaps(generalAnswers, technicalAnswers),
  );

  return {
    general,
    technical,
    total,
    byTool,
  };
}

export default {
  normalizeToolKey,
  getToolLabel,
  getQuestionsMaxScore,
  scoreSection,
  buildAnswerRecord,
  mergeAnswerMaps,
  scoreByTool,
  calculateOverallScores,
};