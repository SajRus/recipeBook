

import { Component, OnInit, Input } from '@angular/core';
import { Ricette } from '../../ricette.model';
import { RicetteService } from "app/ricette/recette.service";
@Component({
  selector: 'app-ricette-item',
  templateUrl: './ricette-item.component.html',
  styleUrls: ['./ricette-item.component.css']
})
export class RicetteItemComponent implements OnInit {
  @Input() ricetta: Ricette;
  @Input() index: number;

  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
  }

}
