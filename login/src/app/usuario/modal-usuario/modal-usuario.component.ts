import { Component, Input } from '@angular/core';
import { Usuario } from '../../shared/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-usuario',
  imports: [],
  templateUrl: './modal-usuario.component.html',
  styleUrl: './modal-usuario.component.css'
})
export class ModalUsuarioComponent {
  @Input() usuario: Usuario = new Usuario();

  constructor(public activeModal: NgbActiveModal){}

}
