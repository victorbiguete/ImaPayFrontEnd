import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isMenuOpen: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

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
    if(confirm("Tem certeza que deseja Sair?")){
      this.loginService.logOut();
      this.router.navigate(['/']); 
    }
  }
}
