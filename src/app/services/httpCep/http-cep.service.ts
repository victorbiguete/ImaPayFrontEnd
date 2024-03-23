import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCepService {
  constructor(private http: HttpClient) {}

  private url = 'https://brasilapi.com.br/api/cep/v1/';

  get(cep: string) {
    return this.http.get(this.url + cep);
  }
}
