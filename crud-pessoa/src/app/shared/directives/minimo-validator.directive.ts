import { Directive, Input} from '@angular/core';
import { FormControl, ValidationErrors, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[minimo]', //trocar appMinimoValidator para "minimo"
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true

  }]

})
export class MinimoValidatorDirective implements Validator { //implementa validator
  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }
  validate(c: FormControl): ValidationErrors | null { 
  //implementa o método validate(), se der certo retorna null se der erro retorna o nome do erro "minimo" que sera usado pra saber se teve erro
    let v: number = +c.value;
    let min: number =+this.valorMinimo;

    if (isNaN(min)){
      min = 0;
    }

    if (isNaN(v)) {
      return { 'minimo': true, 'requiredValue': 18}
    }
    else if (v < 18) {
      return { 'minimo': true, 'requiredValue': 18}
    }
  
  return null;
  }

}
