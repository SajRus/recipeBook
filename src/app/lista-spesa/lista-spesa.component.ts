import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredienti } from '../shared/app.ingredienti.model';
import { ListaSpesaService } from './lista-spesa.service';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit, OnDestroy {
  ingedienti: Ingredienti[];
  constructor(private listaSpesaService: ListaSpesaService) { }
  private subscription: Subscription;

  ngOnInit() {
    this.ingedienti = this.listaSpesaService.getIngredienti();
    this.subscription = this.listaSpesaService.ingredientiAggiornati.subscribe(
      (ingredienti: Ingredienti[]) => {
        this.ingedienti = ingredienti;
      }
    )
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  onItemEdit(i: number) {
      this.listaSpesaService.ingredienteEditing.next(i);
  }
}
