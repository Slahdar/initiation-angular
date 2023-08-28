import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    const day = String(value.getDate()).padStart(2, '0');
    const month = String(value.getMonth()).padStart(2, '0');
    const year = value.getFullYear();

    return `${day}-${month}-${year}`;
  }
}
