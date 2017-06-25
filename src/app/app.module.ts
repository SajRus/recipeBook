import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { ListaSpesaModule } from "app/lista-spesa/lista-spesa.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ListaSpesaModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
