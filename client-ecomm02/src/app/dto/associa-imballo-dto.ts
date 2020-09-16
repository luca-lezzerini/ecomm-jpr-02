import { Imballo } from './../model/imballo';
import { Prodotto } from '../model/prodotto';
import { Token } from './token';

export class AssociaImballoDto {
    prodotto: Prodotto = new Prodotto();
    imballo: Imballo = new Imballo();
    token: Token = new Token();
}
