import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direti-ng-style',
  imports: [CommonModule],
  templateUrl: './direti-ng-style.component.html',
  styleUrl: './direti-ng-style.component.scss'
})
export class DiretiNgStyleComponent {
  valor:boolean = false;
}
