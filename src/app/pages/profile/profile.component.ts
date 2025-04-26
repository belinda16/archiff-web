import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {TabsModule} from "primeng/tabs"
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { ShippingAddressCard } from "../../components/shipping-address-card/shipping-address-card.component";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { statusCodes } from '../../constants/status-codes';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AxiosError } from 'axios';
import { LoaderComponent } from "../../components/loader/loader.component";

export interface User{
  fullName:string,
  email:string,

}
@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, ToastModule, TabsModule, NavigationBackComponentComponent, ShippingAddressCard, CommonModule, FormsModule, LoaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers:[MessageService]
})
export class ProfileComponent {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private messageService = inject(MessageService);
  disableInput = true;
  loading=false;
  phoneNumber="";
  fullName="";
  email = ""
  user!:User; 
  async ngOnInit(){
    const user = await this.userService.getUser();
    this.fullName = user.fullName;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email
  }
  constructor(private router: Router) {
    if(!this.authService.isAuthenticated){
      this,router.navigate(['login'])
    }
  }
  async editUser(){
    if(this.disableInput === false){
        this.submitUserInfo();
    }else if(this.disableInput === true){
      this.disableInput = false;
      setTimeout(() => {
        const fullnameInput = document.querySelector("#fullname") as HTMLInputElement;
        if (fullnameInput) {
          fullnameInput.focus();
        }
      });
    }
    else{
      this.disableInput = true;
    }
  }
  async submitUserInfo(){
    try{
      this.loading = true;
      const response = await this.userService.editUser(this.fullName,this.phoneNumber);
      if(response.status === statusCodes.OK && response.data.success){
        this.messageService.add({ severity: 'success', summary: 'Edit User', detail: 'Your information has been updated successfully' });
      } 
    }catch(error){
        if (error instanceof AxiosError) {
          this.messageService.add({severity:"error",summary:"Edit User",detail:error.response?.data.message})
        }
    }finally{
      this.loading = false;
      this.disableInput = true;
    }
  }
}
