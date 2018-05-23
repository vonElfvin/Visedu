import { Filter } from './filter.model';
import { ProblemArea } from './problem.model';

// filter options
export let filterOptions: Filter[] = [
  {
    name: 'Problem i kontext',
    type: ProblemArea.problem_solving,
    selected: true,
    color: 'accent'
  },
  {
    name: 'Färdighetsproblem',
    type: ProblemArea.skill_training,
    selected: true,
    color: 'primary'
  },
  {
    name: 'Kluring',
    type: ProblemArea.tricky_question,
    selected: true,
    color: 'warn'
  }
];

// hex color for problem area
export let hexColors: {[key: string]: string} = {};
this.hexColors[ProblemArea.problem_solving] = '#8E24AA';
this.hexColors[ProblemArea.skill_training] = '#00897B';
this.hexColors[ProblemArea.tricky_question] = '#F4511E';

// material color for problem area
export let matColors: {[key: string]: string} = {};
this.matColors[ProblemArea.problem_solving] = 'accent';
this.matColors[ProblemArea.skill_training] = 'primary';
this.matColors[ProblemArea.tricky_question] = 'warn';
