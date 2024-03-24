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
  transacoes: Transaction[] = [];
  imagemVisivel: boolean = true;
  saldo?: number;
  valorVisivel: boolean = false;

  transacoesOriginal: Transaction[] = [...this.transacoes];

  filtroTipo: keyof Transaction = 'type';
  filtroValor: any = '';

  constructor(
    private _loginService: LoginService,
    private _transactionService: HttpTransactionsService
  ) {
    this.imagemVisivel = true;
    this.saldo =
      this._loginService.getLoggedUser()!.bankAccount.balance ?? 102.64;
    this._transactionService.get(_loginService.getLoggedUser()?.cpf!).subscribe(
      (data) => {
        this.transacoes = data.content as Transaction[];
        this.transacoes.map((transacao) => {
          if (transacao.type === TransactionType.Deposit) {
            transacao.type = 'Deposito';
          } else if (transacao.type === TransactionType.Withdraw) {
            transacao.type = 'Saque';
          } else if (transacao.type === TransactionType.TransferOutcome) {
            transacao.type = 'Transferecia de saida';
          } else if (transacao.type === TransactionType.TransferIncome) {
            transacao.type = 'Transferecia de entrada';
          }
        });
        this.transacoesOriginal = [...this.transacoes];
        let user = this._loginService.getLoggedUser()!;
        user.bankAccount.transactions = this.transacoes;
        this._loginService.setLoggedUser(user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  trocarImagem() {
    this.imagemVisivel = !this.imagemVisivel;
  }

  aplicarFiltros(): void {
    if (this.filtroValor !== '') {
      this.transacoes = this.transacoesOriginal.filter((transacao) => {
        return transacao[this.filtroTipo]!.toString()
          .toLowerCase()
          .includes(this.filtroValor.toString().toLowerCase());
      });
    } else {
      this.transacoes = this.transacoesOriginal;
    }
  }
}
