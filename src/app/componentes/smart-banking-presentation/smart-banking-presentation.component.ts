import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-banking-presentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smart-banking-presentation.component.html',
  styleUrl: './smart-banking-presentation.component.css',
})
export class SmartBankingPresentationComponent {
  ngOnInit(): void {}
}
