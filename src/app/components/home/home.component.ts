import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CartaoCreditoComponent } from '../cartao-credito/cartao-credito.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CardComponent, CartaoCreditoComponent ]
})
export class HomeComponent  {

}
