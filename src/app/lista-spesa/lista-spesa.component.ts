import { Component, OnInit } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {
  ingedienti: Ingredienti[] = [];

  constructor(private lsService: ListaSpesaService) { }

  ngOnInit() {
      this.ingedienti = this.lsService.getIngredienti();

      this.lsService.ingredientiAggiornati.subscribe(
        (ingredienti: Ingredienti[]) => {
          this.ingedienti = ingredienti;
        }
      )
  }

  onIngredienteAggiunto(value: Ingredienti){
    this.ingedienti.push(value);
  }
}
