import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLandingComponent } from '../../componentes/navbar-landing/navbar-landing.component';
import { MainPresentationComponent } from '../../componentes/main-presentation/main-presentation.component';
import { SmartBankingPresentationComponent } from '../../componentes/smart-banking-presentation/smart-banking-presentation.component';
import { ProductsPresentationComponent } from '../../componentes/products-presentation/products-presentation.component';
import { AnywhereAccPresentationComponent } from '../../componentes/anywhere-acc-presentation/anywhere-acc-presentation.component';
import { PlusPresentationComponent } from '../../componentes/plus-presentation/plus-presentation.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarLandingComponent,
    MainPresentationComponent,
    SmartBankingPresentationComponent,
    ProductsPresentationComponent,
    AnywhereAccPresentationComponent,
    PlusPresentationComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor() {}
}
