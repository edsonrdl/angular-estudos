import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'  // Seletor para aplicação da diretiva
})
export class StructuralDirectiveDirective {

  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);  // Adiciona o template ao DOM se a condição for verdadeira
    } else {
      this.viewContainer.clear();  // Remove o template do DOM se a condição for falsa
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,  // Refere-se ao template onde a diretiva é aplicada
    private viewContainer: ViewContainerRef  // Manipula a inserção do template no DOM
  ) {}

}


// Aplicar a diretiva em um elemento HTML:
// html
// Copiar
// <div *appStructuralDirective="true">
//   Este conteúdo será exibido quando a condição for verdadeira.
// </div>
