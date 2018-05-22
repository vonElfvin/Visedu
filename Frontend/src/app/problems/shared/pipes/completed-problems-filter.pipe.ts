import { Pipe, PipeTransform } from '@angular/core';
import { Problem } from '../problem.model';
import { CompletedProblem } from '../completed-problem.model';

@Pipe({
  name: 'completedProblemsFilter'
})
export class CompletedProblemsFilterPipe implements PipeTransform {

  transform(problems: Problem[], completedProblems: CompletedProblem[]): Problem[] {
    if (problems) {
      return problems.filter(problem => {
        let result = true;

        // filter out problem if completed
        if (completedProblems) {
          completedProblems.forEach(completedProblem => {
            if (problem._id === completedProblem.problemId) {
              result = false;
            }
          });
        } else {
          // don't show any problems until completedProblem has been fetched from the database
          result = false;
        }

        return result;
      });
    }
  }

}
