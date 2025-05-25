import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from '../../shared/directives/numerico.directive';

@Component({
  selector: 'app-inserir-pessoa',
  imports: [CommonModule, FormsModule, RouterModule, NumericoDirective],
  templateUrl: './inserir-pessoa.component.html',
  styleUrl: './inserir-pessoa.component.css'
})
export class InserirPessoaComponent {

  @ViewChild('formPessoa') formPessoa! : NgForm;
    pessoa : Pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private router: Router){}

  inserir(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate( ["/pessoas"] );
    }
      // Para inserir:
      // - Verifica se o formulário é válido, se não deu nenhum erro
      // - Se OK
      // . Chama o inserir do Service, this.pessoa está preenchida (binding)
      // . Redireciona para /pessoas
  }

  listarTodos(): Pessoa[] {
  return this.pessoaService.listarTodos();
}

}

