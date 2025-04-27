import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/products/products.service';
import { AxiosError } from 'axios';
import { statusCodes } from '../../constants/status-codes';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,ToastModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  providers:[MessageService]
})
export class ProductCardComponent {
  @Input() product:any;
  constructor(private router:Router){
  }
  productService = inject(ProductService);
  messageService = inject(MessageService)
  async viewDeal(productId:string){
    try {
      let response = await this.productService.viewDeal(productId);
      if (response.status === statusCodes.CREATED) {
      this.router.navigate(["product-details", productId]);
      }
    }catch(error){
      if(error instanceof AxiosError && error.response?.status === statusCodes.UNAUTHORIZED){
        this.messageService.add({ severity: 'error', summary: 'Unauthorized', detail: 'You need to login to view this deal' });
        setTimeout(()=>{
            this.router.navigate(['/login']);
        },3000)
      }
    }
  }
}
