import { GenreCreationDTO } from './../genre.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {

  constructor(private router:Router) {

   }


  ngOnInit(): void {
  }

  saveGenre(GenreCreationDTO: GenreCreationDTO) {
    console.log('Genre saved');
    console.log(GenreCreationDTO);
    this.router.navigate(['/genres']);
  }
}
