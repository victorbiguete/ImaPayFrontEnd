import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartaoCreditoComponent } from './componentes/cartao-credito/cartao-credito.component';
import { HomeComponent } from "./componentes/home/home.component";
import { CardComponent } from './componentes/card/card.component';
import { GraficoDonutComponent } from './componentes/grafico-donut/grafico-donut.component';
import { BarraProgressoComponent } from './componentes/barra-progresso/barra-progresso.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, 
              RouterOutlet,
              CartaoCreditoComponent, 
              HomeComponent,
              CardComponent,
              GraficoDonutComponent,
              BarraProgressoComponent]
})
export class AppComponent {
  title = 'ImaPayFrontEnd';
}
