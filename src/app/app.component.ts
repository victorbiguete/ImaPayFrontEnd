import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "./Componentes/body/body.component";
import { NavbarComponent } from "./Componentes/navbar/navbar.component";
import { CartaoCreditoComponent } from './components/cartao-credito/cartao-credito.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PerfilComponent } from "./perfil/perfil.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    TransacoesComponent,
    PerfilComponent,
    CartaoCreditoComponent,
    LoginPageComponent,
    BodyComponent,
    NavbarComponent ,
    CartaoCreditoComponent
  ],
})
export class AppComponent {
  title = 'perfil';
}
