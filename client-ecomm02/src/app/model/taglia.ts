import { Prodotto } from 'src/app/model/prodotto';

export class Taglia {

    id: string;
    descrizione: string;
    sigla: string;
    prodotti : Prodotto[] = [];
}
