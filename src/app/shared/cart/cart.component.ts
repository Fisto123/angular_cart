import { Component } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'hin-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getAllProducts();
  }
}
