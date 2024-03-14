import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.css',
})
export class FormButtonComponent {
  @Input() text: string = '';
  @Input() isDisabled: boolean = false;
}
