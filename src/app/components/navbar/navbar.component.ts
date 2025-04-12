import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from "@angular/router";

@Component({
    selector:"navbar",
    templateUrl:"navbar.component.html",
    imports: [MenuComponent,RouterLink]
})
export class NavbarComponent{
    @ViewChild('menu') menu!: ElementRef; 
    visible = false;
    toggleMenu(){
        this.visible = !this.visible
    }
    @HostListener('document:mousedown', ['$event'])
    handleClickOutside(event: MouseEvent) {
        if (this.menu && !this.menu.nativeElement.contains(event.target)) {
        this.visible = false;
        }
    }
}