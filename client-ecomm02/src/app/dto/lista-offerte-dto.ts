import { Offerta } from '../model/offerta';
import { Token } from './token';
export class ListaOfferteDto {
    listaOfferte : Offerta[] = [];
    token : Token;
}
