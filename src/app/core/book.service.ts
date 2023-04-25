import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl: string = 'http://localhost:3000/books';
  books!: any;
  constructor(private http: HttpClient) {}
  // sortCriterion: any;
  //sortSubject = new Subject();
  sortedBooks: any;
  filteredBooks!: any[];
  // getAllBooks(): Observable<any> {
  //   return this.http.get<any>(this.baseUrl);
  // }
  getAllBooks() {
    return this.http.get(this.baseUrl).pipe(
      map((book: any) => {
        this.books = book;
        this.sortedBooks = this.books;
        this.filteredBooks = this.books;

        return book;
      })
    );
  }

  // getSortCriterion(criterion: any) {
  //   this.sortCriterion = criterion;
  //   this.sortSubject.next(this.sortCriterion);
  // }
  sortBooks(criteria: any) {
    switch (criteria) {
      case 'price(Low to High)':
        this.sortedBooks.sort((a: any, b: any) => a.price - b.price);
        break;
      case 'price(High to Low)':
        this.sortedBooks.sort((a: any, b: any) => b.price - a.price);
        break;

      default:
        break;
    }

    return this.sortedBooks;
  }

  filterProducts(price: any) {
    this.filteredBooks = this.filteredBooks.filter(
      (x: any) => x.price <= price
    );
    this.filteredBooks = this.filteredBooks;
    console.log(this.filteredBooks);

    return this.filteredBooks;
  }
}
