import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-compoent',
  standalone: true, // Standalone
  templateUrl: './child-compoent.component.html', // Link ao arquivo HTML
  styleUrls: ['./child-compoent.component.scss'], // Link ao arquivo SCSS
})
export class ChildCompoentComponent {
  @Input() messageFromParent: string = ''; // Entrada do pai
  @Output() messageToParent = new EventEmitter<string>(); // Evento para o pai

  sendMessageToParent() {
    this.messageToParent.emit('Olá, Pai!'); // Emite evento com mensagem
  }
}
