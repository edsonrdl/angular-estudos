# 🔗 Bindings no Angular: Property Binding e Event Binding

No Angular, bindings conectam a lógica do **TypeScript** com a **interface do usuário** (HTML).  
Os dois tipos principais de binding são:

1. **Property Binding (`[ ]`)** → Passa dados do **TypeScript para o HTML**.
2. **Event Binding (`( )`)** → Passa eventos do **HTML para o TypeScript**.

---

## 📌 1. Property Binding (`[ ]`)
**Direção:** 🔄 **Do TypeScript para o HTML**  

### **Exemplo**
#### **Component (TypeScript)**
```typescript
export class AppComponent {
  buttonText = "Clique aqui";
}
```
#### **Template (HTML)**
```html
<button [innerText]="buttonText"></button>
```
🔹 **O que acontece?**  
- O valor da propriedade `buttonText` no TypeScript é **atualizado no botão**.
- Se `buttonText` mudar no TypeScript, o texto do botão **se atualiza automaticamente**.

⚠️ **Observação:** Interpolação (`{{ }}`) **não funciona** em atributos HTML, por isso usamos `[ ]`.

---

## 📌 2. Event Binding (`( )`)
**Direção:** 🔄 **Do HTML para o TypeScript**  

### **Exemplo**
#### **Component (TypeScript)**
```typescript
export class AppComponent {
  showMessage() {
    alert("Botão clicado!");
  }
}
```
#### **Template (HTML)**
```html
<button (click)="showMessage()">Clique aqui</button>
```
🔹 **O que acontece?**  
- Quando o usuário **clica no botão**, o evento `(click)` dispara o método `showMessage()`.
- O método executa um `alert("Botão clicado!")`.

---

## **📌 Diferença Entre Property e Event Binding**
| Tipo | Símbolo | Direção | Exemplo |
|------|--------|---------|---------|
| **Property Binding** | `[ ]` | **TypeScript → HTML** | `<button [innerText]="buttonText"></button>` |
| **Event Binding** | `( )` | **HTML → TypeScript** | `<button (click)="showMessage()"></button>` |

🚀 **Agora você já entende como usar Property Binding e Event Binding no Angular!** 😃

