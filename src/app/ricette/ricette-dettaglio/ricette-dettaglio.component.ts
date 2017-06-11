<<<<<<< HEAD


import { Component, OnInit } from '@angular/core';
import { Ricette } from '../ricette.model'
import { RicetteService } from "app/ricette/recette.service";
import { Params, ActivatedRoute } from "@angular/router";
=======
import { Component, Input } from '@angular/core';
import { Ricette } from '../ricette.model';
import { ListaSpesaService } from '../../lista-spesa/lista-spesa.service';
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c

@Component({
    selector: 'app-ricette-dettaglio',
    templateUrl: './ricette-dettaglio.component.html'
})

<<<<<<< HEAD
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
=======
export class RicetteDettaglio {
    @Input() ricetta: Ricette;

    constructor(private lsService: ListaSpesaService){}
    addIngredientiAllaListaSpesa(){
        this.lsService.addIngredienti(this.ricetta.ingredienti);
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
    }
}