import { Injectable } from '@angular/core';
import { Token } from './dto/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  /* memorizza il token*/
  private token: Token;
  constructor() { }

  setToken(t: Token ): void {
    this.token = t;
  }
  getToken(): Token {
    return this.token;
  }

}
