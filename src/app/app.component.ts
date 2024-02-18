import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartaoCreditoComponent } from './components/cartao-credito/cartao-credito.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import { PerfilComponent } from "./perfil/perfil.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TransacoesComponent, PerfilComponent, CartaoCreditoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ImaPayFrontEnd';
}
