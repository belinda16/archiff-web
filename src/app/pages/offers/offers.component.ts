import { Component } from '@angular/core';
import {TableModule} from "primeng/table"
@Component({
  selector: 'app-offers',
  imports: [TableModule],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css','../shared.css']
})
export class OffersComponent {
  offers = [
    { offer: 'Analysis Name', option1: 'Comparable', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Startup recurring liquidity calculator', option1: 'Merger', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Asset Allocation', option1: 'Comparable', option2: 'Internet Services', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Analysis Name', option1: 'Comparable', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Startup recurring liquidity calculator', option1: 'Merger', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Asset Allocation', option1: 'Comparable', option2: 'Internet Services', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
  ];
}
