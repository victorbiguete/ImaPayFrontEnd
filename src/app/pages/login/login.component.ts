import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormLogInComponent } from '../../componentes/form-log-in/form-log-in.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormLogInComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
