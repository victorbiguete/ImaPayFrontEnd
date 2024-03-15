import { Component } from '@angular/core';
import { ButtonOpenAccountComponent } from '../button-open-account/button-open-account.component';

@Component({
  selector: 'app-anywhere-acc-presentation',
  standalone: true,
  imports: [ButtonOpenAccountComponent],
  templateUrl: './anywhere-acc-presentation.component.html',
  styleUrl: './anywhere-acc-presentation.component.css',
})
export class AnywhereAccPresentationComponent {}
