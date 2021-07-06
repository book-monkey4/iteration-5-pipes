import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: string): string {
    // ⚠️ Unterschied zum Buch: Leerer String statt `null`, sodass Return-Typ `string` erfüllt ist
    if (!value) { return ''; }
    return `${value.substr(0, 3)}-${value.substr(3)}`;
  }
}
