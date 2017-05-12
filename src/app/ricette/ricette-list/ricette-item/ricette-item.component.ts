

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ricette } from '../../ricette.model';
@Component({
  selector: 'app-ricette-item',
  templateUrl: './ricette-item.component.html',
  styleUrls: ['./ricette-item.component.css']
})
export class RicetteItemComponent implements OnInit {
  @Input() ricetta: Ricette;
  @Output() rirettaSelezionata = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.rirettaSelezionata.emit();
  }

}
