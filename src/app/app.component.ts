
import { Component } from '@angular/core';
import { DiretivaNgSwitchComponent } from "./3. Templates e diretivas/3.2. Diretivas/3.2.3. ngSwitch/diretiva-ng-switch/diretiva-ng-switch.component";
import { DiretiNgStyleComponent } from "./3. Templates e diretivas/3.3. Diretivas de atributo/3.3.1. ngClass e ngStyle/direti-ng-style/direti-ng-style.component";
import { DiretiNgClassComponent } from "./3. Templates e diretivas/3.3. Diretivas de atributo/3.3.1. ngClass e ngStyle/direti-ng-class/direti-ng-class.component";
import { FormTecComponent } from "./7. Formularios/7.1. Formularios Reativos/7.1.1. FormGroup e FormControl/form-tec/form-tec.component";
import { ParentComponent } from './2. Componentes/2.3. Metodos de ciclo de vida de componentes/2.3.1. ngOnDestroy/parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [DiretivaNgSwitchComponent, DiretiNgStyleComponent, DiretiNgClassComponent, FormTecComponent, ParentComponent],
})
export class AppComponent {
  title = 'angular-estudos';
}
