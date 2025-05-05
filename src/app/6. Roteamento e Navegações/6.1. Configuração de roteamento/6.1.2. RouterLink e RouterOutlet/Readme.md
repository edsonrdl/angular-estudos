# 🛠️ Exemplo: Navegação com RouterLink e RouterOutlet

## 1. Criação dos Componentes Standalone

Utilize o Angular CLI para gerar os componentes:

```bash
ng generate component home --standalone
ng generate component about --standalone
```

---

## 2. Definição das Rotas (`app.routes.ts`)

```ts
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

---

## 3. Configuração da Aplicação (`app.config.ts`)

```ts
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

---

## 4. Componente Principal (`app.component.ts`)

```ts
// app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <h1>Exemplo de Navegação</h1>
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">Sobre</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
```

---

## 5. Inicialização da Aplicação (`main.ts`)

```ts
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);
```

---

## 🔍 Explicação

* **RouterLink**: Diretiva usada para criar links de navegação entre rotas definidas na aplicação. Substitui o uso tradicional de `<a href="...">`.
* **RouterOutlet**: Marcador no template onde os componentes correspondentes às rotas serão renderizados dinamicamente.

---

## 📚 Recursos Adicionais

Para aprofundar seus conhecimentos sobre roteamento no Angular, consulte os seguintes recursos oficiais:

* [Tutorial: Link para uma rota com RouterLink](https://angular.dev/tutorials/learn-angular/14-routerLink)
* [Tarefas comuns de roteamento](https://angular.dev/guide/routing/common-router-tasks)
* [API do RouterOutlet](https://angular.dev/api/router/RouterOutlet)
