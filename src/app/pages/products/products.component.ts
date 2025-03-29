import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-products',
  imports: [TableModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css','../shared.css']
})
export class ProductsComponent {
  products = [
    { name: 'Mac Book Pro', category: 'Electronics', stock: 2, promoStatus: 'Active', promoClass: 'active', createdDate: '21.03.2021' },
    { name: 'Mac Book Pro', category: 'Electronics', stock: 2, promoStatus: 'Cancelled', promoClass: 'cancelled', createdDate: '21.03.2021' },
    { name: 'Mac Book Pro', category: 'Electronics', stock: 2, promoStatus: 'No Promo', promoClass: 'no-promo', createdDate: '21.03.2021' },
  ];
}
