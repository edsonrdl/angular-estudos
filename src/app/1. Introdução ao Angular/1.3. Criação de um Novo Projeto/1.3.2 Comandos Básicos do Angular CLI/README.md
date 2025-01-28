# Comandos Básicos do Angular CLI

## 1.3.2 Comandos Básicos do Angular CLI (Adicionais)

Além dos comandos mencionados anteriormente, aqui estão mais alguns comandos úteis do Angular CLI:

### 1. Atualizar Dependências
```bash
ng update
```
- Atualiza as dependências do Angular para a versão mais recente.

### 2. Adicionar uma Nova Biblioteca ou Funcionalidade
```bash
ng add nome-da-biblioteca
```
- Exemplo:
  ```bash
  ng add @angular/material
  ```

### 3. Criar um Novo Componente
```bash
ng generate component nome-do-componente
```
- Cria um novo componente Angular.
- Exemplo:
  ```bash
  ng generate component home
  ```

### 4. Criar um Novo Serviço
```bash
ng generate service nome-do-servico
```
- Cria um serviço para lógica de negócios.
- Exemplo:
  ```bash
  ng generate service auth
  ```

### 5. Executar Testes Unitários
```bash
ng test
```
- Executa os testes unitários da aplicação.

### 6. Executar Testes de Ponta a Ponta
```bash
ng e2e
```
- Executa os testes de ponta a ponta configurados no diretório `e2e/`.

### 7. Criar um Novo Módulo
```bash
ng generate module nome-do-modulo
```
- Cria um novo módulo Angular.
- Exemplo:
  ```bash
  ng generate module admin
  ```

### 8. Construir o Projeto
```bash
ng build
```
- Gera uma versão de produção da aplicação no diretório `dist/`.

### 9. Limpar o Cache
```bash
ng cache clean
```
- Limpa o cache do Angular CLI para resolver problemas de build.

### 10. Servir o Projeto no Navegador
```bash
ng serve
```
- Inicia um servidor de desenvolvimento e hospeda o projeto em tempo real.

---
