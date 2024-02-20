import { Component } from '@angular/core';
import { AdSideComponent } from './ad-side/ad-side.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    AdSideComponent,
    LoginFormComponent,
    CadastroFormComponent,
  ],
})
export class LoginPageComponent {}
