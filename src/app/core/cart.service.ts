import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: any[] = [];
  cartSubject = new Subject();

  constructor() {}
  addProductToCart(product: any) {
    let currentBook = { ...product, counter: 1 };
    this.cartProducts.push(currentBook);
    this.cartSubject.next(this.cartProducts);
  }
  getAllProducts() {
    return this.cartProducts;
  }
  getPriceDetails(product: any) {
    let priceDetails = {
      discountedPrice:
        product.price * product.counter -
        (product.discount / 100) * (product.price * product.counter),
      price: product.price * product.counter,
    };
    return priceDetails;
  }
  incrementCount(product: any) {
    let index = this.cartProducts.findIndex((item) => {
      return item.id === product.id;
    });
    this.cartProducts[index].counter++;
    this.getPriceDetails(product);
    this.cartSubject.next(this.cartProducts);
  }
  decrementCount(product: any) {
    let index = this.cartProducts.findIndex((item) => {
      return item.id === product.id;
    });
    this.cartProducts[index].counter--;
    this.getPriceDetails(product);
    this.cartSubject.next(this.cartProducts);
  }
  removeItemFromCart(product: any) {
    let index = this.cartProducts.findIndex((item) => {
      return item.id === product.id;
    });
    this.cartProducts.splice(index, 1);
  }
  getBilling(cartItems: any) {
    let billingDetails = {
      price: 0,
      discount: 0,
      delivery: 0,
    };
    cartItems.forEach((item: any) => {
      billingDetails.price += item.price * item.counter;
      billingDetails.discount +=
        (item.discount / 100) * item.price * item.counter;
      billingDetails.price <= 1500
        ? (billingDetails.delivery = 0)
        : (billingDetails.delivery = 50);
    });
    return billingDetails;
  }
}
