import { Component } from '@angular/core';
import { WaterMarkTextComponent } from "../../../../components/water-mark-text/water-mark-text.component";
import { FeatureComponent } from "../feature/feature.component";

@Component({
  selector: 'gadget-section',
  imports: [WaterMarkTextComponent, FeatureComponent],
  templateUrl: './gadget-section.component.html',
  styleUrl: './gadget-section.component.css'
})
export class GadgetSectionComponent {

}
