import { Component } from '@angular/core';
import { WaterMarkTextComponent } from '../../components/water-mark-text/water-mark-text.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-code',
  imports: [HeaderComponent, WaterMarkTextComponent, FooterComponent,RouterLink],
  templateUrl: './seller-code.component.html',
  styleUrl: './seller-code.component.css'
})
export class SellerCodeComponent {
  loading = false;
  currentViewIndex = 1;
  currentScreenIndex = 1;

  showNextView(){
      this.currentViewIndex += 1;
  }
  showNextScreen(){
      this.currentScreenIndex += 1;
  }

}
