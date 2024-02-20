import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { EwalletComponent } from '../ewallet/ewallet.component';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    EwalletComponent,
    ButtonComponent,
  ],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.css',
})
export class CadastroFormComponent {}
