import { Categoria } from './categoria';
import { Colore } from './colore';
import { Token } from '../dto/token';
import { Taglia } from './taglia';
export class Prodotto {
    id: string;
    codice: String;
    descrizione: String;
    peso: number;
    prezzo: number;   
    colore: Colore; 
    categoria: Categoria;
    taglia : Taglia;
} 