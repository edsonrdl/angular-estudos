
import { Component } from '@angular/core';
import { PropertyBindingComponent } from "./3. Templates e diretivas/3.1. Templates/3.1.2. Bindings  event e property/property-binding/property-binding.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ PropertyBindingComponent]
})
export class AppComponent {
  title = 'angular-estudos';
}
