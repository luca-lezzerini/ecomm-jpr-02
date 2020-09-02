import { Categoria } from "../model/categoria";
import { Token } from "./token";

export class CategoriaListaDto {
    listaCategoriaDto: Categoria[];
    token: Token;
}
