

import { Component, OnInit, Input } from '@angular/core';
import { Ricette } from '../../ricette.model';

import { RicetteService } from '../../ricette.service';
@Component({
  selector: 'app-ricette-item',
  templateUrl: './ricette-item.component.html',
  styleUrls: ['./ricette-item.component.css']
})
export class RicetteItemComponent implements OnInit {
  @Input() ricetta: Ricette;

  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
  }

  onSelected(){
      this.ricetteService.ricettaSelezionata.emit(this.ricetta);
  }

}
