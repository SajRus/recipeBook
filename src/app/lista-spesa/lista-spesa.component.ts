import { Component, OnInit } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
import { ListaSpesaService } from './lista-spesa.service';
@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {
  ingedienti: Ingredienti[];
  constructor(private listaSpesaService: ListaSpesaService) { }

  ngOnInit() {
    this.ingedienti = this.listaSpesaService.getIngredienti();
    this.listaSpesaService.ingredientiAggiornati.subscribe(
      (ingredienti: Ingredienti[]) => {
        this.ingedienti = ingredienti;
      }
    )
  }
}
