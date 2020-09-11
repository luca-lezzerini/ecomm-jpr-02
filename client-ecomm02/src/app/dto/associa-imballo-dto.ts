import { Imballo } from './../model/imballo';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Prodotto } from '../model/prodotto';

export class AssociaImballoDto {
    prodotto: Prodotto;
    imballo: Imballo;
    token: Token;
}
