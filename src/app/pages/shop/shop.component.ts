import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ShopFilterBarComponent } from "./components/shop-filter-bar/shop-filter-bar.component";
import { CategoriesSectionComponent } from "./components/categories-section/categories-section.component";
import { GadgetSectionComponent } from "./components/gadget-section/gadget-section.component";
import { ReviewComponent } from "./components/review/review.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";

@Component({
  selector: 'app-shop',
  imports: [NavbarComponent, ShopFilterBarComponent, CategoriesSectionComponent, GadgetSectionComponent, ReviewComponent, FooterComponent, AboutFooterComponent,],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
