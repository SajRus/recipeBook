import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredienti } from '../../shared/app.ingredienti.model';
import { ListaSpesaService } from '../lista-spesa.service';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-lista-spesa-edit',
  templateUrl: './lista-spesa-edit.component.html',
  styleUrls: ['./lista-spesa-edit.component.css']
})
export class ListaSpesaEditComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  editMode: boolean = false;
  editItemIndex: number;

  editedItem: Ingredienti;

  @ViewChild('f') form: NgForm;
  constructor(private lsService: ListaSpesaService) { }

  ngOnInit() {
    this.subs = this.lsService.ingredienteEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editItemIndex = id;
        this.editedItem = this.lsService.getIngrediente(id);


        this.form.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        })
      }
    )
  }

  addIngrediente(form: NgForm) {
    const value = form.value;
    const ingrediente =
      new Ingredienti(value.name, value.amount);

    if (this.editMode) {
      this.lsService.updateIngrediente(
        this.editItemIndex,
        ingrediente
      );
    } else {
      this.lsService.addIngrediente(ingrediente);
    }

    this.editMode = false;
    form.reset();
  }

  onClean() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.lsService.deleteItem(this.editItemIndex);
    this.onClean();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
