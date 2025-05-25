import { Component, OnInit} from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CaixaAltaPipe } from '../../shared/pipes/caixa-alta.pipe';

@Component({
  selector: 'app-listar-pessoa',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxMaskPipe, CaixaAltaPipe],
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css'
})
export class ListarPessoaComponent implements OnInit {
  pessoas : Pessoa[] = [];

  constructor(private pessoaService: PessoaService){}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }
  listarTodos(): Pessoa[]{
    return this.pessoaService.listarTodos();
    }

    remover($event: any, pessoa: Pessoa): void {
      $event.preventDefault();
      if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
        this.pessoaService.remover(pessoa.id!);
        this.pessoas = this.listarTodos();
      }
    }

  }

