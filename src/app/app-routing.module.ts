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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies/create', component: CreateMovieComponent},

  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},

  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorsComponent},

  {path: 'movie-theaters', component: IndexMovieTheatersComponent},
  {path: 'movie-theaters/create', component: CreateMovieTheatersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
