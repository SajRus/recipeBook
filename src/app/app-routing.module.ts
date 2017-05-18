import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RicetteComponent } from './ricette/ricette.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { RicetteDettaglio } from './ricette/ricette-dettaglio/ricette-dettaglio.component';
import { RicetteStartComponent } from './ricette/ricette-start/ricette-start.component';
import { RicetteEditComponent } from './ricette/ricette-edit/ricette-edit.component';

const appRoute = [
    { path: '', redirectTo: '/ricette', pathMatch: 'full' },
    { path: 'ricette', component: RicetteComponent, children:[
        {path: '', component: RicetteStartComponent},
        {path: 'new', component: RicetteEditComponent},   
        {path: ':id', component: RicetteDettaglio},
        {path: ':id/edit', component: RicetteEditComponent}
    ]},
    { path: 'lista-spesa', component: ListaSpesaComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}