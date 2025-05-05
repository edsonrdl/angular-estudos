# ✅ Angular 19 – Standalone vs NgModule no Roteamento

Este guia compara as abordagens de roteamento usando `@NgModule` (clássica) e `Standalone Components` (moderna), com foco nas **boas práticas no Angular 19**.

---

## ❌ Problemas comuns ao misturar abordagens

* Uso de `AppRoutingModule` com `@NgModule` junto com `AppComponent` standalone.
* Importação incorreta de `AppRoutingModule` como se fosse standalone.
* Duplicidade de roteamento: `RouterModule.forRoot(routes)` **e** `provideRouter(routes)` ao mesmo tempo.

---

## 🔁 Diferença entre `NgModule` vs `Standalone` no Roteamento

### 🧱 Abordagem Clássica com `NgModule`

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<h1>Exemplo</h1>
<a routerLink="/home">Home</a>
<router-outlet></router-outlet>
```

---

### 🧹 Abordagem Moderna com Standalone

```ts
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }
];
```

```ts
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

```ts
// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, HomeComponent]
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<h1>Exemplo Standalone</h1>
<a routerLink="/home">Home</a>
<router-outlet></router-outlet>
```

```ts
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);
```

---

## 📌 Tabela Comparativa

|                      | **NgModule (Antigo)**      | **Standalone (Moderno)**                      |
| -------------------- | -------------------------- | --------------------------------------------- |
| Definição de rotas   | `RouterModule.forRoot()`   | `provideRouter()`                             |
| Componente principal | Declarado no `AppModule`   | Bootstrap direto via `bootstrapApplication()` |
| Modularização        | Depende de `@NgModule`     | Tudo via `standalone` e `imports` diretos     |
| Verbosidade          | Alta (boilerplate)         | Baixa (mais direta e leve)                    |
| Lazy loading         | Possível, mas mais verboso | Mais fácil e performático                     |

---
