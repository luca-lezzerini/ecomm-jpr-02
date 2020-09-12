import { Token } from "./token";
import { Categoria } from "../model/categoria";

export class CategoriaDto {

    token: Token;
    categoria: Categoria;
    paginaCorrente: number;
}
