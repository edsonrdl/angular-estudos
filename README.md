## Estudos  **ANGULAR**
# Guia de Instalação e Uso do Angular

## 1. Preparação do Ambiente

### 1.2.1. Instalação do Node.js e npm
1. Faça o download e instale a versão LTS do Node.js no site oficial: [https://nodejs.org/](https://nodejs.org/).
2. Após a instalação, verifique se o Node.js e o npm estão instalados corretamente:
   ```bash
   node -v
   npm -v
   ```

### 1.2.2. Angular CLI: Instalação e Comandos Básicos
1. Instale o Angular CLI globalmente no seu sistema:
   ```bash
   npm install -g @angular/cli
   ```
2. Verifique a instalação do Angular CLI:
   ```bash
   ng version
   ```

## 1.3. Criação de um Novo Projeto

### 1.3.1. Estrutura do Projeto Angular
1. Crie um novo projeto Angular:
   ```bash
   ng new nome-do-projeto
   ```
2. Durante a criação do projeto, você será solicitado a:
   - Escolher se deseja habilitar o roteamento (digite `Yes` ou `No`).
   - Selecionar o tipo de folha de estilo (CSS, SCSS, LESS ou Stylus).
3. Após a configuração, navegue até a pasta do projeto:
   ```bash
   cd nome-do-projeto
   ```
4. Estrutura básica do projeto:
   ```
   nome-do-projeto/
   ├── src/
   │   ├── app/
   │   │   ├── app.component.css
   │   │   ├── app.component.html
   │   │   ├── app.component.spec.ts
   │   │   ├── app.component.ts
   │   │   ├── app.module.ts
   │   └── styles.css
   ├── angular.json
   ├── package.json
   ├── karma.conf.js
   ```

### 1.3.2. Comandos Básicos do Angular CLI

#### 1. Gerar Componentes

- **Standalone Component (recomendado para Angular 18 ou superior):**
  ```bash
  ng generate component nome-do-componente --standalone
  ```

- **Componente com Módulo (não standalone):**
  ```bash
  ng generate component nome-do-componente
  ```

#### 2. Gerar Componentes com Arquivos de Teste

- **Standalone Component com arquivos de teste:**
  ```bash
  ng generate component nome-do-componente --standalone --skip-tests=false
  ```

- **Componente com Módulo e arquivos de teste:**
  ```bash
  ng generate component nome-do-componente --skip-tests=false
  ```

#### 3. Gerar Outros Elementos

- **Gerar um serviço:**
  ```bash
  ng generate service nome-do-servico
  ```

- **Gerar uma diretiva:**
  ```bash
  ng generate directive nome-da-diretiva
  ```

- **Gerar um módulo:**
  ```bash
  ng generate module nome-do-modulo
  ```

#### 4. Rodar a Aplicação

Para iniciar o servidor de desenvolvimento:
```bash
ng serve
```
A aplicação estará disponível em [http://localhost:4200](http://localhost:4200).

#### 5. Rodar Testes

Para executar os testes unitários:
```bash
ng test
```
Para gerar relatórios de cobertura de testes:
```bash
ng test --code-coverage
```

---

Com esses passos, você terá um projeto Angular configurado e pronto para uso. Siga os comandos básicos para adicionar novos componentes, serviços e funcionalidades conforme necessário.
