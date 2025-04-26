import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { electronicProducts } from '../../data/data';
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CategoryFilterBarComponent } from "../../components/category-filter-bar/category-filter-bar.component";
import { FilterProductMobileViewComponent } from "./components/mobile-view/mobile-view.component";
import { FilterProductDesktopiewComponent } from "./components/desktop-view/desktop-view.component";
import { FilterButtonComponent } from "../shop/components/filter-button/filter-button.component";
import { ProductService } from '../../services/products/products.service';

@Component({
  selector: 'shop-product-page',
  imports: [NavbarComponent, AboutFooterComponent, FooterComponent, CategoryFilterBarComponent, FilterProductMobileViewComponent, FilterProductDesktopiewComponent, FilterButtonComponent],
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.css'
})
export class ShopProductComponent {
   products = []
   categoryLabel = 'Electronics'
   private productService = inject(ProductService);
    async ngOnInit(){
        try{
            this.products = await this.productService.getProducts();
        }catch(error){
            console.log(error);
        }
        
    }
}
