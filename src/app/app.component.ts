import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartaoCreditoComponent } from './components/cartao-credito/cartao-credito.component';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CartaoCreditoComponent, HomeComponent]
})
export class AppComponent {
  title = 'ImaPayFrontEnd';
}
