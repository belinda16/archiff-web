import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { InputNumberModule } from 'primeng/inputnumber';
import { TabsModule } from 'primeng/tabs';
import { GadgetSectionComponent } from "../shop/components/gadget-section/gadget-section.component";
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CategoryFilterBarComponent } from "../../components/category-filter-bar/category-filter-bar.component";
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [NavbarComponent, InputNumberModule, TabsModule, GadgetSectionComponent, AboutFooterComponent, FooterComponent, CategoryFilterBarComponent,RouterLink,NavigationBackComponentComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() categoryLabel = 'Electronics'
}
