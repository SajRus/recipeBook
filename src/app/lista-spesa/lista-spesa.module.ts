
import { NgModule } from "@angular/core";
import { ListaSpesaComponent } from "app/lista-spesa/lista-spesa.component";
import { ListaSpesaEditComponent } from "app/lista-spesa/lista-spesa-edit/lista-spesa-edit.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ListaSpesaComponent,
        ListaSpesaEditComponent
    ],
    imports:[
        FormsModule,
        CommonModule
    ]
})

export class ListaSpesaModule { }