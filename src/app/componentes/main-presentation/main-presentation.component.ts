import { Component } from '@angular/core';
import { ButtonOpenAccountComponent } from '../button-open-account/button-open-account.component';

@Component({
  selector: 'app-main-presentation',
  standalone: true,
  imports: [ButtonOpenAccountComponent],
  templateUrl: './main-presentation.component.html',
  styleUrl: './main-presentation.component.css',
})
export class MainPresentationComponent {}
