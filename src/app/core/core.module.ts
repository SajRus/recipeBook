
import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { HeaderComponent } from "app/core/header/header.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { RicetteService } from "app/ricette/ricette.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { ListaSpesaService } from "app/lista-spesa/lista-spesa.service";
import { AuthService } from "app/auth/auth.service";
import { AuthModule } from "app/auth/auth.module";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        AuthModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RicetteService,
        DataStorageService,
        ListaSpesaService,
        AuthService
    ]
})

export class CoreModule {

}