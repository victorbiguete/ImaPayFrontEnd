import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenHandlerService {
  private token: string | undefined;
  constructor() {}

  setToken(token: string | undefined) {
    this.token = token;
  }
  getToken(): string | undefined {
    return this.token;
  }
}
