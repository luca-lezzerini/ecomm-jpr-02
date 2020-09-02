import { Prodotto } from '../model/prodotto';
import { Token } from '../dto/token';
export class ListaProdottoDto {
    listaColori: Prodotto [];
    token: Token;
} 