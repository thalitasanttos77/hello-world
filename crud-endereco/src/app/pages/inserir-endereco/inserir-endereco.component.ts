import { Component, ViewChild } from '@angular/core';
import { Endereco } from '../../shared/models/endereco.model';
import { FormsModule, NgForm} from '@angular/forms';
import { EnderecoService } from '../../services/endereco.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-endereco',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-endereco.component.html',
  styleUrl: './inserir-endereco.component.css'
})
export class InserirEnderecoComponent {
  @ViewChild('formEndereco') formEndereco! : NgForm;
  endereco : Endereco = new Endereco();

  constructor(
    private enderecoService: EnderecoService,
    private router: Router 
  ){}

  inserir(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate( ["/endereco"] );
    }
      // Para inserir:
      // - Verifica se o formulário é válido, se não deu nenhum erro
      // - Se OK
      // . Chama o inserir do Service, this.pessoa está preenchida (binding)
      // . Redireciona para /pessoas
  }

  listarTodos(): Endereco[] {
  return this.enderecoService.listarTodos();
}

}

