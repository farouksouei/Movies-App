import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres', component: IndexGenresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
