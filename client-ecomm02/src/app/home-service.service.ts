import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClientModule) { }
}
