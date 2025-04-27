import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'nav-menu',
  imports: [RouterLinkActive,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  authService = inject(AuthService)
  constructor(private router:Router, private spinner: NgxSpinnerService){}
  makeLinkActive(e:MouseEvent){
    const eTarget = e.target as HTMLAnchorElement;
    e.preventDefault();
    const target = eTarget;
    const linkWidth = eTarget.offsetWidth;
    const linkOffset = eTarget.offsetLeft;

    // border.style.width = linkWidth + 'px';
    // border.style.left = linkOffset + 'px';


    
  }

  async navigateSeller(e:MouseEvent){
    this.spinner.show();
    try{
       const isSeller =  await this.authService.isSeller();
       this.makeLinkActive(e);
        if(isSeller){
          this.router.navigate(["/seller"]);
        }
        else{
          if(this.authService.isAuthenticated){
            this.router.navigate(["/onboarding"]);
          }
          else{
            this.router.navigate(["/login"]);
          }
        }
    }catch(error){
        console.log(error);
    }
}
}
