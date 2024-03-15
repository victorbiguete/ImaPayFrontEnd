import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-presentation',
  standalone: true,
  imports: [CommonModule, ProductsCardComponent, RouterLink],
  templateUrl: './products-presentation.component.html',
  styleUrl: './products-presentation.component.css',
})
export class ProductsPresentationComponent {
  products = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Seguros',
      description:
        'Opções para trazer mais tranquilidade, protegendo sua casa, seu cartão, sua família, sua próprio e até seus pets.',
    },
    {
      icon: 'fa-solid fa-sack-dollar',
      title: 'Empréstimos',
      description:
        'Transforme seus projetos em realidade com alternativas que se ajustam ao seu perfil.',
    },
    {
      icon: 'fa-solid fa-credit-card',
      title: 'Cartão Virtual',
      description:
        'Gere cartões virtuais de crédito ou débito diretamente em seu aplicativo e aumente a segurança das suas compras online.',
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Rendimento CDI',
      description:
        'A conta do SimplifyPay oferece o melhor rendimento automático diário, sem restrição de valor de investimento e com garantia do FGC.',
    },
    {
      icon: 'fa-solid fa-comments-dollar',
      title: 'Parcelamento de Pix e boletos',
      description:
        'Divida Pix e boletos em até 12 parcelas utilizando qualquer cartão de crédito e efetue o pagamento somente na próxima fatura.',
    },
    {
      icon: 'fa-solid fa-money-bill-transfer',
      title: 'Portabilidade de Salário',
      description:
        'Traga seu salário para o SimplifyPay e gerencie toda sua vida financeira de forma conveniente, diretamente pelo aplicativo.',
    },
  ];
}
