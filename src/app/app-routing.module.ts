import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RicetteComponent } from './ricette/ricette.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { RicetteDettaglio } from './ricette/ricette-dettaglio/ricette-dettaglio.component';
import { RicetteStartComponent } from './ricette/ricette-start/ricette-start.component';
import { RicetteEditComponent } from './ricette/ricette-edit/ricette-edit.component';
import { SingupComponent } from "app/auth/singup/singup.component";
import { SinginComponent } from "app/auth/singin/singin.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const appRoute = [
    { path: '', redirectTo: '/ricette', pathMatch: 'full' },
    { path: 'ricette', component: RicetteComponent, children:[
        {path: '', component: RicetteStartComponent},
        {path: 'new', component: RicetteEditComponent, canActivate: [AuthGuard]},   
        {path: ':id', component: RicetteDettaglio},
        {path: ':id/edit', component: RicetteEditComponent, canActivate: [AuthGuard]}
    ]},
    { path: 'lista-spesa', component: ListaSpesaComponent },
    { path: 'singup', component: SingupComponent },
    { path: 'singin', component: SinginComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}