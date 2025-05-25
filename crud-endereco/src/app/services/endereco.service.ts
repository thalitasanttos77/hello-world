import { Injectable } from '@angular/core';
import { Endereco } from '../shared/models/endereco.model';

const LS_CHAVE = "endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }
 listarTodos(): Endereco[] {
    const endereco = localStorage[LS_CHAVE]; //precisa do condicional pois vai retornar undefind se a chave não existe
    return endereco ? JSON.parse(endereco) : [];
  }

  inserir(end: Endereco): void {
    //obtem a lista completa de pessoas 
    const enderecos = this.listarTodos();

    //seta um ID único 
    //usamos TimeStramp, quantidade de segundos desde 1970
    end.id = new Date().getTime();

    //adiciona no final da lista 
    enderecos.push(end);

    //armazena no localStorage 
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);

  }

    buscarPorId(id: number): Endereco | undefined {
      // Obtém a lista completa de pessoas
      const endereco = this.listarTodos();
      // Efetua a busca
      // find() : retorna o primeiro elemento da lista que
      // satisfaz a condição, caso contrário, undefined
      return endereco.find(endereco => endereco.id === id);
    }

    atualizar(end: Endereco): void {
      //obtem a lista completa de pessoas
      const enderecos = this.listarTodos();

      //varre a lista de pessoas
      //quando encontra pessoa com o mesmo id, altera a lista
      enderecos.forEach((obj, index, objs) => {
        if (end.id === obj.id) {
          objs[index] = end
        }
      });
        //armazena a nova lista no localStrorage 
        localStorage[LS_CHAVE] = JSON.stringify(enderecos);
    }
     
    remover(id: number): void {
        //obtem a lista completa de pessoas
      let endereco = this.listarTodos();

      //filter():retorna a mesma lista contendo todos os registros que satisfazem a condição
      endereco = endereco.filter(endereco => endereco.id !== id);

      //atualiza a lista 
      localStorage[LS_CHAVE] = JSON.stringify(endereco);
    }

}
