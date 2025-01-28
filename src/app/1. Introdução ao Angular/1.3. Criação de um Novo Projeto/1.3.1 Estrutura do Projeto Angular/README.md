# Estrutura do Projeto Angular

## 1.3.1 Estrutura do Projeto Angular

Quando um projeto Angular é criado usando o Angular CLI, a seguinte estrutura básica de diretórios e arquivos é gerada:

### Estrutura Principal
- **e2e/**: Diretório para testes de ponta a ponta.
- **node_modules/**: Contém todas as dependências do projeto gerenciadas pelo npm.
- **src/**: Diretório principal onde o código do projeto é escrito.
  - **app/**: Contém os componentes, serviços e módulos principais.
  - **assets/**: Diretório para recursos estáticos como imagens e arquivos.
  - **environments/**: Configurações específicas para diferentes ambientes (produção, desenvolvimento, etc.).
- **angular.json**: Arquivo de configuração do Angular CLI.
- **package.json**: Lista as dependências do projeto e scripts npm.
- **tsconfig.json**: Configuração do compilador TypeScript.
- **karma.conf.js**: Configuração para o framework de testes Karma.
- **README.md**: Arquivo para documentação inicial do projeto.
- **favicon.ico**: Ícone padrão do projeto.

### Estrutura do Diretório `src/`
O diretório `src/` é a base do desenvolvimento do projeto e contém:
- **main.ts**: Ponto de entrada principal da aplicação.
- **index.html**: Arquivo HTML que hospeda o aplicativo Angular.
- **styles.css** ou **styles.scss**: Arquivo de estilo global.
- **polyfills.ts**: Arquivo para suporte a navegadores mais antigos.

### Explicação do Diretório `app/`
O diretório `app/` contém:
- **app.component.ts**: O componente principal da aplicação.
- **app.component.html**: Template HTML do componente principal.
- **app.component.css** ou **app.component.scss**: Estilos associados ao componente principal.
- **app.component.spec.ts**: Arquivo de teste do componente principal.
- **app.module.ts**: O módulo raiz que organiza os componentes e serviços.

---

### Estrutura de Módulos e Componentes
Os projetos Angular utilizam a abordagem modular para facilitar a manutenção e escalabilidade. No diretório `app/`, é possível organizar o código em:
- **Módulos:** Cada funcionalidade ou área do sistema pode ser encapsulada em módulos para melhor organização.
- **Componentes:** São as unidades fundamentais da interface do usuário.
- **Serviços:** Contêm lógica de negócios e funções reutilizáveis para serem injetadas nos componentes.

#### Exemplo de Organização Modular:
- **user/**: Gerencia a funcionalidade de usuários.
  - **user.module.ts**
  - **user.component.ts**
  - **user.service.ts**

#### Observação:
Manter a estrutura organizada é essencial para projetos em larga escala, garantindo que novas funcionalidades possam ser facilmente adicionadas ou modificadas.
