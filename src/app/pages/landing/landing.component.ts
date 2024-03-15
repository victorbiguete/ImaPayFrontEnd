import { Component } from '@angular/core';
import { HttpCpfService } from '../../services/httpCpf/http-cpf.service';
import { CommonModule } from '@angular/common';
import { NavbarLandingComponent } from '../../componentes/navbar-landing/navbar-landing.component';
import { MainPresentationComponent } from '../../componentes/main-presentation/main-presentation.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavbarLandingComponent, MainPresentationComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor() {}
}
