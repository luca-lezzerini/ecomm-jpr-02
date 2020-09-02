import { Prodotto } from './model/prodotto';
import { Token } from '../model/token';
export class ProdottoDto {
    prodotto: Prodotto;
    token: Token;
    constructor(prodotto: Prodotto, token: Token){
        this.prodotto = prodotto;
        this.token = token;
    }
} 