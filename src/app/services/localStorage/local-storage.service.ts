import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoggedUser } from '../../types/loggedUser';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // public local = window.localStorage;

  constructor(private cookieService: CookieService) {}
  inHours = 2;
  inDays = this.inHours / 24;

  setUser(user: LoggedUser) {
    this.cookieService.set(
      'simplifyPay-user',
      JSON.stringify(user),
      this.inDays
    );
  }

  getUser() {
    return JSON.parse(
      this.cookieService.get('simplifyPay-user') ?? '{}'
    ) as LoggedUser;
  }

  setToken(token: string) {
    this.cookieService.set(
      'simplifyPay-token',
      JSON.stringify(token),
      this.inDays
    );
  }
  getToken() {
    return JSON.parse(
      this.cookieService.get('simplifyPay-token') ?? '{}'
    ) as string;
  }
}
