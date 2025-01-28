import { Component } from '@angular/core';
import { ChildCompoentComponent } from '../child-compoent/child-compoent.component';

@Component({
  selector: 'app-parante-componente',
  standalone: true, // Standalone
  imports: [ChildCompoentComponent], // Importa o componente filho
  templateUrl: './parante-componente.component.html', // Link ao arquivo HTML
  styleUrls: ['./parante-componente.component.scss'], // Link ao arquivo SCSS
})
export class ParanteComponenteComponent {
  messageFromChild: string = ''; // Armazena mensagem do filho

  receiveMessage(message: string) {

    console.log( this.messageFromChild = message);// Atualiza com mensagem recebida
  }
}
