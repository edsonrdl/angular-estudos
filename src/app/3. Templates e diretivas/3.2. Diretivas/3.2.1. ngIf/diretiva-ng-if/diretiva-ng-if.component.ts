import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ng-if.component.html',
  styleUrl: './diretiva-ng-if.component.scss'
})
export class DiretivaNgIfComponent {

 num1:number=10;

}
