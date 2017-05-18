import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RicetteComponent } from './ricette/ricette.component';
import { RicetteDettaglio } from './ricette/ricette-dettaglio/ricette-dettaglio.component';
import { RicetteListComponent } from './ricette/ricette-list/ricette-list.component';
import { RicetteItemComponent } from './ricette/ricette-list/ricette-item/ricette-item.component';
import { HeaderComponent } from './header/header.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { ListaSpesaEditComponent } from './lista-spesa/lista-spesa-edit/lista-spesa-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RicetteStartComponent } from './ricette/ricette-start/ricette-start.component';
import { RicetteEditComponent } from './ricette/ricette-edit/ricette-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RicetteComponent,
    RicetteDettaglio,
    RicetteListComponent,
    RicetteItemComponent,
    HeaderComponent,
    ListaSpesaComponent,
    ListaSpesaEditComponent,
    DropdownDirective,
    RicetteStartComponent,
    RicetteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
