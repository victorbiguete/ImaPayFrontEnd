import { Component } from '@angular/core';
import { ButtonOpenAccountComponent } from '../button-open-account/button-open-account.component';

@Component({
  selector: 'app-ready-start-presentation',
  standalone: true,
  imports: [ButtonOpenAccountComponent],
  templateUrl: './ready-start-presentation.component.html',
  styleUrl: './ready-start-presentation.component.css',
})
export class ReadyStartPresentationComponent {}
