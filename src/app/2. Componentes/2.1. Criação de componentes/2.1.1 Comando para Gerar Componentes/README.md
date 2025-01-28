# Criação de Componentes no Angular

## 2.1.1 Comando para Gerar Componentes

No Angular, a criação de componentes é facilitada pelo Angular CLI. Com um simples comando, é possível gerar todos os arquivos necessários para o funcionamento de um componente.

### Comando
```bash
ng generate component nome-do-componente
```
Ou sua forma abreviada:
```bash
ng g c nome-do-componente
```

### O que o comando gera?
O comando cria os seguintes arquivos na pasta correspondente ao componente:
- `nome-do-componente.component.ts` (classe do componente)
- `nome-do-componente.component.html` (template HTML)
- `nome-do-componente.component.css` (estilo CSS, pode ser SCSS dependendo da configuração do projeto)
- `nome-do-componente.component.spec.ts` (arquivo para testes unitários)
