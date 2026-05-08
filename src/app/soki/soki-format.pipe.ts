import { Pipe, PipeTransform } from '@angular/core';
import { KartonSoku } from '../karton-soku';
@Pipe({
  name: 'sokiFormat',
  standalone: false
})
export class SokiFormatPipe implements PipeTransform {

  transform(sok: KartonSoku, pominCene: boolean): string {
    if (pominCene) {
      return `${sok.producent}: ${sok.typSoku}`;
    }
    return `${sok.producent} (${sok.cena}): ${sok.typSoku}`;
  }

}
