import { Injectable } from '@angular/core';
import { Cidade } from '../shared/models/cidade.model';

const LS_CHAVE = "cidade";

@Injectable({
  providedIn: 'root'
})

export class CidadeService {
  constructor() { }
 listarTodos(): Cidade[] {
    const cidade = localStorage[LS_CHAVE]; //precisa do condicional pois vai retornar undefind se a chave não existe
    return cidade? JSON.parse(cidade) : [];
  }

  inserir(end: Cidade): void {
    //obtem a lista completa de pessoas 
    const  cidades = this.listarTodos();

    //seta um ID único 
    //usamos TimeStramp, quantidade de segundos desde 1970
    end.id = new Date().getTime();

    //adiciona no final da lista 
    cidades.push(end);

    //armazena no localStorage 
    localStorage[LS_CHAVE] = JSON.stringify(cidades);

  }

    buscarPorId(id: number): Cidade| undefined {
      // Obtém a lista completa de pessoas
      const cidade = this.listarTodos();
      // Efetua a busca
      // find() : retorna o primeiro elemento da lista que
      // satisfaz a condição, caso contrário, undefined
      return cidade.find(cidade => cidade.id === id);
    }

    atualizar(end: Cidade): void {
      //obtem a lista completa de pessoas
      const cidades = this.listarTodos();

      //varre a lista de pessoas
      //quando encontra pessoa com o mesmo id, altera a lista
      cidades.forEach((obj, index, objs) => {
        if (end.id === obj.id) {
          objs[index] = end
        }
      });
        //armazena a nova lista no localStrorage 
        localStorage[LS_CHAVE] = JSON.stringify(cidades);
    }
     
    remover(id: number): void {
        //obtem a lista completa de pessoas
      let cidade= this.listarTodos();

      //filter():retorna a mesma lista contendo todos os registros que satisfazem a condição
      cidade = cidade.filter(cidade => cidade.id !== id);

      //atualiza a lista 
      localStorage[LS_CHAVE] = JSON.stringify(cidade);
    }

}

