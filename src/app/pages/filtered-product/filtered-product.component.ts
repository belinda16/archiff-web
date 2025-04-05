import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { electronicProducts } from '../../data/data';
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CategoryFilterBarComponent } from "../../components/category-filter-bar/category-filter-bar.component";
import { FilterProductMobileViewComponent } from "./components/mobile-view/mobile-view.component";
import { FilterProductDesktopiewComponent } from "./components/desktop-view/desktop-view.component";

@Component({
  selector: 'app-filtered-product-page',
  imports: [NavbarComponent, AboutFooterComponent, FooterComponent, CategoryFilterBarComponent, FilterProductMobileViewComponent, FilterProductDesktopiewComponent],
  templateUrl: './filtered-product.component.html',
  styleUrl: './filtered-product.component.css'
})
export class FilteredProductPageComponent {
   products = electronicProducts;
   categoryLabel = 'Electronics'
}
