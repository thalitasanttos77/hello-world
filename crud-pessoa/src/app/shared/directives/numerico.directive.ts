/*
Este código define uma diretiva Angular chamada numerico, que transforma um campo de input para aceitar
apenas números. 
Ela implementa a interface ControlValueAccessor, 
permitindo que o input funcione com formulários reativos ou baseados em template. 
Sempre que o usuário digita algo, a diretiva remove automaticamente
os caracteres não numéricos e informa o valor limpo ao formulário. 
Também marca o campo como "tocado" quando perde o foco.
*/

import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'; //interface que implementa o ControlValueAccessor ela "conecta" seu componente customizado ao sistema de formulários do Angular

@Directive({
  selector: '[numerico]', //atributo a ser usado na tag html para aplicar a diretiva appNumerico, trocar para "numerico"
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumericoDirective,
    multi: true
  }]

})
export class NumericoDirective implements ControlValueAccessor {
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor( private el: ElementRef) { } //Deve-se adicionar um HostListener, Declara um evento do DOM a ser escutado e um método que o trata, Será usado para tratar o KeyUp : só permitir números
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
     registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
      writeValue(value: any): void {
      this.el.nativeElement.value = value;
    }

  @HostListener('keyup', ['$event'])
    onkeyup($event: any){
      let valor = $event.target.value;
      
      //expressão regular: remove tido o que não é númerico
      valor = valor.replace(/[D]/g,'');
        $event.target.value = valor;

    this.onChange(valor);
    }
}
