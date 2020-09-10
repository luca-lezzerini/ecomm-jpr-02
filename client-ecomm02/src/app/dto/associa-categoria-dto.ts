import { Prodotto } from "../model/prodotto";
import { Categoria } from "../model/categoria";
import { Token } from "./token";

export class AssociaCategoriaDto {
    prodotto: Prodotto;
    categoria: Categoria[];
    token: Token;
}
