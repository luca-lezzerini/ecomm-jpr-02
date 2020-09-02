import { Colore } from '../model/colore';
import { Token } from './token';

export class ColoriDto {
  colori: Colore[] = [];
  token: Token;
}
