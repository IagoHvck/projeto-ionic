import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle',
  standalone: true
})
export class ShortTitlePipe implements PipeTransform {
  transform(value: string | undefined, limit = 30): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
