import { Component } from "@angular/core";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from "@angular/router";
import { SelectModule } from "primeng/select";

enum BusinessType{
    ONLINE_STORE ="ONLINE_STORE",
    PHYSICAL_STORE = "PHYSICAL_STORE"

}
@Component({
    selector:"businessonboarding",
    templateUrl:"business-onboarding.component.html",
    styleUrl:"business-onboarding.component.css",
    imports: [WaterMarkTextComponent, HeaderComponent, FooterComponent,RouterLink,SelectModule]
})
export class BusinessOnboardingComponent {
    currentViewIndex = 1;
    currentScreenIndex = 1;
    businessAddressLocationVisible = true;
    storeOptions = [
        {
            label:"Online Store",
            value:BusinessType.ONLINE_STORE,
        },
        {
            label:"Physical Store",
            value:BusinessType.PHYSICAL_STORE
        }
    ]

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
}