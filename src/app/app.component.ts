import { ParentComponent } from './2. Componentes/2.2. Interação entre componentes/2.2.2. viewChild e ContentChild/viewChild/parent-component/parent.component';
import { Component } from '@angular/core';
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
