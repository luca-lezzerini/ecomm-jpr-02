import { Prodotto } from "../model/prodotto";
import { Spedizione } from "../model/spedizione";
import { Token } from "./token";

export class AssociaSpedizioneListaDto {
    prodotto: Prodotto;
    spedizioni: Spedizione[];
    token: Token;
}