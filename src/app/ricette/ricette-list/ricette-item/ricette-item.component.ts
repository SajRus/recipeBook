

import { Component, OnInit, Input } from '@angular/core';
import { Ricette } from '../../ricette.model';
<<<<<<< HEAD
import { RicetteService } from "app/ricette/recette.service";
=======

import { RicetteService } from '../../ricette.service';
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
@Component({
  selector: 'app-ricette-item',
  templateUrl: './ricette-item.component.html',
  styleUrls: ['./ricette-item.component.css']
})
export class RicetteItemComponent implements OnInit {
  @Input() ricetta: Ricette;
<<<<<<< HEAD
  @Input() index: number;
=======
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c

  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  onSelected(){
      this.ricetteService.ricettaSelezionata.emit(this.ricetta);
  }

>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
}
