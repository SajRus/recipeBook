import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredienti } from '../../shared/app.ingredienti.model';
import { ListaSpesaService } from '../lista-spesa.service';

@Component({
  selector: 'app-lista-spesa-edit',
  templateUrl: './lista-spesa-edit.component.html',
  styleUrls: ['./lista-spesa-edit.component.css']
})
export class ListaSpesaEditComponent implements OnInit {
  @ViewChild('nIngrediente') nomeIngrediente: ElementRef; 
  @ViewChild('qIngrediente') qtIngrediente: ElementRef; 
  
  constructor(private lsService: ListaSpesaService) { }

  ngOnInit() {
  }

  addIngrediente(){
    this.lsService.addIngrediente(new Ingredienti(this.nomeIngrediente.nativeElement.value
    , this.qtIngrediente.nativeElement.value));
  }
}
