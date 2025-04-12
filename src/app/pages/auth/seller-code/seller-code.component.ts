import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaterMarkTextComponent } from "../../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'login-seller-code',
  imports: [RouterLink, WaterMarkTextComponent, HeaderComponent, FooterComponent],
  templateUrl: './seller-code.component.html',
  styleUrl: './seller-code.component.css'
})
export class LoginSellerCodeComponent {
  loading = false;

}
