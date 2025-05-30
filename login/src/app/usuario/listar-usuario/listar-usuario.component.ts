import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Usuario } from '../../shared/models';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-listar-usuario',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent implements OnInit{
  usuarios : Usuario[] = [];
  mensagem: string ="";
  mensagem_detalhes: string ="";

  constructor(private usuarioService: UsuarioService, private modalService : NgbModal){}

  ngOnInit(): void {
    this.listarTodos();
  }
  listarTodos(): Usuario[]{
    this.usuarioService.listarTodos().subscribe({
      next: (data: Usuario[] | null) => {
        if(data==null){
          this.usuarios=[];
        }
        else {
          this.usuarios = data;
        }
      },
      error: (err) => {
        this.mensagem = "Erro buscando lista de usuários";
        this.mensagem_detalhes = `[${err.status}] ${err.message}`;

      }
      });
      return this.usuarios;
  }
  remover($event: any, usuario: Usuario): void {
  //remover ($event: ArrayConstructor, usuario: Usuario): void {
    $event.preventDefault();
    this.mensagem="";
    this.mensagem_detalhes="";
    //if (confirm('Deseja realmente remover o usuário `${usuario.nome}?')) {
    if (confirm(`Deseja realmente remover o usuário ${usuario.nome}?`)) {

      this.usuarioService.remover(usuario.id!).
        subscribe({
          complete: () => { this.listarTodos();},
          error: (err) => {
            this.mensagem = `Erro removendo usuário ${usuario.id} - ${usuario.nome}`;
            this.mensagem_detalhes = `[${err.status}] ${err.message}`;
          }
        });


    }
  }
  abrirModal(usuario: Usuario){
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario=usuario;
  }

}
