import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisaoService {

  constructor() { }
    dividir(numero1: number, numero2:number): number {
      let resultado: number;

      resultado = numero1 / numero2; 
      return resultado; 

    }


}
