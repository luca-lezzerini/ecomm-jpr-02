import { Token } from './token';
import { Taglia } from '../entity/taglia';

export class TagliaListDto {
    taglie: Taglia[] = [];
    token: Token;
}