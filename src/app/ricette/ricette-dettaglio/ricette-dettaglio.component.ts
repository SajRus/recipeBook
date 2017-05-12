import { Component, Input } from '@angular/core';
import { Ricette } from '../ricette.model'

@Component({
    selector: 'app-ricette-dettaglio',
    templateUrl: './ricette-dettaglio.component.html'
})

export class RicetteDettaglio {
    @Input() ricetta: Ricette;
}