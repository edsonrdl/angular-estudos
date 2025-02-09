import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {

  img: string ='assets/angular.png';

  alterImg(){
    this.img == 'assets/angular.png'? this.img = 'assets/typescript.png' : this.img = 'assets/angular.png';
   console.log(this.img);
  }

}
