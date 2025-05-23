import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'shop-button',
    templateUrl: './shop-button.component.html',
    imports:[RouterLink]
})
export class ShopButtonComponent {
    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() customStyle!: { [key: string]: string };
    @Input() iconColor = '#ffffff'
    onClick(): void {
       
    }
}