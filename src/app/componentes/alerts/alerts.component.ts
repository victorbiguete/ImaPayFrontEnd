import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertType } from '../../types/alert';
import { AlertHandlerService } from '../../services/alertHandler/alert-handler.service';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
})
export class AlertsComponent {
  constructor(protected alertHandler: AlertHandlerService) {}
}
