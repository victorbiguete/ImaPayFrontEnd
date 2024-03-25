import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../types/user';
import { AlertHandlerService } from '../alertHandler/alert-handler.service';
import { AlertType } from '../../types/alert';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { LoginService } from '../login/login.service';
import { TokenHandlerService } from '../tokenHandler/token-handler.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientsService {
  constructor(
    private http: HttpClient,
    private tokenHandler: TokenHandlerService
  ) {}

  private url = 'http://localhost:5260/api/Clients/';

  isTokenValid() {
    return this.http.get<any>(this.url + 'istokenvalid/', {
      headers: { Authorization: 'Bearer ' + this.tokenHandler.getToken() },
    });
  }

  getUser(cpf: String) {
    return this.http.get<any>(this.url + '?cpf=' + cpf, {
      headers: { Authorization: 'Bearer ' + this.tokenHandler.getToken() },
    });
  }

  register(user: User) {
    return this.http.post<any>(this.url + 'register/', user, {
      observe: 'response',
    });
  }

  login(cpf: string, password: string) {
    return this.http.post<any>(this.url + 'login/', { cpf, password });
  }
}
