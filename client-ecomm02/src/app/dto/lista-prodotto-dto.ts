import { Prodotto } from '../model/prodotto';
import { Token } from '../dto/token';
export class ListaProdottoDto {
    listaProdotti: Prodotto [];
    token: Token;
} 