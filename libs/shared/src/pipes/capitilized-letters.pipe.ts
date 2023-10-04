import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitilizedLetters',
  standalone: true,
})
export class CapitilizedLettersPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // Return the input unchanged if it's falsy
    return value.toUpperCase();
  }
}