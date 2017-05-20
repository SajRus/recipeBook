import { Ingredienti } from "app/shared/app.ingredienti.model";
import { EventEmitter } from "@angular/core";

export class ListaSpesaService {
    ingredientiAggiornati = new EventEmitter<Ingredienti[]>();
    
    private ingedienti: Ingredienti[] = [
        new Ingredienti('uova', 2),
        new Ingredienti('mele', 3)
    ]

    getIngredienti(){
        return this.ingedienti.slice();
    }

    addIngrediente(ingrediente: Ingredienti){
        this.ingedienti.push(ingrediente);
        this.ingredientiAggiornati.emit(this.ingedienti.slice());
    }

    addIngredienti(ingredienti: Ingredienti[]){
        this.ingedienti.push(...ingredienti);
        this.ingredientiAggiornati.emit(this.ingedienti.slice());
    }
}