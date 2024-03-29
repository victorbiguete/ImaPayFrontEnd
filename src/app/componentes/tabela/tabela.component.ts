import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Transaction } from '../../types/transaction';
import { TransactionType } from '../../types/transactionType';

interface Transacao {
  tipo: string;
  data: string;
  nome: string;
  valor: string;
  descricao: string;
}

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css',
  providers: [],
})
export class TabelaComponent {
  // @Input() transacoes: Transacao[] | undefined;
  transacoes: Transaction[] | undefined;
  cont = 0;

  constructor(_loginService: LoginService) {
    const intervalId = setInterval(() => {
      this.transacoes =
        _loginService.getLoggedUser()?.bankAccount.transactions!;
      if (this.transacoes?.length > 0) {
        this.transacoes.map((transacao) => {
          if (transacao.type === TransactionType.Deposit) {
            transacao.type = 'Depósito';
          } else if (transacao.type === TransactionType.Withdraw) {
            transacao.type = 'Saque';
          } else if (transacao.type === TransactionType.TransferOutcome) {
            transacao.type = 'Transferência de saida';
          } else if (transacao.type === TransactionType.TransferIncome) {
            transacao.type = 'Transferência de entrada';
          }
          // transacao.date.setHours(transacao.date.getHours() - 3);
        });
      }
      if (this.transacoes !== undefined || this.cont >= 10) {
        clearInterval(intervalId);
      }
      this.cont++;
      console.log(this.cont);
    }, 2000);
  }
}
