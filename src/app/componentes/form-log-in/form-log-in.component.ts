import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { FormButtonComponent } from '../form-button/form-button.component';

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
  userEmail = new FormControl('');
  password = new FormControl('');
  loginForm!: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      userEmail: new FormControl(this.userEmail.value, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(this.password.value, [Validators.required]),
    });
  }

  ngOnChange() {
    this.failedLogin = false;
  }

  onSubmit(e: any) {
    e.preventDefault();
    if (this.loginForm.invalid) {
      this.failedLogin = true;
      return;
    }

    const users = this.localStorageService.get();
    const user = users.find(
      (user) =>
        user.email === this.loginForm.value.userEmail &&
        user.password === this.loginForm.value.password
    );

    if (user) {
      this.loginForm.reset();
      this.localStorageService.set([user], 'simplifyPay-logged-user');
      this.router.navigate(['/home']);
    }

    this.loginForm.get('userEmail')?.setErrors({ required: true });
    this.loginForm.get('password')?.setErrors({ required: true });
    this.failedLogin = true;
  }
}
