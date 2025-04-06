import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivisaoComponent } from "./feature/pages/divisao/divisao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DivisaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'divisao';
}
