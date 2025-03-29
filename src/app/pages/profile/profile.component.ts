import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {TabsModule} from "primeng/tabs"
@Component({
  selector: 'app-profile',
  imports: [NavbarComponent,TabsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
