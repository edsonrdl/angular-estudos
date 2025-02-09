
import { Component } from '@angular/core';
import { DiretivaNgIfComponent } from "./3. Templates e diretivas/3.2. Diretivas/3.2.1. ngIf/diretiva-ng-if/diretiva-ng-if.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [DiretivaNgIfComponent]
})
export class AppComponent {
  title = 'angular-estudos';
}
