


import { Component, OnInit } from '@angular/core';
import { Ricette } from './ricette.model';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent implements OnInit {
 ricettaEl: Ricette;
  constructor() { }

  ngOnInit() {
  }

}
