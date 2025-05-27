import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { Usuario } from './shared/models';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cadastro de Pessoas';
    constructor(
      private router: Router,
      private loginService: LoginService

    ){}

    get usuarioLogado(): Usuario | null {
      return this.loginService. usuarioLogado;
    }

    logout(){
      this.loginService.logout();
      this.router.navigate(['/login']); 
    }

    temPermissao(...perfis: string[]) : boolean {
      let usu = this.usuarioLogado;
      if (usu != null && perfis.length>0){
        for (let p of perfis){
          if (usu.perfil.indexOf(p) !=1){
            return true;
          }
        }
      }
      return false; 
    }






}
