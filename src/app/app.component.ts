import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movies = [{
    title: 'The Matrix',
    year: 1999,
    rating: 8.7,
    date: new Date(),
    price: 9.99,
  }, {
    title: 'The Matrix Reloaded',
    year: 2003,
    rating: 7.2,
    date: new Date(),
    price: 9.99,
  },];
  duplicateNumber(number: number): number {
    return number * 2;
  }
}
