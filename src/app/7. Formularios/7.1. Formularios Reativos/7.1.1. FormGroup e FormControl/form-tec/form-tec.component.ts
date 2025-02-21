import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tec',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-tec.component.html',
  styleUrls: ['./form-tec.component.scss']
})
export class FormTecComponent {
  FormTec = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    tecFavorita: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
  });

  onSubmit() {
    if (this.FormTec.valid) {
      console.log('Formulário enviado com sucesso:', this.FormTec.value);
    } else {
      console.log('Formulário inválido!');
    }
  }
}
