import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navigation-back-component',
  imports: [],
  templateUrl: './navigation-back-component.component.html',
  styleUrl: './navigation-back-component.component.css'
})
export class NavigationBackComponentComponent {
  @Input() title = '';
  @Input() showDivider = true;
  @Input() customStyles!:{[prop:string]:number|string};

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back(); // Navigates to the previous page
  }
}
