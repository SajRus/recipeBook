


import { Component, OnInit } from '@angular/core';
// import { Ricette } from './ricette.model';
import { RicetteService } from './ricette.service';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css'],
  providers: [RicetteService]
})
export class RicetteComponent implements OnInit {
//  ricettaSelezionata: Ricette;
  constructor(/*private ricetteService: RicetteService*/) { }

  ngOnInit() {
    // this.ricetteService.ricettaSelezionata.subscribe(
    //   (ricetta: Ricette) => {
    //     this.ricettaSelezionata = ricetta;
    //     console.log(ricetta);
    //   }
    // )
  }

}
