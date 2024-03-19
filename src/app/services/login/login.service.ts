import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogged: boolean = false;
  loggedUser?: {
    name: string;
    email: string;
    password: string;
    amount?: number;
  };
  constructor(private localStorageService: LocalStorageService) {}

  login(email: string, password: string) {
    const user = this.localStorageService.getOne(email);

    if (user) {
      if (user.password === password) {
        this.isLogged = true;
        this.loggedUser = user;
        return true;
      }
    }

    this.isLogged = false;
    return false;
  }
  logOut() {
    this.isLogged = false;
    this.loggedUser = undefined;
  }
}
