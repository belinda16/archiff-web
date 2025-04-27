import { Component, inject } from '@angular/core';
import { TableModule } from "primeng/table"
import { SellerService } from '../../services/seller/seller.service';
@Component({
  selector: 'app-offers',
  imports: [TableModule],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css', '../shared.css']
})
export class OffersComponent {
  deals = []
  private sellerService = inject(SellerService);
  offers = [
    { offer: 'Analysis Name', option1: 'Comparable', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Startup recurring liquidity calculator', option1: 'Merger', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Asset Allocation', option1: 'Comparable', option2: 'Internet Services', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Analysis Name', option1: 'Comparable', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Startup recurring liquidity calculator', option1: 'Merger', option2: 'Bank', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
    { offer: 'Asset Allocation', option1: 'Comparable', option2: 'Internet Services', option3: 'John Smith', date: '21.03.2021', contact: 'Contact info' },
  ];

  async ngOnInit() {
    try {
      this.deals = await this.sellerService.deals();
      console.log(this.deals);
    } catch (error) {
      console.log(error);
    }

  }
}
