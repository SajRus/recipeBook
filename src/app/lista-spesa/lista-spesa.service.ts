<<<<<<< HEAD
import { Ingredienti } from "app/shared/app.ingredienti.model";
import { EventEmitter } from "@angular/core";

export class ListaSpesaService {
    ingredientiAggiornati = new EventEmitter<Ingredienti[]>();
    
    private ingedienti: Ingredienti[] = [
=======
import { EventEmitter } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';

export class ListaSpesaService {
    ingredientiAggiornati = new EventEmitter<Ingredienti[]>();
    private ingredienti: Ingredienti[] = [
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
        new Ingredienti('uova', 2),
        new Ingredienti('mele', 3)
    ]

    getIngredienti(){
<<<<<<< HEAD
        return this.ingedienti.slice();
    }

    addIngrediente(ingrediente: Ingredienti){
        this.ingedienti.push(ingrediente);
        this.ingredientiAggiornati.emit(this.ingedienti.slice());
    }

    addIngredienti(ingredienti: Ingredienti[]){
        this.ingedienti.push(...ingredienti);
        this.ingredientiAggiornati.emit(this.ingedienti.slice());
=======
        return this.ingredienti.slice()
    }

    addIngrediente(ingrediente: Ingredienti){
        this.ingredienti.push(ingrediente);
        this.ingredientiAggiornati.emit(this.ingredienti.slice());
    }

    addIngredienti(ingrediente: Ingredienti[]){
        this.ingredienti.push(...ingrediente);
        this.ingredientiAggiornati.emit(this.ingredienti.slice());
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
    }
}