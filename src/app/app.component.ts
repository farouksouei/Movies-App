import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movie = {
    title: 'The Matrix',
    year: 1999,
    rating: 8.7
  }
  duplicateNumber(number: number): number {
    return number * 2;
  }
}
