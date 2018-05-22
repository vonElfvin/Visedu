export enum ProblemArea {
  skill_training = 'skill_training',
  problem_solving = 'problem_solving',
  tricky_question = 'tricky_question'
}

export interface Problem {
  _id: string;
  question: string;
  answer: string;
  area: ProblemArea;
}

export interface ProblemsSummary {
  total_problems: {
    skill_training: number;
    problem_solving: number;
    tricky_question: number;
  };
}
