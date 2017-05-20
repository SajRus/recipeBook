


import { Ingredienti } from "app/shared/app.ingredienti.model";

export class Ricette {
    constructor(
        public name: string,
        public desc: string,
        public imgPath: string,
        public ingredienti: Ingredienti[]
    ) { }
}