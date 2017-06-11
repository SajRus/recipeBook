


import { Component, OnInit } from '@angular/core';
import { Ricette } from './ricette.model';
<<<<<<< HEAD
import { RicetteService } from "app/ricette/recette.service";
=======
import { RicetteService } from './ricette.service';
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css'],
  providers: [RicetteService]
})
export class RicetteComponent implements OnInit {
<<<<<<< HEAD
 ricettaEl: Ricette;
=======
 ricettaSelezionata: Ricette;
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
    this.ricetteService.ricettaSelezionata.subscribe(
      (ricetta: Ricette) => {
<<<<<<< HEAD
        this.ricettaEl =  ricetta;
=======
        this.ricettaSelezionata = ricetta;
        console.log(ricetta);
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
      }
    )
  }

}
