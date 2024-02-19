import { Component} from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CartaoCreditoComponent } from '../cartao-credito/cartao-credito.component';
import { GraficoDonutComponent } from '../grafico-donut/grafico-donut.component';
import { BarraProgressoComponent } from '../barra-progresso/barra-progresso.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CardComponent, CartaoCreditoComponent, GraficoDonutComponent,BarraProgressoComponent  ]
})
export class HomeComponent {
}