import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-syntax',
  imports: [],
  standalone: true,
  templateUrl: './interpolation-syntax.component.html',
  styleUrl: './interpolation-syntax.component.scss'
})
export class InterpolationSyntaxComponent {
  technology : string  = 'Angular';
  areaTechnology : string = 'Framework front-end';
}
