import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ricette } from '../ricette.model';
import { RicetteService } from '../ricette.service';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-ricette-list',
  templateUrl: './ricette-list.component.html',
  styleUrls: ['./ricette-list.component.css']
})
export class RicetteListComponent implements OnInit, OnDestroy {
  ricette: Ricette[];
  obsRif: Subscription;
  constructor(private ricetteService: RicetteService) { }

  ngOnInit() {
    this.ricette = this.ricetteService.getRicette();

    this.obsRif = this.ricetteService.ricetteChanged.subscribe(
      (ricette) => {
        this.ricette = ricette;
      })
  }

ngOnDestroy(){
  this.obsRif.unsubscribe();
}

}
