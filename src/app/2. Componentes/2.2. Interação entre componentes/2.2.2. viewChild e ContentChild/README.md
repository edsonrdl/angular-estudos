# Interação entre Componentes no Angular: ViewChild e ContentChild

Este documento aborda as técnicas de interação entre componentes no Angular usando os decoradores **@ViewChild** e **@ContentChild**. Abaixo estão explicações detalhadas, exemplos práticos e orientações sobre quando e como usar cada um desses decoradores.

---

## 1. ViewChild

O decorador `@ViewChild` permite acessar e manipular elementos DOM ou componentes filhos declarados diretamente no template do componente pai. Ele é útil para casos onde você precisa de controle direto sobre os componentes ou elementos do template.

### **Quando usar ViewChild?**

- Quando você precisa manipular ou interagir diretamente com um componente ou elemento filho no DOM.
- Exemplos incluem:
  - Ativar métodos ou propriedades de um componente filho.
  - Ajustar atributos ou estilos de elementos DOM no template.

### Exemplo Prático: Acessar Método do Filho

#### **Componente Filho (`child.component.ts`)**

O componente filho possui um método que será chamado pelo componente pai:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Eu sou o componente filho!</p>`,
})
export class ChildComponent {
  childMethod() {
    console.log('Método do Filho foi chamado!');
  }
}
```

#### **Componente Pai (`parent.component.ts`)**

O componente pai usa `@ViewChild` para acessar o componente filho e chamar o método `childMethod`:

```typescript
import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <app-child></app-child>
      <button (click)="callChildMethod()">Chamar método do Filho</button>
    </div>
  `,
})
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;

  callChildMethod() {
    this.child.childMethod(); // Chama o método do componente Filho
  }
}
```

## 2. ContentChild

O decorador `@ContentChild` permite acessar e manipular o conteúdo projetado dentro de um componente utilizando `<ng-content>`. Ele é útil em casos onde o conteúdo do componente não é fixo e é injetado dinamicamente.

### **Quando usar ContentChild?**

- Use `ContentChild` para interagir com elementos que são projetados como conteúdo em um componente.
- Exemplos incluem:
  - Manipular elementos HTML passados para dentro de um componente container.
  - Acessar ou estilizar conteúdo projetado dinamicamente.

### Exemplo Prático: Conteúdo Projetado

#### **Componente Container (`container.component.ts`)**

O componente container utiliza `@ContentChild` para acessar o conteúdo projetado e manipulá-lo:

```typescript
import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<ng-content></ng-content>`,
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(ElementRef) projectedContent!: ElementRef;

  ngAfterContentInit() {
    console.log(this.projectedContent.nativeElement.textContent); // "Este conteúdo foi projetado!"
  }
}
```

#### **Componente Pai (`parent.component.ts`)**

O componente pai projeta um conteúdo (parágrafo `<p>`) dentro do container:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-container>
      <p>Este conteúdo foi projetado!</p>
    </app-container>
  `,
})
export class ParentComponent {}
```

---

## Resumo das Diferenças

| Decorador       | Descrição                                                                 | Escopo                                           | Exemplo de Aplicação                                  |
|------------------|---------------------------------------------------------------------------|-------------------------------------------------|------------------------------------------------------|
| **ViewChild**   | Acessa componentes/elementos declarados no template.                     | Dentro do componente que o declara.            | `@ViewChild(ChildComponent) child!: ChildComponent;` |
| **ContentChild**| Acessa conteúdo projetado via `<ng-content>`.                            | Conteúdo externo projetado no componente.      | `@ContentChild(ElementRef) content!: ElementRef;`    |

---

### **Passo a Passo Detalhado**

#### 1. Usar ViewChild
   - Declare `@ViewChild` no componente pai.
   - Acesse métodos ou propriedades do componente filho diretamente no código do pai.
   - Exemplo: Controle de exibição ou inicialização de componentes filhos.

#### 2. Usar ContentChild
   - Declare `@ContentChild` no componente container.
   - Acesse elementos ou propriedades do conteúdo projetado dentro do componente.
   - Exemplo: Estilizar ou acessar conteúdo dinâmico projetado.

---

Se tiver dúvidas ou sugestões, sinta-se à vontade para contribuir! 🚀
