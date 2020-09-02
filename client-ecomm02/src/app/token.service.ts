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
  /* controlla se il token e cambiato e in caso lo aggiorna*/
  controllaToken(t: Token): void {
    if (this.token.token !== t.token) {
      this.token = t ;
    }
  }
}
