import { Component, OnInit, Input} from '@angular/core';
import { Endereco } from '../../shared/models/endereco.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-endereco',
  imports: [],
  templateUrl: './modal-endereco.component.html',
  styleUrl: './modal-endereco.component.css'
})
export class ModalEnderecoComponent {
  @Input () endereco!: Endereco;
  constructor(public activeModal: NgbActiveModal){}

}
