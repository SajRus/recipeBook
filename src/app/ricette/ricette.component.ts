


import { Component, OnInit } from '@angular/core';
import { Ricette } from './ricette.model';
import { RicetteService } from "app/ricette/recette.service";

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent implements OnInit {
 ricettaEl: Ricette;
  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
    this.ricetteService.ricettaSelezionata.subscribe(
      (ricetta: Ricette) => {
        this.ricettaEl =  ricetta;
      }
    )
  }

}
