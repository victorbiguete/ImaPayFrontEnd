import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { EwalletComponent } from '../ewallet/ewallet.component';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
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
  userName = new FormControl('');
  userPassword = new FormControl('');
  userConfirmPassword = new FormControl('');
  cadastroForm!: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.cadastroForm = new FormGroup(
      {
        userEmail: new FormControl(this.userEmail.value, [
          Validators.email,
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        userName: new FormControl(this.userName.value, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
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
    if (this.cadastroForm.invalid) {
      this.cadastroForm.get('password')?.setErrors({ require: true });
      this.cadastroForm
        .get('passwordConfirmation')
        ?.setErrors({ require: true });
      return;
    }

    const users = this.localStorageService.get();
    if (users?.length > 0) {
      if (
        users.some((user) => user.email === this.cadastroForm.value.userEmail)
      ) {
        this.cadastroForm.get('userEmail')?.setErrors({ userExists: true });
        this.cadastroForm.get('password')?.reset();
        this.cadastroForm.get('passwordConfirmation')?.reset();
        return; // UserEmail already exists
      }
      users.push({
        name: this.cadastroForm.value.userName,
        email: this.cadastroForm.value.userEmail,
        password: this.cadastroForm.value.password,
      });
      this.localStorageService.set(users);
    } else {
      this.localStorageService.set([
        {
          name: this.cadastroForm.value.userName,
          email: this.cadastroForm.value.userEmail,
          password: this.cadastroForm.value.password,
        },
      ]);
    }
    this.cadastroForm.reset();
    this.router.navigate(['/home']);
  }
}
