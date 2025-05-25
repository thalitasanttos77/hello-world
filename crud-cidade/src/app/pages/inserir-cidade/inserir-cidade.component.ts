import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../../services/cidade.service';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-cidade',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-cidade.component.html',
  styleUrl: './inserir-cidade.component.css'
})
export class InserirCidadeComponent {
  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();

  constructor(
    private cidadeService : CidadeService, 
    private router: Router
  ){}

  inserir(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate( ["/cidade"] );
    }
      // Para inserir:
      // - Verifica se o formulário é válido, se não deu nenhum erro
      // - Se OK
      // . Chama o inserir do Service, this.pessoa está preenchida (binding)
      // . Redireciona para /cidade
  }

  listarTodos(): Cidade[] {
  return this.cidadeService.listarTodos();
}

}
