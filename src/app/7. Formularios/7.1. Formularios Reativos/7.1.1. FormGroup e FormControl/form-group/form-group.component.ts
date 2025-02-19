import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})

export class FormGroupComponent {
 loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
});
onSubmit() {
  if (this.loginForm.valid) {
    console.log('Formulário enviado com sucesso:', this.loginForm.value);
  } else {
    console.log('Formulário inválido!');
  }
}
}
