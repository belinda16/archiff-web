import { Component, Input } from "@angular/core";
import { TabsModule } from "primeng/tabs";
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";
import { electronicProducts } from "../../../../data/data";

@Component({
    selector:"filter-product-mobile-view",
    templateUrl:"mobile-view.component.html",
    styleUrl:"./mobile-view.component.css",
    imports: [TabsModule, ProductCardComponent]
})
export class FilterProductMobileViewComponent{
    @Input() products!:typeof electronicProducts;
}