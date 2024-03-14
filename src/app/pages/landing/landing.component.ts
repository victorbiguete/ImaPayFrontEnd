import { Component } from '@angular/core';
import { HttpCpfService } from '../../services/httpCpf/http-cpf.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor() {}
}
