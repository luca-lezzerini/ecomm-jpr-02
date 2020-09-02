import { Token } from '../dto/token';
export class TokenDto {
    token: Token;

    constructor(token: Token) {
        this.token = token;
    }
}