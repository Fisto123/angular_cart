import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'hin-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  discountedPrice: any;
  itemPrice: any;
  carts!: [];
  @Input() item!: any;
  constructor(private cartservice: CartService) {}
  getPriceDetails(item: any) {
    this.discountedPrice =
      this.cartservice.getPriceDetails(item).discountedPrice;
    this.itemPrice = this.cartservice.getPriceDetails(item).price;
  }
  ngOnInit(): void {
    this.getPriceDetails(this.item);
  }
  handleInc(item: any) {
    this.cartservice.incrementCount(item);
    this.getPriceDetails(item);
  }
  handleDec(item: any) {
    this.cartservice.decrementCount(item);
    this.getPriceDetails(item);
  }
  remove(item: any) {
    this.cartservice.removeItemFromCart(item);
  }
}
