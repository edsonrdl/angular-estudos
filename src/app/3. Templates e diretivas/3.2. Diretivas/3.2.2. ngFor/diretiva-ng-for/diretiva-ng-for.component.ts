import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  imports: [CommonModule],
  templateUrl: './diretiva-ng-for.component.html',
  styleUrl: './diretiva-ng-for.component.scss'
})
export class DiretivaNgForComponent {
  pessoas = [{
    nome: 'Maria',
    idade: 25
  },
  {
    nome: 'João',
    idade: 26
  }]

}
