import { Prodotto } from '../model/prodotto';
import { Token } from './token';
export class ListaProdottiDto {
    listaProdotti: Prodotto [];
    token: Token;
} 