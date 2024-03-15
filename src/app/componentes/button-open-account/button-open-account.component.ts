import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-open-account',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button-open-account.component.html',
  styleUrl: './button-open-account.component.css',
})
export class ButtonOpenAccountComponent {}
