import { Imballo } from '../model/imballo';

import { Token } from './token';
export class ImballoListDto {
   imballi: Imballo[] = [];
   token: Token;
}