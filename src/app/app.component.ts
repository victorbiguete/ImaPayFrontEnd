import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartaoCreditoComponent } from './components/cartao-credito/cartao-credito.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';

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
  ],
})
export class AppComponent {
  title = 'ImaPayFrontEnd';
}
