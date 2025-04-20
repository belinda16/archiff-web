import { Component, ElementRef, HostListener, inject, ViewChild } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import { CommonModule } from "@angular/common";

@Component({
    selector:"navbar",
    templateUrl:"navbar.component.html",
    imports: [MenuComponent,RouterLink,CommonModule]
})
export class NavbarComponent{
    authService = inject(AuthService)
    @ViewChild('menu') menu!: ElementRef; 
    visible = false;
    constructor(private router:Router){}
    toggleMenu(){
        this.visible = !this.visible
    }
    @HostListener('document:mousedown', ['$event'])
    handleClickOutside(event: MouseEvent) {
        if (this.menu && !this.menu.nativeElement.contains(event.target)) {
        this.visible = false;
        }
    }
    async signOUt(){
        try{
            const response = await this.authService.signOut();
            if(response.status === 200){
                this.router.navigate(["/login"]);
            }
           
        }catch(error){
            
        }
        
    }
}