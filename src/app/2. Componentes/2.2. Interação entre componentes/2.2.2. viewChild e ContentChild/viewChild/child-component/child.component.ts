import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
childMethod(){
  console.log('Método do filho');
}
}
