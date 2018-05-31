import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    if (value.length) {
      const sortedArray = value.sort((a, b) => {
        return a[propName] > b[propName];
      });
      return sortedArray;
    }
    return value;
  }
}
