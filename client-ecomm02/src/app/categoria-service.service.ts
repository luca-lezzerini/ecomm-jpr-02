import { CategoriaDto } from './dto/categoria-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  private url = "http://localhost:8080"
  categorie: CategoriaDto[]; 
  
  
  constructor(private http:HttpClient) { }
}
