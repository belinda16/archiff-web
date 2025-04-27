import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SellerService } from '../../services/seller/seller.service';

@Component({
  selector: 'app-products',
  imports: [TableModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css','../shared.css']
})
export class ProductsComponent {

  products = [];
  private sellerService = inject(SellerService);  



  async ngOnInit() {
    try {
      this.products = await this.sellerService.products();
      console.log(this.products);
    } catch (error) {
      console.log(error);
    }

  }
}
