
## 2.1.2 Estrutura do Componente

Um componente Angular é composto pelos seguintes elementos principais:

### Classe do Componente (`.ts`)
- Define a lógica e os dados do componente.
- Usa o decorador `@Component` para especificar metadados, como o seletor, o template e o estilo.

#### Exemplo:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-do-componente',
  templateUrl: './nome-do-componente.component.html',
  styleUrls: ['./nome-do-componente.component.css']
})
export class NomeDoComponenteComponent {
  titulo: string = 'Bem-vindo ao meu componente!';
}
```

### Template HTML (`.html`)
- Define a estrutura visual do componente usando HTML.

#### Exemplo:
```html
<div>
  <h1>{{ titulo }}</h1>
  <p>Este é um exemplo de componente no Angular.</p>
</div>
```

### Estilos (`.css` ou `.scss`)
- Define os estilos específicos para o componente.

#### Exemplo:
```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### Testes Unitários (`.spec.ts`)
- Arquivo gerado para escrever testes automatizados do componente.
