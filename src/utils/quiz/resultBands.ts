export type ResultScope = 'general' | 'technical' | 'total';

export interface BandResult {
  percent: number;
  key: 'high' | 'mid' | 'low';
  label: string;
}

function calculatePercent(score: number, max: number): number {
  if (max <= 0) return 0;
  return Math.round((score / max) * 100);
}

export function getBandResult(score: number, max: number, scope: ResultScope): BandResult {
  const percent = calculatePercent(score, max);

  if (scope === 'general') {
    if (percent >= 75) {
      return {
        percent,
        key: 'high',
        label:
          'Tu criterio funcional es sólido y reconoces bien cómo usar estas herramientas en contextos reales.',
      };
    }

    if (percent >= 50) {
      return {
        percent,
        key: 'mid',
        label:
          'Tienes una base útil, pero aún conviene reforzar algunas decisiones de uso y organización.',
      };
    }

    return {
      percent,
      key: 'low',
      label:
        'Conviene fortalecer más tu criterio de uso práctico para trabajar con mayor seguridad.',
    };
  }

  if (scope === 'technical') {
    if (percent >= 75) {
      return {
        percent,
        key: 'high',
        label:
          'Tu manejo técnico-operativo es bastante sólido en varias funciones importantes.',
      };
    }

    if (percent >= 50) {
      return {
        percent,
        key: 'mid',
        label:
          'Tienes base técnica útil, aunque todavía hay funciones y acciones que conviene reforzar.',
      };
    }

    return {
      percent,
      key: 'low',
      label:
        'Conviene repasar funciones y acciones técnicas frecuentes para ganar soltura en el uso del software.',
    };
  }

  if (percent >= 75) {
    return {
      percent,
      key: 'high',
      label:
        'Tu desempeño global muestra una base funcional y técnica sólida para trabajar con estas herramientas.',
    };
  }

  if (percent >= 50) {
    return {
      percent,
      key: 'mid',
      label:
        'Tu resultado general es útil, pero todavía hay áreas que conviene reforzar para trabajar con mayor seguridad.',
    };
  }

  return {
    percent,
    key: 'low',
    label:
      'Tu resultado sugiere que conviene reforzar varias herramientas para trabajar con más claridad, rapidez y confianza.',
  };
}

export function getBandText(score: number, max: number, scope: ResultScope): string {
  return getBandResult(score, max, scope).label;
}

export function getToolBandResult(score: number, max: number): BandResult {
  const percent = calculatePercent(score, max);

  if (percent >= 75) {
    return {
      percent,
      key: 'high',
      label: 'Dominio funcional suficiente',
    };
  }

  if (percent >= 50) {
    return {
      percent,
      key: 'mid',
      label: 'Base útil, pero conviene reforzar',
    };
  }

  return {
    percent,
    key: 'low',
    label: 'Conviene repasar fundamentos prácticos',
  };
}

export function getToolBand(score: number, max: number): string {
  return getToolBandResult(score, max).label;
}

export function getPercent(score: number, max: number): number {
  return calculatePercent(score, max);
}

export default {
  getBandResult,
  getBandText,
  getToolBandResult,
  getToolBand,
  getPercent,
};