
import { Component } from '@angular/core';
import { DiretivaNgForComponent } from "./3. Templates e diretivas/3.2. Diretivas/3.2.2. ngFor/diretiva-ng-for/diretiva-ng-for.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ DiretivaNgForComponent]
})
export class AppComponent {
  title = 'angular-estudos';
}
