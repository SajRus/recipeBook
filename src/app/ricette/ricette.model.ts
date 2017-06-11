import { Ingredienti } from '../shared/app.ingredienti.model';

<<<<<<< HEAD
import { Ingredienti } from "app/shared/app.ingredienti.model";

export class Ricette {
    constructor(
        public name: string,
        public desc: string,
        public imgPath: string,
        public ingredienti: Ingredienti[]
    ) { }
=======
export class Ricette{
    // public name: string;
    // public desc: string;
    // public imgPath: string;
    constructor(public name: string, public desc: string, public imgPath: string,public ingredienti: Ingredienti[]){}
    // constructor(name: string,desc: string,imgPath: string){
    //     this.name = name;
    //     this.desc = desc;
    //     this.imgPath = imgPath;
    // }
    
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
}