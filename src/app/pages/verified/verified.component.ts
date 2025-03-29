import { Component } from '@angular/core';
import { WaterMarkTextComponent } from '../../components/water-mark-text/water-mark-text.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-verified',
  imports: [HeaderComponent, WaterMarkTextComponent, FooterComponent],
  templateUrl: './verified.component.html',
  styleUrl: './verified.component.css'
})
export class VerifiedComponent {

}
