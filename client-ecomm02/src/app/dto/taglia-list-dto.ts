import { Taglia } from './../model/taglia';
import { Token } from './token';

export class TagliaListDto {
    taglie: Taglia[] = [];
    token: Token;
}