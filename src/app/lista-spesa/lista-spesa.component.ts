import { Component, OnInit } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {
  ingedienti: Ingredienti[] = [
    new Ingredienti('uova', 2),
    new Ingredienti('mele', 3)
  ]
  constructor() { }

  ngOnInit() {
  }

}
