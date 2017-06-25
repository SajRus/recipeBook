

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RicetteComponent } from "app/ricette/ricette.component";
import { RicetteStartComponent } from "app/ricette/ricette-start/ricette-start.component";
import { RicetteEditComponent } from "app/ricette/ricette-edit/ricette-edit.component";
import { RicetteDettaglio } from "app/ricette/ricette-dettaglio/ricette-dettaglio.component";
import { AuthGuard } from "app/auth/auth-guard.service";


const ricetteRoute: Routes = [
    {
        path: '', component: RicetteComponent, children: [
            { path: '', component: RicetteStartComponent },
            { path: 'new', component: RicetteEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RicetteDettaglio },
            { path: ':id/edit', component: RicetteEditComponent, canActivate: [AuthGuard] }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(ricetteRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class RicetteRoutingModule {

}