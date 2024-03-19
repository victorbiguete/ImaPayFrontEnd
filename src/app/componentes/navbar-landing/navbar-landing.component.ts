import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-landing.component.html',
  styleUrl: './navbar-landing.component.css',
})
export class NavbarLandingComponent {}
