
import { NgModule } from "@angular/core";
import { SingupComponent } from "app/auth/singup/singup.component";
import { SinginComponent } from "app/auth/singin/singin.component";
import { AuthRoutingModule } from "app/auth/auth-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SingupComponent,
        SinginComponent
    ],
    imports: [
        AuthRoutingModule,
        FormsModule
    ]
})
export class AuthModule { }