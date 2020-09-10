import { Colore } from './colore';
import { Token } from '../dto/token';
export class Prodotto {
    id: string;
    codice: String;
    descrizione: String;
    peso: number;
    prezzo: number;   
    colore: Colore; 
} 