import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RicetteComponent } from './ricette/ricette.component';
import { RicetteDettaglio } from './ricette/ricette-dettaglio/ricette-dettaglio.component';
import { RicetteListComponent } from './ricette/ricette-list/ricette-list.component';
import { RicetteItemComponent } from './ricette/ricette-list/ricette-item/ricette-item.component';
import { HeaderComponent } from './header/header.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { ListaSpesaEditComponent } from './lista-spesa/lista-spesa-edit/lista-spesa-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
import { RicetteEditComponent } from './ricette/ricette-edit/ricette-edit.component';
import { RicetteStartComponent } from './ricette/ricette-start-component/ricette-start-component.component';

const appRoute = [
  { path: '', redirectTo: '/ricette', pathMatch: 'full' },
  {
    path: 'ricette', component: RicetteComponent,
    children: [
      { path: '', component: RicetteStartComponent },
      { path: 'new', component: RicetteEditComponent },
      { path: ':id', component: RicetteDettaglio },
      { path: ':id/edit', component: RicetteEditComponent }
    ]
  },
  { path: 'lista-spesa', component: ListaSpesaComponent }
]

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
    RicetteEditComponent,
    RicetteStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ListaSpesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
