import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'filter-button',
  imports: [],
  templateUrl: './filter-button.component.html',
})
export class FilterButtonComponent {
  @Input() label = "";
  constructor(private router:Router){}
  navigate(){
    this.router.navigate(["shop",this.label.toLowerCase()]);
  }
}
