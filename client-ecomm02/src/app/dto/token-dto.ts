import { Token } from '../model/token';
export class TokenDto {
    token: Token;

    constructor(token: Token) {
        this.token = token;
    }
}