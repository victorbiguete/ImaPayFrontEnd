import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartaoCreditoComponent } from './components/cartao-credito/cartao-credito.component';
import { HomeComponent } from "./components/home/home.component";
import { CardComponent } from './components/card/card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, 
              RouterOutlet, 
              CartaoCreditoComponent, 
              HomeComponent,
              CardComponent]
})
export class AppComponent {
  title = 'ImaPayFrontEnd';
}
