import { Component, Input } from '@angular/core';
import { FilterButtonComponent } from "../../pages/shop/components/filter-button/filter-button.component";

@Component({
  selector: 'category-filter-bar',
  imports: [FilterButtonComponent],
  templateUrl: './category-filter-bar.component.html',
  styleUrl: './category-filter-bar.component.css'
})
export class CategoryFilterBarComponent {
  @Input() categoryLabel = ''
}
