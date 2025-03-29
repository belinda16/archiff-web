import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'filter-button',
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.css'
})
export class FilterButtonComponent {
  @Input() label = "";
  constructor(private router:Router){}
  navigate(){
    console.log("navigate");
    this.router.navigate(["shop",this.label.toLowerCase()]);
  }
}
