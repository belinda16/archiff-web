import { Component } from '@angular/core';
import { FilterButtonComponent } from "../filter-button/filter-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'shop-filter-bar',
  imports: [FilterButtonComponent],
  templateUrl: './shop-filter-bar.component.html',
  styleUrl: './shop-filter-bar.component.css'
})
export class ShopFilterBarComponent {
  constructor(private router:Router){}
  navigate(){
    this.router.navigate(["shop","Electronics"]);
  }
}
