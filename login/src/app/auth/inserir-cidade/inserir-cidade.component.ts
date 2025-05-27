import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgSelectOption} from '@angular/forms';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../../services/cidade.service';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { EstadoService } from '../../services/estado.service';
import { Estado } from '../../shared/models/estado.model';

@Component({
  selector: 'app-inserir-cidade',
  imports: [CommonModule, FormsModule, RouterModule, NgSelectModule],
  templateUrl: './inserir-cidade.component.html',
  styleUrl: './inserir-cidade.component.css'
})
export class InserirCidadeComponent implements OnInit{
  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();
  estados: Estado[] = [];

  constructor(
    private cidadeService : CidadeService, 
    private estadoService: EstadoService,
    private router: Router

  ){}
  ngOnInit(): void {
    this.estados=this.estadoService.listarTodos();
  }

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
