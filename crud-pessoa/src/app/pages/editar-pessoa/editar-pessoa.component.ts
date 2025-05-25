import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { CommonModule } from '@angular/common';
import { MinimoValidatorDirective } from '../../shared/directives/minimo-validator.directive';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-editar-pessoa',
  imports: [CommonModule, FormsModule, RouterModule, MinimoValidatorDirective, NgxMaskDirective],
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css'
})
export class EditarPessoaComponent implements OnInit{
  @ViewChild ('formPessoa') formPessoa! : NgForm;
    pessoa : Pessoa = new Pessoa();

    constructor(
      private pessoaService: PessoaService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit(): void {
      //snapshot.params de ActivedRoute dá acesso aos parametros passados 
      //operador + (antes do this) converte para numero

      let id = +this.route.snapshot.params['id'];
      //com o id, obtem a pessoa

      const res = this.pessoaService.buscarPorId(id);
        if (res !== undefined)
          this.pessoa = res;
        else
          throw new Error ("Pessoa não encontrada: id =" + id);
    }
      
    atualizar(): void {
    // Verifica se o formulário é válido
      if (this.formPessoa.form.valid) {
      // Efetivamente atualiza a pessoa
      this.pessoaService.atualizar(this.pessoa);
      // Redireciona para /pessoas/listar
      this.router.navigate(['/pessoas']);
      }
    }

}
