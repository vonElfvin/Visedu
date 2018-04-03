export interface Student {
  _id: string;
  uid: string;
  classCode: string;
  total_problems?: {
    skill_training: number,
    problem_solving: number,
    tricky_question: number
  };
}
