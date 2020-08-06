import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taglia-crud',
  templateUrl: './taglia-crud.component.html',
  styleUrls: ['./taglia-crud.component.css']
})
export class TagliaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
