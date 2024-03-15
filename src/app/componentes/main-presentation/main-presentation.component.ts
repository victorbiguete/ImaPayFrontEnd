import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-presentation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-presentation.component.html',
  styleUrl: './main-presentation.component.css',
})
export class MainPresentationComponent {}
