# Configuração do Ambiente para Angular

Configurar corretamente o ambiente de desenvolvimento é essencial para criar aplicações Angular de forma eficiente. Esta seção detalha os passos para instalar os requisitos básicos: **Node.js** e **npm**.

---

## **1.2.1 Instalação do Node.js e npm**

O **Node.js** e o **npm (Node Package Manager)** são fundamentais para:
- Executar o Angular CLI.
- Gerenciar dependências do projeto Angular.

### **Passos para Instalação**

1. **Baixar o Node.js**:
   - Acesse o site oficial: [Node.js Download](https://nodejs.org).
   - Escolha e baixe a versão **LTS (Long Term Support)**, recomendada para maior estabilidade.

2. **Instalar o Node.js**:
   - Siga o assistente de instalação conforme o seu sistema operacional:
     - **Windows**: Execute o arquivo `.msi` baixado.
     - **MacOS**: Use o pacote `.pkg`.
     - **Linux**: Siga o processo de instalação indicado no site.

3. **Verificar a Instalação**:
   - Após instalar, abra o terminal e execute:
     ```bash
     node -v
     ```
     - Isso exibirá a versão instalada do Node.js.
     ```bash
     npm -v
     ```
     - Isso exibirá a versão instalada do npm.

4. **Atualizar o npm** (opcional):
   - Caso precise da versão mais recente do npm:
     ```bash
     npm install -g npm@latest
     ```

---

## **Dicas para Gerenciamento do Node.js**

1. **Gerenciador de Versões (nvm)**:
   - Para alternar entre diferentes versões do Node.js, use o **nvm (Node Version Manager)**.
   - Instale o nvm conforme o sistema operacional:
     - **Linux/MacOS**: Siga as instruções em [nvm-sh](https://github.com/nvm-sh/nvm).
     - **Windows**: Use a ferramenta [nvm-windows](https://github.com/coreybutler/nvm-windows).

   - Com o nvm, você pode:
     - Listar versões disponíveis:
       ```bash
       nvm list
       ```
     - Instalar uma versão específica:
       ```bash
       nvm install <versão>
       ```
     - Usar uma versão específica:
       ```bash
       nvm use <versão>
       ```

2. **Verificar Compatibilidade do Angular**:
   - Certifique-se de que a versão do Node.js instalada seja compatível com a versão do Angular CLI que deseja usar. Verifique no site oficial do Angular.

---

## **Erros Comuns e Soluções**

1. **Erro: npm command not found**:
   - Certifique-se de que o **Node.js** e o **npm** foram adicionados ao PATH durante a instalação.

2. **Versão do Node.js muito antiga**:
   - Atualize para uma versão mais recente usando:
     ```bash
     nvm install --lts
     ```

3. **Permissões no Linux/MacOS**:
   - Evite usar `sudo` para instalar pacotes globais. Configure corretamente as permissões do npm.

---

Com o **Node.js** e o **npm** configurados, você estará pronto para instalar o Angular CLI e começar o desenvolvimento de aplicações Angular!
