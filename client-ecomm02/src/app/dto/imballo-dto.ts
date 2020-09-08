import { Imballo } from '../entity/imballo';
import { Token } from './token';

export class ImballoDto {
    imballo: Imballo = new Imballo();
    token: Token;
}