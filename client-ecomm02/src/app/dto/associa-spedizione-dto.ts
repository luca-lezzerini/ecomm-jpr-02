import { Prodotto } from "../model/prodotto";
import { Spedizione } from "../model/spedizione";
import { Token } from "./token";
export class AssociaSpedizioneDto {
    prodotto: Prodotto;
    spedizione: Spedizione;
    token: Token;
}
