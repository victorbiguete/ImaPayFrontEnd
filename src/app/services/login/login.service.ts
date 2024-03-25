import { Injectable } from '@angular/core';
import { HttpClientsService } from '../httpClients/http-clients.service';
import { LoggedUser } from '../../types/loggedUser';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { TokenHandlerService } from '../tokenHandler/token-handler.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogged: boolean = false;
  private loggedUser?: LoggedUser = this.localStorage.getUser();
  private token?: string = undefined;
  constructor(
    private httpClientsService: HttpClientsService,
    private localStorage: LocalStorageService,
    private tokenHandler: TokenHandlerService
  ) {
    this.token = this.localStorage.getToken();
    if (this.token != undefined) {
      this.httpClientsService.isTokenValid().subscribe(
        (response) => {
          this.loggedUser = this.localStorage.getUser();
          if (this.loggedUser != undefined) {
            this.tokenHandler.setToken(this.token);
            this.isLogged = true;
          } else {
            this.logOut();
          }
        },
        (error) => {
          this.logOut();
        }
      );
    }
  }

  getLoggedUser() {
    return this.loggedUser;
  }
  setLoggedUser(user: LoggedUser) {
    this.loggedUser = user;
    this.localStorage.setUser(this.loggedUser!);
  }

  setToken(token: string) {
    this.token = token;
    this.localStorage.setToken(token);
    this.tokenHandler.setToken(token);
  }

  async login(cpf: string, password: string): Promise<boolean> {
    try {
      let response = await this.httpClientsService
        .login(cpf, password)
        .toPromise();

      this.setToken(response.token!);

      try {
        let response = await this.httpClientsService.getUser(cpf).toPromise();
        this.setLoggedUser(response.content[0]);
        this.isLogged = true;
        return true;
      } catch (err: any) {
        this.logOut();
        return false;
      }
    } catch (err: any) {
      return false;
    }
  }
  logOut() {
    this.isLogged = false;
    this.loggedUser = undefined;
    this.localStorage.deleteToken();
    this.localStorage.deleteUser();
    this.tokenHandler.setToken(undefined);
  }
}
