import { Component } from '@angular/core';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'hin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  books: any;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data: any) => {
      this.books = data;
    
    });
  }
}
