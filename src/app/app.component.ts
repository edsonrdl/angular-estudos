
import { Component } from '@angular/core';
import { ParentComponent } from './2. Componentes/2.2. Interação entre componentes/2.2.2. viewChild e ContentChild/contentChild/parent/parent.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ParentComponent]
})
export class AppComponent {
  title = 'angular-estudos';
}
