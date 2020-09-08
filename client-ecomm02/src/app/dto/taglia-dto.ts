import { Taglia } from './../model/taglia';
import { Token } from './token';

export class TagliaDto {
    taglia: Taglia = new Taglia();
    token: Token;
}