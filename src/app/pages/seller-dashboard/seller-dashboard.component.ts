import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink,RouterLinkActive, RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'seller-dashboard',
  imports: [NavbarComponent,RouterLink,RouterLinkActive,RouterOutlet,RouterModule],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.css'
})
export class SellerDashboardComponent {

}
