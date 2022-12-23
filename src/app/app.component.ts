import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.FutureReleases = [{
      title: 'The Matrix',
      year: 1999,
      rating: 8.7,
      date: new Date(),
      price: 9.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'
    }, {
      title: 'The Matrix Reloaded',
      year: 2003,
      rating: 7.2,
      date: new Date(),
      price: 9.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg'
    }, {
      title: 'The Matrix Revolutions',
      year: 2003,
      rating: 6.7,
      date: new Date(),
      price: 9.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg'
    }];
    this.PastReleases = [{
      title: 'The Matrix',
      year: 1999,
      rating: 8.7,
      date: new Date(),
      price: 9.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'
    }]
  }
  title = 'app';
  FutureReleases:any;
  PastReleases:any;
  name = 'Angular';
  duplicateNumber(number: number): number {
    return number * 2;
  }

  onRatingChangeHandler(rating: number) {
    alert(rating);
  }
}
