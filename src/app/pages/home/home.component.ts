import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 ​@ViewChild('videoRef', { static: true }) videoRef!: ElementRef

  ​ngAfterViewInit(): void {
    ​const media = this.videoRef.nativeElement
    ​media.muted = true 
    ​media.play() 
  ​ } 
}
