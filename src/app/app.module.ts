import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RicetteService } from "app/ricette/ricette.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";

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
    RicetteEditComponent,
    SingupComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RicetteService, DataStorageService, ListaSpesaService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
