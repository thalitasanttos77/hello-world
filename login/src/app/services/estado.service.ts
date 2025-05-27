import { Injectable } from '@angular/core';
import { Estado } from '../shared/models/estado.model';

const LS_CHAVE = "estado";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }
  listarTodos() : Estado[]{
    const estado = localStorage[LS_CHAVE];
      return estado ? JSON.parse(estado): [];
  }

inserir(est: Estado): void {
    //obtem a lista completa 
    const estados = this.listarTodos();

    //seta um ID único 
    //usamos TimeStramp, quantidade de segundos desde 1970
    est.id = new Date().getTime();

    //adiciona no final da lista 
    estados.push(est);

    //armazena no localStorage 
    localStorage[LS_CHAVE] = JSON.stringify(estados);
}

 buscarPorId(id: number): Estado | undefined {
      // Obtém a lista completa
      const estado = this.listarTodos();
      // Efetua a busca
      // find() : retorna o primeiro elemento da lista que
      // satisfaz a condição, caso contrário, undefined
      return estado.find(estado => estado.id === id);
    }

    atualizar(est: Estado): void {
      //obtem a lista completa de pessoas
      const estados = this.listarTodos();

      //varre a lista de pessoas
      //quando encontra pessoa com o mesmo id, altera a lista
      estados.forEach((obj, index, objs) => {
        if (est.id === obj.id) {
          objs[index] = est
        }
      });
        //armazena a nova lista no localStrorage 
        localStorage[LS_CHAVE] = JSON.stringify(estados);
    }
     
    remover(id: number): void {
        //obtem a lista completa de pessoas
      let estado = this.listarTodos();

      //filter():retorna a mesma lista contendo todos os registros que satisfazem a condição
      estado = estado.filter(estado => estado.id !== id);

      //atualiza a lista 
      localStorage[LS_CHAVE] = JSON.stringify(estado);
    }

}
