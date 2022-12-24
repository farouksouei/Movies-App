import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie-theaters',
  templateUrl: './create-movie-theaters.component.html',
  styleUrls: ['./create-movie-theaters.component.css']
})
export class CreateMovieTheatersComponent {
  constructor(private router:Router) { }
  saveGenre() {
    console.log('Movie theater saved');
    this.router.navigate(['/movie-theaters']);
  }
}
