import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.movies = []
      //   title: 'The Matrix',
      //   year: 1999,
      //   rating: 8.7,
      //   date: new Date(),
      //   price: 9.99,
      // }, {
      //   title: 'The Matrix Reloaded',
      //   year: 2003,
      //   rating: 7.2,
      //   date: new Date(),
      //   price: 9.99,
      // }, {
      //   title: 'The Matrix Revolutions',
      //   year: 2003,
      //   rating: 6.7,
      //   date: new Date(),
      //   price: 9.99,
      // }];
    },3000);
  }
  title = 'app';
  movies:any;
  duplicateNumber(number: number): number {
    return number * 2;
  }
}
