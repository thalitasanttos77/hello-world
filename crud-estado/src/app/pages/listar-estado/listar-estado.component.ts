import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { Estado } from '../../shared/models/estado.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-estado',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-estado.component.html',
  styleUrl: './listar-estado.component.css'
})
export class ListarEstadoComponent implements OnInit{
  estados: Estado [] = [];
  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado []{
    return this.estadoService.listarTodos();
  }

    remover($event: any, estado: Estado): void {
      $event.preventDefault();
      if (confirm(`Deseja realmente remover este estado ${estado.id}?`)) {
        this.estadoService.remover(estado.id!);
        this.estados = this.listarTodos();
      }
    }

}
