import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public local = window.localStorage;

  constructor() {}

  public set(
    value: Array<{
      name: string;
      email: string;
      password: string;
      amount?: number;
    }>,
    key: string = 'simplifyPay-users'
  ): void {
    try {
      this.local.setItem(key, JSON.stringify(value));
    } catch (e) {
      alert('Something went wrong');
      console.warn(e);
    }
  }

  public get(
    key: string = 'simplifyPay-users'
  ): Array<{ name: string; email: string; password: string; amount?: number }> {
    try {
      const item = this.local.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else {
        return [];
      }
    } catch (e) {
      alert('Something went wrong');
      console.warn(e);
      return [
        {
          name: 'exemple',
          email: 'email@mail.com',
          password: ' 123',
          amount: 0,
        },
      ];
    }
  }

  public remove(key: string = 'simplifyPay-users'): void {
    try {
      this.local.removeItem(key);
    } catch (e) {
      console.warn(e);
    }
  }
}
