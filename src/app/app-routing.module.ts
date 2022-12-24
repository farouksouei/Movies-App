import { EditMovieTheatersComponent } from './movie-theaters/edit-movie-theaters/edit-movie-theaters.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { CreateMovieTheatersComponent } from './movie-theaters/create-movie-theaters/create-movie-theaters.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},

  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},

  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorsComponent},
  {path: 'actors/edit/:id', component: EditActorsComponent},

  {path: 'movie-theaters', component: IndexMovieTheatersComponent},
  {path: 'movie-theaters/create', component: CreateMovieTheatersComponent},
  {path: 'movie-theaters/edit/:id', component: EditMovieTheatersComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
