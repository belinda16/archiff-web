import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {TabsModule} from "primeng/tabs"
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { ShippingAddressCard } from "../../components/shipping-address-card/shipping-address-card.component";
@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, TabsModule, NavigationBackComponentComponent, ShippingAddressCard],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
