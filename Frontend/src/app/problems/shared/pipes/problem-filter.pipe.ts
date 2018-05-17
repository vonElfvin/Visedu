import { Pipe, PipeTransform } from '@angular/core';
import { Problem } from '../problem.model';
import { Filter } from '../filter.model';

@Pipe({
  name: 'problemFilter',
  pure: false,
})
export class ProblemFilterPipe implements PipeTransform {

  transform(problems: Problem[], filterOptions: Filter[]): Problem[] {
    if (problems) {
      return problems.filter(problem => {
        let result = false;
        filterOptions.forEach(option => {
          if (option.type === problem.area && option.selected === true) {
            result = true;
          }
        });
        return result;
      });
    }
  }

}
