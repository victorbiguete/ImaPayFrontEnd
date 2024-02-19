import { Component } from '@angular/core';
import { AdSideComponent } from './ad-side/ad-side.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  imports: [AdSideComponent, LoginFormComponent],
})
export class LoginPageComponent {}
