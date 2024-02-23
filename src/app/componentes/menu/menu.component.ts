import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isMenuOpen: boolean = false;
  constructor(private localStorageService: LocalStorageService) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logOut() {
    this.localStorageService.remove('simplifyPay-logged-user');
  }
}
