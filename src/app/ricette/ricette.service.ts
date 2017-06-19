
import { Injectable } from '@angular/core';
import { Ricette } from './ricette.model';
import { Ingredienti } from '../shared/app.ingredienti.model';
import { ListaSpesaService } from '../lista-spesa/lista-spesa.service';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RicetteService {

    // ricettaSelezionata = new EventEmitter<Ricette>();
    ricetteChanged = new Subject<Ricette[]>();

    private ricette: Ricette[] = [
        new Ricette(
            'Gnocchi al pesto genovese',
            'Gli gnocchi, una ricetta che si prepara in tutta Italia, ma che esclusivamente in Liguria si usa condire con il pesto genovese.',
            'http://www.cucinagenovese.it/images/gnocchi_al_pesto.jpg',
            [
                new Ingredienti('Gnocchi', 500),
                new Ingredienti('Pesto', 200)
            ]),
        new Ricette(
            'Baba\' al rum',
            'Il babà è un dolce dalla lenta ed elaborata preparazione ma che soddisferà i palati più esigenti!',
            'http://prodotti-tipici-campania.it/files/2011/10/storia_baba_napoletano.jpg',
            [
                new Ingredienti('Farina', 500),
                new Ingredienti('Uova', 2)
            ])
    ];

    constructor(private lsService: ListaSpesaService) { }

    addIngredientiListaSpesa(ingredienti: Ingredienti[]) {
        this.lsService.addIngredienti(ingredienti);
    }

    getRicette() {
        return this.ricette.slice();
    }

    getRicetta(id: number) {
        return this.ricette[id];
    }

    addRicetta(ricetta: Ricette){
        this.ricette.push(ricetta);
        this.ricetteChanged.next(this.ricette.slice());
    }

    setRicette(ricette: Ricette[]){
        this.ricette = ricette;
        
        this.ricetteChanged.next(this.ricette.slice());
    }

    updateRicetta(index: number, ricetta: Ricette){
        this.ricette[index] = ricetta;
        this.ricetteChanged.next(this.ricette.slice());
    }

    deleteRicetta(index: number){
        this.ricette.splice(index, 1);
        this.ricetteChanged.next(this.ricette.slice());
    }
}