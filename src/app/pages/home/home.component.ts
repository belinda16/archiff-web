import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, WaterMarkTextComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
