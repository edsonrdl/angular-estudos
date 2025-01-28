
# Configuração do Ambiente para Angular

## 1.2.2 Angular CLI: Instalação e Comandos Básicos

O **Angular CLI (Command Line Interface)** é uma ferramenta essencial para inicializar, desenvolver e gerenciar projetos Angular de maneira eficiente e padronizada.

---

### **Instalação do Angular CLI**

1. **Instalar Angular CLI**:
   - No terminal, execute:
     ```bash
     npm install -g @angular/cli
     ```
   - O flag `-g` indica que a instalação será global, permitindo usar o Angular CLI em qualquer lugar.

2. **Verificar Instalação**:
   - Após a instalação, confirme a versão instalada com:
     ```bash
     ng version
     ```
   - Este comando exibirá as versões do Angular CLI, Angular Framework e outras dependências.

---

### **Comandos Básicos do Angular CLI**

#### **1. Criar um Novo Projeto**
- Para criar um novo projeto Angular:
  ```bash
  ng new nome-do-projeto
  ```
- Durante a criação, o CLI pedirá para:
  - Ativar o **Angular Routing** (para gerenciamento de rotas).
  - Escolher o estilo de folhas de estilo (CSS, SCSS, SASS, ou LESS).

#### **2. Servir o Projeto (Iniciar o Servidor)**
- Navegue até o diretório do projeto:
  ```bash
  cd nome-do-projeto
  ```
- Inicie o servidor de desenvolvimento com:
  ```bash
  ng serve
  ```
- O servidor será iniciado em `http://localhost:4200`. Qualquer mudança no código será refletida automaticamente no navegador.

#### **3. Gerar Componentes, Serviços e Outros**

- **Gerar um componente**:
  ```bash
  ng generate component nome-componente
  ```
  Ou sua forma abreviada:
  ```bash
  ng g c nome-componente
  ```
  - Isso criará um diretório com os arquivos do componente (`HTML`, `CSS`, `TS` e `spec.ts`).

- **Gerar um serviço**:
  ```bash
  ng generate service nome-servico
  ```
  Forma abreviada:
  ```bash
  ng g s nome-servico
  ```
  - Isso criará um arquivo de serviço pronto para ser injetado nos componentes.

- **Outros Geradores**:
  - Diretivas: `ng generate directive nome-diretiva` ou `ng g d nome-diretiva`.
  - Pipes: `ng generate pipe nome-pipe` ou `ng g p nome-pipe`.
  - Guardas de rotas: `ng generate guard nome-guard` ou `ng g g nome-guard`.

#### **4. Build para Produção**
- Para gerar os arquivos otimizados para produção:
  ```bash
  ng build --prod
  ```
  - Os arquivos serão gerados na pasta `dist/`.
  - Inclui otimizações como minificação, empacotamento e pré-carregamento.

#### **5. Ver Informações do Projeto**
- Para listar informações sobre o projeto:
  ```bash
  ng config
  ```
- Para verificar os módulos e dependências:
  ```bash
  ng analytics
  ```

#### **6. Ajuda**
- Para listar todos os comandos disponíveis e suas descrições:
  ```bash
  ng help
  ```

---

### **Dicas Adicionais**

1. **Atualização do Angular CLI**:
   - Certifique-se de manter o Angular CLI atualizado para acessar novos recursos e correções de bugs:
     ```bash
     npm install -g @angular/cli@latest
     ```

2. **Adicionar Dependências**:
   - Para instalar bibliotecas adicionais no projeto:
     ```bash
     npm install nome-da-biblioteca
     ```
   - Exemplo: Instalar o Angular Material:
     ```bash
     ng add @angular/material
     ```

3. **Remoção de Dependências**:
   - Para remover uma biblioteca:
     ```bash
     npm uninstall nome-da-biblioteca
     ```

---

Com esses passos e comandos, você tem as ferramentas necessárias para criar e gerenciar projetos Angular com facilidade e produtividade. Use o Angular CLI para manter seu código organizado e otimizado!
