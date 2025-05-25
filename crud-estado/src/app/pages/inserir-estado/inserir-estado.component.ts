import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../../services/estado.service';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-inserir-estado',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-estado.component.html',
  styleUrl: './inserir-estado.component.css'
})
export class InserirEstadoComponent {
   @ViewChild('formEstado') formEstado! : NgForm;
   estado : Estado = new Estado();

    constructor(
    private estadoService : EstadoService, 
    private router: Router
  ){}

  inserir(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate( ["/estado"] );
    }
  }

  listarTodos(): Estado[] {
  return this.estadoService.listarTodos();
}

}
