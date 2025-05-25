import { Component, ViewChild, OnInit} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { EnderecoService } from '../../services/endereco.service';
import { Endereco } from '../../shared/models/endereco.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-endereco',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-endereco.component.html',
  styleUrl: './editar-endereco.component.css'
})
export class EditarEnderecoComponent {
@ViewChild('formEndereco') formEndereco! : NgForm;
endereco: Endereco = new Endereco();
constructor(
  private enderecoService: EnderecoService,
  private route: ActivatedRoute,
  private router: Router
){}

ngOnInit(): void {
   
      let id = +this.route.snapshot.params['id'];

      const res = this.enderecoService.buscarPorId(id);
        if (res !== undefined)
          this.endereco = res;
        else
          throw new Error ("Endereço não encontrado: id =" + id);
    }
      
    atualizar(): void {
    // Verifica se o formulário é válido
      if (this.formEndereco.form.valid) {
      // Efetivamente atualiza o endereço
      this.enderecoService.atualizar(this.endereco);
      // Redireciona para /endereco/listar
      this.router.navigate(['/endereco']);
      }
    }

}
