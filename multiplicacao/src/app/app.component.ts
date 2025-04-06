import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplicacaoComponent } from './feature/pages/multiplicacao/multiplicacao.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MultiplicacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplicacao';
}
