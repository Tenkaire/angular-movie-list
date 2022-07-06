import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    DashboardComponent,
    MovieSearchComponent,
    MovieFormComponent,
    HeaderComponent,
    FooterComponent,
    MovieUpdateComponent,
    AboutMeComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    MatNativeDateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatCardModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
