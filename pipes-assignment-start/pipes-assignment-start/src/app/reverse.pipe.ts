import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.length) {
      const split = value.split('').reverse();
      return split.join('');
    }
    return value;
  }
}
