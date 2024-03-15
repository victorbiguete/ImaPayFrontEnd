import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLandingComponent } from '../../componentes/navbar-landing/navbar-landing.component';
import { MainPresentationComponent } from '../../componentes/main-presentation/main-presentation.component';
import { SmartBankingPresentationComponent } from '../../componentes/smart-banking-presentation/smart-banking-presentation.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarLandingComponent,
    MainPresentationComponent,
    SmartBankingPresentationComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor() {}
}
