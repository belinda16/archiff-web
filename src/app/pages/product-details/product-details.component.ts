import { Component, inject, Input } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { InputNumberModule } from 'primeng/inputnumber';
import { TabsModule } from 'primeng/tabs';
import { GadgetSectionComponent } from "../shop/components/gadget-section/gadget-section.component";
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CategoryFilterBarComponent } from "../../components/category-filter-bar/category-filter-bar.component";
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/products/products.service';
import { statusCodes } from '../../constants/status-codes';
import { AxiosError } from 'axios';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  imports: [NavbarComponent, InputNumberModule, TabsModule, GadgetSectionComponent, AboutFooterComponent, FooterComponent, CategoryFilterBarComponent,RouterLink,NavigationBackComponentComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers:[MessageService]
})
export class ProductDetailsComponent {
  @Input() categoryLabel = 'Electronics';
  private productService = inject(ProductService);
  private messageService = inject(MessageService);
  private productId = "";
  product:any;
  constructor(private route: ActivatedRoute) {}

  async ngOnInit(){
    this.productId = this.route.snapshot.paramMap.get('productId')!;
    await this.getProductDetails();
  }
  async getProductDetails(){
    try {
          let response = await this.productService.getProductDetails(this.productId);
          this.product = response;
        }catch(error){
          if(error instanceof AxiosError && error.response?.status === statusCodes.NOT_FOUND){
            this.messageService.add({ severity: 'error', summary: 'Not found', detail: 'Selected product no found' });
          }
        }
  }
}
// {
//   "id": "391ed731-63f5-4c1a-8f61-55f277b85e94",
//   "title": "Samsung Smart TV 55-inch",
//   "description": "Crystal UHD 4K Smart TV with HDR and voice control",
//   "price": "899.99",
//   "dynamicFields": null,
//   "publishingStatus": "draft",
//   "soldStatus": "available",
//   "productType": null,
//   "createdAt": "2025-04-25T17:52:21.881Z",
//   "updatedAt": "2025-04-25T17:52:21.881Z",
//   "images": [
//       {
//           "id": "f0add203-ab8a-4e5e-b224-b07204d8016a",
//           "imageUrl": "https://storage.googleapis.com/archif-3f278.firebasestorage.app/33149051-f137-4de8-98d0-baa6512aa570-Screenshot 2023-01-06 at 12.22.55 PM.png",
//           "createdAt": "2025-04-25T17:52:22.499Z"
//       },
//       {
//           "id": "1dd85978-03b6-44fb-97db-4fadbf45e84d",
//           "imageUrl": "https://storage.googleapis.com/archif-3f278.firebasestorage.app/33149051-f137-4de8-98d0-baa6512aa570-Screenshot 2023-01-06 at 12.22.55 PM.png",
//           "createdAt": "2025-04-25T17:52:22.499Z"
//       }
//   ],
//   "category": {
//       "id": 1,
//       "name": "Electronics",
//       "imageUrl": "https://example.com/images/electronics.jpg",
//       "dynamicFields": [
//           {
//               "name": "brand",
//               "type": "string"
//           },
//           {
//               "name": "model",
//               "type": "string"
//           },
//           {
//               "name": "powerType",
//               "type": "string"
//           },
//           {
//               "name": "warranty",
//               "type": "string"
//           },
//           {
//               "name": "color",
//               "type": "string"
//           }
//       ],
//       "productTypes": [
//           "Phone",
//           "Laptop",
//           "Tablet",
//           "TV",
//           "Smartwatch",
//           "Camera"
//       ],
//       "createdAt": "2025-04-25T16:40:50.464Z"
//   },
//   "seller": null
// }