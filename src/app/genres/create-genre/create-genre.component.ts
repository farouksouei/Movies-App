import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {

  constructor(private router:Router, private formBuilder: FormBuilder) {

   }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ''
    });
  }

  saveGenre() {
    console.log('Genre saved');
    this.router.navigate(['/genres']);
  }
}
