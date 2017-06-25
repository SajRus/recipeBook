
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingupComponent } from "app/auth/singup/singup.component";
import { SinginComponent } from "app/auth/singin/singin.component";


const authRoutes: Routes = [
    { path: 'singup', component: SingupComponent },
    { path: 'singin', component: SinginComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AuthRoutingModule { }