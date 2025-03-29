import { Component } from '@angular/core';
import { ProductCardComponent } from "../../../../components/product-card/product-card.component";

@Component({
  selector: 'app-computer-accessories',
  imports: [ProductCardComponent],
  templateUrl: './computer-accessories.component.html',
  styleUrl: './computer-accessories.component.css'
})
export class ComputerAccessoriesComponent {
   accessories = [
    {
      altText:'An apple macbook',
      brandName:'Apple',
      description:'2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, ',
      price:1024.99,
      imageUrl:'/assets/images/apple-mac-book.svg'
    },
    {
      altText:'An google chromebook',
      brandName:'Google',
      description:'Google Pixelbook Go i5 Chromebook 16GB/128GB Just Black. ',
      price:1024.99,
      imageUrl:'/assets/images/google-laptop.svg'
    },
    {
      altText:'An gigabyte laptop',
      brandName:'Gigabyte',
      description:'GIGABYTE AERO 15S OLED XA-7US5130SP 15" Gaming Laptop Thin',
      price:1024.99,
      imageUrl:'/assets/images/gigabyte.svg'
    }
   ]
}
