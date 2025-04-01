import { Component } from '@angular/core';
import { FeatureComponent } from "../feature/feature.component";
import { ShopButtonComponent } from "../../../../components/shop-button/shop-button.component";

@Component({
  selector: 'gadget-section',
  imports: [ FeatureComponent, ShopButtonComponent],
  templateUrl: './gadget-section.component.html',
  styleUrl: './gadget-section.component.css'
})
export class GadgetSectionComponent {

}
