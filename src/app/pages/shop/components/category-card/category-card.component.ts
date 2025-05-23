import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-card',
  imports: [],
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
  @Input() heading = "";
  @Input() productNumber = 0;
  @Input() images:string[] = [];
}
