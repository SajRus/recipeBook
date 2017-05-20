import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredienti } from '../../shared/app.ingredienti.model';
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
@Component({
  selector: 'app-lista-spesa-edit',
  templateUrl: './lista-spesa-edit.component.html',
  styleUrls: ['./lista-spesa-edit.component.css']
})
export class ListaSpesaEditComponent implements OnInit {
  @ViewChild('nIngrediente') nomeIngrediente: ElementRef;
  @ViewChild('qIngrediente') qtIngrediente: ElementRef;
  @Output() ingredienteAggiunto = new EventEmitter<Ingredienti>();

  constructor(private lsService: ListaSpesaService) { }

  ngOnInit() {

  }

  addIngrediente() {
    // this.ingredienteAggiunto.emit({
    //   name: this.nomeIngrediente.nativeElement.value,
    //   qt: this.qtIngrediente.nativeElement.value
    // })
    this.lsService.addIngrediente({
      name: this.nomeIngrediente.nativeElement.value,
      qt: this.qtIngrediente.nativeElement.value
    })
  }
}
