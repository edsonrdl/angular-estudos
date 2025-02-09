
import { Component } from '@angular/core';
import { DiretivaNgSwitchComponent } from "./3. Templates e diretivas/3.2. Diretivas/3.2.3. ngSwitch/diretiva-ng-switch/diretiva-ng-switch.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [DiretivaNgSwitchComponent],
})
export class AppComponent {
  title = 'angular-estudos';
}
