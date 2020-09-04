import { Spedizione} from "../model/spedizione";
import { Token } from "./token";

export class SpedizioneListaDto {
    listaSpedizioneDto: Spedizione[];
    token: Token;
}
