import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router:Router){}

  home(){
    this.router.navigateByUrl('/home-crud')
  }

  anagrafiche(){
    this.router.navigateByUrl('anagrafiche-crud')
  }

  carrello(){
    this.router.navigateByUrl('carrello-crud')
  }
}
