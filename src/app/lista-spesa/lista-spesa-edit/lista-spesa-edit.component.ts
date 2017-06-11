<<<<<<< HEAD
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredienti } from '../../shared/app.ingredienti.model';
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
=======
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredienti } from '../../shared/app.ingredienti.model';
import { ListaSpesaService } from '../lista-spesa.service';

>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
@Component({
  selector: 'app-lista-spesa-edit',
  templateUrl: './lista-spesa-edit.component.html',
  styleUrls: ['./lista-spesa-edit.component.css']
})
export class ListaSpesaEditComponent implements OnInit {
<<<<<<< HEAD
  @ViewChild('nIngrediente') nomeIngrediente: ElementRef;
  @ViewChild('qIngrediente') qtIngrediente: ElementRef;
  @Output() ingredienteAggiunto = new EventEmitter<Ingredienti>();

=======
  @ViewChild('nIngrediente') nomeIngrediente: ElementRef; 
  @ViewChild('qIngrediente') qtIngrediente: ElementRef; 
  
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
  constructor(private lsService: ListaSpesaService) { }

  ngOnInit() {

  }

<<<<<<< HEAD
  addIngrediente() {
    // this.ingredienteAggiunto.emit({
    //   name: this.nomeIngrediente.nativeElement.value,
    //   qt: this.qtIngrediente.nativeElement.value
    // })
    this.lsService.addIngrediente({
      name: this.nomeIngrediente.nativeElement.value,
      qt: this.qtIngrediente.nativeElement.value
    })
=======
  addIngrediente(){
    this.lsService.addIngrediente(new Ingredienti(this.nomeIngrediente.nativeElement.value
    , this.qtIngrediente.nativeElement.value));
>>>>>>> a9219a16ca6e889b88ca4abdd58cddb7ed19e20c
  }
}
