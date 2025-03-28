import { Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector:"navbar",
    templateUrl:"navbar.component.html",
    imports: [MenuComponent]
})
export class NavbarComponent{}