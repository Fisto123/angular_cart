import { Component } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'hin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private cartService: CartService,
    private bookservice: BookService
  ) {}
  searchText!: any;
  cartItemCount!: number;

  isSortMenuVisible: boolean = false;
  criteria: any[] = [
    'price(Low to High)',
    'price(High to Low)',
    'Discount(High to Low)',
    'Discount(Low to High)',
  ];
  priceCriteria: any[] = [200, 250, 300, 400];
  isPriceMenuVisible: boolean = false;
  ngOnInit(): void {
    this.cartService.cartSubject.subscribe((cartItems: any) => {
      this.cartItemCount = cartItems.length;
    });
  }
  showSortMenu() {
    this.isSortMenuVisible = !this.isSortMenuVisible;
  }
  showPriceMenu() {
    this.isPriceMenuVisible = !this.isPriceMenuVisible;
  }
  sortBook(criterion: any) {
    this.bookservice.sortBooks(criterion);
  }
  filterBook(price: any) {
    this.bookservice.filterProducts(price);
  }
}
