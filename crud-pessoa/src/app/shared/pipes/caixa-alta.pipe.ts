import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caixaAlta',
  standalone: true
})
export class CaixaAltaPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if(value)
      return value.toLocaleUpperCase();
    else
      return "";

  }

}
