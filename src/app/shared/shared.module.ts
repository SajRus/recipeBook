import { NgModule } from "@angular/core";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        DropdownDirective,
        CommonModule
    ]
})

export class SharedModule { }