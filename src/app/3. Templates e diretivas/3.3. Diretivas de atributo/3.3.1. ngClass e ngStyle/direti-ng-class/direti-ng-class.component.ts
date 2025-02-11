import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direti-ng-class',
  imports: [CommonModule],
  templateUrl: './direti-ng-class.component.html',
  styleUrl: './direti-ng-class.component.scss'
})
export class DiretiNgClassComponent {
  collor : string = 'red';

}
