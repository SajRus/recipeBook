

import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { RicetteComponent } from "app/ricette/ricette.component";
import { RicetteStartComponent } from "app/ricette/ricette-start/ricette-start.component";
import { RicetteListComponent } from "app/ricette/ricette-list/ricette-list.component";
import { RicetteEditComponent } from "app/ricette/ricette-edit/ricette-edit.component";
import { RicetteDettaglio } from "app/ricette/ricette-dettaglio/ricette-dettaglio.component";
import { RicetteItemComponent } from "app/ricette/ricette-list/ricette-item/ricette-item.component";

import { CommonModule } from "@angular/common";
import { RicetteRoutingModule } from "app/ricette/ricette-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { AuthGuard } from "app/auth/auth-guard.service";

@NgModule({
    declarations: [
        RicetteComponent,
        RicetteStartComponent,
        RicetteListComponent,
        RicetteEditComponent,
        RicetteDettaglio,
        RicetteItemComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RicetteRoutingModule,
        SharedModule
    ],
    providers: [
        AuthGuard
    ]
})
export class RicetteModule {

}