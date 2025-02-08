import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child-component/child.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
@ViewChild(ChildComponent) child!: ChildComponent;

callChildMethod() {
  this.child.childMethod();
}
}
