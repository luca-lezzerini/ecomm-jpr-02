export class SpedizioneDto {
    
    constructor(
        public id: number,
        public codice: string,
        public nome: string,
        public prezzoKg: number
    ){}
}
