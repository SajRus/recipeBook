import { Component, OnInit } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
<<<<<<< HEAD
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
=======
import { ListaSpesaService } from './lista-spesa.service';
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {
<<<<<<< HEAD
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
=======
  ingedienti: Ingredienti[];
  constructor(private listaSpesaService: ListaSpesaService) { }

  ngOnInit() {
    this.ingedienti = this.listaSpesaService.getIngredienti();
    this.listaSpesaService.ingredientiAggiornati.subscribe(
      (ingredienti: Ingredienti[]) => {
        this.ingedienti = ingredienti;
      }
    )
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
  }
}
