import { Component, inject } from "@angular/core";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { statusCodes } from "../../constants/status-codes";
import { AxiosError } from "axios";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "../../components/loader/loader.component";

@Component({
    selector:"onboarding",
    templateUrl:"onboarding.component.html",
    styleUrl:"onboarding.component.css",
    imports: [HeaderComponent, FooterComponent, RouterLink, ReactiveFormsModule, CommonModule, LoaderComponent]
})
export class OnboardingComponent {
    constructor(private router: Router) {}
    errorMessage = '';
    currentViewIndex = 1;
    currentScreenIndex = 1;
    loading = false;
    authService = inject(AuthService);
    onboardingFormBuilder = new FormBuilder();
    onboardingForm = this.onboardingFormBuilder.group({
        name: ['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        city:['',[Validators.required]],
        street:['',[Validators.required]]
    });
    get email(){
        return this.onboardingForm.get("email")!;
    }
    get name(){
        return this.onboardingForm.get("name")!;
    }
    get city(){
        return this.onboardingForm.get("city")!;
    }
    get street(){
        return this.onboardingForm.get("street")!;
    }
    showNextView(){
        this.currentViewIndex += 1;
    }
    showNextScreen(){
        this.currentScreenIndex += 1;
    }
    showNextForm(){
        if(this.onboardingForm.valid)
            this.currentViewIndex += 1;
    }
    async completeOnboarding(){
         const onboardingInfo = {
            type:"individual",
            businessInfo:{
                name:this.onboardingForm.value.name as string,
                email:this.onboardingForm.value.email as string,
            },
            address:{
                street:this.onboardingForm.value.street as string,
                city:this.onboardingForm.value.street as string,
                country:"GHANA",
                state:"Greater Accra Region",
                postalCode:"GC-009-1007"
            }
        }
        try{
            this.loading = true;
            const response = await this.authService.onboardIndividual(onboardingInfo);
            if(response.status === statusCodes.CREATED){
                console.log(response.status);
                this.showNextScreen()
            }
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
    cancelOnboarding(){
        this.router.navigate(['/onboarding'])
    }
}