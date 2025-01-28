import { Component } from '@angular/core';
import { ParanteComponenteComponent } from './2. Componentes/2.2. Interação entre componentes/2.2.1. @input e @output/parante-componente/parante-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ParanteComponenteComponent]
})
export class AppComponent {
  title = 'angular-estudos';
}
