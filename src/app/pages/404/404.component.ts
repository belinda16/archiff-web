import { Component, ElementRef, ViewChild } from "@angular/core";
import { WaterMarkTextComponent } from "../../components/water-mark-text/water-mark-text.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from "@angular/router";

@Component({
    selector:"not-found",
    templateUrl:"404.component.html",
    imports: [ HeaderComponent, FooterComponent,RouterLink]
})

export class NotFoundComponent{
    ​@ViewChild('videoRef', { static: true }) videoRef!: ElementRef

    ​ngAfterViewInit(): void {
      ​const media = this.videoRef.nativeElement
      ​media.muted = true 
      ​media.play() 
    ​ } 
}