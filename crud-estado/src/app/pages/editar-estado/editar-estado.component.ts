import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-editar-estado',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-estado.component.html',
  styleUrl: './editar-estado.component.css'
})
export class EditarEstadoComponent {
@ViewChild('formEstado') formEstado! : NgForm;
estado: Estado = new Estado();

constructor(
  private estadoService: EstadoService,
  private route: ActivatedRoute,
  private router: Router
){}

ngOnInit(): void {
   
      let id = +this.route.snapshot.params['id'];

      const res = this.estadoService.buscarPorId(id);
        if (res !== undefined)
          this.estado = res;
        else
          throw new Error ("Estado não encontrado: id =" + id);
    }
      
    atualizar(): void {
    // Verifica se o formulário é válido
      if (this.formEstado.form.valid) {
      // Efetivamente atualiza 
      this.estadoService.atualizar(this.estado);
      // Redireciona para /estado/listar
      this.router.navigate(['/estado']);
      }
    }

}
