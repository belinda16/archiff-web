import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;


  ngOnInit(): void {
    console.log(this.product.images)
  }


  getFirstImageUrl(images: any[]): string {
    // Check if the images array is not empty and the first image has a valid imageUrl
    if (images && images.length > 0 && images[0].imageUrl) {
      return images[0].imageUrl;
    } else {
      // Return a default URL if no valid imageUrl is found
      return 'assets/images/logo/store-logo-1.svg'; // Replace with your default image URL
    }
  }
}
