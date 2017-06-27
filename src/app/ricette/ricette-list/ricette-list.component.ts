import { Component, OnInit} from '@angular/core';
import { Ricette } from '../ricette.model';
import { RicetteService } from "app/ricette/recette.service";

@Component({
  selector: 'app-ricette-list',
  templateUrl: './ricette-list.component.html',
  styleUrls: ['./ricette-list.component.css']
})
export class RicetteListComponent implements OnInit {

  ricette: Ricette[];
  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
    this.ricette = this.ricetteService.getRicette();
  }
}
