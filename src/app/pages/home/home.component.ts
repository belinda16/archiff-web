import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, WaterMarkTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
