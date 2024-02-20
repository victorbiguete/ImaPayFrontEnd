import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuOpen = false;
  estiloSelecionado: string = '';
  ativarLink: string = '';
  boldText: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  mudarEstilo(link: string) {
    this.ativarLink = link;
    this.boldText = link === 'home' ? 'home' : '';
  }
}
