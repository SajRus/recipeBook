import { EventEmitter } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';

export class ListaSpesaService {
    ingredientiAggiornati = new EventEmitter<Ingredienti[]>();
    private ingredienti: Ingredienti[] = [
        new Ingredienti('uova', 2),
        new Ingredienti('mele', 3)
    ]

    getIngredienti(){
        return this.ingredienti.slice()
    }

    addIngrediente(ingrediente: Ingredienti){
        this.ingredienti.push(ingrediente);
        this.ingredientiAggiornati.emit(this.ingredienti.slice());
    }

    addIngredienti(ingrediente: Ingredienti[]){
        this.ingredienti.push(...ingrediente);
        this.ingredientiAggiornati.emit(this.ingredienti.slice());
    }
}