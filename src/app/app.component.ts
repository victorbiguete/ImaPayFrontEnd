import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertsComponent } from './componentes/alerts/alerts.component';
import { DeposityComponent } from './componentes/deposity/deposity.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    AlertsComponent,
    DeposityComponent,
    MenuComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'perfil';
}
