import { Component, OnInit } from '@angular/core';
import { Ricette } from '../ricette.model';
import { ListaSpesaService } from '../../lista-spesa/lista-spesa.service';
import { RicetteService } from '../ricette.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-ricette-dettaglio',
    templateUrl: './ricette-dettaglio.component.html'
})

export class RicetteDettaglio implements OnInit{
    ricetta: Ricette;
    id: number;

    constructor( private ricettaService: RicetteService,
                private route: ActivatedRoute){}
    addIngredientiAllaListaSpesa(){
        this.ricettaService.addIngredientiListaSpesa(this.ricetta.ingredienti);
    }

    ngOnInit(){
        // Non funziona in questo caso
        // this.ricetta = this.ricettaService.getRicetta(+this.route.snapshot.params['id']);

        this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.ricetta = this.ricettaService.getRicetta(this.id);
            }
        )
    }
}