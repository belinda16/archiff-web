import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FilterButtonComponent } from "../shop/components/filter-button/filter-button.component";
import { ActivatedRoute } from '@angular/router';
import { GadgetSectionComponent } from "../shop/components/gadget-section/gadget-section.component";
import { AboutFooterComponent } from "../../components/about-footer/about-footer.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NewgadgetComponent } from "./components/newgadget/newgadget.component";
import { ComputerAccessoriesComponent } from "./components/computer-accessories/computer-accessories.component";
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";

@Component({
  selector: 'app-categoryselected',
  imports: [NavbarComponent, FilterButtonComponent, GadgetSectionComponent, AboutFooterComponent, FooterComponent, NewgadgetComponent, ComputerAccessoriesComponent, NavigationBackComponentComponent],
  templateUrl: './categoryselected.component.html',
  styleUrl: './categoryselected.component.css'
})
export class CategoryselectedComponent {
  categoryName = ''
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
       const category = params.get('category');
       this.categoryName = category!.charAt(0).toUpperCase() + category?.slice(1);
       
    })
  }
}
