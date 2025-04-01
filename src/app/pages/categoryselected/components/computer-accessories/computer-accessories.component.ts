import { Component } from '@angular/core';
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";
import { ShopButtonComponent } from "../../../../components/shop-button/shop-button.component";
import { electronicProducts } from '../../../../data/data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-computer-accessories',
  imports: [ProductCardComponent, ShopButtonComponent,RouterLink],
  templateUrl: './computer-accessories.component.html',
  styleUrl: './computer-accessories.component.css'
})
export class ComputerAccessoriesComponent {
   accessories = electronicProducts.slice(0,3);
}
