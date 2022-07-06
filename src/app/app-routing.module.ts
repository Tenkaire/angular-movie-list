import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id/edit', component: MovieUpdateComponent}, 
  { path: 'detail/:id', component: MovieDetailComponent}, 
  { path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
