import { Injectable } from '@angular/core';
import { HttpClientsService } from '../httpClients/http-clients.service';
import { LoggedUser } from '../../types/loggedUser';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { TokenHandlerService } from '../tokenHandler/token-handler.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogged: boolean = this.localStorage.getToken() ? true : false;
  private loggedUser?: LoggedUser = this.localStorage.getUser();
  token?: string;
  constructor(
    private httpClientsService: HttpClientsService,
    private localStorage: LocalStorageService,
    private tokenHandler: TokenHandlerService
  ) {
    this.tokenHandler.setToken(this.localStorage.getToken());
  }

  getLoggedUser() {
    return this.loggedUser;
  }
  setLoggedUser(user: LoggedUser) {
    this.loggedUser = user;
    this.localStorage.setUser(this.loggedUser!);
  }

  async login(cpf: string, password: string): Promise<boolean> {
    try {
      let response = await this.httpClientsService
        .login(cpf, password)
        .toPromise();

      this.token = response.token;
      this.localStorage.setToken(this.token!);
      this.isLogged = true;

      this.tokenHandler.setToken(this.token!);

      this.httpClientsService.getUser(cpf).subscribe(
        (response) => {
          this.loggedUser = response.content[0];
          this.localStorage.setUser(this.loggedUser!);
        },
        (error) => {
          this.logOut();
        }
      );
      return true;
    } catch (err: any) {
      return false;
    }
  }
  logOut() {
    this.isLogged = false;
    this.loggedUser = undefined;
    this.localStorage.deleteToken();
    this.localStorage.deleteUser();
  }
}
