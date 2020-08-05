import { Router } from '@angular/router';
import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.css']
})
export class HomeCRUDComponent implements OnInit {

  constructor(public mx: HomeServiceService, private router:Router) { }

  ngOnInit() {
  }


}
