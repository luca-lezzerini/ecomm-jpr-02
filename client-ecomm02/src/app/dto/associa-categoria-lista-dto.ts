import { Token } from './token';
import { Prodotto } from 'src/app/model/prodotto';
import { Categoria } from './../model/categoria';
export class AssociaCategoriaListaDto {
    prodotto: Prodotto;
    categorie: Categoria[];
    token: Token;
}
