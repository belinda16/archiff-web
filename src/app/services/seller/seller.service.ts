import { inject, Injectable } from "@angular/core";
import { AxiosService } from "../axios/axios.service";

@Injectable({
    providedIn: 'root',
})

export class SellerService {
    private axiosService = inject(AxiosService);
    products(){
        const response = this.axiosService.get('/api/products/seller/products',"seller-products");
        return response;
    }
    deals(){
        const response = this.axiosService.get('/api/seller/product-deals',"product-deals");
        return response;
    }
}