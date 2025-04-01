import { Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from "@angular/router";

@Component({
    selector:"navbar",
    templateUrl:"navbar.component.html",
    imports: [MenuComponent,RouterLink]
})
export class NavbarComponent{}