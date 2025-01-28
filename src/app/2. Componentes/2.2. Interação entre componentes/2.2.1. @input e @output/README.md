# Interação entre Componentes no Angular

Este documento aborda as técnicas de interação entre componentes no Angular, com foco nos decoradores **@Input** e **@Output**. Abaixo estão explicações detalhadas, exemplos práticos e orientações sobre quando e como usar cada um desses decoradores.

---

## 1. @Input e @Output

Os decoradores `@Input` e `@Output` são usados para estabelecer a comunicação entre componentes pai e filho no Angular. Eles seguem o princípio de comunicação unidirecional, ou seja, os dados fluem em uma direção específica:

- **@Input**: Permite que dados fluam do **pai para o filho**.
- **@Output**: Permite que dados ou eventos fluam do **filho para o pai**.

### **Quando usar @Input e @Output?**

- Use `@Input` quando o componente filho precisar exibir ou manipular dados enviados pelo componente pai.
- Use `@Output` quando o componente filho precisar notificar ou enviar informações de volta ao componente pai, geralmente em resposta a uma interação do usuário.

### **Como funciona o fluxo de dados?**

1. **Pai para Filho**: Utilizamos `@Input` para passar valores diretamente do componente pai para o filho. O componente pai utiliza **property binding** para enviar os dados ao componente filho.
2. **Filho para Pai**: Utilizamos `@Output` para emitir eventos ou dados do componente filho para o pai. O pai escuta esses eventos usando **event binding**.

### Exemplo Prático: Comunicação Pai-Filho

#### **Componente Filho (`child.component.ts`)**

O componente filho recebe dados do pai via `@Input` e envia eventos para o pai via `@Output`:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <p>Mensagem do Pai: {{ messageFromParent }}</p>
      <button (click)="sendMessageToParent()">Enviar mensagem para o Pai</button>
    </div>
  `,
})
export class ChildComponent {
  @Input() messageFromParent: string = ''; // Recebe dados do Pai
  @Output() messageToParent = new EventEmitter<string>(); // Envia eventos para o Pai

  sendMessageToParent() {
    this.messageToParent.emit('Olá, Pai!'); // Emite o evento para o Pai
  }
}
```

#### **Componente Pai (`parent.component.ts`)**

O componente pai envia dados ao filho via `@Input` e escuta eventos do filho via `@Output`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <app-child 
        [messageFromParent]="'Olá, Filho!'" 
        (messageToParent)="receiveMessage($event)">
      </app-child>
      <p>Mensagem do Filho: {{ messageFromChild }}</p>
    </div>
  `,
})
export class ParentComponent {
  messageFromChild: string = '';

  receiveMessage(message: string) {
    this.messageFromChild = message; // Atualiza com o dado recebido do Filho
  }
}
```

---

### **Passo a Passo Detalhado**

#### 1. Configurar o Componente Filho
   - Utilize `@Input` para receber dados do componente pai.
   - Utilize `@Output` e `EventEmitter` para emitir eventos de volta ao componente pai.

#### 2. Configurar o Componente Pai
   - Passe dados para o componente filho utilizando **property binding**: `[propriedade]="valor"`.
   - Escute eventos emitidos pelo filho utilizando **event binding**: `(evento)="metodo($event)"`.

#### 3. Testar o Fluxo
   - Verifique se os dados estão fluindo corretamente entre os componentes.
   - Garanta que os eventos emitidos pelo filho estão sendo capturados no pai.

### **Casos de Uso Comuns**

1. **Formulários Dinâmicos**: Um componente pai envia configurações de campos de formulário para o filho renderizar. O filho envia os valores preenchidos de volta ao pai.
2. **Componentes Interativos**: Um componente pai envia dados para um gráfico, e o filho emite eventos ao clicar em um ponto do gráfico.
3. **Notificações**: Um componente pai envia informações gerais e o filho responde com ações específicas, como confirmar ou rejeitar.

---
