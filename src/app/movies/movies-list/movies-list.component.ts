import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input()
  movies:any;

  Remove(index:number) {
    this.movies.splice(index, 1);

  }
}
