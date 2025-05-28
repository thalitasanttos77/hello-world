import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from '../shared/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //BASE_URL = "http://localhost:3000/usuarios";
  BASE_URL= "http://localhost:8080/usuarios"

    httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

  constructor(private httpClient: HttpClient){}

  public get usuarioLogado(): Usuario | null {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
  localStorage[LS_CHAVE] = JSON.stringify(usuario);
}

logout() {
  delete localStorage[LS_CHAVE];
}

login(login: Login): Observable<Usuario | null> {
  return this.httpClient.get<Usuario[]>(this.BASE_URL, this.httpOptions)
    .pipe(map(lista => {
      let usu = lista.find(u => u.login=== login.senha && 
                                u.login===login.senha)
      if(usu != undefined){
        return usu;
      }
      else {
        return null;
      }
    }));
}
}