import { Imballo } from 'src/app/model/imballo';
import { Categoria } from './categoria';
import { Colore } from './colore';
import { Taglia } from './taglia';
import { Spedizione } from './spedizione';
import { Offerta } from './offerta';
export class Prodotto {
    id: string;
    codice: String;
    descrizione: String;
    peso: number;
    prezzo: number;   
    categoria: Categoria;
    colore: Colore; 
    imballo: Imballo;
    taglia : Taglia;
    spedizione: Spedizione;
    offerta: Offerta;
} 