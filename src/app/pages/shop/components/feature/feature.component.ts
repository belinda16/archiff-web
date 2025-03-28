import { Component, Input } from '@angular/core';

@Component({
  selector: 'shop-feature',
  imports: [],
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  @Input() title = "";
  @Input() iconUrl = "";
  @Input() subTitle = "";
  @Input() customStyle!: { [key: string]: string };
}
