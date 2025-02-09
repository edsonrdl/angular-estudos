import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: 'app-parent',
  imports: [ContainerComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

}
