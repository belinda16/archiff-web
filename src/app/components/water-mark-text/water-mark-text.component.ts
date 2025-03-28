import { Component, Input } from '@angular/core';

@Component({
  selector: 'water-mark-text',
  imports: [],
  templateUrl: './water-mark-text.component.html',
})
export class WaterMarkTextComponent {
  @Input() label = "";
  @Input() customStyle!: { [key: string]: string };
}
