import { Component,ContentChild,ElementRef,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent  implements AfterContentInit {
  @ContentChild('content') projectedContent!: ElementRef;

  ngAfterContentInit() {
    console.log(this.projectedContent.nativeElement.textContent);
  }

}
