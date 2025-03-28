import { Component } from '@angular/core';
import { categories } from '../../../../data/data';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { WaterMarkTextComponent } from "../../../../components/water-mark-text/water-mark-text.component";

@Component({
  selector: 'categories-section',
  imports: [CategoryCardComponent, WaterMarkTextComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent {
  data = categories
}
