import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ClassService } from '../../classes/shared/class.service';

export function invalidClassCodeValidator(classService: ClassService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const classCode = control.value;
    return classService.getClass(classCode).map(
      c => {
        return !c ? {'invalidClassCode': true} : null;
      }
    );
  };
}
