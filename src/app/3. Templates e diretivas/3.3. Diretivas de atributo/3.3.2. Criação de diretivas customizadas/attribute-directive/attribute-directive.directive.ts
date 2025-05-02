import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'  // Seletor para aplicação da diretiva
})
export class AttributeDirectiveDirective {
  @Input() appAttributeDirective = '';  // Atributo para passar a cor de fundo

  constructor(private el: ElementRef) {}

  // Evento de mouse entrar
  @HostListener('mouseenter') onMouseEnter() {
    // Altera a cor de fundo do elemento ao passar o mouse
    this.el.nativeElement.style.backgroundColor = this.appAttributeDirective || 'yellow';
  }

  // Evento de mouse sair
  @HostListener('mouseleave') onMouseLeave() {
    // Remove a cor de fundo ao tirar o mouse
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}

//Aplciar no html
//<p appAttributeDirective="lightblue">Passe o mouse aqui!</p>

