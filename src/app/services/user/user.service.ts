import { inject, Injectable } from "@angular/core";
import { AxiosService } from "../axios/axios.service";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private axiosService = inject(AxiosService);
    editUser(fullName:string,phoneNumber:string){
        const response = this.axiosService.put('/api/user/me',{ fullName, phoneNumber },"edit-user");
        return response;
    }
    getUser(){
        const response = this.axiosService.get('/api/user/me',"fetch-user");
        return response;
    }
}