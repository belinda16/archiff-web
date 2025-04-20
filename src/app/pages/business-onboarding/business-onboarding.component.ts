import { Component, inject } from "@angular/core";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router, RouterLink } from "@angular/router";
import { SelectModule } from "primeng/select";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { Axios, AxiosError } from "axios";
import { CommonModule } from "@angular/common";
import { statusCodes } from "../../constants/status-codes";
import { LoaderComponent } from "../../components/loader/loader.component";

enum BusinessType{
    ONLINE_STORE ="ONLINE_STORE",
    PHYSICAL_STORE = "PHYSICAL_STORE"
}
export interface BusinessOnboardingInfo{ 
    type:string,
    businessInfo:{
        businessName:string|null,
        type:string|null,
        website:string|null,
        phone:string|null,
        email:string|null,
        instagram:string|null
    },
    address:{
        street:string,
        city:string,
        state:string,
        postalCode: string,
        country: string
    }
}
@Component({
    selector:"businessonboarding",
    templateUrl:"business-onboarding.component.html",
    styleUrl:"business-onboarding.component.css",
    imports: [ReactiveFormsModule, HeaderComponent, FooterComponent, RouterLink, SelectModule, CommonModule, LoaderComponent]
})
export class BusinessOnboardingComponent {
    storeOptions = [
        {label:"Online Store",value:BusinessType.ONLINE_STORE},
        {label:"Physical Store",value:BusinessType.PHYSICAL_STORE}
    ]
    currentViewIndex = 1;
    currentScreenIndex = 1;
    businessAddressLocationVisible = true;
    errorMessage = '';
    authService = inject(AuthService);
    loading = false;
    businessForm = new FormGroup({
        name: new FormControl(''),
        type:new FormControl(''),
        website: new FormControl(''),
        street:new FormControl(''),
        city:new FormControl('')
    });
    contactForm = new FormGroup({
        phone: new FormControl(''),
        email:new FormControl(''),
        instagram:new FormControl('')
    })
    async completeOnBoarding(){
        const onboardingInfo:BusinessOnboardingInfo = {
            type:"business",
            businessInfo:{
                businessName:this.businessForm.value.name as string,
                type:"retail",
                website:this.businessForm.value.website as string,
                phone:this.contactForm.value.phone as string,
                email:this.contactForm.value.email as string,
                instagram:this.contactForm.value.instagram as string,
            },
            address:{
                street:this.businessForm.value.street as string,
                city:this.businessForm.value.street as string,
                country:"GHANA",
                state:"Greater Accra Region",
                postalCode:"GC-009-1007"
            }
        }
        try{
            this.loading = true;
            const response = await this.authService.OnboardBusiness(onboardingInfo);
            if(response.status === statusCodes.CREATED){
                this.showNextView()
            }
            console.log(response)
        }catch(error){
            if(error instanceof AxiosError){
                if(error.response?.status === statusCodes.UNAUTHORIZED){
                    console.log(error.response?.data.message);
                    this.errorMessage = "Please sign in to complete onboarding";
                    setTimeout(()=>{
                        this.router.navigate(['/login']);
                    },2000)
                }
            }
        }finally{
            this.loading = false;
        }
        
    }
    constructor(private router: Router) {}

    showNextView(){
        this.currentViewIndex += 1;
    }
    showNextScreen(){
        this.currentScreenIndex += 1;
    }
    changeScreen(viewIndex:number){
        this.currentViewIndex = viewIndex;
    }
    getBusinessType(event:any){
        const businessType = event.value.value;
        if(businessType === BusinessType.PHYSICAL_STORE){
            this.businessAddressLocationVisible = true;
        }else{
            this.businessAddressLocationVisible = false;
        }
    }
    cancelOnboarding(){
        this.router.navigate(['/onboarding'])
    }
    showPreviousView(){
        if(this.currentViewIndex === 2)
            this.currentViewIndex--;
    }
}