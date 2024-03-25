import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenHandlerService } from '../tokenHandler/token-handler.service';

@Injectable({
  providedIn: 'root',
})
export class HttpTransactionsService {
  constructor(
    private http: HttpClient,
    private tokenHandler: TokenHandlerService
  ) {}

  private url = 'http://localhost:5260/api/Transactions/';

  get(cpf: string) {
    return this.http.get<any>(this.url + '?cpf=' + cpf, {
      headers: {
        Authorization: 'Bearer ' + this.tokenHandler.getToken(),
      },
    });
  }

  deposit(cpf: string, value: number, description?: string) {
    return this.http.post(
      this.url + 'deposit/' + cpf,
      {
        value: value,
        description: description ?? '',
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.tokenHandler.getToken(),
        },
      }
    );
  }

  withdraw(cpf: string, value: number, description?: string) {
    return this.http.post(
      this.url + 'withdraw/' + cpf,
      {
        value: value,
        description: description ?? '',
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.tokenHandler.getToken(),
        },
      }
    );
  }

  transfer(
    cpf: string,
    cpftarget: string,
    value: number,
    description?: string
  ) {
    return this.http.post(
      this.url + 'transfer/' + cpf + '/' + cpftarget,
      {
        value: value,
        description: description ?? '',
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.tokenHandler.getToken(),
        },
      }
    );
  }
}
