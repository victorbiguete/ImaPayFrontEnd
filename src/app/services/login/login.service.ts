import { Injectable } from '@angular/core';
import { HttpClientsService } from '../httpClients/http-clients.service';
import { AlertHandlerService } from '../alertHandler/alert-handler.service';
import { AlertType } from '../../types/alert';
import { LoggedUser } from '../../types/loggedUser';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogged: boolean = this.localStorage.getToken() ? true : false;
  loggedUser?: any | LoggedUser = this.localStorage.getUser();
  token?: string;
  constructor(
    private httpClientsService: HttpClientsService,
    private localStorage: LocalStorageService
  ) {
    setInterval(() => {
      this.httpClientsService.isTokenValid().subscribe(
        (response) => {
          this.isLogged = true;
          this.token = this.localStorage.getToken();
          this.loggedUser = this.localStorage.getUser();
        },
        (err) => {
          this.isLogged = false;
          this.token = undefined;
          this.loggedUser = undefined;
        }
      );
    }, 60000);
  }

  async login(cpf: string, password: string): Promise<boolean> {
    try {
      let response = await this.httpClientsService
        .login(cpf, password)
        .toPromise();

      this.isLogged = true;

      this.token = response.token;
      this.localStorage.setToken(this.token!);

      this.httpClientsService.getUser(cpf).subscribe((response) => {
        this.loggedUser = response.content[0];
        this.localStorage.setUser(this.loggedUser!);
      });

      return true;
    } catch (err: any) {
      return false;
    }
  }
  logOut() {
    this.isLogged = false;
    this.loggedUser = undefined;
  }
}
