import { Component } from '@angular/core';
import { WaterMarkTextComponent } from "../../../../components/water-mark-text/water-mark-text.component";
import { FeatureComponent } from "../feature/feature.component";
import { ShopButtonComponent } from "../../../../components/shop-button/shop-button.component";

@Component({
  selector: 'gadget-section',
  imports: [WaterMarkTextComponent, FeatureComponent, ShopButtonComponent],
  templateUrl: './gadget-section.component.html',
  styleUrl: './gadget-section.component.css'
})
export class GadgetSectionComponent {

}
