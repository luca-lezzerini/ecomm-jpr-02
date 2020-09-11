import { Token } from './token';
import { Taglia } from './../model/taglia';
import { Prodotto } from 'src/app/model/prodotto';
export class AssociaTagliaDto {
    
prodotto : Prodotto = new Prodotto();
taglia : Taglia = new Taglia();
token : Token = new Token();
}
