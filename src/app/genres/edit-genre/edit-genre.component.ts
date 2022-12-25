import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreCreationDTO } from '../genre.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent {
  router: any;
  constructor(private activatedRoute:ActivatedRoute ) { }

  model: GenreCreationDTO = { name: 'Drama' };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  EditGenre(genreCreationDTO: GenreCreationDTO) {
    console.log(genreCreationDTO);
    console.log('Genre edited');
    this.router.navigate(['/genres']);
  }
}
