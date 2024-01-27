import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  transform(value: {key: string, value: number}[]): {key: string, value: number}[] {
    return value.sort((a, b) => a.value - b.value)
  }

}
