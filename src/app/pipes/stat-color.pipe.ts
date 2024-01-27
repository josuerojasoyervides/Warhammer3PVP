import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appStatColor',
  standalone: true,
})
export class StatColorPipe implements PipeTransform {
  color = "white"
  transform(value: number): string {
    if (value == 0) this.color = "#ff0000";
    if (value == 1) this.color = "#ff0000";
    if (value == 2) this.color = "#ffa700";
    if (value == 3) this.color = "#fff400";
    if (value == 4) this.color = "#a3ff00";
    if (value == 5) this.color = "#2cba00";
    return this.color;
  }

}
