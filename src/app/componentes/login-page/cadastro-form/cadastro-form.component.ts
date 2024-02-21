import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { EwalletComponent } from '../ewallet/ewallet.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    EwalletComponent,
    ButtonComponent,
  ],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.css',
})
export class CadastroFormComponent {
  userEmail = new FormControl('');
  userId = new FormControl('');
  userPassword = new FormControl('');
  userConfirmPassword = new FormControl('');
  cadastroForm: FormGroup;

  constructor() {
    this.cadastroForm = new FormGroup(
      {
        userEmail: new FormControl(this.userEmail.value, [
          Validators.email,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        userId: new FormControl(this.userId.value, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ]),
        password: new FormControl(this.userPassword.value, [
          Validators.required,
          Validators.minLength(3),
        ]),
        passwordConfirmation: new FormControl(this.userConfirmPassword.value, [
          Validators.required,
          Validators.minLength(3),
        ]),
      },
      {
        validators: this.passwordMatch,
      }
    );
  }

  passwordMatch(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('passwordConfirmation')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit(e: any) {
    e.preventDefault();
    if (this.cadastroForm.invalid) return;
    console.log(this.cadastroForm.value);
  }
}
