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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      inTheaters: false,
      upcomingReleases: false,
      genreId: 0
    });
  }

}
