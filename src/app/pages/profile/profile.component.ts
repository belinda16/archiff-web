import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {TabsModule} from "primeng/tabs"
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { ShippingAddressCard } from "../../components/shipping-address-card/shipping-address-card.component";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export interface User{
  fullName:string,
  email:string,

}
@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, TabsModule, NavigationBackComponentComponent, ShippingAddressCard],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private authService = inject(AuthService);
  disableInput = true;
  user!:User; 
  constructor(private router: Router) {
    if(!this.authService.isAuthenticated){
      router.navigate(['login'])
    }
    this.user = this.authService.user;
  }
  activateInput(){
    this.disableInput = false;
  }
  submitUserInfo(){
    
  }
}
