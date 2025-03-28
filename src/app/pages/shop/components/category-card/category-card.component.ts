import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() heading = "";
  @Input() productNumber = 0;
  @Input() images:string[] = [];
}
