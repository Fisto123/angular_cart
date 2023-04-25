import { Component } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'hin-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css'],
})
export class PriceDetailsComponent {
  cartItems: any[] = [];
  cartItemsPrice!: number;
  cartItemsDiscount: any;
  deliveryCharge: any;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getAllProducts();
    this.getBillingDetails();
    this.cartService.cartSubject.subscribe((item: any) => {
      console.log(item);

      this.cartItems = item;
      this.getBillingDetails();
    });
  }
  getBillingDetails() {
    let billingDetails = this.cartService.getBilling(this.cartItems);
    this.cartItemsPrice = billingDetails.price;
    this.cartItemsDiscount = billingDetails.discount;
    this.deliveryCharge = billingDetails.delivery;
  }
}
