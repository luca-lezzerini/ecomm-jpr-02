import { Injectable } from "@angular/core";
import { Token } from "./dto/token";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  /* memorizza il token*/
  token: Token;
  constructor() {}
  /*
  set token(t: Token ): void {
    this.token = t;
  }
  get token(): Token {
    return this.token;
  }*/
}
