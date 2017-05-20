

import { Component, OnInit } from '@angular/core';
import { Ricette } from '../ricette.model'
import { RicetteService } from "app/ricette/recette.service";
import { Params, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-ricette-dettaglio',
    templateUrl: './ricette-dettaglio.component.html'
})

export class RicetteDettaglio implements OnInit{
    ricetta: Ricette;
    id: number;


    constructor(private ricetteService: RicetteService,
                private route: ActivatedRoute) { }


    addIngredienti() {
        this.ricetteService.addIngredienti(this.ricetta.ingredienti);
    }

    ngOnInit(){
        // Non funziona in questo caso
        // this.ricetta = this.ricettaService.getRicetta(+this.route.snapshot.params['id']);

        this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.ricetta = this.ricetteService.getRicetta(this.id);
            }
        )
    }
}