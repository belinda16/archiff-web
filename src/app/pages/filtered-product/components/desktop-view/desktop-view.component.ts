import { Component, Input } from "@angular/core";
import { TabsModule } from "primeng/tabs";
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";
import { electronicProducts } from "../../../../data/data";

@Component({
    selector:"filter-product-desktop-view",
    templateUrl:"desktop-view.component.html",
    styleUrl:"./desktop-view.component.css",
    imports: [TabsModule, ProductCardComponent]
})
export class FilterProductDesktopiewComponent{
    @Input() products!:typeof electronicProducts;
}