import { AbstractControl } from '@angular/forms/src/model';
import { ValidationErrors } from '@angular/forms';

export class ClassCodeValidators {
  static invalidClassCode(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.toLowerCase() !== 'abc') {
          resolve({invalidClassCode: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
