// import { EventEmitter } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
import { Subject } from "rxjs/Subject";

export class ListaSpesaService {
    // ingredientiAggiornati = new EventEmitter<Ingredienti[]>();
    ingredientiAggiornati = new Subject<Ingredienti[]>();
    ingredienteEditing = new Subject<number>();

    private ingredienti: Ingredienti[] = [
        new Ingredienti('uova', 2),
        new Ingredienti('mele', 3)
    ]

    getIngredienti(){
        return this.ingredienti.slice()
    }

    getIngrediente(id: number){
        return this.ingredienti[id];
    }

    addIngrediente(ingrediente: Ingredienti){
        this.ingredienti.push(ingrediente);
        this.ingredientiAggiornati.next(this.ingredienti.slice());
    }

    updateIngrediente(index: number, ingrediente: Ingredienti){
        this.ingredienti[index] = ingrediente;
        this.ingredientiAggiornati.next(this.ingredienti.slice());
    }

    addIngredienti(ingrediente: Ingredienti[]){
        this.ingredienti.push(...ingrediente);
        this.ingredientiAggiornati.next(this.ingredienti.slice());
    }

    deleteItem(index: number){
        this.ingredienti.splice(index, 1);
        this.ingredientiAggiornati.next(this.ingredienti.slice());
    }
}
