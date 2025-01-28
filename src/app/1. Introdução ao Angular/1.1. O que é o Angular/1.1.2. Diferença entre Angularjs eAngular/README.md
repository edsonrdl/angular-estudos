## 1.1.2 Diferenças entre AngularJS e Angular

Com o passar dos anos, o Angular evoluiu significativamente desde sua primeira versão, o **AngularJS**, até o **Angular moderno**. Abaixo, são destacadas as principais diferenças entre essas duas abordagens.

---

### **AngularJS (2010-2016)**
- **Baseado em JavaScript**:
  - Utilizava **JavaScript** como linguagem principal, limitando o suporte a tipagem e ferramentas modernas.
- **Arquitetura MVC**:
  - Adotava o padrão **Model-View-Controller**, o que tornava a estrutura do código mais complexa em aplicações grandes.
- **Sem modularização nativa**:
  - A divisão do código em módulos era limitada e dependia de práticas manuais.
- **Renderização baseada em Digest Loop**:
  - Ciclo de verificação constante para rastrear mudanças no DOM, resultando em menor desempenho para aplicações grandes.
- **Complexidade crescente**:
  - Gerenciamento difícil à medida que a aplicação crescia, principalmente devido à falta de boas práticas estruturais.

---

### **Angular (a partir de 2016)**
- **Baseado em TypeScript**:
  - Usa **TypeScript**, oferecendo tipagem estática, ferramentas de desenvolvimento aprimoradas e maior produtividade.
- **Arquitetura baseada em componentes**:
  - Substituiu o MVC por **componentes reutilizáveis**, facilitando a manutenção e escalabilidade.
- **Suporte nativo à modularização**:
  - Introduziu **NgModules** para organizar e dividir o código em módulos funcionais.
- **Renderização com Ivy Renderer**:
  - Um motor de renderização mais eficiente, que reduz o tamanho de pacotes e melhora o desempenho.
- **Ferramentas modernas**:
  - Inclui a **Angular CLI**, que facilita o desenvolvimento e automação de tarefas.
- **Desempenho aprimorado**:
  - Melhor suporte para técnicas como **Lazy Loading**, pré-carregamento e renderização no lado do servidor (SSR).

---

### **Comparação Direta**

| Característica       | AngularJS         | Angular (moderno)   |
|----------------------|-------------------|---------------------|
| **Linguagem**        | JavaScript        | TypeScript          |
| **Arquitetura**      | MVC               | Componentes         |
| **Renderização**     | Digest Loop       | Ivy Renderer        |
| **Modularização**    | Não suportado     | Suportado           |
| **Desempenho**       | Limitado          | Otimizado           |
| **Ferramentas**      | Limitadas         | Angular CLI         |
| **Escalabilidade**   | Baixa             | Alta                |

---

### **Por Que Migrar do AngularJS para o Angular?**
1. **Manutenção**:
   - AngularJS não recebe mais suporte oficial, tornando difícil corrigir bugs ou adotar novas tecnologias.
2. **Performance**:
   - O Ivy Renderer do Angular moderno é significativamente mais rápido e otimizado.
3. **Ferramentas e produtividade**:
   - Recursos como Angular CLI e suporte a IDEs modernas tornam o desenvolvimento mais eficiente.
4. **Escalabilidade**:
   - A arquitetura baseada em componentes e a modularização facilitam o gerenciamento de projetos grandes.
5. **Segurança**:
   - Melhorias contínuas em práticas de segurança, como proteção contra vulnerabilidades comuns (XSS, CSRF).

---

### **Conclusão**
AngularJS foi pioneiro no desenvolvimento de aplicações web dinâmicas, mas o Angular moderno trouxe avanços necessários para acompanhar as demandas atuais de desempenho, escalabilidade e produtividade. Para projetos em evolução, a migração para o Angular moderno é altamente recomendada.
