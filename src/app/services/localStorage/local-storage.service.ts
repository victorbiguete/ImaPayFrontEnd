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
      this.inDays,
      '/'
    );
  }

  getUser(): LoggedUser | undefined {
    let user = this.cookieService.get('simplifyPay-user') ?? false;
    if (user) return JSON.parse(user);
    return undefined;
  }

  setToken(token: string) {
    this.cookieService.set(
      'simplifyPay-token',
      JSON.stringify(token),
      this.inDays,
      '/'
    );
  }
  getToken(): string | undefined {
    let token = this.cookieService.get('simplifyPay-token') ?? false;
    if (token) return JSON.parse(token);
    return undefined;
  }

  deleteToken() {
    this.cookieService.delete('simplifyPay-token');
  }

  deleteUser() {
    this.cookieService.delete('simplifyPay-user');
  }
}
