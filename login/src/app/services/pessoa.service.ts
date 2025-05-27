import { Injectable } from '@angular/core';
import { Pessoa } from '../shared/models/pessoa.model';

const LS_CHAVE = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE]; //precisa do condicional pois vai retornar undefind se a chave não existe
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    //obtem a lista completa de pessoas 
    const pessoas = this.listarTodos();

    //seta um ID único 
    //usamos TimeStramp, quantidade de segundos desde 1970
    pessoa.id = new Date().getTime();

    //adiciona no final da lista 
    pessoas.push(pessoa);

    //armazena no localStorage 
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);

  }

    buscarPorId(id: number): Pessoa | undefined {
      // Obtém a lista completa de pessoas
      const pessoas = this.listarTodos();
      // Efetua a busca
      // find() : retorna o primeiro elemento da lista que
      // satisfaz a condição, caso contrário, undefined
      return pessoas.find(pessoa => pessoa.id === id);
    }

    atualizar(pessoa: Pessoa): void {
      //obtem a lista completa de pessoas
      const pessoas = this.listarTodos();

      //varre a lista de pessoas
      //quando encontra pessoa com o mesmo id, altera a lista
      pessoas.forEach( (obj, index, objs) => {
        if (pessoa.id === obj.id) {
          objs[index] = pessoa
        }
      });
        //armazena a nova lista no localStrorage 
        localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    }
     
    remover(id: number): void {
        //obtem a lista completa de pessoas
      let pessoas = this.listarTodos();

      //filter():retorna a mesma lista contendo todos os registros que satisfazem a condição
      pessoas = pessoas.filter(pessoa => pessoa.id !== id);

      //atualiza a lista de pessoas
      localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    }

  }



