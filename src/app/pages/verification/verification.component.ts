import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-verification',
  imports: [HeaderComponent, WaterMarkTextComponent, FooterComponent],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  visible: boolean = true;
}
