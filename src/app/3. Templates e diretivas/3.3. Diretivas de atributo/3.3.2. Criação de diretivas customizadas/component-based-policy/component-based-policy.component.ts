import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-component-based-policy',
  imports: [],
  templateUrl: './component-based-policy.component.html',
  styleUrl: './component-based-policy.component.scss'
})
export class ComponentBasedPolicyComponent {
  @Input() color: string = 'blue';
}
