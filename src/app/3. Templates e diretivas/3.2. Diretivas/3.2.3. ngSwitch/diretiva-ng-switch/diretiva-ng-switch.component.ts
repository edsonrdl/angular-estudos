import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrl: './diretiva-ng-switch.component.scss'
})
export class DiretivaNgSwitchComponent {
  pagamento:string = 'boleto';
}
