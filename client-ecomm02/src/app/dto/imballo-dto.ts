import { Imballo } from '../model/imballo';
import { Token } from './token';

export class ImballoDto {
    imballo: Imballo = new Imballo();
    token: Token;
}