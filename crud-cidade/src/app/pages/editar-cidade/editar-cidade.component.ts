import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../../services/cidade.service';


@Component({
  selector: 'app-editar-cidade',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-cidade.component.html',
  styleUrl: './editar-cidade.component.css'
})
export class EditarCidadeComponent implements OnInit {
@ViewChild('formCidade') formCidade! : NgForm;
cidade: Cidade = new Cidade();
constructor(
  private cidadeService: CidadeService,
  private route: ActivatedRoute,
  private router: Router
){}

ngOnInit(): void {
   
      let id = +this.route.snapshot.params['id'];

      const res = this.cidadeService.buscarPorId(id);
        if (res !== undefined)
          this.cidade = res;
        else
          throw new Error ("Cidade não encontrada: id =" + id);
    }
      
    atualizar(): void {
    // Verifica se o formulário é válido
      if (this.formCidade.form.valid) {
      // Efetivamente atualiza o endereço
      this.cidadeService.atualizar(this.cidade);
      // Redireciona para /cidade/listar
      this.router.navigate(['/cidade']);
      }
    }


}
