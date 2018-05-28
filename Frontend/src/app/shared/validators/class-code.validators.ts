import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ClassService } from '../../classes/shared/class.service';
import { map, take } from 'rxjs/operators';

export function invalidClassCodeValidator(classService: ClassService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const classCode = control.value;
    return classService.getClassWithCode(classCode).pipe(
      take(1),
      map(
        c => {
          return !c ? {'invalidClassCode': true} : null;
        }
      ));
  };
}
