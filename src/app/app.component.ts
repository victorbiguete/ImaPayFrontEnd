import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./componentes/home/home.component";
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import { PerfilComponent } from "./perfil/perfil.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
              RouterOutlet,
              HomeComponent,
              TransacoesComponent,
              PerfilComponent,
              RouterLink
            ]
})
export class AppComponent {
  title = 'ImaPayFrontEnd';
}
