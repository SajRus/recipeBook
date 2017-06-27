import { Ingredienti } from '../shared/app.ingredienti.model';

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
    
}
