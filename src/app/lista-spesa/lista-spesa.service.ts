// import { EventEmitter } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
import { Subject } from "rxjs/Subject";

export class ListaSpesaService {
    // ingredientiAggiornati = new EventEmitter<Ingredienti[]>();
    ingredientiAggiornati = new Subject<Ingredienti[]>();
    private ingredienti: Ingredienti[] = [
        new Ingredienti('uova', 2),
        new Ingredienti('mele', 3)
    ]

    getIngredienti(){
        return this.ingredienti.slice()
    }

    addIngrediente(ingrediente: Ingredienti){
        this.ingredienti.push(ingrediente);
        this.ingredientiAggiornati.next(this.ingredienti.slice());
    }

    addIngredienti(ingrediente: Ingredienti[]){
        this.ingredienti.push(...ingrediente);
        this.ingredientiAggiornati.next(this.ingredienti.slice());
    }
}