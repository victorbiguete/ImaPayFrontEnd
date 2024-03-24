import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { LoginService } from '../../services/login/login.service';
import { Transaction } from '../../types/transaction';
import { HttpTransactionsService } from '../../services/httpTransactions/http-transactions.service';
import { TransactionType } from '../../types/transactionType';

interface Transacao {
  tipo: string;
  data: string;
  nome: string;
  valor: string;
  descricao: string;
}
@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [CommonModule, MenuComponent, FormsModule, FooterComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css',
})
export class TransacoesComponent {
  // transacoes = [
  //   //Dados apenas para teste:
  //   {
  //     tipo: 'Transferência enviada',
  //     data: '23/02/2024',
  //     nome: 'Stronger Sports',
  //     valor: '150,00',
  //     descricao: 'Pix',
  //   },
  //   {
  //     tipo: 'Transferência recebida',
  //     data: '23/02/2024',
  //     nome: 'Ana Mariana Silva',
  //     valor: '600,00',
  //     descricao: 'Pix',
  //   },
  //   {
  //     tipo: 'Pag. débito',
  //     data: '23/02/2024',
  //     nome: 'Grupo Casas Bahia',
  //     valor: '450,00',
  //     descricao: '',
  //   },
  //   {
  //     tipo: 'Transferência enviada',
  //     data: '23/02/2024',
  //     nome: 'João da Silva',
  //     valor: '200,00',
  //     descricao: 'Pix',
  //   },
  //   {
  //     tipo: 'Pag. débito',
  //     data: '23/02/2024',
  //     nome: 'Ifood',
  //     valor: '250,00',
  //     descricao: '',
  //   },
  //   {
  //     tipo: 'Pag. crédito',
  //     data: '23/02/2024',
  //     nome: 'Auto Posto Cesar',
  //     valor: '50,00',
  //     descricao: '',
  //   },
  //   {
  //     tipo: 'Transferência enviada',
  //     data: '23/02/2024',
  //     nome: 'Cleide da Silva',
  //     valor: '500,00',
  //     descricao: 'Pix',
  //   },
  //   {
  //     tipo: 'Pag. débito',
  //     data: '22/02/2024',
  //     nome: 'Ifood',
  //     valor: '150,00',
  //     descricao: '',
  //   },
  //   {
  //     tipo: 'Pag. crédito',
  //     data: '22/02/2024',
  //     nome: 'Strong Sports',
  //     valor: '350,00',
  //     descricao: '',
  //   },
  //   {
  //     tipo: 'Pag. débito',
  //     data: '21/02/2024',
  //     nome: 'Ifood',
  //     valor: '150,00',
  //     descricao: '',
  //   },
  //   {
  //     tipo: 'Remuneração/salário',
  //     data: '21/02/2024',
  //     nome: 'Amazon Services',
  //     valor: '15.000,00',
  //     descricao: '',
  //   },

  //   {
  //     tipo: 'Pag. crédito',
  //     data: '20/02/2024',
  //     nome: 'Coco Bambu',
  //     valor: '450,00',
  //     descricao: '',
  //   },

  //   {
  //     tipo: 'Pag. débito',
  //     data: '19/02/2024',
  //     nome: 'Ifood',
  //     valor: '97,45',
  //     descricao: '',
  //   },
  // ];

  transacoes: Transaction[] = [];
  imagemVisivel: boolean = true;
  // saldo: string = '*****';
  saldo?: number;
  valorVisivel: boolean = false;

  transacoesOriginal: Transaction[] = [...this.transacoes];

  filtroTipo: keyof Transacao = 'tipo';
  filtroValor: any = '';

  constructor(
    private _loginService: LoginService,
    private _transactionService: HttpTransactionsService
  ) {
    this.imagemVisivel = true;
    this.saldo = this._loginService.loggedUser!.bankAccount.balance ?? 102.64;
    this._transactionService.get(_loginService.loggedUser?.cpf!).subscribe(
      (data) => {
        this.transacoes = data.content as Transaction[];
        this.transacoesOriginal = [...this.transacoes];
        console.log(this.transacoes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  trocarImagem() {
    this.imagemVisivel = !this.imagemVisivel;
    // if (this.imagemVisivel) {
    //    this.saldo = "*****";
    // } else {
    //    this.saldo =  '102,64';
    // }
  }

  aplicarFiltros(): void {
    // console.log('filtroTipo=' + this.filtroTipo);
    // if (this.filtroValor !== '') {
    //   this.transacoes = this.transacoesOriginal.filter((transacao) => {
    //     return transacao[this.filtroTipo]
    //       .toString()
    //       .toLowerCase()
    //       .includes(this.filtroValor.toString().toLowerCase());
    //   });
    // } else {
    //   this.transacoes = this.transacoesOriginal;
    // }
  }
}
