import { Component } from '@angular/core';
import { FormSignUpComponent } from '../../componentes/form-sign-up/form-sign-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormSignUpComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {}
