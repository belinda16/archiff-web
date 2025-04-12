import { Component } from "@angular/core";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from "@angular/router";

@Component({
    selector:"onboarding",
    templateUrl:"onboarding.component.html",
    styleUrl:"onboarding.component.css",
    imports: [WaterMarkTextComponent, HeaderComponent, FooterComponent,RouterLink]
})
export class OnboardingComponent {
    currentViewIndex = 1;
    currentScreenIndex = 1;

    showNextView(){
        this.currentViewIndex += 1;
    }
    showNextScreen(){
        this.currentScreenIndex += 1;
    }
    changeScreen(viewIndex:number){
        this.currentViewIndex = viewIndex;
    }
}