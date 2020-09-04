import { Colore } from '../model/colore';
import { Token } from './token';

export class ColoriDto {
  listaColori: Colore[] = [];
  token: Token;
}
