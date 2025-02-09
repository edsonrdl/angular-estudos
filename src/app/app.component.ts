
import { Component } from '@angular/core';
import { InterpolationSyntaxComponent } from './3. Templates e diretivas/3.1. Templates/interpolation-syntax/interpolation-syntax.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [InterpolationSyntaxComponent]
})
export class AppComponent {
  title = 'angular-estudos';
}
