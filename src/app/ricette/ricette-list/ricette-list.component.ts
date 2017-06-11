<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
import { Ricette } from '../ricette.model';
import { RicetteService } from "app/ricette/recette.service";

=======
import { Component, OnInit } from '@angular/core';
import { Ricette } from '../ricette.model';
import { RicetteService } from '../ricette.service';
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
@Component({
  selector: 'app-ricette-list',
  templateUrl: './ricette-list.component.html',
  styleUrls: ['./ricette-list.component.css']
})
export class RicetteListComponent implements OnInit {
<<<<<<< HEAD
  
  ricette: Ricette[];

  constructor(private ricetteService: RicetteService) { }

=======
  ricette: Ricette[];
  constructor(private ricetteService: RicetteService) { }

>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
  ngOnInit() {
    this.ricette = this.ricetteService.getRicette();
  }
}
