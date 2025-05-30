import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../services/endereco.service';
import { Endereco } from '../../shared/models/endereco.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';


@Component({
  selector: 'app-listar-endereco',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-endereco.component.html',
  styleUrl: './listar-endereco.component.css'
})
export class ListarEnderecoComponent implements OnInit {
  enderecos : Endereco[] = [];
  constructor(private enderecoService: EnderecoService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[]{
    return this.enderecoService.listarTodos();
  }

    remover($event: any, endereco: Endereco): void {
      $event.preventDefault();
      if (confirm(`Deseja realmente remover este endereço ${endereco.rua}?`)) {
        this.enderecoService.remover(endereco.id!);
        this.enderecos = this.listarTodos();
      }
    }
    abrirModalEndereco(endereco: Endereco){
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }

}

