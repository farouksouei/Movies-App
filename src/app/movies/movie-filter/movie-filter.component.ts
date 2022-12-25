import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {

  constructor(private formBuilder:FormBuilder) { }

  form!: FormGroup;

  genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Thriller' }
  ];

  movies = [
    {
      title:"matrix",
      inTheaters:false,
      upcomingReleases:false,
      genreIds:[1,2,3],
      releaseDate:new Date(),
      poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    },
    {
      title:"matrix Reloaded",
      inTheaters:true,
      upcomingReleases:false,
      genreIds:[1,2,3],
      releaseDate:new Date(),
      poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    },
    {
      title:"matrix Revolutions",
      inTheaters:false,
      upcomingReleases:true,
      genreIds:[1,2,3],
      releaseDate:new Date(),
      poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    },
  ]

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      inTheaters: false,
      upcomingReleases: false,
      genreId: 0
    });

    this.form.valueChanges.subscribe(values => {
      this.movies = this.originalMovies;
      this.filterResults(values);
    });
  }

  filterResults(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }

    if (values.inTheaters) {
      this.movies = this.movies.filter(movie => movie.inTheaters);
    }

    if (values.upcomingReleases) {
      this.movies = this.movies.filter(movie => movie.upcomingReleases);
    }

  }

  cleanForm() {
    this.form.reset({
      title: '',
      inTheaters: false,
      upcomingReleases: false,
      genreId: 0
    });
  }

}
