import { OffertaDto } from './../dto/offerta-dto';
import { Categoria } from './categoria';
import { Colore } from './colore';
import { Token } from '../dto/token';
import { Taglia } from './taglia';
import { Spedizione } from './spedizione';
import { Offerta } from './offerta';
export class Prodotto {
    id: string;
    codice: String;
    descrizione: String;
    peso: number;
    prezzo: number;   
    colore: Colore; 
    categoria: Categoria;
    taglia : Taglia;
    spedizione: Spedizione;
    offerta: Offerta;
} 