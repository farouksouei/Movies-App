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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      inTheaters: false,
      upcomingReleases: false,
      genreId: 0
    });
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
