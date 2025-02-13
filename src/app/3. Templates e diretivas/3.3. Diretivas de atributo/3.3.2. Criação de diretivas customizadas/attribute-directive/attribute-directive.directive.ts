import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective {
  @Input() appAttributeDirective='';

  constructor(private el:ElementRef) {

   }
   @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.appAttributeDirective || 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}

// So usar no html <p appHighlight="lightblue">Passe o mouse aqui!</p>
