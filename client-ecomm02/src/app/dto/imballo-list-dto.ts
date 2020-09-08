import { Imballo } from '../entity/imballo';

import { Token } from './token';
export class ImballoListDto {
   imballi: Imballo[] = [];
   token: Token;
}