import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css',
})
export class ProductsCardComponent {
  @Input() icon: string = 'fa-solid fa-shield-halved';
  @Input() title: string = 'Seguros';
  @Input() description: string =
    'Opções para trazer mais tranquilidade, protegendo sua casa, seu cartão, sua família, sua saúde e até seus pets.';
}
