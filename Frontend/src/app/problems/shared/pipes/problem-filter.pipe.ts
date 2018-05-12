import { Pipe, PipeTransform } from '@angular/core';
import { Problem } from '../problem.model';

@Pipe({
  name: 'problemFilter',
  pure: false,
})
export class ProblemFilterPipe implements PipeTransform {

  transform(problems: Problem[], args?: any[]): any {
    return problems.filter(problem => {
      let result = false;
      args.forEach(arg => {
        if (arg.type === problem.area && arg.selected === true) {
          result = true;
        }
      });
      return result;
    });
  }

}
