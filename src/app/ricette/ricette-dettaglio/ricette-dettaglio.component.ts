import { Component, Input } from '@angular/core';
import { Ricette } from '../ricette.model';
import { ListaSpesaService } from '../../lista-spesa/lista-spesa.service';

@Component({
    selector: 'app-ricette-dettaglio',
    templateUrl: './ricette-dettaglio.component.html'
})

export class RicetteDettaglio {
    @Input() ricetta: Ricette;

    constructor(private lsService: ListaSpesaService){}
    addIngredientiAllaListaSpesa(){
        this.lsService.addIngredienti(this.ricetta.ingredienti);
    }
}