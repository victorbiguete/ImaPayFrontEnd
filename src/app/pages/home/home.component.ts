import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BarraProgressoComponent } from '../../componentes/barra-progresso/barra-progresso.component';
import { CardComponent } from '../../componentes/card/card.component';
import { CartaoCreditoComponent } from '../../componentes/cartao-credito/cartao-credito.component';
import { GraficoDonutComponent } from '../../componentes/grafico-donut/grafico-donut.component';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { TabelaComponent } from '../../componentes/tabela/tabela.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { LoginService } from '../../services/login/login.service';

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
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imagemVisivel: boolean = false;
  imagemVisivelCarteira: boolean = false;
  vl_usado: string = '1.000,00';
  vl_total: string = '10.000,00';
  vl_saldo: string = '67.000,00';
  vl_despesas: string = '22.000,00';
  vl_investimentos: string = '170.000,00';

  constructor(_loginService: LoginService) {
    const intervalId = setInterval(() => {
      this.vl_saldo =
        _loginService.getLoggedUser()?.bankAccount.balance.toLocaleString() ??
        '0,001';
      if (this.vl_saldo !== '0,001') {
        clearInterval(intervalId);
      }
    });
  }

  trocarImagem() {
    this.imagemVisivel = !this.imagemVisivel;
  }

  trocarImagemCarteira() {
    this.imagemVisivelCarteira = !this.imagemVisivelCarteira;
  }
}
