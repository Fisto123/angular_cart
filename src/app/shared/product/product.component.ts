import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { bookModel } from 'src/app/models/bookModel';

@Component({
  selector: 'hin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() book!: any;
  constructor(private cartService: CartService) {}
  isProductInCart: boolean = false;
  addToCart(book: any) {
    this.cartService.addProductToCart(book);
    this.isProductInCart = true;
  }
}
