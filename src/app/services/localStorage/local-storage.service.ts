import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

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

  public getOne(
    email: string
  ):
    | { name: string; email: string; password: string; amount?: number }
    | undefined {
    const users = this.get();
    return users.find((user) => user.email === email);
  }

  public updateOne(
    user: {
      name: string;
      email: string;
      password: string;
      amount?: number;
    },
    email: string
  ) {
    let users = this.get();
    users = users.map((u) => {
      if (u.email === email) {
        u = user;
      }
      return u;
    });
    this.set(users);
  }
}
