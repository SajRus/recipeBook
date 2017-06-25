import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { HomeComponent } from "app/core/home/home.component";

const appRoute = [
    { path: '', component: HomeComponent },
    { path: 'ricette', loadChildren: './ricette/ricette.module#RicetteModule'},
    { path: 'lista-spesa', component: ListaSpesaComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}