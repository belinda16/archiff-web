import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoryFilterBarComponent } from "../../components/category-filter-bar/category-filter-bar.component";
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { ShippingAddressCard } from "../../components/shipping-address-card/shipping-address-card.component";
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-checkout',
  imports: [NavbarComponent, CategoryFilterBarComponent, NavigationBackComponentComponent, ShippingAddressCard, AboutFooterComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  @Input() categoryLabel = "Electronics"
}
