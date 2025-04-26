import { inject, Injectable } from "@angular/core";
import { AxiosService } from "../axios/axios.service";
import { AxiosResponse } from "axios";

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private axiosService = inject(AxiosService);
    getProducts(){
        const response = this.axiosService.get('/api/products',"fetch-produts");
        return response;
    }
    uploadImages(imageFiles:File[]){
        let requests:Promise<AxiosResponse<any,any>>[] = [];
        for(let [index, file] of imageFiles.entries()){
            const formdata = new FormData();
            formdata.append('image',file);
            requests.push(this.axiosService.post('/api/upload/image',formdata,'image-upload'+index));
        }
        const responses = Promise.all(requests);
        return responses;
    }
    likeProduct(productId:string){
        const response = this.axiosService.post(`/api/product/${productId}/like`,"like-produts");
        return response;
    }
    getCategories(){
        const response = this.axiosService.get('/api/categories',"get-Categories");
        return response;
    }
    addProduct(product:any){
        const response = this.axiosService.post(`/api/products`,product,"add-product");
        return response;
    }
}