import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noquery'
})
export class NoQueryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('?')[0];
  }

}
