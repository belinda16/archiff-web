import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    standalone:true,
    imports:[CommonModule]
})
export class LoaderComponent {
   @Input({required:true}) loading = false;
}