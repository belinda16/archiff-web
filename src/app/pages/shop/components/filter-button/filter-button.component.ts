import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-button',
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.css'
})
export class FilterButtonComponent {
  @Input() label = "";
}
