import { Component, inject, Input } from "@angular/core";
import { TabsModule } from "primeng/tabs";
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";
import { ProductService } from "../../../../services/products/products.service";

@Component({
    selector:"filter-product-desktop-view",
    templateUrl:"desktop-view.component.html",
    styleUrl:"./desktop-view.component.css",
    imports: [TabsModule, ProductCardComponent]
})
export class FilterProductDesktopiewComponent{
    @Input() products!:any[];
    productService = inject(ProductService);
    likeProduct(productId:string){
        this.productService.likeProduct(productId)
    }
    
}