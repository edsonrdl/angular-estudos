📚 Diretivas no Angular
As diretivas no Angular são instruções que permitem manipular o DOM de forma dinâmica. Elas podem alterar a estrutura, o comportamento ou o estilo dos elementos HTML.

📌 Tipos de Diretivas no Angular
Diretivas de Atributo
➡️ Alteram a aparência ou o comportamento de um elemento.
➡️ Exemplo: alterar cor, tamanho ou adicionar classes CSS.

Diretivas Estruturais
➡️ Alteram a estrutura do DOM, incluindo ou removendo elementos.
➡️ Exemplo: exibir ou esconder elementos com base em condições.

🚀 Diretivas de Atributo (Attribute Directives)
Essas diretivas alteram a aparência ou o comportamento de elementos DOM.

✅ Exemplo: Usando ngClass e ngStyle
<button [ngClass]="{'btn-primary': isPrimary, 'btn-danger': !isPrimary}">
  Botão Dinâmico
</button>

<div [ngStyle]="{'color': isError ? 'red' : 'green'}">
  Mensagem de Status
</div>
ngClass: Aplica classes CSS dinamicamente.
ngStyle: Aplica estilos inline com base em condições.
✅ Criando uma Diretiva de Atributo Personalizada
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
Uso no HTML:

<p appHighlight>Passe o mouse para destacar este texto.</p>
🏗️ Diretivas Estruturais (Structural Directives)
Essas diretivas adicionam ou removem elementos no DOM.

✅ Exemplos Comuns: *ngIf, *ngFor e *ngSwitch
<!-- *ngIf: Condicional -->
<p *ngIf="isVisible">Este texto está visível.</p>

<!-- *ngFor: Iteração -->
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<!-- *ngSwitch: Condições Múltiplas -->
<div [ngSwitch]="status">
  <p *ngSwitchCase="'ativo'">Usuário Ativo</p>
  <p *ngSwitchCase="'inativo'">Usuário Inativo</p>
  <p *ngSwitchDefault>Status Desconhecido</p>
</div>
✅ Criando uma Diretiva Estrutural Personalizada
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  @Input() set appIfNot(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
Uso no HTML:

<p *appIfNot="isLoggedIn">Você precisa estar logado para ver este conteúdo.</p>
🎯 Conclusão
Use diretivas de atributo para alterar aparência ou comportamento de elementos.
Use diretivas estruturais para adicionar ou remover elementos do DOM.
Crie diretivas personalizadas para comportamentos específicos que não são contemplados pelo Angular.
Mantenha o código limpo, reativo e otimizado.
🚀 As diretivas são uma das ferramentas mais poderosas do Angular para criar interfaces dinâmicas e eficientes!
