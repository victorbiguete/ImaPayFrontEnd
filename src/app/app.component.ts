import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./componentes/home/home.component";
import { BodyComponent } from "./Componentes/body/body.component";
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
              RouterOutlet,
              HomeComponent,
              TransacoesComponent,
              RouterLink,
              NavbarComponent,
              LoginPageComponent,
              BodyComponent
            ]
})
export class AppComponent {
  title = 'perfil';
}
