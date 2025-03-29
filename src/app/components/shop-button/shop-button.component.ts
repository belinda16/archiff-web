import { Component, Input } from '@angular/core';

@Component({
    selector: 'shop-button',
    templateUrl: './shop-button.component.html',
})
export class ShopButtonComponent {
    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() customStyle!: { [key: string]: string };
    @Input() iconColor = '#ffffff'
    onClick(): void {
       
    }
}