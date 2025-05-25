import { Component, OnInit} from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Pessoa, SharedModule } from '../../shared';
import { NgxMaskPipe } from 'ngx-mask';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPessoaComponent } from '../modal-pessoa/modal-pessoa.component';

@Component({
  selector: 'app-listar-pessoa',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, NgxMaskPipe],
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css'
})
export class ListarPessoaComponent implements OnInit {
  pessoas : Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private modalService: NgbModal){}

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

    abrirModalPessoa(pessoa: Pessoa){
      const modalRef = this.modalService.open(ModalPessoaComponent);
      modalRef.componentInstance.pessoa = pessoa;



    }

  }

