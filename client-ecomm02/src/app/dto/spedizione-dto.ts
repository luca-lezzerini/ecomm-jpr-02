import { Token } from "./token";
import { Spedizione } from "../model/spedizione";

export class SpedizioneDto {

    token: Token;
    spedizione: Spedizione;
    paginaCorrente: number;
}
