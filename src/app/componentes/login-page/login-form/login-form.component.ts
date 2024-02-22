import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { EwalletComponent } from '../ewallet/ewallet.component';
import { ButtonComponent } from '../button/button.component';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    EwalletComponent,
    ButtonComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  failedLogin: boolean = false;
  userId = new FormControl('');
  password = new FormControl('');
  loginForm!: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      userId: new FormControl(this.userId.value, [Validators.required]),
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
        user.id === this.loginForm.value.userId &&
        user.password === this.loginForm.value.password
    );

    if (user) {
      this.loginForm.reset();
      this.localStorageService.set([user], 'simplifyPay-logged-user');
      this.router.navigate(['/home']);
    }

    this.failedLogin = true;
  }
}