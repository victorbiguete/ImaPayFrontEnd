import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BarraProgressoComponent } from '../../componentes/barra-progresso/barra-progresso.component';
import { CardComponent } from '../../componentes/card/card.component';
import { CartaoCreditoComponent } from '../../componentes/cartao-credito/cartao-credito.component';
import { GraficoDonutComponent } from '../../componentes/grafico-donut/grafico-donut.component';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { TabelaComponent } from '../../componentes/tabela/tabela.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CardComponent,
    CartaoCreditoComponent,
    GraficoDonutComponent,
    BarraProgressoComponent,
    TabelaComponent,
    MenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  transacoes = [
    {
      tipo: 'Transferência enviada',
      data: '23/12/2024',
      nome: 'Stronger Sports',
      valor: '150,00',
      descricao: 'Pix',
    },
    {
      tipo: 'Transferência recebida',
      data: '23/12/2024',
      nome: 'Ana Mariana Silva',
      valor: '600,00',
      descricao: 'Pix',
    },
    {
      tipo: 'Pag. débito',
      data: '23/12/2024',
      nome: 'Grupo Casas Bahia',
      valor: '450,00',
      descricao: '',
    },
    {
      tipo: 'Transferência enviada',
      data: '23/12/2024',
      nome: 'João da Silva',
      valor: '200,00',
      descricao: 'Pix',
    },
    {
      tipo: 'Pag. débito',
      data: '23/12/2024',
      nome: 'Ifood',
      valor: '250,00',
      descricao: '',
    },
    {
      tipo: 'Pag. crédito',
      data: '23/12/2024',
      nome: 'Auto Posto Cesar',
      valor: '50,00',
      descricao: '',
    },
    {
      tipo: 'Transferência enviada',
      data: '23/12/2024',
      nome: 'Cleide da Silva',
      valor: '500,00',
      descricao: 'Pix',
    },
    {
      tipo: 'Pag. débito',
      data: '22/12/2024',
      nome: 'Ifood',
      valor: '150,00',
      descricao: '',
    },
    {
      tipo: 'Pag. crédito',
      data: '22/12/2024',
      nome: 'Strong Sports',
      valor: '350,00',
      descricao: '',
    },
    {
      tipo: 'Pag. débito',
      data: '21/12/2024',
      nome: 'Ifood',
      valor: '150,00',
      descricao: '',
    },
    {
      tipo: 'Remuneração/salário',
      data: '21/12/2024',
      nome: 'Amazon Services',
      valor: '15.000,00',
      descricao: '',
    },
  ];
}
