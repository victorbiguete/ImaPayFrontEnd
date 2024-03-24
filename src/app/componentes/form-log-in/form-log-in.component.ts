import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { LoginService } from '../../services/login/login.service';
import { AlertHandlerService } from '../../services/alertHandler/alert-handler.service';
import { AlertType } from '../../types/alert';

@Component({
  selector: 'app-form-log-in',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormButtonComponent,
  ],
  templateUrl: './form-log-in.component.html',
  styleUrl: './form-log-in.component.css',
})
export class FormLogInComponent {
  failedLogin: boolean = false;

  userCpf = new FormControl('');
  password = new FormControl('');
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alertHandler: AlertHandlerService
  ) {
    this.loginForm = new FormGroup({
      userCpf: new FormControl(this.userCpf.value, [Validators.required]),
      password: new FormControl(this.password.value, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnChange() {
    this.failedLogin = false;
  }

  async onSubmit(e: any) {
    e.preventDefault();
    if (this.loginForm.invalid) {
      this.failedLogin = true;
      return;
    }

    await this.loginService
      .login(this.loginForm.value.userCpf, this.loginForm.value.password)
      .then((res) => {
        if (res == true) {
          this.loginForm.reset();
          this.alertHandler.setAlert(
            AlertType.SUCCESS,
            'Login efetuado com sucesso! Bem vindo de Volta!'
          );
          this.router.navigate(['/home']);
        } else {
          this.loginForm.get('userEmail')?.setErrors({ required: true });
          this.loginForm.get('password')?.setErrors({ required: true });
          this.failedLogin = true;
        }
      });
  }
}
