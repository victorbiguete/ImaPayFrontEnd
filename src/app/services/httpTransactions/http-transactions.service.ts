import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { LoginService } from '../login/login.service';
import { TokenHandlerService } from '../tokenHandler/token-handler.service';

@Injectable({
  providedIn: 'root',
})
export class HttpTransactionsService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private tokenHandler: TokenHandlerService
  ) {}

  private url = 'http://localhost:5260/api/Transactions/';

  get(cpf: string) {
    const token = this.tokenHandler.getToken();
    // console.log(cpf);
    return this.http.get<any>(this.url + '?cpf=' + cpf, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  deposit(cpf: string, value: number, description?: string) {
    const token = this.tokenHandler.getToken();
    return this.http.post(
      this.url + 'deposit/' + cpf,
      {
        value: value,
        description: description ?? '',
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }

  withdraw(cpf: string, value: number, description?: string) {
    const token = this.tokenHandler.getToken();
    return this.http.post(
      this.url + 'withdraw/' + cpf,
      {
        value: value,
        description: description ?? '',
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
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
    const token = this.tokenHandler.getToken();
    return this.http.post(
      this.url + 'transfer/' + cpf + '/' + cpftarget,
      {
        value: value,
        description: description ?? '',
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
  }
}
